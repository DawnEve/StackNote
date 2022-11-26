

# [Cancer Cell, 2022] Immune phenotypic linkage between colorectal cancer and liver metastasis(张泽民)
> https://www.sciencedirect.com/science/article/pii/S1535610822000654?via%3Dihub
> BIOPIC, School of Life Sciences, Beijing Advanced Innovation Center for Genomics, Peking-Tsinghua Center for Life Sciences, Peking University, Beijing 100871, China.
> https://pubmed.ncbi.nlm.nih.gov/35303421/


## Highlights

* Immune cell phenotypic linkage with colorectal cancer and liver metastasis depicted
* Malignancy-associated exhausted and regulatory T cells show diverse TCR dependency
* SPP1+ TAMs are malignancy associated and are linked to liver metastasis
* DCs are mainly associated with host organ except a malignancy-associated DC3 subset


## Summary

未知：肿瘤细胞和宿主组织差异化影响肿瘤微环境的构成？
The tumor microenvironment (TME) is connected to immunotherapy responses, but it remains unclear how cancer cells and host tissues differentially influence the immune composition within TME. 

这里，使用同源肝转移结肠癌单细胞测序，分析塑造肿瘤微环境的因素。
Here, we performed single-cell analyses for autologous samples from liver metastasized colorectal cancer to disentangle factors shaping TME. 

通过比对不同组织中的CD45细胞，
- 把CD8ex 和Treg 分为M型：表型与肿瘤相关； 
- NK和 粘膜相关不变性T细胞 定义为N型： 表型和环境相关。

By aligning CD45+ cells across different tissues, we classified exhausted CD8+ T cells (Texs) and activated regulatory T cells as M-type, whose phenotypes were associated with the malignancy, while natural killer and mucosal-associated invariant T cells were defined as N-type, whose phenotypes were associated with the niche. 


原发和转移位的Tex共享的TCR表明，外周血有共有的非耗竭祖细胞。
T cell receptor sharing between Texs in primary and metastatic tumors implicated the presence of common peripheral non-exhausted precursors. 

髓系细胞，一个DC的亚群(DC3)和 SPP1+巨噬细胞 是 M型，后者主要在转移的肝癌中，表明促瘤作用。
For myeloid cells, a subset of dendritic cells (DC3s) and SPP1+ macrophages were M-type, and the latter were predominant in liver metastasis, indicating its pro-metastasis role. 

本分析沟通了免疫表型与原代、转移肿瘤，有助于理解肿瘤特有的结构，识别促肿瘤成分。
Our analyses bridge immune phenotypes of primary and metastatic tumors, thereby helping to understand the tumor-specific contexture and identify the pro-metastasis components.

---
autologous / ɔːˈtɒləɡəs / adj. [生物] 自体的；自体同源的；正型结构的



## PhenoAligner 算法

<image src="/data/2022/images/08/0803_PhenoAligner.png">

Figure 2. Disentangling the effects of cancer cells and host organs on TME using phenotype aligning

Fig.2C: Schematic diagram of the PhenoAligner method. 不同组织间的表型比对。

首先，肝转移的细胞比对到其他组织的细胞上(参考细胞)，根据他们的表型相似性（通过PCA空间的距离）
First, cells from Liv.Mets were aligned to cells from other tissues (reference cells) according to their
phenotypic similarity (measured by distance within the principal-component analysis [PCA] space). 

对于每个肝转移的细胞(查询细胞)，kNN的组织标签提取并概要出来，投票策略的权重是他们与查询细胞的表型相似性（基因空间的Pearson相关性）。
For each cell in Liv.Mets (query cell), the tissue labels of its kNN were extracted and summarized to a consensus label according to a voting strategy weighted by their phenotypic similarity to the query cells (Pearson’s
correlation within the gene space). 

然后，对于每个肝转移的细胞cluster，通过计算比对到每个组织类型的比例获得一个 PhenoAligner index。
Then, for each cluster in Liv.Mets, a PhenoAligner index was obtained by calculating the cell proportion aligned to each tissue type. 

参考细胞的组织标签随机抽样1000次，评估每个组织类型塑造肝转移表型的统计学显著性。
Tissue labels of the reference cells were randomly permuted 1,000 times to evaluate the statistical significance of each tissue type in shaping the phenotypes of cells in Liv.Mets.










# [Cancer Res. 2022] Characterization of immune-related alternative polyadenylation events in cancer immunotherapy

> Shanghai Jiao Tong University School of Medicine, Shanghai, China.
> https://pubmed.ncbi.nlm.nih.gov/35930727/

无法看全文。


Alternative polyadenylation (APA) is an important post-transcriptional modification commonly involved in tumor development. 

