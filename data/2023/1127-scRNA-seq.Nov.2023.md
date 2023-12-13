单细胞 文献 2023.11


# scWGS 
> https://pubmed.ncbi.nlm.nih.gov/37918402/
> Cell Rep Methods. 2023 Nov 20
> Accessible high-throughput single-cell whole-genome sequencing with paired chromatin accessibility

We present a technique that leverages nucleosome disruption methodologies with the widely adopted 10× Genomics ATAC-seq workflow to produce scWGS profiles for high-throughput copy-number analysis without new equipment or custom reagents.

Finally, we demonstrate that sequential indexed tagmentation with an intervening nucleosome disruption step allows for the generation of both ATAC and WGS data from the same cell, producing comparable data to the unimodal assays.






# 非负矩阵 综述(Nat Protoc 2023.11)
> https://pubmed.ncbi.nlm.nih.gov/37989764/
> Nat Protoc. 2023 Nov 21
> Inferring cellular and molecular processes in single-cell data with non-negative matrix factorization using Python, R and GenePattern Notebook implementations of CoGAPS
> Department of Oncology, Sidney Kimmel Comprehensive Cancer Center, Johns Hopkins University, Baltimore, MD, USA.

NMF 非监督学习
Non-negative matrix factorization (NMF) is an unsupervised learning method well suited to high-throughput biology. 

但是需要解释结果需要更多事后统计，需要对学习到的特征注释。
However, inferring biological processes from an NMF result still requires additional post hoc statistics and annotation for interpretation of learned features. 

本文，介绍NMF的实现工具，提供精确和清晰的生物学解释和分析。
Here, we introduce a suite of computational tools that implement NMF and provide methods for accurate and clear biological interpretation and analysis. 

全面的NMF的讨论，涵盖优点、局限性、开放问题，之后是 4个步骤的 贝叶斯NMF算法：跨模式子集的协调基因活动(CoGAPS)。
A generalized discussion of NMF covering its benefits, limitations and open questions is followed by four procedures for the Bayesian NMF algorithm Coordinated Gene Activity across Pattern Subsets (CoGAPS).

每个流程展示 NMF 分析定量细胞状态转换，使用公开scRNA-seq数据。
Each procedure will demonstrate NMF analysis to quantify cell state transitions in a public domain single-cell RNA-sequencing dataset.

- The first demonstrates PyCoGAPS, our new Python implementation that enhances runtime for large datasets, 
- and the second allows its deployment in Docker.
- The third procedure steps through the same single-cell NMF analysis using our R CoGAPS interface.
- The fourth introduces a beginner-friendly CoGAPS platform using GenePattern Notebook, aimed at users with a working conceptual knowledge of data analysis but without a basic proficiency in the R or Python programming language.

We also constructed a user-facing website to serve as a central repository for information and instructional materials about CoGAPS and its application programming interfaces.

The expected timing to setup the packages and conduct a test run is around 15 min, and an additional 30 min to conduct analyses on a precomputed result. The expected runtime on the user's desired dataset can vary from hours to days depending on factors such as dataset size or input parameters.





# scCURE 检测 免疫治疗前后变化的细胞 (Cell Rep Methods. 2023 Nov)
> scCURE identifies cell types responding to immunotherapy and enables outcome prediction
> PMID: 37989083
> Center for Tumor Diagnosis & Therapy, Jinshan Hospital, Fudan University, Shanghai 201508, China; Department of Pathology, Jinshan Hospital, Fudan University, Shanghai 201508, China. Electronic address: xzou@fudan.edu.cn.

A deep understanding of immunotherapy response/resistance mechanisms and a highly reliable therapy response prediction are vital for cancer treatment. 

Here, we developed `scCURE (single-cell RNA sequencing [scRNA-seq] data-based Changed and Unchanged cell Recognition during immunotherapy)`. 

整合细胞的方法：
Based on 
- Gaussian mixture modeling, 高斯混合模型
- Kullback-Leibler (KL) divergence, KL 散度
- and mutual nearest-neighbors criteria, 互相最近邻标准
scCURE can faithfully discriminate between cells affected or unaffected by immunotherapy intervention. 

By conducting scCURE analyses in melanoma and breast cancer immunotherapy scRNA-seq data, we found that the baseline profiles of specific CD8+ T and macrophage cells (identified by scCURE) can determine the way in which tumor microenvironment immune cells respond to immunotherapy, e.g., antitumor immunity activation or de-activation; 
therefore, these cells could be predictive factors for treatment response. 

