重点是 dataset: BMMC scRNA-seq

关键词: 

AML scRNA-seq


# 数据集 汇总

相关数据：按照年份，最新的在上面

```

# HRA002637:https://ngdc.cncb.ac.cn/gsa-human/browse/HRA002637
PRJCA010386: 3个样本
Revealing the intratumoral heterogeneity of non-DS acute megakaryoblastic leukemia in single cell resolution
发布日期：2022-08-12
We performed single-cell RNA sequencing (scRNA-seq) of bone marrow from two CBFA2T3-GLIS2 fusion positive and one RBM15-MKL1 fusion positive non-DS-AMKL children.


# EGAS00001006512(RNA-Seq) https://www.nature.com/articles/s41375-022-01697-9
表达: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE211595
raw: 在 EGA
We focussed on acute myeloid leukemia (AML) as a paradigm of the CSC model and developed a patient-derived system termed OCI-AML22 that recapitulates the cellular hierarchy driven by leukemia stem cells (LSC). 



# GSE92274(2018): Microwell-seq
We sampled 7 batches (CD34+_b1-7) of Human CD34+ mobilized peripheral blood stem cells (PBSCs); 2 batches (CD34+_thawed_l6-7) of thawed Human CD34+ mobilized peripheral blood stem cells (PBSCs) and 2 batches (CD34-_b1-2) of thawed Human CD34- mobilized peripheral blood stem cells (PBSCs), around 5000 single cells per sample.
https://www.jianshu.com/p/7e893c8f1b12



# GSE76004(2016 Nature) https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE76004
NanoString 有FAB分类，生存期 OS，突变信息等。
Ng SW, Mitchell A, Kennedy JA, Chen WC et al. A 17-gene stemness score for rapid determination of risk in acute leukaemia. Nature 2016 Dec 15;540(7633):433-437. PMID: 27926740



# GSE76008 (): Differential gene expression analysis: LSC+ VS. LSC-
文章同上；
Illumina beadchip transcriptomics data containing LSC+ and LSC- sorted AML fractions were obtained from Gene Expression Omnibus data portal (`GSE76008`)23 and differential expression between LSC+ and LSC- fractions was calculated using a moderated t-test available in limma R package 3.28.21 incorporating array batch effects in linear model. A score that ranks genes from top up regulated in LSC+ fractions to top down regulated when compared to LSC- fractions was calculated.



# GSE24759 (Cell 2011) 38 个分化的细胞状态：流式筛选 + 测序
Novershtern N, Subramanian A, Lawton LN, Mak RH et al. Densely interconnected transcriptional circuits control cell states in human hematopoiesis. Cell 2011 Jan 21;144(2):296-309. PMID: 21241896

Changes in gene expression after MTCH2 knockdown were also mapped to Gene Expression Omnibus dataset `GSE24759` (DMAP) 22, containing Affymetrix GeneChip HT-HG_U133A Early Access Array gene expression data of 20 distinct hematopoietic cell states

We defined 38 distinct hematopoietic cell states based on cell surface marker expression, representing hematopoietic stem and progenitor cells, terminally differentiated cells, and intermediate states. For each state, we purified samples separately from 4 to 7 independent donors by multiparameter flow cytometry, yielding 211 profiled samples. Cells from all stem and progenitor populations were purified from umbilical cord blood. Terminally differentiated lymphocyte populations were purified from peripheral blood.
```






## 简介证据：SCCPDH 探针

- https://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=GSE37642&platform=GPL96

201825_s_at	AL572542		Homo sapiens	Oct 6, 2014	Consensus sequence	GenBank	Consensus includes gb:AL572542 /FEA=EST /DB_XREF=gi:12930912 /DB_XREF=est:AL572542 /CLONE=CS0DI008YC09 (3 prime) /UG=Hs.238126 CGI-49 protein /FL=gb:AF151807.1 gb:NM_016002.1	AL572542	saccharopine dehydrogenase (putative)	SCCPDH	51097	NM_016002	0055114 // oxidation-reduction process // inferred from electronic annotation	0005634 // nucleus // inferred from direct assay /// 0005739 // mitochondrion // inferred from direct assay /// 0005811 // lipid particle // inferred from direct assay /// 0016020 // membrane // inferred from direct assay /// 0030496 // midbody // inferred from direct assay	0016491 // oxidoreductase activity // inferred from electronic annotation
201826_s_at	NM_016002		Homo sapiens	Oct 6, 2014	Exemplar sequence	GenBank	gb:NM_016002.1 /DEF=Homo sapiens CGI-49 protein (LOC51097), mRNA. /FEA=mRNA /GEN=LOC51097 /PROD=CGI-49 protein /DB_XREF=gi:7705766 /UG=Hs.238126 CGI-49 protein /FL=gb:AF151807.1 gb:NM_016002.1	NM_016002	saccharopine dehydrogenase (putative)	SCCPDH	51097	NM_016002	0055114 // oxidation-reduction process // inferred from electronic annotation	0005634 // nucleus // inferred from direct assay /// 0005739 // mitochondrion // inferred from direct assay /// 0005811 // lipid particle // inferred from direct assay /// 0016020 // membrane // inferred from direct assay /// 0030496 // midbody // inferred from direct assay	0016491 // oxidoreductase activity // inferred from electronic annotation


- https://www.ncbi.nlm.nih.gov/geo/geo2r/?acc=GSE37642&platform=GPL570 带生存期数据

- SCCPDH participant CRISPR screens https://orcs.thebiogrid.org/Gene/51097








# 研究思路

```
# 代谢角度
IF27+文章带你了解细胞能量代谢，Seahorse XF助力高分SCI、拿下国自然
https://www.1633.com/article/65701.html

```



# APA DB

