
# paper
> **Comprehensive Characterization of Alternative Polyadenylation in Human Cancer**
> J Natl Cancer Inst . 2018 Apr 1;110(4):379-389. doi: 10.1093/jnci/djx223.
> Department of Biochemistry and Molecular Biology, The University of Texas Health Science Center at Houston, Houston, TX.
> https://academic.oup.com/jnci/article/110/4/379/4587933
> https://pubmed.ncbi.nlm.nih.gov/29106591/


评价: 文章比较水，只记录部分观点。
- 使用Spearman相关，分析mRNA表达与APA的关系。
- 使用DaPars算法，发现TCGA的肿瘤-正常样本和CCLE的细胞系样本的RNA-seq数据中的APA变化。
- 生存期分析值得学习 //todo


# Abstract
We characterized the global APA profiles of 
- 6398 patient samples across 17 cancer types from The Cancer Genome Atlas and 
- 739 cancer cell lines from the Cancer Cell Line Encyclopedia. 
数据是 TCGA 和CCLE的RNA-seq数据。

定量APA: DaPars (https://github.com/ZhengXia/DaPars)


## Results
- Our analysis further suggested **PABPN1** as the master regulator in regulating APA profile across different cancer types.
- Furthermore, we showed that APA events could affect drug sensitivity, especially of drugs targeting chromatin modifiers. 
- Finally, we identified 1971 clinically relevant APA events, as well as alterations of APA in clinically actionable genes, suggesting that analysis of the complexity of APA profiles could have clinical utility.

## Conclusions
Our study highlights important roles for APA in human cancer, including reshaping cellular pathways and regulating specific gene expression, exemplifying the complex interplay between APA and other biological processes and yielding new insights into the action mechanism of cancer drugs.
影响代谢通路，调控其他基因表达。


## APA factors(四个大复合物)
A large number of APA factors are required for appropriate polyadenylation processing, including 
- cleavage and polyadenylation specificity factor (CPSF), 
- cleavage stimulation factor (CSTF), 
- cleavage factors I and II (CFI and CFII), 
- as well as the poly(A) polymerase and other associated factors (5).







# Methods

## 下载数据
(1) TCGA的肿瘤-正常对照， 双端RNA-seq
We downloaded pair-ended RNA-seq BAM files of **5838 patients tumor samples across 17 TCGA cancer types and 560 paired nontumor tissues samples** (if avaliable), 

(2)肿瘤细胞系， 739个bam文件
as well as 739 RNA-seq BAM files of cancer cell lines from the National Cancer Institute’s Genomic Data Commons (GDC) (https://gdc.cancer.gov) (12–14), as previously described (15). 

We also downloaded the gene expression data from GDC. 

(3) 其他大型测序项目 531个样本: 肺腺癌、肾脏上皮肾细胞癌、恶性胶质瘤
In addition, we obtained the RNA-seq files of 531 samples from three other large-scale independent studies, including **lung adenocarcinoma, renal cell carcinoma, and glioblastomas (16–18)**. 
> 16. Seo JS, Ju YS, Lee WC, et al. The transcriptional landscape and mutational
profile of lung adenocarcinoma. Genome Res. 2012;22(11):2109–2119.
> 17. Sato Y, Yoshizato T, Shiraishi Y, et al. Integrated molecular analysis of clearcell renal cell carcinoma. Nat Genet. 2013;45(8):860–867.
> 18. Bao ZS, Chen HM, Yang MY, et al. RNA-seq of 272 gliomas revealed a novel,
recurrent PTPRZ1-MET fusion transcript in secondary glioblastomas. Genome
Res. 2014;24(11):1765–1773.



---
为了防止测序的批次差异，重新计算了TCGA和CCLE的 RPKM值。使用四分位数标准化方法。
To avoid the potential batch effects introduced by gene expression quantification, we recalculated gene expression as reads per kilobase per million mapped reads (RPKM) across all TCGA and CCLE samples. 

We then normalized the expression data using quantile normalization (19). 

(4) 8个细胞系 RNA-seq文件 ENCODE、GEO
We further obtained the RNA-seq files of 8 cancer cell lines from ENCODE (ENCSR000EYR, ENCSR310FIS, ENCSR000CPT) (20) and GEO (GSE42420) (9). 

(5) 肿瘤纯净度数据、临床响应基因。
We obtained the tumor purity data (21) and clinically actionable genes (22) from previous studies.


## Statistical Analysis
比较基因或APA的组件差异，都用非参数检验，两组用wilcox，多组用K-W。
To compare PDUI or gene expression between two or more groups, we used the **Wilcoxon rank-sum test** or **Kruskal-Wallis nonparametric analysis of variance (ANOVA) test**. 

相关性分析，使用 spearman 相关系数。
For correlation, we used **Spearman correlation (Rs)**. 

For survival analysis, we used the Cox proportional hazards model, and survival curves were compared using the two-sided log-rank test. 

FDR矫正
We used Benjamini and Hochberg adjustment for false discovery rate (FDR) (26) and considered an FDR of less than 0.05 as statistically significant in analyses where an FDR is presented. 

All statistical tests were two-sided, and P values of less than .05 were considered statistically significant.






# Results


## Global Shortening of APA Events in Cancer Cell Lines

APA的差异部分导致了基因表达的差异(APA缩短->mRNA上调，或者 APA加长->mRNA下调)，范围是36.0% in SKCM to 49.7% in LGG。

We observed that APA difference partially contributes to mRNA expression difference (APA shortening with upregulated mRNA expression or APA lengthening with downregulated mRNA expression), ranging from 36.0% in SKCM to 49.7% in LGG (Supplementary Figure 1D, available online).

---
肿瘤细胞系相对于肿瘤，更短。与read长度和覆盖度无关。

To rule out potential bias, we showed that cancer cell lines displayed a more shortening APA profile than tumor samples (Supplementary Figure 2, A and B, available online) regardless of the read length or coverage.


---
细胞系vs肿瘤 缩短的基因，富集分析: 蛋白定位、转移、细胞周期

To characterize the biological function of differentially regulated APA events, we performed functional enrichment analysis and observed that shortening APA events are highly enriched in gene ontology (GO) terms such as **protein localization, transport, and cell cycle** (Supplementary Figure 2D and Supplementary Table 3, available online), 

indicating that these cellular processes may be regulated by alterations of APA events and thus contribute to the distinctive features of cancer cell lines. 

Interestingly, these APA events are also highly enriched in GO terms related to the **metabolic process**, suggesting that APA events may be involved in different metabolic processes between cultured cancer cell lines and tumor samples (27).






## Master Regulators for APA Events in Cancer

APA因子，22个被认为是核心因子。

The 3’ end-processing machinery is composed of multiple protein factors, including 
- four biochemically distinct protein complexes (CPSF, CSTF, CFI, and CFII) and 
- several single proteins, such as PABPN1, RBBP6, and SYMPK (5). 
- Among these, 22 genes are considered core factors (5). 

> 5.Molecular architecture of the human pre-mRNA 3' processing complex.
Shi Y, Di Giammartino DC, Taylor D, Sarkeshik A, Rice WJ, Yates JR 3rd, Frank J, Manley JL
Mol Cell. 2009 Feb 13; 33(3):365-76.



之前研究表明，特定细胞类型中，APA因子的表达水平能影响APA位置的选择，比如CSTF2 (28) and NUDT21 (9). 【CSTF2别名 CstF-64，NUDT21别名CFIm25】
Previous reports have indicated that alterations in expression and/or activities of APA factors can influence APA site selection in specific cell types, such as CSTF2 (28) and NUDT21 (9). 
> 28.The polyadenylation factor CstF-64 regulates alternative processing of IgM heavy chain pre-mRNA during B cell differentiation.
Takagaki Y, Seipelt RL, Peterson ML, Manley JL
Cell. 1996 Nov 29; 87(5):941-52.
> 9.CFIm25 links alternative polyadenylation to glioblastoma tumour suppression.
Masamha CP, Xia Z, Yang J, Albrecht TR, Li M, Shyu AB, Li W, Wagner EJ
Nature. 2014 Jun 19; 510(7505):412-6.


However, it is still unclear which APA factor(s) play the most important roles in APA regulation in human cancer.

![0621_PABPN1_pos_correlation](data/2021/images/06/0621_PABPN1_pos_correlation.png)
![0621_PABPN1_position](data/2021/images/06/0621_PABPN1_position.png)
> Figure 2. Key factors in regulation of alternative polyadenylation (APA) events. 
**A)** Percentage of APA events positively correlated with expression level of APA factors in tumor samples across cancer types. 
**C)** A schematic model for the important role of PABPN1 in suppressing the usage of proximal APA site. 
与每个APA因子表达正相关的APA事件: 


