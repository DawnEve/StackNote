# Article
> An atlas of alternative polyadenylation quantitative trait loci contributing to complex trait and disease heritability
> nature genetics | Published: 13 May 2021
> Lei Li, Kai-Lieh Huang, Yipeng Gao, Ya Cui, Gao Wang, Nathan D. Elrod, Yumei Li, Yiling Elaine Chen, Ping Ji, Fanglue Peng, William K. Russell, Eric J. Wagner & Wei Li
> https://www.nature.com/articles/s41588-021-00864-5
> https://pubmed.ncbi.nlm.nih.gov/33986536/


# Abstract

## 1.引入:GWAS分析非编码变体
全基因组关联分析已发现很多与形状和疾病相关的非编码变体。
然而，这些变体的功能解释是一个大挑战。

## 2.本文
- 从467个个体的46个组织中 (Genotype-Tissue Expression Project)，我们构建了人的3’UTR APA的数量形状位点(3'aQTL)，包含大约0.4million 与靶基因的APA相关的共有基因变体，
- 3‘aQTL可以改变polyA motif，RNA二级结构和RNA结合蛋白结合位点，导致很多APA的改变。
- 我们基于CRISPR的实验表明，这样的3’aQTL可以改变APA调控。
- Furthermore进一步的，我们展示了 mapping 3′aQTLs  can identify APA regulators, 比如 La相关蛋白4.
- Finally最后，3‘aQTL 大概和16.1%的形状相关的变体共定位，和其他QTL有很大区别，比如 eQTL。

## 3.总结
Together, our findings show that 3′aQTLs contribute substantially to the molecular mechanisms `underlying` human complex traits and diseases.

总之，我们的研究结果表明，3aQTLl在人类复杂性状和疾病的分子机制中发挥了重要作用。







# Main

## 1.GWAS 简介
- GWAS发现了很多与数量性状和常见病相关的 遗传变体(variants )。
- 然而大多位于非编码区，很难研究其对疾病和表型起作用的分子机制。
- 为了研究 GWAS 位点的功能性解释，研究者建议使用几个分子QTL分析法，包括 eQTL。
	* 就是 遗传变体 与1个或多个基因的表达相关。
- 虽然这些 遗传变体 提供了一些信息，但很多情况下，被认为是影响了附近基因的转录。很大比例和非编码变体相关的位点无法解释。

## 2.APA的作用
- APA在大多数人的基因的转录后调控中发挥作用。
通过使用不同的polyA位点，基因的3’UTR可能变短，或变长而包含 顺式 cis 调控元件，比如 miRNA 或者 RBP 结合位点。
所以，APA可以影响mRNA的稳定性和翻译效率，及蛋白的亚细胞定位。

> Tian, B. & Manley, J. L. Alternative polyadenylation of mRNA precursors. Nat. Rev. Mol. Cell Biol. 18, 18–30 (2017).

- polyA位点的多样性显著影响正常发育，和疾病进展，比如肿瘤。
通过改变NUDT21，一个关键的APA调控子，The broad importance of alternative polyadenylation 被展示了，包括 in diseases such as glioblastoma(恶性胶质瘤) and idiopathic pulmonary fibrosis(特发性肺间质纤维化).

最近，我们的工作发现一个更微妙的APA的解释，乳腺癌中3'UTR缩短，通过扰乱ceRNA交谈，抑制 抑癌基因。


## 3.遗传变体与APA尚无系统研究
除了和基因表达相关，遗传变体 还被发现在某些细胞系中，作为重要的有些基因的APA的调控因子。
> Yoon, O. K., Hsu, T. Y., Im, J. H. & Brem, R. B. Genetics and regulatory impact of alternative polyadenylation in human B-lymphoblastoid cells. PLoS Genet. 8, e1002882 (2012).
> Zhernakova, D. V. et al. DeepSAGE reveals genetic variants associated with alternative polyadenylation and expression of coding and non-coding transcripts. PLoS Genet. 9, e1003594 (2013).

Moreover，APA相关的基因变化已经和多种疾病的状态关联，包括 cancer 11, α-thalassemia 12, facioscapulohumeral muscular dystrophy 13, bone fragility 14, neonatal diabetes 15 and systemic lupus erythematosus 16,17.

作为这些研究的一个主要例子，一个位于 3′UTR of IRF5 的 SNP(rs10954213)可以改变3‘UTR长度，从而改变mRNA稳定性，进而有助于系统性红斑狼疮的易感性。

除了以上离散的几个例子，SNP对APA的影响还没有在人的不同组织系统研究，他们与表型和疾病的关系也没有研究。

## 4.本研究
之前研究使用3’端测序，识别APA相关的SNP，并没有被广泛采用；那些方法仅仅被用于小规模样品中。

相反，RNA-seq在eQTL研究中被大量应用；然后，仅几个RNA-seq数据被系统研究和量化了APA事件。
> Mariella, E., Marotta, F., Grassi, E., Gilotto, S. & Provero, P. The length of the expressed 3′ UTR is an intermediate molecular phenotype linking genetic variants to complex diseases. Front. Genet. 10, 714 (2019).

为研究人组织中APA调控的遗传基础，我们使用自己的 DaPars算法，在GTex的467个个体的46个组织中，从8277个偶联全基因组基因型数据的RNA-seq数据集中，构建组织特异的人APA事件图谱。
> Xia, Z. et al. Dynamic analyses of alternative polyadenylation from RNA-seq reveal a 3′-UTR landscape across seven tumour types. Nat. Commun. 5, 5274 (2014).

总共发现403,215 common cis-acting genetic variants associated with APA (3′aVariants)，其中16.1%的位点在至少一个组织中和性状相关位点共定位。

Collectively，我们的结果
	- 表明3’aQTL一个新出现的分子表型的基因结构
	- 可被用于解释很大比例的非编码 遗传变异 的机制。


# Results

## An atlas of human 3′aQTLs
为检测人主要组织中的APA事件，使用GTEx v0.7 项目的8277个RNA-seq样本总计46个组织类型，用DaPars v2.0 算法检测APA事件。

---
Q: 什么是 PEER factor ?? //todo

The PDUI values can then be normalized further after corrections for known covariates including sex, sequencing platform, population structure, RNA integrity number and inferred technical covariates using `probabilistic estimation of expression residual (PEER) factors` 21. 

> 21.Stegle, O., Parts, L., Piipari, M., Winn, J. & Durbin, R. Using probabilistic estimation of expression residuals (PEER) to obtain increased power and interpretability of gene expression analyses. Nat. Protoc. 7, 500–507 (2012).


---
实验验证的QTL: IRF5基因，就是不同的SNP类型，不应不同的远端使用率。

![0521-3QTL-IRF5](/data/2021/images/05/0521-3QTL-IRF5.png)
Fig. 1: Atlas of genetic variations associated with 3′UTR usage across 46 human tissues.

b, Example of a 3′aVariant (rs10954213) that is strongly associated with the IRF5 3′UTR usage in whole blood. 
**Left**: Distribution of the normalized PDUI for each genotype. Each dot in the box plot represents the normalized PDUI value for one particular sample (n = 396). The center horizontal lines within the plot represent the median values and the boxes span from the 25th to the 75th percentile. The whiskers extend to 1.5× interquartile range (IQR) (bottom). 
**Right**: RNA-seq coverage track for the IRF5 3′UTR. The bottom four tracks show the RefSeq gene structure, 3′aVariant location, reported poly(A) site location and DaPars v.2 prediction.


---
Q: 连锁不平衡怎么理解和计算??  SuSiE回归??  //todo

To account for correlations among the identified 3′aQTLs, due to linkage disequilibrium (LD), we used `sum of single effects (SuSiE) regression` 30 to fine-map independent associations (summarized as 95% single-effect credible sets) for each APA transcript in each tissue. 

> 30.Wang, G., Sarkar, A., Carbonetto, P. & Stephens, M. A simple new approach to variable selection in regression, with application to genetic fine mapping.J. R. Stat. Soc. Series B Stat. Methodol. 82, 1273–1300 (2020).

为考虑识别的3‘aQTL的关系，因为LD，我们使用了单因素相加回归，来为每个组织中的每个APA转录本精确比对独立相关性。






## Patterns of tissue specificity for 3′aQTLs

---
Q: MASH?? //todo

To examine how cis regulatory elements contribute to APA events in tissue-specific or shared manners (Supplementary Fig. 8), we used `multivariate adaptive shrinkage (MASH)`31 to estimate the effect sizes of 3′aQTLs shared across all 46 tissues, while controlling for nongenetic correlations, such as sample overlap. 

> 31.Urbut, S. M., Wang, G., Carbonetto, P. & Stephens, M. Flexible statistical methods for estimating and testing effects in genomic studies with multiple conditions. Nat. Genet. 51, 187–195 (2019).


---
Considered collectively, these observations suggested that 3′aQTL effect sizes exhibit greater tissue specificity than that of eQTLs.





## 3′aQTLs have distinct molecular features
- 3aQTL显著富集在3’UTR和下游5k内。
- 而eQTL显著富集在promoter区，上游5k区和5‘UTR区。
- splicing QTLs (sQTLs)33 which are enriched primarily within gene bodies and splice regions (Extended Data Fig. 6).

> 33.Li, Y. I. et al. RNA splicing is a primary link between genetic variation and disease. Science 352, 600–604 (2016).

- protein QTLs34 (pQTLs) 

> 34.Sun, B. B. et al. Genomic atlas of the human plasma proteome. Nature 558, 73–79 (2018).

---
Q: phastCons conservation score?? //todo

Interestingly, 3′aQTLs are also highly enriched in conserved regions (University of California Santa Cruz (UCSC) phastCons conservation score >0.8) (Fig. 3d) but not in transcription factor binding sites (Supplementary Fig. 13).






## Alterations of poly(A) motifs are associated with APA

遗传变体是怎么作用到APA事件的？
- 可能是SNP改变了polyA motif? 
- 只有几个孤立的细胞系中的证据
> 9.Yoon, O. K., Hsu, T. Y., Im, J. H. & Brem, R. B. Genetics and regulatory impact of alternative polyadenylation in human B-lymphoblastoid cells. PLoS Genet. 8, e1002882 (2012).
> 35.Thomas, L. F. & Sætrom, P. Single nucleotide polymorphisms can create alternative polyadenylation signals and affect gene expression through loss of microRNA-regulation. PLoS Comput. Biol. 8, e1002621 (2012).

- 从数据库 PolyA_DB, UCSC, Ensembl 和RefSeq 注释文件中，上游50bp范围内的3aVariants 变体，搜索15个常见的polyA motif。
> 36.Lee, J. Y., Yeh, I., Park, J. Y. & Tian, B. PolyA_DB 2: mRNA polyadenylation sites in vertebrate genes. Nucleic Acids Res. 35, D165–D168 (2007).




## APA-associated RBP binding sites and RNA secondary structure


## 3′aQTL analysis facilitates the identification of APA regulators such as LARP4


## 3′aQTLs can explain a significant proportion of disease heritability


## Many trait-colocalizing 3′aQTLs are independent of gene expression









# Discussion





# Methods



## Code availability
The open-source DaPars v.2.0 program is freely available at
https://github.com/3UTR/DaPars2.
文档 https://wlcb.oit.uci.edu/3aQTL/index.php



# 语言学习

---

- This observation is consistent with the metagene analysis `encompassing` the relative position distributions of 3′aQTLs and eQTLs over their associated genes

**encompass [ɪnˈkʌmpəs] vt. 包含；包围，环绕；完成**

1. V-T If something encompasses particular things, it includes them. 包含

> His repertoire encompassed everything from Bach to Schoenberg.
他的表演曲目从巴赫到勋伯格，样样俱全。

2. V-T To encompass a place means to completely surround or cover it. 围住; 覆盖

> The map shows the rest of the western region, encompassing nine states.
这地图显示了其余西部区域，覆盖了9个州。







---
> 2021.5.22 reading