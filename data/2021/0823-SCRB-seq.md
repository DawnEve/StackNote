回复审稿人意见，了解 SCRB-seq 测序方法。



# SCRB-Seq info(iIllumina)
https://emea.illumina.com/science/sequencing-method-explorer/kits-and-arrays/scrb-seq.html
![0823_scSeq](/data/2021/images/08/0823_scrb-seq.png)

SCRB-Seq is a cost-efficient, multiplexed, single-cell mRNA sequencing technique.

SCRB-Seq isolates single cells into wells using FACS. After cell lysis, poly(A)+ mRNAs are annealed to a custom primer containing a poly(T) tract, UMI, well barcode, and biotin. 
流式分选细胞到孔板。使用 带 polyT, UMI, well barcode 和 biotin 的引物扩增 polyA+ mRNA。

Template-switching RT and PCR amplification reactions are carried out on the mRNA, generating barcoded, full-length cDNA. 
链置换RT，PCR反应是在mRNA上进行的，产生带barcode的全长cDNA。

cDNA strands from all wells are pooled together to be purified. They are PCR-amplified and purified further. 
cDNA链混到一起纯化。然后PCR扩增和纯化。

The cDNA libraries are prepared using the Nextera XT library preparation protocol, with modified i5 primers. The resultant cDNA fragments are size-selected for 300–800 bp and sequenced.
cDNA库使用Nextera XT建库试剂盒流程，使用修改的i5引物。获得的cDNA筛选300-800bp的片段并测序。

---
**Pros: 优点**
Cost-efficient, high-throughput, single-cell transcriptome profiling
Highly sensitive gene-detection results compared to popular scRNA-Seq techniques1

---
**Cons: 缺点**
Template-switching RT is heavily biased to full-length mRNA2
模板转换RT严重偏向于全长mRNA。


SCRB-Seq: Soumillon M., Cacchiarelli D., Semrau S., van Oudenaarden A. and Mikkelsen T. S. (2014). Characterization of directed differentiation by high-throughput single-cell RNA-Seq. bioRxiv




# 文献检索

https://pubmed.ncbi.nlm.nih.gov/?term=SCRB-seq&size=20 检索到3篇。可以再看看他们的引用。

