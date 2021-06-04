
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








#








#





#






#





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



