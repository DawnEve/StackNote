# paper
> Review | Genome Biol | 2020 Feb 3;21(1):22. doi: 10.1186/s13059-020-1929-3.
> **From reads to insight: a hitchhiker's guide to ATAC-seq data analysis**
> https://pubmed.ncbi.nlm.nih.gov/32014034/
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6996192/
> https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-1929-3
> Australian Centre for Blood Diseases, Central Clinical School, Monash University, Melbourne, VIC, Australia.

## 我的评论: 
内容丰富，步骤清晰，提到很多工具，并给出初步建议。是入门ATAC-seq分析的好资料。
语言地道，值得学习模仿。


# Abstract
Assay of Transposase Accessible Chromatin sequencing (ATAC-seq) is widely used in studying chromatin biology, but a comprehensive review of the analysis tools has not been completed yet. 

Here, we discuss the major steps in ATAC-seq data analysis, 
- including pre-analysis (quality check and alignment), 
- core analysis (peak calling), 
- and advanced analysis (peak differential analysis and annotation, motif enrichment, footprinting, and nucleosome position analysis). 
- We also review the reconstruction of transcriptional regulatory networks with **multiomics data** and highlight the current challenges of each step. 

Finally, we describe the potential of single-cell ATAC-seq and highlight the necessity of developing ATAC-seq specific analysis tools to obtain biologically meaningful insights.



# Introduction
## 1.三层压缩:  核小体-染色质-染色体
Mammalian DNA is highly condensed through **three major hierarchical scales**; the first is the **nucleosome** which then wraps into **chromatin** leading to the third hierarchy, the **chromosome** [1,2,3,4,5,6].

## 2. Tn5 切开一个9bp的口
A schematic diagram of this cutting-edge technology in fundamental and translational research is shown in Fig. 3a. 

Briefly, ATAC-seq incorporates a genetically engineered hyperactive **Tn5 transposase that simultaneously cuts open chromatin leaving a 9-bp staggered nick and ligates high-throughput sequencing adapters to these regions**. 

During this process, the nick is repaired, leaving a 9-bp duplication [30, 31]. Paired-end sequencing is then performed to facilitate higher unique alignment rates of these open regions [32].

## 3. 起始量低，无需片段筛选(可识别核小体位置)
The hyperactivity of Tn5 transposase makes the ATAC-seq protocol a simple, time-efficient method that requires **500–50,000 cells** [9]. 

Because ATAC-seq does **not involve rigorous size selection** during library preparation, it can also **identify nucleosome positions** using fragments representing nucleosome monomer and multi-mers [9].
> 9. Transposition of native chromatin for fast and sensitive epigenomic profiling of open chromatin, DNA-binding proteins and nucleosome position.
Buenrostro JD, Giresi PG, Zaba LC, Chang HY, Greenleaf WJ
Nat Methods. 2013 Dec; 10(12):1213-8.


## 4. 单细胞 scATAC-seq: 基于流式、微流控、孔板法
Recently, single-cell ATAC-seq (scATAC-seq) has been described, using 
- fluorescence-activated cell sorting (FACS), 
- microfluidic, 
- and nano-well-based approaches [33,34,35]. 
 
ScATAC-seq can be applied in multiple situations including clinical specimens and developmental biology to study the heterogenous cell populations at single-cell resolution [23, 29].

## 5.小结：综述范围
This review will cover the four most important steps listed in the flowchart (Fig. 2). These include
- (1) pre-analysis (quality control (QC) and alignment), 
- (2) core analysis (peak calling), 
- (3) advanced analysis at the level of peaks, motifs, nucleosomes, and TF footprints, 
- and (4) **integration** with multiomics data to reconstruct regulatory networks. 

These steps will allow researchers to conduct robust analysis on ATAC-seq data and generate more biological meaningful results. 

Finally, we will present the challenges and opportunities of ATAC-seq analysis and scATAC-seq.



