







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











