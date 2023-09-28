



# 三阴乳腺癌中 APA 的异质性(Theranostics, IF=12.4)
> Dissecting the heterogeneity of the alternative polyadenylation profiles in triple-negative breast cancers
> Theranostics. 2020 Aug 21
> Department of Breast Surgery, Fudan University Shanghai Cancer Center, Fudan University, Shanghai 200032, People's Republic of China.
> https://pubmed.ncbi.nlm.nih.gov/32929364/
> https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE76250
> 基金 https://kd.nsfc.gov.cn/resultDetails?id=37b6b9dbacf67f637b42dc5afe50c83c
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



## 技术: 非负矩阵（NMF） 分子分型，最佳分类数

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



### Method: NMF 对 APA 分型

The tandem-3′UTR-based TNBC subtyping

SUI的变异程度(CV)最高的25%的APA，用于聚类。
Tandem 3′UTRs were sorted by the coefficient of variation (CV) of SUI across all samples and the top 25% most variant tandem 3′UTRs were chosen for the subsequent clustering analysis. 

稳定类的选择：使用 nsNMF 算法
The unsupervised non-negative matrix factorization (NMF) method was used to determine the optimal number of stable TNBC subtypes. We used a non-smooth NMF (nsNMF) algorithm and applied 50 and 200 iterations for the rank survey and the clustering runs, respectively. 
最佳的 rank 和分解，取决于 一致性矩阵: 分为2-10类的 cophenetic，dispersion 和 轮廓宽度。
The ideal rank basis and factorization was determined based on the review of consensus matrices, the cophenetic and dispersion coefficients and silhouette widths from clustering solutions with 2 to 10 ranks. 

验证：一致性聚类，包含随机抽样1000次的 K means 聚类。
The robustness of the classification system was verified by consensus clustering, which involves k-means clustering by resampling (1,000 iterations) randomly selected tumor profiles. 

可视化在所有抽样中(1000次)，两个样本聚到一类的比例。
Visual representation of the consensus matrix reveals the proportion of times in which two samples are clustered together across the resampling iterations. 

测试过前 5% -45% 的APA，最后选择编译最大的前 25% 做NMF聚类。
To determine the optimal number of tandem 3'UTRs in NMF clustering, we examined the clustering results by selecting genes based on the absolute CV from the top 5% to the top 45% and finally chose the top 25% absolute CV to perform NMF clustering (Figure S1).

使用R包 NMF。然后使用 matlab 做 PCA。
The R package 'NMF' (version 0.20.6) was used to perform the NMF analysis. We then used MATLAB 2015a (MathWorks, Natick, MA, USA) to conduct the principal component analysis (PCA).



### 把分类外推到细胞系

Extrapolating the clustering results to TNBC cell lines

We extrapolated the APA-based subtypes TNBC cell lines, including MDA-MB-231 and MDA-MB-468, using the R package 'pamr' [24]. 

> 24. Tibshirani R, Hastie T, Narasimhan B, Chu G. Diagnosis of multiple cancer types by shrunken centroids of gene expression. Proc Natl Acad Sci U S A. 2002;99:6567-72
> 通过基因表达中心萎缩诊断多种癌症类型。


Briefly, 'pamr' uses `nearest shrunken centroids method` to assign the subtypes of each cell line. The SUI values were normalized using quantile normalization before we using the 'pamr.train' and 'pamr.predict' functions.













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


### Pooled shRNA screening

两个库：处理和对照。
pLKO.1 lentiviral plasmids encoding shRNAs targeting 3' processing factors and nontargeting controls were each used as a pool. 


shRNA lentiviruses were designed according to the information in the RNAi Consortium (Broad Institute of MIT and Harvard) and generated from HEK293T cells. 

As previously reported [28], MDA-MB-231 and MDA-MB-468 cells were infected with lentiviral supernatant containing shRNAs with a multiplicity of infection (MOI) of 0.3. Detailed methods are provided in Supplementary Methods.

- The RNAi Consortium shRNA Library: https://www.broadinstitute.org/rnai-consortium/rnai-consortium-shrna-library







## dataset 芯片检测表达量，及APA分析

数据集: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE76250




## Tandem 3′UTR analysis 串联3UTR分析

- 变更点模型： bcp R包
- 变点检测总结-Changepoint Detection： https://zhuanlan.zhihu.com/p/335322056


The probes were partitioned into common and extended groups using `Bayesian analysis of the change point (BCP)`, which is implemented by R package 'bcp' (version 4.0.0)[22].

> 22. Erdman C, Emerson JW. bcp: An R package for performing a Bayesian analysis of change point problems. J Stat Softw. 2007;23:1-13


This approach treated all samples with a tandem 3'UTR as a multivariate series with a common change point. The algorithm input is an n (number of probes for the 3'UTR) by m (number of samples) matrix. The probe position with the largest posterior probability was identified as the change point. 




