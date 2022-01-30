单细胞分析的源代码与学习笔记



# 1. 张泽民lab
> Science | **Pan-cancer single-cell landscape of tumor-infiltrating T cells**
> Science. 2021 Dec 17;374(6574):abe6474. doi: 10.1126/science.abe6474. Epub 2021 Dec 17.
> RESEARCH ARTICLE | CANCER IMMUNOLOGY
> https://pubmed.ncbi.nlm.nih.gov/34914499/
> https://www.science.org/doi/10.1126/science.abe6474?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed#pill-R48
> 代码: https://zenodo.org/record/5461803#.YcBDGWhByUk
> Local location: Y station /home/wangjl/data/web/docs/codes/code
> Local web: http://y.biomooc.com:8000/list?fpath=./codes/code/



## Figs
- Fig. 1. Pan-cancer T cell profile at the single-cell resolution. 
- Fig. 2. Heterogeneity and dynamics of CD8+ exhausted T cells.
- Fig. 3. Properties of potentially tumor-reactive CD4+ T cells.
- Fig. 4. TME shaping the landscape of tumor-infiltrating T cells.
- Fig. 5. Immune types of pan-cancer defined by the T cell composition.



## 使用 已有Seurat 对象查询映射
```
$ less w.step2.FigureS17.CD8_ISG_mapping.R

## 1. tidy inputs
### ref
mat_ref = assay(sce_ref, "exprs")
meta_ref = as.data.frame(colData(sce_ref))
meta_ref = meta_ref[,!grepl("^RNA_",colnames(meta_ref))]
seu_ref = CreateSeuratObject(mat_ref, project="ref", meta.data=meta_ref)
seu_ref = SetAssayData(seu_ref, "scale.data", mat_ref)

seu_ref = RunPCA(seu_ref, features=gene_used, npcs=15, verbose=F)
seu_ref = RunUMAP(seu_ref, reduction="pca",dims=1:15, return.model=T)
seu_ref = RunHarmony(seu_ref, c("dataset"))
seu_ref = RunUMAP(seu_ref, reduction="harmony", reduction.name="harmony.umap", dims=1:15, return.model=T)

### query
sce_qry = sce_all[,as.character(sce_all$meta.cluster)=="CD8.c15.ISG.IFIT1"]
mat_qry = assay(sce_qry, "exprs")
meta_qry = as.data.frame(colData(sce_qry))
meta_qry = meta_qry[,!grepl("^RNA_",colnames(meta_qry))]
seu_qry = CreateSeuratObject(mat_qry, project="ref", meta.data=meta_qry)
seu_qry = SetAssayData(seu_qry, "scale.data", mat_qry)


## 2. projection
anchors = FindTransferAnchors(reference=seu_ref, query=seu_qry, reduction="pcaproject", reference.reduction="pca", dims=1:15, features=gene_used) 

seu_qry = TransferData(anchorset=anchors, reference=seu_ref, query=seu_qry, refdata="meta.cluster", dims=1:15)
seu_qry = IntegrateEmbeddings(anchorset=anchors, reference=seu_ref, query=seu_qry, new.reduction.name="ref.pca", dims.to.integrate=1:15)
seu_qry = ProjectUMAP(query=seu_qry, query.reduction="ref.pca", query.dims=1:15, reference=seu_ref, reference.reduction="pca", reference.dims=1:15, reduction.model="harmony.umap")

save(seu_qry, meta_qry, anchors, colSet, file=sprintf("%s/%s_ISG.mapping.Rdata", oDir, stype))
#load(sprintf("%s/%s_ISG.mapping.Rdata", oDir, stype))

## 3.plot
### tidy
nam.conv = fread(sprintf("%s/../../data/metaInfo/name.conversion.txt",oDir),sep="\t",stringsAsFactors=F,header=T)
nam.conv = as.data.frame(nam.conv)
rownames(nam.conv) = nam.conv$meta.cluster
seu_qry$predicted.cluster.name = nam.conv[as.character(seu_qry$predicted.id),"cluster.name"]
#
seu_qry$predicted.cluster.name = ifelse(seu_qry$predicted.id.score > 0.5, as.character(seu_qry$predicted.cluster.name), "belowThres")
seu_qry_flt = seu_qry[,seu_qry$predicted.cluster.name!="belowThres"]


### stat
pdat = as.data.frame(table(seu_qry$predicted.cluster.name))
colnames(pdat)[1] = "predicted.cluster.name"
pdat$Percent = pdat$Freq / sum(pdat$Freq) * 100
pdat = arrange(pdat, desc(pdat$Freq))

orders = c(as.character(pdat$predicted.cluster.name)[as.character(pdat$predicted.cluster.name)!="belowThres"], "belowThres")
pdat$predicted.cluster.name = factor(as.character(pdat$predicted.cluster.name), levels=orders)

pdat$group = ifelse(as.character(pdat$predicted.cluster.name)=="belowThres", "bad", "good")
colors = structure(c("#D3D3D3","#459F7E"), names=c("bad", "good"))

p = ggplot(pdat, aes(x=predicted.cluster.name, y=Percent, fill=group)) +
                        geom_bar(stat="identity", position="stack", width=0.8) +
                        theme_classic() +
                        theme(axis.text.x=element_text(size=8, vjust=1.0, hjust=1.1, angle=60),
                                        plot.margin=margin(t=1, r=2, b=1, l=2, unit="cm"),
                                        legend.position="none",
                                        legend.text=element_text(size=8)) +
                                                scale_fill_manual(values=colors) +
                                                xlab("Predicted labels for ISG+ cells")
ggsave(p, file=sprintf("%s/%s_ISG.mapping.stat.pdf", oDir, stype), height=3.5, width=5)

### umap with ref
tmp1 = cbind(data.frame(Embeddings(seu_qry_flt, "ref.umap")), seu_qry_flt$predicted.cluster.name)
tmp2 = cbind(data.frame(reducedDim(sce_ref, "recal.harmony.umap")), "ref cells")
colnames(tmp1) = c("ref_UMAP1","ref_UMAP2","group")
colnames(tmp2) = c("ref_UMAP1","ref_UMAP2","group")
dat = rbind(tmp1, tmp2)
dat$group = factor(as.character(dat$group), levels=c("Tn", "IL7R+ Tm", "GZMK+ early Tem", "GZMK+ Tem", "GZMK+ Tex",
                                                                           "ZNF683+CXCR6+ Trm", "terminal Tex","ref cells"))

colors = c(colSet$cluster.name.short.CD8, "lightgrey")
names(colors)[length(colors)] = "ref cells"

p = ggplot(dat[as.character(dat$group)!="ref cells",], aes(x=ref_UMAP1, y=ref_UMAP2, color=group)) + 
                geom_point(dat=dat[as.character(dat$group)=="ref cells",],size=0.7, shape=16) +
                geom_point(size=0.7, shape=16) +
                theme_classic2() +
                scale_color_manual(values=colors[unique(as.character(dat$group))]) +
                guides(color=guide_legend(override.aes=list(size=3))) +
                theme(axis.text=element_text(size=10), axis.title=element_text(size=12),plot.title=element_text(size=14)) +
                coord_fixed(ratio=1, xlim=c(-10, 10),ylim = c(-10, 10),expand=F) +
                ggtitle("Predicted labels for ISG+ cells")
print(p)
ggsave(p, file=sprintf("%s/%s_ISG.mapping.umap.pdf",oDir, stype), width=5.5, height=8, useDingbats=F)
```









# 带聚类的 dotplot怎么画？
> https://github.com/ajwilk/2020_Wilk_COVID
> https://www.jianshu.com/p/180cc2f03869
> https://www.jianshu.com/p/f2dc83940954
> aplot包：让你画出更复杂的图 https://mp.weixin.qq.com/s/XVl2MoOsT7pB1wNJmltoVw