# 图片
## 图1 ATAC-seq概述
![0706_ATAC_overview](/data/2021/images/07/0706_ATAC_overview.png)
> fig. 1 Overview of ATAC-seq datasets increase and sample output for pre-analysis and advanced analysis. 
> a The number of ATAC-seq datasets, ATAC-seq publications, DNase-seq datasets, FAIRE-seq datasets, and MNase-seq datasets in PubMed from 1 Jan 2013 to 1 Oct 2019. 
> b Typical fragment size distribution plot shows enrichment around 100 and 200 bp, indicating nucleosome-free and mono-nucleosome-bound fragments. 
> c Typical TSS enrichment plot shows that nucleosome-free fragments are enriched at TSS, while mono-nucleosome fragments are depleted at TSS but enriched at flanking regions. 
> d Typical peak annotation pie chart shows that more than half of the peaks fall into enhancer regions (distal intergenic and intronic regions), and only around 25% of the peaks are in promoter regions. TSS: transcription start site

a说ATAC文章增长的快。
b，c说ATAC-seq插入片段长度范围：100以下一个峰(无核小体区域的片段)，200附近一个峰(单个核小体片段)
d 说只有25%在启动子区。最大的部分在基因间区、内含子区。

以上b-d都可以作为质控图。




## 图2 四大步骤

![0706_ATAC_Roadmap.png](/data/2021/images/07/0706_ATAC_Roadmap.png)
> Fig. 2 Roadmap of a typical ATAC-seq analysis. Four major steps are listed, including pre-analysis, core analysis, advanced analysis, and integration with multiomics data. 
> Pre-analyses include pre-alignment QC, alignment and post-alignment processing, and QC. 
> Core analysis includes peak calling.
> Advanced analyses include peak, motif, footprint, and nucleosome analysis. 
> Multiomics data integration includes integration with ChIP-seq and RNA-seq data and regulatory network reconstruction. 
> Text in each box emphasizes the important considerations in each analysis step. We suggest researchers start with **FastQC, trimmomatic, and BWA-MEM for pre-analysis, MACS2 for peak calling, csaw for peak differential analysis, ChIPseeker for annotation and visualization, MEME suite for motif detection and enrichment, HMMRATAC for nucleosome detection, HINT-ATAC for footprint analysis, and PCEA for regulatory network reconstruction with RNA-seq**. QC: quality check; TSS: transcription start site; TF: transcription factor; DEG: differentially expressed gene


## 图3 真实ATAC数据和call peak工具结果示例
![0706_ATAC_real.png](/data/2021/images/07/0706_ATAC_real.png)
> Fig .3 Schematic and real ATAC-seq data from core and advanced analyses. 
> **a** In an ATAC-seq experiment, Tn5 binds and cuts open chromatin and simultaneously ligates adapters. The fragments are sequenced to identify open chromatin regions (black) and footprints (blue). NFR fragments represent the open chromatin, while nucleosome-bound fragments reflect nucleosome positions (gray shaded tracks). 
> **b** Real ATAC-seq data. Signal tracks are generated from BAM file (Raw) and bias corrected by HINT-ATAC (Bias corrected). Peak sets are generated from three types of peak callers, count-based (red), shape-based (blue), and HMM based (black). For MACS2, two strategies (paired-end and shift-extend) are used. For HMMRATAC, the extended ranges at both sides indicate the nucleosomes. The HINT-ATAC track is footprints detected by HINT-ATAC, while the RUNX1 motif track is the footprints matching RUNX1 motif from JASPAR database. The K562 ChIP-seq track is the RUNX1 ChIP-seq from ENCODE, indicating the footprint detection can recapitulate the real TF binding. The right box illustrates the shift-extend approach. First, it shifts both ends s-bp towards outside, and then extend 2s-bp towards inside. 
> **c** Illustration of network reconstruction by ATAC-seq data. The presence of TF can be represented by motifs or footprints detected by aforementioned methods. **NFR: nucleosome-free region**; TF: transcription factor; HMM: hidden Markov model



# 要点与工具介绍

## 1.Pre-alignment quality control(FastQC 结果、去接头)

