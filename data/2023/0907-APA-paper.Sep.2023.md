




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


- listeria / lɪˈstɪəriə / n.李斯特菌属














# 对 Li Wei 文章的引用 (31980388, 目前25篇)

https://pubmed.ncbi.nlm.nih.gov/?linkname=pubmed_pubmed_citedin&from_uid=31980388

## T2T-CHM13 与 GRCh38 的差异 (Genome Biol. 2023.7)
```
Characterization of large-scale genomic differences in the first complete human genome.
Yang X, Wang X, Zou Y, Zhang S, Xia M, Fu L, Vollger MR, Chen NC, Taylor DJ, Harvey WT, Logsdon GA, Meng D, Shi J, McCoy RC, Schatz MC, Li W, Eichler EE, Lu Q, Mao Y.
Genome Biol. 2023 Jul 4;24(1):157. doi: 10.1186/s13059-023-02995-w.
PMID: 37403156 

Bio-X Institutes, Key Laboratory for the Genetics of Developmental and Neuropsychiatric Disorders, Ministry of Education, Shanghai Jiao Tong University, Shanghai, China.
```


## NUDT21 通过 LAMC1 差异 APA 改变 神经胶质瘤 细胞的迁移 (J Neurooncol, IF=4.5)
```
NUDT21 alters glioma migration through differential alternative polyadenylation of LAMC1.
Jonnakuti VS, Ji P, Gao Y, Lin A, Chu Y, Elrod N, Huang KL, Li W, Yalamanchili HK, Wagner EJ.
J Neurooncol. 2023 Jul;163(3):623-634. doi: 10.1007/s11060-023-04370-y. Epub 2023 Jun 30.
PMID: 37389756

Department of Pediatrics, Baylor College of Medicine, Houston, TX, 77030, USA.
```

Methods: Utilizing our established PAC-seq approach and PolyAMiner bioinformatic analysis pipeline, we deciphered the NUDT21-mediated differential APA dynamics in glioma cells.

- qRT-PCR analysis confirmed that NUDT21-knockdown in glioma cells results in the preferred usage of the proximal polyA signal (PAS) of LAMC1. | 小胶质瘤细胞中 NUDT21敲除后，LAMC1 倾向于使用 近端 polyA 信号。
- Functional studies revealed that NUDT21-knockdown-induced 3'UTR shortening of LAMC1 is sufficient to cause translational gain, as LAMC1 protein is upregulated in these cells compared to their respective controls. | 功能研究表明，NUDT21敲除 介导的3UTR LAMC1缩短，足够引起其翻译增加，因为相对于对照，LAMC1 蛋白提升了。
- We demonstrate that 3'UTR shortening of LAMC1 after NUDT21 knockdown removes binding sites for miR-124/506, thereby relieving potent miRNA-based repression of LAMC1 expression. | NUDT21 敲除导致的 LAMC1 3UTR 缩短，去除了 miR-124/506 结合位点，所以解除了潜在的 miRNA 介导的 对 LAMC1 的抑制。
- Remarkably, we report that the knockdown of NUDT21 significantly promoted glioma cell migration and that co-depletion of LAMC1 with NUDT21 abolished this effect. | 敲除 NUDT21 促进胶质瘤细胞迁移，同时敲除 LAMC1和NUDT21 则消除了那个效应。
- Lastly, we observed that LAMC1 3'UTR shortening predicts poor prognosis of low-grade glioma patients from The Cancer Genome Atlas. | TCGA 显示，低级胶质瘤中，LAMC1 3UTR 缩短预期不好。


Conclusion: This study identifies NUDT21 as a core alternative polyadenylation factor that regulates the tumor microenvironment through differential APA and loss of miR-124/506 inhibition of LAMC1. Knockdown of NUDT21 in GBM cells mediates 3'UTR shortening of LAMC1, contributing to an increase in LAMC1, increased glioma cell migration/invasion, and a poor prognosis.



