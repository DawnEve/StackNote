```
Title: APA_abstract, 2021 Q4


2021.9.22 APA in protein metabolism /scAPAdb /内质网中的APA /
2021.9.18 3'aQTL-atlas /APA in mouse embryo /APA in leukemia /
```





# APA in protein metabolism [2021.9.14 RNA]
> Shortening of 3p UTRs in most cell types composing tumor tissues implicates alternative polyadenylation in protein metabolism
> RNA. 2021 Sep 14;rna.078886.121. doi: 10.1261/rna.078886.121. Online ahead of print.
> Dominik Burri  1 , Mihaela Zavolan  2
> 1 Biozentrum, University of Basel.
> https://pubmed.ncbi.nlm.nih.gov/34521731/


---
本文只研究3UTR的polyA位点。
During pre-mRNA maturation 3p end processing can occur at different polyadenylation sites in the 3 prime untranslated region (3p UTR) to give rise to transcript isoforms that differ in the length of their 3p UTRs. 

长3UTR含有额外的顺式cis调控元件，能影响转录本的命运及蛋白产物。
Longer 3p UTRs contain additional cis-regulatory elements that impact the fate of the transcript and/or of the resulting protein. 

---
癌症中很多APA，但是机理和作用还不清楚。
Extensive alternative polyadenylation (APA) has been observed in cancers, but the mechanisms and roles remain elusive. 

特别的，不清楚APA发生在肿瘤细胞中，还是其他浸润细胞中。
In particular, it is unclear whether the APA occurs in the malignant cells or in other cell types that infiltrate the tumor. 

---
新方法：SCUREL，能比较组间3UTR长度变化，包括来自肿瘤和对照样本的同种来源的细胞。
To resolve this, we developed a computational method, called SCUREL, that quantifies changes in 3p UTR length between groups of cells, including cells of the same type originating from tumor and control tissue. 

在肺腺癌中使用该方法研究APA。
We used this method to study APA in human lung adenocarcinoma (LUAD). 

该方法依赖注释的3UTR和对照系统，比如 T细胞活化、精子形成都给出了定量上类似的结果，但是相对其他发表的结果更灵敏。
SCUREL relies solely on annotated 3p UTRs and on control systems, such as T cell activation and spermatogenesis gives qualitatively similar results at much greater sensitivity compared to the previously published scAPA method. 

---
LUAD 样本中，我们发现肿瘤中全局3UTR缩短，肿瘤vs同种细胞，或 肿瘤vs对照的微环境中的其他细胞类型。

In the LUAD samples, we find a general trend towards 3p UTR shortening not only in cancer cells compared to the cell type of origin, but also when comparing other cell types from the tumor vs. the control tissue environment. 

---
然而，也发现了病人之间的高异质性。
However, we also find high variability in the individual targets between patients. 


这些有助于理解LUAD中APA的程度和影响，或许可用来改善诊断和治疗。
The findings help to understand the extent and impact of APA in LUAD, which may support improvements in diagnosis and treatment.


---
浏览图片：
1.table1 各种细胞类型的marker注释: alveolar 肺泡细胞, endothelial 内皮的, epithelial 上皮的, 
fibroblast 成纤维细胞, B cell, T cell, myeloid 骨髓的,
based on Lambrechts et al., 2018





# scAPAdb [2021.9.11 RAR]
> scAPAdb: a comprehensive database of alternative polyadenylation at single-cell resolution
> Nucleic Acids Res. 2021 Sep 11;gkab795. doi: 10.1093/nar/gkab795. Online ahead of print.
> Sheng Zhu  1   2 , Qiwei Lian  2 , Wenbin Ye  2 , Wei Qin  2 , Zhe Wu  2 , Guoli Ji  2 , Xiaohui Wu  1
> 1 Pasteurien College, Soochow University, Suzhou, Jiangsu 215000, China.


---
APA 广泛的真核生物基因表达调控层。
Alternative polyadenylation (APA) is a widespread regulatory mechanism of transcript diversification in eukaryotes, which is increasingly recognized as an important layer for eukaryotic gene expression. 

