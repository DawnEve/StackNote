




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






# 四种A碱基相关修饰 介导的分子亚型 可预测 膀胱癌中 临床效果 和 治疗选择(Front Immunol, IF=7.3)
> Four types of adenine-related RNA modification writers -mediated molecular subtypes contribute to predicting clinical outcomes and treatment options in bladder cancer
> Department of gynaecology, Shengjing Hospital of China Medical University, Shenyang, China.
> Front Immunol. 2023 Aug
> https://pubmed.ncbi.nlm.nih.gov/37638051/

RNA modifications, containing `m6A, m1A, alternative polyadenylation and adenosine-to-inosine RNA editing`, involve in critical cancerous immunity and cancerous processes. However, the functional roles of RNA modification writers in bladder cancer (BLCA) are largely unknown.


## 方法学

- The `“maftools”` R package was used to plot the “oncoplot” based on the `somatic mutation data`. 
- Tumor mutation burden (TMB) of pan-cancers was calculated using `VarScan2` based on the mutation data.
- The microsatellite instability (MSI) data and the stemness indices of pan-cancers were respectively downloaded from the supplementary files of Bonneville’s study (24) and Malta’s study (25).

> 24. Bonneville R, Krook MA, Kautto EA, Miya J, Wing MR, Chen HZ, et al.. Landscape of microsatellite instability across 39 cancer types. JCO Precis Oncol (2017) 2017:PO.17.00073. doi: 10.1200/PO.17.00073 
> 25. Malta TM, Sokolov A, Gentles AJ, Burzykowski T, Poisson L, Weinstein JN, et al.. Machine learning identifies stemness features associated with oncogenic dedifferentiation. Cell (2018) 173(2):338–354.e315. doi: 10.1016/j.cell.2018.03.034 


- 12 `APA enzymes` (CLP1, CPSF1/2/3/4, CFI, CSTF1/2/3, PABPN1, NUDT21 and PCF11) 
- `GSVA enrichment analysis` was conducted using “GSVA” R package to explore the differential biological function between distinct RNA modification writer-related clusters





# (果蝇)靶向长读长测序研究 AS 和 APA 的协同性(NC, 2023)
> Coordination of alternative splicing and alternative polyadenylation revealed by targeted long read sequencing
> Nat Commun. 2023 Sep 7
> Department of Genetics and Genome Sciences, University of Connecticut School of Medicine, Farmington, CT, USA.
> PMID: 37679364

神经中AS和APA还没有一起研究。
Nervous system development is associated with extensive regulation of alternative splicing (AS) and alternative polyadenylation (APA). AS and APA have been extensively studied in isolation, but little is known about how these processes are coordinated. 

方法: cDNA 捕获法 + 三代测序nanopore
... using a targeted long-read sequencing approach we call Pull-a-Long-Seq (PL-Seq). This cost-effective method uses `cDNA pulldown and Nanopore sequencing` combined with an analysis pipeline to quantify inclusion of alternative exons in connection with alternative 3' ends.