The pre-alignment QC and read alignment steps are standard for most high-throughput sequencing technologies. For example, FastQC [39] can be used to visualize base quality scores, GC content, sequence length distribution, sequence duplication levels, k-mer overrepresentation and contamination of primers and adapters in the sequencing data. 
- An overall high base quality score with a slight drop towards the 3′ end of sequencing reads is acceptable. 
- No obvious deviation from expected GC content and sequence read length should be observed. 
- Moreover, the metrics should be homogeneous among all samples from the same experimental batch and sequencing run.

朝着3‘端测序质量又略微下降是可接受的。
？期望GC和序列长度不能有明显偏差
各个样本间、批次间应该均衡。


---
大多去接头工具要手动输入接头序列，而 trimmomatic 内置Nextera和TruSeq的接头序列。
去掉低质量的碱基。
作者的比较发现，这几个去接头工具之间差不多。

Most adapter removal tools employ different variations of dynamic programming, such as cutadapt [40], AdapterRemoval v2 [41], Skewer [42], and trimmomatic [43] all requiring input of known adapter sequences. 
For example, using **trimmomatic with built-in adapter sequences** for Nextera and TruSeq library would be a straightforward step. 
**Low-quality bases** can also be eliminated using these tools. 

From our experience, read trimming tools are generally comparable in performance of efficient removal of low-quality and contaminating adapter sequences.



## 2.Alignment
去接头后再做QC。
After read trimming, FastQC can be performed again to check the successful removal of adapter and low-quality bases. Trimmed reads are then mapped to a reference genome. 

常用的比对工具:
**BWA-MEM [44] and Bowtie2** [45] aligners are memory-efficient and fast for short paired-end reads.

The soft-clip strategy from both aligners allows the overhang of bases on both ends of reads which can further increase unique mapping rates [46]. 

ATAC-seq的uniq map 率一般要高于 80%。
We suggest that a unique mapping rate over 80% is typical for a successful ATAC-seq experiment. 

哺乳动物来说，染色质检测 50million reads，TF足迹分析要高达200million reads。
For mammalian species, the suggested minimum number of mapped reads is 50 million for open chromatin detection and differential analysis, and 200 million for TF footprinting based on empirical and computational estimations [10, 12, 47,48,49].




## 3.Post-alignment processing and quality control

比对后对bam文件做质控: uniq map比率，重复序列百分数，插入片段长度分布等。
After sequence alignment, as in most DNA sequencing data, basic metrics of the aligned BAM file, such as unique mapping reads/rates, duplicated read percentages, and fragment size distribution can be collected using Picard [50] and SAMtools [51]. 

去除不配对、低质量的比对
Additionally, reads should be removed if they are improperly paired or of low mapping quality. 

去除线粒体基因组、ENCODE blacklist region上的比对。
The mitochondrial genome, which is more accessible due to the lack of chromatin packaging [52], and the ENCODE blacklisted regions [53, 54] often have extremely high read coverage, and should also be discarded [33]. 

去除可能的PCR重复，提高生物学可重复性。
Duplicated reads, which are likely to have arisen as PCR artifacts, should also be removed to significantly improve biological reproducibility [48]. 

以上步骤能提高检测开放区的效力，降低假阳性。
These steps will together improve the power of open chromatin detection and produce fewer false positives.


---
还有其他ATAC特有的质控点。
There are additional ATAC-seq-specific quality metrics that need to be evaluated. 

(插入片段长度分布) ATAC-seq插入片段长度应该有100bp一下的非核小体区(NFR)、以及200倍数的核小体区(Fig.1b)。
Typically, a successful ATAC-seq experiment should generate a fragment size distribution plot with decreasing and periodical peaks corresponding to the nucleosome-free regions (NFR) (< 100 bp) and mono-, di-, and tri-nucleosomes (~ 200, 400, 600 bp, respectively) (Fig. 1b) [9, 55]. 

(比对位置在TSS的分布) NFR应该在TSS富集，而跨核小体的读段则在TSS附近有一个凹陷。
Fragments from the NFR are expected to be enriched around the transcription start site (TSS) of genes, while fragments from nucleosome-bound regions are expected to be depleted at TSS with a slight enrichment of flanking regions around TSS (Fig. 1c) [55]. 

