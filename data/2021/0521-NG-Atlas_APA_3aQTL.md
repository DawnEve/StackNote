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

## 1.An atlas of human 3′aQTLs
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






## 2.Patterns of tissue specificity for 3′aQTLs

---
Q: MASH?? //todo

To examine how cis regulatory elements contribute to APA events in tissue-specific or shared manners (Supplementary Fig. 8), we used `multivariate adaptive shrinkage (MASH)`31 to estimate the effect sizes of 3′aQTLs shared across all 46 tissues, while controlling for nongenetic correlations, such as sample overlap. 

> 31.Urbut, S. M., Wang, G., Carbonetto, P. & Stephens, M. Flexible statistical methods for estimating and testing effects in genomic studies with multiple conditions. Nat. Genet. 51, 187–195 (2019).


---
Considered collectively, these observations suggested that 3′aQTL effect sizes exhibit greater tissue specificity than that of eQTLs.





## 3.3′aQTLs have distinct molecular features
- 3aQTL显著富集在3’UTR和下游5k内。
- 而eQTL显著富集在promoter区，上游5k区和5‘UTR区。
- splicing QTLs (sQTLs)33 which are enriched primarily within gene bodies and splice regions (Extended Data Fig. 6).

> 33.Li, Y. I. et al. RNA splicing is a primary link between genetic variation and disease. Science 352, 600–604 (2016).

- protein QTLs34 (pQTLs) 

> 34.Sun, B. B. et al. Genomic atlas of the human plasma proteome. Nature 558, 73–79 (2018).

---
Q: phastCons conservation score?? //todo

Interestingly, 3′aQTLs are also highly enriched in conserved regions (University of California Santa Cruz (UCSC) phastCons conservation score >0.8) (Fig. 3d) but not in transcription factor binding sites (Supplementary Fig. 13).






## 4.Alterations of poly(A) motifs are associated with APA

遗传变体是怎么作用到APA事件的？
- 可能是SNP改变了polyA motif? 
- 只有几个孤立的细胞系中的证据
> 9.Yoon, O. K., Hsu, T. Y., Im, J. H. & Brem, R. B. Genetics and regulatory impact of alternative polyadenylation in human B-lymphoblastoid cells. PLoS Genet. 8, e1002882 (2012).
> 35.Thomas, L. F. & Sætrom, P. Single nucleotide polymorphisms can create alternative polyadenylation signals and affect gene expression through loss of microRNA-regulation. PLoS Comput. Biol. 8, e1002621 (2012).

- 从数据库 PolyA_DB 36, UCSC, Ensembl 和RefSeq 注释文件中，上游50bp范围内的3aVariants 变体，搜索15个常见的polyA motif。
> 36.Lee, J. Y., Yeh, I., Park, J. Y. & Tian, B. PolyA_DB 2: mRNA polyadenylation sites in vertebrate genes. Nucleic Acids Res. 35, D165–D168 (2007).


经典motif: AATAAA, 其次是 ATTAAA. 
不同的motif影响远端使用率的例子: 
- c 是 A->C破坏了经典motif；
- d是G->A出现经典motif
- e是G->C破坏了U-rich motif，导致远端使用率降低。
![motif-exp](/data/2021/images/05/0521-3QTL-motif-exp.png)
Fig. 4: 3′aQTLs can alter PAS and uridylate-rich motifs in human tissues.
**c**, Box plot showing the significant correlation between the 3′aQTL rs1130319 and ADI1 APA events for each genotype. Each dot represents a normalized PDUI value from a single sample. The center horizontal lines represent the median values and the boxes span from the 25th to the 75th percentile. The whiskers extend to 1.5× IQR (bottom). The coverage plot illustrates that this SNP could disrupt the canonical PAS. The red dotted line in the RefSeq gene structure indicates the location of the 3′aVariant. The PAS is shown, with the 3′aQTL highlighted in red. 
**d**, Box plot showing that the 3′aQTL rs3211995 is strongly correlated with the SLC9A3R2 3′UTR change for each genotype. The coverage plot illustrates that this SNP could ‘create’ a canonical PAS. 
**e**, Box plot showing that the 3′aQTL rs12359, which alters the uridylate-rich motif, is strongly associated with SYDE1 3′UTR usage for each genotype.