- Comparative Analysis of Single-Cell RNA Sequencing Methods. [2017 Mol Cell](https://pubmed.ncbi.nlm.nih.gov/28212749/)
- Significant improvement in data quality with simplified SCRB-seq. [Acta Biochim Biophys Sin (Shanghai). 2020 ](https://pubmed.ncbi.nlm.nih.gov/32147694/)
- Sensitive and powerful single-cell RNA sequencing using mcSCRB-seq. [Nat Commun. 2018](https://pubmed.ncbi.nlm.nih.gov/30050112/)




## 方法比较paper (2017 Mol Cell)

>Comparative Study | Mol Cell. 2017 Feb 16;65(4):631-643.e4. doi: 10.1016/j.molcel.2017.01.023.
>**Comparative Analysis of Single-Cell RNA Sequencing Methods**
> https://www.cell.com/molecular-cell/pdf/S1097-2765(17)30049-7.pdf


Abstract
Single-cell RNA sequencing (scRNA-seq) offers new possibilities to address biological and medical questions. However, systematic comparisons of the performance of diverse scRNA-seq protocols are lacking. **We generated data from 583 mouse embryonic stem cells to evaluate six prominent scRNA-seq methods: CEL-seq2, Drop-seq, MARS-seq, SCRB-seq, Smart-seq, and Smart-seq2**. While Smart-seq2 detected the most genes per cell and across cells, CEL-seq2, Drop-seq, MARS-seq, and **SCRB-seq** quantified mRNA levels with less amplification noise due to the use of unique molecular identifiers (UMIs). Power simulations at different sequencing depths showed that Drop-seq is more cost-efficient for transcriptome quantification of large numbers of cells, while MARS-seq, SCRB-seq, and Smart-seq2 are more efficient when analyzing fewer cells. Our quantitative comparison offers the basis for an informed choice among six prominent scRNA-seq methods, and it provides a framework for benchmarking further improvements of scRNA-seq protocols.

Keywords: cost-effectiveness; method comparison; power analysis; simulation; single-cell RNA-seq; transcriptomics.


其中，根据黑体字，之前已经有该测序方法了。
### 全长or3端测序？
![0823_scSeq](/data/2021/images/08/0823_scSeq.jpg)
重点关注3‘端测序，就是 CEL-seq2/C1，MARS-seq，SCRB-seq
- CEL-seq2/C1, 3端测序，6bp UMI，C1, 2芯片
- Drop-seq 3端测序，8bp UMI，Droplets，2 Flows (微流控，跳过)
- MARS-seq，3端测序，8bp UMI，FACS，2板 (流式分选，跳过？)
- SCRB-seq，3端测序，10bp UMI，FACS分选，2板。
- Smart-seq/C1, 全长，no UMI, C1, 2芯片 （全长，跳过）
- Smart-seq2 全长测序， no UMI, FACS, 2板 （全长，跳过）

and SMART-seq2 was found to detect a median of 9,138 genes.


### 分子水平的建库过程？ 
![0823_scSeq](/data/2021/images/08/0823_scSeq2.jpg)

继续看剩下几个的分子机制
- CEL-seq2/C1，cDNA扩增 IVT，
- MARS-seq，cDNA扩增 IVT，
- SCRB-seq，cDNA扩增 PCR rGrGrG模板反转，建库时使用 Tn5 Tagmentation and 3'enrichment.
- Smart-seq/c1 和 Smart-seq2 都是建库阶段Tagmentation，但是不做3‘富集。

我们在分子处理上和 SCRB-seq基本一样，最主要的区别是，我们的方法没有加 UMI。


### 费用上
Even if one reduces the amount of Nextera transposase to a quarter, as done in the Smart-seq/C1 protocol, the Smart-seq2 protocol is still four times more expensive than the early barcoding methods.

**CEL-seq2/C1** is fairly expensive due to the microfluidic chips that make up 69% of the library costs, and Smart-seq/C1 is almost 13-fold less efficient than Drop-seq due to its high library costs that arise from the microfluidic chips, the commercial Smart-seq kit, and the costs for commercial Nextera XT kits.



### ERCC
For Drop-seq, we used the previously published ERCC-only dataset (Macosko et al., 2015), and for the other five methods, 2%–5% of the one million reads per cell mapped to ERCCs that were sequenced to complete saturation at that level (Figure S5B). 

A 50% detection probability was reached at 7, 11, 14, 16, 17, and 28 ERCC molecules for Smart-seq2, Smart-seq/C1, CEL-seq2/C1, SCRB-seq, Drop-seq, and MARS-seq, respectively (Figure S4C).

### 数据 Deposited Data(mESC)
mouse embryonic stem cells
- single-cell RNA-seq data This paper GEO: GSE75790
- Drop-seq ERCC data Macosko et al., 2015 GEO: GSE66694

SCRB-seq 细胞数(39+45=84)
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE75790
GSM2220384	SCRBseqA_AAAGTT
...
GSM2220467	SCRBseqB_TTTCTT

下载168个SRR ID的 AccessionList文件，包含R1，R2.

193: /home/wangjl/data/apa/SCRB-seq/raw/
依赖 SraRunTable.txt 中的 样本信息，能把R1，R2配对。








## SCRB-seq (Soumillon et al., 2014 bioRxiv) (hASCs).
> M. Soumillon, D. Cacchiarelli, S. Semrau, A. van Oudenaarden, T.S. Mikkelsen
Characterization of directed differentiation by high-throughput single-cell RNA-seq
**bioRxiv (2014)**, 10.1101/003236
> https://www.biorxiv.org/content/biorxiv/early/2014/03/05/003236.full.pdf
> https://www.researchgate.net/publication/270341464_Characterization_of_directed_differentiation_by_high-throughput_single-cell_RNA-Seq
> 1 Broad Institute, Cambridge, Massachusetts 02142, USA
> Human adipose-derived stem/stromal cells (hASCs)


Abstract

Directed differentiation of cells in vitro is a powerful approach for dissection of developmental pathways, disease modeling and regenerative medicine, but analysis of such systems is complicated by heterogeneous and asynchronous cellular responses to differentiation-inducing stimuli. To enable deep characterization of heterogeneous cell populations, we developed an efficient digital gene expression profiling protocol that enables surveying of mRNA in thousands of single cells at a time. **We then applied this protocol to profile 12,832 cells collected at multiple time points during directed adipogenic differentiation of human adipose-derived stem/stromal cells in vitro.** The resulting data reveal the major axes of cell-to-cell variation within and between time points, and an inverse relationship between inflammatory gene expression and lipid accumulation across cells from a single donor.

- 想看分化。
- 做了 12k细胞：人类脂肪来源的干细胞，体外定向诱导，多个时间点。
- 时间点之间的细胞之间的差异，细胞自身的差异。
- 负相关：脂肪积累，和炎性基因表达。

### 补充材料的测序流程
The key library construction steps are summarized in Supplementary Figure S1.

(1) 溶解细胞，模板置换：使用5’biotin的引物
where iC: iso-dC, iG: iso-dG, rG: RNA G, and our barcoded adapter E3V6NEXT (1 pmol, Integrated
DNA Technologies):
5'-/5Biosg/ACACTCTTTCCCTACACGACGCTCTTCCGATCT[BC6]N10T30VN-3'
where 5Biosg = 5’ biotin, [BC6] = 6bp barcode specific to each cell/well (Supplementary Table
S2), N10 = Unique Molecular Identifiers.


(2) 384孔混样、DNA柱子纯化与浓缩
Following the template switching reaction, cDNA from 384 wells were pooled together, and
then purified and concentrated using a single DNA Clean & Concentrator-5 column (Zymo
Research).


(3) DNA 外切酶I处理，然后PCR扩增(引物为 )
Pooled cDNAs were treated with Exonuclease I (New England Biolabs) and then
amplified by single primer PCR using the **Advantage 2 Polymerase Mix (Clontech) and our SINGV6 primer (10 pmol, Integrated DNA Technologies)**:
5’-/5Biosg/ACACTCTTTCCCTACACGACGC-3’

(4) 全长cDNA使用磁珠纯化、Qubit 2.0 检测浓度
Full length cDNAs were purified with Agencourt AMPure XP magnetic beads (0.6x, Beckman
Coulter) and quantified on the Qubit 2.0 Flurometer using the dsDNA HS Assay (Life
Technologies). 

(5) 使用 Nextera XT 建库试剂盒建库，修改了i5引物
Full-length cDNA was then used as input to the Nextera XT library preparation kit
(Illumina) according to the manufacturer’s protocol, with the exception that the i5 primer was
replaced by our P5NEXTPT5 primer (5μM, Integrated DNA Technologies):
5’-AATGATACGGCGACCACCGAGATCTACACTCTTTCCCTACACGACGCTCTTCCG*A*T*C*T*-3’
where * = phosphorothioate bonds.


(6) 磁珠纯化，2% E-Gel 片段筛选300-800bp 片段，QIAquick 胶回收试剂盒纯化、Qubit 2.0 定量
The resulting sequencing library was purified with Agencourt AMPure XP magnetic beads (0.6x, Beckman Coulter), size selected (300-800bp) on a E-Gel EX Gel, 2% (Life Technologies), purified using the QIAquick Gel Extraction Kit (Qiagen) and quantified on the Qubit 2.0 Flurometer using the dsDNA HS Assay (Life Technologies).

(7) 测序
- R1 17bp， well barcode + UMI
- i7 Nextera barcode 8bp, 
- R2 cDNA 34bp

Libraries were sequenced on Illumina Hiseq paired-end flow cells with 17 cycles on the first read to decode the well barcode and UMI, an 8 cycle index read to decode the i7 Nextera barcode and finally a 34 cycle second read to sequence the cDNA.







### 测序数据 (hASCs)
All sequences and derived gene expression data have been deposited in the NCBI GEO database under accession number GSE53638.
> https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE53638
> We then applied this protocol to profile 11,116 cells collected during directed differentiation of human adipose-derived stem/stromal cells.

选择day3的8个细胞，做个测试:
Selected 8	13.61 Gb	20.05 G
- 前6个是单细胞，后2个是提取的RNA(extracted RNA)，舍弃后2个；
- 前3个是长到80%时(Differentiation 1, 80% confluency)，后5个是长到100%(Differentiation 3, full confluency)。
```
SRR1058012
SRR1058013
SRR1058014
SRR1058035
SRR1058036
SRR1058037
```

### 分析方法
**Computational analysis of sequence data**
All second sequence reads were aligned to a reference database consisting of all human RefSeq mRNA sequences (obtained from the UCSC Genome Browser hg19 reference set:
http://genome.ucsc.edu/), the human hg19 mitochondrial reference sequence and the ERCC
RNA spike-in reference sequences using bwa version 0.7.4 4 with non-default parameter “-l 24”.
使用 hg19(含 RefSeq mRNA, mitochondrial, ERCC)，使用 bwa 0.7.4.4 比对，参数 “-l 24”。


Read pairs for which the second read aligned to a human RefSeq gene were kept for further
analysis if 1) the initial six bases of the first read all had quality scores of at least 10 and
corresponded exactly to a designed well-barcode and 2) the next ten bases of the first read (the UMI) all had quality scores of at least 30. 

R1符合以下的，R2才保留用于后续分析：
- R1的前6bp的质量分数至少是10，且和设计的well barcode精确对应；
- 接下来的10bp UMI 质量分数至少是30.


Digital gene expression (DGE) profiles were then
generated by counting, for each microplate well and RefSeq gene, the number of unique UMIs
associated with that gene in that well. Python scripts implementing the alignment and DGE
derivation are available from the authors upon request.

表达情况数每个孔中每个RefSeq基因对应的 uniq UMI个数。使用Python写的，可以发邮件索取。



For each plate, wells with less than 1,000 or more than 10,000 total UMI counts were
discarded (24% of all wells, largely low-value wells).

The UMI counts for each gene in the remaining wells were then normalized by dividing by the sum of UMI counts across all genes in the same well. We emphasize that this normalization removes variation from differences in RNA content per cell and should be revisited for analyses that are sensitive to this phenomenon.















## SCRB-seq 发表 (mESC)  [NC, 2017]
> 1. https://www.nature.com/articles/s41467-017-01076-4.pdf
> Dynamics of lineage commitment revealed by single-cell transcriptomics of differentiating embryonic stem cells
> https://www.biorxiv.org/content/10.1101/068288v1
> https://www.nature.com/articles/s41467-017-01076-4
> 补充材料 https://static-content.springer.com/esm/art%3A10.1038%2Fs41467-017-01076-4/MediaObjects/41467_2017_1076_MOESM1_ESM.pdf

Since population level measurements are not able to resolve population heterogeneity, we turned to the recently developed Single Cell RNA Barcoding and Sequencing method15 (SCRB-seq, Supplementary Fig. 2). 
![0823_scrb-seq_figS2.png](/data/2021/images/08/0823_scrb-seq_figS2.png)


实验设计:
Bulk and single-cell RNA-seq (SCRB-seq and SMART-seq) of mouse embryonic stem cells after different periods of continuous exposure to retinoic acid. Bulk RNA-seq of cell lines derived after retinoic exposure and after differentiation with retinoic acid and MEK inhibitor combined.

We quantified the transcriptional profiles of over 2000 single cells, sampled at 9 time points during differentiation, typically spaced 12 h apart.


### 测序方法与数据
The resulting sequencing library was purified with Agencourt AMPure XP magnetic beads (0.6x, Beckman Coulter), size selected (300–800 bp) on a E-Gel EX Gel, 2% (Life Technologies), purified using the QIAquick Gel Extraction Kit (Qiagen) and quantified on the Qubit 2.0 Flurometer using the dsDNA HS Assay (Life Technologies). Libraries were sequenced on Illumina Hiseq paired-end flow cells with 17 cycles on the first read to decode the well barcode and UMI, a 9 cycle index read to decode the i7 Nextera barcode and finally a 46 cycle second read to sequence the cDNA.

还是太短，
17bp: well barcode  + UMI
9bp: i7 Nextera barcode
46bp: cDNA;

> https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE79578
> https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA316219&o=acc_s%3Aa

```
GSM2098546	scrbseq_6h
GSM2098547	scrbseq_12h
GSM2098548	scrbseq_24h
GSM2098549	scrbseq_36h
GSM2098550	scrbseq_48h
GSM2098551	scrbseq_60h
GSM2098552	scrbseq_72h
GSM2098553	scrbseq_96h

对应着
SRR3290188
SRR3290190
SRR3290193
SRR3290196
SRR3290199
SRR3290202
SRR3290203
SRR3290204
```




### 分析方法

**SCRB-seq and bulk RNA-seq read alignment**

All second sequence reads were aligned to a reference database consisting of all mouse RefSeq mRNA sequences (obtained from the UCSC Genome Browser mm10 reference set: http://genome.ucsc.edu/), the mouse mm10 mitochondrial reference sequence and the ERCC RNA spike-in reference sequences using bwa version 0.7.4 with non-default parameter “-l 24”. 
BWA 比对到 mm10.

Read pairs for which the second read aligned to a mouse RefSeq gene were kept for further analysis if 1) the initial six bases of the first read all had quality scores of at least 10 and corresponded exactly to a designed well-barcode and 2) the next ten bases of the first read (the UMI) all had quality scores of at least 30. Digital gene expression (DGE) profiles were then generated by counting, for each microplate well and RefSeq gene, the number of unique UMIs associated with that gene in that well. Python scripts implementing the alignment and DGE derivation are available from the authors upon request.

过滤: 1) 前6个碱基 Q>=10; 2)接下来10bp是UMI，Q>=30;