> cassette exon (CE) ： Exon Skipping, 或者叫做cassette exon, 称为外显子跳跃 | [CSDN ref](https://blog.csdn.net/weixin_43569478/article/details/108079307)
> https://www.nature.com/articles/nrg2776
The first type is exon skipping, in which a type of exon known as a cassette exon is spliced out of the transcript together with its …


结果：
使用PL-Seq，我们鉴定出在CE剪接方面表现出显著差异的基因，这取决于与短3' utr和长3' utr的连接。
Using PL-Seq, we identified genes that exhibit significant differences in CE splicing depending on connectivity to short versus long 3'UTRs. 


? 基因组长3'UTR缺失改变了上游短3'UTR亚型的CE剪接，而ELAV缺失对CE剪接的影响差异取决于与备选3'UTR的连通性。
Genomic long 3'UTR deletion was found to alter upstream CE splicing in short 3'UTR isoforms and ELAV loss differentially affected CE splicing depending on connectivity to alternative 3'UTRs. 

结论： 研究AS 事件，要考虑其与 3UTR 的距离。
This work highlights the importance of considering connectivity to alternative 3'UTRs when monitoring AS events.







# 细胞类型特异性 APA 促进非小细胞肺癌进展中的致癌基因表达 (Mol Ther Nucleic Acids, IF=10.18)
> Cell-type-specific alternative polyadenylation promotes oncogenic gene expression in non-small cell lung cancer progression
> Mol Ther Nucleic Acids. 2023 Aug
> School of Life Science and Technology, Xidian University, Xi'an, Shaanxi 710071, China.
> PMID: 37675185
> 可以学习 //todo

APA通过影响原癌基因和抑癌基因的表达，参与肿瘤形成和进展。
Disrupted alternative polyadenylation (APA) is frequently involved in tumorigenesis and cancer progression by regulating the gene expression of oncogenes and tumor suppressors. 

能调控基因表达的、细胞类型特异的 3UTR 改变，有预后价值。
We found several cell-specific 3'-UTR alterations that regulate gene expression changes showed prognostic value in NSCLC. 

APA介导的3UTR缩短导致的miRNA位点损失，实验验证了 原癌基因-miRNA-肿瘤抑制子 轴。
We further investigated the function of APA-mediated 3'-UTR shortening through loss of microRNA (miRNA)-binding sites, and we identified and experimentally validated several oncogene-miRNA-tumor suppressor axes. 


## scAPA 识别APA事件
- Then, we identified APA events in each cell using the `scAPA` method. 
> 46. Shulman E.D., Elkon R. Cell-type-specific analysis of alternative polyadenylation using single-cell transcriptomics data. Nucleic Acids Res. 2019;47:10027–10039.


## 预后分析: 非监督聚类，再 生存分析
Assessment of the prognostic value of APA event genes 

对 3UTR 缩短的APA事件基因，基于 TCGA GEO 聚类
To investigate whether APA event genes provide prognostic information for NSCLC patients, we performed unsupervised clustering analysis of 3′-UTR-shortening APA event genes based on the TCGA-NSCLC cohort and GEO cohort using `hierarchical agglomerative clustering`.48 
最佳子类数目，使用 Hubert 指数。
The optimal number of subclusters was determined by using `the graphical method the Hubert index`.49 

- agglomerative [əˈɡlɒmərətɪv] adj. 会凝聚的；[冶] 烧结的，凝结的
- Hierarchical Agglomerative Methods 分层聚类法

> 48. Charrad M., Ghazzali N., Boiteau V., Niknafs A. NbClust: an R package for determining the relevant number of clusters in a data set. J. Stat. Software. 2014;61:1–36.
> 49. Gustriansyah R., Suhandi N., Antony F. Clustering optimization in RFM analysis based on k-means. Indonesian Journal of Electrical Engineering and Computer Science. 2020;18:470–477.

亚类中 KM 生存分析 描述。
Then, the prognosis of these subclusters was described by using K-M survival analysis. 

- Unsupervised clustering was performed using R package `Nbclust` (v.3.0.1). 
- Survival analysis was performed using the “`survival`” package (v.3.5–5). 
- The `log rank test` was used to determine the significance of the survival difference.



## miRNA 结合位点 因APA而损失的分析 //todo
miRNA-binding site loss in APA event genes 

> We used TargetscanHuman (v.8.0) (http://www.targetscan.org/vert_80/) to predict highly conversed miRNA-binding site loss due to APA in NSCLC. 

每个细胞类型中的每个基因上，结合缩短的3UTR坐标，可以知道损失的miRNA结合位点。
Combining with the genomic coordinates of APA events in the shortened 3′ UTRs, the loss of miRNA-binding sites with shortened 3′ UTR for each gene was obtained in each cell type, respectively. 

计算至少一个 高保守miRNA位点损失的基因 所占的百分比：比较全局miRNA位点损失的全局模式。
In order to investigate the global pattern of miRNA-binding site loss among APA event genes in each cell type, the percentage of genes with at least one highly conversed miRNA-binding site loss was plotted. 

只有在显著的APA事件上的 miRNA 位点损失 用于下游分析和试验验证。
Then, only miRNA-binding site losses on significant APA event genes were considered for downstream analysis and experimental validation. 

失去3UTR结合位点的 miRNA 可能调控其他基因，比如 肿瘤抑制基因。
Further, the miRNAs that lost binding sites on 3′ UTRs may regulate other genes, such as tumor suppressor genes. 

所以，也用TargetscanHuman研究这些 miRNA 的靶基因。
Thus, we also investigated the target genes of these miRNAs by using TargetscanHuman. 

本文打分能估计 miRNA 的抑制程度。对于给定 miRNA， 低分表明这个靶基因更适合。
Moreover, CWCSs could estimate miRNA repression at the site. For a given miRNA, the lower CWCS indicated the site of this target gene is more favorable than other genes.22 

选择靶基因： 同一个细胞类型中，与显著APA事件的基因表达 显著负相关。
We selected target genes that were significant negatively correlated with significant APA event gene expression in the same cell type. 

对这些靶基因，根据 CWCS 刷选，研究 倾向结合的 miRNA。
These genes were further sorted by CWCS to investigate the preference of miRNA binding to target genes. 

肿瘤抑制基因来源: http://bionlp.bcgsc.ca/cancermine
The tumor suppressor gene list of NSCLC is obtained from the CancerMine database (http://bionlp.bcgsc.ca/cancermine).50 Only the suppressors of the lung cancer will be left.









# 影响癌症中 APA 的遗传变异 代表了 候选的因果风险位点 (Cancer Res, IF=9.329)
> Genetic variants that impact alternative polyadenylation in cancer represent candidate causal risk loci
> Cancer Res. 2023 Sep 5
> Wuhan University, Wuhan, Hubei, China.
> PMID: 37669142

APA 正在逐渐成为 调控 转录后修饰 的主要机制。
Alternative polyadenylation (APA) is emerging as a major mechanism of post-transcriptional regulation. 

APA 影响癌症的进展，表明 APA 的基因决定在调控癌症风险中的重要作用。
APA can impact the development and progression of cancer, suggesting that the genetic determinants of APA might play an important role in regulating cancer risk.

泛癌分析：影响apa的 QTL。
Here, we depicted a pan-cancer atlas of human APA quantitative trait loci (apaQTLs), containing approximately 0.7 million apaQTLs across 32 cancer types.


Moreover, apaQTL-related genes (aGenes) were broadly related to `cancer signaling pathways`, `high mutational burden`, `immune infiltration`, and `drug response`, implicating their potential as therapeutic targets.

机制: 风险突变，通过 RBP CSTF2T，导致 DNM1L 使用近端 polyA 位点，进而高表达 DNM1L 。
Mechanistically, the risk variant promoted aberrant APA and facilitated higher usage of DNM1L proximal poly(A) sites mediated by the RBP CSTF2T, which led to higher expression of DNM1L with a short 3'UTR.
This stabilized DNM1L to upregulate its expression, provoking CRC cell proliferation. 









# 三阴乳腺癌中 APA 的异质性(Theranostics, IF=11.56)
> Dissecting the heterogeneity of the alternative polyadenylation profiles in triple-negative breast cancers
> Theranostics. 2020 Aug 21
> Department of Breast Surgery, Fudan University Shanghai Cancer Center, Fudan University, Shanghai 200032, People's Republic of China.
> https://pubmed.ncbi.nlm.nih.gov/32929364/
> 学习其中的 shRNA 方法; 非负矩阵分解 NMF 分型 //todo

Background: Triple-negative breast cancer (TNBC) is an aggressive malignancy with high heterogeneity. However, the alternative polyadenylation (APA) profiles of TNBC remain unknown. Here, we aimed to define the characteristics of the APA events at post-transcription level among TNBCs.

方法： 转录组芯片，165 TNBC + 33 normal。 shRNA pool 筛选，靶向 23 个 CP 核心基因，来识别 关键CP因子。
Methods: Using transcriptome microarray data, we analyzed APA profiles of 165 TNBC samples and 33 paired normal tissues. A pooled short hairpin RNA screen targeting 23 core cleavage and polyadenylation (C/P) genes was used to identify key C/P factors. 

结果：分为4个APA亚型。
Results: We established an unconventional APA subtyping system composed of four stable subtypes: 1) luminal androgen receptor (LAR), 2) mesenchymal-like immune-activated (MLIA), 3) basal-like (BL), 4) suppressed (S) subtypes. Patients in the S subtype had the worst disease-free survival comparing to other patients (log-rank p = 0.021). 

