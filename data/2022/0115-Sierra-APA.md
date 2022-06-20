# paper
> Sierra: discovery of differential transcript usage from polyA-captured single-cell RNA-seq data
> https://genomebiology.biomedcentral.com/track/pdf/10.1186/s13059-020-02071-7.pdf
> https://pubmed.ncbi.nlm.nih.gov/32641141/
> Genome Biol. 2020 J
> Victor Chang Cardiac Research Institute, 405 Liverpool St., Darlinghurst, 2010, Australia.
> https://github.com/VCCRI/Sierra



# abstract

单细胞RNA分析，普遍忽略变体表达量。
High-throughput single-cell RNA-seq (scRNA-seq) is a powerful tool for studying gene expression in single cells. 
Most current scRNA-seq bioinformatics tools focus on analysing overall expression levels, largely ignoring alternative mRNA isoform expression. 

我们的流程 Sierra，能从 polyA捕获的的 scRNA测序技术中分析APA。
We present a computational pipeline, Sierra, that readily detects differential transcript usage from data generated by commonly used polyA-captured scRNA-seq technology. 


验证：通过和 bulk 对比，发现很多重合的差异转录本。
We validate Sierra by comparing cardiac scRNA-seq cell types to bulk RNA-seq of matched populations, finding significant overlap in differential transcripts. 


Sierra 检测了 PBMC, Tabula Muris, 心脏成纤维细胞的转录本差异。
Sierra detects differential transcript usage across human peripheral blood mononuclear cells and the Tabula Muris, and 3 ′UTR shortening in cardiac fibroblasts. 

Sierra is available at https://github.com/VCCRI/Sierra.



# introduction
p1： APA在scRNA中没有做。
p2: 单细胞研究 DTU 很重要。
p3: 单细胞打开新天地。
	但是 10x 的 low depth and limited gene coverage 使检测 APA 并不简单。

> Single-cell RNAseq for the study of isoforms—how is that possible?
> https://genomebiology.biomedcentral.com/articles/10.1186/s13059-018-1496-z
> Fig2: Low depth(observation of isoform switch); high depth(observation of alt.isoforms + changes in isoform expression ratio)



缩写词
- differential transcript usage (DTU)


# 重要思想


## pseudo-bulk

The use of pseudo-bulk samples allows for computational efficiency of testing.