---
Q: U-rich motif 是什么？谁的motif？在什么位置？

fig.4b polyA signal, U-rich motif
b, Enrichment of 3′aVariants that alter PAS and uridylate-rich motifs and are `proximal to poly(A) sites, compared with the rest of the genome`. Data are presented as odds ratio and 95% CI. 
怎么比较的？

后面半段
In addition to the PAS, we also investigated whether 3′aVariants could alter uridylate-rich elements, which are also important for 3′-end processing 4. 
> 4.Tian, B. & Manley, J. L. Alternative polyadenylation of mRNA precursors. Nat. Rev. Mol. Cell Biol. 18, 18–30 (2017).

The uridylate-rich motif variations on APA have been described before 37. 
> 37.Sun, H. S. et al. A polymorphic 3′UTR element in ATP1B1 regulates alternative polyadenylation and is associated with blood pressure. PLoS ONE 8, e76290 (2013).



---
Q: recent saturation mutagenesis data，饱和突变数据分析APA ??//todo

引用了2019 Cell 深度学习APA文章，印证不同的突变，能导致表达水平多大的差别。
We validated our finding using recent saturation mutagenesis data23, where the same 3′aVariant disruption of the ADI1 canonical poly(A) motif resulted in a 20-fold decrease in the abundance of the long isoform (Extended Data Fig. 7a).

> 23.Bogard, N., Linder, J., Rosenberg, A. B. & Seelig, G. A deep neural network for predicting and engineering alternative polyadenylation. Cell 178, 91–106.e23 (2019).


Collectively, these results suggested that a small fraction of detectable APA events are the result of 3′aVariants alterations of PAS or uridylate-rich motifs.



## 5.APA-associated RBP binding sites and RNA secondary structure

3aQTL小部分通过影响polyA signal，大部分是其他途径。

先检测3aQTL与靶基因的转录和转录后调控的互作。
使用 `DeepBind v0.11` 38  基于深度神经网络的DNA和RNA结合蛋白特异性序列预测工具。
> 38.Alipanahi, B., Delong, A., Weirauch, M. T. & Frey, B. J. Predicting the sequence specificities of DNA- and RNA-binding proteins by deep learning. Nat. Biotechnol. 33, 831–838 (2015).


---
Q: 超几何检验的方法和适用范围?? //todo

Proteins associated with these 17 common motifs were significantly enriched (P = 1.06 × 10−5; `hypergeometric test`) with known poly(A) factors, such as PABP39, CPEB4 (refs. 39,40), SRSF7 (ref. 41), RBFOX1 (ref. 42) and HNRNPC, which was recently described as an APA regulator43.

> 39.Matoulkova, E., Michalova, E., Vojtesek, B. & Hrstka, R. The role of the 3′ untranslated region in post-transcriptional regulation of protein expression in mammalian cells. RNA Biol. 9, 563–576 (2012).
> 40.Bava, F.-A. et al. CPEB1 coordinates alternative 3′-UTR formation with translational regulation. Nature 495, 121–125 (2013).
> 41.Müller-McNicoll, M. et al. SR proteins are NXF1 adaptors that link alternative RNA processing to mRNA export. Genes Dev. 30, 553–566 (2016).
> 42.Chen, P.-F., Hsiao, J. S., Sirois, C. L. & Chamberlain, S. J. RBFOX1 and RBFOX2 are dispensable in iPSCs and iPSC-derived neurons and do not contribute to neural-specific paternal UBE3A silencing. Sci. Rep. 6, 25368 (2016).
> 43.Gruber, A. J. et al. A comprehensive analysis of 3′ end sequencing data sets reveals novel polyadenylation signals and the repressive role of heterogeneous ribonucleoprotein C on cleavage and polyadenylation. Genome Res. 26, 1145–1159 (2016).