## Clinical Relevance of APA Events

举例子，肿瘤vs正常样本，APA缩短和变长的基因的临床相关分析。
B图 肿瘤中变短。变短预后不好。
C图 肿瘤中变长。和乳腺癌亚型显著相关，和STAD肿瘤临床分期相关。


![0621_shorten_lengthen_example](data/2021/images/06/0621_shorten_lengthen_example.png)
> Figure 4.Clinical relevance of alternative polyadenylation (APA) events. 
**B)** Schematic representation of gene last exon structure and predicted alternative polyadenylation site, miRNA binding site, and AU-rich elements (top). APA profile of CSNK1D in paired tumor and normal samples (left) and overall patient survival time for lengthening and shortening group (right).
**C)** APA profile of NDE1 in paired tumor and normal samples (left), among BRCA tumor subtypes (middle), and STAD stages (right). The boxes show the median±1 quartile, with whiskers extending to the most extreme data point within 1.5 interquartile range from the box boundaries. APA = alternative polyadenylation; PDUI = Percentage of Distal polyA site Usage Index.



## Alterations of APA Events in Clinically Actionable Genes


We further examined the APA profile of 135 clinically actionable genes, which includes therapeutic FDA-approved drug targets and/or their associated genes (22,48). 

这135个临床响应基因，有些在肿瘤中的PDUI的IQR相当大，超过0.2，预示着新的调控层。
Among these genes, 6.67% (GBM) to 31.9% (STAD) of them showed relatively large variance (interquartile range [IQR] ≥ 0.2), suggesting a novel layer of regulation of clinically actionable genes (Figure 5A).

