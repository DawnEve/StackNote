
# 稀有 APA 与人类疾病(NC, Jan 2025) 李磊

- [Impact of rare non-coding variants on human diseases through alternative polyadenylation outliers](https://www.nature.com/articles/s41467-024-55407-3)

## 怎么研究RBP的？

Furthermore, we analyzed 166 publicly accessible RBPs cross-linking immunoprecipitation sequencing (CLIP-seq) datasets from the Encyclopedia of DNA Elements (ENCODE) project 41. 

We found seven RBPs’s CLIP-seq data are strongly enriched with multi-tissue aOutlier RVs compared to nonoutlier RVs (Fig. 3l and Supplementary Fig. 14b), including LARP4, an APA regulator identified in our previous study25, and a known APA regulator CSTF2T.

> 41. Dominguez, D. et al. Sequence, Structure, and Context Preferences of Human RNA Binding Proteins. Mol. Cell 70, 854–867.e9 (2018).


Beyond these known APA regulators, other RBPs such as TIA1, UPF1, and SAFB2 were also identified as potential new APA regulators (Supplementary Fig. 14g–i). Collectively, these results suggested that aOutlier-associated RVs trigger aberrant APA usage through altering PAS, splice sites, or RBP binding sites.




## cross-linking immunoprecipitation sequencing (CLIP-seq)

- deepseek 辅助:

CLIP-seq（Crosslinking and Immunoprecipitation followed by sequencing）是一种用于研究RNA与蛋白质相互作用的高通量测序技术。以下是其含义、应用和数据分析的简要说明：

1. 含义: CLIP-seq通过以下步骤研究RNA与蛋白质的相互作用：

- 交联（Crosslinking）：使用紫外线将RNA与结合蛋白共价连接。
- 免疫沉淀（Immunoprecipitation）：用特异性抗体富集目标RNA-蛋白复合物。
- 测序（Sequencing）：对结合的RNA进行高通量测序，确定结合位点。

2. 应用: CLIP-seq主要用于:
- RNA结合蛋白（RBP）研究：识别RBP的结合位点及结合序列。
- RNA修饰研究：研究RNA修饰蛋白的结合位点。
- RNA代谢调控：揭示RNA剪接、稳定性和翻译的调控机制。

3. CLIP-seq数据分析步骤

- 数据预处理：去除低质量 reads 和接头序列。
- 比对：将 reads 比对到参考基因组。
- 峰值检测：识别显著的RNA-蛋白结合位点。
- 功能注释：分析结合位点的功能，如基因注释和富集分析。
- 可视化：使用工具如IGV展示结合位点。

4. 常用工具
- 比对工具：STAR、HISAT2。
- 峰值检测工具：Piranha、CLIPper。
- 功能注释工具：DAVID、GREAT。
- 可视化工具：IGV、UCSC Genome Browser。

总结
CLIP-seq是研究RNA与蛋白质相互作用的有力工具，通过交联、免疫沉淀和测序揭示RNA-蛋白结合位点，数据分析则包括预处理、比对、峰值检测、功能注释和可视化。





## Encode 的 CLIP-SEQ数据该怎么使用？

1. 数据获取
首先，从ENCODE数据库下载CLIP-seq数据：

- 访问ENCODE官网：ENCODE Project https://www.encodeproject.org/
- 搜索数据：使用关键词如“CLIP-seq”或特定RNA结合蛋白（RBP）名称进行搜索。
- 选择数据集：根据实验条件、细胞类型等筛选合适的数据集。
- 下载数据：通常可下载FASTQ或BAM格式的原始数据及处理后的峰值文件。


2. 数据预处理
对下载的原始数据进行预处理：

- 质量控制：使用FastQC检查数据质量。
- 去除低质量序列和接头：使用Trimmomatic或Cutadapt进行修剪。

3. 数据比对
将预处理后的reads比对到参考基因组：

- 选择比对工具：常用工具包括STAR和HISAT2。
- 执行比对：生成SAM/BAM文件。

4. 峰值检测
识别RNA-蛋白结合位点：

- 使用峰值检测工具：如Piranha或CLIPper。
- 输入BAM文件：生成峰值文件（BED格式）。

5. 功能注释
分析峰值文件的功能：

- 基因注释：使用工具如HOMER或ChIPseeker。
- 富集分析：使用DAVID或GREAT进行GO和KEGG通路分析。

6. 数据可视化
可视化结合位点：

- 使用IGV或UCSC Genome Browser：加载BAM和BED文件，查看结合位点。

7. 数据整合与分析
结合其他数据深入分析：

- 整合RNA-seq数据：研究RBP对基因表达的影响。
- 整合ChIP-seq数据：探索转录因子与RBP的协同作用。


```
# 1.数据预处理
fastqc input.fastq
trimmomatic SE -phred33 input.fastq output.fastq ILLUMINACLIP:TruSeq3-SE.fa:2:30:10 LEADING:3 TRAILING:3 SLIDINGWINDOW:4:15 MINLEN:36

# 2.数据比对
STAR --genomeDir /path/to/genome --readFilesIn output.fastq --outFileNamePrefix aligned

# 3. 峰值检测
piranha -b aligned.bam -o peaks.bed

# 4.功能注释
annotatePeaks.pl peaks.bed hg19 > annotated_peaks.txt
```
使用ENCODE的CLIP-seq数据包括数据获取、预处理、比对、峰值检测、功能注释、可视化和整合分析。通过这些步骤，你可以深入研究RNA与蛋白质的相互作用及其生物学功能。






# SurvDB 生存期数据库 (Int J Mol Sci. 2025, IF=5)
> SurvDB: Systematic Identification of Potential Prognostic Biomarkers in 33 Cancer Types
> Hubei Key Laboratory of Agricultural Bioinformatics, College of Informatics, Huazhong Agricultural University, Wuhan 430074, China.
> https://pubmed.ncbi.nlm.nih.gov/40141449/

we conducted a systematic prognostic analysis using over 10,000 samples across 33 cancer types from The Cancer Genome Atlas (TCGA). Our study integrated nine types of molecular biomarker-related data: single-nucleotide polymorphism (SNP), copy number variation (CNV), alternative splicing (AS), alternative polyadenylation (APA), coding gene expression, DNA methylation, lncRNA expression, miRNA expression, and protein expression. Using log-rank tests, univariate Cox regression (uni-Cox), and multivariate Cox regression (multi-Cox), we evaluated potential biomarkers associated with four clinical outcome endpoints: overall survival (OS), disease-specific survival (DSS), disease-free interval (DFI), and progression-free interval (PFI).




# (Adv Sci (Weinh). 2025, IF=14.3)
> The Dynamic Landscape of 3'-UTR Alternative Polyadenylation Across Mouse Fetal Development and Anatomy
> http://xozhanglab.com/apapedia/
> Shanghai Key Laboratory of Maternal and Fetal Medicine, Clinical and Translational Research Center of Shanghai First Maternity and Infant Hospital, Frontier Science Center for Stem Cell Research, School of Life Sciences and Technology, Tongji University, Shanghai, 200092, China.
> https://pubmed.ncbi.nlm.nih.gov/40126195/

This work characterizes 3'-UTR APA using 85 high-quality RNA-seq datasets encompassing 12 tissue types and eight developmental stages of mouse fetuses. Results show that 46.4% of expressed genes undergo APA in a tissue-specific manner.

Changes in polyadenylation site (pAS) usage often operate beyond transcriptional control, revealing APA as an additional layer of gene regulation.

蛋白 Rbm38 可能限制远端pA位点使用，在脑发育中有3UTR APA 动态变化。
Intriguingly, brain tissues display complex 3'-UTR APA dynamics during development, potentially regulated by RNA-binding proteins such as Rbm38, potentially impacting 3' UTR extension by restricting distal pAS usage. These APA events are associated with a depletion of conserved miRNA binding sites and an enrichment of transposable elements within alternative 3' UTRs.




