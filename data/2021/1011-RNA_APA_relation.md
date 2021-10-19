APA 与 RNA 的关系。
简单说：负相关。



# DaPars, liwei 组 (Xia et al, 2014 Nat Commun)
> **Dynamic analyses of alternative polyadenylation from RNA-seq reveal a 3'-UTR landscape across seven tumour types**
> Zheng Xia1,2, Lawrence A. Donehower3,4, Thomas A. Cooper2,5,6, Joel R. Neilson6, David A. Wheeler4,7, Eric J. Wagner8 & Wei Li1,2
> https://pubmed.ncbi.nlm.nih.gov/25409906/
> https://www.nature.com/articles/ncomms6274


## 名词解释 PDUI [0, 1]
Finally, the degree of difference in APA usage between tumour and normal can be quantified as a change in **Percentage of Distal polyA site Usage Index** (ΔPDUI), which is capable of identifying lengthening (positive index) or shortening (negative index) of 3′ UTRs. The dynamic APA events with statistically significant ΔPDUI between tumour and normal will be reported.


加delta后取值范围[-1, 1]
The relative proportion of these two isoforms is randomly generated, so that the ΔPDUI between tumour and normal for each gene is a random number ranging from −1 to 1. 



To quantify the relative polyA site usage, we define the PDUI for sample i as the following:
PDUI=L/(L+S)
where L and S are the estimated expression levels of transcripts with distal and proximal polyA sites for sample i. The greater the PDUI is, the more distal polyA site of a transcript is used and vice versa. Finally, the regression model is extended towards the internal exons, so that splicing-coupled APA events can also be detected.
该指数越大，polyA位点倾向使用远端。
回归模型扩展到内部exon，内部剪切偶联的APA事件也能被检测。


---
**What is PolyA-seq?**

Recent APA protocols use polyA junction sites enrichment followed by high-throughput sequencing (**PolyA-seq**)13,14. These PolyA-seq protocols, although powerful in providing the precise locations of polyA sites, are hampered by technical issues, such as internal priming artefacts, and thus have not been widely adopted by the cancer community. 

> 13. Hoque, M. et al. Analysis of alternative cleavage and polyadenylation by 3′ region extraction and deep sequencing. Nat. Methods 10, 133–139 (2013).
> 14. Sun, Y., Fu, Y., Li, Y. & Xu, A. Genome-wide alternative polyadenylation in animals: insights from high-throughput technologies. J. Mol. Cell Biol. 4, 352–361 (2012).


**其中 13 中又引用了**
We next compared 3′READS with PolyA-seq 22 and PAS-Seq 23, two recent deep-sequencing methods for pA mapping that use oligo(dT) for reverse transcription. 
> 22. Derti, A. et al. A quantitative atlas of polyadenylation in five mammals. Genome Res. 22, 1173–1183 (2012).
> 23. Shepard, P.J. et al. Complex and dynamic landscape of RNA polyadenylation revealed by PAS-Seq. RNA 17, 761–772 (2011).



---
**方法的对比：venn图**
For PolyA-seq, the differentially altered 3 -UTR usage was identified as described in Methods.

From the comparison between brain and UHR, we found that ~ 60% (P valueo < 2.2e-16; Fisher’s exact test) of 372 DaPars predicted APA events could be strongly supported by PolyA-seq (Fig. 1e,f).




**其他方法的缺点**

For example, PolyA-seq is designed to amplify polyA tags; 

therefore, some dynamic APA events reported by PolyA-seq may have a small magnitude of changes that are not readily detectable by RNA-seq (Supplementary Fig. 1c).

Meanwhile, probably due to additional steps such as fractionation, PolyA-seq may also fail to detect dynamic APAs that are clearly observed by RNA-seq (Supplementary Fig. 1d). 


样本名字
MAQC brain and UHR RNA-seq reads were obtained from Sequence Read Archive with accessions ERP000016 and ERP000400, respectively.









## 图片
![1011_RNA_APA](/data/2021/images/10/1011_RNA_APA.png)