> **IQR**: (interquartile range, IQR)，四分位距，四分差。一个表征数据变异程度的指标，Q75-Q25=四分位数差，越大，说明变异越大。和sd表述的是同一个概念，但不同的算法。IQR可以用来识别异常值。

![0621_IQR_PDUI](data/2021/images/06/0621_IQR_PDUI.png)
![0621_RNA-APA-correlation](data/2021/images/06/0621_RNA-APA-correlation.png)
> Figure 5.Alterations of alternative polyadenylation (APA) events in clinically actionable genes in tumor samples. 
**A)** Distribution of interquartile range (IQR) of Percentage of Distal polyA site Usage Index (PDUI) of clinically actionable genes across different cancer types. 
**D)** Selected correlations (**two-sided Spearman correlation test**) between APA events of clinically actionable genes and PABPN1 expression level (left: CTNNB1; middle: PIK3R1; right: FGFR2). Complete correlations were listed in Supplementary Table 8 (available online). APA = alternative polyadenylation; IQR = interquartile range; PDUI = Percentage of Distal polyA site Usage Index.

(1)B柱状图。
统计上图A，每个基因的变异大的肿瘤类别数， CTNNB1， PIK3R1， FGFR2 是前三个(n=16, 14,~13)，也就是其APA在肿瘤中变异最大。
Recurrent clinically actionable genes with IQRs of PDUI of 0.2 or greater in tumor samples

