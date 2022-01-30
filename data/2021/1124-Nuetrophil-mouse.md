1124-Nuetrophil-mouse.md

mouse 中性粒 单细胞 测序分析，典型文章预览。

# 1. (2020 Cell) Co-option of neutrophil fates by tissue environment
> 单位 1Area of Cell & Developmental Biology, Centro Nacional de Investigaciones Cardiovasculares Carlos III, Madrid 28029, Spain
> 多个组织: 皮肤Skin、肠道Itestine、肺Lung、肝脏Liver、骨髓Bone marrow。


## Highlights
- Neutrophils have variable lifetimes in tissues
- Neutrophils acquire distinct phenotypic and functional properties in tissues
- Tissue-derived signals drive rapid adaptation of neutrophils
- Neutrophil reprogramming in the lungs occurs in CXCL12+ niches


### Fig S2
(A) Heatmap depicting the scaled expression of the 39 surface markers analyzed by **mass cytometric analyses** in neutrophils from the different tissues, with the dominant clusters shown at right. 
(B) tSNE visualization of tissue neutrophils colored by their tissue of origin (right) and scaled expression of selected markers (left). 
![1124-neutrophil_tissues.png](/data/2021/images/11/1124-neutrophil_tissues.png)





## SUMMARY
中性粒通常被认为是短命的、纯防御的白细胞，中性粒细胞对刺激的快速和可塑反应是独一无二的。
Classically considered short-lived and purely defensive leukocytes, neutrophils are unique in their fast and moldable response to stimulation. 

可塑性在发炎和肿瘤下会有不同的表现，但是它们进入健康组织的情况还未知。
This plastic behavior may underlie variable and even antagonistic functions during inflammation or cancer, yet the full spectrum of neutrophil properties as they enter healthy tissues remains unexplored. 

不同组织，中性粒细胞寿命不同。
Using a new model to track neutrophil fates, we found short but variable lifetimes
across multiple tissues. 

通过分析受体、转录本、染色质可及性地图，我们识别了中性粒的状态，以及非传统功能，包括血管修复、造血体内平衡。
Through analysis of the receptor, transcriptional, and chromatin accessibility landscapes, we identify varying neutrophil states and assign non-canonical functions, including vascular repair
and hematopoietic homeostasis. 

同时，删除中性粒细胞会削弱早期造血、基因毒性损伤、病毒感染，并损害放疗后的造血恢复。
Accordingly, depletion of neutrophils compromised angiogenesis during early age, genotoxic injury, and viral infection, and impaired hematopoietic recovery after irradiation. 

嗜中性粒细胞在靶组织中获得了这些特性，在肺中，这一过程发生在富含cxcl12的区域，并依赖于CXCR4。
Neutrophils acquired these properties in target tissues, a process that, in the lungs, occurred in CXCL12-rich areas and relied on CXCR4. 

我们的结果显示，组织共存的中性粒细胞在途清除，来诱导支持生理需求的过程。
Our results reveal that tissues co-opt neutrophils en route for elimination to induce programs that support their physiological demands.




## 重要的生信步骤

### 单细胞分析
- For each sample, cells expressing less than 300 unique genes and genes expressed in less than 3 cells were discarded. 
- Raw counts were then merged (resulting in 15,636 genes per 27,939 cells) and normalized using the Seurat function SCTransform after removing cells having more than 4% mitochondrial genes. 
- The input gene expression matrix for the normalization was composed by 15,636 genes and 26,271 cells. 
- During the normalization, the confounding sources of variation i.e., the mitochondrial mapping percentage, the S and G2M scores and the difference between them were removed.
- Cell cycle scores were calculated using CellCycleScoring function.
- The number of variable features in the SCTransform function after ranking by residual variance was set to 1000. During the normalization, 819 genes were automatically removed because expressed in less than 3 cells independently from the overall counts leading to retain 14,817 total genes. 
- Expression data were than scaled using ScaleData function regressing on S and G2M scores. 
- Graphbased clustering: most variable genes across the merged dataset (i.e., the highly variable genes) were identified based on the highest standardized variance. The procedure is implemented in the FindVariableFeatures function with method = ‘‘vst.’’ 
- A total number of 1000 genes was selected as top variable features and used to perform the PCA dimensionality reduction. 
- A KNN graph based on the euclidean distance in the 50 PCs space was constructed using the FindNeighbors function.