以上可用ATACseqQC质控。
These can be evaluated with the tool **ATACseqQC** [55]. 

---
考虑到Tn5酶的9bp切刻，需要对正链+4bp，负链-5bp。方便做碱基分辨率的TF足迹和motif分析。
Lastly, reads should be shifted + 4 bp and − 5 bp for positive and negative strand respectively, to account for the 9-bp duplication created by DNA repair of the nick by Tn5 transposase and achieve base-pair resolution of TF footprint and motif-related analyses [9, 33, 56]. 

以上大多QC都可以集成到 MultiQC，得到一个用户友好的交互式报告。
Most aforementioned QC and analysis reports can be integrated using MultiQC [57] for an aggregated, user-friendly, and interactive presentation.


<br>推荐工具流：
In our experience, the following pipeline performs reasonably well: **FastQC➔ trimmomatic➔BWA-MEM➔ATACseqQC**, and we would suggest this as a good starting point for processing of ATAC-seq data.



## 4.Core analysis: peak calling

Currently, **MACS2** is the default peak caller of the ENCODE ATAC-seq pipeline.

另外，直接把ATAC-seq的PE片段堆叠起来，既有无核小体区域，也有有核小体的区域。
Moreover, the direct pile-up of paired-end fragments from ATAC-seq represents both nucleosome-free and nucleosome-bound regions (Fig. 3a). 

检测开放区，可以把NFR区域reads堆叠起来，或者使用 shift-extend 方法(考虑经过extension size 平滑过的切割事件)。
Open chromatin can be detected by piling up short fragments from NFRs or using a shift-extend approach, which tries to count the cutting events smoothed by the extension size (Fig. 3b, right box) [61, 62]. 
这样更通用，所有ChIP-seq的peak caller都可以用，而且不受插入片段大小的影响。
This approach is more generic, as it can be applied to almost all ChIP-seq peak callers and is not affected by the fragment size of data.


---
Currently, HMMRATAC is the only peak caller that is exclusive for ATAC-seq [61]. 

It employs a three-state semi-supervised hidden Markov model (HMM) to simultaneously segment the genome into open chromatin regions with high signal, nucleosomal regions with moderate signals, and background regions with low signals, respectively. Although HMMRATAC is computationally more intensive, it performs better than MACS2 and F-seq and provides additional nucleosome position information at the same time.


---
Tn5 切割可能有bias

Similar to DNase-seq, the enzymatic cut by Tn5 will introduce bias due to binding preference [30, 31, 77], which is associated with GC content and should be adjusted when calling peaks [22, 56].


---
如何扩展到平行重复？

Most tools can be extended to replicates by either **pooling raw reads** or **combining peak sets** from individual samples. Replicates can also be integrated using mixture models [72].


<br>
we suggest using actively supported tools, such as **MACS2 and HOMER** for peak calling, and if computational resources are sufficient, HMMRATAC could be used for ATAC-seq peak calling.






## 5. Advanced analysis
四个层次的分析：峰、 motif、核小体、TF足迹。
third major step involves interpretation at four different levels: peak, motif, nucleosome, and TF footprint. However, only a few tools are designed specifically for ATAC-seq.


### Peak differential analysis 峰差异

比较差异的峰，还没有ATAC专门的工具。
直接方法就是找候选区域（共有峰、划分bin）、标准化、计数该区域的读段数，然后和其他条件进行统计学比较。

A straightforward approach would be to find the candidate regions (consensus peaks or binned genome), normalize, and count the fragments in these regions and compare with other conditions statistically [80]. 

This could be achieved manually or using automated tools, such as **consensus peak** or the **sliding window-based tools** (Fig. 4b).

> Fig. 4 略 Summary of peak calling and peak differential analysis tools. 


---
这3个工具使用 负二项分布，需要生物学重复来估计离散程度。
Among the consensus peak-based tools, **HOMER**,** DBChIP** [81], and **DiffBind** [82] rely on RNA-seq differential expression (DE) analysis packages, such as edgeR [83], DESeq [84], or DESeq2 [85]. Thus, they all assume a negative binomial (NB) distribution and require biological replicates to estimate dispersion. 

