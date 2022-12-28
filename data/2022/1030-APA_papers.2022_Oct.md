
# 膀胱癌中CD276相关的APA与免疫浸润(BMC Cancer, IF4.4, 2022)
> Comprehensive analysis of alternative polyadenylation regulators concerning CD276 and immune infiltration in bladder cancer
> BMC Cancer. 2022 Sep 29
> Department of Urology, Union Hospital, Tongji Medical College, Huazhong University of Science and Technology, Wuhan, China.
> https://pubmed.ncbi.nlm.nih.gov/36175880/

Alternative polyadenylation (APA) is emerging as a crucial regulatory mechanism in bladder cancer (BC), while it remains elusive whether APA influences the tumor immune microenvironment (TIME) in BC. 

Highly expressed CPSF3 was positively correlated with unfavorable prognosis and high CD276 expression in BC. Moreover, we verified the expression of CPSF3 in BC tissues and cell lines by qRT-PCR.


## CD276 gene 

别名: 4Ig-B7-H3, B7-H3, B7H3, B7RP-2

- 搜索到的线索: 
	* CSCs利用CD276来逃避免疫监视
	* CD276在肿瘤外层的表达最高，这表明CD276起着一个免疫检查点的作用










# (植物)表观与APA: 失去的一环(Trends Plant Sci, IF=11.8, 2022)
> Trends Plant Sci. 2022 Sep
> Coupling epigenetics and RNA polyadenylation: missing links
> https://pubmed.ncbi.nlm.nih.gov/36175275/
> ... Fujian Agriculture and Forestry University, Fuzhou, Fujian 350002, China.

As a cotranscriptional regulatory mechanism, pre-mRNA polyadenylation is essential for fine-tuning gene expression. 

参与植物APA调控的：DNA甲基化、组蛋白修饰、表观转录组修饰。
Genetic analyses have demonstrated that DNA methylation, histone modifications, and epitranscriptomic modification are involved in regulating polyadenylation in plants.

Unresolved issues and future directions are discussed to shed light on the field.








# （果蝇）成年干细胞发育过程中，蛋白的表达受APA调控(Genes Dev, IF12.8, 2022)
> Developmentally regulated alternate 3' end cleavage of nascent transcripts controls dynamic changes in protein expression in an adult stem cell lineage
> Genes Dev. 2022 Sep
> Department of Developmental Biology, Stanford University School of Medicine, Stanford, California 94305, USA.
> https://pubmed.ncbi.nlm.nih.gov/36175033/
> 无图，无原文

Alternative polyadenylation (APA) generates transcript isoforms that differ in the position of the 3' cleavage site, resulting in the production of mRNA isoforms with different length 3' UTRs. 


Although widespread, the role of APA in the biology of cells, tissues, and organisms has been controversial. 

果蝇中，我们发现>500个基因 精子分裂过程使用 长3UTR，精子分化过程中使用 短3UTR。
We identified >500 Drosophila genes that express mRNA isoforms with a long 3' UTR in proliferating spermatogonia but a short 3' UTR in differentiating spermatocytes due to APA. 

我们展示 阶段特异的3’剪切，是通过 远端附近的一个常规polyA 信号，而不是变体或近端切割信号调控的。
We show that the stage-specific choice of the 3' end cleavage site can be regulated by the arrangement of a canonical polyadenylation signal (PAS) near the distal cleavage site but a variant or no recognizable PAS near the proximal cleavage site. 

分化细胞中，短3UTR和编码的蛋白的表达变化相关，精原细胞 - 精母细胞之间一个是开一个是关。
The emergence of transcripts with shorter 3' UTRs in differentiating cells correlated with changes in expression of the encoded proteins, either from off in spermatogonia to on in spermatocytes or vice versa. 

核糖体梯度比例也揭示了：>250个基因的长短UTR有迁移，和转录状态一致。
Polysome gradient fractionation revealed >250 genes where the long 3' UTR versus short 3' UTR mRNA isoforms migrated differently, consistent with dramatic stage-specific changes in translation state. 


因此，在发育调控下选择一个替代位点，在该位点上进行终止新生转录本的3'端切，可以深刻地影响细胞在分化谱系中通过连续步骤前进时表达的蛋白质套件。
Thus, the developmentally regulated choice of an alternative site at which to make the 3' end cut that terminates nascent transcripts can profoundly affect the suite of proteins expressed as cells advance through sequential steps in a differentiation lineage.







# APA-Scan: 通过RNA-seq检测和可视化3UTR APA(BMC Bioinformatics. 2022)
> APA-Scan: detection and visualization of 3'-UTR alternative polyadenylation with RNA-seq and 3'-end-seq data
> Department of Computer Science, University of Central Florida, 4000 Central Florida Blvd, Orlando, FL, 32816, USA.
> 几个基因有参考价值，但是 Fig.7看效果太差。