## 反相蛋白层析 Reverse phase protein arrays (RPPA) data
The RPPA data (level 4) of breast cancer samples from the Cancer Genome Atlas (TCGA) were downloaded from the Cancer Proteome Atlas (TCPA, https://tcpaportal.org/tcpa/) [26, 27].

Studying large-scale epigenetic changes such as `protein phosphorylation` or `cleavage` will greatly aid in understanding the causes and determining effective treatment of cancers and other complex diseases.


### What is RPPA?

Reverse phase protein array (RPPA) is a high-throughput antibody-based technique with the procedures similar to that of Western blots. Proteins are extracted from tumor tissue or cultured cells, denatured by SDS, printed on nitrocellulose-coated slides followed by antibody probe. Our RPPA platform currently allows for the analysis of `>1000 samples` using `at least 130 different antibodies`.


- level 1 data: SDS处理，5个2倍梯度稀释，到膜上，放大捕获每个点的信号。
- level 2 data: 基于 level 1，每个稀释曲线拟合 `B-spline model`(B样条模型)，用R包 <a href="https://bioinformatics.mdanderson.org/public-software/supercurve/" target="_blank">SuperCurve</a>。
	* 使用一个玻片上的所有信号强度，稀释步骤作为独立变量，拟合一个曲线。
	* 画图：y轴是 信号强度，x轴是 log2 蛋白浓度，可用于诊断。
- level 3 data: 基于 level 2, 归一化数据：
	1. 计算所有样本中，每一个蛋白的中位数
	2. 每个蛋白减去自己的中位数(来自step1)；
	3. 所有蛋白中，求每个样本的中位数；
	4. 每个样本减去自己的中位数(来自step3)







### `B-spline model`(B样条模型)

- https://zhuanlan.zhihu.com/p/539808761?utm_id=0

B-spline
B样条 (1978, De Boor C) 是样条曲线的一种特殊表达形式，是B-样条基函数的线性组合，是贝塞尔曲线的一般化。

- https://www.bilibili.com/video/BV1dP411r7Ve/?vd_source=826befc4ac0d0fa3b98deaa3efc7f800




## APA & cell cycle

In addition, the `3'UTR length of cell cycle-related genes is dysregulated in both normal tissue (testis and embryonic stem cells) 23 and cancerous lesions (colorectal cancer)` 30, which suggests that `the 3'UTR length of cell cycle genes` is associated with the pathway activation status.

> 23. Lianoglou S, Garg V, Yang JL, Leslie CS, Mayr C. Ubiquitously transcribed genes use alternative polyadenylation to achieve tissue-specific expression. Genes Dev. 2013;27:2380-96
> 30. Morris AR, Bos A, Diosdado B, Rooijers K, Elkon R, Bolijn AS. et al. Alternative cleavage and polyadenylation during colorectal cancer development. Clin Cancer Res. 2012;18:5256-66



可能机制：

PABPN1 has been proven to be the master factor regulating APA profiles across multiple cancer types in a large TCGA cohort 37, which supports the efficacy of our proliferation screening system. `PABPN1 regulates APA by preventing the usage of weak proximal PASs` 51.

> 37. Xiang Y, Ye Y, Lou Y, Yang Y, Cai C, Zhang Z. et al. Comprehensive Characterization of Alternative Polyadenylation in Human Cancer. J Natl Cancer Inst. 2018;110:379-89
> 51. Jenal M, Elkon R, Loayza-Puch F, van Haaften G, Kuhn U, Menzies FM. et al. The poly(A)-binding protein nuclear 1 suppresses alternative cleavage and polyadenylation sites. Cell. 2012;149:538-53



`CPSF1 and CSTF2 display the most striking differences in expression` 13. NUDT21 inhibits bladder cancer progression by regulation of APA-mediated 3'UTR alterations 53. These data suggest that the regulation of APA by altering the levels of core processing factors (especially `CPSF1 and PABPN1`) may be a general mechanism. 

> 13. Mayr C, Bartel DP. Widespread shortening of 3'UTRs by alternative cleavage and polyadenylation activates oncogenes in cancer cells. Cell. 2009;138:673-84
> 53. Xiong M, Chen L, Zhou L, Ding Y, Kazobinka G, Chen Z. et al. NUDT21 inhibits bladder cancer progression through ANXA2 and LIMK2 by alternative polyadenylation. Theranostics. 2019;9:7156-67


Significantly, the data extend our understanding of APA in regulated gene expression and pathway activation by demonstrating that `extensive 3'UTR shortening is enriched in cell cycle genes`, and that `the intervention of APA regulation inhibits cell proliferation in TNBC`. 



### 芯片 + 贝叶斯后验概率判断 断点

We applied `Bayesian change point analysis` rather than `a modified t test` to individuals. The `multivariate Bayesian approach estimated the probes' posterior probabilities` and the posterior means simultaneously, which substantially reduced the number of statistical calculations.

探针是否是转换点的概率？


Once further validated in a larger population, the APA classification system could `improve personalized treatment of TNBC`.