---
合并样本，找共有峰能降低假阳性，这是 HOMER 的默认设置。
It has been suggested to **call consensus peaks by pooling all samples** to reduce false positive differential peaks which is the default behavior for HOMER [86]; 

而DBChIP and DiffBind是基于交集(忽略样本或条件特有峰)和并集(更低的P值和更多假阳性)找共有峰的。
however, DBChIP and DiffBind generate consensus peaks by **intersection or union operations**. Nevertheless, an intersection operation ignores sample or condition specific peaks, and a union operation often shows lower P values and more false positives [86].


---
滑动窗不需要提前生成峰的集合。它先对基因组划分bin，会有更多的假阳性，需要更严谨的过滤条件和FDR控制。
Sliding window approaches do not require pre-generated peak sets. Instead, they evaluate all windows along the binned genome and tend to yield more false positives and require stringent filtering and false discovery rate (FDR) control. 

这几种软件实用负二项检验、G检验、卡方检验，依赖重复。
**PePr** [87] and **DiffReps** [88] use NB test, G-test, or chi-square test, depending on the availability of replicates. 

对于更宽的峰，ChIPDiff实用 HMM 模型考虑临近窗口的相关性。
For broader peaks, **ChIPDiff** [89, 90] employs an HMM to account for correlation between adjacent windows.

这三个工具不依赖DEG分析包。
These three tools are independent of RNA-seq DE analysis packages. 

---
In contrast, **csaw** was developed by extending edgeR framework to binned genomes [91]. The sliding window approach is thought to give more unbiased estimates of read count across the genome but requires rigorous FDR control to properly merge adjacent windows.



### Peak annotation 峰注释

通常按照最近的基因或元素来注释。
After obtaining peak sets, annotation of peaks can associate chromatin accessibility with gene regulation. Normally, peaks are annotated by the nearest genes or regulatory elements.

三个工具广泛用于把峰注释到最近的、或重合的基因、外显子、内含子、启动子、5UTR、3UTR或其他基因区域。
**HOMER**, **ChIPseeker** [92], and **ChIPpeakAnno** [93] are widely used to assign peaks to nearest or overlapping gene, exon, intron, promoter, 5′ untranslated region (UTR), 3′ UTR, and other genomic features.

基因位置还可视化为一个饼图(Fig. 1d)。
**ChIPseeker** and **ChIPpeakAnno** also have abundant visualization functions for interpreting annotation results, such as a pie chart of annotated genomic features (example in Fig. 1d). 


典型的，ATAC-seq的峰代表着不同顺式调控元件的混合， 包括enhancers and promoters。 
Typically, peaks from ATAC-seq will represent a mixture of different cis-regulatory elements including enhancers and promoters [12]. 

---
获得基因列表后，可以做GO分析。
After obtaining the list of genomic features such as the nearest genes, functional enrichment analysis can also be performed **using databases such as Gene Ontology (GO) [94], KEGG [95], and Reactome** [96]. In general, peak annotation generates biological and functionally meaningful results for further investigation.

> 94. Expansion of the Gene Ontology knowledgebase and resources.
The Gene Ontology Consortium.
Nucleic Acids Res. 2017 Jan 4; 45(D1):D331-D338.
> 95. The KEGG resource for deciphering the genome.
Kanehisa M, Goto S, Kawashima S, Okuno Y, Hattori M
Nucleic Acids Res. 2004 Jan 1; 32(Database issue):D277-80.
> 96. The Reactome Pathway Knowledgebase.
Fabregat A, Jupe S, Matthews L, Sidiropoulos K, Gillespie M, Garapati P, Haw R, Jassal B, Korninger F, May B, Milacic M, Roca CD, Rothfels K, Sevilla C, Shamovsky V, Shorser S, Varusai T, Viteri G, Weiser J, Wu G, Stein L, Hermjakob H, D'Eustachio P
Nucleic Acids Res. 2018 Jan 4; 46(D1):D649-D655.