- https://pubmed.ncbi.nlm.nih.gov/34508354/ Nucleic Acids Res. 2022
- scAPAdb (http://www.bmibig.cn/scAPAdb)


- https://pubmed.ncbi.nlm.nih.gov/34643729/ Nucleic Acids Res. 2022
- scAPAatlas (http://www.bioailab.com:3838/scAPAatlas)


- http://bioinfo.szbl.ac.cn/ipaQTL Nucleic Acids Res. 2023
- ipaQTL-atlas (http://bioinfo.szbl.ac.cn/ipaQTL)





# 混合表型 AL: mixed phenotype acute leukemia


## 5 儿童 MPAL

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE139369
- scATAC-seq and CITE-seq performed on healthy bone marrow, CD34+ bone marrow, peripheral blood, and MPAL donors

We present a single-cell framework that integrates highly multiplexed protein quantification, transcriptome profiling, and chromatin accessibility analysis. Using this approach, we establish a normal epigenetic baseline for healthy blood development, which we then use to deconvolve aberrant molecular features within blood from mixed-phenotype acute leukemia (MPAL) patients.

> Granja JM, Klemm S, McGinnis LM, Kathiria AS et al. **Single-cell multiomic analysis identifies regulatory programs in mixed-phenotype acute leukemia.** Nat Biotechnol 2019 Dec;37(12):1458-1465. PMID: 31792411



## 14 adults 

14 newly diagnosed adult MPAL patients
https://pubmed.ncbi.nlm.nih.gov/37292835/

12个人的 scCITE-seq (有2人细胞数不够)
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE232073

scDAb-seq, 3个 DNA 测序文件怎么拆分成 14个人的?
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE230827














# 综述: 测序技术 

1. J Exp Clin Cancer Res. 2023 Oct 6;42(1):259. doi: 10.1186/s13046-023-02841-8.
Acute myeloid leukemia: from NGS, through scRNA-seq, to CAR-T. dissect cancer heterogeneity and tailor the treatment.

> Peroni E(1), Randi ML(2), Rosato A(3)(4), Cagnin S(5)(6).
> Author information: 意大利 公司
(1)Immunology and Molecular Oncology Unit, Veneto Institute of Oncology, 
IOV-IRCCS, Padova, 35128, Italy. edoardo.peroni@iov.veneto.it.

Acute myeloid leukemia (AML) is a malignant blood cancer with marked cellular 
heterogeneity due to altered maturation and differentiation of myeloid blasts, 
the possible causes of which are transcriptional or epigenetic alterations, 
impaired apoptosis, and `excessive cell proliferation`. 

This neoplasm has a high 
rate of resistance to anticancer therapies and thus a high risk of relapse and 
mortality because of both the biological diversity of the patient and 
intratumoral heterogeneity due to the acquisition of new somatic changes. 

For 
more than 40 years, the old gold standard "one size fits all" treatment approach 
included intensive chemotherapy treatment with anthracyclines and cytarabine.

- anthracyclines n. 蒽环类药物
- cytarabine [sɪtɑːræˈbɪn] n. 阿糖孢苷


The 
manuscript first traces the evolution of the understanding of the pathology from 
the 1970s to the present. The enormous strides made in its categorization prove 
to be crucial for risk stratification, enabling an increasingly personalized 
diagnosis and treatment approach.

Subsequently, we highlight how, over the past 
15 years, technological advances enabling single cell RNA sequencing and T-cell 
modification based on the genomic tools are affecting the classification and 
treatment of AML. 

At the dawn of the new millennium, the advent of 
high-throughput next-generation sequencing technologies has enabled the 
profiling of patients evidencing different facets of the same disease, 
stratifying risk, and identifying new possible therapeutic targets that have 
subsequently been validated. 

Currently, the possibility of investigating tumor 
heterogeneity at the single cell level, profiling the tumor at the time of 
diagnosis or after treatments exist. 

This would allow the identification of 
underrepresented cellular subclones or clones resistant to therapeutic 
approaches and thus responsible for post-treatment relapse that would otherwise 
be difficult to detect with bulk investigations on the tumor biopsy. 

Single-cell 
investigation will then allow even greater personalization of therapy to the 
genetic and transcriptional profile of the tumor, saving valuable time and 
dangerous side effects. 

The era of personalized medicine will take a huge step 
forward through the disclosure of each individual piece of the complex puzzle 
that is cancer pathology, to implement a "tailored" therapeutic approach based 
also on engineered CAR-T cells.

© 2023. Italian National Cancer Institute ‘Regina Elena’.

DOI: 10.1186/s13046-023-02841-8
PMCID: PMC10557350
PMID: 37803464

Conflict of interest statement: The authors declare no conflicts of interest.







# 微环境变化 小儿 AML: 复发和缓解，预后相关

2. Nat Commun. 2023 Oct 5;14(1):6209. doi: 10.1038/s41467-023-41994-0.
Single-cell analysis reveals altered tumor microenvironments of relapse- and 
remission-associated pediatric acute myeloid leukemia.

> Mumme H(#)(1), Thomas BE(#)(2)(3), Bhasin SS(2)(3), Krishnan U(1)(4), Dwivedi 
B(5), Perumalla P(4), Sarkar D(1)(3), Ulukaya GB(1), Sabnis HS(2)(3), Park 
SI(6), DeRyckere D(2)(3), Raikar SS(2)(3), Pauly M(2)(3), Summers RJ(2)(3), 
Castellino SM(2)(3), Wechsler DS(2)(3), Porter CC(2)(3), Graham DK(2)(3), Bhasin 
M(7)(8)(9)(10).
> Author information: 美国 Emory 大学
(1)Department of Biomedical Informatics, Emory University School of Medicine, Atlanta, GA, USA.

Acute myeloid leukemia (AML) microenvironment exhibits cellular and molecular 
differences among various subtypes. 

Here, we utilize single-cell RNA sequencing 
(scRNA-seq) to analyze pediatric AML bone marrow (BM) samples from diagnosis 
(Dx), end of induction (EOI), and relapse timepoints. 

Analysis of Dx, EOI 
scRNA-seq, and TARGET AML RNA-seq datasets reveals an AML blasts-associated 
7-gene signature (CLEC11A, PRAME, AZU1, NREP, ARMH1, C1QBP, TRH), which we 
validate on independent datasets. 

The analysis reveals distinct clusters of Dx 
relapse- and continuous complete remission (CCR)-associated AML-blasts with 
differential expression of genes associated with survival. 

- 持续完全缓解（Continuous complete remission, CCR): 指从治疗后完全缓解之日起计算，其间无白血病复发 达3～5年以上者。


At Dx, 
relapse-associated samples have more exhausted T cells while CCR-associated 
samples have more inflammatory M1 macrophages. 

Post-therapy EOI residual blasts 
overexpress fatty acid oxidation, tumor growth, and stemness genes. 

Also, a 
post-therapy T-cell cluster associated with relapse samples exhibits 
downregulation of MHC Class I and T-cell regulatory genes. 

Altogether, this 
study deeply characterizes pediatric AML relapse- and CCR-associated samples to 
provide insights into the BM microenvironment landscape.

© 2023. Springer Nature Limited.

DOI: 10.1038/s41467-023-41994-0
PMCID: PMC10556066
PMID: 37798266

> Conflict of interest statement: M.B. serves on the board of Canomiks Inc. as 
chief scientific advisor and has equity in it. D.K.G. and D.D. hold equity in 
Meryx Inc. S.S.B. serves as CEO of Anxomics LLC and has equity in it. The 
remaining authors declare no other competing interests.








# CTL in AML: 监测预后，指导治疗

3. J Gene Med. 2023 Sep 11:e3587. doi: 10.1002/jgm.3587. Online ahead of print.
Cytotoxic T-lymphocytes in acute myeloid leukemia: Monitoring prognosis and guiding treatment choice.

Lu M(1), Yu X(2), Hu J(1), Wang J(1), Wang T(1).

Author information: 浙大 北仑市人民医院
(1)Department of Clinical Laboratory, Beilun People's Hospital, Beilun Branch of 
the First Affiliated Hospital, School of Medicine, Zhejiang University, Ningbo, 
China.


BACKGROUND: Cytotoxic T-lymphocyte (CTL)-mediated therapy has become the central 
theme of cancer immunotherapy. The present study emphasized the role of CTLs in 
acute myeloid leukemia (AML) and aimed to understand the role of CTLs 
cytogenetic markers in monitoring AML prognostic outcomes and clinical treatment 
responses.

- cytogenetic [ˌsaɪtəʊdʒɪˈnetɪk] adj. 细胞生成的；细胞发生的


METHODS: `Seurat` was employed to analyze single-cell RNA sequencing data in 
GSE116256. `CellChat` was used to detect cell-cell interactions to determine the 
central role of CTLs. The marker genes of CTLs were extracted and 
`randomForestSRC` was employed to construct a `random forest model`. 

The prognosis, 
immune checkpoint expression, immune cell infiltration, immunotherapy response 
and drug sensitivity of AML patients were evaluated according to the model.


RESULTS: Seven types of cellular components of AML were identified in GSE116256, 
and CTLs radiated the most interactions with other cell types. Random forest 
analysis screened out `six marker genes` for construction of the model. The risk 
score calculated according to the model was positively correlated with immune 
score, immune cell infiltration, expression of multiple immune checkpoints and 
immune effect pathway. The response rate of immunotherapy was significantly 
higher and more sensitive to 14 drugs in high-risk samples than in low-risk 
samples, whereas low-risk patients showed a higher sensitivity to six drugs.


CONCLUSIONS: The present study emphasized the central role of CTLs in cell 
communication and established a random forest regression model based on its 
cytogenetic markers, which helps to stratify the prognosis of AML, promotes the 
understanding of the phenotype of AML and may also guide the treatment choice of 
AML patients, which contributed to stratification of AML prognosis, promoted 
understanding of the phenotype of AML and may guide treatment selection in 
patients with AML.

© 2023 John Wiley & Sons, Ltd.

DOI: 10.1002/jgm.3587
PMID: 37697474


## dataset GSE116256

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE116256

> van Galen P, Hovestadt V, Wadsworth Ii MH, Hughes TK et al. `Single-Cell RNA-Seq Reveals AML Hierarchies Relevant to Disease Progression and Immunity`. Cell 2019 Mar 7;176(6):1265-1281.e24. PMID: 30827681


Bone marrow aspirates of `five healthy control donors`, `16 AML patients at diagnosis`, and `19 matched samples during treatment` were analyzed using `Seq-Well single-cell RNA-sequencing (scRNA-seq)`. 

Acute myeloid leukemia (AML) patients in this study underwent `standard induction chemotherapy` between diagnosis (D0) and later time points (D14 and later). `The only exception is AML328, who was treated with azacitidine + venetoclax`. All 35 AML patient samples were also subjected to `targeted amplification of known mutations in AML driver genes`. 

One AML patient (AML921A) was analyzed in technical duplicate.


- aspirate [ˈæspərət] vt. 送气发音；吸入
- prototypic 原型的

We then applied a `machine learning classifier` to distinguish a spectrum of `malignant cell types` whose abundances varied between patients and between subclones in the same tumor. 

Cell type compositions correlated with prototypic genetic lesions, including an association of FLT3-ITD with `abundant progenitor-like cells`. 

Primitive AML cells exhibited dysregulated transcriptional programs with `co-expression of stemness` and `myeloid priming genes` and had prognostic significance. 

Differentiated monocyte-like AML cells expressed diverse immunomodulatory genes and suppressed T cell activity in vitro. 

In conclusion, we provide single-cell technologies and an atlas of AML cell states, regulators, and markers with implications for precision medicine and immune therapies.











# 单细胞测序揭示 儿童AML中 白血病干细胞 和 前提细胞 的多重耐药特性： CD69+ HSC

4. Genome Biol. 2023 Aug 31;24(1):199. doi: 10.1186/s13059-023-03031-7.
Single-cell transcriptomics reveals multiple chemoresistant properties in 
leukemic stem and progenitor cells in pediatric AML.

- pediatric [ˌpiːdiˈætrɪk] adj. 小儿科的
- leukemic [luːˈkemɪk] adj. 白血病的；白血球过多症

> Zhang Y(#)(1), Jiang S(#)(2)(3), He F(#)(2)(3), Tian Y(#)(1), Hu H(2)(3), Gao 
L(1), Zhang L(2)(3), Chen A(2)(3), Hu Y(1), Fan L(1), Yang C(4), Zhou B(5), Liu 
D(2), Zhou Z(2)(3), Su Y(2)(3), Qin L(2)(3), Wang Y(1), He H(1), Lu J(1), Xiao 
P(1), Hu S(6), Wang QF(7)(8).
> Author information: 苏州儿童医院
(1)Department of Hematology and Oncology, Children's Hospital of Soochow 
University, Suzhou, 215025, China.
(2)CAS Key Laboratory of Genomic and Precision Medicine, Beijing Institute of 
Genomics, Chinese Academy of Sciences and China National Center for 
Bioinformation, Beijing, 100101, China.


BACKGROUND: Cancer patients can achieve dramatic responses to chemotherapy yet 
retain resistant tumor cells, which ultimately results in relapse. Although 
xenograft model studies have identified several cellular and molecular features 
that are associated with chemoresistance in acute myeloid leukemia (AML), to 
what extent AML patients exhibit these properties remains largely unknown.


RESULTS: We apply single-cell RNA sequencing to paired pre- and 
post-chemotherapy whole bone marrow samples obtained from `13 pediatric AML 
patients` who had achieved disease remission, and distinguish AML clusters from 
normal cells based on their unique transcriptomic profiles. 

Approximately 50% of 
leukemic stem and progenitor populations actively express leukemia stem cell 
(LSC) and oxidative phosphorylation (OXPHOS) signatures, respectively. 

耐药几率上升，代谢增强
These 
clusters have a higher chance of tolerating therapy and exhibit an enhanced 
metabolic program in response to treatment. 

耐药亚群 膜蛋白 CD69 hi。
Interestingly, the transmembrane 
receptor CD69 is highly expressed in chemoresistant hematopoietic stem cell 
(HSC)-like populations (named the CD69+ HSC-like subpopulation). 

CD69 上调 抑制 mTOR 信号通路，体外促进细胞静息 和 吸附。
Furthermore, 
overexpression of CD69 results in suppression of the mTOR signaling pathway and 
promotion of cell quiescence and adhesion in vitro. 

CD69+ HSC 细胞关联：不良突变关，化疗肿瘤细胞持久残留，不良预后
Finally, the presence of 
CD69+ HSC-like cells is associated with unfavorable genetic mutations, the 
persistence of residual tumor cells in chemotherapy, and poor outcomes in 
independent pediatric and adult public AML cohorts.

- remission [rɪˈmɪʃ(ə)n] n. 缓解；宽恕；豁免


CONCLUSIONS: Our analysis reveals leukemia stem cell and OXPHOS as two major 
chemoresistant features in human AML patients. CD69 may serve as a potential 
biomarker in defining a subpopulation of chemoresistant leukemia stem cells. 
These findings have important implications for targeting residual 
chemo-surviving AML cells.

© 2023. BioMed Central Ltd., part of Springer Nature.

DOI: 10.1186/s13059-023-03031-7
PMCID: PMC10472599
PMID: 37653425 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare that they have no competing 
interests.









# AML 化疗后 PBMC 免疫细胞异质性 (IF=6.3)

5. Cell Oncol (Dordr). 2023 Aug 24. doi: 10.1007/s13402-023-00853-2. Online ahead 
of print.
Single-cell transcriptomic profiling reveals immune cell heterogeneity in acute 
myeloid leukaemia peripheral blood mononuclear cells after chemotherapy.

> Hu X(#)(1)(2), Cao D(#)(3)(4), Zhou Z(5)(6), Wang Z(5)(6), Zeng J(6), Hong 
WX(7).
> Author information: 深圳 皮肤病所
(1)Shenzhen Center for Chronic Disease Control and Prevention, Shenzhen 
Institute of Dermatology, Shenzhen, China. haniahu@hotmail.com.


PURPOSE: Acute myeloid leukaemia (AML) is a heterogeneous disease characterised 
by the `rapid clonal expansion of abnormally differentiated myeloid progenitor 
cells` residing in a complex microenvironment. However, the immune cell types, 
status, and genome profile of the peripheral blood mononuclear cell (PBMC) 
microenvironment in AML patients after chemotherapy are poorly understood. In 
order to explore the immune microenvironment of AML patients after chemotherapy, 
we conducted this study for providing insights into precision medicine and 
immunotherapy of AML.


5个 病人 不同化疗后，6个 健康人
METHODS: In this study, we used single-cell RNA sequencing (scRNA-seq) to 
analyse the PBMC microenvironment from `five AML patients treated with different 
chemotherapy regimens and six healthy donors`. We compared the cell compositions 
in AML patients and healthy donors, and performed `gene set enrichment analysis 
(GSEA)`, `CellPhoneDB`, and `copy number variation (CNV) analysis`.

- regimen [ˈredʒɪmən] n. <正式>生活规则，养生之道，疗程；


RESULTS: Using scRNA-seq technology, 91,772 high quality cells of 44,950 PBMCs 
from AML patients and 46,822 PBMCs from healthy donors were classified as `14 
major cell clusters`. 

Our study revealed the sub-cluster diversity of `T cells`, 
`natural killer (NK) cells`, `monocytes`, `dendritic cells (DCs)`, and `haematopoietic 
stem cell progenitors (HSC-Prog)` in AML patients under chemotherapy. 

NK cells 
and monocyte-DCs showed significant changes in `transcription factor expression` 
and chromosome copy number variation (`CNV`). We also observed significant 
heterogeneity in CNV and intercellular interaction networks in HSC-Prog cells.

CONCLUSION: Our results elucidated the PBMC single-cell landscape and provided 
insights into precision medicine and immunotherapy for treating AML.

© 2023. The Author(s).

DOI: 10.1007/s13402-023-00853-2
PMID: 37615858


## dataset GSE235857 (无 fastq 数据，方法学写的很细)

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE235857
- https://link.springer.com/article/10.1007/s13402-023-00853-2

scRNA-seq to analyse the PBMC microenvironment from five AML patients (AML1, AML2, AML3, AML3B, AML4, AML5) treated with different chemotherapy regimens and six healthy donors(H2, H3, H4, H5, H6, H7).

> Authors state: Raw files were not submitted due to patient privacy concerns








# 一个高龄 AML 病人 scRNA-seq 数据揭示 单核细胞和造血干细胞 多个原核基因高表达(IF=2.2, 2023)

6. Hematology. 2023 Dec;28(1):2240129. doi: 10.1080/16078454.2023.2240129.
Analysis of single-cell sequencing results of an elderly patient with myeloid 
leukemia reveals high expression of multiple oncogenes in monocytes and 
hematopoietic stem cells.

> Xu X(1), Xiong M(2), Ye H(1), Qi Y(1), Zhao Y(1).
> Author information: 佛山人民医院
(1)Department of Hematology, First People's Hospital of Foshan, Foshan, People's 
Republic of China.
(2)The Seventh Affiliated Hospital, Southern Medical University, Foshan, 
People's Republic of China.

OBJECTIVE: Older patients with acute myeloid leukemia (AML) face a higher risk 
of death. This study analyzed the gene sequencing results of an elderly AML 
patient to provide new ideas for treatment.

外周血 + 骨髓：64岁，AML-M5，化疗前。
METHODS: This study performed single-cell RNA sequencing (scRNA-seq) 
bioinformatics analysis of blood cells in the peripheral blood and bone marrow 
of a 64-year-old AML-M5 patient before chemotherapy. The differentially 
expressed genes (DEGs) were identified, and functional enrichment analyses were 
performed.

RESULTS: A total of 7990 and 123 DEGs were identified in monocytes and 
hematopoietic stem cells (HSCs), respectively. 

Among the top 40 DEGs analyzed, 
MYB showed high expression in peripheral blood monocytes, while 13 other 
tumor-related genes exhibited high expression in monocytes in the bone marrow. 

Peripheral blood and bone marrow HSCs had 6 and 12 highly expressed 
tumor-related genes respectively, including MCL1, JUN, and JUNB. These genes may 
form a interconnected network contributing to the progression and heterogeneity 
of AML, which can have an impact on patient treatment and prognosis.


CONCLUSIONS: In conclusion, when treating elderly AML patients, it is important 
to consider their individual characteristics in order to optimize treatment 
strategies.

DOI: 10.1080/16078454.2023.2240129
PMID: 37535066 [Indexed for MEDLINE]





# 无关 (IF=0.8, 2023)

7. Appl Spectrosc. 2023 Jul;77(7):689-697. doi: 10.1177/00037028231176547. Epub 
2023 Jun 12.
Recognition of Nucleophosmin Mutant Gene Expression of Leukemia Cells Using 
Raman Spectroscopy.

> Li M(1)(2), Wu Y(1), Chi M(1), Wang Y(1)(2), Zhu M(1)(2), Gao S(3).
> Author information:
(1)Changchun Institute of Optics, Fine Mechanics and Physics, Chinese Academy of 
Sciences, Changchun, China.
(2)University of Chinese Academy of Sciences, Beijing, China.
(3)Department of Hematology, The First Bethune Hospital of Jilin University, 
Changchun, China.

- raman spectroscopy 拉曼光谱学

As a label-free, nondestructive, and in situ detection method, Raman 
spectroscopy analysis of single cells has potential application value in 
biomedical fields such as cancer diagnosis. In this study, the Raman spectral 
characteristics of nucleophosmin (NPM1)-mutant acute myeloid leukemia (AML) 
cells and nonmutated AML cells were investigated, and the reasons for the 
differences in spectral peaks were explained in combination with transcriptomic 
analysis. Raman spectra of two AML cell lines 

`without NPM1 mutation (THP-1 and HL-60)` and 
the `OCI-AML3 cell line carrying the NPM1 mutant gene` were cultured and collected experimentally. 












# AML CD8+ T 单细胞图谱揭示了 连续分化和克隆 膨胀过度 (IF=12, 2023)

8. Cancer Immunol Res. 2023 Jun 7:OF1-OF18. doi: 10.1158/2326-6066.CIR-22-0961. 
Online ahead of print.
Single-Cell Profiling of CD8+ T Cells in Acute Myeloid Leukemia Reveals a 
Continuous Spectrum of Differentiation and Clonal Hyperexpansion.

> Desai PN(1)(2), Wang B(1), Fonseca A(3), Borges P(1)(3), Jelloul FZ(4), Reville 
PK(1), Lee E(1)(2), Ly C(1)(2), Basi A(1), Root J(1)(2), Baran N(1), Post SM(1), 
Deng Q(5), Sun H(1), Harmanci AO(2), Burks JK(1), Gomez JA(1), DiNardo CD(1), 
Daver NG(1), Alatrash G(6), Konopleva M(1), Green MR(5)(7), Antunes DA(3), 
Futreal A(7), Hao D(8), Abbas HA(1)(7).
> Author information: 美国 德州 MD Anderson 癌症研究所
(1)Department of Leukemia, The University of Texas MD Anderson Cancer Center, 
Houston, Texas.


Comprehensive investigation of CD8+ T cells in acute myeloid leukemia (AML) is 
essential for developing immunotherapeutic strategies beyond immune checkpoint 
blockade.

3 healthy BM V.S. 23 新诊断 8 复发。
Herein, we performed single-cell RNA profiling of CD8+ T cells from 3 
healthy bone marrow donors and 23 newly diagnosed (NewlyDx) and 8 
relapsed/refractory (RelRef) patients with AML. 

Cells coexpressing canonical 
exhaustion markers formed a cluster constituting <1% of all CD8+ T cells. We 
identified `two effector CD8+ T-cell subsets` characterized by distinct cytokine 
and metabolic profiles that were differentially enriched in NewlyDx and RelRef 
patients. 

We refined a `25-gene CD8-derived signature correlating with therapy 
resistance`, including genes associated with activation, chemoresistance, and 
terminal differentiation. 

Pseudotemporal trajectory analysis supported 
enrichment of a terminally differentiated state in CD8+ T cells with high 
CD8-derived signature expression at relapse or refractory disease. Higher 
expression of the 25-gene CD8 AML signature correlated with poorer outcomes in 
previously untreated patients with AML, suggesting that the bona fide state of 
CD8+ T cells and their degree of differentiation are clinically relevant. 

- bona fide [ˌbəʊnə ˈfaɪdi] 真实的、真正的、真诚的


Immune 
clonotype tracking revealed more phenotypic transitions in CD8 clonotypes in 
NewlyDx than in RelRef patients. Furthermore, CD8+ T cells from RelRef patients 
had a higher degree of `clonal hyperexpansion` associated with terminal 
differentiation and higher CD8-derived signature expression. 

Clonotype-derived 
antigen prediction revealed that most previously unreported clonotypes were 
patient-specific, suggesting significant heterogeneity in AML immunogenicity. 

Thus, immunologic reconstitution in AML is likely to be most successful at 
earlier disease stages when CD8+ T cells are less differentiated and have 
greater capacity for clonotype transitions.

©2023 American Association for Cancer Research.

DOI: 10.1158/2326-6066.CIR-22-0961
PMID: 37285177  --> same 37163233











# Cbfb-MYH11 敲入 小鼠 的 白血病进展 (IF=12.8)

9. Leukemia. 2023 Jul;37(7):1549-1553. doi: 10.1038/s41375-023-01926-9. Epub 2023 
May 24.

Characterization of leukemia progression in the Cbfb-MYH11 knockin mice by 
single cell RNA sequencing.

Diemer JL(1), Yu K(1), Kelly M(2)(3), Zhen T(1), Anderson S(4), Lopez G(1), Liu 
P(5).

Author information:
(1)Oncogenesis and Development Section, Division of Intramural Research, 
National Human Genome Research Institute, NIH, Bethesda, MD, USA.

A recurrent inversion of chromosome 16 fuses the genes CBFB and MYH11 and the 
resultant CBFβ-SMMHC fusion protein acts as a driver of the M4Eo subtype of 
acute myeloid leukemia (AML). 

This study utilized single cell RNA-sequencing 
(scRNA-seq) to assess gene expression changes during the disease progression 
from normal to pre-leukemic to overt leukemia in the conditional Cbfb-MYH11 
knock-in mouse model. The study investigated dynamic shifts in cell types as 
disease progresses, and gene expression differences between normal and diseased 
cells. The study identified a novel cell population in the pre-leukemic state 
with expression of genes involved in immune activation. 

Overall, this study 
discovered hematopoietic cells first affected by the expression of CBFβ-SMMHC 
and identified unique signature genes for the pre-leukemic cells that separate 
them from the normal hematopoietic cellular milieu.

DOI: 10.1038/s41375-023-01926-9
PMCID: PMC10437305
PMID: 37225965 [Indexed for MEDLINE]

Conflict of interest statement: Disclosure of Conflicts of Interest The authors 
declare no financial competing interests.











# AML 中剪切因素很重要：小鼠 (IF=9.5, PLoS Biol)

11. PLoS Biol. 2023 May 2;21(5):e3002088. doi: 10.1371/journal.pbio.3002088. 
eCollection 2023 May.

Single-cell transcriptome analyses reveal critical roles of RNA splicing during 
leukemia progression.

> Wu B(1), Chen X(1), Pan X(1), Deng X(1), Li S(1), Wang Z(1), Wang J(1), Liao 
D(1), Xu J(1), Chen M(1), Zhao C(2), Xue Z(2), Wang Y(2), Niu T(1), Lin J(2), 
Chen L(2)(3), Liu Y(1)(2), Chen C(1)(2).
> Author information: 四川大学 西京医院
(1)Department of Hematology and Institute of Hematology, State Key Laboratory of 
Biotherapy and Cancer Center, West China Hospital, Sichuan University, Chengdu, 
Sichuan, China.

白血病是一个 多步骤过程：正常造血干祖细胞 转化为 成熟的 白血病细胞。
Leukemogenesis is proposed to be a multistep process by which `normal 
hematopoietic stem and progenitor cells are transformed into full-blown leukemic 
cells`, the details of which are not fully understood. 


小鼠模型：Myc驱动的AML。
Here, we performed serial 
single-cell transcriptome analyses of preleukemic and leukemic cells (PLCs) and 
constructed the cellular and molecular transformation trajectory in a Myc-driven 
acute myeloid leukemia (AML) model in mice, which represented the transformation 
course in patients. 

We found that the Myc targets were gradually up-regulated along the trajectory. 

Among them were splicing factors, which showed stage-specific prognosis for AML patients. 

Furthermore, we dissected the 
detailed gene network of a tipping point for hematopoietic stem and progenitor 
cells (HSPCs) to generate initiating PLCs, which was characterized by 
dramatically increased splicing factors and unusual RNA velocity. 

In the late 
stage, PLCs acquired explosive heterogeneity through RNA alternative splicing. 

Among them, the Hsp90aa1hi subpopulation was conserved in both human and mouse 
AML and associated with poor prognosis. 

检测到 Tmem134 跳过外显子。跳过的促进细胞周期，全长的减慢肿瘤进展。
Exon 4 skipping of Tmem134 was identified in these cells. 
While the exon skipping product Tmem134β promoted the cell cycle, full-length Tmem134α delayed tumorigenesis. 

Our study emphasized the critical roles of RNA splicing in the full process of leukemogenesis.

> Copyright: © 2023 Wu et al. This is an open access article distributed under the 
terms of the Creative Commons Attribution License, which permits unrestricted 
use, distribution, and reproduction in any medium, provided the original author 
and source are credited.

DOI: 10.1371/journal.pbio.3002088
PMCID: PMC10154039
PMID: 37130348 [Indexed for MEDLINE]

Conflict of interest statement: The authors have declared that no competing 
interests exist.








#  AML 氧化压力的双重作用 (IF=7.31)

12. Oxid Med Cell Longev. 2023 Feb 9;2023:5343746. doi: 10.1155/2023/5343746. 
eCollection 2023.
Combined scRNAseq and Bulk RNAseq Analysis to Reveal the Dual Roles of Oxidative 
Stress-Related Genes in Acute Myeloid Leukemia.

> Qi J(#)(1), Lin J(#)(2), Wu C(#)(3), He H(1), Yao J(1), Xu Y(1), Yang Y(1), Wei 
Y(1), Huang D(1), Mao Y(2)(4).
> Author information: 安徽 皖南医学院
(1)Department of Hematology, The First Affiliated Hospital of Wannan Medical 
College, Wuhu, 241001 Anhui, China.

化疗中，氧化压力可能促进白血病，或者诱导肿瘤细胞死亡。

BACKGROUND: Oxidative stress (OS) can either lead to leukemogenesis or induce 
tumor cell death by inflammation and immune response accompanying the process of 
OS through chemotherapy. 

此前有人做过氧化压力，但是没人做过 OS 相关基因的其他功能。
However, previous studies mainly focus on the level of 
OS state and the salient factors leading to tumorigenesis and progression of 
acute myeloid leukemia (AML), and nothing has been done to distinguish the 
OS-related genes with different functions.

- salient [ˈseɪliənt] adj.最重要的；显著的；突出的


METHOD: First, we downloaded single-cell RNA sequencing (scRNAseq) and bulk RNA 
sequencing (RNAseq) data from public databases and `evaluated the oxidative 
stress functions` between leukemia cells and normal cells by the ssGSEA 
algorithm. 

Then, we used `machine learning methods` to screen out OS gene set A 
related to the occurrence and prognosis of AML and OS gene set B related to 
treatment in leukemia stem cells (LSCs) like population (HSC-like). 

Furthermore, 
we screened out the hub genes in the above two gene sets and used them to 
identify molecular subclasses and construct a model for predicting therapy 
response.


RESULTS: Leukemia cells have different OS functions compared to normal cells and 
significant OS functional changes before and after chemotherapy. 

Two different 
clusters in gene set A were identified, which showed different biological 
properties and clinical relevance. The sensitive model for predicting therapy 
response based on gene set B demonstrated predictive accuracy by ROC and 
internal validation.

CONCLUSION: We combined scRNAseq and bulk RNAseq data to construct two different 
transcriptomic profiles to reveal the different roles of OS-related genes 
involved in AML oncogenesis and chemotherapy resistance, which might provide 
important insights into the mechanism of OS-related genes in the pathogenesis 
and drug resistance of AML.

Copyright © 2023 Jing Qi et al.

DOI: 10.1155/2023/5343746
PMCID: PMC9938912
PMID: 36811020 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare that there is no conflict of 
interest.


## dataset reuse GSE11625 (这个肯定是错的，该号没有单细胞数据)

> scRNAseq and Bulk RNAseq Data Obtaining

The paired bone marrow scRNAseq data and clinical information of `8 AML patients (AML314, AML371, AML997, AML707B, AML475, AML329, AML556, and AML722B)` and `4 healthy donors (BM1, BM2, BM3, and BM4)` were obtained from Gene Expression Omnibus (GEO) database (https://www.ncbi.nlm.nih.gov/geo/) using the accession number GSE11625. 



## dataset reuse GSE106291

- Fig.4e: AML patients in High-risk score group have worse in `GSE106291` validation dataset (P < 0.001) (f).

We used the UCSC Xena (https://xenabrowser.net/) to download the GDC TCGA Acute Myeloid Leukemia (LAML) transcription expression data (n = 151) and phenotype data. 

The bulk RNAseq data and clinical information of AML patients (`GSE106291`, n = 250) were also downloaded from the GEO database. 

1399 oxidative stress-related genes were selected according to a previous study [17].


> 2.8. Construction and Validation of a Chemotherapy-Sensitive Model
建立模型，验证模型

`GSE106291` was the training set, and 50% of the samples were selected as the internal validation set randomly. Patients were divided into two groups (high-risk vs. low-risk group) according to the sensitive score. The receiver operating characteristic (ROC) was used to evaluate the model's predictability.


> 2.5. Nonnegative Matrix Factorization (NMF) Algorithm to Identify Molecular Subclasses
NMF 算法识别分子亚型

First, the differential genes derived from normal cells and tumor cells were intersected with OS-related genes. The significant prognostic genes in LAML dataset were selected by univariate Cox regression. Then, we used unsupervised NMF to cluster the data by using the package “NMF,” with the standard “brunet” for 10 iterations. The cluster value K was set at 2 to 10, and the optimal number of clusters was based on the cophenetic correlation coefficient. The relationship among clusters, clinical variables, and hub genes gene expression was shown by heatmap with R package “ComplexHeatmap.”



> 2.6. Construction and Validation of OS-Related Gene Risk Model
https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9938912/

To select hub genes based on the above candidate genes, LASSO regression (LR) was first used selecting the minimal lambda value. Bootstrap_multicox regression and risk regression model were built according to the multivariate analysis results, and the formula of the model was as follows:

Risk score=∑Coef i∗Gene iSD bootstrap. (1)

LAML dataset was treated as a training set, and GSE106291 was treated as a validated set. Patients were classified into a high- or low-risk group according to the risk score. Overall survival was defined as the endpoint. The R package “glmnet,” “boot,” “survival,” “survminer,” and “ggplot2” were used.











# AML 化疗耐药：造血功能早期停止 (IF=8.6, 2023)

13. Hematol Oncol. 2023 Aug;41(3):499-509. doi: 10.1002/hon.3129. Epub 2023 Feb 25.
Chemoresistance in acute myeloid leukemia: An alternative single-cell RNA 
sequencing approach.

> Cheng PL(1), Hsiao TH(1)(2)(3)(4), Chen CH(5), Hung MN(1), Jhan PP(1), Lee 
LW(1), Wu TS(1), Tsai JR(6), Teng CJ(6)(7)(8)(9)(10)(11).
> Author information: 
(1)Department of Medical Research, Taichung Veterans General Hospital, Taichung, 
Taiwan.

Our previous study demonstrated that `myc`, `mitochondrial oxidative 
phosphorylation`, `mTOR`, and `stemness` are independently responsible for 
chemoresistance in acute myeloid leukemia (AML) cells. 

- mitochondrial oxidative phosphorylation 线粒体 氧化磷酸化

This study aimed to 
identify potential mechanisms of chemoresistance of the "7 + 3" induction in AML 
by using a single-cell RNA sequencing (scRNA-seq) approach. 


未治疗AML，分为两组：完全缓解 n=8，非完全缓解 n=5
In the present 
study, `13 untreated patients` with de novo AML were enrolled and stratified into 
two groups: complete remission (CR; n = 8) and non-CR (n = 5). 

Single-cell RNA sequencing was used to analyze genetic profiles of 28,950 AML cells from these patients; 

results were validated using a previously published bulk RNA-seq dataset. 

化疗耐药 AML 有早期造血阶段 未成熟 累积。
Our study results showed chemoresistant AML cells had `premature accumulation during early hematopoiesis`. 

HSC 中 非缓解组表现更多的 白血病干细胞 marker
Hematopoietic stem cell-like cells from 
the non-CR group expressed more `leukemic stem cell markers (CD9, CD82, IL3RA, and IL1RAP)` than those from the CR group. 

化疗耐药前体细胞 分化障碍：因为 造血功能早期停止。
Chemoresistant progenitor cells had 
impaired myeloid differentiation owing to early arrest of hematopoiesis. 

髓系分支的比例改变。
Notably, AML cells analyzed by scRNA-seq and bulk RNA-seq harbored a comparable 
myeloid lineage cell fraction, which internally validated our results. 

和 TCGA 数据比：AML 病人有更高的化疗耐药标记的，预后差。
Using the 
TCGA database, our analysis demonstrated that patients with AML with higher 
expression of chemoresistant genetic markers (IL3RA and IL1RAP) had a worse 
overall survival (p < 0.01 for IL3RA; p < 0.05 for IL1RAP). 


In conclusion, AML 
cells responsive and resistant to the "7 + 3" induction were derived from a 
diverse cancerous hematopoietic stem cell population, as indicated by the 
specific genetic biomarkers obtained using scRNA-seq approach. 

Furthermore, 
arrest of hematopoiesis was shown to occur earlier in chemoresistant AML cells, 
furthering the current understanding of chemoresistance in AML.

© 2023 John Wiley & Sons Ltd.

DOI: 10.1002/hon.3129
PMID: 36790759 [Indexed for MEDLINE]



## 7 + 3 疗法??

The “7 + 3” regimen (cytarabine 100 mg/m2 for 7 days; idarubicin 12 mg/m2 for 3 days) is the current standard induction therapy for newly diagnosed AML and can achieve a CR rate of 70% in untreated de novo AML.3 However, patients with AML who do not achieve CR with “7 + 3″ induction have an exceptionally dismal outcome.


- cytarabine [sɪtɑræ'bɪn] n.阿糖胞苷


致病原因：

The mechanisms underlying induction failure in AML are diverse. DNA damage repair, cell quiescence, and leukemic stem cell (LSC)-related leukemogenesis are associated with chemoresistance in AML from the perspective of cell function.5-8

- 单细胞 背景介绍 https://onlinelibrary.wiley.com/doi/10.1002/hon.3129


## TCGA

To further validate our scRNA-seq data, we explored the possibility that cell type molecular signatures would correlate with the clinical outcomes of AML. We examined whether the identified HSC marker genes predominant in the non-CR group were associated with clinical outcomes using TCGA database. 

The results showed that the patients with AML in TCGA database with higher expression of chemoresistant HSC marker genes, `IL3RA and IL1RAP`, had significantly inferior OS time than patients with AML with lower IL3RA and IL1RAP expression (p < 0.01 for IL3RA; p < 0.05 for IL1RAP). 

However, marker genes, such as CD9, CD82, CD96, and CD33, were not associated with clinical outcomes (Figure 4B).


## 注释

We used customized references made from GSE11625612 to determine the cell types of each cluster and verified the marker genes using the CellMarker database (http://biocc.hrbmu.edu.cn/CellMarker/). Trajectory analysis was conducted using the Monocle3 1.0.0 package in R software.16-18


## dataset GSE198681 ()

The scRNA-seq data used in this study are available in the Gene Expression Omnibus National Center for Biotechnology Information (GEO NCBI) database (GSE198681).

Examination of 2 different clinical outcome in Bone marrow cells of Acute myeloid leukemia






# mRNA疫苗： 识别靶向 AML 肿瘤抗原和免疫亚型 (IF=3.37)

14. Clin Transl Oncol. 2023 Jul;25(7):2204-2223. doi: 10.1007/s12094-023-03108-6. 
Epub 2023 Feb 13.
Identification of tumor antigens and immune subtypes of acute myeloid leukemia 
for mRNA vaccine development.

> Wang F(1).
> Author information: 华中科技大学 同济医学院
(1)Department of Hematology, Tongji Hospital, Tongji Medical College, Huazhong 
University of Science and Technology, 1095 Jiefang Avenue, Wuhan, 430030, Hubei, 
The People's Republic of China. fanwaang@hust.edu.cn.


BACKGROUND: `Acute myeloid leukemia (AML) is a highly aggressive hematological 
malignancy, and there has not been any significant improvement in therapy of AML 
over the past several decades.` The mRNA vaccines have become a promising 
strategy against multiple cancers, however, its application on AML remains 
undefined. In this study, we aimed to identify novel antigens for developing 
mRNA vaccines against AML and explore the immune landscape of AML to select 
appropriate patients for vaccination.


METHODS: Genomic data and gene mutation data were retrieved from TCGA, GEO and 
cBioPortal, respectively. GEPIA2 was used to analyze differentially expressed 
genes. 

The single cell RNA-seq database Tumor Immune Single-cell Hub (`TISCH`) was 
used to explore the association between the potential tumor antigens and the 
infiltrating immune cells in the bone marrow. 

一致性聚类：识别细胞亚群。
Consensus clustering analysis was applied to identify distinct immune subtypes. 

相关分析：APC细胞丰度，抗原表达水平。
The correlation between the 
`abundance of antigen presenting cells` and the `expression level of antigens` was 
evaluated using Spearman correlation analysis. 

每个亚群的 肿瘤免疫微环境，基于 单样本 基因富集分析
The characteristics of the tumor 
immune microenvironment in each subtype were investigated based on single-sample 
gene set enrichment analysis.

找到 5 个亚群：过表达基因，突变的基因。和浸润 APC 相关。
RESULTS: Five potential tumor antigens were identified for mRNA vaccine from the 
pool of overexpressed and mutated genes, including CDH23, LRP1, MEFV, MYOF and 
SLC9A9, which were associated with infiltration of antigen-presenting immune 
cells (APCs). 


AML分为2个亚型: 
AML patients were stratified into two immune subtypes Cluster1 
(C1) and Cluster2 (C2), which were characterized by distinct molecular and 
clinical features. 

c1亚型 热肿瘤，免疫抑制型，但是有 c2 免疫冷表型。
C1 subtype demonstrated an immune-hot and immunosuppressive 
phenotype, while the C2 subtype had an immune-cold phenotype. 

免疫抑制基因有差异表达
Furthermore, the 
two immune subtype showed remarkably different expression of immune checkpoints, 
immunogenic cell death modulators and human leukocyte antigens.


CONCLUSION: CDH23, LRP1, MEFV, MYOF and SLC9A9 were potential antigens for 
developing AML mRNA vaccine, and AML patients in immune subtype 1 were suitable 
for vaccination.

© 2023. The Author(s), under exclusive licence to Federación de Sociedades 
Españolas de Oncología (FESEO).

DOI: 10.1007/s12094-023-03108-6
PMCID: PMC9924891
PMID: 36781600 [Indexed for MEDLINE]

Conflict of interest statement: The author(s) declare that they have no conflict 
of interest.


## dataset reuse GSE116256

2019 cell;










# 病例：B细胞淋巴瘤使用 CD19 CAR T 治疗后复发: 继发性髓系肿瘤 

15. Front Immunol. 2023 Jan 13;13:1063986. doi: 10.3389/fimmu.2022.1063986. 
eCollection 2022.
Secondary myeloid neoplasms after CD19 CAR T therapy in patients with 
refractory/relapsed B-cell lymphoma: Case series and review of literature.

> Zhao A(1), Zhao M(2), Qian W(1), Liang A(3), Li P(3), Liu H(1).
> Author information: 浙大 二附院
(1)Department of Hematology, The Second Affiliated Hospital, School of Medicine, 
Zhejiang University, Hangzhou, Zhejiang, China.


BACKGROUND: Several chimeric antigen receptor T cells (CAR T) targeting CD19 
have induced profound and prolonged remission for refractory/relapsed (R/R) 
B-cell lymphoma. The risk of secondary malignancies, especially myeloid 
neoplasms, is of particular concern in the CAR T community, which still remains 
unclear.

METHODS: Four patients with R/R B-cell lymphoma after CD19 CAR T therapy 
diagnosed with secondary myeloid neoplasms (SMN) from 2 hospitals in eastern 
China were presented, including 3 with myelodysplastic syndrome (MDS) and 1 with 
acute myeloid leukemia (AML). Using single-cell RNA sequencing (scRNA-seq), we 
compared the cellular components of bone marrow (BM) samples obtained from one 
of these MDS patients and a health donor. We also provided a review of recently 
published literature concerning SMN risk of CAR T therapy.

- scRNA-seq: 1 MDS vs 1 health;
- myelodysplastic syndrome 骨髓增生异常综合征


RESULTS: Relevant demographic, clinical, laboratory, therapeutic and outcome 
data were collected and presented by chart review. In our case series, the 
male-female ratio was 3.0 and the median age at MDS onset was 61.25 years old 
(range, 50-78). Median number of previous systemic therapies was 4.5 (range, 
4-5), including autologous hematopoietic stem cell transplantation (auto-HSCT) 
in one patient. BM assessments prior to CAR T therapy confirmed normal 
hematopoiesis without myeloid neoplasms. Moreover, for 3 patients with SMN in 
our series, cytogenetic analysis predicted a relatively adverse outcome. In our 
experience and in the literature, treatment choices for the patients with SMN 
included allogeneic hematopoietic stem cell transplantation (allo-HSCT), 
hypomethylating agent (HMA), period filgrastim, transfusions and other 
supportive care. Finally, treatment responses of lymphoma, together with SMN, 
directly correlated with the overall survival of this community. Of note, it 
appeared that pathogenesis of MDS wasn't associated with the CAR T toxicities, 
since all 4 patients experienced a pretty mild CRS of grade 1-2. Additionally, 
scRNA-seq analysis described the transcriptional alteration of CD34+ cells, 
identified 13 T/NK clusters, and also indicated increased cytotoxic T cells in 
MDS BM.

CONCLUSION: Our study illustrated the onset and progression of SMN after CD19 
CAR T therapy in patients with R/R B-cell lymphoma, which provides useful 
information of this uncommon later event.

Copyright © 2023 Zhao, Zhao, Qian, Liang, Li and Liu.

DOI: 10.3389/fimmu.2022.1063986
PMCID: PMC9880439
PMID: 36713414 [Indexed for MEDLINE]

> Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.








# 单细胞分析 化疗诱导的 细胞重编程，靶向复发AML的新疗法 (Leukemia, IF=12.8)

16. Leukemia. 2023 Feb;37(2):308-325. doi: 10.1038/s41375-022-01789-6. Epub 2022 Dec 21.
Single-cell analysis reveals the chemotherapy-induced cellular reprogramming and 
novel therapeutic targets in relapsed/refractory acute myeloid leukemia.

> Li K(#)(1)(2)(3), Du Y(#)(1), Cai Y(#)(1)(2)(3), Liu W(#)(4)(5), Lv Y(1), Huang 
B(1)(2)(3), Zhang L(1)(2)(3), Wang Z(6), Liu P(6), Sun Q(4)(5), Li N(1)(2)(3), 
Zhu M(1)(2)(3), Bosco B(1)(2)(3), Li L(1)(2)(3), Wu W(1)(2)(3), Wu L(1)(2)(3), 
Li J(4)(5)(7), Wang Q(8)(9)(10)(11)(12), Hong M(13)(14), Qian S(15)(16).
> Author information: 江苏癌症研究中心
(1)The Affiliated Cancer Hospital of Nanjing Medical University, Jiangsu Cancer 
Hospital, Jiangsu Institute of Cancer Research, 210002, Nanjing, China.


化疗耐药 和 复发 是 AML 相关致死的主因。
Chemoresistance and relapse are the leading cause of AML-related deaths. 

Utilizing single-cell RNA sequencing (scRNA-seq), we dissected the cellular 
states of bone marrow samples from primary refractory or short-term relapsed AML 
patients and defined the transcriptional intratumoral heterogeneity. 

发现了一个静息状态的 干细胞亚群: QSC
We found 
that compared to proliferating stem/progenitor-like cells (PSPs), a 
subpopulation of quiescent stem-like cells (QSCs) were involved in the 
chemoresistance and poor outcomes of AML. 

标记基因是： CD52, LGALS1
By performing longitudinal scRNA-seq 
analyses, we demonstrated that PSPs were reprogrammed to obtain a QSC-like 
expression pattern during chemotherapy in refractory AML patients, characterized 
by the upregulation of `CD52 and LGALS1` expression. 

- longitudinal [ˌlɒŋɡɪˈtjuːdən(ə)l] adj. 纵长的，纵向的；纵观的；经度的
- refractory [rɪˈfræktəri] adj. 难治的；难熔的；不听话的

流式验证：
Flow cytometric analysis 
further confirmed that the preexisting CD99+CD49d+CD52+Galectin-1+ (QSCs) cells 
at diagnosis were associated with chemoresistance, and these cells were further 
enriched in the residual AML cells of refractory patients. 

机制：和 mono 交互？
Interaction of 
CD52-SIGLEC10 between QSCs and monocytes may contribute to immune evading and 
poor outcomes. 

发现靶点： LGALS1，抑制它会导致 QSCs消除 并 促化疗效果：原代 AML 细胞，细胞系，小鼠模型。
Furthermore, we identified that LGALS1 was a promising target for 
chemoresistant AML, and LGALS1 inhibitor could help eliminate QSCs and enhance 
the chemotherapy in patient-derived primary AML cells, cell lines, and AML 
xenograft models. 


Our results will facilitate a better understanding of the AML 
chemoresistance mechanism and the development of novel therapeutic strategies 
for relapsed/refractory AML patients.

© 2022. The Author(s).

DOI: 10.1038/s41375-022-01789-6
PMCID: PMC9898038
PMID: 36543880 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interests.


## 小鼠模型 AML xenograft models //todo


## dataset: HRA001240

The raw sequencing data supporting this study have been deposited in the Genome Sequence Archive at National Genomics Data Center, China National Center for Bioinformation/Beijing Institute of Genomics, Chinese Academy of Sciences (https://ngdc.cncb.ac.cn/gsa-human, accession no. HRA001240). 

The processed count matrices have been deposited in the OMIX (https://ngdc.cncb.ac.cn/omix, accession no. OMIX002180). 

Custom codes and cell annotation files are accessible at GitHub: https://github.com/woolingxiang/cellular_states_of_RR-AML.








# 儿科 AML 病人内和之间的异质性：CD34+ 白血病干细胞 单细胞整合分析 (IF=2.45)

17. Ann Hematol. 2023 Jan;102(1):73-87. doi: 10.1007/s00277-022-05021-4. Epub 2022 Dec 17.
Integrated single-cell transcriptome analysis of CD34 + enriched leukemic stem 
cells revealed intra- and inter-patient transcriptional heterogeneity in 
pediatric acute myeloid leukemia.

> Thakral D(1), Singh VK(1), Gupta R(2), Jha N(1), Khan A(1), Kaur G(1), Rai S(1), 
Kumar V(1), Supriya M(1), Bakhshi S(3), Seth R(4).
> Author information: 印度 新德里
(1)Laboratory Oncology Unit, Dr BRA IRCH, All India Institute of Medical 
Sciences, New Delhi, India.

To gain insights into the idiosyncrasies of CD34 + enriched leukemic stem cells, 
we investigated the nature and extent of transcriptional heterogeneity by 
single-cell sequencing in pediatric AML. 

整合后， LSC 亚群的差异 主要在 细胞周期， BCL2 表达。
Whole transcriptome analysis of 28,029 
AML single cells was performed using the `nanowell` cartridge-based barcoding 
technology. Integrated transcriptional analysis identified unique leukemic stem 
cell clusters of each patient and intra-patient heterogeneity was revealed by 
multiple LSC-enriched clusters differing in their cell cycle processes and BCL2 
expression. 


All LSC-enriched clusters exhibited gene expression profile of 
dormancy and self-renewal. Upregulation of genes involved in non-coding RNA 
processing and ribonucleoprotein assembly were observed in LSC-enriched clusters 
relative to HSC. The genes involved in regulation of apoptotic processes, 
response to cytokine stimulus, and negative regulation of transcription were 
upregulated in LSC-enriched clusters as compared to the blasts. Validation of 
top altered genes in LSC-enriched clusters confirmed upregulation of TCF7L2, 
JUP, ARHGAP25, LPAR6, and PRDX1 genes, and serine/threonine kinases (STK24, 
STK26). Upregulation of LPAR6 showed trend towards MRD positive status (Odds 
ratio = 0.126; 95% CI = 0.0144-1.10; p = 0.067) and increased expression of 
STK26 significantly correlated with higher RFS (HR = 0.231; 95% 
CI = 0.0506-1.052; p = 0.04). Our findings addressed the inter- and 
intra-patient diversity within AML LSC and potential signaling and 
chemoresistance-associated targets that warrant investigation in larger cohort 
that may guide precision medicine in the near future.

© 2022. The Author(s), under exclusive licence to Springer-Verlag GmbH Germany, 
part of Springer Nature.

DOI: 10.1007/s00277-022-05021-4
PMID: 36527458 [Indexed for MEDLINE]











# AML 中脂肪酸代谢: 预测预后和 NK免疫监视 (IF=6.2) 水

18. Front Oncol. 2022 Oct 20;12:1018154. doi: 10.3389/fonc.2022.1018154. eCollection 
2022.
Fatty acid metabolism predicts prognosis and NK cell immunosurveillance of acute 
myeloid leukemia patients.

> Ye Z(1), Li Y(2), Tian X(2), Wei Y(2), Yu Y(2)(3)(4), Lai K(2), Yang K(2), Qiu 
Z(2), Lin J(2), Zhao M(1)(2), Lin D(1), Xu X(1).
> Author information:
(1)Department of Hematology, The Seventh Affiliated Hospital, Zhongshan School 
of Medicine, Sun Yat-sen University, Shenzhen, China.

BACKGROUND: Cell metabolic reprogramming is a hallmark of tumor prognosis, and 
fatty acid metabolism (FAM) plays a crucial role in the tumor microenvironment 
(TME). However, the relationship between FAM, TME, and prognosis of acute 
myeloid leukemia (AML) patients remains elusive.
METHODS: We extracted the single-cell RNA sequencing (scRNA-Seq) and bulk 
transcriptome data of AML patients from the TCGA and GEO databases and assessed 
the relationship between FAM, TME, and AML patient prognosis. We also performed 
functional enrichment (FE) assay to evaluate the significance of FAM in anti-AML 
immunosurveillance.

RESULTS: Our scRNA-Seq analysis revealed that the leukemic stem cell 
(LSC)-enriched population exhibited elevated levels of FAM-related genes. Using 
these FAM-related genes, we developed a prognostic model that accurately 
estimated AML patient outcome. FE analysis showed that FAM was strongly related 
to alterations of TME-based immunosurveillance in AML patients. More 
importantly, we demonstrated that FAM inhibition via pharmaceutical targeting of 
PLA2G4A, a highly expressed FAM gene in AML patients with poor prognosis, 
enhanced the NK cell-mediated immunosurveillance in leukemia cells.

CONCLUSIONS: Leukemic stem cell (LSC)-enriched population exhibited elevated 
levels of FAM-related genes. We have successfully established the FAM formula 
that predicts AML patient prognosis and alterations in the TME-based 
immunosurveillance. We also found that PLA2G4A was a highly expressed FAM gene 
in AML patients with poor prognoses. Pharmaceutical targeting of PLA2G4A 
increased the expression of NKG2DL in leukemia cells in vitro and thus enhanced 
the NK cell-mediated immunosurveillance.

Copyright © 2022 Ye, Li, Tian, Wei, Yu, Lai, Yang, Qiu, Lin, Zhao, Lin and Xu.

DOI: 10.3389/fonc.2022.1018154
PMCID: PMC9633260
PMID: 36338749

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.










# AML 单细胞 microRNA/miRNA 分析 表型异质性 (IF=15.3) 无关

19. Biomaterials. 2022 Dec;291:121869. doi: 10.1016/j.biomaterials.2022.121869. Epub 
2022 Oct 25.
Discrete single-cell microRNA analysis for phenotyping the heterogeneity of 
acute myeloid leukemia.

> Zhao X(1), Wang Z(2), Ji X(1), Bu S(3), Fang P(4), Wang Y(4), Wang M(4), Yang 
Y(5), Zhang W(6), Leung AYH(7), Shi P(8).
> Author information: 香港
(1)Department of Biomedical Engineering, City University of Hong Kong, Kowloon, 
Hong Kong SAR, 999077, China; Hong Kong Centre for Cerebro-Cardiovascular Health 
Engineering, Hong Kong Science Park, Hong Kong SAR, China, 999077.

Acute myeloid leukemia (AML) is a highly heterogenous cancer in hematopoiesis, 
and its subtype specification is greatly important in the clinical practice for 
AML diagnosis and prognosis. 

Increasing evidence has shown the association 
between microRNA (miRNA) phenotype and AML therapeutic outcomes, emphasizing the 
need for novel techniques for convenient, sensitive, and efficient miRNA 
profiling in clinical practices. 

Here, we describe a nanoneedle-based discrete 
single-cell microRNA profiling technique for multiplexed phenotyping of AML 
heterogeneity without the requirement of sequencing or polymerase chain reaction 
(PCR). 

只测了9个 miRNA?
In virtue of a biochip-based and non-destructive nature of the assay, the 
expression of `nine miRNAs in large number of living AML cells` can be 
simultaneously analyzed with discrete single-cell level information, thus 
providing a proof-of-concept demonstration of an AML subtype classifier based on 
the multidimensional miRNA data. 


We showed successful analysis of 
subtype-specific cellular composition with over 90% accuracy and identified 
drug-responsive leukemia subpopulations among a mixed suspension of cells 
modeling different AML subtypes. The adoption of machine learning algorithms for 
processing the large-scale nanoneedle-based miRNA data shows the potential for 
powerful prediction capability in clinical applications to assist therapeutic 
decisions. We believe that this platform provides an efficient and 
cost-effective solution to move forward the translational prognostic usage of 
miRNAs in AML treatment and can be readily and advantageously applied in 
analyzing rare patient-derived clinical samples.

Copyright © 2022 Elsevier Ltd. All rights reserved.

DOI: 10.1016/j.biomaterials.2022.121869
PMID: 36327706 [Indexed for MEDLINE]

Conflict of interest statement: Declaration of competing interest The authors 
declare that they have no known competing financial interests or personal 
relationships that could have appeared to influence the work reported in this 
paper.








# C1Q 标记一个巨噬细胞样白血病亚群：预示着侵袭和复发 (IF=25.48)

20. Blood. 2023 Feb 16;141(7):766-786. doi: 10.1182/blood.2022017046.
C1Q labels a highly aggressive macrophage-like leukemia population indicating 
extramedullary infiltration and relapse.

> Yang LX(1), Zhang CT(2), Yang MY(1), Zhang XH(3), Liu HC(2), Luo CH(1), Jiang 
Y(2), Wang ZM(2), Yang ZY(4), Shi ZP(5), Yang YC(2), Wei RQ(1), Zhou L(5), Mi 
J(5), Zhou AW(5), Yao ZR(1), Xia L(5), Yan JS(2), Lu Y(1).
> Author information: 上海交大 新华医院
(1)Institute of Dermatology, Xinhua Hospital, School of Medicine, Shanghai Jiao 
Tong University, Shanghai, China.
Comment in     Blood. 2023 Feb 16;141(7):691-692.

Extramedullary infiltration (EMI) is a concomitant manifestation that may 
indicate poor outcome of acute myeloid leukemia (AML). The underlying mechanism 
remains poorly understood and therapeutic options are limited. Here, we employed 
single-cell RNA sequencing on bone marrow (BM) and EMI samples from a patient 
with AML presenting pervasive leukemia cutis. A complement C1Q+ macrophage-like 
leukemia subset, which was enriched within cutis and existed in BM before EMI 
manifestations, was identified and further verified in multiple patients with 
AML. Genomic and transcriptional profiling disclosed mutation and gene 
expression signatures of patients with EMI that expressed high levels of C1Q. 
RNA sequencing and quantitative proteomic analysis revealed expression dynamics 
of C1Q from primary to relapse. Univariate and multivariate analysis 
demonstrated adverse prognosis significance of C1Q expression. Mechanistically, 
C1Q expression, which was modulated by transcription factor MAF BZIP 
transcription factor B, endowed leukemia cells with tissue infiltration ability, 
which could establish prominent cutaneous or gastrointestinal EMI nodules in 
patient-derived xenograft and cell line-derived xenograft models. Fibroblasts 
attracted migration of the C1Q+ leukemia cells through C1Q-globular C1Q receptor 
recognition and subsequent stimulation of transforming growth factor β1. This 
cell-to-cell communication also contributed to survival of C1Q+ leukemia cells 
under chemotherapy stress. Thus, C1Q served as a marker for AML with adverse 
prognosis, orchestrating cancer infiltration pathways through communicating with 
fibroblasts and represents a compelling therapeutic target for EMI.

© 2023 by The American Society of Hematology. Licensed under Creative Commons 
Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0), 
permitting only noncommercial, nonderivative use with attribution. All other 
rights reserved.

DOI: 10.1182/blood.2022017046
PMID: 36322939 [Indexed for MEDLINE]











# 造血前提细胞 和 髓系细胞：ROS 调控 27HC 诱导凋亡的作用 (IF=9.6)

21. Cell Death Dis. 2022 Oct 31;13(10):916. doi: 10.1038/s41419-022-05360-0.
Role of reactive oxygen species in regulating 27-hydroxycholesterol-induced 
apoptosis of hematopoietic progenitor cells and myeloid cell lines.

> Woo SY(#)(1), Lee H(#)(2), Park SM(1), Choi HS(1), Kim J(1), Kwon M(1), Sohn 
J(1), Nam JH(3), Kim HS(4), Song P(1), Baryawno N(5), Kim YH(6), Kim K(7), Lee 
D(8).
> Author information: 韩国
(1)Department of Convergence Medicine, School of Medicine, Pusan National 
University, Yangsan, 50612, Republic of Korea.


Oxysterols are oxygenated derivatives of cholesterol that contain an additional 
hydroxy, epoxide, or ketone group in the sterol nucleus and/or a hydroxyl group 
in the side chain of the cholesterol molecule. 27-Hydroxycholesterol (27HC) is a 
side-chain oxysterol that is oxygenated at the 27th carbon atom of cholesterol. 
The oxysterol (27HC) is produced via oxidation by sterol 27-hydroxylase 
(CYP27A1) and metabolized via oxysterol 7a-hydroxylase (CYP7B1) for bile acid 
synthesis in the liver. A previous study has demonstrated that treatment with 
the alternative Estrogen receptor alpha (ERα) ligand 27HC induces ERα-dependent 
hematopoietic stem cell (HSC) mobilization. In addition, Cyp27a1-deficient mice 
demonstrate significantly reduced 27HC levels and HSC mobilization. Here, we 
report that exogenous 27HC treatment leads to a substantial reduction in the 
hematopoietic stem and progenitor cell (HSPC) population owing to significantly 
increased reactive oxygen species (ROS) levels and apoptosis in the bone marrow 
(BM). However, 27HC does not influence the population of mature hematopoietic 
cells in the BM. Furthermore, exogenous 27HC treatment suppresses cell growth 
and promotes ROS production and apoptosis in leukemic cells. 

Moreover, acute 
myeloid leukemia (AML) patients with high CYP7B1 expression (expected to have 
inhibition of 27HC) had significantly shorter survival than those with low 
CYP7B1 expression (expected to have an elevation of 27HC). 

Single-cell 
RNA-sequencing (scRNA seq) analysis revealed that the expression of CYP7B1 was 
significantly increased in AML patients. 

Thus, our study suggests that 27HC may 
serve as a potent agent for regulating pools of HSPCs and may have an 
application as a novel therapeutic target for hematological malignancies. 
Collectively, pharmacological inhibition of CYP7B1 (expected to have an 
elevation of 27HC) would potentially have fewer long-term hematological side 
effects, particularly when used in combination with chemotherapy or radiation 
for the treatment of leukemia patients.

© 2022. The Author(s).

DOI: 10.1038/s41419-022-05360-0
PMCID: PMC9622808
PMID: 36316327 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interests.







# AML 中NK异常：肾素-血管紧张素系统和神经递质基因(RAS) 的关系

22. Open Med (Wars). 2022 Sep 20;17(1):1495-1506. doi: 10.1515/med-2022-0551. 
eCollection 2022.
NK-cell dysfunction of acute myeloid leukemia in relation to the 
renin-angiotensin system and neurotransmitter genes.

> Turk S(1), Baesmat AS(2), Yılmaz A(2), Turk C(2), Malkan UY(3), Ucar G(1), 
Haznedaroğlu IC(3).
> Author information: 土耳其
(1)Department of Biochemistry, Faculty of Pharmacy, Hacettepe University, 
Ankara, 06105, Turkey.

Acute myeloid leukemia (AML) is the most heterogeneous hematological disorder 
and blast cells need to fight against immune system. 

Natural killer (NK) cells 
can elicit fast anti-tumor responses in response to surface receptors of tumor 
cells. NK-cell activity is often impaired in the disease, and there is a risk of 
insufficient tumor suppression and progression. The aim of this study is to 
assess the dysfunction of NK cells in AML patients via focusing on two important 
pathways. 

We obtained single-cell RNA-sequencing data from NK cells obtained 
from healthy donors and AML patients. The data were used to perform a wide 
variety of approaches, including DESeq2 (version 3.9), limma (version 3.26.8) 
power differential expression analyses, hierarchical clustering, gene set 
enrichment, and pathway analysis. ATP6AP2, LNPEP, PREP, IGF2R, CTSA, and THOP1 
genes were found to be related to the renin-angiotensin system (RAS) family, 
while DPP3, GLRA3, CRCP, CHRNA5, CHRNE, and CHRNB1 genes were associated with 
the neurotransmitter pathways. 

The determined genes are expressed within 
different patterns in the AML and healthy groups. The relevant molecular 
pathways and clusters of genes were identified, as well. The cross-talks of 
NK-cell dysfunction in relation to the RAS and neurotransmitters seem to be 
important in the genesis of AML.

© 2022 Seyhan Turk et al., published by De Gruyter.

DOI: 10.1515/med-2022-0551
PMCID: PMC9490854
PMID: 36213442

Conflict of interest statement: Conflict of interest: The authors declare that 
there is no conflict of interest regarding the publication of this article.







# AML中 基于T细胞和浆细胞蛋白 预测预后(IF=3.45) 无关

23. Br J Haematol. 2022 Nov;199(4):572-586. doi: 10.1111/bjh.18453. Epub 2022 Sep 16.
Survival prediction optimization of acute myeloid leukaemia based on T-cell 
function-related genes and plasma proteins.

> Wang Y(1), Chen S(1), Chi P(2), Nie R(3), Gale RP(1)(4), Huang H(1), Chen Z(5), 
Cai Y(5), Yan E(2), Zhang X(6), Zhong N(6), Liang Y(1).
> Author information: 广州 癌症医药中心
(1)Department of Hematologic Oncology, Sun Yat-sen University Cancer Center, 
State Key Laboratory of Oncology in South China, Collaborative Innovation, 
Center for Cancer Medicine, Guangzhou, China.


Interactions between acute myeloid leukaemia (AML) cells and immune cells are 
postulated to corelate with outcomes of AML patients. However, data on T-cell 
function-related signature are not included in current AML survival prognosis 
models. 

We examined data of RNA matrices from 1611 persons with AML extracted 
from public databases arrayed in a training and three validation cohorts. 

We 
developed an eight-gene T-cell function-related signature using the random 
survival forest variable hunting algorithm. 

Accuracy of gene identification was 
tested in a real-world cohort by quantifying cognate plasma protein 
concentrations. The model had robust prognostic accuracy in the training and 
validation cohorts with five-year areas under receiver-operator characteristic 
curve (AUROC) of 0.67-0.76. The signature was divided into high- and low-risk 
scores using an optimum cut-off value. Five-year survival in the high-risk 
groups was 6%-23% compared with 42%-58% in the low-risk groups in all the 
cohorts (all p values &lt;0.001). 

In multivariable analyses, a high-risk score 
independently predicted briefer survival with hazard ratios of death in the 
range 1.28-2.59. Gene set enrichment analyses indicated significant enrichment 
for genes involved in immune suppression pathways in the high-risk groups. 
Accuracy of the gene signature was validated in a real-world cohort with 88 
pretherapy plasma samples. 

In scRNA-seq analyses most genes in the signature 
were transcribed in leukaemia cells. Combining the gene expression signature 
with the 2017 European LeukemiaNet classification significantly increased 
survival prediction accuracy with a five-year AUROC of 0.82 compared with 0.76 
(p &lt; 0.001). Our T-cell function-related risk score complements current AML 
prognosis models.

© 2022 British Society for Haematology and John Wiley &amp; Sons Ltd.

DOI: 10.1111/bjh.18453
PMID: 36113865 [Indexed for MEDLINE]









# 无关| AML 预后

24. Front Immunol. 2022 Aug 23;13:980911. doi: 10.3389/fimmu.2022.980911. 
eCollection 2022.
FLT3LG and IFITM3P6 consolidate T cell activity in the bone marrow 
microenvironment and are prognostic factors in acute myelocytic leukemia.

> Chen H(1)(2), Wu M(2), Xia H(3), Du S(4), Zhou G(5), Long G(2), Zhu Y(6), Huang 
X(2), Yang D(2).
> Author information: 上交大 基础医学院
(1)Institute for Cancer Research, School of Basic Medical Science of Xi'an 
Jiaotong University, Xi'an, China.

Acute myelocytic leukemia (AML) is a malignancy of the stem cell precursors of 
the myeloid lineage. CD4+ and CD8+ T cells play pivotal roles in influencing AML 
progression but are functionally suppressed in the bone marrow microenvironment. 

We aimed to find hub genes related to T cell exhaustion and suppression, thereby 
providing evidence for immunotherapy. 

In this study, gene transcriptome 
expression data from TCGA and TARGET databases were utilized to find key genes. 

Firstly, CIBERSORT immune cell infiltration algorithm and WGCNA method were used 
to identify CD4+ and CD8+ T cells-related genes. Univariate and multivariate cox 
regression analyses were then introduced to construct the overall survival 
prognosis model and included hub genes. The ESTIMATE and ssGSEA scoring methods 
were used to analyze the correlation between the hub genes and immune activity. 

Single-cell transcriptome analysis was applied to detect the immune cells 
expressing hub genes, hence, to detect exact mechanisms. 

Consequently, FLT3LG 
and IFITM3P6 were determined to be positively correlated with patients' overall 
survival and microenvironment immune activity. Further study suggested 
FLT3-FLT3LG and IFITM3P6-miR-6748-3p-CBX7 signaling axes were involved in CD4+ 
and CD8+ T cells activation. This may be one of the mechanisms of T cells 
suppression in AML.

Copyright © 2022 Chen, Wu, Xia, Du, Zhou, Long, Zhu, Huang and Yang.

DOI: 10.3389/fimmu.2022.980911
PMCID: PMC9445253
PMID: 36081495 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.







# 无关|预后

25. Front Oncol. 2022 Aug 10;12:925615. doi: 10.3389/fonc.2022.925615. eCollection 
2022.
Construction of a solid Cox model for AML patients based on multiomics 
bioinformatic analysis.

> Li F(1), Cai J(2)(3), Liu J(1), Yu SC(3), Zhang X(1), Su Y(2), Gao L(1).
> Author information: 重庆 军医大学
(1)Medical Center of Hematology, Xinqiao Hospital, Army Medical University, 
Chongqing, China.


Acute myeloid leukemia (AML) is a highly heterogeneous hematological malignancy. 
The bone marrow (BM) microenvironment in AML plays an important role in 
leukemogenesis, drug resistance and leukemia relapse. 

In this study, we aimed to 
identify reliable immune-related biomarkers for AML prognosis by multiomics 
analysis. We obtained expression profiles from The Cancer Genome Atlas (TCGA) 
database and constructed a LASSO-Cox regression model to predict the prognosis 
of AML using multiomics bioinformatic analysis data. 

This was followed by 
independent validation of the model in the `GSE106291` (n=251) data set and 
mutated genes in clinical samples for predicting overall survival (OS). 

Molecular docking was performed to predict the most optimal ligands to the genes 
in prognostic model. 

The single-cell RNA sequence dataset `GSE116256` was used to 
clarify the expression of the hub genes in different immune cell types. 
According to their significant differences in immune gene signatures and 
survival trends, we concluded that the immune infiltration-lacking subtype (IL 
type) is associated with better prognosis than the immune infiltration-rich 
subtype (IR type). Using the LASSO model, we built a classifier based on 5 hub 
genes to predict the prognosis of AML (risk score = -0.086×ADAMTS3 + 0.180×CD52 
+ 0.472×CLCN5 - 0.356×HAL + 0.368×ICAM3). In summary, we constructed a 
prognostic model of AML using integrated multiomics bioinformatic analysis that 
could serve as a therapeutic classifier.

Copyright © 2022 Li, Cai, Liu, Yu, Zhang, Su and Gao.

DOI: 10.3389/fonc.2022.925615
PMCID: PMC9399435
PMID: 36033493

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.


## dataset GSE106291 预后

德国

The set consists of all patients with available material treated in the AMLCG-2008 study (NCT01382147, n=210) and additional 40 patients with resistant disease that were treated in the AMLG-1999 trial (NCT00266136). 

RNAseq libraries were prepared using the Sense mRNA Seq Library Prep Kit V2 (Lexogen, n=238) and the TruSeq RNA Library Preparation V2 Kit (Illumina, n=12). Between 500-1000 ng total RNA (RNA integrity number [RIN] >7) were used as input material. All sequencing was paired end and performed using polyadenylated-selected and, in case of the Lexogen libraries, stranded RNA sequencing. Samples were sequenced on a HiSeq 1500 instrument (Illumina) as 100 bp reads to a targeted depth of 20 million mappable paired reads per sample.








# AML 肿瘤内异质性 单细胞

26. Front Oncol. 2022 Aug 8;12:915833. doi: 10.3389/fonc.2022.915833. eCollection 2022.
Revealing the intratumoral heterogeneity of non-DS acute megakaryoblastic 
leukemia in single-cell resolution.

> Su N(1), Li Z(1), Yang J(1), Fu Y(1), Zhu X(1), Miao H(1), Yu Y(1), Jiang W(1), 
Le J(1), Qian X(1), Wang H(1), Qian M(2), Zhai X(1).
> Author information: 复旦大学
(1)Department of Hematology and Oncology, National Children's Medical Center, 
Children's Hospital of Fudan University, Shanghai, China.

Pediatric acute megakaryoblastic leukemia (AMKL) is a subtype of acute myeloid 
leukemia (AML) characterized by abnormal megakaryoblasts, and it is divided into 
the AMKL patients with Down syndrome (DS-AMKL) and AMKL patients without DS 
(non-DS-AMKL). Pediatric non-DS-AMKL is a heterogeneous disease with extremely 
poor outcome. 

测序了 2个融合儿童的骨髓，
We performed single-cell RNA sequencing (scRNA-seq) of the bone 
marrow from two CBFA2T3-GLIS2 fusion-positive and one RBM15-MKL1 fusion-positive 
non-DS-AMKL children. 

下载正常 肝脏 和 骨髓 作为对照。
Meanwhile, we downloaded the scRNA-seq data of normal 
megakaryocyte (MK) cells of the fetal liver and bone marrow from healthy donors 
as normal controls. 

We conducted cell clustering, cell-type identification, 
inferCNV analysis, Gene Ontology (GO), Kyoto Encyclopedia of Genes and Genomes 
(KEGG) enrichment, and Monocle2 analysis to investigate the intratumoral 
heterogeneity of AMKL. 

Using canonical markers, we identified and characterized 
the `abnormal blasts` and other normal immune cells from three AMKL samples. We 
found intratumoral heterogeneity of AMKL in various cell-type proportions, 
malignant cells' diverse copy number variations (CNVs), maturities, significant 
genes expressions, and enriched pathways. 

We also identified potential markers 
for pediatric AMKL, namely, RACK1, ELOB, TRIR, NOP53, SELENOH, and CD81. Our 
work offered insight into the heterogeneity of pediatric acute megakaryoblastic 
leukemia and established the single-cell transcriptomic landscape of AMKL for 
the first time.

Copyright © 2022 Su, Li, Yang, Fu, Zhu, Miao, Yu, Jiang, Le, Qian, Wang, Qian 
and Zhai.

DOI: 10.3389/fonc.2022.915833
PMCID: PMC9394455
PMID: 36003795

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.


## dataset PRJCA010386

The original contributions presented in the study are publicly available. The datasets have been deposited in the National Genomics Data Center, accession code: PRJCA010386.


## Healthy donors GSE144024

Healthy donors’ data were downloaded from the GEO dataset (accession number GSE144024). 

Decoding Human Megakaryocyte Development
> Wang H, He J, Xu C, Chen X et al. Decoding Human Megakaryocyte Development. Cell Stem Cell 2021 Mar 4;28(3):535-549.e8. PMID: 33340451

Here, we performed droplet-based and mouth pipette picked scRNA-seq of over 50,000 cells to firstly construct a molecular landscape and dissecting the heterogeneity of MK in human embryos.


The scRNA-seq data of the bone marrow was downloaded from the National Omics Data Encyclopedia dataset (NODE; OEP000756, OEP001150, and OEP001128). First, the reporters built a model of megakaryopoiesis in vitro. Second, they harvested the cultured cells at the time points of D0, D4, 48, and D12. Lastly, they performed scRNA-seq on 10x genomics platform and filtered out low-quality cells.

- https://www.biosino.org/node/project/detail/OEP000756











# 纵向单细胞转录组学揭示急性髓性白血病复发的独特模式 (Mol Cancer, IF=Mol Cancer)

27. Mol Cancer. 2022 Aug 19;21(1):166. doi: 10.1186/s12943-022-01635-4.
Longitudinal single-cell transcriptomics reveals distinct patterns of recurrence 
in acute myeloid leukemia.

> Zhai Y(1)(2)(3), Singh P(2), Dolnik A(4)(5), Brazda P(2)(3), Atlasy N(3), Del 
Gaudio N(1), Döhner K(6), Döhner H(6), Minucci S(7), Martens J(3), Altucci 
L(#)(1)(8), Megchelenbrink W(#)(1)(2), Bullinger L(#)(4)(5), Stunnenberg 
HG(#)(9)(10).
> Author information: 意大利
(1)Department of Precision Medicine, University of Campania "Luigi Vanvitelli", 
Vico L. De Crecchio 7, 80138, Naples, Italy.
(2)Prinses Maxima Centrum, Heidelberglaan 25, 3584 CS, Utrecht, The Netherlands.


急性髓性白血病(AML)是一种异质性和侵袭性血癌，由造血干细胞或祖细胞(HSPCs)的多种遗传畸变导致造血系统中原细胞的扩增而引起。
BACKGROUND: Acute myeloid leukemia (AML) is a heterogeneous and aggressive blood 
cancer that results from diverse genetic aberrations in the hematopoietic stem 
or progenitor cells (HSPCs) leading to the expansion of blasts in the 
hematopoietic system. 

The heterogeneity and evolution of cancer blasts can 
render therapeutic interventions ineffective in a yet poorly understood 
patient-specific manner. 

In this study, we investigated the clonal heterogeneity 
of diagnosis (Dx) and relapse (Re) pairs at genetic and transcriptional levels, 
and unveiled the underlying pathways and genes contributing to recurrence.

全外显子测序：体细胞突变，CNV
METHODS: Whole-exome sequencing was used to detect somatic mutations and large 
copy number variations (CNVs). 

scRNA-seq 研究 克隆异质性：诊断-复发配对。
Single cell RNA-seq was performed to investigate 
the clonal heterogeneity between Dx-Re pairs and amongst patients.


RESULTS: scRNA-seq analysis revealed extensive expression differences between 
patients and Dx-Re pairs, even for those with the same -presumed- initiating 
events. 

Transcriptional differences between and within patients are associated 
with clonal composition and evolution, with the most striking differences in 
patients that gained large-scale copy number variations at relapse. 

These 
differences appear to have significant molecular implications, exemplified by a 
DNMT3A/FLT3-ITD patient where the leukemia switched from an AP-1 regulated clone 
at Dx to a mTOR signaling driven clone at Re. 

The two distinct AML1-ETO pairs 
share genes related to hematopoietic stem cell maintenance and cell migration 
suggesting that the Re leukemic stem cell-like (LSC-like) cells evolved from the 
Dx cells.


CONCLUSIONS: In summary, the single cell RNA data underpinned the tumor 
heterogeneity not only amongst patient blasts with similar initiating mutations 
but also between each Dx-Re pair. 

Our results suggest alternatively and 
currently unappreciated and unexplored mechanisms leading to therapeutic 
resistance and AML recurrence.

© 2022. The Author(s).

DOI: 10.1186/s12943-022-01635-4
PMCID: PMC9389773
PMID: 35986270 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interests.


## dataset EGAD00001008373

The high-throughput datasets have been deposited in the European Genome-phenome Archive. The accession numbers for single cell RNA-seq, bulk RNA-Seq and Whole exome sequencing datasets are EGAD00001008373, EGAD00001008374 and EGAD00001008375, respectively.

https://web2.ega-archive.org/datasets/EGAD00001008373











# AML 中 CRIP1 的表达 //套路 //todo

28. Front Genet. 2022 Jul 22;13:923568. doi: 10.3389/fgene.2022.923568. eCollection 2022.
Comprehensive Analysis of CRIP1 Expression in Acute Myeloid Leukemia.

> Gao Y(1)(2), Li JY(2)(3), Mao JY(1)(2), Zhou JF(4), Jiang L(5), Li XP(2)(3).
> Author information: 中山大学
(1)Department of Medical Oncology, Sun Yat-sen University Cancer Center, 
Guangzhou, China.

Acute myeloid leukemia (AML) is a highly heterogeneous hematological malignancy 
that imposes great challenges in terms of drug resistance and relapse. 

Previous 
studies revealed heterogeneous leukemia cells and their relevant gene markers, 
such as CRIP1 as clinically prognostic in t (8;21) AML patients. 

However, the 
expression and role of CRIP1 in AML are poorly understood. We used the 
single-cell RNA sequencing and gene expression data from t (8;21) AML patients 
to analyze the immune and regulation networks of CRIP1. 

Two independent cohorts 
from GSE37642 and The Cancer Genome Atlas (TCGA) datasets were employed as 
validation cohorts. In addition, the methylation data from TCGA were used to 
analyze the methylation effect of the CRIP1 expression. Gene expression profile 
from t (8;21) AML patients showed that the CRIP1-high group exhibited an 
enrichment of immune-related pathways, 

including tumor necrosis factor (TNF)α signaling via nuclear factor kappa B (NFκB) pathways. 

Further studies using 
CIBERSORT showed that the CRIP1-high group had a significantly higher 
infiltration of exhausted CD8 T cells and activated mast cells. 

The CRIP1 
expression was validated in the GSE37642-GPL96, GSE37642-GPL570, and TCGA 
datasets. 

In addition, with the methylation data, four CpG probes of CRIP1 
(cg07065217, cg04411625, cg25682097, and 11763800) were identified as negatively 
associated with the CRIP1 gene expression in AML patients. 

Our data provide a 
comprehensive overview of the regulation of CRIP1 expression in AML patients. 
The evaluation of the TNFα-NFκB signaling pathway as well as the immune 
heterogeneity might provide new insights for exploring improvements in AML 
treatment.

Copyright © 2022 Gao, Li, Mao, Zhou, Jiang and Li.

DOI: 10.3389/fgene.2022.923568
PMCID: PMC9354089
PMID: 35938037

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.

## dataset reuse GSE37642 (2013 芯片)













# AML 耐药 (Leukemia, IF=11.53)

29. Leukemia. 2022 Jul;36(7):1781-1793. doi: 10.1038/s41375-022-01594-1. Epub 2022 
May 19.
PU.1 and MYC transcriptional network defines synergistic drug responses to KIT 
and LSD1 inhibition in acute myeloid leukemia.

> Curtiss BM(1)(2), VanCampen J(3), Macaraeg J(1)(2), Kong GL(1)(2), Taherinasab 
A(1)(2), Tsuchiya M(1)(2), Yashar WM(1)(2), Tsang YH(1)(2), Horton W(1)(4), 
Coleman DJ(1), Estabrook J(1)(5), Lusardi TA(1)(5), Mills GB(1)(2), Druker 
BJ(1)(2)(6), Maxson JE(1)(2)(4)(6), Braun TP(7)(8)(9).
> Author information: 美国 俄勒冈健康与科学大学
(1)Knight Cancer Institute, Oregon Health & Science University, Portland, OR, 
97239, USA.

由于耐药的快速发展，AML对激酶抑制剂治疗的反应往往是短暂的，限制了临床疗效。
Responses to kinase-inhibitor therapy in AML are frequently short-lived due to 
the rapid development of resistance, limiting the clinical efficacy. 

Combination 
therapy may improve initial therapeutic responses by targeting pathways used by 
leukemia cells to escape monotherapy. 

Here we report that combined inhibition of 
KIT and lysine-specific demethylase 1 (LSD1) produces synergistic cell death in 
KIT-mutant AML cell lines and primary patient samples. 

这种药物组合将MYC和PU.1从染色质驱动的 细胞周期出口 中驱逐出去。
This drug combination 
evicts both MYC and PU.1 from chromatin driving cell cycle exit. 

Using a live 
cell biosensor for AKT activity, we identify early adaptive changes in kinase 
signaling following KIT inhibition that are reversed with the addition of LSD1 
inhibitor via modulation of the GSK3a/b axis. 

Multi-omic analyses, including 
scRNA-seq, ATAC-seq and CUT&Tag, confirm these mechanisms in primary KIT-mutant 
AML. 

Collectively, this work provides rational for a clinical trial to assess 
the efficacy of KIT and LSD1 inhibition in patients with KIT-mutant AML.

© 2022. The Author(s), under exclusive licence to Springer Nature Limited.

DOI: 10.1038/s41375-022-01594-1
PMCID: PMC9256806
PMID: 35590033 [Indexed for MEDLINE]














# AML 中 LSC 指纹: 用新方法对付守护者

30. Stem Cell Rev Rep. 2022 Jun;18(5):1756-1773. doi: 10.1007/s12015-022-10349-5. 
Epub 2022 Mar 28.
Leukemic stem cell signatures in Acute myeloid leukemia- targeting the Guardians 
with novel approaches.

> Thakral D(1), Gupta R(2), Khan A(3).
> Author information: 印度
(1)Laboratory Oncology Unit, Dr BRA IRCH, All India Institute of Medical 
Sciences, New Delhi, India. deepshithakral@gmail.com.

Acute myeloid leukemia is an aggressive hematopoietic stem cell malignancy with 
poor outcomes despite the available treatment options including standard 
chemotherapy, selective targeted therapy and stem cell transplantation. 


大约30-40%的AML患者对初始治疗难治性或复发。
Approximately ~30-40% of AML patients are refractory to initial therapy or succumb to relapse. 


Induction failure result from inherent resistance to 
chemotherapy, which is primarily driven by the chemo-resistant residual leukemic 
stem cells (LSC) that lead to disease progression and recurrence. 

The rarity and 
lack of universal surface markers for the identification and isolation of AML 
LSC renders a major challenge. 

Therefore, a perpetual quest for novel markers to 
characterize LSC and design anti-LSC therapies is ongoing. The evolving 
technologies from high-throughput bulk cell sequencing to high-dimensional 
single cell analysis has begun to decode the cellular hierarchies and 
dysregulated transcriptional networks in AML. These inherent properties of LSC 
as well as cross-talk with the extrinsic bone marrow microenvironmental milieu 
induce a conducive environment for leukemogenesis by secretion of various 
cytokines, chemokines and growth factors that shield LSC against conventional 
chemotherapy. To overcome these barriers, novel approaches of intratumoural 
delivery that focus on immune-mediated eradication by inducing 
microenvironmental changes within the tumour as well as avoid systemic toxicity 
seem encouraging. Selective targeting of LSC and their protective bone marrow 
niche holds immense potential as a promising therapeutic strategy for AML. Novel 
multimodal anti-LSC therapies are being explored that can overcome 
chemo-resistance and immune escape combined with reduced toxicity and sustained 
delivery may improve remission and survival rates in AML patients and decrease 
relapse.

© 2022. The Author(s), under exclusive licence to Springer Science+Business 
Media, LLC, part of Springer Nature.

DOI: 10.1007/s12015-022-10349-5
PMID: 35412219 [Indexed for MEDLINE]










# scTEM-seq: 分析转座子原件甲基化 | 无关

31. Sci Rep. 2022 Apr 6;12(1):5776. doi: 10.1038/s41598-022-09765-x.
scTEM-seq: Single-cell analysis of transposable element methylation to link 
global epigenetic heterogeneity with transcriptional programs.

> Hunt KV(1)(2), Burnard SM(1)(2), Roper EA(1)(2), Bond DR(1)(2), Dun MD(1)(2), 
Verrills NM(1)(2), Enjeti AK(1)(2)(3)(4), Lee HJ(5)(6).
> Author information: 澳大利亚
(1)School of Biomedical Sciences and Pharmacy, College of Health Medicine and 
Wellbeing, University of Newcastle, Callaghan, NSW, Australia.

Global changes in DNA methylation are observed in development and disease, and 
single-cell analyses are highlighting the heterogeneous regulation of these 
processes. However, technical challenges associated with single-cell analysis of 
DNA methylation limit these studies. We present single-cell transposable element 
methylation sequencing (scTEM-seq) for cost-effective estimation of average DNA 
methylation levels. By targeting high-copy SINE Alu elements, we achieve 
amplicon bisulphite sequencing with thousands of loci covered in each scTEM-seq 
library. Parallel transcriptome analysis is also performed to link global DNA 
methylation estimates with gene expression. We apply scTEM-seq to KG1a acute 
myeloid leukaemia (AML) cells, and primary AML cells. Our method reveals global 
DNA methylation heterogeneity induced by decitabine treatment of KG1a cells 
associated with altered expression of immune process genes. We also compare 
global DNA methylation estimates to expression of transposable elements and find 
a predominance of negative correlations. Finally, we observe co-ordinated 
upregulation of many transposable elements in a sub-set of decitabine treated 
cells. By linking global DNA methylation heterogeneity with transcription, 
scTEM-seq will refine our understanding of epigenetic regulation in cancer and 
beyond.

© 2022. The Author(s).

DOI: 10.1038/s41598-022-09765-x
PMCID: PMC8986802
PMID: 35388081 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interests.











# 无关：AML 模型比较 //todo

32. Elife. 2022 Feb 15;11:e73760. doi: 10.7554/eLife.73760.
Comprehensive and unbiased multiparameter high-throughput screening by compaRe finds effective and subtle drug responses in AML models.

> Chalabi Hajkarim M(#)(1), Karjalainen E(#)(2), Osipovitch M(1), Dimopoulos K(3), 
Gordon SL(1), Ambri F(1), Rasmussen KD(4), Grønbæk K(1)(3), Helin K(1)(5), 
Wennerberg K(1), Won KJ(1).
> Author information: 丹麦
(1)Biotech Research and Innovation Centre (BRIC) and Novo Nordisk Foundation 
Center for Stem Cell Biology (DanStem), University of Copenhagen, Copenhagen, 
Denmark.
(2)Institute for Molecular Medicine Finland (FIMM), Helsinki Institute of Life 
Science, University of Helsinki, Helsinki, Finland.

Large-scale multiparameter screening has become increasingly feasible and 
straightforward to perform thanks to developments in technologies such as 
high-content microscopy and high-throughput flow cytometry. The automated 
toolkits for analyzing similarities and differences between large numbers of 
tested conditions have not kept pace with these technological developments. 
Thus, effective analysis of multiparameter screening datasets becomes a 
bottleneck and a limiting factor in unbiased interpretation of results. Here we 
introduce compaRe, a toolkit for large-scale multiparameter data analysis, which 
integrates quality control, data bias correction, and data visualization methods 
with a mass-aware gridding algorithm-based similarity analysis providing a much 
faster and more robust analyses than existing methods. 

Using mass and flow 
cytometry data from acute myeloid leukemia and myelodysplastic syndrome 
patients, we show that compaRe can reveal interpatient heterogeneity and 
recognizable phenotypic profiles. By applying compaRe to high-throughput flow 
cytometry drug response data in AML models, we robustly identified multiple 
types of both deep and subtle phenotypic response patterns, highlighting how 
this analysis could be used for therapeutic discoveries. In conclusion, compaRe 
is a toolkit that uniquely allows for automated, rapid, and precise comparisons 
of large-scale multiparameter datasets, including high-throughput screens.

Plain Language Summary: Biology has seen huge advances in technology in recent 
years. This has led to state-of-the-art techniques which can test hundreds of 
conditions simultaneously, such as how cancer cells respond to different drugs. 
In addition to this, each of the tens of thousands of cells studied can be 
screened for multiple variables, such as certain proteins or genes. This 
generates massive datasets with large numbers of parameters, which researchers 
can use to find similarities and differences between the tested conditions. 
Analyzing these ‘high-throughput’ experiments, however, is no easy task, as the 
data is often contaminated with meaningless information, or ‘background noise’, 
as well as sources of bias, such as non-biological variations between 
experiments. As a result, most analysis methods can only probe one parameter at 
a time, or are unautomated and require manual interpretation of the data. Here, 
Chalabi Hajkarim et al. have developed a new toolkit that can analyze 
multiparameter datasets faster and more robustly than current methods. The kit, 
which was named ‘compaRe’, combines a range of computational tools that 
automatically ‘clean’ the data of background noise or bias: the different 
conditions are then compared and any similarities are visually displayed using a 
graphical interface that is easy to explore. Chalabi Hajkarim et al. used their 
new method to study data from patients with acute myeloid leukemia (AML) and 
myelodysplastic syndrome, two forms of cancer that disrupt the production of 
functional immune cells. The toolkit was able to identify subtle differences 
between the patients and categorize them into groups based on the proteins 
present on immune cells. Chalabi Hajkarim et al. also applied compaRe to 
high-throughput data on cells from patients and mouse models with AML that had 
been treated with large numbers of specific drugs. This revealed that different 
cell types in the samples responded to the treatments in distinct ways. These 
findings suggest that the toolkit created by Chalabi Hajkarim et al. can 
automatically, rapidly and precisely compare large multiparameter datasets 
collected using high-throughput screens. In the future, compaRe could be used to 
identify drugs that illicit a specific response, or to predict how newly 
developed treatments impact different cell types in the body.

© 2022, Chalabi Hajkarim et al.

DOI: 10.7554/eLife.73760
PMCID: PMC9020823
PMID: 35166670 [Indexed for MEDLINE]

Conflict of interest statement: MC, EK, MO, KD, SG, FA, KR, KG, KH, KW, KW No 
competing interests declared














# AML 中转移 基因集 让bulk分类更好 | 算法 | 无关

33. Brief Bioinform. 2022 Mar 10;23(2):bbac002. doi: 10.1093/bib/bbac002.
Improving bulk RNA-seq classification by transferring gene signature from single 
cells in acute myeloid leukemia.

> Wang R(1)(2), Zheng X(1)(2), Wang J(1), Wan S(3), Song F(4), Wong MH(2), Leung 
KS(2), Cheng L(1).
> Author information: 深圳人民医院
(1)Shenzhen People's Hospital, First Affiliated Hospital of Southern University 
of Science and Technology, Second Clinical Medicine College of Jinan University, 
Shenzhen 518020, China.

The advances in single-cell RNA sequencing (scRNA-seq) technologies enable the 
characterization of transcriptomic profiles at the cellular level and 
demonstrate great promise in bulk sample analysis thereby offering opportunities 
to transfer gene signature from scRNA-seq to bulk data. 

However, the gene 
expression signatures identified from single cells are typically inapplicable to 
bulk RNA-seq data due to the profiling differences of distinct sequencing 
technologies. 

Here, we propose single-cell pair-wise gene expression (scPAGE), a 
novel method to develop single-cell gene pair signatures (scGPSs) that were 
beneficial to bulk RNA-seq classification to transfer knowledge across 
platforms. 

PAGE was adopted to tackle the challenge of profiling differences. We 
applied the method to acute myeloid leukemia (AML) and identified the scGPS from 
mouse scRNA-seq that allowed discriminating between AML and control cells. The 
scGPS was validated in bulk RNA-seq datasets and demonstrated better performance 
(average area under the curve [AUC] = 0.96) than the conventional gene 
expression strategies (average AUC$\le$ 0.88) suggesting its potential in 
disclosing the molecular mechanism of AML. The scGPS also outperformed its bulk 
counterpart, which highlighted the benefit of gene signature transfer. 
Furthermore, we confirmed the utility of scPAGE in sepsis as an example of other 
disease scenarios. scPAGE leveraged the advantages of single-cell profiles to 
enhance the analysis of bulk samples revealing great potential of transferring 
knowledge from single-cell to bulk transcriptome studies.

© The Author(s) 2022. Published by Oxford University Press. All rights reserved. 
For Permissions, please email: journals.permissions@oup.com.

DOI: 10.1093/bib/bbac002
PMID: 35136933 [Indexed for MEDLINE]















# CAR-T 靶向抗原 单细胞测序 揭示：在靶点、不在肿瘤的毒性

34. Front Immunol. 2021 Dec 16;12:799206. doi: 10.3389/fimmu.2021.799206. 
eCollection 2021.
Single-Cell Analysis of Target Antigens of CAR-T Reveals a Potential Landscape 
of "On-Target, Off-Tumor Toxicity".

> Zhang Y(1), Li Y(1), Cao W(1), Wang F(1), Xie X(1), Li Y(2), Wang X(3), Guo 
R(1), Jiang Z(1), Guo R(1).
> Author information: 郑大一附院
(1)Department of Hematology, The First Affiliated Hospital of Zhengzhou 
University, Zhengzhou, China.

Cellular immunotherapy represented by CD19-directed chimeric antigen receptor T 
(CAR-T) cells has achieved great success in recent years. An increasing number 
of CAR-T therapies are being developed for cancer treatment, but the frequent 
and varied adverse events, such as "on-target, off-tumor toxicity", limit CAR-T 
application. 

18个组织和器官
Here, we identify the target antigen expression patterns of CAR 
therapies in 18 tissues and organs (peripheral blood mononuclear cells, bone 
marrow, lymph nodes, spleen, heart, ascending aortic tissue, trachea, lung, 
skin, kidney, bladder, esophagus, stomach, small intestine, rectum, liver, 
common bile duct, and pancreas) from healthy human samples. 

The atlas determines 
target antigens expressed on some normal cell types, which facilitates 
elucidating the cause of "on-target, off-tumor toxicity" in special tissues and 
organs by targeting some antigens, but not others. 

Moreover, we describe the 
target antigen expression patterns of B-lineage-derived malignant cells, acute 
myeloid leukemia (AML), and solid tumors. 

Overall, the present study indicates 
the pathogenesis of "on-target, off-tumor toxicity" during CAR therapies and 
provides guidance on taking preventive measures during CAR treatment.

Copyright © 2021 Zhang, Li, Cao, Wang, Xie, Li, Wang, Guo, Jiang and Guo.

DOI: 10.3389/fimmu.2021.799206
PMCID: PMC8716389
PMID: 34975912 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.

## dataset `“bmcite”`

The datasets presented in this study can be found in online repositories. The names of the repository/repositories and accession number(s) can be found in the article/ Supplementary Material .

scRNA-seq Datasets

The scRNA-seq datasets of the trachea (GSM4850591), stomach (GSM4850590), spleen (GSM4850589), small intestine (GSM4850588), skin (GSM4850587), rectum (GSM4850586), lymph node (GSM4850583), liver (GSM4850582), heart (GSM4850581), esophagus (GSM4850580), common bile duct (GSM4850579), and bladder (GSM4850577), were acquired from the GEO database (Accession NO. GSE159929) (46). 

The scRNA-seq datasets of the ascending aortic tissue (GSM4704931, GSM4704932, and GSM4704933) were obtained from GSE155468. 

The scRNA-seq datasets of the normal lung samples were extracted from GSE135893 by performing “subset(x = lung, subset = orig.ident == c(“F00409”,”F01157”,”F01174”, “F01365”, ”F01366”, ”F01367”, ”F01394”, ”HD65”, ”HD66”, ”HD67”, ”HD68”, ”HD70”))” (47). 

The multimodal PBMC reference dataset was downloaded from https://atlas.fredhutch.org/data/nygc/multimodal/pbmc_multimodal.h5seurat. 


> The multimodal human bone marrow mononuclear (BMMC) reference dataset was obtained by performing `“InstallData (“bmcite”)”, and “LoadData(ds = “bmcite”)”` in R. 

The human pancreas dataset was downloaded from http://singlecell.charite.de/pancreas/Adult_Pancreas/adult_pancreas_2020.rds (48).








# Kdm6a缺陷仅限于小鼠造血细胞，导致年龄和性别依赖的骨髓增生异常综合征样表型 | 无关

35. PLoS One. 2021 Nov 15;16(11):e0255706. doi: 10.1371/journal.pone.0255706. 
eCollection 2021.
Kdm6a deficiency restricted to mouse hematopoietic cells causes an age- and 
sex-dependent myelodysplastic syndrome-like phenotype.

> Tian L(1), Chavez M(1), Chang GS(2), Helton NM(1), Katerndahl CDS(1), Miller 
CA(1)(2), Wartman LD(1).
> Author information: 
(1)Division of Oncology, Department of Internal Medicine, Washington University 
School of Medicine, St Louis, MO, United States of America.

Kdm6a/Utx, a gene on the X chromosome, encodes a histone H3K27me3 demethylase 
that has an orthologue on the Y chromosome (Uty) (Zheng et al. 2018). We 
previously identified inactivating mutations of Kdm6a in approximately 50% of 
mouse acute promyelocytic leukemia samples; however, somatic mutations of KDM6A 
are more rare in human AML samples, ranging in frequency from 2-15% in different 
series of patients, where their role in pathogenesis is not yet clear. In this 
study, we show that female Kdm6aflox/flox mice (with allele inactivation 
initiated by Vav1-Cre in hematopoietic stem and progenitor cells (HSPCs) have a 
sex-specific phenotype that emerges with aging, with features resembling a 
myelodysplastic syndrome (MDS). Female Kdm6a-knockout (KO) mice have an 
age-dependent expansion of their HSPCs with aberrant self-renewal, but they did 
not differentiate normally into downstream progeny. These mice became mildly 
anemic and thrombocytopenic, but did not develop overt leukemia, or die from 
these cytopenias. ChIP-seq and ATAC-seq studies showed only minor changes in 
H3K27me3, H3K27ac, H3K4me, H3K4me3 and chromatin accessibility between Kdm6a-WT 
and Kdm6a-KO mice. Utilizing scRNA-seq, Kdm6a loss was linked to the 
transcriptional repression of genes that mediate hematopoietic cell fate 
determination. These data demonstrate that Kdm6a plays an important role in 
normal hematopoiesis, and that its inactivation may contribute to AML 
pathogenesis.

DOI: 10.1371/journal.pone.0255706
PMCID: PMC8592440
PMID: 34780480 [Indexed for MEDLINE]

Conflict of interest statement: The authors have declared that no competing 
interests exist.











# EMT AML 分化 (IF=9.80) | 无关。可以看看 小鼠实验

36. PLoS Biol. 2021 Sep 22;19(9):e3001394. doi: 10.1371/journal.pbio.3001394. 
eCollection 2021 Sep.
Interplay between the EMT transcription factors ZEB1 and ZEB2 regulates 
hematopoietic stem and progenitor cell differentiation and hematopoietic lineage 
fidelity.

> Wang J(1), Farkas C(2)(3), Benyoucef A(2)(3), Carmichael C(1), Haigh K(1)(2)(3), 
Wong N(1), Huylebroeck D(4)(5), Stemmler MP(6), Brabletz S(6), Brabletz T(6), 
Nefzger CM(7)(8)(9), Goossens S(10)(11)(12), Berx G(10)(11), Polo JM(6)(7)(8), 
Haigh JJ(1)(2)(3).
> Author information: 澳大利亚
(1)Australian Centre for Blood Diseases, Monash University, Melbourne, 
Australia.
(2)Department of Pharmacology and Therapeutics, Rady Faculty of Health Sciences, 
University of Manitoba, Winnipeg, Manitoba, Canada.


The ZEB2 transcription factor has been demonstrated to play important roles in 
hematopoiesis and leukemic transformation. ZEB1 is a close family member of ZEB2 
but has remained more enigmatic concerning its roles in hematopoiesis. 


条件敲除
Here, we 
show using conditional loss-of-function approaches and bone marrow (BM) 
reconstitution experiments that ZEB1 plays a cell-autonomous role in 
hematopoietic lineage differentiation, particularly as a positive regulator of 
monocyte development in addition to its previously reported important role in 
T-cell differentiation. 

Analysis of existing single-cell (sc) RNA sequencing 
(RNA-seq) data of early hematopoiesis has revealed distinctive expression 
differences between Zeb1 and Zeb2 in hematopoietic stem and progenitor cell 
(HSPC) differentiation, with Zeb2 being more highly and broadly expressed than 
Zeb1 except at a key transition point (short-term HSC [ST-HSC]➔MPP1), whereby 
Zeb1 appears to be the dominantly expressed family member. Inducible genetic 
inactivation of both Zeb1 and Zeb2 using a tamoxifen-inducible Cre-mediated 
approach leads to acute BM failure at this transition point with increased 
long-term and short-term hematopoietic stem cell numbers and an accompanying 
decrease in all hematopoietic lineage differentiation. Bioinformatics analysis 
of RNA-seq data has revealed that ZEB2 acts predominantly as a transcriptional 
repressor involved in restraining mature hematopoietic lineage gene expression 
programs from being expressed too early in HSPCs. ZEB1 appears to fine-tune this 
repressive role during hematopoiesis to ensure hematopoietic lineage fidelity. 
Analysis of Rosa26 locus-based transgenic models has revealed that Zeb1 as well 
as Zeb2 cDNA-based overexpression within the hematopoietic system can drive 
extramedullary hematopoiesis/splenomegaly and enhance monocyte development. 
Finally, inactivation of Zeb2 alone or Zeb1/2 together was found to enhance 
survival in secondary MLL-AF9 acute myeloid leukemia (AML) models attesting to 
the oncogenic role of ZEB1/2 in AML.

DOI: 10.1371/journal.pbio.3001394
PMCID: PMC8489726
PMID: 34550965 [Indexed for MEDLINE]

Conflict of interest statement: The authors have declared that no competing 
interests exist.












# 诱导谱系乱交破坏了全反式类维甲酸诱导的急性髓系白血病分化的效率 (iScience, IF=5.08) | 分化 todo

37. iScience. 2021 Apr 11;24(5):102410. doi: 10.1016/j.isci.2021.102410. eCollection 
2021 May 21.
Induced lineage promiscuity undermines the efficiency of 
all-trans-retinoid-acid-induced differentiation of acute myeloid leukemia.

> Tang Y(1), Tian X(1), Xu Z(1), Cai J(1), Liu H(1), Liu N(2), Chen Z(1), Chen 
S(1), Liu F(1).
> Author information: 上交大 瑞金医院
(1)Shanghai Institute of Hematology, State Key Laboratory of Medical Genomics, 
National Research Center for Translational Medicine at Shanghai, Ruijin Hospital 
Affiliated to Shanghai Jiao Tong University School of Medicine, Shanghai 200025, 
China.
(2)Interdisciplinary Research Center on Biology and Chemistry, Shanghai 
Institute of Organic Chemistry, Shanghai 200032, China.

All-trans retinoid acid (ATRA) can induce terminal differentiation of acute 
promyelocytic leukemia (APL), also known as the M3 subtype of acute myeloid 
leukemia (AML). However, non-APL types of AML respond poorly to ATRA-induced 
differentiation, and the mechanism underlying cell-type-specific resistance 
against ATRA remains unclear. Here, we use single-cell transcriptome analysis to 
compare the differentiation trajectories of two AML cell types during ATRA 
treatment. 

We show that in `NB4 (APL/AML-M3)` cells, ATRA activates canonical 
myeloid lineage factors-including SPI1, CEBPE, and STAT1-to direct near-normal 
differentiation toward mature granulocytes. 

By contrast, in `HL60 (AML-M2) cells`, 
ATRA-induced differentiation is incomplete and promiscuous, which is 
characterized by coinduction of both myelopoiesis and lymphopoiesis gene 
expression programs, as well as transient activation of cis-regulatory elements 
associated with myeloid differentiation. 

Our study suggests that the 
differentiation inducing capacity of ATRA in certain subtypes of AML may be 
compromised by therapy-induced lineage promiscuity.

© 2021 The Author(s).

DOI: 10.1016/j.isci.2021.102410
PMCID: PMC8099557
PMID: 33997692

Conflict of interest statement: The authors declare no conflict of interest.


## dataset OEP001921

The next-generation sequencing data generated in this study are publicly available from The National Omics Data Encyclopedia (NODE; https://www.biosino.org/node) with the accession number OEP001921. NGS data analyses are performed using open-source tools as described in the transparent methods section in supplemental information.











# 白血病 干细胞 和前体：通过克隆追踪 (NC, 2021)

38. Nat Commun. 2021 Mar 1;12(1):1366. doi: 10.1038/s41467-021-21650-1.
Identification of leukemic and pre-leukemic stem cells by clonal tracking from 
single-cell transcriptomics.

> Velten L(#)(1)(2), Story BA(#)(3)(4), Hernández-Malmierca P(#)(5)(6), Raffel 
S(5)(6)(7), Leonce DR(3), Milbank J(3), Paulsen M(8), Demir A(7), Szu-Tu 
C(9)(10), Frömel R(9)(10), Lutz C(7), Nowak D(11), Jann JC(11), Pabst C(7)(12), 
Boch T(4)(6)(11), Hofmann WK(11), Müller-Tidow C(7), Trumpp A(5)(6)(13), Haas 
S(5)(6)(13)(14)(15)(16), Steinmetz LM(17)(18)(19).
> Author information: 西班牙
(1)Centre for Genomic Regulation (CRG), The Barcelona Institute of Science and 
Technology, Barcelona, Spain. lars.velten@crg.eu.
(2)Universitat Pompeu Fabra (UPF), Barcelona, Spain. lars.velten@crg.eu.

很多肿瘤中，肿瘤干细胞驱动 疾病进展和复发。
Cancer stem cells drive disease progression and relapse in many types of cancer. 

Despite this, a thorough characterization of these cells remains elusive and 
with it the ability to eradicate cancer at its source. 

AML 的干细胞很难分离：和正常造血干细胞高度相似。 //todo
In acute myeloid leukemia 
(AML), leukemic stem cells (LSCs) underlie mortality but are difficult to 
isolate due to their low abundance and high similarity to healthy hematopoietic 
stem cells (HSCs). 

- mortality [mɔːˈtæləti] n. 死亡人数，死亡率；必死性，终有一死；死亡

单细胞 + 突变追踪（细胞核、线粒体）
Here, we demonstrate that LSCs, HSCs, and pre-leukemic stem 
cells can be identified and molecularly profiled by combining single-cell 
transcriptomics with lineage tracing using both nuclear and mitochondrial 
somatic variants. 

突变状态区分 肿瘤细胞，基因表达区分干细胞及祖细胞亚群
While mutational status discriminates between healthy and 
cancerous cells, gene expression distinguishes stem cells and progenitor cell 
populations. 

能识别 LSC 表达模式，以及突变诱导的分化障碍。
Our approach enables the identification of LSC-specific gene 
expression programs and the characterization of differentiation blocks induced 
by leukemic mutations. 

Taken together, we demonstrate the power of single-cell 
multi-omic approaches in characterizing cancer stem cells.

DOI: 10.1038/s41467-021-21650-1
PMCID: PMC7921413
PMID: 33649320 [Indexed for MEDLINE]

Conflict of interest statement: L.M.S. is co-founder of Sophia Genetics and 
Levitas Bio and consultant for several companies on genetic analysis. All other 
authors declare no competing interests.


## dataset GSE75478

Count tables and other processed data necessary to reproduce all analysis from the manuscript are deposited in figshare with 10.6084/m9.figshare.12382685.v1 (ref. 67). 

原始数据：
Raw sequencing data are deposited under a Data Access Agreement to protect patient privacy in the European Genome-Phenome Archive with the accession id `EGAS00001003414`. 

- Requests for data access shall be addressed to LMS (larsms@embl.de). The following restrictions apply: Research with the goal of identifying characteristics of the patient not related to the leukemia (such as surname inference and ancestry research) are excluded. 
- The use of the data for projects not related to cancer research is excluded, exceptions may apply in the context of research aiming to develop new bioinformatics methods. 

健康人数据：
Sequencing data from the healthy individuals are deposited in GEO with the accession id `GSE75478`. 

- The source data underlying Figs. 1f, ​f,5d,5d, ​d,5h,5h, and Supplementary Fig. 8c–e are provided as a Source Data file. 
- All the other data supporting the findings of this study are available within the article and its supplementary information files and from the corresponding author upon reasonable request. Source data are provided with this paper.
















# AML 中多样的免疫类型 (IF=9.57)

39. Biomark Res. 2021 Mar 1;9(1):15. doi: 10.1186/s40364-021-00265-0.
Single-cell map of diverse immune phenotypes in the acute myeloid leukemia 
microenvironment.

> Guo R(1), Lü M(2), Cao F(1), Wu G(3), Gao F(1), Pang H(1), Li Y(3)(4), Zhang 
Y(1), Xing H(1), Liang C(1), Lyu T(3)(4), Du C(5), Li Y(1), Guo R(1), Xie X(1), 
Li W(6), Liu D(7), Song Y(8), Jiang Z(9).
> Author information: 郑大一附院
(1)Department of Hematology, The First Affiliated Hospital of Zhengzhou 
University, Zhengzhou, Henan, China.

BACKGROUND: Knowledge of immune cell phenotypes, function, and developmental 
trajectory in acute myeloid leukemia (AML) microenvironment is essential for 
understanding mechanisms of evading immune surveillance and immunotherapy 
response of targeting special microenvironment components.

16个AML vs 4 健康人
METHODS: Using a single-cell RNA sequencing (scRNA-seq) dataset, we analyzed the 
immune cell phenotypes, function, and developmental trajectory of bone marrow 
(BM) samples from `16 AML patients and 4 healthy donors, but not AML blasts`.

RESULTS: We observed a significant difference between normal and AML BM immune 
cells. 

Here, we defined the diversity of dendritic cells (DC) and macrophages in 
different AML patients. 

We also identified several unique immune cell types including 

- T helper cell 17 (TH17)-like intermediate population, 
- cytotoxic CD4+ T subset, 
- T cell: erythrocyte complexes, 
- activated regulatory T cells (Treg), and 
- CD8+ memory-like subset. 

Emerging AML cells remodels the BM immune 
microenvironment powerfully, leads to immunosuppression by accumulating 
exhausted/dysfunctional immune effectors, expending immune-activated types, and 
promoting the formation of suppressive subsets.

CONCLUSION: Our results provide a comprehensive AML BM immune cell census, which 
can help to select pinpoint targeted drug and predict efficacy of immunotherapy.

DOI: 10.1186/s40364-021-00265-0
PMCID: PMC7919996
PMID: 33648605

Conflict of interest statement: The authors declare that they have no competing 
interests.


## dataset GSE116256

- 2019 cell

The scRNA-seq datasets of AML BM cells and healthy donor BM cells were acquired from the Gene Expression Omnibus (GEO) database (GSE116256). The scRNA-seq data was acquired from BM cells of 16 AML patients and 4 healthy donors. And the information about cell preparation and single-cell transcriptome profiling can be got from the paper of Bradley E. Bernstein and his colleagues [32]. The GSM numbers of all these samples with other detailed information (days from diagnosis, gender, age, mutations, and so on) are listed in Supplementary Table 1.












# AML 中 NFATC4 预后差 | 无关

40. Front Genet. 2020 Nov 27;11:573124. doi: 10.3389/fgene.2020.573124. eCollection 2020.
Increased NFATC4 Correlates With Poor Prognosis of AML Through Recruiting 
Regulatory T Cells.

> Zhao C(1), Yang S(2), Lu W(2), Liu J(1), Wei Y(2), Guo H(2), Zhang Y(2), Shi 
J(2).
> Author information: 上交大 六附院
(1)Department of Hematology, Shanghai Jiao Tong University Affiliated Sixth 
People's Hospital, Shanghai, China.

Despite that immune responses play important roles in acute myeloid leukemia 
(AML), immunotherapy is still not widely used in AML due to lack of an ideal 
target. Therefore, we identified key immune genes and cellular components in AML 
by an integrated bioinformatics analysis, trying to find potential targets for 
AML. Eighty-six differentially expressed immune genes (DEIGs) were identified 
from 751 differentially expressed genes (DEGs) between AML patients with fair 
prognosis and poor prognosis from the TCGA database. Among them, nine prognostic 
immune genes, including NCR2, NPDC1, KIR2DL4, KLC3, TWIST1, SNORD3B-1, NFATC4, 
XCR1, and LEFTY1, were identified by univariate Cox regression analysis. A 
multivariable prediction model was established based on prognostic immune genes. 
Kaplan-Meier survival curve analysis indicated that patients in the high-risk 
group had a shorter survival rate and higher mortality than those in the 
low-risk group (P < 0.001), indicating good effectiveness of the model. 
Furthermore, nuclear factors of activated T cells-4 (NFATC4) was recognized as 
the key immune gene identified by co-expression of differentially expressed 
transcription factors (DETFs) and prognostic immune genes. ATP-binding cassette 
transporters (ABC transporters) were the downstream KEGG pathway of NFATC4, 
identified by gene set variation analysis (GSVA) and gene set enrichment 
analysis (GSEA). To explore the immune responses NFATC4 was involved in, an 
immune gene set of T cell co-stimulation was identified by single-cell GSEA 
(ssGSEA) and Pearson correlation analysis, positively associated with NFATC4 in 
AML (R = 0.323, P < 0.001, positive). In order to find out the immune cell types 
affected by NFATC4, the CIBERSORT algorithm and Pearson correlation analysis 
were applied, and it was revealed that regulatory T cells (Tregs) have the 
highest correlation with NFATC4 (R = 0.526, P < 0.001, positive) in AML from 22 
subsets of tumor-infiltrating immune cells. The results of this study were 
supported by multi-omics database validation. In all, our study indicated that 
NFATC4 was the key immune gene in AML poor prognosis through recruiting Tregs, 
suggesting that NFATC4 might serve as a new therapy target for AML.

Copyright © 2020 Zhao, Yang, Lu, Liu, Wei, Guo, Zhang and Shi.

DOI: 10.3389/fgene.2020.573124
PMCID: PMC7728998
PMID: 33329712

Conflict of interest statement: The authors declare that the research was 
conducted in the absence of any commercial or financial relationships that could 
be construed as a potential conflict of interest.











# AML 中的NK细胞 | 无关

41. Cell Mol Immunol. 2021 May;18(5):1290-1304. doi: 10.1038/s41423-020-00574-8. 
Epub 2020 Nov 25.
Single-cell profiling reveals the trajectories of natural killer cell 
differentiation in bone marrow and a stress signature induced by acute myeloid 
leukemia.

> Crinier A(1), Dumas PY(2)(3)(4), Escalière B(1), Piperoglou C(5), Gil L(1), 
Villacreces A(3)(4), Vély F(1)(5), Ivanovic Z(4)(6), Milpied P(1), 
Narni-Mancinelli É(7), Vivier É(8)(9)(10).
> Author information: 法国
(1)Aix Marseille University, CNRS, INSERM, Centre d'Immunologie de 
Marseille-Luminy, Marseille, France.
Erratum in     Cell Mol Immunol. 2021 Sep 29;:
Comment in 
-    Cell Mol Immunol. 2021 May;18(5):1348-1349.
-    Cell Mol Immunol. 2021 May;18(5):1350-1352.

Natural killer (NK) cells are innate cytotoxic lymphoid cells (ILCs) involved in 
the killing of infected and tumor cells. Among human and mouse NK cells from the 
spleen and blood, we previously identified by single-cell RNA sequencing 
(scRNAseq) two similar major subsets, NK1 and NK2. Using the same technology, we 
report here the identification, by single-cell RNA sequencing (scRNAseq), of 
three NK cell subpopulations in human bone marrow. 
骨髓发现3个NK亚群。

Pseudotime analysis 
identified a subset of resident CD56bright NK cells, NK0 cells, as the precursor 
of both circulating CD56dim NK1-like NK cells and CD56bright NK2-like NK cells 
in human bone marrow and spleen under physiological conditions. Transcriptomic 
profiles of bone marrow NK cells from patients with acute myeloid leukemia (AML) 
exhibited stress-induced repression of NK cell effector functions, highlighting 
the profound impact of this disease on NK cell heterogeneity. Bone marrow NK 
cells from AML patients exhibited reduced levels of CD160, but the CD160high 
group had a significantly higher survival rate.

DOI: 10.1038/s41423-020-00574-8
PMCID: PMC8093261
PMID: 33239726 [Indexed for MEDLINE]

Conflict of interest statement: E.V. is a cofounder and employee of Innate 
Pharma. The other authors declare no competing interests.









# AML 剪切与预后 (Commun Biol, IF=6.5) | 无关

42. Commun Biol. 2020 Oct 30;3(1):630. doi: 10.1038/s42003-020-01353-x.
Single-cell analysis of AIMP2 splice variants informs on drug sensitivity and 
prognosis in hematologic cancer.

> Ku J(1), Kim R(2), Kim D(2), Kim D(2), Song S(2), Lee K(1), Lee N(1), Kim M(1), 
Yoon SS(2)(3)(4), Kwon NH(5), Kim S(5), Kim Y(6), Koh Y(7)(8)(9).
> Author information: 韩国
(1)Department of Chemical and Biomolecular Engineering and KAIST Institute for 
Health Science and Technology (KIHST), Korea Advanced Institute of Science and 
Technology (KAIST), Daejeon, Republic of Korea.
(2)Cancer Research Institute, Seoul National University College of Medicine, 
Seoul, Republic of Korea.

Aminoacyl-tRNA synthetase-interacting multifunctional protein 2 (AIMP2) is a 
non-enzymatic component required for the multi-tRNA synthetase complex. While 
exon 2 skipping alternatively spliced variant of AIMP2 (AIMP2-DX2) compromises 
AIMP2 activity and is associated with carcinogenesis, its clinical potential 
awaits further validation. 

Here, we found that AIMP2-DX2/AIMP2 expression ratio 
is strongly correlated with major cancer signaling pathways and poor prognosis, 
particularly in acute myeloid leukemia (AML). 

Analysis of a clinical patient 
cohort revealed that AIMP2-DX2 positive AML patients show decreased overall 
survival and progression-free survival. 

开发：靶向测序，单分子 RNA-FISH 工具。
We also developed targeted 
RNA-sequencing and single-molecule RNA-FISH tools to quantitatively analyze 
AIMP2-DX2/AIMP2 ratios at the single-cell level. 

By subclassifying hematologic 
cancer cells based on their AIMP2-DX2/AIMP2 ratios, we found that downregulating 
AIMP2-DX2 sensitizes cells to anticancer drugs only for a subgroup of cells 
while it has adverse effects on others. 

Collectively, our study establishes 
AIMP2-DX2 as a potential biomarker and a therapeutic target for hematologic 
cancer.

DOI: 10.1038/s42003-020-01353-x
PMCID: PMC7599330
PMID: 33128014 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interests.











# AML 细胞异质性 (J Hematol Oncol, IF=23.1)

43. J Hematol Oncol. 2020 Sep 25;13(1):128. doi: 10.1186/s13045-020-00941-y.
A single-cell survey of cellular hierarchy in acute myeloid leukemia.

> Wu J(1)(2), Xiao Y(1)(2), Sun J(3), Sun H(1)(2), Chen H(1)(2), Zhu Y(3), Fu 
H(3), Yu C(1)(2), E W(1)(2), Lai S(1)(2), Ma L(1)(2), Li J(1)(2), Fei L(1)(2), 
Jiang M(1)(2), Wang J(1)(2), Ye F(1)(2), Wang R(1)(2), Zhou Z(1)(2), Zhang 
G(1)(2), Zhang T(1)(2), Ding Q(4), Wang Z(4), Hao S(4), Liu L(3), Zheng W(3), He 
J(3), Huang W(3), Wang Y(5), Xie J(6), Li T(7), Cheng T(8)(9), Han 
X(10)(11)(12), Huang H(13)(14)(15)(16)(17), Guo G(18)(19)(20)(21)(22).
> Author information: 浙大医学院 一附院
(1)Center for Stem Cell and Regenerative Medicine, The First Affiliated 
Hospital, Zhejiang University School of Medicine, Hangzhou, 310058, China.
(2)Stem Cell Institute, Zhejiang University, Hangzhou, 310058, China.


BACKGROUND: Acute myeloid leukemia (AML) is a fatal hematopoietic malignancy and 
has a prognosis that varies with its genetic complexity. However, there has been 
no appropriate integrative analysis on the hierarchy of different AML subtypes.

40 病人 + 3 个健康人
METHODS: Using `Microwell-seq`, a high-throughput single-cell mRNA sequencing 
platform, we analyzed the cellular hierarchy of bone marrow samples from `40 
patients and 3 healthy donors`. We also used single-cell single-molecule 
real-time (SMRT) sequencing to investigate the clonal heterogeneity of AML 
cells.

RESULTS: From the integrative analysis of 191727 AML cells, we established a 
single-cell AML landscape and identified an `AML progenitor cell cluster` with 
novel AML markers. 

核糖体蛋白高祖细胞患者的缓解率低。
Patients with ribosomal protein high progenitor cells had a low remission rate. 

- ribosomal [raɪbəˈsəməl] [生化]核糖体的, 核（糖核）蛋白体的

分2类，预后不同。
We deduced two types of AML with diverse clinical outcomes. 

追踪 线粒体突变
We traced mitochondrial mutations in the AML landscape by combining Microwell-seq with SMRT sequencing. 

We propose the existence of a phenotypic 
"cancer attractor" that might help to define a common phenotype for AML 
progenitor cells. 

探索潜在药物靶点： 对比 AML 图谱 和 人类细胞图谱。
Finally, we explored the potential drug targets by making 
comparisons between the AML landscape and the Human Cell Landscape.

CONCLUSIONS: We identified a key AML progenitor cell cluster. A high ribosomal 
protein gene level indicates the poor prognosis. We deduced two types of AML and 
explored the potential drug targets. Our results suggest the existence of a 
cancer attractor.

DOI: 10.1186/s13045-020-00941-y
PMCID: PMC7517826
PMID: 32977829 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing financial 
interest.


## dataset GSE130756(Microwell-seq)

scRNA-seq data have been deposited in NCBI GEO with accession GSE130756.

to 40 patients with 3 healthy donors.









# 多维度研究 AML t(8;21): 识别不良预后的亚型 (PNAS)：四个时期 诊断-完全缓解-复发-复发后

44. Proc Natl Acad Sci U S A. 2020 Aug 18;117(33):20117-20126. doi: 
10.1073/pnas.2003900117. Epub 2020 Aug 3.
Multidimensional study of the heterogeneity of leukemia cells in t(8;21) acute 
myelogenous leukemia identifies the subtype with poor outcome.

> Jiang L(1), Li XP(1), Dai YT(1)(2), Chen B(1), Weng XQ(1), Xiong SM(1), Zhang 
M(1), Huang JY(3), Chen Z(3)(4), Chen SJ(3)(4).
> Author information: 上交大 瑞金医院
(1)State Key Laboratory of Medical Genomics, Shanghai Institute of Hematology, 
National Research Center for Translational Medicine, Ruijin Hospital affiliated 
to Shanghai Jiao Tong University School of Medicine, 200025 Shanghai, China.

t(8;21)(q22;q22) acute myelogenous leukemia (AML) is morphologically 
characterized by a continuum of heterogeneous leukemia cells from myeloblasts to 
differentiated myeloid elements. Thus, t(8;21) AML is an excellent model for 
studying heterogeneous cell populations and cellular evolution during disease 
progression. 

分化停止的三个亚群：
Using integrative analyses of immunophenotype, RNA-sequencing 
(RNA-seq), and single-cell RNA-sequencing (scRNA-seq), we identified three 
distinct intrapatient leukemic cell populations that were `arrested at different 
stages of myeloid differentiation`: CD34+CD117dim blasts, CD34+CD117bri blasts, 
and abnormal myeloid cells with partial maturation (AM). 

1. 阻滞在 G0/G1 期。
CD117 is also known as 
c-KIT protein. CD34+CD117dim cells were blocked in the G0/G1 phase at disease 
onset, presenting with the regular morphology of myeloblasts showing features of 
granulocyte-monocyte progenitors (GMP), and were drug-resistant to chemotherapy.

Genes associated with cell migration and adhesion (LGALS1, EMP3, and ANXA2) were 
highly expressed in the CD34+CD117dim population. 

2. 阻滞稍后，高分裂能力
CD34+CD117bri blasts were 
blocked a bit later than the CD34+CD117dim population in the hematopoietic 
differentiation stage and displayed high proliferation ability. 

3. 部分发育：对化疗敏感
AM cells, which 
bear abnormal myelocyte morphology, especially overexpressed granule genes AZU1, 
ELANE, and PRTN3 and were sensitive to chemotherapy. 

单细胞发现，1是重要的亚群，化疗后复发该亚群会扩张。
scRNA-seq at different time 
points identified CD34+CD117dim blasts as an important leukemic cluster that 
expanded at postrelapse refractory stage after several cycles of chemotherapy. 

亚群1高，预后差
Patients with t(8;21) AML with a higher proportion of CD34+CD117dim cells had 
significantly worse clinical outcomes than those with a lower CD34+CD117dim 
proportion. 

Univariate and multivariate analyses identified CD34+CD117dim 
proportion as an independent factor for poor disease outcome. 


Our study provides 
evidence for the multidimensional heterogeneity of t(8;21)AML and may offer new 
tools for future disease stratification.

DOI: 10.1073/pnas.2003900117
PMCID: PMC7443908
PMID: 32747558 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interest.


## dataaset GSE37642 芯片预后

Interestingly, t(8;21) AML cases in the Gene Expression Omnibus (GSE37642) and AML cases in The Cancer Genome Atlas AML project with the highly expressed gene set of CD34+CD117dim%-high group also showed significantly worse OS than those with low expression of CD34+CD117dim gene set (SI Appendix, Fig. S5D).


## GSE37642 (reuse )


## dataset OEP000629

Data for this study have been deposited at the National Omics Data Encyclopedia (NODE) (http://www.biosino.org/node/project/detail/OEP000629).













# AML iPSC 揭示 RUNX1 在维持 白血病干细胞 的作用(Cell Rep, IF=8.2) | 无关

45. Cell Rep. 2020 Jun 2;31(9):107688. doi: 10.1016/j.celrep.2020.107688.
Acute Myeloid Leukemia iPSCs Reveal a Role for RUNX1 in the Maintenance of Human 
Leukemia Stem Cells.

> Wesely J(1), Kotini AG(1), Izzo F(2), Luo H(3), Yuan H(4), Sun J(5), 
Georgomanoli M(1), Zviran A(2), Deslauriers AG(6), Dusaj N(2), Nimer SD(5), 
Leslie C(4), Landau DA(2), Kharas MG(7), Papapetrou EP(8).
> Author information: 纽约 西奈山伊坎医学院
(1)Department of Oncological Sciences, Icahn School of Medicine at Mount Sinai, 
New York, NY, USA; 

没有通用 标记基因？
Leukemia stem cells (LSCs) are believed to have more distinct vulnerabilities 
than the bulk acute myeloid leukemia (AML) cells, but their rarity and the lack 
of universal markers for their prospective isolation hamper their study. 

We 
report that genetically clonal induced pluripotent stem cells (iPSCs) derived 
from an AML patient and characterized by exceptionally high engraftment 
potential give rise, upon hematopoietic differentiation, to a phenotypic 
hierarchy. 

- engraftment  n. 移植；嫁接


Through fate-tracking experiments, xenotransplantation, and 
single-cell transcriptomics, we identify a cell fraction (iLSC) that can be 
isolated prospectively by means of adherent in vitro growth that resides on the 
apex of this hierarchy and fulfills the hallmark features of LSCs. Through 
integrative genomic studies of the iLSC transcriptome and chromatin landscape, 
we derive an LSC gene signature that predicts patient survival and uncovers a 
dependency of LSCs, across AML genotypes, on the RUNX1 transcription factor. 
These findings can empower efforts to therapeutically target AML LSCs.

Copyright © 2020 The Authors. Published by Elsevier Inc. All rights reserved.

DOI: 10.1016/j.celrep.2020.107688
PMCID: PMC7786450
PMID: 32492433 [Indexed for MEDLINE]

Conflict of interest statement: Declaration of Interests E.P.P. has received 
honoraria from Celgene and Merck and research support from Incyte. M.G.K. has 
received consultant fees from Acent Therapeutics and research support from 28-7. 
These disclosures are not directly related to the present study.












# 抑制 泛素特异性蛋白酶7(USP7) 增加AML化疗敏感 (Leukemia, IF=12.8)

46. Leukemia. 2021 Feb;35(2):417-432. doi: 10.1038/s41375-020-0878-x. Epub 2020 May 23.
Inhibition of ubiquitin-specific protease 7 sensitizes acute myeloid leukemia to 
chemotherapy.

> Cartel M(1)(2), Mouchel PL(1)(3)(4), Gotanègre M(1)(3), David L(1)(2)(5), 
Bertoli S(1)(2)(4), Mansat-De Mas V(1)(2)(6), Besson A(7), Sarry JE(1)(3), 
Manenti S(#)(1)(2), Didier C(#)(8)(9).
> Author information: 法国
(1)Cancer Research Center of Toulouse, INSERM U1037, CNRS ERL 5294, Université 
de Toulouse, Toulouse, France.

Resistance of acute myeloid leukemia (AML) to therapeutic agents is frequent. 
Consequently, the mechanisms leading to this resistance must be understood and 
addressed. 

AML中，抑制 USP7 能阻断 DNA 复制，增加细胞死亡。
In this paper, we demonstrate that inhibition of deubiquitinylase 
USP7 significantly reduces cell proliferation in vitro and in vivo, blocks DNA 
replication progression and increases cell death in AML. 

USP7 可能与耐药有关： AML复发时细胞富集 USP7 基因；PDX小鼠治疗后残留中 blasts cell。
Transcriptomic dataset 
analyses reveal that a USP7 gene signature is highly enriched in cells from AML 
patients at relapse, as well as in residual blasts from patient-derived 
xenograft (PDX) models treated with clinically relevant doses of cytarabine, 
which indicates a relationship between USP7 expression and resistance to 
therapy. 

复发 vs 诊断的 AML单细胞数据，有一个亚群 USP7 高。
Accordingly, single-cell analysis of AML patient samples at relapse 
versus at diagnosis showed that a gene signature of the pre-existing 
subpopulation responsible for relapse is enriched in transcriptomes of patients 
with a high USP7 level. 

AML中，USP7 互作、调控 CHK1 蛋白水平
Furthermore, we found that USP7 interacts and modulates 
CHK1 protein levels and functions in AML. 

Finally, we demonstrated that USP7 
inhibition acts in synergy with cytarabine to kill AML cell lines and primary 
cells of patients with high USP7 levels. 

USP7既是化疗耐药的诊断标记，又是潜在 耐药的治疗靶点。
Altogether, these data demonstrate that 
USP7 is both a marker of resistance to chemotherapy and a potential therapeutic 
target in overcoming resistance to treatment.

DOI: 10.1038/s41375-020-0878-x
PMCID: PMC7245510
PMID: 32447346 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare that they have no conflict 
of interest.


## dataset 芯片: GSE6891， GSE66525， GSE97631(AML PDX)

Transcriptomic signatures and data mining Two USP7 signatures were generated from transcriptomes of AML patients with high versus low expression of USP7 from two independent databases (TCGA Network [25], and Verhaak database `GSE6891` [26]). 

Gene Set Enrichment Analysis (GSEA) using USP7 signature was performed from the relapse and diagnosis transcriptomes according to Hackl et al. [27], 
the high and low responder in mice according to Farge T et al. [28], 
and the LSC and bulk transcriptomes according to Eppert et al. [29]. 
The analysis was performed using the Broad Institute GSEA3.0 software.


We then defined a USP7-specific gene signature (41 genes upregulated, Supplementary Table 1) from The Cancer Genome Atlas transcriptomic database [25], and found that this signature is highly enriched in the transcriptome of AML patient samples at relapse (HACKL cohort, GEO: `GSE66525` [27]) (Fig. 3c). 

We also observed a similar enrichment in transcriptomes of cytarabine-resistant human AML cells purified from PDX models treated with clinically relevant doses of cytarabine (GEO: `GSE97631` [28]) (Fig. 3d). 

These data highlight a correlation between high USP7 transcriptomic signature, AML cell resistance to chemotherapeutic drugs and relapse. Therefore, USP7 signature could represent a new predictive marker of chemoresistance and relapse in AML.















# 染色质修饰酶 LSD1 抑制剂 (INCB059872) 使用后 单细胞测序 (IF=3.9) | 数据可以看看

47. Gene. 2020 Aug 20;752:144758. doi: 10.1016/j.gene.2020.144758. Epub 2020 May 15.
Nascent transcript and single-cell RNA-seq analysis defines the mechanism of 
action of the LSD1 inhibitor INCB059872 in myeloid leukemia.

> Johnston G(1), Ramsey HE(2), Liu Q(3), Wang J(3), Stengel KR(1), Sampathi S(1), 
Acharya P(1), Arrate M(2), Stubbs MC(4), Burn T(4), Savona MR(5), Hiebert SW(6).
> Author information: 美国 范德比尔特 大学
(1)Department of Biochemistry, Vanderbilt University School of Medicine, 
Nashville, TN 37232, USA.
(2)Department of Medicine and Program in Cancer Biology, Vanderbilt University 
School of Medicine, Nashville, TN 37203, USA.

Drugs targeting chromatin-modifying enzymes have entered clinical trials for 
myeloid malignancies, including INCB059872, a selective irreversible inhibitor 
of Lysine-Specific Demethylase 1 (LSD1). 

可用于诱导AML分化，机制未知
While initial studies of LSD1 
inhibitors suggested these compounds may be used to induce differentiation of 
acute myeloid leukemia (AML), the mechanisms underlying this effect and 
dose-limiting toxicities are not well understood. 

监控新生RNA
Here, we used precision 
nuclear run-on sequencing (PRO-seq) and ChIP-seq in AML cell lines to probe for 
the earliest regulatory events associated with INCB059872 treatment. The changes 
in nascent transcription could be traced back to a loss of CoREST activity and 
activation of GFI1-regulated genes. INCB059872 is in phase I clinical trials, 
and we evaluated a pre-treatment bone marrow sample of a patient who showed a 
clinical response to INCB059872 while being treated with azacitidine. 

单细胞测序：表达变化
We used 
single-cell RNA-sequencing (scRNA-seq) to show that INCB059872 caused a shift in 
gene expression that was again associated with GFI1/GFI1B regulation. 

积累巨红细胞早期祖细胞
Finally, 
we treated mice with INCB059872 and performed scRNA-seq of lineage-negative bone 
marrow cells, which showed that INCB059872 triggered accumulation of 
megakaryocyte early progenitor cells with gene expression hallmarks of stem 
cells. 

Accumulation of these stem/progenitor cells may contribute to the 
thrombocytopenia observed in patients treated with LSD1 inhibitors.

- thrombocytopenia [ˌθrɒmbə(ʊ)ˌsaɪtə(ʊ)ˈpiːnɪə] n. 血小板减少（症）

Copyright © 2020 Elsevier B.V. All rights reserved.

DOI: 10.1016/j.gene.2020.144758
PMCID: PMC7401316
PMID: 32422235 [Indexed for MEDLINE]

Conflict of interest statement: Declaration of Competing Interest Scott Hiebert 
and Michael Savona received research funding to support these studies from 
Incyte Corporation. through the Vanderbilt-Incyte Alliance; Matthew Stubbs and 
Timothy Burn are employees of Incyte Corporation.


## Fig1 促进分化

- Fig.1 LSD1 inhibition impairs proliferation and induces differentiation of AML cell lines.


## dataset 细胞系，小鼠，人

Genomics datasets generated as part of this study have been deposited in GEO under the following accession numbers: 

- GSE145071, 细胞系 PRO-seq of THP-1 cells treated with LSD1 inhibitor INCB059872
- GSE145106, 细胞系 RNA-seq of MV-4-11 or THP-1 cells treated with LSD1 inhibitor INCB059872
- GSE145166, 细胞系 ChIP-seq for histone acetylation and methylation in THP-1 cells treated with LSD1 inhibitor INCB059872

- GSE145211, 小鼠 RNA-seq of murine megakaryocyte progenitor cells treated with LSD1 inhibitor INCB059872
- GSE145279, 小鼠 Single-cell RNA-seq: INCB059872 in wild-type murine bone marrow

- GSE145410. 病人 Single-cell RNA-seq of AML patient bone marrow treated with INCB059872, azacitidine, or combination












# t(8;21) AML 单细胞测序预测风险 (IF=4.14)

48. Oncol Rep. 2020 Apr;43(4):1278-1288. doi: 10.3892/or.2020.7507. Epub 2020 Feb 18.
Single‑cell RNA sequencing of t(8;21) acute myeloid leukemia for risk prediction.

> Xiong Q(#)(1), Huang S(#)(1), Li YH(1), Lv N(1), Lv C(1), Ding Y(1), Liu WW(1), 
Wang LL(1), Chen Y(2), Sun L(2), Zhao Y(3), Liao SY(3), Zhang MQ(2), Zhu BL(4), 
Yu L(1).
> Author information: 清华大学
(1)Department of Hematology and BMT Center, Chinese PLA General Hospital, 
Beijing 100853, P.R. China.
(2)School of Medicine, MOE Key Laboratory of Bioinformatics and Bioinformatics 
Division, Center for Synthetic and System Biology, TNLIST/Department of 
Automation, Tsinghua University, Beijing 100084, P.R. China.

Single‑cell RNA sequencing (scRNA‑seq) of bone marrow or peripheral blood 
samples from patients with acute myeloid leukemia (AML) enables the 
characterization of heterogeneous malignant cells. 

只有 87 个细胞？
`A total of 87 cells from two 
patients with t(8;21) AML were analyzed using scRNA‑seq`. 

Clustering methods were 
used to separate leukemia cells into different sub‑populations, and the 
expression patterns of specific marker genes were used to annotate these 
populations. 

Among the 31 differentially expressed genes in the cells of a 
patient who relapsed after hematopoietic stem cell transplantation, 13 genes 
were identified to be associated with leukemia. Furthermore, three genes, namely 
AT‑rich interaction domain 2, lysine methyltransferase 2A and synaptotagmin 
binding cytoplasmic RNA interacting protein were validated as possible 
prognostic biomarkers using two bulk expression datasets. 

Taking advantage of 
scRNA‑seq, the results of the present study may provide clinicians with several 
possible biomarkers to predict the prognostic outcomes of t(8;21) AML.

DOI: 10.3892/or.2020.7507
PMCID: PMC7057921
PMID: 32323795 [Indexed for MEDLINE]


## dataset 生存期 芯片数据： GSE37642 GSE6891

- Fig 5. Kaplan-Meier survival curves of t(8;21) patients with acute myeloid leukemia from datasets GSE37642 (n=30) and GSE6891 (n=22) using genes ARID2, MLL and SYNCRIP. 
- Overall survival curves using ARID2 for (A) GSE37642 and (B) GSE6891. 
- (C) Event-free survival curve using ARID2 from the dataset GSE6891. 
- Overall survival curves using MLL for (D) GSE37642 and (E) GSE6891. (F) Event-free survival curve using ARID2 from the dataset GSE6891. Overall survival curves using SYNCRIP for (G) GSE37642 and (H) GSE6891. ARID2, AT-rich interaction domain 2; MLL, lysine methyltransferase 2A; SYNCRIP, synaptotagmin binding cytoplasmic RNA interacting protein.








# 小鼠：MLL 诱导 白血病的早期步骤：Kmt2a (NC, 2020)

49. Nat Commun. 2020 Mar 16;11(1):1407. doi: 10.1038/s41467-020-15220-0.
Dissecting the early steps of MLL induced leukaemogenic transformation using a 
mouse model of AML.

> Basilico S(#)(1), Wang X(#)(1), Kennedy A(1), Tzelepis K(2)(3), Giotopoulos 
G(1), Kinston SJ(1), Quiros PM(2), Wong K(2), Adams DJ(2), Carnevalli LS(4), 
Huntly BJP(1), Vassiliou GS(1)(2), Calero-Nieto FJ(5), Göttgens B(6).
> Author information: 英国 谢建华生物医学中心
(1)Wellcome and MRC Cambridge Stem Cell Institute and University of Cambridge 
Department of Haematology, Jeffrey Cheah Biomedical Centre, Puddicombe Way, 
Cambridge, CB2 0AW, UK.

白血病突变，通常打断 细胞分化，和/或 增强分裂，干扰 干细胞和祖细胞 自我更新 和 分化的 调控。
Leukaemogenic mutations commonly disrupt cellular differentiation and/or enhance 
proliferation, thus perturbing the regulatory programs that control self-renewal 
and differentiation of stem and progenitor cells. 


Translocations involving the 
Mll1 (Kmt2a) gene generate powerful oncogenic fusion proteins, predominantly 
affecting infant and paediatric AML and ALL patients. 

早期步骤通常不可见：病人，通常小鼠模型。
The early stages of 
leukaemogenic transformation are typically inaccessible from human patients and 
conventional mouse models. 

在造血祖细胞 的不同阶段，使用条件删除， ... 依赖细胞之间清晰的 关系
Here, we take advantage of cells conditionally 
blocked at the multipotent haematopoietic progenitor stage to develop a MLL-r 
model capturing early cellular and molecular consequences of MLL-ENL expression 
based on a clear clonal relationship between parental and leukaemic cells. 


Through a combination of scRNA-seq, ATAC-seq and genome-scale CRISPR-Cas9 
screening, we identify pathways and genes likely to drive the early phases of 
leukaemogenesis. 

Finally, we demonstrate the broad utility of using matched 
parental and transformed cells for small molecule inhibitor studies by 
validating both previously known and other potential therapeutic targets.

DOI: 10.1038/s41467-020-15220-0
PMCID: PMC7075888
PMID: 32179751 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing interests. 
L.S.C. is an AstraZeneca employee (no competing interest).


## dataset Mouse

The genome-wide CRISPR screening and exome sequencing data referenced during the study have been deposited in the European Nucleotide Archive (http://www.ebi.ac.uk/ena) with numbers ERP118720 and ERS529672 and ERP117027. 

scRNA-seq and ATAC-Seq data have been deposited in the GEO database (https://www.ncbi.nlm.nih.gov/geo/) under the accession numbers GSE140807(1k多个 GSM 文件) and GSE141353, respectively. 

`Normal bone marrow HSPC dataset` published by Dahlin et al.24 was obtained from GEO database, accession number `GSE107727`. 













# 小鼠: 丢失 Kat2a 增强 转录本噪音，删除 AML 干性细胞 (IF=7.7) //学习 Good

50. Elife. 2020 Jan 27;9:e51754. doi: 10.7554/eLife.51754.

Loss of Kat2a enhances transcriptional noise and depletes acute myeloid leukemia 
stem-like cells.

- deplete [dɪˈpliːt] v. 大量减少，耗尽

> Domingues AF(#)(1), Kulkarni R(#)(1), Giotopoulos G(2)(3), Gupta S(1)(4), 
Vinnenberg L(1), Arede L(1)(4), Foerner E(1), Khalili M(1)(5), Adao RR(1), Johns 
A(6), Tan S(2), Zeka K(1)(4), Huntly BJ(2)(3), Prabakaran S(4)(7), Pina C(4)(6).
> Author information: 英国 剑桥大学
(1)Department of Haematology, University of Cambridge, NHS-BT Blood Donor 
Centre, Cambridge, United Kingdom.

急性髓性白血病(AML)是一种侵袭性血液系统恶性肿瘤，特点是 异常的祖细胞自我更新，和缺陷的白细胞分化。
Acute Myeloid Leukemia (AML) is an aggressive hematological malignancy with 
abnormal progenitor self-renewal and defective white blood cell differentiation. 

Its pathogenesis comprises subversion of transcriptional regulation, through 
mutation and by hijacking normal chromatin regulation. Kat2a is a histone 
acetyltransferase central to promoter activity, that we recently associated with 
stability of pluripotency networks, and identified as a genetic vulnerability in 
AML. 

Through combined chromatin profiling and single-cell transcriptomics of a 
conditional knockout mouse, we demonstrate that Kat2a contributes to leukemia 
propagation through preservation of leukemia stem-like cells. 

Kat2a loss impacts 
transcription factor binding and reduces transcriptional burst frequency in a 
subset of gene promoters, generating enhanced variability of transcript levels. 

目标程序的 去稳定 将白血病细胞的命运从自我更新转变为分化。
Destabilization of target programs shifts leukemia cell fate out of self-renewal 
into differentiation. 

We propose that control of transcriptional variability is 
central to leukemia stem-like cell propagation, and establish a paradigm 
exploitable in different tumors and distinct stages of cancer evolution.


------------------

诊断为AML后 5年生存期 小于30%。
Plain Language Summary: Less than 30% of patients with acute myeloid leukaemia – 
an aggressive cancer of the white blood cells – survive five years 
post-diagnosis. 

白细胞成熟异常中断，导致幼稚细胞累计。
This disease disrupts the maturation of white blood cells, 
resulting in the accumulation of immature cells that multiply and survive but 
are incapable of completing their maturation process. 

Amongst these, a group of 
cancer cells known as leukemic stem cells is responsible for continually 
replenishing the leukaemia, thus perpetuating its growth. 

Cancers develop when 
cells in the body acquire changes or mutations to their genetic makeup. The 
mutations that lead to acute myeloid leukaemia often affect the activity of 
genes known as epigenetic regulators. These genes regulate which proteins and 
other molecules cells make by controlling the way in which cells ‘read’ their 
genetic instructions. `The epigenetic regulator Kat2a is thought to ‘tune’ the 
frequency at which cells read their genetic instructions.` This tuning mechanism 
decreases random fluctuations in the execution of the instructions cells receive 
to make proteins and other molecules. In turn, this helps to ensure that 
individual cells of the same type behave in a similar way, for example by 
keeping leukaemia cells in an immature state. 

Here, Domingues, Kulkarni et al. 
investigated `whether interfering with Kat2a can make acute myeloid leukaemia 
less aggressive by allowing the immature white blood cells to mature`. 

小鼠模型：从血细胞中 条件性 去掉 Kat2a ，插入一个导致 AML 的突变。
Domingues, 
Kulkarni et al. genetically engineered mice to remove Kat2a from blood cells on 
demand and then inserted a mutation that causes acute myeloid leukaemia. 

结果：小鼠失去 Kat2a 延缓白血病进展，逐渐删除 白血病干细胞，让癌症变得不那么具有攻击性。
The 
experiments showed that the loss of Kat2a delayed the development of leukaemia 
in the mice and progressively depleted leukaemia stem cells, causing the disease 
to become less aggressive. 

失去 Kat2a 导致白细胞更灵活读取基因，导致他们差生的分子变异更大，增加了成熟的倾向。 //todo 怎么检测的成熟？
The results also showed that loss of Kat2a caused 
more fluctuations in how the white blood cells read their genetic code, which 
resulted in more variability in the molecules they produced and increased the 
tendency of the cells to mature. 

These findings establish that loss of Kat2a 
causes leukaemia stem cells to mature and stop multiplying by untuning the 
frequency at which the cells read their genetic instructions. 

In the future, it 
may be possible to develop drugs that target human KAT2A to treat acute myeloid 
leukaemia.

© 2020, Domingues et al.

DOI: 10.7554/eLife.51754
PMCID: PMC7039681
PMID: 31985402 [Indexed for MEDLINE]

Conflict of interest statement: AD, RK, GG, SG, LV, LA, EF, MK, RA, AJ, ST, KZ, 
BH, SP, CP No competing interests declared


## dataset Mouse: GSE118769

All single-cell RNAseq data and ChIPseq data were deposited in GEO (SuperSeries GSE118769).

The following dataset was generated:
Kulkarni R, Pina C. 2020. Loss of Kat2a enhances transcriptional noise and depletes acute myeloid leukemia stem-like cells. NCBI Gene Expression Omnibus. GSE118769


- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE118768

Single-cell RNA-seq analysis of 2 mouse bone marrow (BM) samples obtained from pooled terminal primary MLL-AF9 AMLs established from Kat2a WT or Kat2a KO cells. AML cells were sorted as live MLL-AF9-expressing cells by Hoechst 22358 exclusion and YFP reporter expression, respectively, and libraries were prepared upon single-cell droplet-based barcoding using 10X Genomics technology.














# scRNA-seq 揭示了 不同的 自我更新 和 增殖 亚群：AML 的 白血病干细胞中 (IF=12.70)

51. Cancer Res. 2020 Feb 1;80(3):458-470. doi: 10.1158/0008-5472.CAN-18-2932. Epub 
2019 Nov 29.
Single-Cell Gene Expression Analyses Reveal Distinct Self-Renewing and 
Proliferating Subsets in the Leukemia Stem Cell Compartment in Acute Myeloid 
Leukemia.

> Sachs K(#)(1)(2), Sarver AL(#)(3), Noble-Orcutt KE(#)(1)(3), LaRue RS(1)(3), 
Antony ML(1)(3), Chang D(1)(3), Lee Y(1)(3), Navis CM(1), Hillesheim AL(1), 
Nykaza IR(1), Ha NA(1), Hansen CJ(1), Karadag FK(1), Bergerson RJ(4), Verneris 
MR(4), Meredith MM(5), Schomaker ML(5), Linden MA(6), Myers CL(7), Largaespada 
DA(3)(4), Sachs Z(8)(3).
> Author information: 密西西比大学
(1)Division of Hematology, Oncology, and Transplantation, Department of 
Medicine, University of Minnesota, Minneapolis, Minnesota.
(2)Next Generation Analytics, Palo Alto, California.

Standard chemotherapy for acute myeloid leukemia (AML) targets proliferative 
cells and efficiently induces complete remission; however, many patients relapse 
and die of their disease. 

复发是由于 白血病干细胞的自我更新能力。
Relapse is caused by leukemia stem cells (LSC), the 
cells with self-renewal capacity. 

自我更新 和 分裂，是分开的功能，对于稳态 造血干细胞。
Self-renewal and proliferation are separate 
functions in normal hematopoietic stem cells (HSC) in steady-state conditions. 

如果 白血病干细胞这2个功能也分开，那么 抗分裂疗法可能不能靶向 自我更新，导致复发。
If these functions are also separate functions in LSCs, then antiproliferative 
therapies may fail to target self-renewal, allowing for relapse. 


We investigated 
whether proliferation and self-renewal are separate functions in LSCs as they 
often are in HSCs. Distinct transcriptional profiles within LSCs of 
Mll-AF9/NRASG12V murine AML were identified using `single-cell RNA sequencing`.


Single-cell qPCR revealed that these genes were also differentially expressed in 
primary human LSCs and normal human HSPCs. 

A smaller subset of these genes was 
upregulated in LSCs relative to HSPCs; this subset of genes constitutes 
"LSC-specific" genes in human AML. 

To assess the differences between these 
profiles, we identified cell surface markers, CD69 and CD36, whose genes were 
differentially expressed between these profiles. 

小鼠体内 试验
In vivo mouse reconstitution 
assays resealed(typo: revealed) that only CD69High LSCs were capable of self-renewal and were 
poorly proliferative. 

In contrast, CD36High LSCs were unable to transplant 
leukemia but were highly proliferative. 

靶向分裂，也要靶向自我更新！
These data demonstrate that the 
transcriptional foundations of self-renewal and proliferation are distinct in 
LSCs as they often are in normal stem cells and suggest that therapeutic 
strategies that target self-renewal, in addition to proliferation, are critical 
to prevent relapse and improve survival in AML. 

SIGNIFICANCE: These findings 
define and functionally validate a self-renewal gene profile of leukemia stem 
cells at the single-cell level and demonstrate that self-renewal and 
proliferation are distinct in AML. GRAPHICAL ABSTRACT: 
http://cancerres.aacrjournals.org/content/canres/80/3/458/F1.large.jpg.

©2019 American Association for Cancer Research.

DOI: 10.1158/0008-5472.CAN-18-2932
PMCID: PMC7002190
PMID: 31784425 [Indexed for MEDLINE]

Conflict of interest statement: Conflict of interest: Karen Sachs had been paid 
consulting fees by Fluidigm in the past for analyses that predate the data in 
this manuscript. The authors declare no other potential conflicts of interest.


## dataset GSE140896

- Murine single-cell RNA sequencing analysis: All RNA sequencing data can be accessed at GSE140896.

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE140896
- https://www.ncbi.nlm.nih.gov/Traces/study/?page=3&acc=PRJNA591323&o=acc_s%3Aa

```
人鼠的都有
12-15 mouse /spleen
GSM4189816, GSM4189817  human /Bone Marrow
```













# 单细胞测序 分析 AML 的表达突变 (IF=16.60)

52. Nat Commun. 2019 Aug 14;10(1):3660. doi: 10.1038/s41467-019-11591-1.
A general approach for detecting expressed mutations in AML cells using single 
cell RNA-sequencing.

> Petti AA(#)(1)(2), Williams SR(#)(3), Miller CA(1)(2), Fiddes IT(3), Srivatsan 
SN(1), Chen DY(4), Fronick CC(2), Fulton RS(2), Church DM(5), Ley TJ(6)(7)(8).
> Author information: 华盛顿大学
(1)Division of Oncology, Washington University School of Medicine, St. Louis, 
MO, USA.
Erratum in     Nat Commun. 2022 Jul 21;13(1):4216.

Virtually all tumors are genetically heterogeneous, containing 
mutationally-defined subclonal cell populations that often have distinct 
phenotypes. Single-cell RNA-sequencing has revealed that a variety of tumors are 
also transcriptionally heterogeneous, but the relationship between expression 
heterogeneity and subclonal architecture is unclear. 

Here, we address this 
question in the context of Acute Myeloid Leukemia (AML) by integrating whole 
genome sequencing with single-cell RNA-sequencing (using the 10x Genomics 
Chromium Single Cell 5' Gene Expression workflow). 

测序5个AML样本
Applying this approach to 
five cryopreserved AML samples, we identify hundreds to thousands of cells 
containing tumor-specific mutations in each case, and use the results to 
distinguish AML cells (including normal-karyotype AML cells) from normal cells, 
identify expression signatures associated with subclonal mutations, and find 
cell surface markers that could be used to purify subclones for further study. 

This integrative approach for connecting genotype to phenotype is broadly 
applicable to any sample that is phenotypically and genetically heterogeneous.

DOI: 10.1038/s41467-019-11591-1
PMCID: PMC6694122
PMID: 31413257 [Indexed for MEDLINE]

> Conflict of interest statement: S.W. and I.F. are employed by and hold shares in 
10x Genomics. The remaining authors declare no competing interests.


## dataset 

Enhanced whole-genome sequence (eWGS), bulk RNA-sequence, and single-cell RNA-sequence (scRNA-seq) data generated during the current study are available in dbGaP (https://www.ncbi.nlm.nih.gov/gap/) with the primary accession code phs000159. 

The SRA IDs for this study are: SRR7904017, SRR7904018, SRR7904019, SRR7904020, SRR7910353, SRR7910351, SRR7910349, SRR7904016, SRR7903979, SRR7825447, SRR7825459, SRR7825446, SRR7825444, SRR7825491, SRR7825473, SRR7825453, SRR7825466, SRR7825499, SRR7825482, and SRR7939318. 

Processed single-cell RNA-seq and mutation data pertaining to AML samples and normal bone marrow are also available [10.5281/zenodo.3345981]. 

- All the other data supporting the findings of this study are available within the article and its supplementary information files and from the corresponding author upon reasonable request. A reporting summary for this article is available as a Supplementary Information file.
- Single-cell mutation identification was performed using Pysam-based tools available at https://github.com/sridnona/cb_sniffer and https://github.com/genome/scrna_mutations/tree/master/misc_scripts. A comparable tool provided by 10x Genomics is available at https://github.com/10xgenomics/vartrix.








# 在AML中 靶向 增强子 克服 非基因耐药(IF=16.60)

53. Nat Commun. 2019 Jun 20;10(1):2723. doi: 10.1038/s41467-019-10652-9.
Targeting enhancer switching overcomes non-genetic drug resistance in acute 
myeloid leukaemia.

> Bell CC(1)(2), Fennell KA(1)(2), Chan YC(1)(2), Rambow F(3), Yeung MM(1), 
Vassiliadis D(1), Lara L(1)(2), Yeh P(1)(2)(4), Martelotto LG(5), Rogiers 
A(3)(6), Kremer BE(7), Barbash O(7), Mohammad HP(7), Johanson TM(8)(9), Burr 
ML(1)(2), Dhar A(7), Karpinich N(7), Tian L(8)(9), Tyler DS(1)(2), MacPherson 
L(1)(2), Shi J(10), Pinnawala N(1)(2), Yew Fong C(1)(2), Papenfuss AT(1)(8)(9), 
Grimmond SM(5), Dawson SJ(1)(2)(5), Allan RS(8)(9), Kruger RG(7), Vakoc CR(11), 
Goode DL(1)(2), Naik SH(8)(9), Gilan O(1)(2), Lam EYN(1)(2), Marine JC(3)(6), 
Prinjha RK(7), Dawson MA(12)(13)(14)(15).
> Author information: 澳大利亚
(1)Cancer Research Division, Peter MacCallum Cancer Centre, Melbourne, VIC, 
Australia.

非基因耐药，
Non-genetic drug resistance is increasingly recognised in various cancers. 

分子机制未知
Molecular insights into this process are lacking and it is unknown whether 
stable non-genetic resistance can be overcome. 

单细胞测序： 配对没用要，耐药病人样本；非基因耐药小鼠
Using single cell RNA-sequencing 
of paired drug naïve and resistant AML patient samples and 
cellular barcoding in 
a unique mouse model of non-genetic resistance, 

展示 转录组 可塑性 塑造 表观抗药性。
here we demonstrate that transcriptional plasticity drives stable epigenetic resistance. 


使用 CRISPR-Cas9 筛查技术
With a 
CRISPR-Cas9 screen we identify regulators of enhancer function as important 
modulators of the resistant cell state. 

We show that inhibition of Lsd1 (Kdm1a) 
is able to overcome stable epigenetic resistance by facilitating the binding of 
the pioneer factor, Pu.1 and cofactor, Irf8, to nucleate new enhancers that 
regulate the expression of key survival genes. 

This enhancer switching results 
in the re-distribution of transcriptional co-activators, including Brd4, and 
provides the opportunity to disable their activity and overcome epigenetic 
resistance. Together these findings highlight key principles to help counteract 
non-genetic drug resistance.

DOI: 10.1038/s41467-019-10652-9
PMCID: PMC6586637
PMID: 31222014 [Indexed for MEDLINE]

Conflict of interest statement: B.E.K., O.B., H.P.M., R.G.K., A.D., N.K., and 
R.K.P. are employees of GlaxoSmithKline. M.A.D. has been a member of advisory 
boards for CTX CRC, Storm Therapeutics, Celgene and Cambridge Epigenetix. The 
remaining authors declare no competing interests.












# RUNX1-RUNX1T1 融合 的AML 的新治疗靶点 ()

54. Int J Mol Sci. 2019 Apr 6;20(7):1717. doi: 10.3390/ijms20071717.
Elucidation of Novel Therapeutic Targets for Acute Myeloid Leukemias with 
RUNX1-RUNX1T1 Fusion.

> Yun JW(1)(2), Bae YK(3)(4), Cho SY(5)(6), Koo H(7), Kim HJ(8), Nam DH(9)(10), 
Kim SH(11), Chun S(12), Joo KM(13)(14)(15), Park WY(16)(17)(18).
> Author information: 韩国 成均馆大学 三星
(1)Department of Health Sciences and Technology, Samsung Advanced Institute for 
Health Science and Technology (SAIHST), Sungkyunkwan University, Seoul 06351, 
Korea. jwyunmd@gmail.com.

The RUNX1-RUNX1T1 fusion is a frequent chromosomal alteration in acute myeloid 
leukemias (AMLs). Although RUNX1-RUNX1T1 fusion protein has pivotal roles in the 
development of AMLs with the fusion, RUNX1-RUNX1T1, fusion protein is difficult 
to target, as it lacks kinase activities. 

Here, we used bioinformatic tools to 
elucidate targetable signaling pathways in AMLs with RUNX1-RUNX1T1 fusion. After 
analysis of 93 AML cases from The Cancer Genome Atlas (TCGA) database, we found 
expression of 293 genes that correlated to the expression of the RUNX1-RUNX1T1 
fusion gene. Based on these 293 genes, the cyclooxygenase (COX), vascular 
endothelial growth factor receptor (VEGFR), platelet-derived growth factor 
receptor (PDGFR), and fibroblast growth factor receptor (FGFR) pathways were 
predicted to be specifically activated in AMLs with RUNX1-RUNX1T1 fusion. 
Moreover, the in vitro proliferation of AML cells with RUNX1-RUNX1T1 fusion 
decreased significantly more than that of AML cells without the fusion, when the 
pathways were inhibited pharmacologically. The results indicate that novel 
targetable signaling pathways could be identified by the analysis of the gene 
expression features of AMLs with non-targetable genetic alterations. 

The 
elucidation of specific molecular targets for AMLs that have a specific genetic 
alteration would promote personalized treatment of AMLs and improve clinical 
outcomes.

DOI: 10.3390/ijms20071717
PMCID: PMC6480444
PMID: 30959925 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no conflict of interest.










# AML 中单细胞 APA 动态变化 (IF=4.7)

55. RNA Biol. 2019 Jun;16(6):785-797. doi: 10.1080/15476286.2019.1586139. Epub 2019 Mar 13.
Role of alternative polyadenylation dynamics in acute myeloid leukaemia at 
single-cell resolution.

> Ye C(1), Zhou Q(1)(2), Hong Y(3), Li QQ(1)(2).
> Author information: 厦门大学
(1)a Key Laboratory of the Ministry of Education for Coastal and Wetland 
Ecosystems , College of the Environment and Ecology, Xiamen University , Xiamen 
, Fujian , China.

Alternative polyadenylation (APA) has been discovered to play regulatory roles 
in the development of many cancer cells through preferential addition of a 
poly(A) tail at specific sites of pre-mRNA. A recent study found that APA was 
involved in the mediation of acute myeloid leukaemia (AML). However, unlike gene 
expression heterogeneity, little attention has been directed toward variations 
in single-cell APA for different cell types during AML development. Here, we 
used single-cell RNA-seq data of a massive population of 16,843 bone marrow 
mononuclear cells (BMMCs) from healthy and AML patient samples to investigate 
dynamic APA usage in different cell types. Abnormalities of APA dynamics in the 
BMMCs from AML patient samples were uncovered compared to the stable APA 
dynamics in samples from healthy individuals, as well as lower APA diversity 
between eight cell types in AML patients. Genes with APA dynamics specific to 
the AML samples were significantly enriched in cellular signal transduction 
pathways that contribute to AML development. Moreover, many leukaemic cell 
marker genes such as NF-κB, GATA2 and IAP-Family genes exhibited APA dynamics 
that specifically affected abnormal proliferation and differentiation of 
leukemic BMMCs. Additionally, mature erythroid cells displayed greater APA 
dynamics and global 3' UTR shortening compared with other cell types. Our 
results revealed extensive involvement of APA regulation in leukemia development 
and erythropoiesis at the single-cell level, providing a high-resolution atlas 
to navigate cellular mRNA processing landscapes of differentiated cells in AML.

DOI: 10.1080/15476286.2019.1586139
PMCID: PMC6546370
PMID: 30810468 [Indexed for MEDLINE]



















# （综述）遗传和表观遗传异质性及其对癌症复发的影响 (IF=8.65)

57. Exp Hematol. 2017 Oct;54:26-30. doi: 10.1016/j.exphem.2017.07.002. Epub 2017 Jul 10.
Genetic and epigenetic heterogeneity and the impact on cancer relapse.

> Hassan C(1), Afshinnekoo E(2), Li S(3), Wu S(4), Mason CE(5).
> Author information: 
(1)Department of Physiology and Biophysics, Weill Cornell Medicine, New York, 
NY, USA; The HRH Prince Alwaleed Bin Talal Bin Abdulaziz Alsaud Institute for 
Computational Biomedicine, Weill Cornell Medicine, New York, NY, USA.

AML 快速进展的造血肿瘤，预后很差：5年生存期，儿童 40%-45%，而60岁以上不到 10%
Acute myeloid leukemia (AML) is an aggressive hematopoietic malignancy with an 
exceedingly poor prognosis: a 5-year overall survival rate of 40%-45% in the 
young and a 5-year survival rate of less than 10% in the elderly (>60 years of 
age). 

虽然很高百分比的患者 化疗干预后 完全缓解，但是 大多数在3年内复发。
Although a high percentage of patients enters complete remission after 
chemotherapeutic intervention, the majority of patients relapse within 3 years. 


Such stark prognostic outcomes highlight the need for additional clinical 
research, basic discovery, and molecular delineation of the etiologies and 
mechanisms behind responses to therapy that lead to relapse. 


Here, we summarize 
recent discoveries in tumor heterogeneity at the genetic and epigenetic levels 
and their independent molecular trajectories and dynamics in response to 
therapy. 

These new discoveries may have significant implications for 
understanding, monitoring, and treating leukemia and other cancers.

- stark [stɑːk] adj. 荒凉的；严酷的；明显的，鲜明的；完全的，十足的；健壮的，结实的



Copyright © 2017 ISEH – Society for Hematology and Stem Cells. Published by 
Elsevier Inc. All rights reserved.

DOI: 10.1016/j.exphem.2017.07.002
PMCID: PMC5651672
PMID: 28705639 [Indexed for MEDLINE]

Conflict of interest statement: Conflicts: The authors have no conflicts of 
interest.










# 用光镊和介质电泳单细胞试验表征药物对白血病细胞的作用 (IF=3.75) 无关

58. IEEE Trans Nanobioscience. 2016 Dec;15(8):820-827. doi: 
10.1109/TNB.2016.2616160. Epub 2016 Oct 19.
Characterization of Drug Effect on Leukemia Cells Through Single Cell Assay With 
Optical Tweezers and Dielectrophoresis.

> Hou J, Luo T, Ng KL, Leung AY, Liang R, Sun D.

AML的一个重要挑战是 预防复发。
One of the greatest challenges in acute myeloid leukemia (AML) treatment is 
preventing relapse. 

白血病细胞可隐藏在：骨髓间隙、血管间隙。
Leukemia cells can hide in bone marrow niche or vascular niche. 

- vascular [ˈvæskjələ(r)] adj. [生物] 血管的

Hence, many chemical drugs cannot kill these cells. To characterize 
migration and adhesion properties of leukemia cells in specific niches, 
CXCR4/SDF- 1α signal pathway has been widely used for investigation. 

`AMD3100` is 
treated as one of the most common chemical drugs that can inhibit this signal. 

In the current study, we particularly investigate the effect of AMD3100 on the 
adhesion property of leukemia cells on stromal cells by using engineering tools, 
namely, optical tweezers (OT) and dielectrophoresis (DEP), to probe single cell 
property. 

AMD3100 not only inhibits the CXCR4/SDF- 1α signal pathway but also 
reduces gene expression of CXCR4 and VLA-4 on leukemia cells. The drug also 
softens leukemia cells. 

This work provides a new way to investigate cell 
behavior under drug treatment. The use of combined engineering tools will 
benefit drug discovery and assessment for leukemia treatment.

DOI: 10.1109/TNB.2016.2616160
PMID: 27775528 [Indexed for MEDLINE]











# 人类造血和白血病进化 单细胞 可及性(IF=41.38)

59. Nat Genet. 2016 Oct;48(10):1193-203. doi: 10.1038/ng.3646. Epub 2016 Aug 15.
Lineage-specific and single-cell chromatin accessibility charts human 
hematopoiesis and leukemia evolution.

> Corces MR(1)(2)(3), Buenrostro JD(3)(4)(5), Wu B(4), Greenside PG(4)(6), Chan 
SM(7), Koenig JL(1)(2), Snyder MP(3)(4), Pritchard JK(4)(8)(9), Kundaje 
A(4)(10), Greenleaf WJ(3)(4), Majeti R(1)(2), Chang HY(3).
> Author information: 斯坦福
(1)Institute for Stem Cell Biology and Regenerative Medicine, Stanford 
University School of Medicine, Stanford, California, USA.


We define the chromatin accessibility and transcriptional landscapes in `13 human 
primary blood cell types that span the hematopoietic hierarchy`. 

Exploiting the 
finding that the enhancer landscape better reflects cell identity than mRNA 
levels, we enable 'enhancer cytometry' for enumeration of pure cell types from 
complex populations. 

识别 造血分化 调控子
We identify regulators governing `hematopoietic 
differentiation` and further show the lineage ontogeny of genetic elements linked 
to diverse human diseases. 

AML中，染色质展示 调控进化 随着 突变负荷进展。
In acute myeloid leukemia (AML), chromatin 
accessibility uncovers unique regulatory evolution in cancer cells with a 
progressively increasing mutation burden. 


Single AML cells exhibit distinctive 
mixed regulome profiles corresponding to disparate developmental stages. A 
method to account for this regulatory heterogeneity identified cancer-specific 
deviations and implicated HOX factors as key regulators of preleukemic 
hematopoietic stem cell characteristics. Thus, regulome dynamics can provide 
diverse insights into hematopoietic development and disease.

DOI: 10.1038/ng.3646
PMCID: PMC5042844
PMID: 27526324 [Indexed for MEDLINE]

Conflict of interest statement: The authors declare no competing financial 
interests.











# AML 中表观和基因异质性的动态进化和改变 (IF=53.4)

60. Nat Med. 2016 Jul;22(7):792-9. doi: 10.1038/nm.4125. Epub 2016 Jun 20.
Distinct evolution and dynamics of epigenetic and genetic heterogeneity in acute 
myeloid leukemia.

> Li S(1), Garrett-Bakelman FE(2), Chung SS(3), Sanders MA(4), Hricik T(3), 
Rapaport F(3), Patel J(3), Dillon R(5), Vijay P(6), Brown AL(7)(8)(9), Perl 
AE(10), Cannon J(10), Bullinger L(11), Luger S(10), Becker M(12), Lewis 
ID(7)(9)(13), To LB(9)(13), Delwel R(4), Löwenberg B(4), Döhner H(11), Döhner 
K(11), Guzman ML(2), Hassane DC(2), Roboz GJ(2), Grimwade D(5), Valk PJ(4), 
D'Andrea RJ(7)(8)(9), Carroll M(10), Park CY(14)(15), Neuberg D(16), Levine 
R(3), Melnick AM(2), Mason CE(1)(17).
> Author information: 康奈尔医学院
(1)Department of Physiology and Biophysics and the HRH Prince Alwaleed Bin Talal 
Bin Abdulaziz Al-Saud Institute for Computational Biomedicine, Weill Cornell 
Medicine, New York, New York, USA.
Comment in     Nat Med. 2016 Jul 7;22(7):708-9.

Genetic heterogeneity contributes to clinical outcome and progression of most 
tumors, but little is known about allelic diversity for epigenetic compartments, 
and almost no data exist for acute myeloid leukemia (AML). 

We examined 
epigenetic heterogeneity as assessed by cytosine methylation within defined 
genomic loci with four CpGs (epialleles), somatic mutations, and transcriptomes 
of AML patient samples at serial time points. 

We observed that epigenetic allele 
burden is linked to inferior outcome and varies considerably during disease 
progression. Epigenetic and genetic allelic burden and patterning followed 
different patterns and kinetics during disease progression. 

We observed a subset 
of AMLs with high epiallele and low somatic mutation burden at diagnosis, a 
subset with high somatic mutation and lower epiallele burdens at diagnosis, and 
a subset with a mixed profile, suggesting distinct modes of tumor heterogeneity. 
Genes linked to promoter-associated epiallele shifts during tumor progression 
showed increased single-cell transcriptional variance and `differential 
expression`, suggesting functional impact on gene regulation. Thus, genetic and 
epigenetic heterogeneity can occur with distinct kinetics likely to affect the 
biological and clinical features of tumors.

DOI: 10.1038/nm.4125
PMCID: PMC4938719
PMID: 27322744 [Indexed for MEDLINE]

Conflict of interest statement: COMPETING FINANCIAL INTERESTS STATEMENT The 
authors declare no financial conflicts of interest.











# DNMT3A 单倍剂量不足 转化 FLT3ITD xx 病为 AML  (IF=38.2)

61. Cancer Discov. 2016 May;6(5):501-15. doi: 10.1158/2159-8290.CD-16-0008. Epub 
2016 Mar 25.
DNMT3A Haploinsufficiency Transforms FLT3ITD Myeloproliferative Disease into a 
Rapid, Spontaneous, and Fully Penetrant Acute Myeloid Leukemia.

- haploinsufficiency 单倍剂量不足
- myeloproliferative [ˌmaɪələʊprəˈlɪfəreɪtɪv] adj. 骨髓及外骨髓增殖的
- penetrant [ˈpenətrənt] adj. （基因）外显的；锋利的，渗透的 n. 渗透剂，穿透剂

> Meyer SE(1), Qin T(2), Muench DE(1), Masuda K(1), Venkatasubramanian M(3), Orr 
E(1), Suarez L(4), Gore SD(5), Delwel R(6), Paietta E(7), Tallman MS(8), 
Fernandez H(9), Melnick A(10), Le Beau MM(11), Kogan S(12), Salomonis N(3), 
Figueroa ME(13), Grimes HL(14).
> Author information: 美国 俄亥俄 辛辛那提儿童医院
(1)Division of Immunobiology, Cincinnati Children's Hospital Medical Center, 
Cincinnati, Ohio.

Cytogenetically normal acute myeloid leukemia (CN-AML) represents nearly 50% of 
human AML. 

Co-occurring mutations in the de novo DNA methyltransferase DNMT3A 
and the FMS related tyrosine kinase 3 (FLT3) are common in CN-AML and confer a 
poorer prognosis. We demonstrate that mice with Flt3-internal tandem duplication 
(Flt3(ITD)) and inducible deletion of Dnmt3a spontaneously develop a rapidly 
lethal, completely penetrant, and transplantable AML of normal karyotype. AML 
cells retain a single Dnmt3a floxed allele, revealing the oncogenic potential of 
Dnmt3a haploinsufficiency. FLT3(ITD)/DNMT3A-mutant primary human and murine AML 
exhibit a similar pattern of global DNA methylation associated with changes in 
the expression of nearby genes. 

In the murine model, rescuing Dnmt3a expression 
was accompanied by DNA remethylation and loss of clonogenic potential, 
suggesting that Dnmt3a-mutant oncogenic effects are reversible. Dissection of 
the cellular architecture of the AML model using single-cell assays, including 
single-cell RNA sequencing, identified clonogenic subpopulations that express 
genes sensitive to the methylation of nearby genomic loci and responsive to 
DNMT3A levels. Thus, Dnmt3a haploinsufficiency transforms Flt3(ITD) 
myeloproliferative disease by modulating methylation-sensitive gene expression 
within a clonogenic AML subpopulation.

SIGNIFICANCE: DNMT3A haploinsufficiency results in reversible epigenetic 
alterations that transform FLT3(ITD)-mutant myeloproliferative neoplasm into 
AML. Cancer Discov; 6(5); 501-15. ©2016 AACR.This article is highlighted in the 
In This Issue feature, p. 461.

©2016 American Association for Cancer Research.

DOI: 10.1158/2159-8290.CD-16-0008
PMCID: PMC4861898
PMID: 27016502 [Indexed for MEDLINE]

Conflict of interest statement: Conflict of Interest Statement The authors have 
no conflicts to disclose.










# 体内试验：RUNX1-Evi-1 融合基因 抑制 AML的分化和凋亡 (IF=4.6)

62. BMC Cancer. 2015 Dec 16;15:970. doi: 10.1186/s12885-015-1961-y.
RUNX1-Evi-1 fusion gene inhibited differentiation and apoptosis in myelopoiesis: an in vivo study.

> Shen L(1), Zhu J(2), Chen F(3), Lin W(4), Cai J(5), Zhong J(6), Zhong H(7).
> Author information:
(1)Department of Hematology, Ren Ji Hospital, School of Medicine, Shanghai Jiao 
Tong University, Shanghai, 200127, China. slj_tch@163.com.

BACKGROUND: Acute myeloid leukemia (AML) 1-Evi-1 is a chimeric gene generated by 
the t (3; 21) (q26; q22) translocation, which leads into malignant 
transformation of hematopoietic stem cells by unclear mechanisms. 

斑马鱼模型：
This in vivo 
study aimed to establish a stable line of `zebrafish` expressing the human 
RUNX1-Evi-1 fusion gene under the control of a heat stress-inducible 
bidirectional promoter, and investigate its roles in hematopoiesis and 
hematologic malignancies.

METHODS: We introduced human RUNX1-Evi-1 fusion gene into embryonic zebrafish 
through a heat-shock promoter to establish Tg(RE:HSE:EGFP) zebrafish. Two males 
and one female mosaic F0 zebrafish embryos (2.1%) were identified as stable 
positive germline transgenic zebrafish.

RESULTS: The population of immature myeloid cells and hematopoietic blast cells 
were accumulated in peripheral blood and single cell suspension from kidney of 
adult Tg(RE:HSE:EGFP) zebrafish. RUNX1-Evi-1 presented an intensive influence on 
hematopoietic regulatory factors. Consequently, primitive hematopoiesis was 
enhanced by upregulation of gata2 and scl, while erythropoiesis was 
downregulated due to the suppression of gata1. Early stage of myelopoiesis was 
flourishing with the high expression of pu.1, but it was inhibited along with 
the low expression of mpo. Microarray analysis demonstrated that RUNX1-Evi-1 not 
only upregulated proteasome, cell cycle, glycolysis/gluconeogenesis, tyrosine 
metabolism, drug metabolism, and PPAR pathway, but also suppressed transforming 
growth factor β, Jak-STAT, DNA replication, mismatch repair, p53 pathway, JNK 
signaling pathway, and nucleotide excision repair. Interestingly, histone 
deacetylase 4 was significantly up-regulated. Factors in cell proliferation were 
obviously suppressed after 3-day treatment with histone deacetylase inhibitor, 
valproic acid. Accordingly, higher proportion of G1 arrest and apoptosis were 
manifested by the propidium iodide staining.

CONCLUSION: RUNX1-Evi-1 may promote proliferation and apoptosis resistance of 
primitive hematopoietic cell, and inhibit the differentiation of myeloid cells 
with the synergy of different pathways and factors. VPA may be a promising 
choice in the molecular targeting therapy of RUNX1-Evi-1-related leukemia.

DOI: 10.1186/s12885-015-1961-y
PMCID: PMC4682245
PMID: 26674644 [Indexed for MEDLINE]


















# 数据驱动的表型解析：AML 前提细胞 可能和预后相关 (2015 cell)

63. Cell. 2015 Jul 2;162(1):184-97. doi: 10.1016/j.cell.2015.05.047. Epub 2015 Jun 18.
Data-Driven Phenotypic Dissection of AML Reveals Progenitor-like Cells that 
Correlate with Prognosis.

> Levine JH(1), Simonds EF(2), Bendall SC(3), Davis KL(2), Amir el-AD(1), Tadmor 
MD(1), Litvin O(1), Fienberg HG(2), Jager A(2), Zunder ER(2), Finck R(2), Gedman 
AL(4), Radtke I(4), Downing JR(4), Pe'er D(5), Nolan GP(6).

> Author information:
(1)Departments of Biological Sciences and Systems Biology, Columbia University, 
New York, NY 10027, USA.
Comment in     Nat Biotechnol. 2015 Sep;33(9):931-2.

Acute myeloid leukemia (AML) manifests as phenotypically and functionally 
diverse cells, often within the same patient. 

Intratumor phenotypic and 
functional heterogeneity have been linked primarily by physical sorting 
experiments, which assume that functionally distinct subpopulations can be 
prospectively isolated by surface phenotypes. This assumption has proven 
problematic, and we therefore developed a data-driven approach. Using mass 
cytometry, we profiled surface and intracellular signaling proteins 
simultaneously in millions of healthy and leukemic cells. We developed 
PhenoGraph, which algorithmically defines phenotypes in high-dimensional 
single-cell data. PhenoGraph revealed that the surface phenotypes of leukemic 
blasts do not necessarily reflect their intracellular state. Using hematopoietic 
progenitors, we defined a signaling-based measure of cellular phenotype, which 
led to isolation of a gene expression signature that was predictive of survival 
in independent cohorts. This study presents new methods for large-scale analysis 
of single-cell heterogeneity and demonstrates their utility, yielding insights 
into AML pathophysiology.

Copyright © 2015 Elsevier Inc. All rights reserved.

DOI: 10.1016/j.cell.2015.05.047
PMCID: PMC4508757
PMID: 26095251 [Indexed for MEDLINE]




