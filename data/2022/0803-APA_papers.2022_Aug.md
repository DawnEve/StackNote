

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