### Motifs 

This sequence is known as a motif and the binding positions are called TF binding sites (TFBS). 

---
(1) 人有1600个TF，多半通过实验或计算获取到了motif。
There are approximately 1600 TFs in human, and more than half have motifs obtained experimentally or computationally [97]. 
> 97. Review The Human Transcription Factors.
Lambert SA, Jolma A, Campitelli LF, Das PK, Yin Y, Albu M, Chen X, Taipale J, Hughes TR, Weirauch MT
Cell. 2018 Feb 8; 172(4):650-665.


---
(2) Motif database and scan
JASPAR [105] contain multiple species and can be easily retrieved using API.
CIS-BP [108] and TRANSFAC [109] contain eukaryotic TF motifs, 
HOCOMOCO [110] focuses on human and mouse, 
and RegulonDB [111] is specifically for E. coli. 


---
The motif information is mainly stored in text format, for example, as a position weight matrix (PWM). **HOMER** and Bioconductor packages **TFBSTools** [112] and **motifmatchr** [113] are able to search given nucleotide sequences for putative TFBSs using PWM. 

Another widely used tool is **MEME suite** [115, 116], which includes 
- FIMO [117] to search for individual motifs, 
- MAST [118] for aggregating search results from multiple motifs, 
- and MCAST [119] to infer regulatory modules formed by multiple motifs. 
These tools generate a list of putative TFBSs based on statistical matching. 

Among them, MEME suite and PWMScan are more accessible owing to their web application interfaces.



---
(3) Motif enrichment and activity analysis

不同方法采用不同的统计学模型，检验峰中的motif频率。
HOMER 超几何检验
MEME-AME 秩和检验。

Based on aforementioned motif search tools, the position and frequency of motifs in each peak region can be obtained and compared to a random background or another condition. 
- HOMER uses the hypergeometric test, 
- while MEME-AME [120] uses the rank-sum test to compare motif frequencies within peaks. 

MEME-CentriMo [121] further identifies motifs enriched near peak centers. DAStk [62] generates a **MD score (motif displacement score)** [122]. This is achieved by calculating the ratio of motif occurrence within a small window (150 bp) to a large radius (1500 bp) from each peak center. The MD score can also be compared across different conditions with a Z-test. 

These methods employ different statistical tests to compare the motif frequency in peaks and the background regions.



### Footprints 足迹
染色质开放区，被TF占着的部分，Tn5切不到，形成一个凹陷。
足迹能做调控网络分析。
足迹不好做。要求很高。

Another way to decipher the TF regulation is to use footprints. **A footprint in ATAC-seq refers to a pattern where an active TF binds to DNA and prevents Tn5 cleavage within the binding site. This leaves a relative depletion within the open chromatin region** (Fig. 3a) [47, 126, 127]. Thus, footprints of actively bound TFs can be used to reconstruct a regulatory network specifically for certain samples.


### Nucleosome positioning 核小体位置
核小体147bp长，通过改变染色质可接近性影响TF结合。
The nucleosome consists of a histone octamer complexed with approximately 147 bp of DNA (Fig. 3a) and affects TF binding by altering chromatin accessibility [2, 103, 148]. 

在ATAC-seq中，长片段就是有核小体的区域。比着开放区reads少很多。
In a standard ATAC-seq library, longer fragments correspond to nucleosome-associated regions (Fig. 3a) [9]. There are analysis tools developed to detect regions where these nucleosomal fragments are enriched. However, Schep et al. showed that nucleosome detection in ATAC-seq was more difficult than in MNase-seq data, due to the deceased read coverage beyond the open chromatin regions [149].





## 6. 整合分析 Integration with multiomics data to reconstruct regulatory networks

### Integration with ChIP-seq
ATAC-seq的峰通常比ChIP-seq的要宽。通常可以互相印证。
Because open chromatin is the pre-requisite for most TFs to bind, ATAC-seq peaks generally overlap with TF ChIP-seq peaks but are often broader. Thus, TF ChIP-seq and ATAC-seq can mutually validate the quality and reliability of each other within the same experimental system [157]. 