Figure 3 | Genes with shorter 3' UTRs in tumours are prone to be upregulated.
(c) For genes with shorter 3' UTRs in tumours, their fold-change expression between tumours and normal tissues are plotted against their ∆PDUI values. 
All isoforms of the same gene were combined for the expression measurement. 

The genes significantly up- or downregulated in tumours are shown in red and blue, respectively, which were identified by paired t-test with Benjamini–Hochberg (BH) false-discovery rate at 5%. 

Accordingly, the red and blue bar plots indicate the number of up- and downregulated genes, respectively.

x轴是 delta PDUI
y轴是 RNA fold-change. 上下调是通过t-test成对做的，FDR 5%。

红蓝表示上调、下调。




## 方法
![1011_RNA_APA-method.png](/data/2021/images/10/1011_RNA_APA-method.png)
三个条件定义为最显著的APA事件。

1.是 fisher 检验，长-短，肿瘤-正常，检查APA变化显著的基因，FDR<=0.05;
2.同一个肿瘤中，全部病人的 abs( mean(tumor) - mean(normal) ) >=0.2
3.同一个肿瘤中，全部病人的 abs( log2(mean(tumor) / mean(normal) )) >=0.59
也就是，比值至少 1.5 倍。

为了避免假阳性，筛选高表达基因，覆盖度 >30x (reads per base gene model)


```
//js
function log2(x){ return Math.log(x)/Math.log(2) }
log2(1.5) 
//0.5849625007211562
```








# QAPA: (Ha et al, 2018 Genome Biol)
> **QAPA: a new method for the systematic analysis of alternative polyadenylation from RNA-seq data**
> Kevin C. H. Ha1,2, Benjamin J. Blencowe1,2* and Quaid Morris1,2,3,4*
> https://pubmed.ncbi.nlm.nih.gov/29592814/
> https://genomebiology.biomedcentral.com/articles/10.1186/s13059-018-1414-4


## 名词解释
PPAU 近端使用率。低了表示使用了远端。
We quantified APA using the metric “Poly(A) Usage” (PAU). The PAU for a 3′ UTR isoform is the ratio of its expression to the sum of the expression of all detected 3′ UTR isoforms from its gene. In this study, we focused on the PAU of the proximal 3′ UTR isoform (denoted as proximal PAU or PPAU), since APA is often regulated through the differential use of proximal poly(A) sites [20]. A lower value for PPAU thus implies that a distal poly(A) site is selected, and vice versa.

> 20.Lianoglou S, Garg V, Yang JL, Leslie CS, Mayr C. Ubiquitously transcribed genes use alternative polyadenylation to achieve tissue-specific expression. Genes Dev. 2013;27:2380–96.



## 图片
![1011_RNA_APA-2](/data/2021/images/10/1011_RNA_APA-2.png)

Fig. 4 **APA changes during ND are rarely correlated with steady-state mRNA expression changes.** 
**a** Comparison between mRNA expression changes (y-axis) and APA changes (x-axis) for 3825 analyzed genes. 
Lengthening 3′ UTRs are indicated on the right (∆PPAU > 20), 
while shortening 3′ UTRs are on the left (∆PPAU < − 20). 

Genes with statistically significant differential up- or down-regulation are indicated by red and blue dots, respectively (|log2 fold change| > 1.5, FDR < 1%). 

Examples of lengthening 3′ UTRs from Fig. 3 are labeled. 
Dotted horizontal lines indicate log2 fold change thresholds, 
while dotted vertical lines indicate ∆PPAU thresholds. 

**b** Bar plot showing distribution of lengthening 3′ UTRs across classes based on isoform expression changes between proximal and distal 3′ UTRs: Switch, Long-Up, or Short-Down

---
neuronal differentiation (ND)



## 方法

### Transcriptome-wide analysis of APA during neuronal differentiation
We next applied QAPA to investigate the genome-wide landscape of APA in the context of neuronal differentiation (ND), using conventional RNA-seq data generated from eight time points (with four replicates per time point) during differentiation of cortical glutamatergic neurons from embryonic stem cells (ESCs) [29].

常规RNA-seq数据，来自8个时间点(4个重复/时间点)。 ESC 来源的 皮质 谷氨酸能的 神经元。

