目的: snakemake 工作流都做了什么工作？做了哪些包的脚手架？擅长哪些？哪些是空白？

https://pubmed.ncbi.nlm.nih.gov/?term=snakemake&size=100
2021/10/2 搜到 63 个

答案: SNP / mutation / annotation / SV / ChiP-seq / ATAC-seq


官方文档：https://snakemake.readthedocs.io/en/stable/
https://snakemake.github.io/


# 概要
---
1.Sustainable data analysis with Snakemake
https://pubmed.ncbi.nlm.nih.gov/34035898
https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8114187/
推荐！


2.A benchmark study of scoring methods for non-coding mutations
https://pubmed.ncbi.nlm.nih.gov/29340599/


3.MuWU: Mutant-seq library analysis and annotation
https://pubmed.ncbi.nlm.nih.gov/34586393/


4.Evaluating single-cell cluster stability using the Jaccard similarity index
https://pubmed.ncbi.nlm.nih.gov/33165513/

5.sv-callers: a highly portable parallel workflow for structural variant detection in whole-genome sequence data
https://pubmed.ncbi.nlm.nih.gov/31934500/

6.Scalable Workflows and Reproducible Data Analysis for Genomics
https://pubmed.ncbi.nlm.nih.gov/31278683/

- four different workflow engines: the Common Workflow Language (CWL), Guix Workflow Language (GWL), Snakemake, and Nextflow. 
- using Debian, GNU Guix, and Bioconda software distributions
- container systems, such as Docker, GNU Guix, and Singularity.

7.Using prototyping to choose a bioinformatics workflow management system
https://pubmed.ncbi.nlm.nih.gov/33630841/

- Many workflow management systems enhance portability by supporting the use of containers, high-performance computing (HPC) systems, and clouds. 
- Snakemake, cwltool, Toil, and Nextflow. 


8.A Bayesian model for single cell transcript expression analysis on MERFISH data
https://pubmed.ncbi.nlm.nih.gov/30875429/


9.CoBRA: Containerized Bioinformatics Workflow for Reproducible ChIP/ATAC-seq Analysis
https://pubmed.ncbi.nlm.nih.gov/34284136/

- CoBRA provides a comprehensive state-of-the-art ChIP-seq and ATAC-seq analysis pipeline that can be used by scientists with limited computational experience.
- This enables researchers to gain rapid insight into protein-DNA interactions and chromatin accessibility through sample clustering, differential peak calling, motif enrichment, comparison of sites to a reference database, and pathway analysis. 
- CoBRA is publicly available online at https://bitbucket.org/cfce/cobra.



## 综述或新闻

1.Workflow systems turn raw data into scientific knowledge
https://www.nature.com/articles/d41586-019-02619-z





## 其他讨论
https://www.biostars.org/p/258436/



# 检索 scan 2021/10

1: Köster J, Rahmann S. Snakemake-a scalable bioinformatics workflow engine.
Bioinformatics. 2018 Oct 15;34(20):3600. doi: 10.1093/bioinformatics/bty350.
Erratum for: Bioinformatics. 2012 Oct 1;28(19):2520-2. PMID: 29788404.
勘误。


2: Zhang X, Jonassen I. RASflow: an RNA-Seq analysis workflow with Snakemake.
BMC Bioinformatics. 2020 Mar 18;21(1):110. doi: 10.1186/s12859-020-3433-x. PMID:
32183729; PMCID: PMC7079470.
做RNA-seq的流程。比对、到PCA、heatmap。


3: Kondratenko Y, Korobeynikov A, Lapidus A. CDSnake: Snakemake pipeline for
retrieval of annotated OTUs from paired-end reads using CD-HIT utilities. BMC
Bioinformatics. 2020 Jul 24;21(Suppl 12):303. doi: 10.1186/s12859-020-03591-6.
Erratum in: BMC Bioinformatics. 2020 Aug 19;21(1):362. PMID: 32703166; PMCID:
PMC7379820.
微生物 16S 测序。


## 4:  一个基于pyQt的 GUI 库
4: Desvillechabrol D, Legendre R, Rioualen C, Bouchier C, van Helden J, Kennedy
S, Cokelaer T. Sequanix: a dynamic graphical interface for Snakemake workflows.
Bioinformatics. 2018 Jun 1;34(11):1934-1936. doi: 10.1093/bioinformatics/bty034.
PMID: 29361152; PMCID: PMC5972652.
Qt 和 pyQt 
https://sequana.readthedocs.io/en/master/auto_examples/index.html