可以先做ATAC-seq，再做TF ChIP-seq，因为前者简单、其实样本低。
We foresee ATAC-seq to be a pioneer assay before specific TF ChIP-seq, due to the ease of the protocol and less sample requirement.


### Integration with RNA-seq

研究人员很想定性或定量染色质开放与基因表达水平的关系。
Researchers are also interested in qualitatively or quantitatively associating changes in chromatin accessibility with changes in gene expression by RNA-seq. 

直觉上，可以看看DE gene是否在其TSS附近有染色质可接近性的差异。
Intuitively, researchers can discover whether DE genes also have significantly differential chromatin accessibility surrounding the respective TSS [159]. 
> 159. Integration of ATAC-seq and RNA-seq identifies human alpha cell and beta cell signature genes.
Ackermann AM, Wang Z, Schug J, Naji A, Kaestner KH
Mol Metab. 2016 Mar; 5(3):233-244.

或者，DE gene是否受染色质开放区特异的motif和足迹对应的TF调控。
Moreover, DE genes can be inferred to be regulated by TF associated with specific motifs or footprints in open chromatin. 

---
单细胞水平，
At the single cell level, Litzenburger et al. attempted to combine scRNA-seq and scATAC-seq to identify the target genes whose expression varies when GATA binding site accessibility changes [160]. 

Cao et al. used a LASSO regression model to identify distal peaks which account for the target gene expression change [161]. 

Coupled clustering combining scATAC-seq and scRNA-seq was shown to improve accuracy in subpopulation detection [162]. Integration of ATAC-seq with RNA-seq aids to decipher gene regulation and cellular heterogeneity.













# 单词与句子

hitchhiker [ˈhɪtʃə(r)] n. 搭便车的旅行者；顺便插入的广告
interrogate  [ɪnˈterəɡeɪt] vt. 审问；质问；[计] 询问
hematopoiesis  [ˌhemətəʊpɔɪˈiːsɪs]  n. 造血作用；血细胞发生
schizophrenia  [ˌskɪtsəˈfriːniə] n. [内科] 精神分裂症
incorporate  [ɪnˈkɔːpəreɪt] vt. 包含，吸收；体现；把……合并

impediment  [ɪmˈpedɪmənt]  n. 口吃；妨碍；阻止
integration  [ˌɪntɪˈɡreɪʃn]  n. 集成；综合
recapitulate  [ˌriːkəˈpɪtʃuleɪt]  vi. 概括；重述要点；摘要
stitch [stɪtʃ] n. 针脚，线迹；一针 vt. 缝，缝合
discrepancy  [dɪˈskrepənsi]  n. 不符；矛盾；相差

putative  [ˈpjuːtətɪv]  adj. 推定的，假定的
negligible  [ˈneɡlɪdʒəbl] adj. 微不足道的，可以忽略的
hurdle  [ˈhɜːdl]  n. 障碍；栏；跳栏
ensemble  [ɒnˈsɒmbl]  n. 全体；总效果；全套服装；全套家具；合奏组 adv. 同时
caveat  [ˈkæviæt]  n. 警告；中止诉讼手续的申请；货物出门概不退换；停止支付的广告

confound  [kənˈfaʊnd]  vt. 使混淆；挫败；讨厌；使混乱
nucleosome  [ˈnjuːklɪə(ʊ)səʊm] n. 核小体
octamer ['ɔktəmə] n. [高分子] 八聚物
correspond  [ˌkɒrəˈspɒnd]  vi. 符合，一致；相应；通信
deceased  [dɪˈsiːst] adj. 已故的 n. 死者；[法] 被继承人

maxima  [ˈmæksɪmə]  n. 最大数，极大值
wavelet  [ˈweɪvlət] n. 微波，小浪
akin  [əˈkɪn]  adj. 类似的；同类的；同族的
diploid  [ˈdɪplɔɪd] adj. 双倍的；倍数的；双重的
envisage  [ɪnˈvɪzɪdʒ]  v. 设想，想像；正视，面对





> 2021/7/12 End.