Enriched clinically actionable pathways and putative therapeutic APA events were analyzed among each APA subtype. 

鉴定 23个 核心因子中， CPSF1 and PABPN1 是更重要的 APA 和 分裂调控子。
Furthermore, CPSF1 and PABPN1 were identified as the master C/P factors in regulating APA events and TNBC proliferation. 
删除后，减弱细胞的分裂，增强凋亡，导致细胞周期再分配，与乳腺癌中肿瘤生长、分裂、转移、化疗抗药相关的APA事件逆转。
The depletion of CPSF1 or PABPN1 weakened cell proliferation, enhanced apoptosis, resulted in cell cycle redistribution and a reversion of APA events of genes associated with tumorigenesis, proliferation, metastasis and chemosensitivity in breast cancer. 

结论： APA调控的理解前进一步，TNBC新治疗靶点。
Conclusions: Our findings advance the understanding of tumor heterogeneity regulation in APA and yield new insights into therapeutic target identification in TNBC.



## 技术： NMF 分子分型，最佳分类数

The tandem-3′UTR-based TNBC subtyping

1. 各个样本之间的SUI CV排序。取前1/4的 3UTR 用于随后的聚类分析。 
Tandem 3′UTRs were sorted by the coefficient of variation (CV) of SUI across all samples and the top 25% most variant tandem 3′UTRs were chosen for the subsequent clustering analysis. 
2. 非监督的NMF方法确定最佳的稳定分类。
The unsupervised non-negative matrix factorization (NMF) method was used to determine the optimal number of stable TNBC subtypes. 