### **免疫细胞的marker**
Gene signatures for different cell type populations: Cells were classified according to gene signatures derived from published RNASeq analyses of myeloid cells. 


下载5种细胞，单个类和其余的比，选择显著的FC前200个，最后4个list（注：应该是5）的交集作为指纹。
- Briefly, we downloaded expression data from Immgen RNA-Seq dataset (https://www.immgen.org/).
- For each cell type (**Neutrophils, Dendritic cells, NK cells, T cells and B cells**) we extracted genes being differential in all pairwise comparisons with other cell types using glmFit and glmLRT functions from edgeR R package as described above. 
- For each comparison, genes were called significant at FDR < 1e-4 and the top 200 ranked for decreasing fold change were selected. 
- The final gene signature defining each cell type was the intersection of the resulting 4 lists.

As **monocytes** were not included in Immgen dataset, we downloaded monocytes data from (Mildner et al., 2017) and calculated DEGs with edgeR (Robinson et al., 2010) as above. We retained the top 5 genes, ranked by decreasing fold change, defining classical and non-classical Monocytes. 

Macrophages included in Immgen dataset were from peritoneal cavity, hence we used signature defined in (Lavin et al., 2017) for macrophages from spleen. 

Once classified, we isolated the cells classified as neutrophils and performed a new normalization, scaling and clustering with a resolution of 0.1, using the shared nearest neighbor (SNN) method implemented in Seurat, and also a new tSNE. 

在亚类和组织之间做差异表达分析。
We performed differential expression analysis based on both the obtained **clusters and the tissues**. 

We also downloaded and analyzed data from (Zilionis et al., 2019). 

We isolated neutrophils from healthy and tumoral lung tissue. We processed the reads with the standard normalization pipeline from Seurat and performed a clustering with 0.5 resolution.

---
差异基因的筛选，至少在一类中表达25%，然后差异0.25倍以上(0.5^0.25=0.840, 2^0.25=1.189)的才做test。
For all **differential expression analyses**, only the genes detected in a minimum percentage of 25% of the cells in either of the two populations were reported and the testing was limited to genes which showed, on average, at least 0.25-fold difference (log-scale) between the two groups of cells. 

每个细胞的组织打分，通过bulk数据获得的组织指纹。
The tissue scores for each cell in the single cell dataset were obtained from the tissue signatures from the bulk RNA-seq data.



### 前体细胞score
To mark progenitor cells, we created a signature made of genes from four different studies. As these studies used different nomenclatures for their neutrophil progenitor populations, we chose genes associated with early stages in each. We selected 
- the **GMP, proNeu and preNeu genes** from (Evrard et al., 2018; Kwok et al., 2020); 
- the **Early and late-stage progenitor genes** from (Zhu et al., 2018) and
- the **Neu progenitor genes** from (Kim et al., 2017). 


### 生成血管score
For the pro-angiogenic score, we downloaded all the genes annotated under the ‘‘Angiogenesis’’ GO category keeping for the signature only those with experimental evidence or high throughput evidence and discarding the genes related to ‘‘negative regulation.’’ Gene are listed in Table S5.


All the scores are calculated dividing the total amount of transcripts belonging to genes from a particular signature by the total transcripts of the cell and by the number of genes in the signature. 

The diffusion map was obtained with the Seurat suite with 1000 nearest neighbors.

找到正文：A diffusion map of the neutrophil single-cell transcriptomes also supported a continuous cell-state transition from the BM and spleen to the blood, and finally to the lung (Figure S2M).
![1124-diffusion_map.png](/data/2021/images/11/1124-diffusion_map.png)

https://www.immgen.org/Databrowser19/DatabrowserPage.html


### gene list 热图

1. Fig. S5 (A) Scaled expression of selected genes associated with proliferation and differentiation from the bulk RNA-seq analysis.
![1124-proliferation.png](/data/2021/images/11/1124-proliferation.png)



2. Fig. S5 (G) Heatmap showing scaled expression of selected angiocrine factors in tissue neutrophils, as determined by bulk RNA-sequencing.
![1124_Hematopoiesis.png](/data/2021/images/11/1124_Hematopoiesis.png)

### neu成熟度打分
Consistent with the maturational changes across clusters, the gene signature of immature
granulocyte-macrophage progenitors (GMPs) projected in cluster 0, while the more committed proNeu and preNeu signatures (Evrard et al., 2018; Kwok et al., 2020) appeared in the transition from cluster 0 to 1 (Figures S2J–S2L).



## dataset
All the omics data is available as a super-series in GEO under the accession number GSE143255.
- Tissue leukocyte cells scRNaseq data: GSE142754.  组织中的白细胞(sc)
- Tissue neutrophils bulk RNaseq data from parabiosis:GSE141745. 组织中性粒bulk。
- Germ free and SPF tissue neutrophils bulk RNaseq data: GSE142432. GF和SPF中性粒bulk
- Tissue neutrophils ATACseq data: GSE141285. 组织中性粒ATAC-seq。












# (2020 nature immunology) Single-cell transcriptome profiling reveals neutrophil heterogeneity in homeostasis and infection

> https://pubmed.ncbi.nlm.nih.gov/32719519/
> https://www.nature.com/articles/s41590-020-0736-z#data-availability


静态和感染状态，中性粒的异质性。
从mouse分离：骨髓BM、外周血PB、脾脏SP。


## abstract

中性粒细胞的异质性还不是完全明白。
The full neutrophil heterogeneity and differentiation landscape remains incompletely characterized. 

mouse 分化和成熟的中性粒细胞 25k 个，提供一个中性粒在稳定状态和病菌感染过程中成熟、功能、命运决定图谱。
Here, we profiled >25,000 differentiating and mature mouse neutrophils using single-cell RNA sequencing to provide a comprehensive transcriptional landscape of neutrophil maturation, function and fate decision in their steady state and during bacterial infection. 

通过不同的分子指纹定义了8个亚类。
Eight neutrophil populations were defined by distinct molecular signatures. 

3个成熟的外周血中性粒细胞亚群，起源于不同的成熟骨髓中性粒亚群。
The three mature peripheral blood neutrophil subsets arise from distinct maturing bone marrow neutrophil subsets. 

被已知和未知的TF驱动，中性粒细胞渐渐获得杀死微生物的能力，当他们traverse转录图谱时，代表一种进化的、可调节的有效、均衡的响应。
Driven by both known and uncharacterized transcription factors, neutrophils gradually acquire microbicidal capability as they traverse the transcriptional landscape, representing an evolved mechanism for fine-tuned regulation of an effective but balanced neutrophil response. 

细菌感染重编程中性粒群体的基因结构，改变亚群之间的动态过渡，不影响总体异质性的前提下引发中性粒放大功能。
Bacterial infection reprograms the genetic architecture of neutrophil populations, alters dynamic transitions between subpopulations and primes neutrophils for augmented functionality without affecting overall heterogeneity. 

总的来说，这个数据提供了一个模型参考，和单细胞水平研究中性粒相关疾病机制、标记物、治疗靶点的一个通用框架。
In summary, these data establish a reference model and general framework for studying neutrophil-related disease mechanisms, biomarkers and therapeutic targets at single-cell resolution.


## 分析细节

### 单细胞数据
- For human data, sequenced reads were aligned to the hg38 human transcriptome
- Seurat version 2.3.4

低质量细胞，按照样本特异的cutoff过滤（table S1）。
- Due to dissimilar data qualities, low-quality cells were filtered using sample-specific cutoffs (Supplementary Table 1). 

标准化到10000来去除细胞间测序深度差异。
- The NormalizeData function was performed using default parameters to remove the differences in sequencing depth across cells.

细胞数：
- Fig1：4样本合并，过滤后获得19k高质量细胞，平均1,241个基因/细胞，总共18,269 mouse genes。
- Fig5: 去掉低质量细胞，共25,897细胞可分析:
	* 4,421 cells from BM (eBM_Gr1), 
	* 6,232 cells from PB (ePB_Gr1), 
	* 5,989 cells from spleen (eSP_Gr1), 
	* 4,435 cells from liver (eLV_Gr1) and 
	* 4,169 cells from peritoneal cavity (ePC_Gr1),



### Batch correction
区分大的细胞类型()没有矫正。
In this case, the batch had little effect on partitioning cell types and thus cell clustering into **neutrophils, B cells, T cells, monocytes, dendritic cells, erythrocytes and progenitors**.

对于中性粒细胞分亚类，按照样本分类。使用 ScaleData 矫正MT差异。
However, when clustering neutrophils alone, cells clustered first by sample rather than by biological clusters. Therefore, the ScaleData function was used to eliminate cell–cell variation in gene expression driven by batch and mitochondrial gene expression.

注意：矫正后的数据仅仅用于PCA及依赖PCA的聚类和UMAP。其他分析，比如差异表达分析，都是用的是未矫正的 normalize 后的数据。
Importantly, the batch-corrected data were only used for principal component analysis (PCA) and all steps relying on PCA (for example, clustering and UMAP visualization). All other analyses (for example, differential expression analysis) were based on the normalized data
without batch correction.


### Dimension reduction
三个步骤有降维: 选择HVG， PCA，UMAP。
- FindVariableGenes((y.cutoff=1 for control total cells; y.cutoff=1.2 for control neutrophils; y.cutoff=0.7 for E. coli-challenged total cells)) 
- 高变基因用于 RunPCA()
- PC 1–20 (for total cells) or 1–15 (for neutrophils) as input to perform the RunUMAP


### 聚类与注释
Unsupervised clustering and annotation. 
- FindClusters function (**resolution: 0.3, 0.6 and 0.2** for control total cells, neutrophils and E.coli-challenged total cells, respectively) to cluster cells using the Louvain algorithm
based on the same principal components as for the RunUMAP function
- 成熟的不同阶段。Clusters G1–G5 were neutrophils at different maturation stages. 
- 早期标记物。G1 and G2 were early-stage neutrophils with a higher expression of **Elane, Mpo, Fcnb and Camp** (Fig. 1d,e). 
- 中性粒细胞是终末分化的。Neutrophils are terminally differentiated. 
- 分化过程中细胞周期有变化。The transition from a proliferative cell to terminal differentiation was accompanied by a dramatic change in the expression of the **important cell cycle regulatory proteins**, so we next performed a single-cell-resolution analysis of cell cycle activation during neutrophil differentiation based on the expression of G1/S- and G2/M-phase-specific genes58,59 (Fig. 1i).
- G0-2分化很强，然后突然就停止细胞分裂了。Cells in the G0 to G2 stages underwent active proliferation, while cell division stopped abruptly thereafter. **CDC28 protein kinase regulatory subunit 2 (CKS2), Mki67 and Cdc20 were all strongly downregulated** at the messenger RNA(mRNA) level.


### 识别DEG

使用t-test
Identification of DEGs. We used the FindMarkers or **FindAllMarkers** function (test.use=‘‘t’’, logfc.threshold=log[1.5]) based on normalized data to identify DEGs. 
- Pvalue adjustment was performed using Bonferroni correction based on the total number of genes in the dataset. DEGs with adjusted Pvalues>0.05 were filtered out. 
- Gene Ontology analysis was performed by using the R package clusterProfiler60. 

非参数检验
In the experiment described in Extended Data Fig. 7, we conducted differential gene expression analysis **in each neutrophil subpopulation** using the **non-parametric Wilcoxon rank-sum test** and identified DEGs with an average expression fold-change>2.



### Developmental trajectory inference. 

Pseudo-time was generated with Monocle version 2 (ref. 18) to infer the potential lineage differentiation trajectory. 

The **newCellDataSet** function (lowerDetectionLimit=0.5; expressionFamily=negbinomial.size) was used to build the object based on the above **highly variable genes** identified by Seurat version 2.3.4.

### Bulk RNA-seq analysis
- FastQC and MultiQC.
- trimmomatic/0.36
- STAR2.5.2b, (GRCm38/mm10; Ensembl release 81) 
- EdgeR.


### 打分 Scoring of biological processes//todo

**Age-related genes** were summarized from the previous literature (Fig. 2i). Aging
is a main mechanism that accounts for neutrophil heterogeneity7,63: aged neutrophils
are smaller with fewer granules and granular multi-lobed nuclei and produce
more neutrophil extracellular traps (NETs). Related to function, aged neutrophils
express 
- less of the adhesion molecule l-selectin (CD62L; encoded by Sell) and
- more CD11b (αM; encoded by Itgam), lymphocyte function-associated antigen-1 (CD11a/β2), CD49d (integrin α4; encoded by Itga4), TLR4, ICAM-1, CD44 and CD11c (encoded by Itgax). 

Additionally, aged neutrophils express more surface
CXCR4 and less CXCR2, which regulates their release from and return to BM.
CXCR4 may also play a role in clearing aged, senescent neutrophils, particularly
at BM sites. Anti-CXCR4 antibodies or CXCR4 antagonists impede neutrophil
homing to BM64,65. Finally, aged neutrophils exhibit increased expression of CD24
(a glycosylphosphatidylinositol-linked glycoprotein that induces apoptosis when
crosslinked) and reduced expression of CD47 (the ‘don’t eat me’ signal that inhibits
efferocytosis—a process leading to clearance of dead neutrophils).


## dataset
Data availability

The data that support the findings of this study are available from the corresponding author upon request. 
- All sequencing data generated in this study have been deposited at NCBI’s Gene Expression Omnibus (GEO) repository and are accessible through GEO Series accession number **GSE137540**. 
- The published data used in this study were retrieved from the GEO (accession numbers **GSE70245(ref. 25), GSE109467 (ref. 26), GSE117129 (ref. 27), GSE92575 (ref. 13) and GSE120409(ref. 29))**. 

>25. Olsson, A. et al. Single-cell analysis of mixed-lineage states leading to a binary cell fate choice. 
Nature 537, 698–702 (2016).
>26. Evrard, M. et al. Developmental analysis of bone marrow neutrophils reveals populations specialized in expansion, trafcking, and efector functions.
Immunity 48, 364–379.e8 (2018).
>27. Zhu, Y. P. et al. Identifcation of an early unipotent neutrophil progenitor with
pro-tumoral activity in mouse and human bone marrow. 
Cell Rep. 24, 2329–2341.e8 (2018).
>13. Giladi, A. et al. Single-cell characterization of haematopoietic progenitors and their trajectories in homeostasis and perturbed haematopoiesis. 
Nat. Cell Biol. 20, 836–846 (2018).
>29. Muench, D. E. et al. Mouse models of neutropenia reveal progenitor-stage-specifc defects. Nature 2, 109–114 (2020).
>30. Kwok, I. et al. Combinatorial single-cell analyses of granulocyte–monocyte
progenitor heterogeneity reveals an early uni-potent neutrophil progenitor.
Immunity https://doi.org/10.1016/j.immuni.2020.06.005 (2020).


To align the differentiating neutrophil clusters characterized in this study to the proNeu population, we also utilized the most recent data from ref. 30 (kindly provided by L. G. Ng).


## Figs
Fig. 1 | scRNA-seq analysis of steady-state BM, PB and spleen neutrophils.

Fig. 2 | Characterization of BM and PB neutrophil subpopulations.
-  a, Heatmap showing the expression of **neutrophil granule-related genes** for all neutrophils. : c("Mpo", "Elane", "Ctsg", "Prtn3", "Prss57", "Ctsc", "Camp", "Ltf", "Cybb", "Cyba", "Lcn2", "B2m", "Mmp8", "Mmp9", "Hp", "Slpi", "Itgam", "Cd63", "Fcgr3", "Cd177", "Mmp25", "Fpr1", "Scamp1", "Vamp2", "Stxbp4").
- b, Expression of **six typical neutrophil granule genes**: c("Elane", "Prtn3", "Ltf", "Camp", "Mmp8", "Mmp9")

Fig.3

### 流式分选的策略(Fig2)
![1124_gating](/data/2021/images/11/1124_gating.png)
Fig.2d, FACS sorting and staining of five mouse BM neutrophil populations for bulk sequencing. 
- Left: gating diagram. 
	* R1 cells (CD4−CD8a−CD45R/B220−Ter119−) were selected, 
	* R2 (eosinophils) and R4 cells (megakaryocyte-erythroid progenitors, MEPs) were excluded, 
	* and the remaining R5 cells (neutrophils) were selected. 
- Top right: R1–R5 as described, but showing FACS gating of five detailed neutrophil subpopulations and the morphology of the sorted cells, among which were:
	- (1) c-Kit_hi Ly6G_neg (myeloblasts (BM)); 
	- (2) c-Kit_int Ly6G_neg (promyelocytes (PM)); 
	- (3) c-Kit_neg Ly6G_low (myelocytes (MC)); 
	- (4) c-Kit_neg Ly6G_int (metamyelocytes (MM)); 
	- and (5) c-Kit_neg Ly6G_hi cells (band cells and segmented neutrophils (BC/SC)). 
- Bottom right: representative Wright–Giemsa staining of these populations. Scale bars: 10μm.
Data are representative of three independent experiments.



### 热图 scRNA-seq 和 形态定义的中性粒marker(Fig2)
- e, Heatmaps showing the row-scaled expression of **scRNA-seq-defined DEGs** across averaged single-cell groups (left) and **morphological groups** (right). Only genes detected in both scRNA-seq data and bulk RNA-seq data are visualized.

只展示共有基因。

### 反卷积(Fig2)
- f, Coefficient matrix showing the deconvolution results of morphological bulk profiles. The 20 highest DEGs per single-cell group were selected as signatures for deconvolution. Each column is normalized by column sums.
单细胞每组选择20个最高的DEG，对形态定义的分组进行反卷积。按列标准化。

### 成熟的marker(Fig2, 3)
- g,h, **Transcriptional landscape of mature neutrophils** in PB and spleen. 
- g, Heatmap showing the row-scaled expression of the ten highest DEGs per cluster for G5a, G5b and G5c neutrophils.  c("Retnlg", "S100a8", "S100a9", "Lyz2", "Wfdc21", "Mmp8", "Lgals3", "Gm5483", "Timp2", "Rdh12", "Ifit3", "Isg15", "Rsad2", "Ifit3b", "Ifit1", "Irf7", "Gm13822", "Cmpk2", "Ifi204", "Usp18", "Gm2a", "Gngt2", "Lst1", "Fgl2", "Rps28", "Itga4", "Ptafr", "Ppt1", "Ptma", "Wfdc17")
- h, Gene Ontology analysis of DEGs for each of the three G5 clusters. Selected Gene Ontology terms with Benjamini–Hochberg-corrected Pvalues<0.05 (one-sided Fisher’s exact test) are shown. 
- Fig.3. 总结  c("Ifit1", "Cxcr4", "Lyz2", "S100a8",  "Isg15", "Gm2a")
	* d, FACS and staining strategy for PB **G5a (IFIT1−CXCR4lo), G5b (IFIT1+) and G5c (IFIT1−CXCR4hi) neutrophils**. 
	* e: expression patterns of the marker genes of **G5a (Lyz2 and S100a8), G5b (Ifit1 and Isg15) and G5c (Cxcr4 and Gm2a)**




### 衰老的marker(Fig2)
- i,j, Expression of **neutrophil aging signatures**. 
- i, Heatmap showing the row-scaled expression of aging-related genes for all neutrophils. c("Icam1", "Itga4", "Cd47", "Itgam", "Cd24a", "Cxcr2", "Sell", "Cxcr4", "Tlr4", "Itgax")






## 英语单词
erythroid [ɪˈrɪθrɔɪd] adj. 红色的

eosinophil [ˌiːəʊˈsɪnəˌfɪl] adj. 嗜曙红的，嗜酸性的；嗜曙红细胞增多的，嗜酸性细胞增多的 n. 嗜曙红细胞，嗜酸性粒细胞

myeloblast [ˈmaɪələʊˌblɑːst] n. 成髓细胞，原始粒细胞
promyelocyte  [prəʊˈmaɪələʊsaɪt] n. 前髓细胞，早幼粒细胞
myelocyte [ˈmaɪələʊsaɪt]  n. [组织] 髓细胞；[细胞] 中幼粒细胞
metamyelocyte  [metəˈmaɪələʊsaɪt]  n. [细胞] 晚幼粒细胞
band cells and segmented neutrophils  带状细胞和节段性中性粒细胞
femur [ˈfiːmə(r)] n. [解剖] 股骨；大腿骨









# (2020_Science immunology)Defining the emergence of myeloid-derived suppressor cells in breast cancer using single-cell transcriptomics

## 摘要 

髓系来源的抑制细胞，抑制肿瘤过程中的适应性免疫。
Myeloid-derived suppressor cells (MDSCs) are innate immune cells that acquire the capacity to suppress adaptive immune responses during cancer. 

现在还不能区分MDSC和正常的髓系细胞，导致检测和靶向肿瘤中的MDSC药物受限。
It remains elusive how MDSCs differ from their normal myeloid counterparts, which limits our ability to specifically detect and therapeutically target MDSCs during cancer. 

本文，检测乳腺癌相关MDSC的分子标记，使用广泛研究的小鼠模型，基于MMTV病毒。
Here, we sought to determine the molecular features of breast cancer–associated MDSCs using the widely studied mouse model based on the mouse mammary tumor virus (MMTV) promoter–driven expression of the polyomavirus middle T oncoprotein (MMTV-PyMT). 

有乳腺癌的小鼠脾脏 vs WT对照，单细胞分析其中的MDSC。
To identify MDSCs in an unbiased manner, we used single-cell RNA sequencing to compare MDSC containing splenic myeloid cells from breast tumor–bearing mice with wild-type controls. 

分析了14k细胞，揭示了MDSC来源于异常的中性粒成熟谱系，让它们成为抑制状态。
Our computational analysis of 14,646 single-cell transcriptomes revealed that MDSCs emerge through an aberrant neutrophil maturation trajectory in the spleen that confers them an immunosuppressive cell state. 

我们建立了MDSC特异的基因谱，认为CD84是乳腺癌中进一步检测和富集MDSC的marker。
We establish the MDSC-specific gene signature and identify CD84 as a surface marker for improved detection and enrichment of MDSCs in breast cancers.


## RESULTS
- 有癌症的小鼠，MDSC主要集中在脾脏。The spleen is the predominant site of MDSC accumulation in tumor-bearing mice
- 单细胞分析发现，MDSC是中性粒和单核细胞中的一个不同亚群。Single-cell transcriptomics reveal MDSCs as distinct clusters within neutrophilic and monocytic lineages
- 相对正常髓系细胞，G-和M-MDSC保守免疫细胞激活程序是不同的。 G- and M-MDSCs share a conserved immune cell activation program that differs from normal myeloid cells
- MDSC基因谱在中性粒中高表达。 The MDSC gene signature is highly expressed in human breast cancer–associated neutrophils
- 检查和分离MDSC的表面marker的识别。Identification of cell surface markers for MDSC detection and isolation
- CD84++ MDSC能抑制T细胞和增加ROS产物。CD84hi MDSCs exhibit T cell suppression and increased ROS production
- G-MDSC来源于肿瘤异常分化轨迹。G-MDSCs emerge through aberrant differentiation trajectory during cancer





## 背景知识

* MDSC有两个来源(nuetro和mono)。These MDSCs are a heterogeneous population of neutrophil- and monocyte-like myeloid cells, which are increasingly recognized as key mediators of immunosuppression in various types of cancer (3, 4).

抑制机制
*  免疫抑制的机制(ROS, Arg, Ido2, Ido3)。MDSCs can mediate immunosuppression through multiple mechanisms including the production of **reactive oxygen species (ROS)** and **depletion of key amino acids required for T cell proliferation through expression of arginase (Arg) and indoleamine 2,3-dioxygenase (6–8).**
* 其他促肿瘤细胞因子(Il-10, Tgf-beta)。 In addition, MDSCs produce a range of immunosuppressive and cancer-promoting cytokines including interleukin-10 (IL-10) and transforming growth factor–beta (9).
* 塑造肿瘤免疫环境：血管、入侵、转移。Besides their immunosuppressive function, MDSCs may also actively shape the tumor microenvironment through complex cross-talk with breast cancer cells and surrounding stroma, resulting in increased angiogenesis, tumor invasion, and metastasis (8, 10, 11).





----

分类

* 小鼠中的MDSC分类。In mice, MDSCs are defined through the expression of CD11b+ Gr1+  and can be further classified into 
	- CD11b+ Ly6ClowLy6G+ granulocytic MDSCs (G-MDSCs) and 
	- CD11b+ Ly6C+ Ly6G− monocyticMDSCs (M-MDSCs)
* 人中的分类。In humans, 
	- G-MDSCs are defined as  CD11b+CD14−CD15+ or CD11b+CD14−CD66b+, 
	- and M-MDSCs are defined as CD11b+CD14+CD15−, followed by additional functional characteristics such as T cell suppression and ROS assays(12).
* 而以上marker 和正常的 neutro 和 mono 重合。
* 本文使用单细胞分析 14.6k，发现 G-MDSC和 M-MDSC 的基因谱重合很大，但和正常差异很大。
	- 聚焦 G-MDSC，pseudotemporal 分析发现 MDSC 起源于neutrophile成熟过程中一个异常的分支。发现了该MDSC**的表面marker(CD84，粘附分子 JAML**。










## Figs
---
Fig. 1. Identifying MDSC-specific gene expression signatures using scRNAseq. 








## 单词
en route [ɔŋ'ru:t]（法）在途中
microbicidal  [maɪkrəʊbɪˈsaɪdl] adj. 杀微生物的；杀菌剂的