In this work, we demonstrated that the immunotherapy-associated cell-cell heterogeneities revealed by scCURE can be utilized to integrate the therapy response mechanism study and prediction model construction.





# 铁死亡 三阴乳腺癌 纳米(Biomaterials. 2023, IF=17)
> Ferroptosis-enhanced chemotherapy for triple-negative breast cancer with magnetic composite nanoparticles
> State Key Laboratory of Molecular Engineering of Polymers, Department of Macromolecular Science, Fudan University, Shanghai, 200433, China.
> PMID: 37988899

To identify the relationship between chemotherapy resistance and ferroptosis in TNBC, we analyzed the single cell RNA-sequencing public dataset of GSE205551. 





# (质谱流式) 三个抗体并没提升 (Mol Cancer. 2023)
> A bedside to bench study of anti-PD-1, anti-CD40, and anti-CSF1R indicates that more is not necessarily better
> Department of Medicine (Medical Oncology), Yale University School of Medicine, 333 Cedar Street, WWW211B, New Haven, CT, 06520, USA.
> PMID: 37964379
> Trial registration: ClinicalTrials.gov Identifier: NCT03502330.

CyTOF analysis revealed a reduction in non-classical monocytes. 

质谱流式（CyTOF）
质谱流式细胞术是指用稳定的重金属同位素（主要是镧系元素）代替荧光基团来标记抗体。然后将细胞引入CyTOF分析仪并雾化成液滴，液滴被汽化、雾化、电离，然后通过电势加速被带入质谱仪。最后，用TOF探测器对过滤后的离子云进行分析。

尽管质谱流式细胞术通常被认为是一种基于荧光流式细胞术的改变，但质谱流式细胞术与荧光细胞术在几个方面有所不同，包括检测参数、灵敏度等。





# The variational autoencoder (VAE) 变分自动编码器 (BMC Bioinformatics, 2023.11)
> Similarity-assisted variational autoencoder for nonlinear dimension reduction with application to single-cell RNA sequencing data
> Graduate School of Data Science, Korea Advanced Institute of Science and Technology (KAIST), Daejeon, Republic of Korea.
> PMID: 37964243
> //todo: 什么是 VAE，怎么用于降维可视化？

深度生成模型 非线性降维工具，用于可视化大规模数据集。 用途：scRNA 揭示潜在模式、识别异常值。
Background: Deep generative models naturally become `nonlinear dimension reduction tools` to visualize large-scale datasets such as single-cell RNA sequencing datasets for revealing latent grouping patterns or identifying outliers.

VAE 是一个深度生成方法，带有 编码/解码 结构。
The variational autoencoder (VAE) is a popular deep generative method equipped with encoder/decoder structures. 

样本映射到 潜在空间 时需要 编码、解码器，从潜在空间产生一个点。
The encoder and decoder are useful when a new sample is mapped to the latent space and a data point is generated from a point in a latent space. 


然而，VAE 没有额外注释信息时，倾向于不展示清晰的分组模式。
However, the VAE tends not to show grouping pattern clearly without additional annotation information. 

另一方面，基于相似度的降维方法 t-SNE 和 UMAP 展现清晰的分组模式，即使它们不包含 编码器/解码器 结构。
On the other hand, similarity-based dimension reduction methods such as t-SNE or UMAP present clear grouping patterns even though these methods do not have encoder/decoder structures.

---

Results: To bridge this gap, we propose a new approach that adopts similarity information in the VAE framework. In addition, for biological applications, we extend our approach to a conditional VAE to account for covariate effects in the dimension reduction step. 

covariate n. 协变量，共向变量

In the simulation study and real single-cell RNA sequencing data analyses, our method shows great performance compared to existing state-of-the-art methods by producing clear grouping structures using an inferred encoder and decoder. Our method also successfully adjusts for covariate effects, resulting in more useful dimension reduction.

---

其他正则化VAE方法，通过利用高度著名的UMAP损失函数在数据中编码的相似信息。
Conclusions: Our method is able to produce clearer grouping patterns than those of other regularized VAE methods by utilizing similarity information encoded in the data via the highly celebrated UMAP loss function.

celebrated [ˈselɪbreɪtɪd] adj. 著名的，驰名的










