
# Paper
> Comprehensive Analysis of APA Events and Their Association With Tumor Microenvironment in Lung Adenocarcinoma
> 肺腺癌中，APA事件，与肿瘤微环境的关系。
> Front Genet |  2021 Mar 18;12:645360. doi: 10.3389/fgene.2021.645360. eCollection 2021.
> Yuchu Zhang 1 2, Libing Shen 3, Qili Shi 4, Guofang Zhao 2 5, Fajiu Wang 2 5
> Department of Intensive Care Medicine, HwaMei Hospital, University of Chinese Academy of Sciences, Ningbo, China. 宁波-中科院-华美医院
> https://pubmed.ncbi.nlm.nih.gov/33815479/
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8012674/#B25


是个水刊，可以学习一下套路，及方法学。
> Frontiers in Genetics | 3.258 IF, 中科院 2 区， 版面费挺贵 $2.9k


# Abstract

---
Background: APA可调控基因表达，但在肺腺癌中，具体的APA事件，及其潜在的生物学或临床意义未知。
- Alternative polyadenylation (APA) is a pervasive posttranscriptional mechanism regulating gene expression. 
- However, the specific dysregulation of APA events and its potential biological or clinical significance in lung adenocarcinoma (LUAD) remain unclear.


---
Methods: 搜集2个公共数据集中的肺癌数据：GEO和TCGA。使用DaPar算法。
- Here, we collected RNA-Seq data from two independent datasets: [`GSE40419`](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE40419) (n = 146) and `The Cancer Genome Atlas (TCGA) LUAD` (n = 542). 
- The [`DaPars algorithm`](https://github.com/ZhengXia/dapars) was employed to characterize the APA profiles in tumor and normal samples. 
- Spearman correlation was used to assess the effects of APA regulators on 3' UTR changes in tumors. 
- The Cox proportional hazard model was used to identify clinically relevant APA events and regulators. 
- We stratified 512 patients with LUAD in the TCGA cohort through consensus clustering based on the expression of APA factors.

---
Findings: 
- We identified remarkably consistent alternative 3' UTR isoforms between the two cohorts, most of which were shortened in LUAD. 
- Our analyses further suggested that aberrant usage of proximal polyA sites resulted in escape from miRNA binding, thus increasing gene expression. 
- Notably, we found that the 3' UTR lengths of the mRNA transcriptome were correlated with the expression levels of APA factors. 
- We further identified that CPSF2 and CPEB3 may serve as key regulators in both datasets. 
- Finally, `four LUAD subtypes` according to different `APA factor expression patterns` displayed distinct clinical results and oncogenic features related to tumor microenvironment including immune, metabolic, and hypoxic status.

---
Interpretation: 
- Our analyses characterize the APA profiles among patients with LUAD and identify two key `regulators for APA events in LUAD, CPSF2 and CPEB3`, which could serve as the potential prognostic genes in LUAD.




# INTRODUCTION

## 1. 肺腺癌

- 非小细胞肺癌(NSCLC)排在癌症死因前列。肺腺癌(LUAD)是做多的，占了所有肺癌的40%。
- LUAD的5年生存期很差，因为预后不好，有效治疗手段有限。
- 阐释LUAD的潜在分子机理很必要。
- LUAD转录组的进展有助于解释RNA相关事件，比如alternative splicing and polyadenylation，能在肿瘤发展和进展过程中，从致癌过程和信号通路角度提供新视角。

## 2. APA的作用及复合体
- APA被认为是调控基因表达的重要事件。
- 70%的人已知基因有多个polyA位点，产生不同长度的3’UTR，丰富转录本多样性。
- 3‘UTR包含顺式元件(cis element)，AU-rich elements 和 miRNA结合位点((Lin et al., 2012)，所以有很多RNA转录后处理。
>An in-depth map of polyadenylation sites in cancer.
Lin Y, Li Z, Ozsolak F, Kim SW, Arango-Argoty G, Liu TT, Tenenbaum SA, Bailey T, Monaghan AP, Milos PM, John B
Nucleic Acids Res. 2012 Sep 1; 40(17):8460-71.


- 改变polyA位点的使用能影响mRNA的稳定性，翻译和细胞亚定位.
>Review Alternative polyadenylation of mRNA precursors.
Tian B, Manley JL
Nat Rev Mol Cell Biol. 2017 Jan; 18(1):18-30.


mRNA的聚腺苷酸化被近20个核心蛋白组成的4个复合体驱动:
- cleavage and polyadenylation specificity factor, 
- cleavage stimulation factor (CstF), 
- cleavage factors I and II, 
- and several single proteins (Gruber and Zavolan, 2019).
>Review Alternative cleavage and polyadenylation in health and disease.
Gruber AJ, Zavolan M
Nat Rev Genet. 2019 Oct; 20(10):599-614.


##  3. APA促肿瘤的方式，引出本文
- 多种癌症和肿瘤细胞中广泛存在3UTR缩短。促瘤方式:
  * 缩短能激活原癌基因
  * 或者抑制抑癌记基因，通过 反式 干扰ceRNA网络
>CFIm25 links alternative polyadenylation to glioblastoma tumour suppression.
Masamha CP, Xia Z, Yang J, Albrecht TR, Li M, Shyu AB, Li W, Wagner EJ
Nature. 2014 Jun 19; 510(7505):412-6.
>3' UTR shortening represses tumor-suppressor genes in trans by disrupting ceRNA crosstalk.
Park HJ, Ji P, Kim S, Xia Z, Rodriguez B, Li L, Su J, Chen K, Masamha CP, Baillat D, Fontes-Garfias CR, Shyu AB, Neilson JR, Wagner EJ, Li W
Nat Genet. 2018 Jun; 50(6):783-789.

- 很多肿瘤中看到APA因子的表达水平的变动，导致使用近端polyA位点。

至今，好几个使用标准RNA-seq找全局APA的工具:  (Xia et al., 2014; Arefeen et al., 2018; Ye et al., 2018) 
有助于发现人组织中 反复出现的、肿瘤特异的APA事件：(Xia et al., 2014; Xiang et al., 2018; Venkat et al., 2020). 


然而，深入的分析LUAD中具体的APA事件，及在大群体中的生物学意义任然有待研究。
本研究收集2个大数据集，分析了其APA使用的差异和相似性。
我们对LUAD中APA的潜在调控和作用进行了系统分析。




# Materials and Methods

## 数据收集 (Data Collection )
TCGA: https://portal.gdc.cancer.gov/ 484tumor sample，polyA富集法。
GEO: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE40419 没说怎么富集RNA的。

肿瘤-瘤旁 配对的样本比较少: 
The numbers of paired samples in those two sets were 57 and 73 for differential analysis.



## 鉴定APA事件 (Characterization of APA Events)
https://github.com/ZhengXia/DaPars

非参数检验:
To identify the differences in 3′ UTRs between tumor and normal samples, we utilized the paired Wilcoxon rank-sum test to determine the significance. 

显著性标准:
The differential APA events were defined by the Benjamini–Hochberg adjusted p-value (i.e., false discovery rate) <0.05 and |ΔPDUI| = |PDUItumor − PDUInormal| > 0.1.

> p.adj<0.05 & abs(PDUI)>0.1



## (miRNA结合位点)Analysis of miRNA-Binding Sites and DEGs

---
Q: 怎么分析损失的miRNA结合位点的个数?

把微点下载自 TargetScanHuman 7.2. 过滤条件不懂:  //todo
miRNA-predicted targets and binding sites were downloaded from TargetScanHuman 7.2. High-confidence sites were filtered by context + score percentile > 90 (Agarwal et al., 2015).
> Predicting effective microRNA target sites in mammalian mRNAs.
Agarwal V, Bell GW, Nam JW, Bartel DP
Elife. 2015 Aug 12; 4():.

然后应用到DaPars识别到的3UTR改变的基因上，统计损失miRNA靶点的基因个数。
We then applied this genomic feature on the 3′ UTR changes identified by the DaPars algorithm to acquire the number of genes that lost miRNA targets. 


---
差异表达基因使用 edgeR，FDR矫正后p<0.05的认为显著。不考虑FC??!!
The R package “EdgeR” (version 3.30.3) was employed to identify differentially expressed genes (DEGs) with a Benjamini and Hochberg adjusted p-value < 0.05 (Robinson et al., 2010).



## 分析APA核心调控子 (Analysis of APA Core Regulators)


---
与mRNA 聚腺苷酸化相关的GO term(mRNA polyadenylation, mitochondrial mRNA polyadenylation, regulation of mRNA polyadenylation, negative regulation of mRNA polyadenylation, and positive regulation of mRNA polyadenylation) 内的基因都认为是APA核心调控子。


---
所有的TCGA-LUAD群体的体细胞突变数据: 公开的 TCGA-MAF文件包含 562个病人。
该数据集还包括拷贝数变异，下载自 http://www.cbioportal.org/


---
Q: 不太清楚这个基因集有多少个？怎么计算的3个(TPM, PDUI, 拷贝数)的相关系数？还是两两计算的？//todo

APA调控基因，应该能调控3UTR长度。
其表达量可能受拷贝数变异的影响。
所以，在肿瘤中，APA调控者的TPM值被用来计算，和每个PDUI和拷贝数的Spearman相关系数。
Therefore, the transcripts per kilobase million (TPM) values for APA regulators were used to calculate the Spearman correlations between each PDUI and the copy number change in those regulators in tumors. 

Spearman相关显著标准：abs(rho)>0.3, p.adj<0.05
A Spearman correlation coefficient | rho| > 0.3 and adjusted p-value < 0.05 were considered significant.





## 生存期分析 APA事件及其调控子 (Survival Analysis for APA Events and Their Regulators)

1. 单因素cox比例风险模型：R包“survival” (version 3.1-12) 的coxph函数，用于差异的APA事件和调控子基因。
`The univariate Cox proportional-hazard model` implemented in the “coxph” function from the R package “survival” (version 3.1-12) was used for each differential APA event and regulator gene. 


2. APA调控子的表达量是 log2(tpm+0.01)转换后用于分析的。
The expression levels of APA regulators were log2(TPM + 0.01) transformed before analysis. 


3. 判断标准
似然比检验 p<0.05 被认为和生存期显著相关。
Hazard ratios>1 预示着风险， <1则好结果。

`A likelihood ratio test` with p < 0.05 was considered significantly associated with survival time. 
`Hazard ratios >1 indicated survival risks`, whereas those <1 were associated with better outcomes.



## 使用APA调控子聚类 (Clustering Samples Based on Transcriptional Profiles of APA Regulators)

1.使用Z-score标准化35个APA调控子的表达量。
2.使用APA调控子的欧氏距离，对512个LUAD样本进行K-means聚类，K=2-9
Consensus K-means clustering of 512 LUAD samples on the basis of the Euclidean distances of the APA regulators was conducted from k = 2 to k = 9. 

3.每次迭代，使用80%的肿瘤样本，100%的调控子基因。重复1000次。
For each iteration, 80% of the tumor samples and 100% of the regulators were selected. This process was repeated for 1,000 times.

4.对于每个k做经验累积分布曲线(CDF)，观察k在哪个CDF区域达到接近最大值。
Empirical cumulative distribution CDF plots were generated for each k to identify the k at which the CDF area reached an approximate maximum value.
// todo 不懂这一步干啥的，怎么判断？

这个聚类使用R包 ConsensusClusterPlus。
This clustering analysis was performed in the R package “ConsensusClusterPlus” (version 1.52.0) (Wilkerson and Hayes, 2010).
> ConsensusClusterPlus: a class discovery tool with confidence assessments and item tracking.
Wilkerson MD, Hayes DN
Bioinformatics. 2010 Jun 15; 26(12):1572-3.


---
使用R包 survival 来分析，来比较 聚类获得的4个组的生存分布： KM生存曲线，log-rank检验。

`Kaplan–Meier survival curve analysis` and `log-rank tests` were used to compare the survival distributions among the four groups identified by `consensus clustering` in the R package “survival” (version 3.1-12).

> consensus clustering 一致性聚类





## 计算免疫、缺氧、代谢富集打分 (Calculation of Immune, Hypoxic, and Metabolic Enrichment Scores)

1.从CIBERSORT下载了22个免疫细胞的marker基因：https://cibersort.stanford.edu/
Gene markers of 22 immune cells were downloaded from CIBERSORT 4 (Newman et al., 2015). 

2.挑选一个15基因表达特征，作为缺氧标记物。因为他们在文章中对缺氧状态有最好的分类效果。
A 15-gene expression signature was selected for the hypoxia markers because they have been shown to classify hypoxia status at best (Ye et al., 2019). 

3.使用R包GSVA做单个样本GSEA(ssGSEA)：22种免疫细胞及缺氧状态每个基因集的标准化富集分数(NES)
Single sample gene set enrichment analysis (ssGSEA) implemented in the R package “GSVA” (version 1.24.0) (Hanzelmann et al., 2013) was conducted to calculate the `normalized enrichment score (NES)` for each gene set of the 22 immune cells and the hypoxia status. 

4.从KEGG下载了5个代谢通路的基因。使用GSVA计算每个代谢通路的富集分数。
Genes of 5 metabolic pathways were downloaded from the Kyoto Encyclopedia of Genes and Genomes (KEGG) database. 

Gene set variation analysis (GSVA) was used to calculate the enrichment score of each metabolic pathway.





# Results

## LUAD中全局3UTR缩短 |Global 3′ UTR Shortening in LUAD

肿瘤中，shorten的基因明显多于lengthen的个数。
有显著3UTR events的基因的3UTR明显比阈值下的要长。

> https://pubmed.ncbi.nlm.nih.gov/29106591/
> Comprehensive Characterization of Alternative Polyadenylation in Human Cancer.
Xiang Y, Ye Y, Lou Y, Yang Y, Cai C, Zhang Z, Mills T, Chen NY, Kim Y, Muge Ozguc F, Diao L, Karmouty-Quintana H, Xia Y, Kellems RE, Chen Z, Blackburn MR, Yoo SH, Shyu AB, Mills GB, Han L
J Natl Cancer Inst. 2018 Apr 1; 110(4):379-389.

---
比较发现，原癌基因比抑癌基因和其他基因的3UTR要长。

--
为了比较反复出现的APA，求2个数据集的交集，得到114个基因。

---
文献说，APA来源的3UTR可能影响mRNA和蛋白的定位。
APA-derived 3′ UTRs have been proposed to affect the mRNA and protein location (Berkovits and Mayr, 2015).
> Alternative 3' UTRs act as scaffolds to regulate membrane protein localization.
Berkovits BD, Mayr C
Nature. 2015 Jun 18; 522(7556):363-7.

使用LUAD发现的反复出现的APA改变，用R包clusterProfiler做富集分析。
主要富集在膜上。
比如，溶酶体膜上的一个例子(fig.S1c-f)
For example, we showed the detailed recurrent alterations in 3′ UTRs located in lysosomal membranes (Supplementary Figures 1C–F).





## (3UTR缩短介导的miRNA结合位置丢失)3′ UTR Shortening-Mediated Loss of miRNA-Binding Sites

3UTR缩短的基因，大部分都损失至少1个miRNA结合位点。
3UTR缩短的基因有上调的，但不是全部，说明除了3UTR结合miRNA外，还有其他机制。

有些报道说，长的3UTR可以通过 反式调控机制 促进表达。

Several genes have been reported that their longer 3′ UTR isoform can enhance expression through trans-regulation mechanism (Allen et al., 2013; Arake et al., 2019).
> HuD promotes BDNF expression in brain neurons via selective stabilization of the BDNF long 3'UTR mRNA.
Allen M, Bird C, Feng W, Liu G, Li W, Perrone-Bizzozero NI, Feng Y
PLoS One. 2013; 8(1):e55718.
> <i>PTBP1</i> mRNA isoforms and regulation of their translation.
Arake de Tacca LM, Pulos-Holmes MC, Floor SN, Cate JHD
RNA. 2019 Oct; 25(10):1324-1336.




## LUAD中的APA事件调控者(Regulators of APA Events in LUAD)//Good

为了研究潜在的LUAD中的APA调控子，分析了与mRNA polyadenylation相关的GO条目下的35个基因，在肿瘤和正常组织的表达。

多数(TCGA, 26/35, and Korean, 25/32)在肿瘤中高表达。
此外，我们发现有19个和2个APA调节因子在两个数据集中都表达上调和下调。
比如，CSTF2 在NSCLC 中据报道促进3UTR缩短，在2个数据集中都上调。


---
Q: 突变对APA的影响？

To further explore genetic alterations in APA regulators in LUAD that may affect their expression levels, we analyzed somatic mutations and copy number variations (CNVs) of these genes in the TCGA cohort. 

LUAD肿瘤样本中，28.1%(158/562) 有至少一个影响蛋白的突变。
大多数3’末端处理机器是RNA结合蛋白。
这些因子突变率0.2 - 2.8%(fig.3B)，并不比pan-cancer studies观测到的其他RBP高。


---
Q: CNV对APA的影响？

相对于突变，CNV很高发: 32.1–72.8%。
肿瘤中，69.7% (23/33) of APA factors和mRNA表达量正相关(rho > 0.3 and adjusted p-value < 0.05).

有超过一半是CNV gain的 14 APA regulators 在肿瘤中高表达 (e.g., CDC73 and ZC3H3)，
而下调的2个因子，CPEB1 and CPEB3，都有超过一半是 CNV losses.

我们的研究表明，LUAD中广泛存在的 3UTR缩短可能是APA因子升高，导致PAS使用增强，和之前分裂细胞中的研究一致。
Our data also indicated that widespread 3′ UTR shortening in LUAD might be caused by the elevated expression of polyadenylation factors through enhanced usage of PAS, consistent with findings from a study in proliferating cells (Elkon et al., 2012).
> E2F mediates enhanced alternative polyadenylation in proliferation.
Elkon R, Drost J, van Haaften G, Jenal M, Schrier M, Oude Vrielink JA, Agami R
Genome Biol. 2012 Jul 2; 13(7):R59.

![0528-CNV](/data/2021/images/05/0528-CNV.png)
FIGURE 3 | Genetic and expression alterations in APA regulators.
**(C)** The CNV variation frequency of APA regulators in the TCGA cohort. Gain and loss of CNV are indicated by red and blue dots, respectively. Upregulated and downregulated APA factors are colored in red and blue.


---
回顾：前文方法中APA regulator 的判断标准？
认为某基因的表达量能影响其他基因的APA，则说明该基因是APA调控者。
cor(gene i expression,  APA of each gene, method="spearman" ), 如果 |rho|>0.3 & p.adj<0.05 则认为该基因与该APA事件 显著相关。


![0528-APA-regulator](/data/2021/images/05/0528-APA-regulator.png)
FIGURE 4 Potential mechanisms for APA regulation in LUAD.
**(A)** Lollipop chart indicating the number of significantly correlated APA events with each regulator gene in the TCGA dataset. Dot size is proportional to the percentage of negatively correlated events. Numbers in the dots represent the percentages of negatively correlated events that are greater than 50%. 
在TCGA数据集中，每个基因显著相关的APA事件个数。
点大小是负相关事件百分比。
点内的数字表示负相关超过50%的百分比。

> 这种图叫棒棒糖图 https://www.jianshu.com/p/c3bd94598116


这些APA事件中，44.2% (3,165/7,163) and 79.4% (5,618/7,072)  在 2个数据集中至少和一个因子显著相关。

---
Q: 怎么理解这个筛选？
在tumor vs normal中上调了，且超过50%是负相关APA事件：该基因表达量越高，越使用近端PolyA位点。 好像这个也很有用，该基因越高，其他基因越shorten。
在tumor vs normal中下调了，且超过50%是正相关APA事件：该基因表达越高，月使用远端polyA位点。该基因越高，其他基因越lengthen。


为定义肿瘤中的失调因子，且在LUAD中起主要APA响应，我们过滤掉如下APA因子：上调且超过一半是负相关APA事件，或者下调且超过一半是正相关APA事件。
To define certain factors dysregulated in tumors that could primarily be responsible for APA mechanism in LUAD, we filtered APA factors through those upregulated with more than half of negatively correlated events or downregulated with more than half of positively correlated events.

![0528-APA-regulator2](/data/2021/images/05/0528-APA-regulator2.png)
> FIGURE 4 Potential mechanisms for APA regulation in LUAD. 
**(C)** Venn diagram showing the overlap of altered APA events correlated with CPSF2 or CPEB3 between the two datasets. 

结果，CPSF2和CPEB3被选出，2个数据集中都有超过500个APA事件相关，可能是master regulators of APA in LUAD.
另外，在2个数据集同时与这2个基因相关的基因分别是 387 and 349个 ，有显著重合(p-value = 1.39e−43 and p-value = 5.89e−114, hypergeometric test)(fig.4C).
有意思的是，这两个基因的2数据集共有部分没有交集(fig.4C)。
可能咋LUAD中这2个基因的调控是独立的。

为了检验，对这387 and 349个基因分别作GO。他们都可以调控 蛋白酶体蛋白质分解代谢过程，其他则都不同。
they can both regulate the proteasomal protein catabolic process through the APA mechanism and most other processes enriched in the two factors were different.







## APA事件及其调控者的预后价值 |The Prognostic Value of APA Events and Their Regulators in LUAD

理解LUAD中的APA事件及其调控，能为转化医学提供重要见解。
Understanding the widespread alterations in APA events and their regulators in LUAD could provide important insights for translational medicine. 

---
单变量Cox回归分析: 生存时间 ~ TCGA数据集中3UTR显著变化的272个转录本。

We performed `univariate Cox regression analyses` between survival time and 272 transcripts with significant 3′ UTR changes in the TCGA dataset.

---
结果，51个APA事件和生存期显著相关。
有缩短3UTR的病人预后都不好。
Notably, patients with shortened 3′ UTRs for all those events had poorer clinical outcomes, thus suggesting that use of a PAS may exacerbate LUAD malignancy. 

The top ten significant events are shown in Figure 5A, whose hazard ratios ranged from 0.026 to 0.15. 

Scatter plot and box plot (Figures 5C–F) further showed the positive association between PDUI scores and survival results (e.g., C4orf3 and NOL7).
散点图+箱线图：PDUI  ~  生存期。

---
进一步，看APA factor的表达量和生存期的关系。
10个因子和生存期显著相关(fig.5B)
其中9个基因的高表达与不良预后相关。
散点图+箱线图：APA因子表达量 ~ 生存期。 (e.g., SNRPA and CPSF2).








## APA因子介导的近端PAS使用把LUAD分成不同临床和分子特征的亚型(Examination of APA Factors Mediating Heterogeneity of Proximal PAS Usage Identifies LUAD Subtypes With Distinct Clinical and Molecular Features)

---
Q: 如何确定最佳分类数?? //todo

根据APA调控者的表达水平画热图，512个TCGA病人分为4类。
The optimal number of subtypes was determined by an empirical CDF plot (Supplementary Figures 3A,B).

![0528-optimal-subtypes](/data/2021/images/05/0528-optimal-subtypes.png)
> Supplementary Fig. 3 Consensus clustering of patients with LUAD (n = 512), on the basis of the expression values of APA factors. 
**a** CDF plots of consensus clusters in the range k = 2, 3, . . . , 9. 
**b** Delta area plot showing the relative change in the area under the CDF curve when cluster k increases.


四类的生存期不同。
其中第4类有50个病人，APA因子表达水平最高，预后最差。


---
为研究APA因子介导的肿瘤中poyA位点异质性，我们研究了4个亚型的3UTR变化。
To investigate APA factors mediating heterogeneity of proximal PAS usage in tumors, we further compared the 3′ UTR differences among the four subtypes. 

和APA调控子表达水平一致，亚型I使用最远端的多，而亚型IV 使用近端最多。


---
Moreover, we compared the 3′ UTR lengths and miRNA-binding sites between the events significantly shortened in subtype 4 (adjusted p-value < 0.05) and those below the threshold. 


和差异调控APA事件一样，亚型IV中3UTR缩短的转录本，有更长的3UTR长度和更多的miRNA结合位点，表明，3UTR缩短介导的miRNA结合位点丢失可能和LUAD进展有关。
As with the differentially regulated APA events, 3′ UTR-shortened transcripts in subtype 4 showed longer 3′ UTR lengths and greater miRNA-binding sites (Supplementary Figures 3D,E), suggesting that 3′ UTR shortening-mediated loss of miRNA-binding sites was associated with LUAD aggressiveness. 

---
**使用基因的PDUI值画热图，分类效果pattern1看着不明显。 对这一部分的讨论持怀疑态度。**

> Fig.6 Expression heterogeneity of APA factors reveals LUAD subtypes with distinct APA patterns and clinical features.
(D) Heat map of 3,730 APA events displaying the differences among the four subtypes. The color indicates the scaled PDUI value (red, high; blue, low). 


为探索不同APA类型在4种LUAD中是否可见，我们进一步研究了 3731 个差异变化的APA事件
To explore whether any distinct APA patterns can be seen among the four subtypes of LUAD, we further investigated 3,731 significantly different APA events` (Kruskal–Wallis test, adjusted p-value < 0.001)`. 

如fig.6D, 四个组中， 可见3个不同的调控的APA pattern。--> 我目测效果不明显。

(1)pattern1在亚型3和4中(不明显)是用缩短的3UTR，可能受到那2个亚型中上调的因子的影响。
The APA events with pattern 1 showed shorter 3′ UTR subtypes 3 and 4, which may be regulated by the factors upregulated in these two subtypes.

(2) Intriguingly, we found that pattern 2 showed longer 3′ UTR in subtypes 2 and 4. 
而pattern2 在亚型2和4中使用更长的3UTR。

我们假说：pattern2可能是2亚类共有的CPEB3造成的。
We hypothesized that pattern 2 could be caused by CPEB3 that was upregulated in those two subtypes. 

比较 pattern2和CPEB3正相关事件作比较。
To test it, we compared this pattern with CPEB3 positively correlated events. 


就像韦恩图fig.6E, 251个增长的基因中，73.7% (185)可能依赖CPEB3的表达。
As shown in Figure 6E, among 251 lengthened genes, 73.7% (185) may depend on the expression of CPEB3. 


(3) Pattern 3 consisted of the largest numbers of APA events that were shortened in subtypes 2 and 4, which may be caused by the factors upregulated in these two subtypes. 
pattern3包含数量最多的APA事件，在亚型2和4中变短，可能这2类高表达的因子引起的。

另外，可能的 master regulator CPSF2 负相关的APA事件都在pattern3中。
In addition, APA events negatively correlated with CPSF2 which we identified as a possible master regulator were all in pattern 3 (Figure 6F).


---
为研究APA异质性对基因表达的影响，聚焦在展现更多APA变化的亚型4上。
3669个shortened genes中，2163个(p-value = 2.24e−6, hypergeometric test)在亚型4中高表达。

![0528-up-shorten](/data/2021/images/05/0528-up-shorten.png)

探索APA事件介导的4个亚型的基因表达异质性，做功能富集。
We further explored the functional implications of the gene expression heterogeneity among the four subtypes mediated by APA events. 

亚型4中，高表达基因 + 3UTR缩短的基因 并集有2163个基因，GO and KEGG pathway enrichment analysis of 2,163 overlapping genes identified several highly enriched GO terms: histone modification, RNA splicing, proteasomal process, and cell cycle (Figure 7B).

Similar biological processes have been observed in pan-cancer correlation analysis (Xiang et al., 2018), and our results further suggested APA regulation of those functions.
> Comprehensive Characterization of Alternative Polyadenylation in Human Cancer.
Xiang Y, Ye Y, Lou Y, Yang Y, Cai C, Zhang Z, Mills T, Chen NY, Kim Y, Muge Ozguc F, Diao L, Karmouty-Quintana H, Xia Y, Kellems RE, Chen Z, Blackburn MR, Yoo SH, Shyu AB, Mills GB, Han L
J Natl Cancer Inst. 2018 Apr 1; 110(4):379-389.


---
惊人的，我们发现了免疫个缺氧通路: NIK/NF-κB, Wnt, and TNF signaling
Remarkably, we also found enriched pathways related to immune and hypoxia such as NIK/NF-κB, Wnt, and TNF signaling (Figure 7B). 


因此，我们根据先前报道的基因信号，利用ssGSEA估计了22类免疫细胞的浸润水平和患者的缺氧状态。
Thus, the infiltration levels of 22 immune cells and hypoxia status in patients were estimated by using ssGSEA based on the previous reported gene signatures (Newman et al., 2015; Ye et al., 2019). 


4个亚类在免疫细胞和缺氧状态上完全不同。
Strikingly, the four subtypes displayed marked differences in immune and hypoxia status (Figures 7C,D). 

亚型1，使用远端polyA site，有最高的先天和后天免疫细胞浸润，以及最低的缺氧打分。
Subtype 1, with the greatest distal PAS usage, showed the highest innate and adaptive immune cell infiltration and the lowest hypoxia score (Figures 7C,D). 

以上表明，APA塑造这免疫微环境，或者相反。
Overall, these results indicated the role of APA in shaping the tumor microenvironment (TME) or vice versa.

//todo: 到底是APA塑造TME，还是相反?









## LUAD病人代谢基因的APA异质性(Heterogeneity of Proximal PAS Usage of Metabolic Genes in LUAD Patients)

---
Q: 这个gene set怎么来的？

LUAD病人中APA事件诱导的 基因表达异质性，富集到5个代谢通路:
We also found that gene expression heterogeneity among LUAD patients mediated by APA events was enriched in five metabolic pathways including citrate cycle (TCA cycle), lysine degradation, cysteine and methionine metabolism, glycolysis (gluconeogenesis), and fructose and mannose metabolism (Figure 8A). 


比较4个亚型中，5个通路的NES。亚型4，使用最多的近端polyA site，在5个通路中打分都最高。
Therefore, we compared the NESs of five pathways among four subtypes. As expected, subtype 4, with the greatest usage of proximal PAS, showed the highest score in all five metabolic pathways (Figures 8B–F). 


为检测这个异质性是否是APA机制调控的，做glycolytic pathway通路的基因表达量和他们的3UTR长度的相关性。
To examine whether this heterogeneity is regulated by APA mechanism, we conducted the correlations between expression levels of genes in the glycolytic pathway and their 3′ UTR lengths. 

DLAT, PFKM, and PGAM1报道说通过糖酵解途径，促进肿瘤细胞生长。
DLAT, PFKM, and PGAM1 were reported can promote cancer cell growth through the glycolytic pathway (Tang et al., 2012; Goh et al., 2015; Huang et al., 2019). 

fig.8G-I，DLAT, PFKM, and PGAM1表达量都和其PDUI负相关。
As shown in Figures 8G–I, DLAT, PFKM, and PGAM1 were all negatively correlated with their PDUI values. 

还发现 CPSF2 能像DLAT一样调节代谢基因的APA事件。
Moreover, we found that CPSF2 may regulate APA events of metabolic genes like DLAT (Figure 8J).








# Discussion

## 1. 肿瘤中大量3UTR缩短
和正常组对照，肿瘤中大量shorten of APA。
另外，3UTR显著变化的基因富集在 cell membrane and some organelle membranes, including those of lysosomes, vacuoles, and late endosomes. 

3UTR改变能引起膜蛋白的亚细胞定位改变，已经被证实。CD47，膜蛋白，可昌盛不同3UTR变体，亚定位到不同亚细胞部位，在细胞生存和迁移中起不同作用。
> Alternative 3' UTRs act as scaffolds to regulate membrane protein localization.
Berkovits BD, Mayr C
Nature. 2015 Jun 18; 522(7556):363-7.


我们的分析表明，膜相关基因的3UTR长度的改变，可能通过APA依赖的蛋白定位来促进肿瘤细胞生长。
Our analyses suggest that alternations of 3′ UTR lengths in membrane-associated genes may promote cancer cell growth through `APA-dependent protein localization`. 

3UTR缩短介导的miRNA结合位置丢失，能影响该基因的表达水平。
3′ UTR shortening-mediated miRNA binding loss has been found to affect the expression levels of these genes  (Venkat et al., 2020). 
> Alternative polyadenylation drives oncogenic gene expression in pancreatic ductal adenocarcinoma.
Venkat S, Tisdale AA, Schwarz JR, Alahmari AA, Maurer HC, Olive KP, Eng KH, Feigin ME
Genome Res. 2020 Mar; 30(3):347-360.

我们发现很多基因3UTR缩短后表达上调，但是和全局DEG比较后统计上不显著，表明APA仅仅是调控mRNA表达水平的众多机制中的一个。
We observed a considerable number of genes upregulated in LUAD after shortening of their 3′ UTRs, but this result was not statistically significant when compared with the global pattern of DEGs, which indicates that APA is only one of the multiple mechanisms that govern mRNA expression levels (Venkat et al., 2020).



## 2.识别APA调控者
LUAD中3UTR使用的调控还不清楚。
我们的分析表明，LUAD中，大多数APA因子上调，且和远端使用率负相关：就是因子上调，远端polyA使用率降低，也就是3UTR缩短。


泛癌分析中，CSTF2 被认为是调控3UTR关键因子，与多个肿瘤发生相关：bladder (Chen et al., 2018), breast (Akman et al., 2015), and lung (Aragaki et al., 2011). 
> |-- CSTF2-Induced Shortening of the <i>RAC1</i> 3'UTR Promotes the Pathogenesis of Urothelial Carcinoma of the Bladder.
Chen X, Zhang JX, Luo JH, Wu S, Yuan GJ, Ma NF, Feng Y, Cai MY, Chen RX, Lu J, Jiang LJ, Chen JW, Jin XH, Liu HL, Chen W, Guan XY, Kang TB, Zhou FJ, Xie D
Cancer Res. 2018 Oct 15; 78(20):5848-5862.
> |-- 3'UTR shortening and EGF signaling: implications for breast cancer.
Akman HB, Oyken M, Tuncer T, Can T, Erson-Bensan AE
Hum Mol Genet. 2015 Dec 15; 24(24):6910-20.
> |-- Characterization of a cleavage stimulation factor, 3' pre-RNA, subunit 2, 64 kDa (CSTF2) as a therapeutic target for lung cancer.
Aragaki M, Takahashi K, Akiyama H, Tsuchiya E, Kondo S, Nakamura Y, Daigo Y
Clin Cancer Res. 2011 Sep 15; 17(18):5889-900.

---
相反，我们发现LUAD中多个APA因子可以作为 master regulators，比如RNF40, CDC73, and VIRMA，而这些并不是polyadenylation machinery的核心蛋白。
In contrast, we found that several APA factors may act as master regulators in LUAD, such as RNF40, CDC73, and VIRMA, which are `not core proteins in the polyadenylation machinery`. 

---
甲基转移酶 组分 VIRMA，通过倾向于接近stop codon的3UTR的m6A mRNA甲基化，促进选择近端polyA site。
The methyltransferase component VIRMA facilitates the selection of proximal PAS through preferential m6A mRNA methylation in the 3′ UTR and near the stop codon (Yue et al., 2018). 

而在HeLa细胞中，删除VIRMA or METTL3导致全局APA变长。
Indeed, depletion of VIRMA or METTL3 elicits global lengthening of APA events in the HeLa cell line (Yue et al., 2018). 
> VIRMA mediates preferential m<sup>6</sup>A mRNA methylation in 3'UTR and near stop codon and associates with alternative polyadenylation.
Yue Y, Liu J, Cui X, Cao J, Luo G, Zhang Z, Cheng T, Gao M, Shu X, Ma H, Wang F, Wang X, Shen B, Wang Y, Feng X, He C, Liu J
Cell Discov. 2018; 4():10.

我们的分析进一步表明，LUAD患者高表达 VIRMA 和不良预后相关。

以上发现，VIRMA可以作为LUAD的原癌基因，通过m6A mRNA甲基化，负相关的调控肿瘤相关基因的3UTR长度，来促肿瘤。
These findings provide a possibility that VIRMA may serve as an oncogene in LUAD that negatively regulates the 3′ UTR lengths of cancer-associated genes through m6A mRNA methylation to enhance tumorigenicity. 

除了引发3UTR缩短，之前一个研究表明，包括LUAD在内的泛癌分析中，PABPN1作为一个master regulator，促进远端polyA使用。
In addition to the factors that induce 3′ UTR shortening, a previous study has revealed PABPN1 as a master regulator that promotes distal PAS usage in pan-cancer analyses including LUAD (Xiang et al., 2018). 
> Comprehensive Characterization of Alternative Polyadenylation in Human Cancer.
Xiang Y, Ye Y, Lou Y, Yang Y, Cai C, Zhang Z, Mills T, Chen NY, Kim Y, Muge Ozguc F, Diao L, Karmouty-Quintana H, Xia Y, Kellems RE, Chen Z, Blackburn MR, Yoo SH, Shyu AB, Mills GB, Han L
J Natl Cancer Inst. 2018 Apr 1; 110(4):379-389.

在GEO数据集中，PABPN1与 17.6%的APA事件正相关。
We also found that PABPN1 positively correlates with 17.6% of APA events in the Korean LUAD cohort (data not shown). 

---
我们识别到2个数据集中都下调的基因， CPEB1 and CPEB3。
Our analysis identified two genes, CPEB1 and CPEB3, which were both downregulated in the two datasets.

相比于大多数上调的基因，CPEB3在肿瘤中和APA事件更正相关，表明：在LUAD中，它的远端polyA位点喜好的调控或许被抑制了。
Compared with most upregulated genes, CPEB3 is more positively correlated with APA events in tumors, thus suggesting that its regulation of preferential distal poly(A) site usage may be inhibited in LUAD. 


---
我们在LUAD中直接计算 APA事件和因子的相关性，来定义潜在的因子。
这个分析的局限是：被识别的调控子可能是依赖其他因子的。所以需要进一步实验验证。

总结：LUAD中不正常调控的APA因子可以被认为是潜在标记物和治疗靶点，需要实验验证。
Together, our results suggest that dysregulated APA factors in LUAD may be considered as potential biomarkers and therapeutic targets, which should be further confirmed through additional experiments.


## 3.APA与预后
APA事件的预后:
>|-- Dynamic analyses of alternative polyadenylation from RNA-seq reveal a 3'-UTR landscape across seven tumour types.
Xia Z, Donehower LA, Cooper TA, Neilson JR, Wheeler DA, Wagner EJ, Li W
Nat Commun. 2014 Nov 20; 5():5274.
> |-- Alternative polyadenylation drives oncogenic gene expression in pancreatic ductal adenocarcinoma.
Venkat S, Tisdale AA, Schwarz JR, Alahmari AA, Maurer HC, Olive KP, Eng KH, Feigin ME
Genome Res. 2020 Mar; 30(3):347-360.

我们发现LUAD中，3UTR缩短通常预后不好。
有些APA事件提供了生物学和临床见解。
SMC1A 是一个黏连蛋白基因，在一些人肿瘤中促进肿瘤发育(Pan et al., 2016; Zhou et al., 2017; Sarogni et al., 2019).
> [SMC1A promotes growth and migration of prostate cancer in vitro and in vivo.](https://www.ncbi.nlm.nih.gov/pubmed/27667360/)
> [SMC1A recruits tumor-associated-fibroblasts (TAFs) and promotes colorectal cancer metastasis.](https://www.ncbi.nlm.nih.gov/pubmed/27826041/) 
> [Overexpression of the cohesin-core subunit SMC1A contributes to colorectal cancer development.](https://www.ncbi.nlm.nih.gov/pubmed/30823889/)

我们发现肿瘤中SMC1A 的3UTR缩短，且和预后显著相关。可能机制：人肿瘤中，其3UTR缩短才上调的。


//后两句感觉说偏了，前面没有提到这个基因。
NSCLC中，SPARC 表达水平和疾病诊断和预后相关。
Our analyses further indicate that different poly(A) site usage of SPARC may also serve as a diagnostic and prognostic factor.




## 4.










## 5.





#





# 语言学习

dismal prognosis 惨淡的预后
dismal  [ˈdɪzməl]  adj. 凄凉的，忧郁的；阴沉的，沉闷的；差劲的；可怜的
prognosis  [prɒɡˈnəʊsɪs]  n. [医] 预后；预知
elucidate  [ɪˈluːsɪdeɪt]  vt. 阐明；说明
accommodate  [əˈkɒmədeɪt]  vt. 容纳；使适应；供应；调解

> V-T If a building or space can `accommodate` someone or something, it has enough room for them. 容纳 [no cont]
The school was not big enough to `accommodate` all the children.
学校没有足够的地方容纳所有的学生。


perturbation  [ˌpɜːtəˈbeɪʃn]  n. [数][天] 摄动；不安；扰乱
empirical  [ɪmˈpɪrɪkl] adj. 经验主义的，完全根据经验的；实证的

stratification  [ˌstrætɪfɪˈkeɪʃn] n. 层理；成层
infiltration  [ˌɪnfɪlˈtreɪʃn]  n. 渗透；渗透物
glycolytic [ˌɡlaɪkəˈlɪtɪk] adj. 糖分解的


#