However, the functional roles of APA in tumor immunity remain largely unknown. 

编码基因的3UTR，肿瘤免疫反应， 31种肿瘤，10303肿瘤样本，开发了 immune-related APA event (ImmAPA) 打分路线：肿瘤免疫相关的APA事件中的调控机制。
Here, we performed an in-depth analysis of the 3'UTR usage of protein-coding genes and tumor immune response in 10,303 tumor samples across 31 cancer types to develop the immune-related APA event (ImmAPA) score pipeline, an integrated algorithm to characterize the regulatory landscape of APA events in cancer immunity-related pathways.

识别了与免疫细胞侵袭、免疫检查点治疗相关的标记物。
Tumor-specific ImmAPAs that strongly correlate with immune cell infiltration and immune checkpoint blockade (ICB) treatment-related biomarkers were identified. 

排名最高的 COL1A1的3UTR使用与不良预后和肿瘤侵袭强相关。
Among these ImmAPAs, the top-ranking COL1A1 3'UTR usage was strongly associated with worse prognosis and tumor immune evasion. 

进一步的，构建了一个机器学习方法，免疫检查点分子模型，预测免疫疗法的效率。
Furthermore, a machine learning approach to construct an ICB-related ImmAPA score model predicted immunotherapy efficacy. 

Overall, the characterization of immune-related APA that correspond to tumor progression and tumor immunity highlights the clinical utility of APA events as potential biomarkers in cancer immunotherapy.






# [Mol Cell. 2022] Regulation of alternative polyadenylation by the C2H2-zinc-finger protein Sp1
> Donnelly Centre for Cellular and Biomolecular Research, University of Toronto, 160 College Street, Toronto, ON M5S 3E1, Canada.
> https://pubmed.ncbi.nlm.nih.gov/35914531/

Alternative polyadenylation (APA) enhances gene regulatory potential by increasing the diversity of mRNA transcripts. 

3' UTR shortening through APA correlates with enhanced cellular proliferation and is a widespread phenomenon in tumor cells. Here, we show that the ubiquitously expressed transcription factor Sp1 binds RNA in vivo and is a common repressor of distal poly(A) site usage. RNA sequencing identified 2,344 genes (36% of the total mapped mRNA transcripts) with lengthened 3' UTRs upon Sp1 depletion. Sp1 preferentially binds the 3' UTRs of such lengthened transcripts and inhibits cleavage at distal sites by interacting with the subunits of the core cleavage and polyadenylation (CPA) machinery. The 3' UTR lengths of Sp1 target genes in breast cancer patient RNA-seq data correlate with Sp1 expression levels, implicating Sp1-mediated APA regulation in modulating tumorigenic properties. Taken together, our findings provide insights into the mechanism for dynamic APA regulation by unraveling a previously unknown function of the DNA-binding transcription factor Sp1.










# [Cancer Res] Characterization of immune-related alternative polyadenylation events in cancer immunotherapy(癌症免疫相关APA打分)
Cancer Res. 2022 Aug 5;CAN-22-1417. doi: 10.1158/0008-5472.CAN-22-1417. Online ahead of print.
> Shanghai Jiao Tong University School of Medicine, Shanghai, China.
> https://pubmed.ncbi.nlm.nih.gov/35930727/

分析了 31 种肿瘤 10,303个肿瘤样本的编码基因的 3'UTR ，和肿瘤免疫反应，识别 免疫相关的APA事件打分。

Here, we performed an in-depth analysis of the 3'UTR usage of protein-coding genes and tumor immune response in 10,303 tumor samples across 31 cancer types to develop the immune-related APA event (ImmAPA) score pipeline, an integrated algorithm to characterize the regulatory landscape of APA events in cancer immunity-related pathways.

Overall, the characterization of immune-related APA that correspond to tumor progression and tumor immunity highlights the clinical utility of APA events as potential biomarkers in cancer immunotherapy.







# [Exp Cell Res] Regulation of myogenic gene expression(综述：肌原基因的调控)
> Centro Andaluz de Biología Del Desarrollo, CSIC-UPO-JA, Universidad Pablo de Olavide, 41013, Sevilla, Spain.
> https://pubmed.ncbi.nlm.nih.gov/35926660/

骨骼肌受这几个基因的调控:
Skeletal muscle development and regeneration is governed by the combined action of Myf5, MyoD, Mrf4 and MyoG, also known as the myogenic regulatory factors (MRFs). 

不同肌肉群，这几个TF表达有高度时空特异性。
These transcription factors are expressed in a highly spatio-temporal restricted manner, ensuring the significant functional and metabolic diversity observed between the different muscle groups. 