### 5: 扩增子测序 DADA2(2020)
5: Weißbecker C, Schnabel B, Heintz-Buschart A. Dadasnake, a Snakemake
implementation of DADA2 to process amplicon sequencing data for microbial
ecology. Gigascience. 2020 Nov 30;9(12):giaa135. doi:
10.1093/gigascience/giaa135. PMID: 33252655; PMCID: PMC7702218.

> It is easy to install dadasnake via conda environments.

https://github.com/a-h-b/dadasnake



### 6: metagenome (2020)
6: Kieser S, Brown J, Zdobnov EM, Trajkovski M, McCue LA. ATLAS: a Snakemake
workflow for assembly, annotation, and genomic binning of metagenome sequence
data. BMC Bioinformatics. 2020 Jun 22;21(1):257. doi:
10.1186/s12859-020-03585-4. PMID: 32571209; PMCID: PMC7310028.

---
宏基因组的组装、注释、分bin。
//ATLAS is written in Python and the workflow implemented in Snakemake; it operates in a Linux environment, and is compatible with Python 3.5+ and Anaconda 3+ versions.

https://github.com/metagenome-atlas/atlas


### 7:amplicon in Docker(2020)
7: Welzel M, Lange A, Heider D, Schwarz M, Freisleben B, Jensen M, Boenigk J,
Beisser D. Natrix: a Snakemake-based workflow for processing, clustering, and
taxonomically assigning amplicon sequencing reads. BMC Bioinformatics. 2020 Nov
16;21(1):526. doi: 10.1186/s12859-020-03852-4. PMID: 33198651; PMCID:
PMC7667751.

> The workflow is written using Snakemake, a workflow management engine for developing data analysis workflows. In addition, Conda is used for version control. Thus, Snakemake ensures reproducibility and Conda offers version control of the utilized programs.

