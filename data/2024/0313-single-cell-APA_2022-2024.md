- 研究进展: 单细胞 & APA
- year: 2022-2024, n=56
- 启发: 可能的想法



# (综述)Context-specific regulation and function of mRNA alternative polyadenylation.(Nat Rev Mol Cell Biol. 2022)
> Nat Rev Mol Cell Biol. 2022 Dec;23(12):779-796. doi: 10.1038/s41580-022-00507-5. Epub 2022 Jul 7.
> Mitschka S(1), Mayr C(2).
> (1)Cancer Biology and Genetics Program, Memorial Sloan Kettering Cancer Center, New York, NY, USA.
> DOI: 10.1038/s41580-022-00507-5
> PMCID: PMC9261900
> PMID: 35798852 [Indexed for MEDLINE]

Alternative cleavage and polyadenylation (APA) is a widespread mechanism to generate mRNA isoforms with alternative 3' untranslated regions (UTRs). The expression of alternative 3' UTR isoforms is highly cell type specific and is further controlled in a gene-specific manner by environmental cues. 

In this Review, we discuss how the dynamic, fine-grained regulation of APA is accomplished by several mechanisms, including cis-regulatory elements in RNA and DNA and factors that control transcription, pre-mRNA cleavage and post-transcriptional processes. 

Furthermore, signalling pathways modulate the activity of these factors and integrate APA into gene regulatory programmes. 

Dysregulation of APA can reprogramme the outcome of signalling pathways and thus can control cellular responses to environmental changes. 

In addition to the regulation of protein abundance, APA has emerged as a major regulator of mRNA localization and the spatial organization of protein synthesis. 

This role enables the regulation of protein function through the addition of post-translational modifications or the formation of protein-protein interactions. 

We further discuss recent transformative advances in single-cell RNA sequencing and CRISPR-Cas technologies, which enable the mapping and functional characterization of alternative 3' UTRs in any biological context. 

Finally, we discuss new APA-based RNA therapeutics, including compounds that 
target APA in cancer and therapeutic genome editing of degenerative diseases.


- 启示: Fig5 APA和ATAC的结合？单个3UTR的基因，仅靠ATAC on/off；多个3UTR的基因在ATAC是on的时候，还可以产生long or short iso；










# 单细胞RNA测序技术 VASA-seq：全长RNA测序 (Nat Biotechnol. 2022)

> High-throughput total RNA sequencing in single cells using VASA-seq.
> Nat Biotechnol. 2022 Dec;40(12):1780-1793. doi: 10.1038/s41587-022-01361-8. Epub 2022 Jun 27.
> Salmen F(#)(1)(2), De Jonghe J(#)(3)(4), ..., van Oudenaarden A(13)(14).
> (1)Hubrecht Institute-KNAW (Royal Netherlands Academy of Arts and Sciences) and University Medical Center, Utrecht, Netherlands.
> PMID: 35760914 [Indexed for MEDLINE]

大多单细胞测序只扩增末端。
Most methods for single-cell transcriptome sequencing amplify the termini of polyadenylated transcripts, capturing only a small fraction of the total cellular transcriptome. 

忽略了 lncRNA，短的非编码 和 无polyA的蛋白编码转录本，无法进行剪切分析。
This precludes the detection of many long non-coding, short non-coding and non-polyadenylated protein-coding transcripts and hinders alternative splicing analysis. 

本文全长测序：
We, therefore, developed VASA-seq to detect the total transcriptome in single cells, which is enabled by fragmenting and tailing all RNA molecules subsequent to cell lysis. 

兼容微滴法和平板法
The method is compatible with both plate-based formats and droplet microfluidics. 

做了 30k mESC细胞？
We applied VASA-seq to more than 30,000 single cells in the developing mouse embryo during gastrulation and early organogenesis. 

分析了细胞亚群marker，很多基于 非编码RNA；
进行了活体细胞周期分析，通过检测非polyA的组蛋白基因。
Analyzing the dynamics of the total single-cell transcriptome, we discovered cell type markers, many based on non-coding RNA, and performed in vivo cell cycle analysis via detection of non-polyadenylated histone genes. 

再现了血细胞发育路径
RNA velocity characterization was improved, accurately retracing blood maturation 
trajectories. 

还分析了 选择性剪切
Moreover, our VASA-seq data provide a comprehensive analysis of alternative splicing during mammalian development, which highlighted substantial rearrangements during blood development and heart morphogenesis.


> 专利申请 Conflict of interest statement: F.S., A.v.O., J.D.J., T.S.K. and F.H. are 
inventors on patent applications submitted by the Stichting Oncode Institute on 
behalf of Koninklijke Nederlandse Akademie Van Wetenschappen and the University 
of Cambridge (via its technology transfer office, Cambridge Enterprise). A.v.O. 
is a member of the advisory board of Single-Cell Discoveries.


- 启发: 方法学怎么展开讨论？








# 假尿嘧啶核苷 合成修饰 人pre-mRNA 共转录，影响 pre-mRNA 处理(Mol Cell. 2022 IF=19.3)
> Pseudouridine synthases modify human pre-mRNA co-transcriptionally and affect 
pre-mRNA processing.
> Martinez NM(1), Su A(1), ... Yeo GW(4), Gilbert WV(5).
> (1)Yale School of Medicine, Department of Molecular Biophysics & Biochemistry, 
New Haven, CT 06520, USA.
> Dataset use reported in  Mol Cell. 2022 Feb 3;82(3):495-496.
> PMID: 35051350

pseudouridine n.假尿嘧啶核苷；假尿苷

流行，动态调控。
Pseudouridine is a modified nucleotide that is prevalent in human mRNAs and is 
dynamically regulated. 

本研究：mRNA什么时候有假尿苷？
Here, we investigate when in their life cycle mRNAs become pseudouridylated to illuminate the potential regulatory functions of endogenous mRNA pseudouridylation. 

使用 单碱基分辨率的 假尿苷 测序，发现 nascent pre-mRNA 在剪切相关区域出现 假尿苷，富集在剪切点附近，和RBP位点重叠。
Using single-nucleotide resolution pseudouridine profiling on chromatin-associated RNA from human cells, we identified pseudouridines in nascent pre-mRNA at locations associated with alternatively spliced regions, enriched near splice sites, and overlapping hundreds of binding sites for RNA-binding proteins.

体外剪切实验建立了：一个直接效应，具体的内源性 pre-mRNA 假尿苷 对剪切效率的影响。
In vitro splicing assays establish a direct effect of individual endogenous pre-mRNA pseudouridines on splicing efficiency. 

验证几百个 pre-mRNA 位点，作为 假尿苷 合成的直接靶点，发现 PUS1, PUS7, and RPUSD4 三个 假尿苷合成酶有组织特异性表达控制，在剪切和3‘处理中有广泛改变。
We validate hundreds of pre-mRNA sites as direct targets of distinct pseudouridine synthases and show that PUS1, PUS7, and RPUSD4-three pre-mRNA-modifying pseudouridine synthases with tissue-specific expression-control widespread changes in alternative pre-mRNA splicing and 3' end processing. 

Our results establish a vast potential for cotranscriptional pre-mRNA pseudouridylation to regulate human gene expression via alternative pre-mRNA processing.













# 大佬 Satija: CPA-Perturb-seq 分析APA的调控子 (bioRxiv, 2023.2)
> CPA-Perturb-seq: Multiplexed single-cell characterization of alternative polyadenylation regulators.
> bioRxiv [Preprint]. 2023 Feb 10:2023.02.09.527751. doi: 10.1101/2023.02.09.527751.
> Kowalski MH(1)(2)(3), Wessels HH(1)(2), ..., Kundaje A(4)(5), 
Satija R(1)(2)(3).
> (1)New York Genome Center, New York, NY, USA.
> PMID: 36798324

哺乳动物基因大多有多个pA位点，展示了CPA调控机制下转录本的多样性。
Most mammalian genes have multiple polyA sites, representing a substantial source of transcript diversity that is governed by the cleavage and polyadenylation (CPA) regulatory machinery. 

为了理解那些蛋白怎么管理pA位点选择的，开发了CPA-Perturb-seq，对42个已知CPA调控因子的平行扰动筛选数据集，使用单细胞的3’读段推断pA使用。
To better understand how these proteins govern polyA site choice we introduce CPA-Perturb-seq, a multiplexed perturbation screen dataset of 42 known CPA regulators with a 3' scRNA-seq readout that enables transcriptome-wide inference of polyA site usage. 

开发了一个统计框架，特异性的识别扰动依赖的改变，内含子和3UTR APA，发现 共调控的pA位点展现了不同的功能。
We develop a statistical framework to specifically identify perturbation-dependent changes in intronic and tandem polyadenylation, and discover modules of co-regulated polyA sites exhibiting distinct functional properties. 

使用本数据集 训练多任务深度神经网络 (APARENT-Perturb)，描画了 顺势调控密码，预测上会响应扰动，揭示不同调控复合体的交互作用。
By training a multi-task deep neural network (APARENT-Perturb) on our dataset, we delineate a cis-regulatory code that predicts responsiveness to perturbation and reveals interactions between distinct regulatory complexes. 

最后，使用我们的框架 重分析发表的 scRNA-seq数据集，识别了调控APA转录本丰度的新调控子，在抗体生成细胞中刻画3UTR长度的细胞间异质性。
Finally, we leverage our framework to re-analyze published scRNA-seq datasets, identifying new regulators that affect the relative abundance of alternatively polyadenylated transcripts, and characterizing extensive cellular heterogeneity in 3' UTR length amongst antibody-producing cells. 

总结：本工作强调了单细胞水平的干扰筛选，用于理解体内外的转录后调控。
Our work highlights the potential for multiplexed single-cell perturbation screens to further our understanding of post-transcriptional regulation in vitro and in vivo.

- Fig.1 (D) UMAP visualization of `HEK293FT` cells profiled via CPA-Perturb-Seq. Cells are colored based on the target gene identity. Visualization was computed based on a `linear discriminant analysis (LDA)` of transcriptome-wide `polyA site counts`.



> 最近3年为公司工作过 Conflict of interest statement: COMPETING INTERESTS In the past three years, R.S. has worked as a consultant for Bristol-Myers Squibb, Regeneron, and Kallyope and served as an SAB member for ImmunAI, Resolve Biosciences, Nanostring, and the NYC Pandemic Response Lab. A.K. is on the SAB of PatchBio Inc., SerImmune Inc., AINovo Inc., TensorBio Inc., and OpenTargets; was a consultant with Illumina Inc. until Jan 2023; and owns shares in DeepGenomics Inc., Immunai Inc. and Freenome Inc. J.L. is an employee of Calico Life Sciences LLC as of 11/21/2022.







# 单细胞 APA (PNAS, 2022)
> Comprehensive mapping of alternative polyadenylation site usage and its dynamics at single-cell resolution.
> Proc Natl Acad Sci U S A. 2022 Dec 6;119(49):e2113504119. doi: 10.1073/pnas.2113504119. Epub 2022 Dec 1.
> Wang J(1)(2), Chen W(3), Yue W(2), Hou W(2), Rao F(2), Zhong H(2), Qi Y(1), Hong N(2), Ni T(3), Jin W(2).
> (1)School of Life Sciences, Zhengzhou University, Zhengzhou 450001, Henan, 
China.
> PMID: 36454750

Alternative polyadenylation (APA) plays an important role in posttranscriptional 
gene regulation such as transcript stability and translation efficiency. 
However, our knowledge about APA dynamics at the single-cell level is largely 
unexplored. Here, we developed single-cell polyadenylation sequencing, a 
strand-specific approach for sequencing the 3' end of transcripts, to 
investigate the landscape of APA at the single-cell level. By analyzing several 
cell lines, we found many genes using multiple polyA sites in bulk data are 
prone to use only one polyA site in each single cell. Interestingly, cell cycle 
genes were significantly enriched in genes with high variation in polyA site 
usages. Furthermore, the 414 genes showing a polyA site usage switch after cell 
synchronization enriched cell cycle genes, while the differentially expressed 
genes after cell synchronization did not enrich cell cycle genes. We further 
identified 812 genes showing polyA site usage changes between neighboring cell 
cycles, which were grouped into six clusters, with cell phase-specific 
functional categories enriched in each cluster. Deletion of one polyA site in 
MSL1 and SCCPDH results in slower and faster cell cycle progression, 
respectively, supporting polyA site usage switch played an important role in 
cell cycle. These results indicate that APA is an important layer for cell cycle 
regulation.

> 结论： 删掉一个位点后，MSL1 slower, SCCPDH faster





# scAPAmod 研究 单细胞 APA 模态 (Int J Mol Sci. 2022 IF=5.6)
> scAPAmod: Profiling Alternative Polyadenylation Modalities in Single Cells from Single-Cell RNA-Seq Data.
> Qian L(1), Fu H(1), Mou Y(1), Lin W(1), Ye L(2), Ji G(1).
> (1)Department of Automation, Xiamen University, Xiamen 361005, China.
> PMID: 35897701

Alternative polyadenylation (APA) is a key layer of gene expression regulation, 
and APA choice is finely modulated in cells. Advances in single-cell RNA-seq 
(scRNA-seq) have provided unprecedented opportunities to study APA in cell 
populations. 

现有sc APA方法，细胞类型APA，或者仅识别 pA 位点。
However, existing studies that investigated APA in single cells 
were either confined to a few cells or focused on profiling APA dynamics between 
cell types or identifying APA sites. 

单细胞水平APA还不能获取。
The diversity and pattern of APA usages on a genomic scale in single cells remains unappreciated. 

这里，提出高斯混合模型的 scAPAmode，单细胞 识别 APA 使用模式。
Here, we proposed an analysis framework based on a Gaussian mixture model, scAPAmod, to identify patterns of APA usage from homogeneous or heterogeneous cell populations at the single-cell level. 

系统测试了 模拟数据 和 单细胞数据。
We systematically evaluated the performance of scAPAmod using simulated data and scRNA-seq data. 
能精确识别 单细胞水平的 APA使用模式。
The results show that scAPAmod can accurately identify different patterns of APA usages at the single-cell level. 

分析不同分化和发育阶段的小鼠精子细胞，发现即使同一个基因，在不同发育阶段也有不同的APA使用模式。
We analyzed the dynamic changes in the pattern of APA usage using scAPAmod in different cell differentiation and developmental stages during mouse spermatogenesis and found that even the same gene has different patterns of APA usages in different differentiation stages. 

也分析了：不同基因组区域的pA位点使用倾向性。
The preference of patterns of usages of APA sites in different genomic regions was also analyzed. 
发现：同一个基因在 3UTR和 非3UTR 的APA使用模式不同。
We found that patterns of APA usages of the same gene in 3' UTRs (3' untranslated region) and non-3' UTRs are different. 

