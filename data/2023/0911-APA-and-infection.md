APA and infection


# (综述) The role of alternative polyadenylation in the antiviral innate immune response (NC)
>  nature communications, Published: 24 February 2017
> https://www.nature.com/articles/ncomms14605
> Anlong Xu

Alternative polyadenylation (APA) is an important regulatory mechanism of gene functions in many biological processes. 

However, the extent of 3′ UTR variation and the function of APA during the innate antiviral immune response are unclear. 

Here, we show genome-wide poly(A) sites switch and average 3′ UTR length shortens gradually in response to vesicular stomatitis virus (VSV) infection in macrophages. 

Genes with APA and mRNA abundance change are enriched in immune-related categories such as the Toll-like receptor, RIG-I-like receptor, JAK-STAT and apoptosis-related signalling pathways. 

The expression of 3′ processing factors is down-regulated upon VSV infection. When the core 3′ processing factors are knocked down, viral replication is affected. 

Thus, our study reports the annotation of genes with APA in antiviral immunity and highlights the roles of 3′ processing factors on 3′ UTR variation upon viral infection.





## 在分裂的T细胞中，3UTR 缩短对蛋白丰度影响有限
> Gruber, A. R. et al. Global 3′ UTR shortening has a limited effect on protein abundance in proliferating T cells. Nat. Commun. 5, 5465 (2014).


- herpes simplex virus 单纯性疱疹病毒








# 在大多数组成肿瘤组织的细胞类型中，3' UTR 的缩短与蛋白质代谢中的选择性聚腺苷化有关 (RNA, 2021)
> Shortening of 3' UTRs in most cell types composing tumor tissues implicates alternative polyadenylation in protein metabolism
> RNA. 2021 Dec
> Computational and Systems Biology, Biozentrum, University of Basel, Basel, CH-4056, Switzerland SIB Swiss Institute of Bioinformatics, Basel, CH-4056, Switzerland.
> https://pubmed.ncbi.nlm.nih.gov/34521731/

Longer 3' UTRs contain additional cis-regulatory elements that impact the fate of the transcript and/or of the resulting protein.

- cis-regulatory elements 顺式调控元件

未知: 肿瘤中 APA 的机制？角色？ APA 发生在 癌变细胞 还是 浸润细胞?
- Extensive alternative polyadenylation (APA) has been observed in cancers, but `the mechanisms and roles` remain elusive.
- In particular, it is unclear `whether the APA occurs in the malignant cells or in other cell types that infiltrate the tumor`. 

发表计算方法： SCUREL。 定量组间3UTR长度改变，包括 肿瘤和对照组织的 同种类型的细胞。
To resolve this, we developed a computational method, called SCUREL, that quantifies changes in 3' UTR length between groups of cells, including cells of the same type originating from tumor and control tissue. 

用该方法研究 肺癌。
We used this method to study APA in human lung adenocarcinoma (LUAD).

SCUREL 仅依赖 注释的3UTR，和对照系统(比如T细胞激活，精子形成)，结果更灵敏。
SCUREL relies solely on annotated 3' UTRs and on control systems such as T cell activation, and spermatogenesis gives qualitatively similar results at much greater sensitivity compared to the previously published scAPA method. 

肺癌样本中，发现3UTR缩短趋势，不仅在癌症细胞中(相比起始细胞类型)，也在 肿瘤和对照组织环境中 其他细胞类型。
In the LUAD samples, we find a general trend toward 3' UTR shortening not only in cancer cells compared to the cell type of origin, but also when comparing other cell types from the tumor vs. the control tissue environment. 

病人之间靶点差异很大。
However, we also find high variability in the individual targets between patients. 

结论：有利于了解肺癌中 APA 的 程度、影响。
The findings help in understanding the extent and impact of APA in LUAD, which may support improvements in diagnosis and treatment.


正文

We annotated the mouse T cell scRNA-seq data (Pace et al. 2018) with Seurat, obtaining 1605 activated and 1535 naïve T cells (Fig. 3A), with 5.8 and 1.8 million reads mapped to TEs, respectively. 





## Data sets

Lung cancer samples Lung adenocarcinoma (LUAD) and matched control samples were downloaded from the GEO database (Barrett et al. 2013), based on the accession numbers in the original publications. 
- Specifically, from the Lambrechts et al. (2018) data set we used the LUAD samples listed in Table 1 of the original publication (corresponding to patients 3, 4, and 6, three tumor samples and one matched control sample for each patient). 
- `scRNA-seq data (ArrayExpress [Athar et al. 2019] accession numbers E-MTAB-6149 and E-MTAB-6653)` were generated in this study with the 10x Genomics Single Cell 3′ V2 protocol. 
- From the Laughney et al. (2020) study we also used LUAD and matched control samples, which originated from three donors. These samples were also generated with the 10x Genomics Single Cell 3′ V2 protocol (accession number `GSE123904`).