---
单细胞测序，发现不同细胞类型的APA使用和动态。

Recent studies based on single-cell RNA-seq (scRNA-seq) have revealed cell-to-cell heterogeneity in APA usage and APA dynamics across different cell types in various tissues, biological processes and diseases. 

---
目前的APA db都是bulk的，

However, currently available APA databases were all collected from bulk 3'-seq and/or RNA-seq data, and no existing database has provided APA information at single-cell resolution. 

我们提供一个scAPAdb。
Here, we present a user-friendly database called scAPAdb (http://www.bmibig.cn/scAPAdb), which provides a comprehensive and manually curated atlas of poly(A) sites, APA events and poly(A) signals at the single-cell level. 


---
目前，收录了360个 scRNA-seq实验，包含6个物种，包括人、鼠、植物等。
Currently, scAPAdb collects APA information from > 360 scRNA-seq experiments, covering six species including human, mouse and several other plant species. 

可检索方式。
scAPAdb also provides batch download of data, and users can query the database through a variety of keywords such as gene identifier, gene function and accession number. 

---
价值： 细胞类型、组织、物种间的APA使用。
scAPAdb would be a valuable and extendable resource for the study of cell-to-cell heterogeneity in APA isoform usages and APA-mediated gene regulation at the single-cell level under diverse cell types, tissues and species.












# APA in leukemia [2021.9.5 Blood]
> Alternative polyadenylation dysregulation contributes to the differentiation block of acute myeloid leukemia
> Blood. 2021 Sep 5;blood.2020005693. doi: 10.1182/blood.2020005693. Online ahead of print.
> Amanda G Davis  1 , Daniel T Johnson  2 , ...  2 , Edward D Ball  6 , Bin Tian  7 , Dong-Er Zhang  1
> 1 University of California San Diego, La Jolla, California, United States.
> 7 Rutgers New Jersey Medical School, United States.
> https://www.sciencedirect.com/science/article/abs/pii/S0006497121015627?via%3Dihub
> https://pubmed.ncbi.nlm.nih.gov/34482400/


---
转录后修饰调控，称为白血病进展的driver，以及靶向治疗的途径。
Post-transcriptional regulation has emerged as a driver for leukemia development and an avenue for therapeutic targeting. 

转录后调控中的APA在肿瘤中异常调控。
Among post-transcriptional processes, alternative polyadenylation (APA) is globally dysregulated across cancer types. 

但APA在白血病中的研究有限。
However, limited studies have focused on the prevalence and role of APA in myeloid leukemia. 

---
进一步的，不清楚单个基因的polyA site 使用或者靶向全局APA模式，能否改变癌变趋势。

Furthermore, it is poorly understood how altered poly(A) site (PAS) usage of individual genes contributes to malignancy or whether targeting global APA patterns might alter oncogenic potential. 

---
本研究，自己测了3'reads，病人和健康人。有分析了公共数据中的造血干细胞及前体细胞。
In this study, we examined global APA dysregulation in acute myeloid leukemia (AML) patients by performing 3' Region Extraction And Deep Sequencing (3'READS) on a subset of AML patient samples along with healthy hematopoietic stem and progenitor cells (HSPCs) and by analyzing publicly available data from a broad AML patient cohort. 

我们发现，由于PAS位点使用的差异，整体UTR缩短，编码区变长。
We show that patient cells exhibit global 3' untranslated region (UTR) shortening and coding sequence (CDS) lengthening due to differences in PAS usage. 

---
FIP1L1 可能是一个APA调控子。

Among APA regulators, expression of FIP1L1, one of the core cleavage and polyadenylation factors, correlated with the degree of APA dysregulation in our 3'READS dataset. 

敲低后能逆转病人的全局趋势。
Targeting global APA by FIP1L1 knockdown reversed the global trends seen in patients. 