使用 预测或实验验证的 polyA 信号作为APA位点的参考，计算定量长短UTR转录本。
Methods: APA-Scan utilizes either predicted or experimentally validated actionable polyadenylation signals as a reference for polyadenylation sites and calculates the quantity of long and short 3'-UTR transcripts in the RNA-seq data. 

主要有三个步骤:
APA-Scan works in three major steps: 

- (i) 计算基因3'UTR覆盖度。 calculate the read coverage of the 3'-UTR regions of genes; 
- (ii) 识别可能的PAA位点，计算两个生物条件下APA时间的显著程度。 identify the potential APA sites and evaluate the significance of the events among two biological conditions; 
- (iii) 画图。 graphical representation of user specific event with 3'-UTR annotation and read coverage on the 3'-UTR regions. 

APA-Scan is implemented in Python3. Source code and a comprehensive user's manual are freely available at https://github.com/compbiolabucf/APA-Scan .







# (综述) 从DNA序列、RNA-seq和 scRNA-seq 预测APA位点的方法 (Genomics Proteomics Bioinformatics, IF6.4, 2022 Sep)
> A Survey on Methods for Predicting Polyadenylation Sites from DNA Sequences, Bulk RNA-seq, and Single-cell RNA-seq
> Pasteurien College, Soochow University, Suzhou 215000, China.
> https://pubmed.ncbi.nlm.nih.gov/36167284/
> https://www.sciencedirect.com/science/article/pii/S1672022922001218?via%3Dihub

APA的重要性
Alternative polyadenylation (APA) plays important roles in modulating mRNA stability, translation, and subcellular localization, and contributes extensively to shaping eukaryotic transcriptome complexity and proteome diversity. 

识别方法的重要性
Identification of poly(A) sites (pAs) on a genome-wide scale is a critical step toward understanding the underlying mechanism of APA-mediated gene regulation. 


A number of established computational tools have been proposed to predict pAs from diverse genomic data. 

本文：介绍识别pA位点的计算方法。
Here we provided an exhaustive overview of computational approaches for predicting pAs from DNA sequences, bulk RNA sequencing (RNA-seq) data, and single-cell RNA-seq (scRNA-seq) data. 

Particularly, we examined several representative tools using RNA-seq and scRNA-seq data from peripheral blood mononuclear cells and put forward operable suggestions on how to assess the reliability of pAs predicted by different tools. 

We also proposed practical guidelines on choosing appropriate methods applicable to diverse scenarios. 

Moreover, we discussed in depth the challenges in improving the performance of pA prediction and benchmarking different methods. 

Additionally, we highlighted outstanding challenges and opportunities using new machine learning and integrative multi-omics techniques and provided our perspective on how computational methodologies might evolve in the future for non-3' untranslated region (UTR), tissue-specific, cross-species, and single-cell pA prediction.







# 从一个蛋白编码mRNA前体 生物合成 端粒酶(PNAS, 2022)
> Biogenesis of telomerase RNA from a protein-coding mRNA precursor
> Proc Natl Acad Sci U S A. 2022
> School of Molecular Sciences, Arizona State University, Tempe, AZ 85281.
> https://pubmed.ncbi.nlm.nih.gov/36197996/

看不太懂，跳过。





# `{Good}`APA产生了很多没有5帽子且有翻译潜力的 RNA 变体(Mol Cell. IF=14, 2022 Oct)
> Alternative cleavage and polyadenylation generates downstream uncapped RNA isoforms with translation potential
> Division of Oncogenomics, Oncode Institute, The Netherlands Cancer Institute, Plesmanlaan 121, 1066CX, Amsterdam, the Netherlands.
> https://pubmed.ncbi.nlm.nih.gov/36270248/

The use of alternative promoters, splicing, and cleavage and polyadenylation (APA) generates mRNA isoforms that expand the diversity and complexity of the transcriptome. 

本文发现 很多没有5帽子的有polyA尾巴的转录本: 5' UPTs.
Here, we uncovered thousands of previously undescribed 5' uncapped and polyadenylated transcripts (5' UPTs). 

能抗外切酶，因为5'端的高度结构化RNA和N6甲基化修饰。
We show that these transcripts resist exonucleases due to a highly structured RNA and N6-methyladenosine modification at their 5' termini. 

5UPT出现在APA位点的下游，是在APA激活时诱导的。
5' UPTs appear downstream of APA sites within their host genes and are induced upon APA activation. 

核糖体的聚集表明，有翻译潜力。 APA确实促进下游翻译起始，非常规蛋白产生，并与细胞表面展示的肽一致。
Strong enrichment in polysomal RNA fractions indicates 5' UPT translational potential. Indeed, APA promotes downstream translation initiation, non-canonical protein output, and consistent changes to peptide presentation at the cell surface. 


