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

## GWAS 简介
- GWAS发现了很多与数量性状和常见病相关的 遗传变体(variants )。
- 然而大多位于非编码区，很难研究其对疾病和表型起作用的分子机制。
- 为了研究 GWAS 位点的功能性解释，研究者建议使用几个分子QTL分析法，包括 eQTL。
	* 就是 遗传变体 与1个或多个基因的表达相关。
- 虽然这些 遗传变体 提供了一些信息，但很多情况下，被认为是影响了附近基因的转录。很大比例和非编码变体相关的位点无法解释。

## APA的作用
- APA在大多数人的基因的转录后调控中发挥作用。
通过使用不同的polyA位点，基因的3’UTR可能变短，或变长而包含 顺式 cis 调控元件，比如 miRNA 或者 RBP 结合位点。
所以，APA可以影响mRNA的稳定性和翻译效率，及蛋白的亚细胞定位。

> Tian, B. & Manley, J. L. Alternative polyadenylation of mRNA precursors. Nat. Rev. Mol. Cell Biol. 18, 18–30 (2017).

- polyA位点的多样性显著影响正常发育，和疾病进展，比如肿瘤。
通过改变NUDT21，一个关键的APA调控子，The broad importance of alternative polyadenylation 被展示了，包括 in diseases such as glioblastoma(恶性胶质瘤) and idiopathic pulmonary fibrosis(特发性肺间质纤维化).

最近，我们的工作发现一个更微妙的APA的解释，乳腺癌中3'UTR缩短，通过扰乱ceRNA交谈，抑制 抑癌基因。


## 遗传变体与APA尚无系统研究
除了和基因表达相关，遗传变体 还被发现在某些细胞系中，作为重要的有些基因的APA的调控因子。
> Yoon, O. K., Hsu, T. Y., Im, J. H. & Brem, R. B. Genetics and regulatory impact of alternative polyadenylation in human B-lymphoblastoid cells. PLoS Genet. 8, e1002882 (2012).
> Zhernakova, D. V. et al. DeepSAGE reveals genetic variants associated with alternative polyadenylation and expression of coding and non-coding transcripts. PLoS Genet. 9, e1003594 (2013).

Moreover，APA相关的基因变化已经和多种疾病的状态关联，包括 cancer 11, α-thalassemia 12, facioscapulohumeral muscular dystrophy 13, bone fragility 14, neonatal diabetes 15 and systemic lupus erythematosus 16,17.

作为这些研究的一个主要例子，一个位于 3′UTR of IRF5 的 SNP(rs10954213)可以改变3‘UTR长度，从而改变mRNA稳定性，进而有助于系统性红斑狼疮的易感性。

除了以上离散的几个例子，SNP对APA的影响还没有在人的不同组织系统研究，他们与表型和疾病的关系也没有研究。

## 本研究
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


## Patterns of tissue specificity for 3′aQTLs


## 3′aQTLs have distinct molecular features


## Alterations of poly(A) motifs are associated with APA


## APA-associated RBP binding sites and RNA secondary structure


## 3′aQTL analysis facilitates the identification of APA regulators such as LARP4


## 3′aQTLs can explain a significant proportion of disease heritability


## Many trait-colocalizing 3′aQTLs are independent of gene expression









# Discussion





# Methods



## Code availability
The open-source DaPars v.2.0 program is freely available at https://github.com/3UTR/DaPars2.

https://wlcb.oit.uci.edu/3aQTL/index.php