---
**Computational analysis SCRB-seq experiments**

A histogram of the total number of UMIs detected per cell is shown in Supplementary Fig. 2a. To reduce the influence of technical noise we discarded cells with less than 2000 UMIs (red vertical line in Supplementary Fig. 2). This cutoff nearly minimized the upper bound of the counting error per gene (Supplementary Fig. 2b) estimated by


while not significantly reducing the number of detected genes (13,720, Supplementary Fig. 2c)—defined as the number of genes, which had more than one UMI in more than one cell. Due to this cutoff 2451 out of 3456 measured cells were used for further analysis (Supplementary Fig. 2e), where these are the numbers of cells analyzed at each time point:

In individual cells with more than 2000 total UMIs 850 genes were detected on average.


## 分别命名3套数据
- polyA-seq : 2021 Wang et al;
- raw0/  2014        Magali Soumillon   : 2014 Soumillon et al;
- raw/  2017MC    Christoph Ziegenhain: 2017 Ziegenhain et al;
- raw2/  2017NC   Stefan Semrau: 2017 Semrau et al;








# 找human smart-seq2 数据集

=> 详情见专题：2021-10-2
这里是实际分析的数据。

---
- GSM5469133	Endo_B_cell_sample_1-15 共15个
	https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE180728
- GSM5278574	Smart-seq2: Macrophages1-10，共10个
	https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149574