In this review, we will discuss the multiple layers of regulation that contribute to the control of the exquisite expression patterns of the MRFs in particular, and of myogenic genes in general. 


We will highlight all major regulatory processes that play a role in myogenesis: from those that modulate chromatin status and transcription competence, 


such as DNA methylation, 
histone modification, 
chromatin remodeling, 
or non-coding RNAs, 

to those that control transcript and protein processing and modification, such as 
alternative splicing, 
polyadenylation, 
other mRNA modifications, 
or post-translational protein modifications. 

All these processes are exquisitely and tightly coordinated to ensure the proper activation, maintenance and termination of the myogenic process.








# [Cancers] Pathogenic Roles of RNA-Binding Proteins in Sarcomas(肉瘤中RNA结合蛋白的致病作用)
Cancers (Basel). 2022 Aug 5;14(15):3812. doi: 10.3390/cancers14153812.
> Cancer RNA Research Unit, National Cancer Center Research Institute, Tokyo 104-0045, Japan.

RNA-binding proteins (RBPs) are proteins that physically and functionally bind to RNA to regulate the RNA metabolism such as alternative splicing, polyadenylation, transport, maintenance of stability, localization, and translation. 

There is accumulating evidence that dysregulated RBPs play an essential role in the pathogenesis of malignant tumors including a variety of types of sarcomas. On the other hand, prognosis of patients with sarcoma, especially with sarcoma in advanced stages, is very poor, and almost no effective standard treatment has been established for most of types of sarcomas so far, highlighting the urgent need for identifying novel therapeutic targets based on the deep understanding of pathogenesis. Therefore, defining the network of interactions between RBPs and disease-related RNA targets will contribute to a better understanding of sarcomagenesis and identification of a novel therapeutic target for sarcomas.






# [Wiley Interdiscip Rev RNA] (综述)The emerging roles of CFIm25 (NUDT21/CPSF5) in human biology and disease
> Wiley Interdiscip Rev RNA. 2022 Aug 14;e1757. doi: 10.1002/wrna.1757. Online ahead of print.
> https://pubmed.ncbi.nlm.nih.gov/35965101/
> Department of Pharmaceutical Sciences, College of Pharmacy and Health Sciences, Butler University, Indianapolis, Indiana, USA.


- 蛋白名: CFIM25
- 基因名字: NUDT21, CPSF5


CFIm25 结合到UGUA序列上，切割形成polyA尾的转录本。
The mammalian cleavage factor I subunit CFIm25 (NUDT21) binds to the UGUA sequences of precursor RNAs. Traditionally, CFIm25 is known to facilitate 3' end formation of pre-mRNAs resulting in the formation of polyadenylated transcripts. 


最新研究表明，它可能也参与有UGUA 基序的环状RNA的形成。
Recent studies suggest that CFIm25 may be involved in the cyclization and hence generation of circular RNAs (circRNAs) that contain UGUA motifs. 

环状RNA作为内源性竞争RNA，干扰 ceRNA-miRNA-mRNA 轴。
These circRNAs act as competing endogenous RNAs (ceRNAs) that disrupt the ceRNA-miRNA-mRNA axis. 

CFIm25 的其他功能，包括调控剪切和APA。
Other emerging roles of CFIm25 include regulating both alternative splicing and alternative polyadenylation (APA). 

APA产生不同转录本，或者不同3UTR的转录本。
APA generates different sized transcripts that may code for different proteins, or more commonly transcripts that code for the same protein but differ in the length and sequence content of their 3' UTRs (3' UTR-APA). 


CFIm25介导的全局3UTR APA影响包括精子生成、细胞命运决定等过程。
CFIm25 mediated global changes in 3' UTR-APA affect human physiology including spermatogenesis and the determination of cell fate. 


CFIm25 失调和 3UTR APA的改变预示着很多人类疾病，包括肿瘤。
Deregulation of CFIm25 and changes in 3' UTR-APA have been implicated in several human diseases including cancer. 

很多肿瘤中，CFIm25作为抑癌基因。
In many cancers, CFIm25 acts as a tumor suppressor. 

有些肿瘤中，促癌。
However, there are some cancers where CFIm25 has the opposite effect. 

CFIm25驱动的3UTR还在神经功能紊乱和纤维化中起作用。
Alterations in CFIm25-driven 3' UTR-APA may also play a role in neural dysfunction and fibrosis. 


CFIm25 介导的 3UTR APA 改变可以作为一种潜在的诊断指标。
CFIm25 mediated 3' UTR-APA changes can be used to generate specific signatures that can be used as potential biomarkers in development and disease. 


Due to the emerging role of CFIm25 as a regulator of the aforementioned RNA processing events, modulation of CFIm25 levels may be a novel viable therapeutic approach. 