(2)C柱状图。
和APA因子表达量相关的 135 clinically actionable genes 的APA事件数，PABPN1 是第一个(n=~75)。
x轴：APA因子；
y轴：与其表达相关的 135个临床响应基因 的APA事件数。
Number of APA events of clinically actionable genes correlated with expression level of APA core factors.

(3) 然后画散点图，
x轴: PABPN1的表达 -- 影响APA最多的基因。
y轴: APA变异最大的3个基因。



-----
举例子的方法:

Wnt信号通路中的核心组件CTNNB1，在16种肿瘤类型中变异很大。
PI3K抑制剂的靶标PIK3R1，在14种肿瘤中变异程度很大。
For example, CTNNB1, the key component of the Wnt signaling pathway (49), showed variant APA (IQR ≥ 0.2) in 16 cancer types. 
PIK3R1, the target of PI3K inhibitors (50), showed variant APA in 14 cancer types (Figure 5B). 

PABPN1 能调控的临床响应基因最多，
PABPN1 regulated the largest number of clinically actionable genes, which further confirmed the important roles of PABPN1 in cancer (Figure 5C;Supplementary Table 8, available online). 

For example, the top recurrently actionable genes, CTNNB1, PI3KR1, and FGFR2, are highly correlated with PABPN1 mRNA expression level in THCA (Rs = 0.66, P < 2.2 × 10-16), LGG (Rs = 0.47, P < 2.2 × 10-16), and KIRP (Rs = 0.66, P < 2.2 × 10-16), respectively (Figure 5D). 

Knockdown of PNBPN1 also led to shortening of CTNNB1 in U2OS and C2C12 cell lines. 

Among these APA events, CTNNB1 is strongly correlated with its APA status (Rs = –0.41, P < 2 × 10-16) and PIK3R1 is statistically significantly correlated with its APA status (Rs = –0.18, P = 5 × 10-5), while FGFR2 is not correlated with its APA status (Rs = –0.11, P = .16). 

The alterations of APA events in clinically actionable genes highlighted the necessity to consider the APA events in drug treatment.


# Discussion




## 细胞系和肿瘤的区别？

However, cancer cell lines also display unique features compared with tumor samples, such as gene expression (53,54) and mutation (53). Our analysis added APA as a new dimension for a unique feature of cancer cell lines, and further investigation is necessary.

> 53.Evaluating cell lines as tumour models by comparison of genomic profiles.
Domcke S, Sinha R, Levine DA, Sander C, Schultz N
Nat Commun. 2013; 4():2126.
> 54.A collection of breast cancer cell lines for the study of functionally distinct cancer subtypes.
Neve RM, Chin K, Fridlyand J, Yeh J, Baehner FL, Fevr T, Clark L, Bayani N, Coppe JP, Tong F, Speed T, Spellman PT, DeVries S, Lapuk A, Wang NJ, Kuo WL, Stilwell JL, Pinkel D, Albertson DG, Waldman FM, McCormick F, Dickson RB, Johnson MD, Lippman M, Ethier S, Gazdar A, Gray JW
Cancer Cell. 2006 Dec; 10(6):515-27.


细胞系 vs 肿瘤，有文章比较基因表达差异，突变差异。
本文是APA差异: 细胞系比肿瘤使用更短的位点。
![0621_shorten_cell_line](/data/2021/images/06/0621_shorten_cell_line.png)
> Supplementary Figure 1. Global landscape of APA events across patient samples and cancer cell lines.
**C)** Global pattern of APA events across different cancer types in normal (blue), tumor (red) and cancer cell lines (CCL) (purple). The percentage of transcripts with preferred longer 3’ UTR isoform (% of PDUI > 0.5) divided by total number of APA events for each sample. Each dot represents one sample.



> End Reading. 2021/6/24
> 