- GSM4405613	P0305 (Smart-seq2) 共10个
	https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE146771

```
$ cat ReadMe.txt 
zs      GSE134311 zs/stat Single DRG neurons, mouse Dorsal Root Ganglion neurons (DRG)
sample2 GSE166927 human intestinal fibroblasts
sample3 GSE108989 张泽民 CRC T cell
sample4 SRP132313 https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC6454680/
MEF     https://ngdc.cncb.ac.cn/gsa/browse/CRA002582  Single-Cell Transcriptome Analysis Reveals Six Subpopulations Reflecting Distinct Cellular Fates in Senescent Mouse Embryonic Fibroblasts
```




# 其他要求
## 要引用的三个文献
```
Rosonina...Blencowe, JBC, 2003; 
	https://www.jbc.org/article/S0021-9258(20)82578-2/pdf
Nagaike...Manley, Mol Cell 2011; 
	https://www.cell.com/molecular-cell/comments/S1097-2765(11)00049-9
	https://link.springer.com/protocol/10.1007%2F978-1-62703-971-0_6 书
Ji...Tian, Mol Syst Biol, 2011
	https://europepmc.org/article/PMC/3202805
```

## Rosonina...Blencowe, JBC, 2003







# Amplification bias(PCR bias)

---
> https://pubmed.ncbi.nlm.nih.gov/29943302/
> Review Adv Exp Med Biol. 2018
> Emergence of Bias During the Synthesis and Amplification of cDNA for scRNA-seq