分析了细胞特异的 APA 使用。
Moreover, we analyzed cell-type-specific APA usage patterns and changes in patterns of APA usages across cell types. 

和通常的基于表达的单细胞异质性不同，本研究分析了APA变体的异质性，能更高清晰度的揭示单细胞基因表达异质性。
Different from the conventional analysis of single-cell heterogeneity based on gene expression profiling, this study profiled the heterogeneous pattern of APA isoforms, which contributes to revealing the heterogeneity of single-cell gene expression with higher resolution.



---

- There are many tools, such as APA-Seq [14], scAPA [15], Sierra [16], and scAPAtrap [17], for `identifying poly(A) sites from scRNA-seq` and/or detecting differential APA usages among cell types, but these tools are not capable of profiling single-cell `APA modalities` in homogeneous or heterogeneous cell populations. Previously, SAPAS [24] utilized 3′-tag-based scRNA-seq data to identify novel poly(A) sites and quantify APA at the single-cell level. 

> 14. Levin M., Zalts H., Mostov N., Hashimshony T., Yanai I. Gene expression dynamics are a proxy for selective pressures on alternatively polyadenylated isoforms. Nucleic Acids Res. 2020;48:5926–5938. doi: 10.1093/nar/gkaa359. 
> 15. Shulman E.D., Elkon R. Cell-type-specific analysis of alternative polyadenylation using single-cell transcriptomics data. Nucleic Acids Res. 2019;47:10027–10039. doi: 10.1093/nar/gkz781.
> 16. Patrick R., Humphreys D.T., Janbandhu V., Oshlack A., Ho J.W.K., Harvey R., Lo K.K. Sierra: Discovery of differential transcript usage from polyA-captured single-cell RNA-seq data. Genome Biol. 2020;21:167. doi: 10.1186/s13059-020-02071-7.
> 17. Wu X., Liu T., Ye C., Ye W., Ji G. scAPAtrap: Identification and quantification of alternative polyadenylation sites from single-cell RNA-seq data. Brief Bioinform. 2021;22:bbaa273. doi: 10.1093/bib/bbaa273.
> 18. Wen W.X., Mead A.J., Thongjuea S. Technological advances and computational approaches for alternative splicing analysis in single cells. Comput. Struct. Biotechnol. J. 2020;18:332–343. doi: 10.1016/j.csbj.2020.01.009.
> 24. Yang Y., Paul A., Bach T.N., Huang Z.J., Zhang M.Q. Single-cell alternative polyadenylation analysis delineates GABAergic neuron types. BMC Biol. 2021;19:144. doi: 10.1186/s12915-021-01076-3.








# scAPAdb 单细胞APA数据库(六个物种) (NAR, 2022)
> scAPAdb: a comprehensive database of alternative polyadenylation at single-cell 
resolution.
> Zhu S(1)(2), Lian Q(2), Ye W(2), Qin W(2), Wu Z(2), Ji G(2), Wu X(1).
> (1)Pasteurien College, Soochow University, Suzhou, Jiangsu 215000, China.
> PMID: 34508354

Alternative polyadenylation (APA) is a widespread regulatory mechanism of 
transcript diversification in eukaryotes, which is increasingly recognized as an 
important layer for eukaryotic gene expression. 

Recent studies based on 
single-cell RNA-seq (scRNA-seq) have revealed cell-to-cell heterogeneity in APA 
usage and APA dynamics across different cell types in various tissues, 
biological processes and diseases. 

之前的数据库都是 多细胞的。
However, currently available APA databases 
were all collected from bulk 3'-seq and/or RNA-seq data, and no existing 
database has provided APA information at single-cell resolution. 