This article is categorized under: RNA Processing > 3' End Processing RNA in Disease and Development > RNA in Disease.





# 寨卡病毒感染导致胎盘细胞APA变化(Pathogens, 2022)
> Zika Virus Infection Alters Gene Expression and Poly-Adenylation Patterns in Placental Cells
> Department of Biochemistry & Molecular Biology, University of Texas Medical Branch, Galveston, TX 77555, USA.
> Pathogens. 2022 Aug 18;11(8):936. doi: 10.3390/pathogens11080936.
> PMID: 36015056

While flaviviruses are known to disrupt splicing patterns in host cells, little is known about how flaviviruses such as ZIKV impact the alternative polyadenylation (APA) of host transcripts. 

These results indicate that ZIKV infection makes JEG3 cells more permissive to non-canonical poly-adenylation signals.

--- 

placental [pləˈsentl] adj. 胎盘的；胎座的






# (综述) APA的调控: polyA的顺序 (Transcription, IF4.7, 2022)
> Alternative polyadenylation regulation: insights from sequential polyadenylation
> Transcription. 2022 Aug
> State Key Laboratory of Virology, College of Life Sciences, RNA Institute, Wuhan University, Wuhan, P. R. China.
> https://pubmed.ncbi.nlm.nih.gov/36004392/

Here, we review the established mechanisms for APA regulation and then discuss the additional insights into APA regulation from the perspective of sequential polyadenylation, resulting in a unified leverage model for understanding the mechanisms of regulated APA.





# （小鼠肝脏）节律对APA的调控(2018)
> Identification and Characterization of Transcripts Regulated by Circadian Alternative Polyadenylation in Mouse Liver
> https://pubmed.ncbi.nlm.nih.gov/30181259/


Alternative polyadenylation (APA) is an emerging post-transcriptional mechanism that changes the 3'-ends of transcripts by alternating poly(A) site usage. APA can thus result in changes in RNA processing, such as mRNA localization, stability, translation efficiency, and sometimes even in the localization of the encoded protein. It remains unclear, however, if and how APA is regulated by the circadian clock. 

Among all expressed genes, 2.9% of genes alternate their poly(A) site usage with a circadian (i.e., approximately 24 hr) period. 

Circadian APA transcripts also harbor longer 3'UTRs, making them more susceptible to post-transcriptional regulation.



# PI3K/Akt 信号级联反应 和 Pten APA 中 CFIm59和 CFIm68的不同、相反功能(NAR, 2022)
> Distinct, opposing functions for CFIm59 and CFIm68 in mRNA alternative polyadenylation of Pten and in the PI3K/Akt signalling cascade
> Nucleic Acids Res.2022 Aug 22;
> Rosalind and Morris Goodman Cancer Institute, McGill University, Montréal H3G 1Y6, Canada.
> https://pubmed.ncbi.nlm.nih.gov/35993810/

Abstract

保持 PTEN 浓度对抗肿瘤很重要。
Precise maintenance of PTEN dosage is crucial for tumor suppression across a wide variety of cancers. 

转录后调控Pten严重依赖其3'UTR.
Post-transcriptional regulation of Pten heavily relies on regulatory elements encoded by its 3'UTR. 

之前报道过Pten通过APA产生很多变体。
We previously reported the important diversity of 3'UTR isoforms of Pten mRNAs produced through alternative polyadenylation (APA). 

这里，揭示了CFIm复合体对Pten APA的直接调控，有助于保持PTEN蛋白浓度。
Here, we reveal the direct regulation of Pten APA by the mammalian cleavage factor I (CFIm) complex, which in turn contributes to PTEN protein dosage. 

CFIm 包括CFIm25，及APA调控单位 CFIm59或CFIm68.
CFIm consists of the UGUA-binding CFIm25 and APA regulatory subunits CFIm59 or CFIm68. 

敲除前后的细胞系测序比较，...
Deep sequencing analyses of perturbed (KO and KD) cell lines uncovered the differential regulation of Pten APA by CFIm59 and CFIm68 and further revealed that their divergent functions have widespread impact for APA in transcriptomes. 

差异调控的基因包括 PI3K/Akt 这个 PTEN 反调节的信号通路。
Differentially regulated genes include numerous factors within the phosphoinositide 3-kinase (PI3K)/protein kinase B (Akt) signalling pathway that PTEN counter-regulates. 


We further reveal a stratification of APA dysregulation among a subset of PTEN-driven cancers, with recurrent alterations among PI3K/Akt pathway genes regulated by CFIm. 

Our results refine the transcriptome selectivity of the CFIm complex in APA regulation, and the breadth of its impact in PTEN-driven cancers.