In this review, we will describe how these biases emerge and impact scRNA-seq protocols. Moreover, we will introduce several current and convenient modified scRNA-seq methods that allow for bias to be decreased and estimated.



---
> https://pubmed.ncbi.nlm.nih.gov/32502143/
> PLoS Comput Biol. 2020 Jun 5
> Detecting differential alternative splicing events in scRNA-seq with or without Unique Molecular Identifiers

However, compared to bulk RNA-seq, scRNA-seq data are much noisier due to high technical variability and low sequencing depth. Here we propose SCATS (Single-Cell Analysis of Transcript Splicing) for differential splicing analysis in scRNA-seq, which achieves high sensitivity at low coverage by accounting for technical noise. 
SCATS models scRNA-seq data either with or without Unique Molecular Identifiers (UMIs).
- For `non-UMI data`, SCATS explicitly models technical noise by accounting for capture efficiency and **amplification bias** through the use of **external spike-ins**; 
- for `UMI data`, SCATS models capture efficiency and further accounts for **transcriptional burstiness**. 

A key aspect of SCATS lies in its ability to group "exons" that originate from the same isoform(s). Grouping exons is essential in splicing analysis of scRNA-seq data as it naturally aggregates spliced reads across different exons, making it possible to detect splicing events even when sequencing depth is low.