> Natrix is freely available on GitHub ( https://github.com/MW55/Natrix ) or as a Docker container on DockerHub ( https://hub.docker.com/r/mw55/natrix ).



---
encapsulation [[ɪnˌkæpsjuˈleɪʃn]  n. 封装；包装
hassle [ˈhæsl] n. 困难；分歧；起哄





### 8: Snakemake(2012)
8: Köster J, Rahmann S. Snakemake--a scalable bioinformatics workflow engine.
Bioinformatics. 2012 Oct 1;28(19):2520-2. doi: 10.1093/bioinformatics/bts480.
Epub 2012 Aug 20. Erratum in: Bioinformatics. 2018 Oct 15;34(20):3600. PMID:
22908215.

https://snakemake.readthedocs.io/en/stable/


### 9: HIV 分型
9: Araújo PMM, Martins JS, Osório NS. SNAPPy: A snakemake pipeline for scalable
HIV-1 subtyping by phylogenetic pairing. Virus Evol. 2019 Nov 19;5(2):vez050.
doi: 10.1093/ve/vez050. PMID: 31768265; PMCID: PMC6863187.

https://github.com/PMMAraujo/snappy/releases

---
phylogenetic  [,faɪlədʒɪ'netɪk]  adj. [生物] 系统发生的；动植物种类史的


## 10:  RNA-Seq(2018.7)
10: Wang D. hppRNA-a Snakemake-based handy parameter-free pipeline for RNA-Seq
analysis of numerous samples. Brief Bioinform. 2018 Jul 20;19(4):622-626. doi:
10.1093/bib/bbw143. PMID: 28096075.

// We report a one-in-all solution called hppRNA, composed of `four scenarios` such as pre-mapping, core-workflow, post-mapping and sequence variation detection, written by a series of individual Perl and R scripts, counting on well-established and preinstalled software, irrespective of single-end or paired-end, unstranded or stranded sequencing method.

// It features six independent `core-workflows` comprising the state-of-the-art technology with dozens of popular cutting-edge tools such as Tophat-Cufflink-Cuffdiff, Subread-featureCounts-DESeq2, STAR-RSEM-EBSeq, Bowtie-eXpress-edgeR, kallisto-sleuth, HISAT-StringTie-Ballgown, and embeds itself in Snakemake, which is a modern pipeline management system.

//The core function of this pipeline is turning the raw fastq files into gene/isoform expression matrix and differentially expressed genes or isoforms as well as `the identification of fusion genes`, `single nucleotide polymorphisms`, `long noncoding RNAs` and `circular RNAs`. 

https://sourceforge.net/projects/hpprna/

---
irrespective [ˌɪrɪˈspektɪv] adv. 不考虑，不顾 adv. 不考虑地，不顾地



11: Kondratenko Y, Korobeynikov A, Lapidus A. Correction to: CDSnake: Snakemake
pipeline for retrieval of annotated OTUs from paired-end reads using CD-HIT
utilities. BMC Bioinformatics. 2020 Aug 19;21(1):362. doi:
10.1186/s12859-020-03709-w. Erratum for: BMC Bioinformatics. 2020 Jul
24;21(Suppl 12):303. PMID: 32814545; PMCID: PMC7440612.
//勘误


### 12: bacteria genomes(2020 尼日利亚)
12: Olawoye IB, Frost SDW, Happi CT. The Bacteria Genome Pipeline (BAGEP): an
automated, scalable workflow for bacteria genomes with Snakemake. PeerJ. 2020
Oct 27;8:e10121. doi: 10.7717/peerj.10121. PMID: 33194387; PMCID: PMC7597632.

https://github.com/idolawoye/BAGEP


## 13: Snakemake(2021)
13: Mölder F, Jablonski KP, Letcher B, Hall MB, Tomkins-Tinch CH, Sochat V,
Forster J, Lee S, Twardziok SO, Kanitz A, Wilm A, Holtgrewe M, Rahmann S,
Nahnsen S, Köster J. Sustainable data analysis with Snakemake. F1000Res. 2021
Jan 18;10:33. doi: 10.12688/f1000research.29032.2. PMID: 34035898; PMCID:
PMC8114187.

//We show how the popular workflow management system Snakemake can be used to guarantee this, and how it enables an ergonomic, combined, unified representation of all steps involved in data analysis, ranging from raw data processing, to quality control and fine-grained, interactive exploration and plotting of final results.

https://f1000research.com/articles/10-33/v2

---
heterogeneous [ˌhetərəˈdʒiːniəs]  adj. 由很多种类组成的，混杂的；各种各样的；（化学）不均一的，多相的；（数学）不纯一的，参差的
postulate  [ˈpɒstʃəleɪt] vt. 假定；要求；视……为理所当然 n. 基本条件；假定
ergonomic  [ˌɜːɡəˈnɒmɪk] adj. 人类环境改造学的；人类工程学的
fine-grained [ˈfaɪnˈgreɪnd] adj. 细粒的；有细密纹理的；详细的；深入的


## 14: RNA-seq(2018)
14: Cornwell M, Vangala M, Taing L, Herbert Z, Köster J, Li B, Sun H, Li T,
Zhang J, Qiu X, Pun M, Jeselsohn R, Brown M, Liu XS, Long HW. VIPER:
Visualization Pipeline for RNA-seq, a Snakemake workflow for efficient and
complete RNA-seq analysis. BMC Bioinformatics. 2018 Apr 12;19(1):135. doi:
10.1186/s12859-018-2139-9. PMID: 29649993; PMCID: PMC5897949.

> VIPER (Visualization Pipeline for RNA-seq analysis) is an analysis workflow that combines some of the most popular tools to take RNA-seq analysis from raw sequencing data, through alignment and quality control, into downstream differential expression and pathway analysis. 

> This capacity has already been exploited to include very recently developed tools that explore immune infiltrate and T-cell CDR (Complementarity-Determining Regions) reconstruction abilities. 

## 15: TF 差异表达与活化、抑制分类: diffTF(2019)//todo
15: Berest I, Arnold C, Reyes-Palomares A, Palla G, Rasmussen KD, Giles H, Bruch
PM, Huber W, Dietrich S, Helin K, Zaugg JB. Quantification of Differential
Transcription Factor Activity and Multiomics-Based Classification into
Activators and Repressors: diffTF. Cell Rep. 2019 Dec 3;29(10):3147-3159.e12.
doi: 10.1016/j.celrep.2019.10.106. PMID: 31801079.

https://pubmed.ncbi.nlm.nih.gov/31801079/

> Here, we present diffTF (https://git.embl.de/grp-zaugg/diffTF) to calculate differential TF activity (basic mode) and classify TFs into putative transcriptional activators or repressors (classification mode).

- In basic mode, it combines genome-wide `chromatin accessibility/activity with putative TF binding sites` that, in classification mode, are integrated with `RNA-seq`. 

貌似可以看看。整个ATAC和RNA-seq。

---
readout  [ˈriːdaʊt]  n. 读出；读出器




## 16: bulk RNA-seq 分析免疫细胞组分 | 评估(2019)//todo
16: Sturm G, Finotello F, Petitprez F, Zhang JD, Baumbach J, Fridman WH, List M,
Aneichyk T. Comprehensive evaluation of transcriptome-based cell-type
quantification methods for immuno-oncology. Bioinformatics. 2019 Jul
15;35(14):i436-i445. doi: 10.1093/bioinformatics/btz363. PMID: 31510660; PMCID:
PMC6612828.

//A general guideline leading the research community through cell type deconvolution is missing.

- 肿瘤免疫微环境单细胞测序数据模拟已知比率的bulk样本，使用其他发表的方法进行预测。 We used a single-cell RNA-seq dataset of ∼11 000 cells from the TME to simulate bulk samples of known cell type proportions, and validated the results using independent, publicly available gold-standard estimates.
- 评估7种计算方法，使用1800个模拟数据和真实数据。 This allowed us to analyze and condense the results of more than a hundred thousand predictions to provide an exhaustive evaluation across seven computational methods over nine cell types and ∼1800 samples from five simulated and real-world datasets. 
- 对于定义好marker的细胞类型，表现良好。 We demonstrate that computational deconvolution performs at high accuracy for well-defined cell-type signatures and propose how fuzzy cell-type signatures can be improved. 
- We suggest that future efforts should be dedicated to refining cell population definitions and finding reliable signatures.

https://github.com/grst/immunedeconv
https://github.com/icbi-lab/immune_deconvolution_benchmark
https://icbi-lab.github.io/immunedeconv/
an R package for unified access to computational methods for estimating immune cell fractions from bulk RNA sequencing data.

组件:
- libs/CIBERSORT/
	* CIBERSORT.R
	* LM22.txt

> We generated reproducible reports using bookdown 0.7. We use Snakemake 5.2.0 (Koster and Rahmann, 2012), conda and bioconda (Grüning et al., 2018) to integrate our analyses in a reproducible pipeline.

---
fuzzy [ˈfʌzi] adj. 模糊的；失真的；有绒毛的



## 17:流程中怎么调优参数?
17: Pal S, Przytycka TM. Bioinformatics pipeline using JUDI: Just Do It!
Bioinformatics. 2020 Apr 15;36(8):2572-2574. doi: 10.1093/bioinformatics/btz956.
PMID: 31882996; PMCID: PMC7868055.

https://github.com/ncbi/JUDI.

- several workflow management systems (WMS), e.g. **Snakemake, Nextflow, Common Workflow Language, Galaxy, etc.**
- However, when the pipeline needs to be executed with different settings of parameters, e.g. thresholds, underlying algorithms, etc. these WMS require significant scripting to ensure an optimal execution. 
- We developed JUDI on top of [DoIt](https://pydoit.org/),



---
underlying [ˌʌndəˈlaɪɪŋ] adj. 根本的，潜在的；表面下的，下层的；




## 18:使用hypercluster 和 snakemake 试大量模型和参数，来选择最优参数
18: Blumenberg L, Ruggles KV. Hypercluster: a flexible tool for parallelized
unsupervised clustering optimization. BMC Bioinformatics. 2020 Sep 29;21(1):428.
doi: 10.1186/s12859-020-03774-1. PMID: 32993491; PMCID: PMC7525959.

https://github.com/ruggleslab/hypercluster

---
exceptionally  [ɪkˈsepʃənəli] adv. 异常地；特殊地；例外地
upfront [ˌʌpˈfrʌnt] adj. 预付的；在前面的；正直的，坦率的 adv. 在前面；提前支付（工资）
cumbersome [ˈkʌmbəsəm]  adj. 笨重的；累赘的；难处理的




19: Eng A, Verster AJ, Borenstein E. MetaLAFFA: a flexible, end-to-end,
distributed computing-compatible metagenomic functional annotation pipeline. BMC
Bioinformatics. 2020 Oct 21;21(1):471. doi: 10.1186/s12859-020-03815-9. PMID:
33087062; PMCID: PMC7579964.
// meta 注释。



20: Kleinert P, Martin B, Kircher M. HemoMIPs-Automated analysis and result
reporting pipeline for targeted sequencing data. PLoS Comput Biol. 2020 Jun
4;16(6):e1007956. doi: 10.1371/journal.pcbi.1007956. PMID: 32497118; PMCID:
PMC7297380.

// 靶向测序 SNP 报告



21: Stöcker T, Altrogge L, Marcon C, Win YN, Hochholdinger F, Schoof H. MuWU:
Mutant-seq library analysis and annotation. Bioinformatics. 2021 Sep 29:btab679.
doi: 10.1093/bioinformatics/btab679. Epub ahead of print. PMID: 34586393.

//突变库分析（农作物）

https://github.com/tgstoecker/MuWU


## 22:使用Jaccard距离评估单细胞聚类稳定性
22: Tang M, Kaymaz Y, Logeman BL, Eichhorn S, Liang ZS, Dulac C, Sackton TB.
Evaluating single-cell cluster stability using the Jaccard similarity index.
Bioinformatics. 2021 Aug 9;37(15):2212-2214. doi:
10.1093/bioinformatics/btaa956. PMID: 33165513; PMCID: PMC8352506.

> https://pubmed.ncbi.nlm.nih.gov/33165513/

- Popular clustering algorithms are sensitive to parameter choices, and can produce different clustering solutions with even small changes in **the number of principal components used**, the **k nearest neighbor** and **the resolution parameters**, among others.
- The R package **scclusteval** and the accompanying Snakemake workflow implement all steps of the pipeline: 
	* subsampling the cells, 
	* repeating the clustering with Seurat and 
	* estimation of cluster stability using the Jaccard similarity index 
	* and providing rich visualizations.

实现:
- R package scclusteval: https://github.com/crazyhottommy/scclusteval 
- Snakemake workflow: https://github.com/crazyhottommy/pyflow_seuratv3_parameter 
- Tutorial: https://crazyhottommy.github.io/EvaluateSingleCellClustering/.

---
interpretation [ɪnˌtɜːprəˈteɪʃn] n. 解释，理解；表演，演奏，艺术处理；口译





23: Martin R, Hackl T, Hattab G, Fischer MG, Heider D. MOSGA: Modular Open-
Source Genome Annotator. Bioinformatics. 2021 Apr 1;36(22-23):5514-5515. doi:
10.1093/bioinformatics/btaa1003. PMID: 33258916.

// 基因注释。
https://gitlab.com/mosga/mosga



24: Clarke EL, Taylor LJ, Zhao C, Connell A, Lee JJ, Fett B, Bushman FD,
Bittinger K. Sunbeam: an extensible pipeline for analyzing metagenomic
sequencing experiments. Microbiome. 2019 Mar 22;7(1):46. doi:
10.1186/s40168-019-0658-x. PMID: 30902113; PMCID: PMC6429786.

// 宏基因组


25: Arredondo-Alonso S, Bootsma M, Hein Y, Rogers MRC, Corander J, Willems RJL,
Schürch AC. gplas: a comprehensive tool for plasmid analysis using short-read
graphs. Bioinformatics. 2020 Jun 1;36(12):3874-3876. doi:
10.1093/bioinformatics/btaa233. PMID: 32271863; PMCID: PMC7320608.

//细菌， 质粒

---
epidemiology [ˌepɪˌdiːmiˈɒlədʒi] n. 流行病学；传染病学


## 26: sv-callers 做结构变异
26: Kuzniar A, Maassen J, Verhoeven S, Santuari L, Shneider C, Kloosterman WP,
de Ridder J. sv-callers: a highly portable parallel workflow for structural
variant detection in whole-genome sequence data. PeerJ. 2020 Jan 6;8:e8214. doi:
10.7717/peerj.8214. PMID: 31934500; PMCID: PMC6951283.

- We present sv-callers, a highly portable workflow that enables parallel execution of multiple SV detection tools, as well as provide users with example analyses of detected SV callsets in a **Jupyter Notebook**. 


## 27:眼睛数据库
27: Swamy V, McGaughey D. Eye in a Disk: eyeIntegration Human Pan-Eye and Body
Transcriptome Database Version 1.0. Invest Ophthalmol Vis Sci. 2019 Jul
1;60(8):3236-3246. doi: 10.1167/iovs.19-27106. PMID: 31343654; PMCID:
PMC6660187.




## 28: 书的章节
28: Strozzi F, Janssen R, Wurmus R, Crusoe MR, Githinji G, Di Tommaso P,
Belhachemi D, Möller S, Smant G, de Ligt J, Prins P. Scalable Workflows and
Reproducible Data Analysis for Genomics. Methods Mol Biol. 2019;1910:723-745.
doi: 10.1007/978-1-4939-9074-0_24. PMID: 31278683.

- We show how to create a scalable, reusable, and shareable workflow using four different workflow engines: **the Common Workflow Language (CWL), Guix Workflow Language (GWL), Snakemake, and Nextflow**.


## 29:meta 分类（IF 14, 2017）
29: Piro VC, Matschkowski M, Renard BY. MetaMeta: integrating metagenome
analysis tools to improve taxonomic profiling. Microbiome. 2017 Aug 14;5(1):101.
doi: 10.1186/s40168-017-0318-y. PMID: 28807044; PMCID: PMC5557516.


30: Rioualen C, Charbonnier-Khamvongsa L, Collado-Vides J, van Helden J.
Integrating Bacterial ChIP-seq and RNA-seq Data With SnakeChunks. Curr Protoc
Bioinformatics. 2019 Jun;66(1):e72. doi: 10.1002/cpbi.72. Epub 2019 Feb 20.
PMID: 30786165; PMCID: PMC7302399.

// 整个细菌 ChiP-seq 和 RNA-seq。


31: Oluniyi PE, Ajogbasile F, Oguzie J, Uwanibe J, Kayode A, Happi A, Ugwu A,
Olumade T, Ogunsanya O, Eromon PE, Folarin O, Frost SDW, Heeney J, Happi CT.
VGEA: an RNA viral assembly toolkit. PeerJ. 2021 Sep 6;9:e12129. doi:
10.7717/peerj.12129. PMID: 34567846; PMCID: PMC8428259.

// RNA 病毒组装



32: Abdala Asbun A, Besseling MA, Balzano S, van Bleijswijk JDL, Witte HJ,
Villanueva L, Engelmann JC. <i>Cascabel</i>: A Scalable and Versatile Amplicon
Sequence Data Analysis Pipeline Delivering Reproducible and Documented Results.
Front Genet. 2020 Nov 20;11:489357. doi: 10.3389/fgene.2020.489357. PMID:
33329686; PMCID: PMC7718033.

// 扩增子分析
https://github.com/AlejandroAb/CASCABEL



33: Astorkia M, Hernández M, Bocs S, Ponce K, León O, Morales S, Quezada N,
Orellana F, Wendra F, Sembiring Z, Asmono D, Ritter E. Detection of significant
SNP associated with production and oil quality traits in interspecific oil palm
hybrids using RARSeq. Plant Sci. 2020 Feb;291:110366. doi:
10.1016/j.plantsci.2019.110366. Epub 2019 Dec 3. PMID: 31928673.

// 植物SNP与出油质量


## 34-:Long-Read Nanopore Sequencing
34: Cruz-Garcia L, O'Brien G, Sipos B, Mayes S, Love MI, Turner DJ, Badie C.
Generation of a Transcriptional Radiation Exposure Signature in Human Blood
Using Long-Read Nanopore Sequencing. Radiat Res. 2020 Feb;193(2):143-154. doi:
10.1667/RR15476.1. Epub 2019 Dec 12. PMID: 31829904; PMCID: PMC7055010.

// 放射暴露后的转录组，3代测序。


35: Schmied C, Steinbach P, Pietzsch T, Preibisch S, Tomancak P. An automated
workflow for parallel processing of large multiview SPIM recordings.
Bioinformatics. 2016 Apr 1;32(7):1112-4. doi: 10.1093/bioinformatics/btv706.
Epub 2015 Dec 1. PMID: 26628585; PMCID: PMC4896369.

// 3D成像技术的结果处理。



36: Jackson M, Kavoussanakis K, Wallace EWJ. Using prototyping to choose a
bioinformatics workflow management system. PLoS Comput Biol. 2021 Feb
25;17(2):e1008622. doi: 10.1371/journal.pcbi.1008622. PMID: 33630841; PMCID:
PMC7906312.

// 选择合适的流程工具。



37: Zentgraf J, Rahmann S. Fast lightweight accurate xenograft sorting.
Algorithms Mol Biol. 2021 Apr 2;16(1):2. doi: 10.1186/s13015-021-00181-w. PMID:
33810805; PMCID: PMC8017614.

38: Scholz A, Eggenhofer F, Gelhausen R, Grüning B, Zarnack K, Brüne B, Backofen
R, Schmid T. uORF-Tools-Workflow for the determination of translation-regulatory
upstream open reading frames. PLoS One. 2019 Sep 12;14(9):e0222459. doi:
10.1371/journal.pone.0222459. PMID: 31513641; PMCID: PMC6742470.

39: Cao J, Gursanscky NR, Fletcher SJ, Sawyer A, Wadia M, McKeough L, Coleman M,
Dressel U, Taochy C, Mitter N, Vaucheret H, Carroll BJ. Can-Seq: a PCR and DNA
sequencing strategy for identifying new alleles of known and candidate genes.
Plant Methods. 2020 Feb 13;16:16. doi: 10.1186/s13007-020-0555-0. PMID:
32082406; PMCID: PMC7017465.

40: Dirmeier S, Emmenlauer M, Dehio C, Beerenwinkel N. PyBDA: a command line
tool for automated analysis of big biological data sets. BMC Bioinformatics.
2019 Nov 12;20(1):564. doi: 10.1186/s12859-019-3087-8. PMID: 31718539; PMCID:
PMC6849186.

41: Fondrie WE, Bittremieux W, Noble WS. ppx: Programmatic Access to Proteomics
Data Repositories. J Proteome Res. 2021 Sep 3;20(9):4621-4624. doi:
10.1021/acs.jproteome.1c00454. Epub 2021 Aug 3. PMID: 34342226; PMCID:
PMC8457024.

42: Drubay D, Gautheret D, Michiels S. A benchmark study of scoring methods for
non-coding mutations. Bioinformatics. 2018 May 15;34(10):1635-1641. doi:
10.1093/bioinformatics/bty008. PMID: 29340599.

43: Wolf SA, Epping L, Andreotti S, Reinert K, Semmler T. SCORE: Smart Consensus
Of RNA Expression-a consensus tool for detecting differentially expressed genes
in bacteria. Bioinformatics. 2021 Apr 20;37(3):426-428. doi:
10.1093/bioinformatics/btaa681. PMID: 32717040.

44: Taravella Oill AM, Deshpande AJ, Natri HM, Wilson MA. PopInf: An Approach
for Reproducibly Visualizing and Assigning Population Affiliation in Genomic
Samples of Uncertain Origin. J Comput Biol. 2021 Mar;28(3):296-303. doi:
10.1089/cmb.2019.0434. Epub 2020 Oct 19. PMID: 33074720; PMCID: PMC7994427.

45: Köster J, Brown M, Liu XS. A Bayesian model for single cell transcript
expression analysis on MERFISH data. Bioinformatics. 2019 Mar 15;35(6):995-1001.
doi: 10.1093/bioinformatics/bty718. Erratum in: Bioinformatics. 2019 Jul
1;35(13):2347. PMID: 30875429; PMCID: PMC6419903.

46: Orjuela S, Huang R, Hembach KM, Robinson MD, Soneson C. ARMOR: An
<u>A</u>utomated <u>R</u>eproducible <u>MO</u>dular Workflow for Preprocessing
and Differential Analysis of <u>R</u>NA-seq Data. G3 (Bethesda). 2019 Jul
9;9(7):2089-2096. doi: 10.1534/g3.119.400185. PMID: 31088905; PMCID: PMC6643886.

47: Werner J, Géron A, Kerssemakers J, Matallana-Surget S. mPies: a novel
metaproteomics tool for the creation of relevant protein databases and
automatized protein annotation. Biol Direct. 2019 Nov 14;14(1):21. doi:
10.1186/s13062-019-0253-x. PMID: 31727118; PMCID: PMC6854712.

48: Abdelaal T, Michielsen L, Cats D, Hoogduin D, Mei H, Reinders MJT, Mahfouz
A. A comparison of automatic cell identification methods for single-cell RNA
sequencing data. Genome Biol. 2019 Sep 9;20(1):194. doi:
10.1186/s13059-019-1795-z. PMID: 31500660; PMCID: PMC6734286.

49: Milosavljevic S, Kuo T, Decarli S, Mohn L, Sese J, Shimizu KK, Shimizu-
Inatsugi R, Robinson MD. ARPEGGIO: Automated Reproducible Polyploid EpiGenetic
GuIdance workflOw. BMC Genomics. 2021 Jul 17;22(1):547. doi:
10.1186/s12864-021-07845-2. PMID: 34273949; PMCID: PMC8285871.

50: Qiu X, Feit AS, Feiglin A, Xie Y, Kesten N, Taing L, Perkins J, Gu S, Li Y,
Cejas P, Zhou N, Jeselsohn R, Brown M, Shirley Liu X, Long HW. CoBRA:
Containerized Bioinformatics Workflow for Reproducible ChIP/ATAC-seq Analysis.
Genomics Proteomics Bioinformatics. 2021 Jul 17:S1672-0229(21)00154-6. doi:
10.1016/j.gpb.2020.11.007. Epub ahead of print. PMID: 34284136.

51: Hoek A, Maibach K, Özmen E, Vazquez-Armendariz AI, Mengel JP, Hain T, Herold
S, Goesmann A. WASP: a versatile, web-accessible single cell RNA-Seq processing
platform. BMC Genomics. 2021 Mar 18;22(1):195. doi: 10.1186/s12864-021-07469-6.
PMID: 33736596; PMCID: PMC7977290.

52: Bolyen E, Dillon MR, Bokulich NA, Ladner JT, Larsen BB, Hepp CM, Lemmer D,
Sahl JW, Sanchez A, Holdgraf C, Sewell C, Choudhury AG, Stachurski J, McKay M,
Simard A, Engelthaler DM, Worobey M, Keim P, Caporaso JG. Reproducibly sampling
SARS-CoV-2 genomes across time, geography, and viral diversity. F1000Res. 2020
Jun 29;9:657. doi: 10.12688/f1000research.24751.2. PMID: 33500774; PMCID:
PMC7814287.

53: Astorkia M, Hernandez M, Bocs S, Armentia EL, Herran A, Ponce K, León O,
Morales S, Quezada N, Orellana F, Wendra F, Sembiring Z, Asmono D, Ritter E.
Association Mapping Between Candidate Gene SNP and Production and Oil Quality
Traits in Interspecific Oil Palm Hybrids. Plants (Basel). 2019 Sep 26;8(10):377.
doi: 10.3390/plants8100377. PMID: 31561627; PMCID: PMC6843369.

54: Dall'Olio D, Curti N, Fonzi E, Sala C, Remondini D, Castellani G, Giampieri
E. Impact of concurrency on the performance of a whole exome sequencing
pipeline. BMC Bioinformatics. 2021 Feb 9;22(1):60. doi:
10.1186/s12859-020-03780-3. Erratum in: BMC Bioinformatics. 2021 Jun
1;22(1):292. PMID: 33563206; PMCID: PMC7874478.

55: Muñoz-Benavent M, Hartkopf F, Van Den Bossche T, Piro VC, García-Ferris C,
Latorre A, Renard BY, Muth T. gNOMO: a multi-omics pipeline for integrated host
and microbiome analysis of non-model organisms. NAR Genom Bioinform. 2020 Aug
5;2(3):lqaa058. doi: 10.1093/nargab/lqaa058. Erratum in: NAR Genom Bioinform.
2020 Oct 09;2(4):lqaa083. PMID: 33575609; PMCID: PMC7671378.

56: Pranzatelli TJF, Michael DG, Chiorini JA. ATAC2GRN: optimized ATAC-seq and
DNase1-seq pipelines for rapid and accurate genome regulatory network inference.
BMC Genomics. 2018 Jul 31;19(1):563. doi: 10.1186/s12864-018-4943-z. Erratum in:
BMC Genomics. 2019 Jan 15;20(1):44. PMID: 30064353; PMCID: PMC6069842.

57: Beisser D, Graupner N, Grossmann L, Timm H, Boenigk J, Rahmann S. TaxMapper:
an analysis tool, reference database and workflow for metatranscriptome analysis
of eukaryotic microorganisms. BMC Genomics. 2017 Oct 16;18(1):787. doi:
10.1186/s12864-017-4168-6. PMID: 29037173; PMCID: PMC5644092.

58: Yuen ZW, Srivastava A, Daniel R, McNevin D, Jack C, Eyras E. Systematic
benchmarking of tools for CpG methylation detection from nanopore sequencing.
Nat Commun. 2021 Jun 8;12(1):3438. doi: 10.1038/s41467-021-23778-6. PMID:
34103501; PMCID: PMC8187371.

59: Deneke C, Brendebach H, Uelze L, Borowiak M, Malorny B, Tausch SH. Species-
Specific Quality Control, Assembly and Contamination Detection in Microbial
Isolate Sequences with AQUAMIS. Genes (Basel). 2021 Apr 26;12(5):644. doi:
10.3390/genes12050644. PMID: 33926025; PMCID: PMC8145556.

60: Prasanna A, Niranjan V. MutVis: Automated framework for analysis and
visualization of mutational signatures in pathogenic bacterial strains. Infect
Genet Evol. 2021 Jul;91:104805. doi: 10.1016/j.meegid.2021.104805. Epub 2021 Mar
6. PMID: 33689914.

61: Weber LM, Hippen AA, Hickey PF, Berrett KC, Gertz J, Doherty JA, Greene CS,
Hicks SC. Genetic demultiplexing of pooled single-cell RNA-sequencing samples in
cancer facilitates effective experimental design. Gigascience. 2021 Sep
22;10(9):giab062. doi: 10.1093/gigascience/giab062. PMID: 34553212; PMCID:
PMC8458035.

62: Cifani P, Dhabaria A, Chen Z, Yoshimi A, Kawaler E, Abdel-Wahab O, Poirier
JT, Kentsis A. ProteomeGenerator: A Framework for Comprehensive Proteomics Based
on de Novo Transcriptome Assembly and High-Accuracy Peptide Mass Spectral
Matching. J Proteome Res. 2018 Nov 2;17(11):3681-3692. doi:
10.1021/acs.jproteome.8b00295. Epub 2018 Oct 19. PMID: 30295032; PMCID:
PMC6727203.

63: McNichol J, Berube PM, Biller SJ, Fuhrman JA. Evaluating and Improving Small
Subunit rRNA PCR Primer Coverage for Bacteria, Archaea, and Eukaryotes Using
Metagenomes from Global Ocean Surveys. mSystems. 2021 Jun 29;6(3):e0056521. doi:
10.1128/mSystems.00565-21. Epub 2021 Jun 1. PMID: 34060911; PMCID: PMC8269242.