---
机理： 敲低FIP1L1基因会促进T细胞分化，通过促进3UTR变长，下调融合基因AML1-ETO。
在非T细胞中，敲低FIP1L1基因也会促进分化，通过降低mTORC1信号和降低 MYC 蛋白水平。

Importantly, FIP1L1 knockdown induced differentiation of t(8;21) cells by promoting 3'UTR lengthening and downregulation of the fusion oncoprotein AML1-ETO. In non-t(8;21) cells, FIP1L1 knockdown also promoted differentiation by attenuating mTORC1 signaling and reducing MYC protein levels. 

---
意义：APA在AML中的机制。 而靶向全局APA模式能克服AML病人的分化阻断。
Our study provides mechanistic insights into the role of APA in AML pathogenesis and indicates that targeting global APA patterns can overcome the differentiation block of AML patients.


---
KEY POINTS
- FIP1L1 knockdown reverses global APA dysregulation in t(8;21) AML and promotes differentiation by 3’UTR lengthening of AML1-ETO.
- Targeting APA induces differentiation across AML subtypes, by shared downregulation of MYC and attenuation of mTORC1 signaling.








# 3'aQTL-atlas 数据库 [2021.8.25, NAR]
> 3'aQTL-atlas: an atlas of 3'UTR alternative polyadenylation quantitative trait loci across human normal tissues
> Nucleic Acids Res. 2021 Aug 25;gkab740. doi: 10.1093/nar/gkab740. Online ahead of print.
> Ya Cui 1, Fanglue Peng 2, Dan Wang 3, Yumei Li 1, Jason Sheng Li 1, Lei Li 1, Wei Li 1
> 1 Division of Computational Biomedicine, Department of Biological Chemistry, School of Medicine, University of California, Irvine, Irvine, CA 92697, USA.
> https://wlcb.oit.uci.edu/3aQTLatlas/
> https://pubmed.ncbi.nlm.nih.gov/34432052/

---
Genome-wide association studies (GWAS) have identified thousands of non-coding single-nucleotide polymorphisms (SNPs) associated with human traits and diseases. 
GWAS 发现 SNP 与 性状和疾病的关系。

However, functional interpretation of these SNPs remains a significant challenge. 
这些SNP的功能解释还是一个挑战。