最后，使用基因 Bcl2 展示了 5UPT的生物学重要性。Bcl2是一个抗凋亡的基因，编码区来自5UTR区域的APA位点。
Lastly, we demonstrate the biological importance of 5' UPTs using Bcl2, a prominent anti-apoptotic gene whose entire coding sequence is a 5' UPT generated from 5' UTR-embedded APA sites. 

APA不仅对于转录本的末端，还能产生下游 无帽的能翻译的RNA。
Thus, APA is not only accountable for terminating transcripts, but also for generating downstream uncapped RNAs with translation potential and biological impact.








# (Sci Rep. IF4.3, 2022)
> Motif and conserved module analysis in DNA (promoters, enhancers) and RNA (lncRNA, mRNA) using AlModules
> Department of Bioinformatics, Biocenter, University of Würzburg, Am Hubland, 97074, Würzburg, Germany.
> https://pubmed.ncbi.nlm.nih.gov/36266399/

The application also searches RNA motifs such as polyadenylation site or RNA-protein binding motifs as well as DNA motifs such as enhancers as well as user-specified motif combinations.

https://bioinfo-wuerz.de/aimodules/







# (Am J Transl Res, IF3.9, 2022)
> Shortening of the KHDRBS1 3'UTR by alternative cleavage and polyadenylation alters miRNA-mediated regulation and promotes gastric cancer progression
> Department of General Surgery, The First Affiliated Hospital of Anhui Medical University 218 Jixi Avenue, Hefei 230022, Anhui, China.
> https://pubmed.ncbi.nlm.nih.gov/36247240/

In this study, we found that the 3'UTR of KHDRBS1 is generally shortened in GC tissues compared to paracancer tissues.

Overexpression of KHDRBS1, especially KHDRBS1 with a shortened 3'UTR, promotes the growth and metastasis of GC in vivo and in vitro.




# polyA signal: AATAAA and (TC)n [Biology, IF5.1, 2022]
> Tail Wags Dog's SINE: Retropositional Mechanisms of Can SINE Depend on Its A-Tail Structure
> Biology (Basel). 2022 Sep
> Laboratory of Eukaryotic Genome Evolution, Engelhardt Institute of Molecular Biology, Russian Academy of Sciences, 119991 Moscow, Russia.
> https://pubmed.ncbi.nlm.nih.gov/36290307/

The transcription of various Can constructs transfected into HeLa cells proposed AATAAA and (TC)n as functional polyadenylation signals.





# (果蝇)神经分化开始时 ELAV/Hu 依赖 mRNA 信号的关键发育窗口 (Cell Rep, IF8.28, 2022)
> A critical developmental window for ELAV/Hu-dependent mRNA signatures at the onset of neuronal differentiation
> Cell Rep. 2022 Oct 25
> Max-Planck-Institute of Immunobiology and Epigenetics, 79108 Freiburg, Germany; Faculty of Biology, Albert Ludwig University, 79104 Freiburg, Germany; International Max Planck Research School for Molecular and Cellular Biology (IMPRS-MCB), 79108 Freiburg, Germany.
> https://pubmed.ncbi.nlm.nih.gov/36288718/

虫子的爬行能力。

Cell-type-specific gene regulatory programs are essential for cell differentiation and function.

In animal neurons, the highly conserved ELAV/Hu family of proteins promotes alternative splicing and polyadenylation of mRNA precursors to create unique neuronal transcript isoforms.


> ELAV/Hu 家族是啥？

ELAV / Hu 是一类含有 3 个 RRMs、高度保守的神经细胞 RNA 结合蛋白家族。






# APA在抗病毒先天免疫反应中的作用 (NC, 2017)
> The role of alternative polyadenylation in the antiviral innate immune response
> Nat Commun. 2017 Feb 24;8:14605. doi: 10.1038/ncomms14605.
> State Key Laboratory of Biocontrol, Department of Biochemistry, School of Life Sciences, Sun Yat-Sen University, Guangzhou 510275, People's Republic of China.
> https://pubmed.ncbi.nlm.nih.gov/28233779/

However, the extent of 3' UTR variation and the function of APA during the innate antiviral immune response are unclear.








# 工具 ReadZS 检测单细胞细胞类型特异性APA(Genome Biol. 2022, IF=11.9)
> ReadZS detects cell type-specific and developmentally regulated RNA processing programs in single-cell RNA-seq
> Genome Biol. 2022 Oct 25
> Department of Biochemistry, Stanford University, Stanford, CA, 94305, USA.
> https://pubmed.ncbi.nlm.nih.gov/36284317/

... global 3' UTR shortening in human spermatogenesis. 

ReadZS also discovers global 3' UTR lengthening in Arabidopsis development, highlighting the usefulness of this method in under-annotated transcriptomes.


