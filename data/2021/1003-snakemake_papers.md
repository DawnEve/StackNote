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

1. Workflow systems turn raw data into scientific knowledge
https://www.nature.com/articles/d41586-019-02619-z


2. [nature methods, 2021.9] perspectives | Reproducible, scalable, and shareable analysis pipelines with bioinformatics workflow managers
https://pubmed.ncbi.nlm.nih.gov/34556866/
https://www.nature.com/articles/s41592-021-01254-9

- [json](https://www.json.org/json-en.html)
- [YAML](https://www.yaml.org)
- [Dockstore](https://dockstore.org/) https://pubmed.ncbi.nlm.nih.gov/33978761/



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


---
12: Olawoye IB, Frost SDW, Happi CT. The Bacteria Genome Pipeline (BAGEP): an
automated, scalable workflow for bacteria genomes with Snakemake. PeerJ. 2020
Oct 27;8:e10121. doi: 10.7717/peerj.10121. PMID: 33194387; PMCID: PMC7597632.

// bacteria genomes(2020 尼日利亚)

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

---
35: Schmied C, Steinbach P, Pietzsch T, Preibisch S, Tomancak P. An automated
workflow for parallel processing of large multiview SPIM recordings.
Bioinformatics. 2016 Apr 1;32(7):1112-4. doi: 10.1093/bioinformatics/btv706.
Epub 2015 Dec 1. PMID: 26628585; PMCID: PMC4896369.

// 3D成像技术的结果处理。


---
36: Jackson M, Kavoussanakis K, Wallace EWJ. Using prototyping to choose a
bioinformatics workflow management system. PLoS Comput Biol. 2021 Feb
25;17(2):e1008622. doi: 10.1371/journal.pcbi.1008622. PMID: 33630841; PMCID:
PMC7906312.

// 如何基于 prototype 选择合适的流程工具。

- To select a workflow management system, a rapid survey of available systems was undertaken, and candidates were shortlisted: **Snakemake, cwltool, Toil, and Nextflow**. 

---
37: Zentgraf J, Rahmann S. Fast lightweight accurate xenograft sorting.
Algorithms Mol Biol. 2021 Apr 2;16(1):2. doi: 10.1186/s13015-021-00181-w. PMID:
33810805; PMCID: PMC8017614.

// patient-derived xenograft (PDX) models 测序分清人、鼠的reads。

---
38: Scholz A, Eggenhofer F, Gelhausen R, Grüning B, Zarnack K, Brüne B, Backofen
R, Schmid T. uORF-Tools-Workflow for the determination of translation-regulatory
upstream open reading frames. PLoS One. 2019 Sep 12;14(9):e0222459. doi:
10.1371/journal.pone.0222459. PMID: 31513641; PMCID: PMC6742470.

// 检测调控功能的上游ORF(uORFs)

https://github.com/Biochemistry1-FFM/uORF-Tools


---
39: Cao J, Gursanscky NR, Fletcher SJ, Sawyer A, Wadia M, McKeough L, Coleman M,
Dressel U, Taochy C, Mitter N, Vaucheret H, Carroll BJ. Can-Seq: a PCR and DNA
sequencing strategy for identifying new alleles of known and candidate genes.
Plant Methods. 2020 Feb 13;16:16. doi: 10.1186/s13007-020-0555-0. PMID:
32082406; PMCID: PMC7017465.

// 植物：基于PCR和DNA测序检测已知和候选基因的新位点
* **Forward genetic screens** are a powerful approach for identifying the genes contributing to a trait of interest. 
* 正向遗传筛选是一种有效的方法，可以识别出对某一特性有贡献的基因。
* Subsequently, mutations in the known and candidate genes were identified using a custom Snakemake script (https://github.com/Carroll-Lab/can_seq), and PCR zygosity tests were then designed and used to identify the individual mutants carrying each mutation. 



## 40-: 机器学习命令行工具，后台基于 smark
40: Dirmeier S, Emmenlauer M, Dehio C, Beerenwinkel N. PyBDA: a command line
tool for automated analysis of big biological data sets. BMC Bioinformatics.
2019 Nov 12;20(1):564. doi: 10.1186/s12859-019-3087-8. PMID: 31718539; PMCID:
PMC6849186.

// 技术要点:
- We developed a **novel machine learning command line tool** called PyBDA for automated, distributed analysis of big biological data sets.
- By using **Apache Spark** in the backend, PyBDA scales to data sets beyond the size of current applications.

https://pybda.readthedocs.io/en/latest/
https://pubmed.ncbi.nlm.nih.gov/31718539/



## 41:访问蛋白质组学数据 (MS 质谱数据库)
41: Fondrie WE, Bittremieux W, Noble WS. ppx: Programmatic Access to Proteomics
Data Repositories. J Proteome Res. 2021 Sep 3;20(9):4621-4624. doi:
10.1021/acs.jproteome.1c00454. Epub 2021 Aug 3. PMID: 34342226; PMCID:
PMC8457024.

//
- Here, we present ppx, a Python package that provides easy, programmatic access to the data stored in ProteomeXchange repositories, such as **PRIDE and MassIVE**. 
- The ppx package can be used as either a **command line tool** or a **Python package** to retrieve the files and metadata associated with a project when provided its identifier.

https://github.com/wfondrie/ppx
- http://www.proteomexchange.org/
- https://www.ebi.ac.uk/pride/
	* 引用 https://www.ebi.ac.uk/pride/markdownpage/citationpage 
- https://massive.ucsd.edu/ProteoSAFe/static/massive.jsp

---
envision [ɪnˈvɪʒn] vt. 想象；预想




## 42: 非编码突变
42: Drubay D, Gautheret D, Michiels S. A benchmark study of scoring methods for
non-coding mutations. Bioinformatics. 2018 May 15;34(10):1635-1641. doi:
10.1093/bioinformatics/bty008. PMID: 29340599.

https://github.com/Oncostat/BenchmarkNCVTools
结果
- We compared the **leading scoring tools (CADD, FATHMM-MKL, Funseq2 and GWAVA)** and some **recent competitors (DANN, SNP and SOM scores)** for their ability to discriminate assumed pathogenic variants from **assumed benign variants (using the ClinVar, COSMIC and 1000 genomes project databases)**. 
- Using the ClinVar benchmark, CADD was the best tool for detecting the pathogenic variants that are mainly located in protein coding gene regions. Using the COSMIC benchmark, FATHMM-MKL, GWAVA and SOMliver outperformed the other tools for pathogenic variants that are typically located in lincRNAs, pseudogenes and other parts of the non-coding genome. 


---
assume [əˈsjuːm]  vi. 设想；承担；采取 vt. 假定；僭取；篡夺；夺取；擅用；侵占




43: Wolf SA, Epping L, Andreotti S, Reinert K, Semmler T. SCORE: Smart Consensus
Of RNA Expression-a consensus tool for detecting differentially expressed genes
in bacteria. Bioinformatics. 2021 Apr 20;37(3):426-428. doi:
10.1093/bioinformatics/btaa681. PMID: 32717040.

// 细菌RNA-seq


44: Taravella Oill AM, Deshpande AJ, Natri HM, Wilson MA. PopInf: An Approach
for Reproducibly Visualizing and Assigning Population Affiliation in Genomic
Samples of Uncertain Origin. J Comput Biol. 2021 Mar;28(3):296-303. doi:
10.1089/cmb.2019.0434. Epub 2020 Oct 19. PMID: 33074720; PMCID: PMC7994427.

// 可视化人种SNP的PCA分析结果
- In this study, we describe a flexible computational pipeline, PopInf, to visualize principal component analysis output and assign ancestry to samples with unknown genetic ancestry, given a reference population panel of known origins. 


## 45: 贝叶斯模型分析单细胞转录本MerFish数据表达(2019)
45: Köster J, Brown M, Liu XS. A Bayesian model for single cell transcript
expression analysis on MERFISH data. Bioinformatics. 2019 Mar 15;35(6):995-1001.
doi: 10.1093/bioinformatics/bty718. Erratum in: Bioinformatics. 2019 Jul
1;35(13):2347. PMID: 30875429; PMCID: PMC6419903.

https://pubmed.ncbi.nlm.nih.gov/30875429/
https://zenodo.org/


## 46:RNA-seq(ARMOR, 2019)
46: Orjuela S, Huang R, Hembach KM, Robinson MD, Soneson C. ARMOR: An
<u>A</u>utomated <u>R</u>eproducible <u>MO</u>dular Workflow for Preprocessing
and Differential Analysis of <u>R</u>NA-seq Data. G3 (Bethesda). 2019 Jul
9;9(7):2089-2096. doi: 10.1534/g3.119.400185. PMID: 31088905; PMCID: PMC6643886.

https://pubmed.ncbi.nlm.nih.gov/31088905/
https://github.com/csoneson/ARMOR //snakemake 怎么使用conda?

摘要: 输入fq，输出 shiny 网页
- We present ARMOR, which performs an end-to-end **RNA-seq data analysis**, from raw read files, via quality checks, alignment and quantification, to differential expression testing, geneset analysis and browser-based exploration of the data. 
- ARMOR is implemented using the **Snakemake** workflow management system and leverages **conda environments**; Bioconductor objects are generated to facilitate downstream analysis, ensuring seamless integration with many R packages. 




47: Werner J, Géron A, Kerssemakers J, Matallana-Surget S. mPies: a novel
metaproteomics tool for the creation of relevant protein databases and
automatized protein annotation. Biol Direct. 2019 Nov 14;14(1):21. doi:
10.1186/s13062-019-0253-x. PMID: 31727118; PMCID: PMC6854712.

// 微生物蛋变质组数据工具
https://github.com/johanneswerner/mPies/




## 48: 比较scRNA-seq自动细胞类型注释工具(2019)
48: Abdelaal T, Michielsen L, Cats D, Hoogduin D, Mei H, Reinders MJT, Mahfouz
A. A comparison of automatic cell identification methods for single-cell RNA
sequencing data. Genome Biol. 2019 Sep 9;20(1):194. doi:
10.1186/s13059-019-1795-z. PMID: 31500660; PMCID: PMC6734286.

摘要:
- A major limitation in most analysis pipelines is the reliance on manual annotations to **determine cell identities**, which are time-consuming and irreproducible. 
- Here, we benchmarked **22 classification methods** that automatically assign cell identities including single-cell-specific and general-purpose classifiers.
- 评价指标: We use 2 experimental setups to evaluate the performance of each method for **within dataset predictions (intra-dataset)** and **across datasets (inter-dataset)** based on **accuracy, percentage of unclassified cells, and computation time**.
- We further evaluate the methods' **sensitivity to the input features, number of cells per population, and their performance across different annotation levels and datasets**.
- The general-purpose **support vector machine classifier** has overall the best performance across the different experiments.

https://github.com/tabdelaal/scRNAseq_Benchmark




---
49: Milosavljevic S, Kuo T, Decarli S, Mohn L, Sese J, Shimizu KK, Shimizu-
Inatsugi R, Robinson MD. ARPEGGIO: Automated Reproducible Polyploid EpiGenetic
GuIdance workflOw. BMC Genomics. 2021 Jul 17;22(1):547. doi:
10.1186/s12864-021-07845-2. PMID: 34273949; PMCID: PMC8285871.

// 多倍体表观(甲基化)检测
https://github.com/supermaxiste/ARPEGGIO



## 50: ChIP/ATAC 流程(IF=7.6, 2021)
50: Qiu X, Feit AS, Feiglin A, Xie Y, Kesten N, Taing L, Perkins J, Gu S, Li Y,
Cejas P, Zhou N, Jeselsohn R, Brown M, Shirley Liu X, Long HW. CoBRA:
Containerized Bioinformatics Workflow for Reproducible ChIP/ATAC-seq Analysis.
Genomics Proteomics Bioinformatics. 2021 Jul 17:S1672-0229(21)00154-6. doi:
10.1016/j.gpb.2020.11.007. Epub ahead of print. PMID: 34284136.

https://bitbucket.org/cfce/cobra

摘要：
- Here we present **Containerized Bioinformatics workflow for Reproducible ChIP/ATAC-seq Analysis (CoBRA)**, a modularized computational workflow which quantifies ChIP-seq and ATAC-seq peak regions and performs unsupervised and supervised analyses. 



## 51: scRNA-seq 网页处理平台（IF=3.9, 2021）
51: Hoek A, Maibach K, Özmen E, Vazquez-Armendariz AI, Mengel JP, Hain T, Herold
S, Goesmann A. WASP: a versatile, web-accessible single cell RNA-Seq processing
platform. BMC Genomics. 2021 Mar 18;22(1):195. doi: 10.1186/s12864-021-07469-6.
PMID: 33736596; PMCID: PMC7977290.

摘要：
- The processing pipeline is realized as a **Snakemake** workflow, while an **R Shiny** application is provided for interactive result visualization. 
- WASP supports comprehensive analysis of gene expression matrices, including **detection of differentially expressed genes, clustering of cellular populations and interactive graphical visualization of the results**. 
- The **R Shiny application** can be used with gene expression matrices generated by the WASP pipeline, as well as with externally provided data from other sources.
- To simplify usage, WASP is provided as a **Docker container**. 


## 52: Covid-19基因组抽样工具，方便聚类
52: Bolyen E, Dillon MR, Bokulich NA, Ladner JT, Larsen BB, Hepp CM, Lemmer D,
Sahl JW, Sanchez A, Holdgraf C, Sewell C, Choudhury AG, Stachurski J, McKay M,
Simard A, Engelthaler DM, Worobey M, Keim P, Caporaso JG. Reproducibly sampling
SARS-CoV-2 genomes across time, geography, and viral diversity. F1000Res. 2020
Jun 29;9:657. doi: 10.12688/f1000research.24751.2. PMID: 33500774; PMCID:
PMC7814287.

https://caporasolab.us/genome-sampler/intro.html
- We present genome-sampler, a software package that supports **sampling collections of viral genomes** across multiple axes including time of genome isolation, location of genome isolation, and viral diversity.



53: Astorkia M, Hernandez M, Bocs S, Armentia EL, Herran A, Ponce K, León O,
Morales S, Quezada N, Orellana F, Wendra F, Sembiring Z, Asmono D, Ritter E.
Association Mapping Between Candidate Gene SNP and Production and Oil Quality
Traits in Interspecific Oil Palm Hybrids. Plants (Basel). 2019 Sep 26;8(10):377.
doi: 10.3390/plants8100377. PMID: 31561627; PMCID: PMC6843369.

// 植物 SNP 与 出油质量。


---
54: Dall'Olio D, Curti N, Fonzi E, Sala C, Remondini D, Castellani G, Giampieri
E. Impact of concurrency on the performance of a whole exome sequencing
pipeline. BMC Bioinformatics. 2021 Feb 9;22(1):60. doi:
10.1186/s12859-020-03780-3. Erratum in: BMC Bioinformatics. 2021 Jun
1;22(1):292. PMID: 33563206; PMCID: PMC7874478.

// 全外显子测序流程中，并发对性能的影响。
- 工作流软件的好处：Workflow management systems allow parallelization and a more efficient usage of computational power. 
- Practically, we tested both strategies on a whole exome sequencing pipeline applied to **three publicly available matched tumour-normal sample pairs of gastrointestinal stromal tumour**. 
- The CES achieved speedups in latency up to 2-2.4 compared to the NPS.




---
55: Muñoz-Benavent M, Hartkopf F, Van Den Bossche T, Piro VC, García-Ferris C,
Latorre A, Renard BY, Muth T. gNOMO: a multi-omics pipeline for integrated host
and microbiome analysis of non-model organisms. NAR Genom Bioinform. 2020 Aug
5;2(3):lqaa058. doi: 10.1093/nargab/lqaa058. Erratum in: NAR Genom Bioinform.
2020 Oct 09;2(4):lqaa083. PMID: 33575609; PMCID: PMC7671378.

// 多组学整合分析，宿主和微生物，非模式生物。



56: Pranzatelli TJF, Michael DG, Chiorini JA. ATAC2GRN: optimized ATAC-seq and
DNase1-seq pipelines for rapid and accurate genome regulatory network inference.
BMC Genomics. 2018 Jul 31;19(1):563. doi: 10.1186/s12864-018-4943-z. Erratum in:
BMC Genomics. 2019 Jan 15;20(1):44. PMID: 30064353; PMCID: PMC6069842.

// ATAC-seq and DNase1-seq 分析，快速获取基因调控网络推断



---
57: Beisser D, Graupner N, Grossmann L, Timm H, Boenigk J, Rahmann S. TaxMapper:
an analysis tool, reference database and workflow for metatranscriptome analysis
of eukaryotic microorganisms. BMC Genomics. 2017 Oct 16;18(1):787. doi:
10.1186/s12864-017-4168-6. PMID: 29037173; PMCID: PMC5644092.

// 真核微生物转录组，分析工具、参考数据库、工作流程。

https://bitbucket.org/dbeisser/taxmapper
https://bitbucket.org/dbeisser/taxmapper





## 58: nanopore的CpG甲基化检测流程的比较(NC, 2021)
58: Yuen ZW, Srivastava A, Daniel R, McNevin D, Jack C, Eyras E. Systematic
benchmarking of tools for CpG methylation detection from nanopore sequencing.
Nat Commun. 2021 Jun 8;12(1):3438. doi: 10.1038/s41467-021-23778-6. PMID:
34103501; PMCID: PMC8187371.

https://github.com/comprna/METEORE

- We found that tools have a tradeoff between false positives and false negatives and present a high dispersion with respect to the expected methylation frequency values.






---
59: Deneke C, Brendebach H, Uelze L, Borowiak M, Malorny B, Tausch SH. Species-
Specific Quality Control, Assembly and Contamination Detection in Microbial
Isolate Sequences with AQUAMIS. Genes (Basel). 2021 Apr 26;12(5):644. doi:
10.3390/genes12050644. PMID: 33926025; PMCID: PMC8145556.

// 微生物组装与污染监测


---
60: Prasanna A, Niranjan V. MutVis: Automated framework for analysis and
visualization of mutational signatures in pathogenic bacterial strains. Infect
Genet Evol. 2021 Jul;91:104805. doi: 10.1016/j.meegid.2021.104805. Epub 2021 Mar6. PMID: 33689914.

// 致病微生物的突变图谱的 自动分析与可视化



## 61: 混库scRNA-seq使实验试剂 (IF=6.5, 2021)
61: Weber LM, Hippen AA, Hickey PF, Berrett KC, Gertz J, Doherty JA, Greene CS,
Hicks SC. Genetic demultiplexing of pooled single-cell RNA-sequencing samples in
cancer facilitates effective experimental design. Gigascience. 2021 Sep
22;10(9):giab062. doi: 10.1093/gigascience/giab062. PMID: 34553212; PMCID:
PMC8458035.

https://github.com/lmweber/snp-dmx-cancer

混库测序的优势：便宜，减少批次效应。
- 本文使用天然突变(natural genetic variation ) 作为区分标准，做了方法学检测。
- Here, we performed in silico benchmark evaluations by combining raw sequencing reads from multiple single-cell samples in high-grade serous ovarian cancer, which has a high copy number burden, and lung adenocarcinoma, which has a high tumor mutational burden. 
- Our results confirm that genetic demultiplexing tools can be effectively deployed on cancer tissue using a pooled experimental design, although high proportions of ambient RNA from cell debris reduce performance.

---
ambient [ˈæmbiənt]  adj. 周围的；外界的；环绕的；产生轻松氛围的 n. 周围环境；一种背景音乐
debris [ˈdebriː; ˈdeɪbriː]  n. 残骸，碎片





62: Cifani P, Dhabaria A, Chen Z, Yoshimi A, Kawaler E, Abdel-Wahab O, Poirier
JT, Kentsis A. ProteomeGenerator: A Framework for Comprehensive Proteomics Based on de Novo Transcriptome Assembly and High-Accuracy Peptide Mass Spectral Matching. J Proteome Res. 2018 Nov 2;17(11):3681-3692. doi:
10.1021/acs.jproteome.8b00295. Epub 2018 Oct 19. PMID: 30295032; PMCID:
PMC6727203.

// 转录组组装，多肽质谱MS 的对应。
- We applied this method for the proteogenomic analysis of splicing factor SRSF2 mutant leukemia cells, demonstrating high-confidence identification of non-canonical protein isoforms arising from alternative transcriptional start sites, intron retention, and cryptic exon splicing as well as improved accuracy of genome-scale proteome discovery. 
- Finally, ProteomeGenerator is implemented as a **Snakemake** workflow within a **Singularity container** for one-step installation in diverse computing environments, thereby enabling open, scalable, and facile discovery of sample-specific, non-canonical, and neomorphic biological proteomes.





63: McNichol J, Berube PM, Biller SJ, Fuhrman JA. Evaluating and Improving Small
Subunit rRNA PCR Primer Coverage for Bacteria, Archaea, and Eukaryotes Using
Metagenomes from Global Ocean Surveys. mSystems. 2021 Jun 29;6(3):e0056521. doi:
10.1128/mSystems.00565-21. Epub 2021 Jun 1. PMID: 34060911; PMCID: PMC8269242.

// 海洋调查中的微生物

// End, 2021/11/3