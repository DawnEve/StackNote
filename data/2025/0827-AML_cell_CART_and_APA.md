搜索关键词:

- AML 白血病细胞(T细胞、CART治疗前后)与APA的关系和调控

- AML CART single cell: 2025.9.19 N=45,



# APA失调导致AML分化受阻(Blood. 2022)
> Alternative polyadenylation dysregulation contributes to the differentiation block of acute myeloid leukemia
> Moores Cancer Center and. Division of Biological Sciences, University of California San Diego, La Jolla, CA.
> https://pubmed.ncbi.nlm.nih.gov/34482400/

转录后修饰的APA，对AML的流行和作用还知之甚少。
Posttranscriptional regulation has emerged as a driver for leukemia development and an avenue for therapeutic targeting. Among posttranscriptional processes, alternative polyadenylation (APA) is globally dysregulated across cancer types. However, limited studies have focused on the prevalence and role of APA in myeloid leukemia.

具体基因的APA对肿瘤进展未知，靶向全局APA模式能否逆转肿瘤潜力未知。
Furthermore, it is poorly understood how altered poly(A) site usage of individual genes contributes to malignancy or whether targeting global APA patterns might alter oncogenic potential.

通过对AML和健康的HSPC的3READS测序，研究APA的失调。
In this study, we examined global APA dysregulation in patients with acute myeloid leukemia (AML) by performing 3' region extraction and deep sequencing (3'READS) on a subset of AML patient samples along with healthy hematopoietic stem and progenitor cells (HSPCs) and by analyzing publicly available data from a broad AML patient cohort. 

我们展示病人细胞因使用不同pA导致3UTR缩短，CDS增长。
We show that patient cells exhibit global 3' untranslated region (UTR) shortening and coding sequence lengthening due to differences in poly(A) site (PAS) usage. 


FIP1L1 的表达水平，和 APA 失调相关。 -> 证据？
Among APA regulators, expression of FIP1L1, one of the core cleavage and polyadenylation factors, correlated with the degree of APA dysregulation in our 3'READS data set. 

敲低 FIP1L1 逆转病人的全局APA。
Targeting global APA by FIP1L1 knockdown reversed the global trends seen in patients. 

重要的是，敲低 FIP1L1 会通过增长 3UTR 和 下调 融合基因AML1-ETO的表达，来促进 t(8;21) cells 分化。
Importantly, FIP1L1 knockdown induced differentiation of t(8;21) cells by promoting 3'UTR lengthening and downregulation of the fusion oncoprotein AML1-ETO. 

非 t(8;21) 细胞中，敲低 FIP1L1 会降低 mTORC1 靶分子，降低MYC蛋白水平，来促进分化。
In non-t(8;21) cells, FIP1L1 knockdown also promoted differentiation by attenuating mechanistic target of rapamycin complex 1 (mTORC1) signaling and reducing MYC protein levels. 

靶向全局APA模式，能克服AML分化障碍。
Our study provides mechanistic insights into the role of APA in AML pathogenesis and indicates that targeting global APA patterns can overcome the differentiation block in patients with AML.










# 在AML和Ewing肉瘤中，CPSF3 依赖性前mRNA加工作为一个可成药物节点[药物名 JTE-607] (Nat Chem Biol. 2020)
> CPSF3-dependent pre-mRNA processing as a druggable node in AML and Ewing's sarcoma
> Novartis Institutes for BioMedical Research, Cambridge, MA, USA.
> https://pubmed.ncbi.nlm.nih.gov/31819276/

在后基因组时代，我们对癌症途径的理解取得了许多进展，但耐药性和肿瘤异质性需要多种方法来靶向甚至是单基因肿瘤。
The post-genomic era has seen many advances in our understanding of cancer pathways, yet resistance and tumor heterogeneity necessitate multiple approaches to target even monogenic tumors. 

结合 表型筛选 + 化学遗传学，发现了靶向CPSF3的 小分子 JTE-607，此前未知其靶分子。
Here, we combine phenotypic screening with chemical genetics to identify pre-messenger RNA endonuclease cleavage and polyadenylation specificity factor 3 (CPSF3) as the target of JTE-607, a small molecule with previously unknown target. 

我们发现CPSF3，在急性髓性白血病（AML）和尤文氏肉瘤癌细胞系的一个亚群中代表一个合成致死节点。
We show that CPSF3 represents a synthetic lethal node in a subset of acute myeloid leukemia (AML) and Ewing's sarcoma cancer cell lines.

JTE-607抑制CPSF3会改变AML和Ewing肉瘤系中已知下游效应物的表达，上调细胞凋亡，并导致小鼠异种移植物的肿瘤选择性停滞。
Inhibition of CPSF3 by JTE-607 alters expression of known downstream effectors in AML and Ewing's sarcoma lines, upregulates apoptosis and causes tumor-selective stasis in mouse xenografts.

从机制上讲，它阻止新合成的pre- mrna的释放，导致读透转录和DNA-RNA杂交R环结构的形成。
Mechanistically, it prevents the release of newly synthesized pre-mRNAs, resulting in read-through transcription and the formation of DNA-RNA hybrid R-loop structures.

这项研究表明，前mrna加工，特别是CPSF3，作为一个可药物靶点，为癌症的治疗干预提供了一条途径。
This study implicates pre-mRNA processing, and specifically CPSF3, as a druggable target providing an avenue to therapeutic intervention in cancer.






# APAview: 基于Flask的APA血液肿瘤网络平台 (Front Genet. 2022)
> APAview: A web-based platform for alternative polyadenylation analyses in hematological cancers
> https://pubmed.ncbi.nlm.nih.gov/36035147/
> The Key Laboratory of Biomedical Information Engineering of Ministry of Education, School of Life Science and Technology, Xi'an Jiaotong University, Xi'an, China.

Multimodal data, such as APA quantified by QAPA/DaPars, gene expression data, and clinical information, can be uploaded to APAview and analyzed interactively.

- https://github.com/Wu-xjtu/APAview





# 单细胞水平APA在AML中的作用(RNA Biol. 2019)
> Role of alternative polyadenylation dynamics in acute myeloid leukaemia at single-cell resolution
> a Key Laboratory of the Ministry of Education for Coastal and Wetland Ecosystems , College of the Environment and Ecology, Xiamen University , Xiamen , Fujian , China.
> https://pubmed.ncbi.nlm.nih.gov/30810468/

Here, we used single-cell RNA-seq data of a massive population of 16,843 bone marrow mononuclear cells (BMMCs) from healthy and AML patient samples to investigate dynamic APA usage in different cell types.

Abnormalities of APA dynamics in the BMMCs from AML patient samples were uncovered compared to the stable APA dynamics in samples from healthy individuals, as well as lower APA diversity between eight cell types in AML patients.



