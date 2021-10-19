- 目录按阅读顺序排列，最新的最上面。
- 正文标题中写发表日期，按发表日期排序，最新的在上面。
- 每周至少阅读2个IF>5的摘要
- 学习英语，跟踪单细胞技术趋势、实验设计、分析方法
- 


```
阅读顺序的目录



2021/9/7 Smart-seq3, Smart-seq2, 张泽民CRC T细胞, 
```

# 单细胞综述 //todo

1.Current best practices in single-cell RNA-seq analysis: a tutorial
https://pubmed.ncbi.nlm.nih.gov/31217225/
Mol Syst Biol. 2019


2.Tutorial: guidelines for the computational analysis of single-cell RNA sequencing data
https://pubmed.ncbi.nlm.nih.gov/33288955/
Nat Protoc. 2021 Jan

3.Single-Cell RNA Sequencing Analysis: A Step-by-Step Overview
https://pubmed.ncbi.nlm.nih.gov/33835452/
Methods Mol Biol. 2021






# Smart-seq3 (Nat Biotechnol. 2020 Jun)
> 38(6):708-714. doi: 10.1038/s41587-020-0497-0. Epub 2020 May 4.
> **Single-cell RNA counting at allele and isoform resolution using Smart-seq3**
> Department of Cell and Molecular Biology, Karolinska Institutet, Stockholm, Sweden.
> Michael Hagemann-Jensen ... Rickard Sandberg 5
> https://pubmed.ncbi.nlm.nih.gov/32518404/
> 评论: [Single-cell RNA sequencing at isoform resolution](https://www.nature.com/articles/s41587-020-0553-9)
---
单细胞测序能 reveal 基因模式
Large-scale sequencing of RNA from individual cells can reveal patterns of gene, isoform and allelic expression across cell types and states1. 

---
缺点：短reads测序不能达到等位基因和变体分辨率，长reads测序深度又不够。
However, current short-read single-cell RNA-sequencing methods have limited ability to count RNAs at allele and isoform resolution, and long-read sequencing techniques lack the depth required for large-scale applications across cells2,3. 

---
新方法：Smart-seq3 全长 + 5’UMI，可以硅芯片组装每个细胞中的分子。
Here we introduce Smart-seq3, which combines full-length transcriptome coverage with a 5' unique molecular identifier RNA counting strategy that enables in silico reconstruction of thousands of RNA molecules per cell. 

---
效果：组装后，60% 直接比对到等位基因，30%-50%比对到特定变体，我们发现不同老鼠品系和人细胞类型的变体使用有巨大差异。

Of the counted and reconstructed molecules, 60% could be directly assigned to allelic origin and 30-50% to specific isoforms, and we identified substantial differences in isoform usage in different mouse strains and human cell types. 

---
拔高：比2灵敏度高，每个细胞多发现几千转录本。

Smart-seq3 greatly increased sensitivity compared to Smart-seq2, typically detecting thousands more transcripts per cell. 

---
展望：

We expect that Smart-seq3 will enable large-scale characterization of cell types and states across tissues and organisms.










# CRC T cell(Sci Data. 2019 Jul 24)
> 6(1):131. doi: 10.1038/s41597-019-0131-5.
> **Deep single-cell RNA sequencing data of individual T cells from treatment-naïve colorectal cancer patients**
> Yuanyuan Zhang 1, ..., Xianwen Ren 1, Zemin Zhang 3 
> 1School of Life Sciences and BIOPIC, Peking University, Beijing, 100871, China.
> https://pubmed.ncbi.nlm.nih.gov/31341169/


Abstract
---
T 细胞是免疫微环境的重要组分。
T cells, as a crucial compartment of the tumour microenvironment, play vital roles in cancer immunotherapy. 

肿瘤浸润T细胞未知。
However, the basic properties of tumour-infiltrating T cells (TILs) such as the functional state, migratory capability and clonal expansion remain elusive. 

Here, using Smart-seq2 protocol, we have generated a RNA sequencing dataset of 11,138 T cells isolated from peripheral blood, adjacent normal and tumour tissues of 12 colorectal cancer (CRC) patients, including 4 with microsatellite instability (MSI). 

The dataset contained an expression profile of 10,805 T cells, as well as the full-length T cell receptor (TCR) sequences of 9,878 cells after quality control. 

To facilitate data mining of our T cell dataset, we developed a web-based application to deliver systematic interrogations and customizable functionalities ( http://crctcell.cancer-pku.cn/ ). 

Functioning with our dataset, the web tool enables the characterization of TILs based on both transcriptome and assembled TCR sequences at the single cell level, which will help unleash the potential value of our CRC T cell data resource.


---
单词：















# Smart-seq2(Nat Protoc. 2014 Jan)
> 9(1):171-81. doi: 10.1038/nprot.2014.006. Epub 2014 Jan 2.
> **Full-length RNA-seq from single cells using Smart-seq2**
> https://pubmed.ncbi.nlm.nih.gov/24385147/
> Ludwig Institute for Cancer Research, Stockholm, Sweden.
> Simone Picelli 1, ..., Rickard Sandberg 2
> https://www.nature.com/articles/nprot.2014.006
> https://pubmed.ncbi.nlm.nih.gov/24385147/


---
细胞间变异。
Emerging methods for the accurate quantification of gene expression in individual cells hold promise for revealing the extent, function and origins of cell-to-cell variability. 

现有方法：
Different high-throughput methods for single-cell RNA-seq have been introduced that vary in coverage, sensitivity and multiplexing ability. 

---
我们
We recently introduced Smart-seq for transcriptome analysis from single cells, and we subsequently optimized the method for improved sensitivity, accuracy and full-length coverage across transcripts.

Smart-seq2: 全长+标准试剂
Here we present a detailed protocol for Smart-seq2 that allows the generation of full-length cDNA and sequencing libraries by using standard reagents. 

---
时间，
The entire protocol takes ∼2 d from cell picking to having a final library ready for sequencing; sequencing will require an additional 1-3 d depending on the strategy and sequencer. 

局限
The current limitations are the lack of strand specificity and the inability to detect nonpolyadenylated (polyA(-)) RNA.