Mouse testis samples scRNA-seq data from `the testes of two 8-wk-old C57BL/6J mice` (Lukassen et al. 2018) were downloaded from the GEO database (accession number `GSE104556`).

Mouse `T cell samples` scRNA-seq data of FACS sorted T cells from the `lymph nodes and spleen` of C57BL/6J mice, three infected with `OVA-expressing Lysteria monocytogenes and one naive` (Pace et al. 2018) were downloaded from the GEO database (accession number `GSE106268`).

Fig3. Analysis of APA in T cell activation and spermatogenesis. (A) UMAP projection of the `T cell activation data set (Pace et al. 2018)` showing activated (red), naive (green), and unassigned (gray) T cells.



## dataset (Pace et al. 2018, Science)

> The epigenetic control of stemness in CD8+ T cell fate commitment
> Pace L, Goudot C, Zueva E, Gueguen P, Burgdorf N, Waterfall JJ, Quivy J-P, Almouzni G, Amigorena S. 2018. **The epigenetic control of stemness in CD8 T cell fate commitment**. Science 359: 177–186. 10.1126/science.aah6499
> Science. 2018 Jan 12
> Institut Curie, PSL Research University, F-75005 Paris, France. luigia.pace@iigm.it genevieve.almouzni@curie.fr sebastian.amigorena@curie.fr.
> https://pubmed.ncbi.nlm.nih.gov/29326266/

数据位置：
The bioinformatics data are available in the Gene Expression Omnibus (GEO) database under accession numbers GSE105163 (microarrays) and SuperSeries GSE106268 for ChIP-seq and scRNA-seq data (linked to subseries GSE106264, GSE106265, and GSE106267). 

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE106268
	- GSE106264	`single-cell-RNA-sequencing` analysis of naive and Listeria monocytogenes-specific CD8+ T cells
	- GSE106265	H3K9me3 ChIP-seq analysis of in vitro cultured littermate and Suv39h1-KO CD8+ T cells
	- GSE106267	H3K9me3 native ChIP-seq analysis of in vitro cultured wild-type CD8+ T cells


- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE106264

Naïve littermate and Suv39h1-KO CD8+ T cells, and day 7 p.i. Kb-OVA+ CD8+ T cells (from Listeria m.-OVA infected mice), were isolated by FACS. scRNA-seq was performed according to 10X Genomics technology. Both biological (Rep) and technical (tech) replicates were processed.
共三个样本类型：对照，KO，感染第7天的OVA的。

- littermate /ˈlɪtəmeɪt/ n.同窝出生仔畜

```
8个样本: 
GSM2833284	Naive CD8+ T cells WT, rep1
GSM2833285	Naive CD8+ T Suv39h1-KO, rep1

GSM2833286	kb-OVA+ CD8+ T cells WT, rep1
GSM2833287	kb-OVA+ CD8+ T cells WT, rep2, tech1
GSM2833290	kb-OVA+ CD8+ T cells WT, rep2, tech2

GSM2833289	kb-OVA+ CD8+ T cells Suv39h1-KO, rep2
GSM2833288	kb-OVA+ CD8+ T cells Suv39h1-KO, rep1, tech1
GSM2833291	kb-OVA+ CD8+ T cells Suv39h1-KO, rep1, tech2
```







### listeria / lɪˈstɪəriə / n.李斯特菌属

> 李斯特菌（学名：Listeria monocytogenes），又名单核球增多性李斯特菌、李氏菌，是一种兼性厌氧细菌，为李斯特菌病的病原体。李斯特菌是革兰氏阳性菌，属厚壁菌门，取名自约瑟夫·李斯特。它主要以食物为传染媒介，是最致命的食源性病原体之一

> 李斯特菌在环境中无处不在，`在绝大多数食品中都能找到李斯特菌`。肉类、蛋类、禽类、海产品、乳制品、蔬菜等都已被证实是李斯特菌的感染源。李斯特菌中毒严重的可引起血液和脑组织感染，很多国家都已经采取措施来控制食品中的李斯特菌，并制定了相应的标准。

> 2019年10月7日，德国联邦消费者保护与食品安全局宣布召回逾千种肉类商品。原因是其可能被李斯特菌污染。

```
国际上公认的李斯特菌共有十个菌株：
1．单核细胞增生李斯特菌(L.monocytogenes)
2．绵羊李斯特菌 (L.iuanuii)
3．英诺克李斯特菌(L.innocua)
...
```