---
Q: RBP交联免疫共沉淀测序数据集  CLIP-seq ?? //todo

We then analyzed 166 RBP cross-linking immunoprecipitation sequencing (CLIP-seq) datasets, which were available from the `Encyclopedia of DNA Elements (ENCODE) project`44.

> 44.Dominguez, D. et al. Sequence, structure, and context preferences of human RNA binding proteins. Mol. Cell 70, 854–867.e9 (2018).

这部分数据的RBP有81.2%没有出现在 DeepBind中。
检测3aQTL，相对于随机序列数据集，是否富集在每个RBP的CLIP-seq的结合峰中？
We examined whether 3′aQTLs were significantly enriched within the CLIP-seq binding peaks of each RBP compared with a random sequence dataset. 


---
Q: RNA二级结构?? //todo

To evaluate the association between 3′aQTL and RNA structural features, we decided to use the `riboSNitch data` 45, which are defined as DNA variants affecting RNA secondary structure changes by parallel analysis of RNA structure experiments. 

> 45.Wan, Y. et al. Landscape and variation of RNA secondary structure across the human transcriptome. Nature 505, 706–709 (2014).







## 6. 3′aQTL analysis facilitates the identification of APA regulators such as LARP4

Our observation that LARP4 binding involves regions enriched with 3′aQTLs suggests that LARP4 might be an APA regulator. 

在293T细胞的LARP4基因中插入一个FLAG标签。
To test the hypothesis that LARP4 regulates APA, we first CRISPR-engineered 293T cells to harbor a single FLAG epitope tag within both copies of the endogenous LARP4 gene (Fig. 5b). 

然后加入靶向LARP4的 siRNA，观察到完整的KD。
We then transfected these cells with either control small interfering RNA (siRNA) or LARP4-targeting siRNA and observed the robust depletion of FLAG-LARP4 (Fig. 5c).

测序
RNA was isolated from both control and knockdown cells and analyzed using 3′-end sequencing (poly(A)-ClickSeq (PAC-seq))47. 
> 47.Routh, A. et al. Poly(A)-ClickSeq: click-chemistry for next-generation 3′-end sequencing without RNA enrichment or fragmentation. Nucleic Acids Res. 45, e112 (2017).

根据预测，很多包含能改变APA结合位点的3aQTL的基因，在LARP4敲低后，也能展示稳定的APA。
Importantly, several of the genes that contain 3′aQTLs that are predicted to alter LARP4 binding were also found to exhibit robust APA in response to LARP4 knockdown (Fig. 5e and Extended Data Fig. 9). 

---
可以使用3aQTL来发现APA调控子。
Altogether, these results support a function of LARP4 in APA regulation and further validate the use of 3′aQTLs as a discovery tool for APA regulators.






## 7. 3′aQTLs can explain a significant proportion of disease heritability

---
尝试使用 3aQTL 来解释非编码区特别是3’UTR的遗传变体。

We hypothesized that 3′aQTLs could be used to interpret GWAS noncoding variants, particularly those located near 3′UTRs (Supplementary Figs. 19 and 20). 


---
Q: 名词 功能基因组关联分析?? //todo

In this study, we compiled GWAS summary statistics for 23 common human diseases and traits from previously published studies (Supplementary Table 7) and evaluated the enrichment of 3′aVariants within trait-associated GWAS SNPs for each tissue using `functional genome-wide association analysis` 48.

> 48.Pickrell, J. K. Joint analysis of functional genomic data and genome-wide association studies of 18 human traits. Am. J. Hum. Genet. 94, 559–573 (2014).


---
Q: LD score 回归？怎么确定SNP和遗传的关系?? //todo

To quantify the proportion of regulatory variations associated with heritability for each trait, we conducted a `partitioned heritability analysis`, using `LD score regression` 49. 

> 49.Finucane, H. K. et al. Partitioning heritability by functional annotation using genome-wide association summary statistics. Nat. Genet. 47, 1228–1235 (2015).