---
Our recent study established the concept of 3' untranslated region (3'UTR) alternative polyadenylation (APA) quantitative trait loci (3'aQTLs), which can be used to interpret ∼16.1% of GWAS SNPs and are distinct from gene expression QTLs and splicing QTLs. 
3aQTL可以解释大约16.1%的 GWAS SNP，且和 eQTL和splicing QTL 不同。

---
Despite the growing interest in 3'aQTLs, there is no comprehensive database for users to search and visualize them across human normal tissues. In the 3'aQTL-atlas (https://wlcb.oit.uci.edu/3aQTLatlas), we provide a comprehensive list of 3'aQTLs containing ∼1.49 million SNPs associated with APA of target genes, based on 15,201 RNA-seq samples across 49 human Genotype-Tissue Expression (GTEx v8) tissues isolated from 838 individuals. 
搜索和可视化正常组织中的3aQTL。 1.49million SPN，和APA相关，基于49个人类组织，来自838个人，共15201个RNA-seq样本。

The 3'aQTL-atlas provides a ∼2-fold increase in sample size compared with our published study. 
和之前的研究比，样本量大了2倍。

It also includes 3'aQTL searches by Gene/SNP across tissues, a 3'aQTL genome browser, 3'aQTL boxplots, and GWAS-3'aQTL colocalization event visualization. 
包含了不同组织通过检索 gene或 SNP 的 3aQTL，提供可视化: IGV, boxplot, 共定位事件。

The 3'aQTL-atlas aims to establish APA as an emerging molecular phenotype to explain a large fraction of GWAS risk SNPs, leading to significant novel insights into the genetic basis of APA and APA-linked susceptibility genes in human traits and diseases.
把 APA作为一个表型，解释 SNP的作用，解释人类性状和疾病中的APA遗传学基础，和APA关联的基因。










# APA in mouse embryo [2021.8.24, NC]
> **The landscape of alternative polyadenylation in single cells of the developing mouse embryo**
> Nat Commun. 2021 Aug 24
> Vikram Agarwal #  1 , Sereno Lopez-Darwin #  2 , David R Kelley  3 , Jay Shendure  4   5   6   7
> Calico Life Sciences, South San Francisco, CA, USA. vagar@calicolabs.com.
> https://pubmed.ncbi.nlm.nih.gov/34429411/
> https://www.nature.com/articles/s41467-021-25388-8
> 代码：https://github.com/serenolopezdarwin/apanalysis

---
3UTR在转录后修饰调控上很重要。
3' untranslated regions (3' UTRs) post-transcriptionally regulate mRNA stability, localization, and translation rate. 

只在有限的细胞类型中用 bulk 做了分析，哺乳动物发育过程中的还不清楚。
While 3'-UTR isoforms have been globally quantified in limited cell types using bulk measurements, their differential usage among cell types during mammalian development remains poorly characterized. 

---
本文使用了 200万 细胞，分布在小鼠发育的E9.5-E13.5，来定量研究APA过程中转录组范围的变动。
In this study, we examine a dataset comprising ~ 2 million nuclei spanning E9.5-E13.5 of mouse embryonic development to quantify transcriptome-wide changes in alternative polyadenylation (APA). 


---
发育过程中3UTR全局变长，虽然造血系统变短、神经细胞变长。
We observe a global lengthening of 3' UTRs across embryonic stages in all cell types, although we detect shorter 3' UTRs in hematopoietic lineages and longer 3' UTRs in neuronal cell types within each stage. 

---
对RNA结合蛋白的研究表明 ELAV样家族成员，可能是APA的调控者。
An analysis of RNA-binding protein (RBP) dynamics identifies ELAV-like family members, which are concomitantly induced in neuronal lineages and developmental stages experiencing 3'-UTR lengthening, as putative regulators of APA. 

---

By measuring 3'-UTR isoforms in an expansive single cell dataset, our work provides a transcriptome-wide and organism-wide map of the dynamic landscape of alternative polyadenylation during mammalian organogenesis.

---
单词
concomitantly [kənˈkɑːmɪtəntli] adv. 附随地







# 内质网中的APA [2021.7.20 Cell Rep(IF=8.1)]
> Alternative 3' UTRs play a widespread role in translation-independent mRNA association with the endoplasmic reticulum
> Cell Rep. 2021 Jul 20;36(3):109407. doi: 10.1016/j.celrep.2021.109407.
> Larry C Cheng  1 , Dinghai Zheng  2 , Qiang Zhang  3 , Aysegul Guvenek  4 , Hong Cheng  3 , Bin Tian  5
> 1 Program in Gene Expression and Regulation and Center for Systems and Computational Biology, The Wistar Institute, Philadelphia, PA 19104, USA; Department of Microbiology, Biochemistry and Molecular Genetics, Rutgers New Jersey Medical School, Newark, NJ 07103, USA; Graduate Program in Quantitative Biomedicine, School of Graduate Studies, Rutgers University, Piscataway, NJ 08854, USA.
> https://www.cell.com/cell-reports/fulltext/S2211-1247(21)00820-2
> https://pubmed.ncbi.nlm.nih.gov/34289366/


---
膜蛋白与分泌蛋白的翻译，都在ER进行。
Transcripts encoding membrane and secreted proteins are known to associate with the endoplasmic reticulum (ER) through translation. 

---
通过组分分离、核糖体剖析(??)、3’端测序，我们发现转录本在 非翻译依赖的ER
Here, using cell fractionation, polysome profiling, and 3' end sequencing, we show that transcripts differ substantially in translation-independent ER association (TiERA). 


---
ER 对mRNA代谢的影响，比如定位翻译。
Genes in certain functional groups, such as cell signaling, tend to have significantly higher TiERA potentials than others, suggesting the importance of ER association for their mRNA metabolism, such as localized translation. 

受到尺寸、序列、RNA结构的影响。
The TiERA potential of a transcript is determined largely by size, sequence content, and RNA structures. 

---
APA变体因为转录特性不同，导致TiERA潜力不同。
Alternative polyadenylation (APA) isoforms can have distinct TiERA potentials because of changes in transcript features. 

The widespread 3' UTR lengthening in cell differentiation leads to greater transcript association with the ER, especially for genes that are capable of expressing very long 3' UTRs. 

Our data also indicate that TiERA is in dynamic competition with translation-dependent ER association, suggesting limited space on the ER for mRNA association.

---
使用的技术：
- 3′READS data analysis: 
- Analysis of APA using RNA-seq data: APAlyzer program (Wang and Tian, 2020).
- Gene ontology analysis:  GOstats Bioconductor package (Falcon and Gentleman, 2007). **Generic terms (associated with more than 1,000 genes) were discarded.** To reduce redundancy in reporting, any GO term with a gene overlap greater than 75% with a more significant term was discarded. p values are based on the hypergeometric test.
- Protein subcellular localization analaysis: We used [MetaSecKB database](https://pubmed.ncbi.nlm.nih.gov/26255309/) (Meinken et al., 2015) to annotate protein localization. Mitochondrial proteins were defined by MetaSecKB. Secreted proteins were those annotated as secreted or highly likely secreted. Membrane proteins were those annotated as ER, Golgi, lysosome, peroxisome, or plasma membrane proteins. Proteins annotated with other locations or unannotated ones were combined and called ‘other’.
- Classification of transcripts based on MLS: A Gaussian mixture modeling method, based on the **sklearn.mixture** package of the Scikit-learn software (Pedregosa et al., 2011), 
- TiERA predictive model: We used the **XGBoost method** (Chen and Guestrin, 2016) to construct a statistical model for TiERA prediction.
-  RNA structure analysis: **RNAfold** (Lorenz et al., 2011) was used to calculate the minimum free energy (MFE, kcal/mol) for each window,





# QuantifyPoly(A)[2021.7.13, Briefings in Bioinformatics]
> **QuantifyPoly(A): reshaping alternative polyadenylation landscapes of eukaryotes with weighted density peak clustering**
> Congting Ye, Danhui Zhao, Wenbin Ye, Xiaohui Wu, Guoli Ji, Qingshun Q Li, Juncheng Lin
> Briefings in Bioinformatics, bbab268, https://doi.org/10.1093/bib/bbab268
> Published: 13 July 2021
> Key Laboratory of the Ministry of Education for Coastal and Wetland Ecosystems, College of the Environment and Ecology, Xiamen University, Xiamen, Fujian 361102, China.
> https://academic.oup.com/bib/advance-article/doi/10.1093/bib/bbab268/6319934
> https://pubmed.ncbi.nlm.nih.gov/34255024/

Abstract
The dynamic choice of different polyadenylation sites in a gene is referred to as alternative polyadenylation, which functions in many important biological processes. 

Large-scale messenger RNA 3′ end sequencing has revealed that cleavage sites for polyadenylation are presented with microheterogeneity. 

主观和任意，导致注释不准确。
To date, the conventional determination of polyadenylation site clusters is subjective and arbitrary, leading to inaccurate annotations. 


提出新方法：
Here, we present a weighted density peak clustering method, QuantifyPoly(A), to accurately quantify genome-wide polyadenylation choices. 

Applying QuantifyPoly(A) on published 3′ end sequencing datasets from both animals and plants, their polyadenylation profiles are reshaped into myriads of novel polyadenylation site clusters. 

Most of these novel polyadenylation site clusters show significantly dynamic usage across different biological samples or associate with binding sites of trans-acting factors. 

Upstream sequences of these clusters are enriched with polyadenylation signals UGUA, UAAA and/or AAUAAA in a species-dependent manner. 


Polyadenylation site clusters also exhibit species specificity, while plants ones generally show higher microheterogeneity than that of animals. 

总结
QuantifyPoly(A) is broadly applicable to any types of 3′ end sequencing data and species for accurate quantification and construction of the complex and dynamic polyadenylation landscape and enables us to decode alternative polyadenylation events invisible to conventional methods at a much higher resolution.


---
单词
myriad [ˈmɪriəd; ˈmɪriæd] n. 无数，极大数量 adj. 无数的；种种的







# CRISPRpas [2021.7.9, NAR]
> Nucleic Acids Res. 2021 Jul 9;gkab519. doi: 10.1093/nar/gkab519. Online ahead of print.
> **CRISPRpas: programmable regulation of alternative polyadenylation by dCas9**
> Jihae Shin 1, Qingbao Ding 1 2, Luyang Wang 2, Yange Cui 2, Erdene Baljinnyam 1, Aysegul Guvenek 1 3, Bin Tian 1 2 4
> Department of Microbiology, Biochemistry and Molecular Genetics, Rutgers New Jersey Medical School, Newark, NJ 07103, USA.
> https://pubmed.ncbi.nlm.nih.gov/34244761/


Abstract
Most human protein-coding genes produce alternative polyadenylation (APA) isoforms that differ in 3' UTR size or, when coupled with splicing, have variable coding sequences. 

APA is an important layer of gene expression program critical for defining cell identity. 

没有催化能力的Cas9，靶向PAS位点，改变APA变体的丰度。
Here, by using a catalytically dead Cas9 and coupling its target site with polyadenylation site (PAS), we develop a method, named CRISPRpas, to alter APA isoform abundance. 

受到多方面影响：
CRISPRpas functions by enhancing proximal PAS usage, whose efficiency is influenced by several factors, including targeting strand of DNA, distance between PAS and target sequence and strength of the PAS. 

For intronic polyadenylation (IPA), splicing features, such as strengths of 5' splice site and 3' splice site, also affect CRISPRpas efficiency. 

修饰的例子 PCF11：
We show modulation of APA of multiple endogenous genes, including IPA of PCF11, a master regulator of APA and gene expression. 

通过修饰APA调控基因表达。
In sum, CRISPRpas offers a programmable tool for APA regulation that impacts gene expression.





# PCF11通过IPA调控长基因的表达 (Cell Rep. 2019.3.5)
> Cell Rep. 2019 Mar 5;26(10):2766-2778.e6. doi: 10.1016/j.celrep.2019.02.049.
> **Regulation of Intronic Polyadenylation by PCF11 Impacts mRNA Expression of Long Genes**
> Ruijia Wang 1, Dinghai Zheng 1, Lu Wei 1, Qingbao Ding 1, Bin Tian 2
> Department of Microbiology, Biochemistry and Molecular Genetics, Rutgers New Jersey Medical School and Rutgers Cancer Institute of New Jersey, Newark, NJ 07103, USA.


Abstract
Regulation of cleavage and polyadenylation (CPA) affects gene expression and polyadenylation site (PAS) choice. 

Here, we report that the CPA and termination factor PCF11 modulates gene expression on the basis of gene size. 

Although downregulation of PCF11 leads to inhibition of short gene expression, long genes are upregulated because of suppressed intronic polyadenylation (IPA) enriched in large introns. 

We show that this regulatory scheme, named PCF11-mediated expression regulation through IPA (PEIPA), takes place in cell differentiation, during which downregulation of PCF11 is coupled with upregulation of long genes with functions in cell morphology, adhesion, and migration. 

PEIPA targets distinct gene sets in different cell contexts with similar rules. 

PCF11通过一个保守的IPA位点自调控，去掉后全局靠近promoter的PAS激活。
Furthermore, PCF11 is autoregulated through a conserved IPA site, the removal of which leads to global activation of PASs close to gene promotors. 

Therefore, PCF11 uses distinct mechanisms to regulate genes of different sizes, and its autoregulation maintains homeostasis of PAS usage in the cell.