Here, we 
present a user-friendly database called scAPAdb (http://www.bmibig.cn/scAPAdb), 
which provides a comprehensive and manually curated atlas of poly(A) sites, APA 
events and poly(A) signals at the single-cell level. 

使用 360 个数据集，6个物种:
Currently, scAPAdb collects 
APA information from > 360 scRNA-seq experiments, covering six species including 
`human, mouse and several other plant species`. 

scAPAdb also provides batch download of data, and users can query the database through a variety of keywords such as gene identifier, gene function and accession number. scAPAdb would be a valuable and extendable resource for the study of cell-to-cell heterogeneity in APA isoform usages and APA-mediated gene regulation at the single-cell level under diverse cell types, tissues and species.







# scAPAatlas: 单细胞APA数据库（人和鼠） (NAR, 2022)
> scAPAatlas: an atlas of alternative polyadenylation across cell types in human and mouse.
> Yang X(1)(2), Tong Y(1)(2), Liu G(1)(2), Yuan J(3), Yang Y(1)(2).
> (1)The Province and Ministry Co-sponsored Collaborative Innovation Center for Medical Epigenetics, Tianjin Key Laboratory of Inflammation Biology, Tianjin Key Laboratory of Medical Epigenetics, Department of Pharmacology, School of Basic Medical Sciences, Tianjin Medical University, Tianjin 300070, China.
> PMID: 34643729

Alternative polyadenylation (APA) has been widely recognized as a crucial step 
during the post-transcriptional regulation of eukaryotic genes. Recent studies 
have demonstrated that APA exerts key regulatory roles in many biological 
processes and often occurs in a tissue- and cell-type-specific manner. However, 
to our knowledge, there is no database incorporating information about APA at 
the cell-type level. Single-cell RNA-seq is a rapidly evolving and powerful tool 
that enable APA analysis at the cell-type level. Here, we present a 
comprehensive resource, scAPAatlas (http://www.bioailab.com:3838/scAPAatlas), 
for exploring APA across different cell types, and interpreting potential 
biological functions. Based on the curated scRNA-seq data from 24 human and 25 
mouse normal tissues, we systematically identified cell-type-specific APA events 
for different cell types and examined the correlations between APA and gene 
expression level. We also estimated the crosstalk between cell-type-specific APA 
events and microRNAs or RNA-binding proteins. A user-friendly web interface has 
been constructed to support browsing, searching and visualizing multi-layer 
information of cell-type-specific APA events. Overall, scAPAatlas, incorporating 
a rich resource for exploration of APA at the cell-type level, will greatly help 
researchers chart cell type with APA and elucidate the biological functions of 
APA.










# [Good] Infernape: 在大脑中发现 细胞类型特异性 和 空间的 APA(Genome Res. 2023)
> Infernape uncovers cell type-specific and spatially resolved alternative polyadenylation in the brain.
> Kang B(1), Yang Y(1), ..., Wang J(3), Zhang X(4)(5).
> (1)Department of Human Genetics, The University of Chicago, Chicago, Illinois 60637, USA.
> PMID: 37907328

Differential polyadenylation sites (PAs) critically regulate gene expression, but their cell type-specific usage and spatial distribution in the brain have not been systematically characterized. 

Here, we present Infernape, which infers and quantifies PA usage from single-cell and spatial transcriptomic data and show its application in the mouse brain. 

发现大脑皮层神经发生过程中：内含子、3UTR的增长
Infernape uncovers alternative intronic PAs and 3'-UTR lengthening during cortical neurogenesis. 

Progenitor-neuron comparisons in the excitatory and inhibitory neuron lineages show overlapping PA changes in embryonic brains, suggesting that the neural proliferation-differentiation axis plays a prominent role. 

空间转录组中也可见
In the adult mouse brain, we uncover cell type-specific PAs and visualize such events using spatial transcriptomic data. 

Over two dozen neurodevelopmental disorder-associated genes such as Csnk2a1 and Mecp2 show differential PAs during brain development. 

This study presents Infernape to identify PAs from scRNA-seq and spatial data, and highlights the role of alternative PAs in neuronal gene regulation.

> 启发: 空间上APA iso的分布；RBP与pA的相关性(Fig5)








# [综述] 预测APA的方法：DNA, RNA-seq, scRNA-seq(Genomics Proteomics Bioinformatics. 2023)
> A Survey on Methods for Predicting Polyadenylation Sites from DNA Sequences, 
Bulk RNA-seq, and Single-cell RNA-seq.
> Wenbin Ye 1, Qiwei Lian 2, Congting Ye 3, Xiaohui Wu 4
> (1)Pasteurien College, Suzhou Medical College of Soochow University, Soochow University, Suzhou 215000, China.
> PMID: 36167284

Alternative polyadenylation (APA) plays important roles in modulating mRNA 
stability, translation, and subcellular localization, and contributes 
extensively to shaping eukaryotic transcriptome complexity and proteome 
diversity. 

Identification of poly(A) sites (pAs) on a genome-wide scale is a 
critical step toward understanding the underlying mechanism of APA-mediated gene 
regulation. 

A number of established computational tools have been proposed to 
predict pAs from diverse genomic data. Here we provided an exhaustive overview 
of computational approaches for predicting pAs from DNA sequences, bulk RNA 
sequencing (RNA-seq) data, and single-cell RNA sequencing (scRNA-seq) data. 

Particularly, we examined several representative tools using bulk RNA-seq and scRNA-seq data from `peripheral blood mononuclear cells` and put forward operable suggestions on how to assess the reliability of pAs predicted by different tools. 

We also proposed practical guidelines on choosing appropriate methods 
applicable to diverse scenarios. 

讨论了提高性能的挑战，及基线测试。
Moreover, we discussed in depth the challenges in improving the performance of pA prediction and benchmarking different methods. 

新机器学习、多组学技术的机会。未来预测 非3UTR区域的、组织特异的、单细胞pA。
Additionally, we highlighted outstanding challenges and opportunities using new machine learning and integrative multi-omics techniques, and provided our perspective on how computational methodologies might evolve in the future for non-3' untranslated region, tissue-specific, cross-species, and single-cell pA prediction.








# 果蝇 细胞特异 APA (Nat Commun. 2022)
> Diverse cell-specific patterns of alternative polyadenylation in Drosophila.
> Seungjae Lee 1, Yen-Chung Chen 2; ... Hongjie Li 8 9, Eric C Lai 10
> (1)Developmental Biology Program, Sloan Kettering Institute, 1275 York Ave, Box 252, New York, NY, 10065, USA.
> PMID: 36100597

Most genes in higher eukaryotes express isoforms with distinct 3' untranslated 
regions (3' UTRs), generated by alternative polyadenylation (APA). Since 3' UTRs 
are predominant locations of post-transcriptional regulation, APA can render 
such programs conditional, and can also alter protein sequences via alternative 
last exon (ALE) isoforms. 

果蝇细胞图谱：250个类群
We previously used 3'-sequencing from diverse 
Drosophila samples to define multiple tissue-specific APA landscapes. Here, we 
exploit comprehensive single nucleus RNA-sequencing data (Fly Cell Atlas) to 
elucidate cell-type expression of 3' UTRs across >250 adult Drosophila cell 
types. 

神经-增长 vs 精子-缩短
We reveal the cellular bases of multiple tissue-specific APA/ALE 
programs, such as 3' UTR lengthening in differentiated neurons and 3' UTR 
shortening in spermatocytes and spermatids. 

肠道干细胞发育树
We trace dynamic 3' UTR patterns 
across cell lineages, including in the male germline, and discover new APA 
patterns in the intestinal stem cell lineage. 

相关性分析: 按细胞类型，RBP，miRNA 及 APA 因子。 找转录组的候选调控子。
Finally, we correlate expression 
of RNA binding proteins (RBPs), miRNAs and global levels of cleavage and 
polyadenylation (CPA) factors in several cell types that exhibit characteristic 
APA landscapes, yielding candidate regulators of transcriptome complexity. 

为研究机制、3'iso 的生物学作用打下基础。
These 
analyses provide a comprehensive foundation for future investigations of 
mechanisms and biological impacts of alternative 3' isoforms across the major 
cell types of this widely-studied model organism.

> 启发：Fig2 circos图，沿着半径内向外是基因，一圈是不同细胞。颜色表示pA使用率。






# SCAPE: 贝叶斯方法，使用插入片段信息识别和定量单细胞APA，提供表达之外的细胞聚类信息(NAR, 2022)
> SCAPE: a mixture model revealing single-cell polyadenylation diversity and cellular dynamics during cell differentiation and reprogramming.
> Ran Zhou 1, Xia Xiao 1, ..., Lu Cheng 2 3, Lu Chen 1
> (1)Key Laboratory of Birth Defects and Related Diseases of Women and Children of MOE, Department of Laboratory Medicine, State Key Laboratory of Biotherapy, West China Second University Hospital, Sichuan University, Chengdu, Sichuan 610041, China.
> PMID: 35288753

Alternative polyadenylation increases transcript diversities at the 3' end, 
regulating biological processes including cell differentiation, embryonic 
development and cancer progression. 

贝叶斯框架 
Here, we present a Bayesian method SCAPE, 
which enables de novo identification and quantification of polyadenylation (pA) 
sites at single-cell level by utilizing insert size information. 

测试：36个老鼠器官中，43%是新发现的。提供了用于细胞聚类的 表达之外的一层信息。
We 
demonstrated its accuracy and robustness and identified 31 558 sites from 36 
mouse organs, 43.8% (13 807) of which were novel. We illustrated that APA 
isoforms were associated with miRNAs binding and regulated in tissue-, cell 
type-and tumor-specific manners where no difference was found at gene expression 
level, providing an extra layer of information for cell clustering. 

进一步，表征红细胞生成、iPSC分化中的APA使用，
Furthermore, 
we found genome-wide dynamic changes of APA usage during erythropoiesis and 
induced pluripotent stem cell (iPSC) differentiation, suggesting APA contributes 
to the functional flexibility and diversity of single cells. 

We expect SCAPE to 
aid the analyses of cellular dynamics and diversities in health and disease.












# scMAPA:复杂组织中识别 细胞类型特异的 APA(根据3UTR补全为全长测序) (Gigascience. 2022 IF=9.24)
> scMAPA: Identification of cell-type-specific alternative polyadenylation in complex tissues.
> Yulong Bai 1, Yidi Qin 1,  ...  Soyeon Kim 8 9, Hyun Jung Park 1
> (1)Department of Human Genetics, Graduate School of Public Health, University of Pittsburgh, Pittsburgh, PA 15261, USA.
> PMID: 35488860

BACKGROUND: Alternative polyadenylation (APA) causes shortening or lengthening 
of the 3'-untranslated region (3'-UTR) of genes (APA genes) in diverse cellular 
processes such as cell proliferation and differentiation. 

当前生信方法的局限性：
1.假定一些读段覆盖形状，在多APA基因中可能违背。
2.局限在2细胞类型中，不适用于多细胞类型。
3.不控制非预期变异，可能引入噪音 到 细胞类型特异的APA基因识别中。
To identify 
cell-type-specific APA genes in scRNA-Seq data, current bioinformatic methods 
have several limitations. First, they assume certain read coverage shapes in the 
scRNA-Seq data, which can be violated in multiple APA genes. Second, their 
identification is limited between 2 cell types and not directly applicable to 
the data of multiple cell types. Third, they do not control undesired source of 
variance, which potentially introduces noise to the cell-type-specific 
identification of APA genes.

开发了使用 change-point 算法 + 统计模型，多组学APA识别方法(scMAPA)
FINDINGS: We developed a combination of a computational change-point algorithm 
and a statistical model, single-cell Multi-group identification of APA (scMAPA). 

为避免假设覆盖形状，把3‘scRNA-seq数据转化为全长3UTR信号后 提出 突变点问题
To avoid the assumptions on the read coverage shape, scMAPA formulates a 
change-point problem after transforming the 3' biased scRNA-Seq data to 
represent the full-length 3'-UTR signal. 

为调整 非预期变异，建模 APA 变体 对 细胞类型 和 非期望来源。
To identify cell-type-specific APA 
genes while adjusting for undesired source of variation, scMAPA models APA 
isoforms in consideration of the cell types and the undesired source. 

模拟数据，和人PBMC数据：好于现有方法。
In our 
novel simulation data and data from human peripheral blood mononuclear cells, 
scMAPA outperforms existing methods in sensitivity, robustness, and stability. 

鼠脑中，多区域来源的多种细胞类型，该方法能识别 细胞类型特异的APA基因，阐明在多种脑疾病中，APA能区分神经中的免疫细胞。
In mouse brain data consisting of multiple cell types sampled from multiple 
regions, scMAPA identifies cell-type-specific APA genes, elucidating novel roles 
of APA for dividing immune cells and differentiated neuron cells and in multiple 
brain disorders.

CONCLUSIONS: scMAPA elucidates the cell-type-specific function of APA events and 
sheds novel insights into the functional roles of APA events in complex tissues.







# 非小细胞肺癌进展中 细胞类型APA 促进 原癌基因表达 (Mol Ther Nucleic Acids. 2023, IF=8.55)
> Cell-type-specific alternative polyadenylation promotes oncogenic gene expression in non-small cell lung cancer progression.
> Huang K(1)(2)(3), Zhang Y(1), ..., Wang F(1)(4), Zhou X(3).
> (1)School of Life Science and Technology, Xidian University, Xi'an, Shaanxi 710071, China.
> PMID: 37675185

Disrupted alternative polyadenylation (APA) is frequently involved in 
tumorigenesis and cancer progression by regulating the gene expression of 
oncogenes and tumor suppressors. 

问题：肿瘤类型和细胞类型特异的APA事件导致 新的APA事件和功能 被忽视。
However, limited knowledge of tumor-type- and 
cell-type-specific APA events may lead to novel APA events and their functions 
being overlooked. 

鉴定诊断价值的 3UTR 改变
Here, we compared APA events across different cell types in 
non-small cell lung cancer (NSCLC) and normal tissues and identified 
functionally related APA events in NSCLC. We found several cell-specific 3'-UTR 
alterations that regulate gene expression changes showed prognostic value in 
NSCLC. 

We further investigated the function of APA-mediated 3'-UTR shortening 
through loss of microRNA (miRNA)-binding sites, and we identified and 
experimentally validated several oncogene-miRNA-tumor suppressor axes. 

发现 肿瘤相关成纤维细胞中SPARC基因是一个APA调控的原癌基因。
According to our analyses, we found SPARC as an APA-regulated oncogene in cancer-associated fibroblasts in NSCLC. 
敲低会减弱肺癌细胞侵袭和转移。
Knockdown of SPARC attenuates lung cancer cell invasion and metastasis. 
高表达导致除顺铂之外的耐药。
Moreover, we found high SPARC expression associated with resistance to several drugs except cisplatin. 
基因SPARC高表达的患者，使用顺铂更能受益。
NSCLC patients with high SPARC expression could benefit more compared to low-SPARC-expression patients with cisplatin treatment. 

Overall, our comprehensive analysis of cell-specific APA events shed light on the regulatory mechanism of cell-specific oncogenes and provided opportunities for combination of APA-regulated therapeutic target and cell-specific therapy development.











# [X-不相关]单核变体RNA-seq：长读长测序(Nat Biotechnol. 2022)
> Single-nuclei isoform RNA sequencing unlocks barcoded exon connectivity in frozen brain tissue.
> Hardwick SA(#)(1)(2), Hu W(#)(1)(2), ... Gan L(1)(3), Tilgner HU(14)(15).
> (1)Feil Family Brain and Mind Research Institute, Weill Cornell Medicine, New York, NY, USA.
> PMID: 35256815 [Indexed for MEDLINE]

问题：单核测序很多仅仅是内部的，没有barcode，阻碍研究变体。
Single-nuclei RNA sequencing characterizes cell types at the gene level. 
However, compared to single-cell approaches, many single-nuclei cDNAs are purely 
intronic, lack barcodes and hinder the study of isoforms. 

这里提出了 单核变体RNA-seq
Here we present single-nuclei isoform RNA sequencing (SnISOr-Seq). 

长测序。
Using microfluidics, 
PCR-based artifact removal, target enrichment and long-read sequencing, 
SnISOr-Seq increased barcoded, exon-spanning long reads 7.5-fold compared to 
naive long-read single-nuclei sequencing. 

人脑额叶皮层
We applied SnISOr-Seq to adult human 
frontal cortex and found that exons associated with autism exhibit coordinated 
and highly cell-type-specific inclusion. We found two distinct combination 
patterns: those distinguishing neural cell types, enriched in TSS-exon, 
exon-polyadenylation-site and non-adjacent exon pairs, and those with multiple 
configurations within one cell type, enriched in adjacent exon pairs. Finally, 
we observed that human-specific exons are almost as tightly coordinated as 
conserved exons, implying that coordination can be rapidly established during 
evolution. SnISOr-Seq enables cell-type-specific long-read isoform analysis in 
human brain and in any frozen or hard-to-dissociate sample.

> Conflict of interest statement: L.C.N. has served as a scientific advisor for 
AbbVie, ViiV and Cytodyn for work unrelated to this project. L.G. is a founder 
of Aeton Therapeutics (which had no involvement in this study). A.B.L. is an 
employee of Agilent Technologies. The remaining authors declare no competing 
interests.






# 衰老数据库：揭示延长寿命策略的细胞类型特异的调控（新杆状线虫）(bioRxiv, 2023)
> Aging Atlas Reveals Cell-Type-Specific Regulation of Pro-longevity Strategies.
> Gao SM, Qi Y, Zhang Q, Mohammed AS, Lee YT, Guan Y, Li H, Fu Y, Wang MC.
> doi: 10.1101/2023.02.28.530490
> PMID: 36909655

Organism aging occurs at the multicellular level; however, how pro-longevity 
mechanisms slow down aging in different cell types remains unclear. 

样本
We generated single-cell transcriptomic atlases across the lifespan of Caenorhabditis elegans under different pro-longevity conditions (http://mengwanglab.org/atlas). 

We 
found cell-specific, age-related changes across somatic and germ cell types and 
developed transcriptomic aging clocks for different tissues. These clocks 
enabled us to determine tissue-specific aging-slowing effects of different 
pro-longevity mechanisms, and identify major cell types sensitive to these 
regulations. 

看了 细胞类型特异的 APA：
Additionally, we provided a systemic view of alternative 
polyadenylation events in different cell types, as well as their 
cell-type-specific changes during aging and under different pro-longevity 
conditions. 

Together, this study provides molecular insights into how aging 
occurs in different cell types and how they respond to pro-longevity strategies.





# ReadZS：不依赖注释的统计方法，分bin识别单细胞受调控的RNA处理(Genome Biol. 2022)
> ReadZS detects cell type-specific and developmentally regulated RNA processing programs in single-cell RNA-seq.
> Meyer E(#)(1)(2), Chaung K(#)(1)(2), Dehghannasiri R(1)(2), Salzman J(3)(4)(5).
> (1)Department of Biochemistry, Stanford University, Stanford, CA, 94305, USA.
> PMID: 36284317 [Indexed for MEDLINE]

之前的局限：依赖已经存在的注释，峰识别启发，按细胞类型聚合的方法。
RNA processing, including splicing and alternative polyadenylation, is crucial 
to gene function and regulation, but methods to detect RNA processing from 
single-cell RNA sequencing data are limited by reliance on pre-existing 
annotations, peak calling heuristics, and collapsing measurements by cell type. 

提出ReadZS，不依赖注释的统计方法，识别单细胞受调控的RNA处理
We introduce ReadZS, an annotation-free statistical approach to identify 
regulated RNA processing in single cells. 

人肺，哺乳动物精子形成，包括3UTR缩短。
ReadZS discovers cell type-specific 
RNA processing in human lung and conserved, developmentally regulated RNA 
processing in mammalian spermatogenesis-including global 3' UTR shortening in 
human spermatogenesis. 

拟南芥发育中3UTR增长。
ReadZS also discovers global 3' UTR lengthening in 
Arabidopsis development, highlighting the usefulness of this method in 
under-annotated transcriptomes.














# [X无关 - 酵母] 碱基分辨率的转录延长和polyA加尾 (Elife. 2022 IF=7.7)
> Nucleotide-level linkage of transcriptional elongation and polyadenylation.
> Geisberg JV(#)(1), Moqtaderi Z(#)(1), ..., Bentley DL(2), Struhl K(1).
> (1)Department of Biological Chemistry and Molecular Pharmacology, Harvard Medical School, Boston, United States.
> PMID: 36421680 [Indexed for MEDLINE]

Alternative polyadenylation yields many mRNA isoforms whose 3' termini occur 
disproportionately in clusters within 3' untranslated regions. 

pA位点使用受到 Pol II 延长速度的调控
Previously, we 
showed that profiles of poly(A) site usage are regulated by the rate of 
transcriptional elongation by RNA polymerase (Pol) II (Geisberg et al., 2020). 

...

These observations suggest that 

(1) Pol II elongation speed affects the nucleotide-level dwell time allowing polyadenylation to occur, 
(2) poly(A) site clusters are linked to the local elongation rate, and hence do not arise simply by intrinsically imprecise cleavage and polyadenylation of the RNA substrate, 
(3) DNA sequence elements can affect Pol II elongation and poly(A) profiles, and 
(4) the cleavage/polyadenylation and Pol II elongation complexes are spatially, and perhaps physically, coupled so that polyadenylation occurs rapidly upon emergence of the nascent RNA from the Pol II elongation complex.






# CFIm介导的APA保护 人移植胚胎的发育 (Stem Cell Reports. 2023. IF=7.7)
> CFIm-mediated alternative polyadenylation safeguards the development of mammalian pre-implantation embryos.
> Li N(1), Cai Y(1), ..., Cui Y(5), Li H(6).
> (1)Institute of Reproductive Health, Tongji Medical College, Huazhong University of Science and Technology, Wuhan 430030, China.
> PMID: 36563685 [Indexed for MEDLINE]

Alternative polyadenylation (APA) gives rise to transcripts with distinct 3' 
untranslated regions (3' UTRs), thereby affecting the fate of mRNAs. 

APA与分裂和分化相关，可能在胚胎发育中有关键作用。
APA is strongly associated with cell proliferation and differentiation status, and thus likely plays a critical role in the embryo development. 
APA在早期胚胎中还是未知的。
However, the pattern of APA in mammalian early embryos is still unknown. 

RNA代谢都参与了。
Here, we analyzed the 3' UTR 
lengths in human and mouse pre-implantation embryos using available single cell 
RNA-seq datasets and explored the underlying mechanism driving the changes. 
Although human and mouse early embryos displayed distinct patterns of 3' UTR 
changing, RNA metabolism pathways were involved in both species. 

3UTR长度可能收到核内的 CFIm组分 NUDT21 and CPSF6 的决定。
The 3' UTR lengths are likely determined by the abundance of the cleavage factor I complex (CFIm) components NUDT21 and CPSF6 in the nucleus. 
删除任意一个导致周期阻滞 和 3UTR缩短。
Importantly, depletion of either component resulted in early embryo development arrest and 3' UTR shortening. 

Collectively, these data highlight an essential role for APA in the development of mammalian early embryos.







# [x无关 - 综述]多组学解析 1型肌强直性营养不良的复杂分子发病机制 (Int J Mol Sci. 2022. IF=5.6)
> Deciphering the Complex Molecular Pathogenesis of Myotonic Dystrophy Type 1 through Omics Studies.
> Espinosa-Espinosa J(1)(2), González-Barriga A(3), López-Castel A(1)(2), Artero R(1)(2).
> (1)University Research Institute for Biotechnology and Biomedicine (BIOTECMED), Universidad de Valencia, 46100 Valencia, Spain.
> PMID: 35163365 [Indexed for MEDLINE]

Omics studies are crucial to improve our understanding of myotonic dystrophy 
type 1 (DM1), the most common muscular dystrophy in adults. Employing tissue 
samples and cell lines derived from patients and animal models, omics approaches 
have revealed the myriad alterations in gene and microRNA expression, 
alternative splicing, 3' `polyadenylation`, CpG methylation, and proteins levels, 
among others, that contribute to this complex multisystem disease. In addition, 
omics characterization of drug candidate treatment experiments provides crucial 
insight into the degree of therapeutic rescue and off-target effects that can be 
achieved. Finally, several innovative technologies such as single-cell 
sequencing and artificial intelligence will have a significant impact on future 
DM1 research.






# (图少：跳过)APA 揭示 胰腺导管腺癌 上皮 和 成纤维 异质性 (Cancers (Basel). 2024. IF=6.5)
> Alternative Polyadenylation Characterizes Epithelial and Fibroblast Phenotypic Heterogeneity in Pancreatic Ductal Adenocarcinoma.
> Venkat S(1), Feigin ME(1).
> (1)Department of Pharmacology and Therapeutics, Roswell Park Comprehensive Cancer Center, Buffalo, NY 14263, USA.
> PMID: 38339391

APA 怎么影响分裂的？
3' untranslated region alternative polyadenylation (3' 
UTR-APA) drives gene expression alterations through regulation of 3' UTR length. 
These 3' UTR alterations modulate mRNA stability, protein expression and protein 
localization, resulting in cellular phenotypes including differentiation, cell 
proliferation, and migration. 

数据：
Therefore, we sought to determine whether 3' 
UTR-APA events could characterize phenotypic heterogeneity of tumor cell states. 
Here, we analyze the largest single-cell human pancreatic ductal adenocarcinoma 
(PDAC) dataset and resolve 3' UTR-APA patterns across PDAC cell states. 

近端pA相关的 肿瘤进展、转移
We find 
that increased proximal 3' UTR-APA is associated with PDAC progression and 
characterizes a metastatic ductal epithelial subpopulation and an inflammatory 
fibroblast population. 

Furthermore, we find significant 3' UTR shortening events 
in cell-state-specific marker genes associated with increased expression. 
Therefore, we propose that 3' UTR-APA drives phenotypic heterogeneity in cancer.




# 猪胚胎 卵母细胞-受精卵 转换中3UTR长度动态: 细胞周期 (Reprod Domest Anim. 2023. IF=1.8)
> Dynamic changes of 3'UTR length during oocyte-to-zygote transition of in vitro pig embryos.
> Zhao H(1), Wu ZW(1), Zhang R(1), Wang Y(1), Du ZQ(1), Yang CX(1).
> (1)College of Animal Science, Yangtze University, Jingzhou, China.

Alternative polyadenylation (APA) generates different 3'-untranslated regions 
(3'UTRs) to regulate gene expression and localization, and affects a variety of 
biological processes. Here, we characterized the 3'UTR dynamics during the 
oocyte-to-zygote transition by analysing our previously reported porcine 
single-cell RNA-seq (scRNA-seq) datasets (in vitro matured metaphase II (MII) 
oocytes, in vitro fertilized zygotes (IVF1) and parthenogenetically activated 
1-cell embryos (PA1)). After IVF1 versus MII comparison, dynamic analyses of APA 
from RNA-seq (DaPars) method identified 139 mRNAs with significantly different 
3'UTRs (padj . ≤ .05), mainly enriched in `cell cycle`, regulation of 
cyclin-dependent protein kinase activity, histone modification, mRNA 
surveillance, and regulation of actin cytoskeleton. For PA1 versus MII 
comparison, 105 mRNAs with significantly different 3'UTRs (padj . ≤ .05) were 
identified to be mainly enriched in `intracellular transport`, `mitotic spindle 
organization`, `cell cycle`, pyruvate metabolism and glycolysis/gluconeogenesis. 

Furthermore, there were 7 mRNAs with more significant 3'UTR differences 
`(|△PDUI| ≥ 0.45 and |log2 [PDUI ratio]| ≥ 0.59)` respectively in IVF1 versus MII 
(Lrp2bp, Mtfr2, Nhlrc2, Psip1, Smu1, Ssr1 and Wtap) and PA1 versus MII (Asf1b, 
Dimt1, Nap1l1, Ncoa4, Nudt21, Pnn and Rpl15) comparisons. Integrative genomics 
viewer analysis further identified that 3'UTRs of Psip1, Smu1, Ssr1 and Wtap had 
more than 140 nt average length changes, whereas those of Dimt1, Nap1l1 and 
Rpl15 were shortened with more than 460 nt. Regulatory elements (PAS, CPE, 
microRNA binding sites and m6 A sites) in 3'UTRs of different lengths were 
predicted. Our findings provide useful information to further investigate the 
molecular mechanism of 3'UTR in regulating the oocyte-to-zygote transition of 
pig embryos.









# (暂时无图//todo)循环肿瘤细胞 剪切和APA 促进转移(Cancer Lett. 2024. IF=9.1)
> Circulating tumor cell clustering modulates RNA splicing and polyadenylation to facilitate metastasis.
> Wu Q(1), Gu Z(2), ..., Zhang W(5), Zhang K(6).
> (1)Division of Abdominal Cancer, Department of Medical Oncology, Cancer Center 
and Laboratory of Molecular Targeted Therapy in Oncology, West China Hospital, 
Sichuan University, Chengdu, Sichuan Province, 610041, China; State Key 
Laboratory of Molecular Oncology, Department of Etiology and Carcinogenesis, 
National Cancer Center/National Clinical Research Center for Cancer/Cancer 
Hospital, Chinese Academy of Medical Sciences and Peking Union Medical College, 
Beijing, 100021, China.
> PMID: 38417668

CTC群 比 单个 CTC 更易转移。
Circulating tumor cell (CTC) clusters exhibit significantly higher metastatic 
potential compared to single CTCs. However, the underlying mechanism behind this 
phenomenon remains unclear, and the role of posttranscriptional RNA regulation 
in CTC clusters has not been explored. 

比较剪切和APA：单个CTS 与 CTC群
Here, we conducted a comparative analysis 
of alternative splicing (AS) and alternative polyadenylation (APA) profiles 
between single CTCs and CTC clusters. 

剪切：略

APA事件: CTC群 3UTR更长，受到14个APA核心因子影响，特别是 PPP1CA。
Regarding APA, we found 
a global lengthening of 3' UTRs in CTC clusters compared to single CTCs. This 
alteration was primarily governed by 14 core APA factors, particularly PPP1CA. 


The modified APA profiles facilitated the `cell cycle` progression of CTC clusters and indicated their reduced susceptibility to oxidative stress. 

Further investigation revealed that the proportion of H2AFY mRNA with long 3' UTR instead of short 3' UTR was higher in CTC clusters than single CTCs. 

The AU-rich elements (AREs) within the long 3' UTR of H2AFY mRNA enhance mRNA stability and translation activity, resulting in promoting `cell proliferation` and invasion, which potentially facilitate the establishment and rapid formation of metastatic tumors mediated by CTC clusters. 

These findings provide new insights into the mechanisms driving CTC cluster metastasis.











# 增强子调控3'端处理活性 控制3'UTR变体的表达(Nat Commun. 2022)
> Enhancers regulate 3' end processing activity to control expression of alternative 3'UTR isoforms.
> Kwon B(1), Fansler MM(1)(2), Patel ND(1), Lee J(1), Ma W(1), Mayr C(3)(4).
> (1)Cancer Biology and Genetics Program, Memorial Sloan Kettering Cancer Center, New York, NY, 10065, USA.
> PMID: 35581194 [Indexed for MEDLINE]

Multi-UTR genes are widely transcribed and express their alternative 3'UTR isoforms in a cell type-specific manner. 

增强子调节表达，是否调节3UTR变体？
As transcriptional enhancers regulate 
mRNA expression, we investigated if they also regulate 3'UTR isoform expression.

删除后 PTEN 转录本水平不变，但是3UTR使用又切换。
Endogenous enhancer deletion of the multi-UTR gene PTEN did not impair 
transcript production but prevented 3'UTR isoform switching which was 
recapitulated by silencing of an enhancer-bound transcription factor. 

报告实验中：增强子促进转录本表达，相对于单UTR基因启动子。
In reporter assays, enhancers increase transcript production when paired with single-UTR gene promoters. 

然而，多UTR基因启动子结合时，它们通过增加pA位点的3’处理活性 改变3UTR变体表达。
However, when combined with multi-UTR gene promoters, they change 3'UTR isoform expression by increasing 3' end processing activity of polyadenylation sites. 

pA处理活性收到转录因子的影响，包括：NF-κB and MYC，延长因子，染色质重塑因子、组蛋白乙酰化转移酶。
Processing activity of polyadenylation sites is affected by transcription factors, including NF-κB and MYC, transcription elongation factors, chromatin remodelers, and histone acetyltransferases. 

As endogenous cell type-specific enhancers are associated with genes that increase their short 3'UTRs in a cell type-specific manner, our data suggest that transcriptional enhancers integrate cellular signals to regulate cell type-and condition-specific 3'UTR isoform expression.

> Fig. 2. The PTEN enhancer increases CPA activity of proximal PAS.
> Fig. 5. Cell type-specific enhancers are associated with genes that upregulate SU isoforms.

> 启发：增强子对 多3’UTR基因的 3个调控形式，某iso上调，基因上调，或都上调。






# 整合分析二代、三代测序(Iso-Seq and RNA-seq)发现 血管紧张肽II 介导的衰老（大鼠原代主动脉内皮细胞）  (Front Genet. 2023)
> Integrative analysis of Iso-Seq and RNA-seq reveals dynamic changes of alternative promoter, alternative splicing and alternative polyadenylation during Angiotensin II-induced senescence in rat primary aortic endothelial cells.
> Wen H(1)(2), Chen W(1), Chen Y(1), Wei G(1)(2), Ni T(1).
> (1)Collaborative Innovation Center of Genetics and Development, School of Life Sciences, Human Phenome Institute, Fudan University, Shanghai, China.
> PMID: 36741323

In eukaryotes, alternative promoter (AP), alternative splicing (AS), and 
alternative polyadenylation (APA) are three crucial regulatory mechanisms that 
modulate message RNA (mRNA) diversity. Although AP, AS and APA are involved in 
diverse biological processess, whether they have dynamic changes in Angiotensin 
II (Ang II) induced senescence in rat primary aortic endothelial cells (RAECs), 
an important cellular model for studying cardiovascular disease, remains 
unclear. 

技术：
Here we integrated both PacBio single-molecule long-read isoform 
sequencing (Iso-Seq) and Illumina short-read RNA sequencing (RNA-seq) to analyze 
the changes of AP, AS and APA in Ang II-induced senescent RAECs. 

Iso-Seq 
generated 36,278 isoforms from 10,145 gene loci and 65.81% of these isoforms are 
novel, which were further cross-validated by public data obtained by other 
techonologies such as CAGE, PolyA-Seq and 3'READS. 

APA产生的变体最多。
APA contributed most to novel isoforms, followed by AS and AP. 

Further investigation showed that AP, AS and 
APA could all contribute to the regulation of isoform, but AS has more dynamic 
changes compared to AP and APA upon Ang II stimulation. Genes undergoing AP, AS 
and APA in Ang II-treated cells are enriched in various pathways related to 
aging or senescence, suggesting that these molecular changes are involved in 
functional alterations during Ang II-induced senescence. 

Together, the present 
study largely improved the annotation of rat genome and revealed gene expression 
changes at isoform level, extending the understanding of the complexity of gene 
regulation in Ang II-treated RAECs, and also provided novel clues for 
discovering the regulatory mechanism undelying Ang II caused vascular senescence 
and diseases.








# [x无关]合成cDNA时一管法建库: MTAS-seq(RNA Biol. 2022, IF=4.7)
> Sensitive and accurate analysis of gene expression signatures enabled by oligonucleotide-labelled cDNA.
> Kapustina Ž(1), Medžiūnė J(1)(2), Dubovskaja V(1), Matjošaitis K(1), Žeimytė S(1), Lubys A(1).
> (1)Thermo Fisher Scientific Baltics, Research and Development Department, Vilnius, Lithuania.立陶宛
> PMID: 35653374 [Indexed for MEDLINE]

High-throughput RNA sequencing offers a comprehensive analysis of transcriptome 
complexity originated from regulatory events, such as differential gene 
expression, alternative polyadenylation and others, and allows the increase in 
diagnostic capacity and precision. For gene expression profiling applications 
that do not specifically require information on alternative splicing events, the 
mRNA 3' termini counting approach is a cost-effective alternative to whole 
transcriptome sequencing. Here, we report MTAS-seq (mRNA sequencing via 
terminator-assisted synthesis) - a novel RNA-seq library preparation method 
directed towards mRNA 3' termini. We demonstrate the specific enrichment for 
3'-terminal regions by simple and quick single-tube protocol with built-in 
molecular barcoding to enable accurate estimation of transcript abundance. To 
achieve that, we synthesized oligonucleotide-modified dideoxynucleotides which 
enable the generation of cDNA libraries at the reverse transcription step. We 
validated the performance of MTAS-seq on well-characterized reference bulk RNA 
and further tested it with eukaryotic cell lysates.

> Conflict of interest statement: The authors declare the following competing 
interests: all authors are employees of Thermo Fisher Scientific Baltics. A 
patent covering oligonucleotide-tethered nucleotides and their uses is pending, 
Ž.K., J.M., S.Ž. and A.L. are among the inventors.







# stAPAminer: 挖掘空间转录组中APA (Genomics Proteomics Bioinformatics. 2023, IF=9.5)
> stAPAminer: Mining Spatial Patterns of Alternative Polyadenylation for Spatially Resolved Transcriptomic Studies.
> Ji G(1), Tang Q(1), Zhu S(2), Zhu J(3), Ye P(2), Xia S(4), Wu X(5).
> (1)Pasteurien College, Suzhou Medical College of Soochow University, Soochow 
University, Suzhou 215000, China; Department of Automation, Xiamen University, 
Xiamen 361005, China.
> PMID: 36669641 [Indexed for MEDLINE]

Alternative polyadenylation (APA) contributes to transcriptome complexity and 
gene expression regulation and has been implicated in various cellular processes 
and diseases. Single-cell RNA sequencing (scRNA-seq) has enabled the profiling 
of APA at the single-cell level; however, the spatial information of cells is 
not preserved in scRNA-seq. Alternatively, spatial transcriptomics (ST) 
technologies provide opportunities to decipher the spatial context of the 
transcriptomic landscape. Pioneering studies have revealed potential spatially 
variable genes and/or splice isoforms; however, the pattern of APA usage in 
spatial contexts remains unappreciated. 

In this study, we developed a toolkit 
called stAPAminer for mining spatial patterns of APA from spatially barcoded ST 
data. APA sites were identified and quantified from the ST data. 

基于KNN补全数据
In particular, an imputation model based on the k-nearest neighbors algorithm was designed to recover APA signals, and then APA genes with spatial patterns of APA usage variation were identified. 


By analyzing well-established ST data of the mouse 
olfactory bulb (MOB), we presented a detailed view of spatial APA usage across 
morphological layers of the MOB. We compiled a comprehensive list of genes with 
spatial APA dynamics and obtained several major spatial expression patterns that 
represent spatial APA dynamics in different morphological layers. By extending 
this analysis to two additional replicates of the MOB ST data, we observed that 
the spatial APA patterns of several genes were reproducible among replicates. 
stAPAminer employs the power of ST to explore the transcriptional atlas of 
spatial APA patterns with spatial resolution. This toolkit is available at 
https://github.com/BMILAB/stAPAminer and 
https://ngdc.cncb.ac.cn/biocode/tools/BT007320.








# [X 无关]APA相关基因变异 提高膀胱癌风险 (J Biomed Res. 2023 原名 南京医科大学学报)
> Alternative polyadenylation-related genetic variants contribute to bladder cancer risk.
> Liu T(1)(2), Gu J(1)(2), ..., Liu H(1)(2), Zhang Z(1)(2).
> (1)Department of Environmental Genomics, Jiangsu Key Laboratory of Cancer 
Biomarkers, Prevention and Treatment, Collaborative Innovation Center for Cancer 
Personalized Medicine, School of Public Health, Nanjing Medical University, 
Nanjing, Jiangsu 211166, China.
> PMID: 37936490

Aberrant alternative polyadenylation (APA) events play an important role in 
cancers, but little is known about whether APA-related genetic variants 
contribute to the susceptibility to bladder cancer. Previous genome-wide 
association study performed APA quantitative trait loci (apaQTL) analyses in 
bladder cancer, and identified 17 955 single nucleotide polymorphisms (SNPs). We 
found that gene symbols of APA affected by apaQTL-associated SNPs were closely 
correlated with cancer signaling pathways, high mutational burden, and immune 
infiltration. 







# SCINPAS: 10x单细胞数据中 识别 实验支持pA(NAR Genom Bioinform. 2023, IF=4.41)
> Identification of experimentally-supported poly(A) sites in single-cell RNA-seq data with SCINPAS.
> Moon Y(1)(2), Burri D(1)(2), Zavolan M(1)(2).
> (1)Computational and Systems Biology, Biozentrum University of Basel, Spitalstrasse 41, CH-4056 Basel, Switzerland.
> PMID: 37705828

We propose SCINPAS, a computational method to identify poly(A) sites from scRNA-seq datasets. 

SCINPAS 修改了read去重步骤，倾向于选择 远端reads 和 提取 非模板A尾。
SCINPAS modifies the read deduplication step to favor the selection of distal reads and extract those with non-templated poly(A) tails. 
这样提高了pA位点检出分辨率。
This approach improves the resolution of poly(A) site recovery relative to standard software.

模块化设计，
SCINPAS identifies poly(A) sites in genic and non-genic regions, providing 
complementary information relative to other tools. The workflow is modular, and 
the key read deduplication step is general, enabling the use of SCINPAS in other 
typical analyses of single cell gene expression. 

Taken together, we show that 
SCINPAS is able to identify experimentally-supported, known and novel poly(A) 
sites from 3' end-based single-cell RNA sequencing data.







# (预印-无图)深度学习 研究 APA： 肌萎缩侧索硬化症额叶皮质单核多组图谱(bioRxiv [Preprint]. 2023)
> Single-nucleus multiomic atlas of frontal cortex in amyotrophic lateral sclerosis with a deep learning-based decoding of alternative polyadenylation mechanisms.
> McKeever PM, Sababi AM, ..., Bader GD, Robertson J.
> PMID: 38187588

ALS, amyotrophic lateral sclerosis 肌萎缩性侧索硬化症


Leveraging high 
depth 3'-end sequencing, we found a widespread switch towards distal 
polyadenylation (PA) site usage across ALS subtypes relative to controls. To 
explore this differential alternative PA (APA), we developed APA-Net, a deep 
neural network model that uses transcript sequence and expression levels of 
RNA-binding proteins (RBPs) to predict cell-type specific APA usage and RBP 
interactions likely to regulate APA across disease subtypes.





# (预印-有图) mRNA起始和终止是空间协调的: 二代三代测序 (bioRxiv [Preprint]. 2024)
> mRNA initiation and termination are spatially coordinated.
> Calvo-Roitberg E(1), Carroll CL(2), ..., Fiszbein A(2)(5), Pai AA(1).
> (1)RNA Therapeutics Institute, University of Massachusetts Chan Medical School, Worcester, MA.
> PMID: 38260419

Decisions 
involved in mRNA initiation and termination underlie the largest extent of mRNA 
isoform diversity, but little is known about any relationships between decisions 
at both ends of mRNA molecules. 


Here, we systematically profile the joint usage 
of mRNA transcription start sites (TSSs) and polyadenylation sites (PASs) across 
tissues and species. 

长短读段测序：使用上游起始的，也使用上游终止；下游类似。
Using both short and long read RNA-seq data, we observe 
that mRNAs preferentially using upstream TSSs also tend to use upstream PASs, 
and congruently, the usage of downstream sites is similarly paired. 

定义为：位置起始-终止轴PITA。
This observation suggests that mRNA 5' end choice may directly influence mRNA 3' ends. 
Our results suggest a novel "Positional Initiation-Termination Axis" 
(PITA), in which the usage of alternative terminal sites are coupled based on 
the order in which they appear in the genome. 

PITA isoforms are more likely to encode alternative protein domains and use conserved sites. 

长基因中富集
PITA is strongly 
associated with the length of genomic features, such that PITA is enriched in 
longer genes with more area devoted to regions that regulate alternative 5' or 
3' ends. 

Strikingly, we found that PITA genes are more likely than non-PITA 
genes to have multiple, overlapping chromatin structural domains related to 
pairing of ordinally coupled start and end sites. 

In turn, PITA coupling is also 
associated with fast RNA Polymerase II (RNAPII) trafficking across these long 
gene regions. 

Our findings indicate that a combination of spatial and kinetic 
mechanisms couple transcription initiation and mRNA 3' end decisions based on 
ordinal position to define the expression mRNA isoforms.





# 人T细胞分歧的分子事件： 产前和产后胸腺。(Front Immunol. 2023, IF 7.3)
> Divergent molecular events underlying initial T-cell commitment in human prenatal and postnatal thymus.
> He H(1), Yao Y(1)(2), Tang L(1), Li Y(1), Li Z(3), Liu B(1)(3), Lan Y(1).
> (1)Key Laboratory for Regenerative Medicine of Ministry of Education, Institute 
of Hematology, School of Medicine, Jinan University, Guangzhou, China.
> PMID: 37828991 [Indexed for MEDLINE]

未知：
the differences between 
human prenatal and postnatal thymocytes regarding the ontogeny and early events 
of T-cell development still remain obscure. Moreover, the transcriptional 
heterogeneity and posttranscriptional gene expression regulation such as 
alternative polyadenylation at different stages are also unknown.

胸腺细胞 不同发育阶段 整合分析。
METHOD: In this study, we performed integrative single-cell analyses of 
thymocytes at distinct developmental stages.

差异:
Although showing similar gene expression patterns 
along the developmental path, prenatal and postnatal thymocytes were remarkably 
varied regarding the expression dynamics of some pivotal genes for cell cycle, 
metabolism, signaling pathway, thymus homing, and T-cell commitment. 

定量T细胞发育中的基因表达的APA，发现T细胞发育轨迹中，不同群用的pA不同。
Finally, we 
quantified the transcriptome-wide changes in alternative polyadenylation across 
T-cell development and found diverse preferences of polyadenylation site usage 
in divergent populations along the T-cell commitment trajectory.


DISCUSSION: In summary, our results revealed transcriptional heterogeneity and a 
dynamic landscape of alternative polyadenylation during T-cell development in 
both human prenatal and postnatal thymus, providing a comprehensive resource for 
understanding T lymphopoiesis in human thymus.


方法学：Pseudotime trajectory analysis
For pseudotime trajectory analysis, we used `Monocle 3` (version 1.0.0) (39) based on the previous UMAP dimension reduction from Scanpy. Pattern genes of prenatal and postnatal ETP, DN cells changing along the paths were identified by using `graph_test function` of Monocle 3 with its `Moran’s I test`, respectively. 
挑选基因：
Genes with a `P value <0.01 and the top 500 highest Moran’s I score` were selected. 
聚类数：手工检查从大到小
Pattern genes were then clustered using the K-means method, and the number of clusters was determined by manually checking the heatmap results from a larger to a smaller number of clusters. 
及 pyslingshot 的默认参数：
We also performed pyslingshot (40) with default parameters, and the results were consistent with Monocle 3.









# 一个新的apaQTL-SNP修饰 非小细胞肺癌的 组织学亚型易感性。 (Cancers (Basel). 2022)
> A Novel apaQTL-SNP for the Modification of Non-Small-Cell Lung Cancer 
Susceptibility across Histological Subtypes.
> Qiu A(1), Xu H(1), ..., Tian G(3), Chu M(1).
> (1)Department of Epidemiology, School of Public Health, Nantong University, 
Nantong 226019, China.
> PMID: 36358727

Background: Alternative polyadenylation (APA) events may be modulated by single 
nucleotide polymorphisms (SNPs). Therefore, this study aims to evaluate the 
association between APA quantitative trait loci (apaQTLs)-related SNPs 
(apaQTL-SNPs) and non-small-cell lung cancer (NSCLC) risk. 

Conclusion: The variant G allele 
of rs10138506 in CHURC1 was correlated with a longer 3′UTR of CHURC1 mRNA and an 
increased LUAD risk. Further studies should evaluate the interaction between 
rs10138506 and different 3′UTR lengths of CHURC1 that regulate LUAD development.







# 酵母中 条件特异的 3‘mRNA变体半衰期与稳定性元件 (Proc Natl Acad Sci U S A. 2023)
> Condition-specific 3' mRNA isoform half-lives and stability elements in yeast.
> Geisberg JV(1), Moqtaderi Z(1), Struhl K(1).
> (1)Department of Biological Chemistry and Molecular Pharmacology, Harvard Medical School, Boston, MA 02115.
> PMID: 37094136 [Indexed for MEDLINE]

Alternative polyadenylation generates numerous 3' mRNA isoforms that can differ 
in their stability, structure, and function. These isoforms can be used to map 
mRNA stabilizing and destabilizing elements within 3' untranslated regions 
(3'UTRs). 

This observation is consistent with a 
compensatory mechanism between polyadenylation and stability, and it suggests 
that condition-specific mRNA stability elements might largely reflect 
condition-specific regulation of mRNA 3' end formation.








# RBBP6 在 3’端处理中的中心作用 (Genes Dev. 2022)
> Reconstitution of 3' end processing of mammalian pre-mRNA reveals a central role of RBBP6.
> Schmidt M(#)(1), Kluge F(#)(1), ..., Conti E(2), Wahle E(1).
> (1)Institute of Biochemistry and Biotechnology, Charles Tanford Protein Center, Martin Luther University Halle-Wittenberg, 06099 Halle, Germany.
> PMID: 35177537 [Indexed for MEDLINE]

The 3' ends of almost all eukaryotic mRNAs are generated in an essential 
two-step processing reaction: endonucleolytic cleavage of an extended precursor 
followed by the addition of a poly(A) tail. 

重组过表达一个14多肽。
By reconstituting the reaction from 
overproduced and purified proteins, we provide a minimal list of 14 polypeptides 
that are essential and two that are stimulatory for RNA processing. 

In a reaction depending on the polyadenylation signal AAUAAA, the reconstituted system cleaves pre-mRNA at a single preferred site corresponding to the one used in vivo. 

Among the proteins, cleavage factor I stimulates cleavage but is not 
essential, consistent with its prominent role in alternative polyadenylation. 
RBBP6 is required, with structural data showing it to contact and presumably 
activate the endonuclease CPSF73 through its DWNN domain. The C-terminal domain 
of RNA polymerase II is dispensable. ATP, but not its hydrolysis, supports RNA 
cleavage by binding to the hClp1 subunit of cleavage factor II with 
submicromolar affinity.







# Apoe 非突变小鼠 海马体：Sipa1l1 基因非典型APA 可能导致 阿尔兹海默症(Neurosci Res. 2022 IF 4.1)
> Analysis of differential gene expression and transcript usage in hippocampus of Apoe null mutant mice: Implications for Alzheimer's disease.
> Weller AE(1), Doyle GA(2), Reiner BC(2), Crist RC(2), Berrettini WH(2).
> (1)Center for Neurobiology and Behavior, Department of Psychiatry, Perelman School of Medicine, University of Pennsylvania, Philadelphia, PA, 19104, United States. Electronic address: andrew.weller@pennmedicine.upenn.edu.
> PMID: 34757086 [Indexed for MEDLINE]

A dataset of single-nucleus RNA sequencing (snRNAseq) data was analyzed using 
Seurat, `Sierra`, and Ingenuity Pathway Analysis (IPA) programs to assess 
differentially expressed genes (DEGs) and differential transcript usage (DTU) in 
mouse hippocampal cell types. 

Seurat identified DEGs between the wild type (WT) 
and Apoe knockout (EKO) mice. IPA identified 11 statistically significant 
canonical pathways in >1 cell type. Sierra identified Sipa1l1 with DTU between 
WT and EKO samples. Analysis of the Sipa1l1 peak region identified an 
alternative non-canonical polyadenylation signal and a putative cytoplasmic 
polyadenylation element. APOE regulation of gene transcription and 
co-transcriptional RNA processing may underlie Alzheimer's disease.





# CRISPR-Cas9介导生成条件性pA结合蛋白1(Pabpn1)小鼠模型揭示了 造血干细胞的重要作用(Sci Rep. 2022 IF 4.6)
> CRISPR-Cas9 mediated generation of a conditional poly(A) binding protein nuclear 1 (Pabpn1) mouse model reveals an essential role for hematopoietic stem cells.
> Sommerkamp P(1)(2), Sommerkamp AC(3)(4), ..., Schönig K(6), Trumpp A(7)(8)(9).
> (1)Division of Stem Cells and Cancer, German Cancer Research Center (DKFZ) and DKFZ-ZMBH Alliance, Im Neuenheimer Feld 280, 69120, Heidelberg, Germany.
> PMID: 35504940 [Indexed for MEDLINE]

PABPN1 调控polyA尾长度。
Poly(A) binding protein nuclear 1 (PABPN1) is known for its role in poly(A) tail 
addition and regulation of poly(A) tail length. In addition, it has been shown 
to be involved in alternative polyadenylation (APA). 

本文：靶向基因组上下游区域，及单链DNA模板，长生一个诱导型 Pabpn1flox/flox 小鼠模型。
In this study, we generated an inducible 
Pabpn1flox/flox mouse model using crRNA-tracrRNA:Cas9 complexes targeting 
upstream and downstream genomic regions, respectively, in combination with a 
long single-stranded DNA (ssDNA) template. 

敲除Pabpn1后 导致快速删除 HSPC及髓系细胞，说明其在造血发育中的作用
Functionally, 
knockout (KO) of Pabpn1 led to a rapid and robust depletion of hematopoietic 
stem and progenitor cells (HSPCs) as well as myeloid cells, suggesting an 
essential role of Pabpn1 in the hematopoietic lineage. 

Overall, the mouse model 
allows an inducible in-depth in vivo analysis of the role of PABPN1 and APA 
regulation in different tissues and disease settings.







# 小鼠全基因组中 胖瘦相关 pA信号 SNP 筛选 (Mamm Genome. 2023 IF 2.5)
> Genome-wide screening for genetic variants in polyadenylation signal (PAS) sites in mouse selection lines for fatness and leanness.
> Šimon M(#)(1), Mikec Š(#)(1), ..., Horvat S(6), Kunej T(7).
> (1)Biotechnical Faculty, Department of Animal Science, University of Ljubljana, Domžale, Slovenia.
> PMID: 36414820 [Indexed for MEDLINE]

Studies have shown that single nucleotide polymorphisms in 
polyadenylation signals (PAS-SNPs) can influence APA and affect phenotype and 
disease susceptibility. However, these studies focussed on associations between 
single PAS-SNP alleles with very large effects and phenotype. Therefore, we 
performed a genome-wide screening for PAS-SNPs in the polygenic mouse selection 
lines for fatness and leanness by whole-genome sequencing. 

The genetic variants 
identified in the two lines were overlapped with locations of PAS sites obtained 
from the `PolyASite 2.0` database. 

Expression data for selected genes were 
extracted from the microarray expression experiment performed on multiple tissue 
samples. 

In total, 682 PAS-SNPs were identified within 583 genes involved in 
various biological processes, including transport, protein modifications and 
degradation, cell adhesion and immune response. 

Five PAS-SNPs within 
5 genes (Car, Col4a1, Itga7, Lat, Nmnat1) were prioritised as potential 
functional variants and could contribute to the phenotypic disparity between the 
two selection lines. 









# 黑色素瘤 免疫反应相关的 转录组的3UTR APA (Int J Mol Sci. 2024 IF 5.6)
> The Transcriptional Landscape of Immune-Response 3'-UTR Alternative Polyadenylation in Melanoma.
> Yang X(1), Wu Y(1), Chen X(1), Qiu J(1), Huang C(1).
> (1)Dr. Nesher's Biophysics Laboratory for Innovative Drug Discovery, State Key Laboratory of Quality Research in Chinese Medicine, Macau University of Science and Technology, Taipa, Macao SAR 999078, China.
> PMID: 38474285

未知：
However, the potential roles of APA in shaping the tumor 
microenvironment (TME) are largely unexplored. 

Herein, we collected two cohorts 
comprising melanoma patients who received immune checkpoint inhibitor (ICI) 
immunotherapy to quantify transcriptome-wide discrepancies in APA. 

We observed a 
global change in 3'-UTRs between responders and non-responders, which might 
involve DNA damage response, angiogenesis, PI3K-AKT signaling pathways, etc. 

Ten putative master APA regulatory factors for those APA events were detected via a network analysis. 










# 综述: 使用非编码介导的调控ATP结合盒转运子 克服 肿瘤化疗 多耐药 (Drug Resist Updat. 2024 IF=24.3)
> Utilizing non-coding RNA-mediated regulation of ATP binding cassette (ABC) transporters to overcome multidrug resistance to cancer chemotherapy.
> To KKW(1), Huang Z(2), Zhang H(3), Ashby CR Jr(4), Fu L(5).
> (1)School of Pharmacy, Faculty of Medicine, The Chinese University of Hong Kong, Hong Kong Special Administrative Region. Electronic address: 
kennethto@cuhk.edu.hk.
> PMID: 38277757 [Indexed for MEDLINE]

Multidrug resistance (MDR) is one of the primary factors that produces treatment 
failure in patients receiving cancer chemotherapy. 

综述:
This review will provide updated information about the 
induction of ABC transporters due to the aberrant regulation of ncRNAs in cancer 
cells. We will also discuss the measurement and biological profile of 
circulating ncRNAs in various body fluids as potential biomarkers for predicting 
the response of cancer patients to chemotherapy. 

Sequence variations, such as 
alternative polyadenylation of mRNA and single nucleotide polymorphism (SNPs) at 
miRNA target sites, which may indicate the interaction of miRNA-mediated gene 
regulation with genetic variations to modulate the MDR phenotype, will be 
reviewed. 







# GROFFFY: 发现非编码区的变异: 压力相关 非编码 SMAD4 pA位点变体在>5kb以外 (Am J Hum Genet. 2023 IF 9.8)
> Functional filter for whole-genome sequencing data identifies HHT and stress-associated non-coding SMAD4 polyadenylation site variants >5 kb from coding DNA.
> Xiao S(1), Kai Z(2), ... Genomics England Research Consortium(9); Shovlin CL(10).
> (1)National Heart and Lung Institute, Imperial College London, W12 ONN London, UK; National Institute for Health Research (NIHR) Imperial Biomedical Research Centre, W2 1NY London, UK. Electronic address: sihao.xiao@bnc.ox.ac.uk.
> PMID: 37816352 [Indexed for MEDLINE]

- hereditary hemorrhagic telangiectasia [内科] 遗传性出血性毛细血管扩张症

Despite whole-genome sequencing (WGS), many cases of single-gene disorders 
remain unsolved, impeding diagnosis and preventative care for people whose 
disease-causing variants escape detection. 

为兼顾 非编码区的变异，开发了 GROFFFY 工具，整合坐标和功能实验支持的区域。
Since early WGS data analytic steps 
prioritize protein-coding sequences, to simultaneously prioritize variants in 
non-coding regions rich in transcribed and critical regulatory sequences, we 
developed GROFFFY, an analytic tool that integrates coordinates for regions with 
experimental evidence of functionality. 

应用到 十万基因组 计划中...

In conclusion, we describe a functional rare variant type that impacts regulatory systems based on RNA polyadenylation. Extension of coding sequence-focused gene panels is required to capture these variants.








# 整合多个RNA修饰的分型 在胃癌免疫治疗和诊断中的意义  (iScience. 2024)
> The implication of integrative multiple RNA modification-based subtypes in gastric cancer immunotherapy and prognosis.
> Zhang X(1), Wu L(1)(2), ..., Chen K(1), Liu B(1).
> (1)Department of Epidemiology and Biostatistics, ..., Tianjin Medical University Cancer Institute and Hospital, Tianjin Medical University, Tianjin 300060, China.
> PMID: 38318382

Previous studies have focused on the impact of individual RNA modifications on tumor development. This study comprehensively investigated the effects of multiple RNA modifications, including m6A, alternative polyadenylation, pseudouridine, adenosine-to-inosine editing, and uridylation, on gastric cancer (GC). 

By analyzing 1,946 GC samples from eleven independent cohorts, we identified `distinct clusters of RNA modification genes` with varying survival rates and immunological characteristics. 

We assessed the chromatin activity of these RNA modification clusters through `regulon enrichment analysis`. 

A prognostic model was developed using `Stepwise Regression` and `Random Survival Forest algorithms` and validated in ten independent datasets. 

Notably, the low-risk group showed a more favorable prognosis and positive response to immune checkpoint blockade therapy. 

Single-cell RNA sequencing confirmed the abundant expression of signature genes in B cells and plasma cells. 

Overall, our findings shed light on the potential significance of multiple RNA modifications in GC prognosis, stemness development, and chemotherapy resistance.