---
Notably, 3′aQTLs were particularly effective for explaining a large proportion of heritability associated with several autoimmune diseases, such as ulcerative colitis(溃疡性结肠炎), primary biliary cholangitis(原发性胆汁性胆管炎) and Alzheimer’s disease. 








## 8. Many trait-colocalizing 3′aQTLs are independent of gene expression

---
Q: 共定位分析 ?? //todo

We used `colocalization analysis`52, which identifies 3′aQTLs that share the same putative causal variants with trait-associated signals, to examine 15 complex diseases and traits with known `minor allele frequencies (MAFs)`. 

> 52.Giambartolomei, C. et al. Bayesian test for colocalisation between pairs of genetic association studies using summary statistics. PLoS Genet. 10, e1004383 (2014).


---
Q: miRNA binding site density 怎么算?? //todo

To explore the potential regulatory mechanisms, we cross-referenced the 3′UTR regions of 3′aGenes with the `TargetScan human v.6.2` (ref. 53) miRNA binding sites and `ENCODE RBP CLIP-seq peaks`.

> 53.Agarwal, V., Bell, G. W., Nam, J.-W. & Bartel, D. P. Predicting effective microRNA target sites in mammalian mRNAs. eLife 4, e05005 (2015).

We found that eQTL-overlapped 3′aGenes have overall greater `miRNA binding site density` within the 3′UTR region than non-eQTL-overlapped 3′aGenes (P = 5.695 × 10−5; Supplementary Fig. 22c).


---
Collectively, our data suggest that many 3′aQTLs contribute to human diseases and traits, independent of their roles in the regulation of gene expression.




# Discussion

## 1. 总结3aQRL的作用机制
- GTex dataset + DaPars v.2
- 3aQTL富集在3‘UTR区域
- Mechanistically, 3′aQTLs likely induce changes in 3′UTR usage by either modulating the strength of poly(A) signal motifs, RNA secondary structure or RBP binding sites. 


---
最近的工作把DNA甲基化、基因环化、APA调控联系起来
recent work revealing connections between DNA methylation, gene looping and APA regulation58,59.
> 58.Nanavaty, V. et al. DNA methylation regulates alternative polyadenylation via CTCF and the cohesin complex. Mol. Cell 78, 752–764.e6 (2020).
> 59.Mittleman, B. E. et al. Alternative polyadenylation mediates genetic regulation of gene expression. eLife 9, e57492 (2020).

---
Furthermore, we also validated the use of 3′aQTLs as a discovery tool for identifying APA regulators, such as LARP4.


## 2.3aQTL与trait的遗传性

Colocalization analyses found that 16.1% of trait-associated loci colocalized with 1 or more 3′aQTLs in human tissues. 






# Methods

只记录不是太熟悉的步骤和方法。


## Covariate correction 不太懂怎么矫正的协变量?? //todo

---
To account for hidden batch effects and other unobserved covariates in each tissue, we first `corrected the sample genotype for population structure`. 

- Briefly, we first removed sites marked as ‘wasSplit’ from the GTEx analysis freeze variant call format (VCF) using `BCFtools` v.1.3, leaving 39,741,769 biallelic sites. 
- The variants were further filtered with a call rate of >99% and MAF >5%; 
- LD pruning was performed using PLINK v.2.0.

The top three principal components from the principal component analysis were consistent with the known three main subpopulations, including White, Black or African American and Asian, in the GTEx samples. 

We further used `PEER`21 with sex, RNA integrity number, top 5 genotype principal components and genotyping platforms as the known covariates to estimate a set of latent covariates for the PDUI values in each tissue. 
> 21.Stegle, O., Parts, L., Piipari, M., Winn, J. & Durbin, R. Using probabilistic estimation of expression residuals (PEER) to obtain increased power and interpretability of gene expression analyses. Nat. Protoc. 7, 500–507 (2012).



## 3′aQTL mapping for each tissue