使用非平滑算法(nsNMF)，设置 rank=50， runs=200。
We used a non-smooth NMF (nsNMF) algorithm and applied 50 and 200 iterations for the rank survey and the clustering runs, respectively. 

通过对共识矩阵、2 ~ 10个秩的聚类解的连通性系数和离散系数以及剪影宽度的回顾，确定了理想的秩基和分解。
The ideal rank basis and factorization was determined based on the review of consensus matrices, the cophenetic and dispersion coefficients and silhouette widths from clustering solutions with 2 to 10 ranks. 

聚类的鲁棒性验证：共识聚类，通过重抽样触发k 均值聚类。
The robustness of the classification system was verified by consensus clustering, which involves k-means clustering by resampling (1,000 iterations) randomly selected tumor profiles. 


Visual representation of the consensus matrix reveals the proportion of times in which two samples are clustered together across the resampling iterations. To determine the optimal number of tandem 3'UTRs in NMF clustering, we examined the clustering results by selecting genes based on the absolute CV from the top 5% to the top 45% and finally chose the top 25% absolute CV to perform NMF clustering (Figure S1).

The R package 'NMF' (version 0.20.6) was used to perform the NMF analysis. We then used MATLAB 2015a (MathWorks, Natick, MA, USA) to conduct the principal component analysis (PCA).





## 技术: pooled short hairpin RNA screen 

- 肿瘤需要高分裂活性（High proliferative activity ）。
- 假设 3UTR 长度影响肿瘤进展。
- APA 影响3UTR长度。
- 假设 CP 因子异常表达 会导致 APA 模式异常 和 肿瘤高增值。
- 芯片数据检测 23 种 CP 因子基因表达：
	* 12个CP高表达 TNBC vs Normal adj;
	* 表达上，该组基因 高于 背景。
	* 异常CP因子期望会诱导 近端PolyA位点 切割不充分，导致APA事件。
- 所以，我们的数据表明：差异3端处理 至少能部分解释 TNBC 中的APA事件。




第二步： 使用 基于分裂的shRNA库，在TNBC中 筛选 潜在的关键3UTR调控因子。

- `Nearest shrunken centroids method` identified MDA-MB-231 and MDA-MB-468 as BL subtype, the majority APA subtype, using tandem 3'UTR profiles.
- We screened `95 shRNAs targeting the 23 core C/P factors` and `3 control hairpins` in MDA-MB-231 and MDA-MB-468.
- After infecting the cells with `lentiviruses expressing the shRNA library` (MOI = 0.3) and subjecting them to selection, we continuously cultured the cells for 21 days and harvested cellular DNA for deep sequencing (Figure ​Figure55A).
- The abundance of `each barcoded hairpin` was quantified to identify shRNAs that were selectively depleted during cell proliferation.
- As expected, after 21 days a significant reduction in the diversity of shRNAs was observed in the surviving MDA-MB-231 and MDA-MB-468 cells (Figure ​Figure55B; p = 0.003 and 0.002, respectively). 






















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