Subset VCF data for each tissue were extracted, using `BCFtools`. VCF files were transformed into an SNP matrix file, including genotyping information, using `BioAlcidae `v.2.27.1 (ref. 62). SNPs with a MAF of <0.01 were filtered and at least 10 counts per allele were required.

We then tested associations for SNPs within an interval of 1 Mb from the 3′UTR region, with normalized PDUI values, in each tissue, using `Matrix eQTL`22, in a linear regression framework.
> 22.Shabalin, A. A. Matrix eQTL: ultra fast eQTL analysis via large matrix operations. Bioinformatics 28, 1353–1358 (2012).


## 3′aQTL sharing and specificity analyses among tissues
3′aQTL sharing and specificity among tissues were analyzed using `MASH`31. 

--
能分析出组织特异的3aQTL，学习一下这个包怎么用 //todo
没看懂。

- Prior covariance matrices were inferred via `Empirical Bayes matrix factorization`, implemented in `factors and loadings by adaptive shrinkage`; the multivariate 3′aQTL model was constructed using MASH.
- Posterior effect sizes were computed by applying the trained model to the lead 3′aQTLs sets. MASH aims to elucidate the heterogeneity of 3′aQTL effect sizes across tissues (Fig. 2).
- With MASH, we can learn about which 3′aQTLs have tissue-specific effect sizes and which have effect sizes consistent across tissues. 

## Prediction of trans regulator of APA 【好思路!】
这是个好思路，鉴定APA调控子:
对于基因G，先按照表达量排序，分为高top10和低low10共2组，如果显著(FC>2, p<0.05)，则认定为基因G的ctrl和KD组。
如果表达量显著差异，则看两组之间的3’UTR shorten 和 lengthen  显著的基因个数，
如果P<0.05（怎么计算这个p值？），这个基因就会被认定为反式调控子。

- For a gene G in a tissue type, all samples were ranked based on the expression levels of gene G. 
- The top 10 most highly expressed samples and bottom 10 least expressed samples were chosen as the two groups. 
- If the mean gene expression fold change between the two groups was >2 with P < 0.05, these two groups were treated as control and knockdown groups. 
- Then, the PDUI values between the groups could be compared to identify significant dynamic APA genes between the high and low expression groups of gene G. 
- Using this strategy, `we calculated the number of 3′UTR shortening or lengthening effect of each gene`, which regulates significant dynamic APA events between the high and low expression groups. 
- The gene will be predicted as a trans regulator of APA if P < 0.05. 


We have validated our method in a few known APA regulators, such as CSTF2, which was described as an APA regulator promoting 3′UTR shortening. We observed that there was a marked shift of 3′UTR shortening in individuals with highly expressed CSTF2 (Extended Data Fig. 8a). We also investigated our newly detected APA regulator, LARP4. We often observed many APA events when comparing LARP4high and LARP4low individuals (Extended Data Fig. 8b).



## Colocalization analyses 共定位分析
看3aQTL和eQTL是否共定位。不懂。

We utilized `a Bayesian colocalization approach` to identify GWAS signals that could exhibit the same genetic effects between eQTLs and 3′aQTLs, using the coloc v.3.2-1 R package 52.

> 52.Giambartolomei, C. et al. Bayesian test for colocalisation between pairs of genetic association studies using summary statistics. PLoS Genet. 10, e1004383 (2014).


---
Region visualization plots were constructed using `LocusZoom` v.1.4 (ref. 66). LDs between reference SNPs and 3′aQTLs were calculated using `PLINK`67.
> 66.Pruim, R. J. et al. LocusZoom: regional visualization of genome-wide association scan results. Bioinformatics 26, 2336–2337 (2010).
> 67.Purcell, S. et al. PLINK: a tool set for whole-genome association and population-based linkage analyses. Am. J. Hum. Genet. 81, 559–575 (2007).











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


## 生词
sentinel  [ˈsentɪnl] n. 哨兵 vt. 守卫，放哨 //标记






---
> 2021.5.22 reading
> 2021.5.24 End Reading.