1009-AML-cell-line.md



# Blood: 怎么证明分化能力？
> Mitochondrial carrier homolog 2 is necessary for AML survival
> https://pdf.sciencedirectassets.com/778769/1-s2.0-S0006497120X6839X/1-s2.0-S000649712061919X/main.pdf


- `In AML, knockdown of MTCH2 decreased growth, reduced engraftment potential of stem cells, and induced differentiation.`
- ` Inhibiting MTCH2 in AML cells increased nuclear pyruvate and pyruvate dehydrogenase (PDH), which induced histone acetylation and subsequently promoted the differentiation of AML cells. `


## 细胞系

`OCI-AML2, HL60, K562, U937, and NB4` were cultured in Iscove modified Dulbecco medium and RPMI medium with 10% fetal calf serum, 100 U/mL streptomycin, and 100 mg/mL penicillin, respectively.

`8227 cells` were provided by John E. Dick (Princess Margaret Cancer Centre) and were cultured in X-VIVO-10 with 20% bovine serum albumin, insulin, and transferrin;


- 构建细胞系

OCI-AML2-Cas9 cell generation OCI-AML2 cells were transduced with Cas9-expressing lentiviral vector, Lenti‐Cas9‐2A‐Blast (Addgene plasmid #73310; Watertown, MA),16 and selected with blasticidin (10 mg/mL) for 6 days.
After selection, the Cas9-expressing clonal population was subject to 2 rounds of single-cell cloning. From the second round, a designated clone-7.2 was obtained, characterized by immunoblotting and used for the screening assay.



## 分化 Kasumi-1 & NB4

We observed that the compounds budesonide, mometasone and halcinonide drastically differentiate the CD34+ primitive cells to CD15+ terminally differentiated blasts (Fig. 2a–c).





- In the present study, we focused on the human Akirin2 regulome and interactome in `neutrophil-like model human Caucasian promyelocytic leukemia HL60 cells`. 
promyelocytic 早幼粒细胞的




```
1. 下载
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE210200

GSM6423427	Kasumi-1 control_1  SRR20729564
GSM6423428	Kasumi-1 control_2  SRR20729563
GSM6423429	Kasumi-1 control_3  SRR20729562

GSM6423433	NB4 treated with control_1  SRR20751819
GSM6423434	NB4 treated with control_2  SRR20751818

平均 7-9G/sample



2. 比对
/data/wangjl/rsa/kasumi-1/
$ mkdir map/

id="SRR20729562";
id="SRR20729563";
id="SRR20729564";

1)kasumi-1
STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/kasumi-1/${id}_1.fastq /data/wangjl/rsa/kasumi-1/${id}_2.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/kasumi-1/map/${id}_


/data/wangjl/rsa/NB4/
$ mkdir map/

2) NB4
id="SRR20751818";
id="SRR20751819";

STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/NB4/${id}_1.fastq /data/wangjl/rsa/NB4/${id}_2.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/NB4/map/${id}_


3. index
ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

4.View on scIGV
$ ln -s /data/wangjl/rsa/kasumi-1/map/ /data/wangjl/HeLa/cell_cycle/kasumi-1
$ ln -s /data/wangjl/rsa/NB4/map/ /data/wangjl/HeLa/cell_cycle/NB4
```




# 8227 cell line: //todo



# U937 //todo

```
1. 下载
1a)https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE184324
GSM5584108	U937_untreated_1 SRR15929145 6Gb
GSM5584109	U937_untreated_2 SRR15929146
GSM5584110	U937_untreated_3 SRR15929147

$ fasterq-dump --split-files SRR15929145

1b)https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE223609
GSM6965474	U937 cells, shControl, RNA-seq Replicate 1  SRR23203934  9Gb
GSM6965475	U937 cells, shControl, RNA-seq Replicate 2  SRR23203933
GSM6965476	U937 cells, shControl, RNA-seq Replicate 3  SRR23203932


/data/wangjl/rsa/U937/
$ scp wangjl@y.biomooc.com:/data/wangjl/sra/cell_cycle/SRR*fastq . 


```




# THP-1 cell line

```
GSM4305745	THP-1 cells, control A  SRR11059463  1.8Gb
GSM4305746	THP-1 cells, control B  SRR11059464  1.7Gb

$ fasterq-dump --split-files SRR11059463
单端

id="SRR11059463";

STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/THP-1/${id}_1.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/THP-1/map/${id}_

$ ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

$ ln -s /data/wangjl/rsa/THP-1/map/ /data/wangjl/HeLa/cell_cycle/THP-1
```



# MV-4-11 cell line

```
GSM4306624	MV-4-11 control A  SRR11067848  677Mb
GSM4306625	MV-4-11 control B  SRR11067849  608Mb

```





# AML 细胞系

> https://www.researchgate.net/post/Which-cell-line-is-most-suitable-for-AML

Loucy and OCI-AML1 cell lines

We have been developing a drug against AML and used human U937 monocytic cell line and HL-60 as AML modell. 
As AML mouse modell I recommend you to use C-1498 cell , RAW 264.7 or M1 murine Cell Line.




## HL60 cell line

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE158885

HL-60 cells are promyeoloblasts isolated from the peripheral blood by leukopheresis from a 36-year-old,White, female with acute promyelocytic leukemia. This cell line can be used in immune disorder and immunology research.

```
1. 下载数据
SRR12759747
SRR12759748
SRR12759749
SRR12759750
SRR12759751
SRR12759752

平均5G/sample;
Run	AvgSpotLen	cell_line	genotype	GEO_Accession (exp)
SRR12759747	300	HL60	wild type	GSM4813900
SRR12759748	300	HL60	wild type	GSM4813901
SRR12759749	300	HL60	wild type	GSM4813902
SRR12759750	300	HL60	AKR2 knock down	GSM4813903
SRR12759751	300	HL60	AKR2 knock down	GSM4813904
SRR12759752	300	HL60	AKR2 knock down	GSM4813905

AKIRIN2, not AKR2;

Y 传送到 Z:
Z@ /data/wangjl/rsa/HL60/
$ scp wangjl@y.biomooc.com:/data/wangjl/sra/cell_cycle/SRR12759748* .
平行传2个文件，总和还是 10M/s。


2. 比对
id="SRR12759747";
id="SRR12759748";
id="SRR12759749";
id="SRR12759750";
id="SRR12759751";

STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/HL60/${id}_1.fastq /data/wangjl/rsa/HL60/${id}_2.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/HL60/map/${id}_

3. index
/data/wangjl/rsa/HL60
$ ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;


4. View
$ ln -s /data/wangjl/rsa/HL60/map/ /data/wangjl/HeLa/cell_cycle/HL60
```







> Cell line


> https://www.sciencedirect.com/science/article/pii/S2211124723012093?via%3Dihub
> The normal colorectal cell lines (`NCM460`) and colorectal cancer cell lines (`SW480`, `RKO`) were cultured in RPMI 1640 supplemented with 1% penicillin-streptomycin and 10% FBS.

那么，AML 有没有对应的 normal cell line?



> AML cell lines with a list of expression markers: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10049680/


## Kasumi-3

The Kasumi-3 cell line was derived from a 57-year-old male patient with M0. It has a few notable characteristics, including a doubling time of approximately 55–60 h in cell culture, an appearance consistent with immature lymphoblasts, and the expression of various markers, as shown in Table 1 [11]. B cell-specific, T-ALL, and NK markers were also identified in this cell line [12]. 

The Kasumi-3 engraftment model in NSG mice was also developed. Mice were implanted with 1 × 106 or 10 × 106 per mouse. The amount of human CD45+ cells in peripheral blood, blood marrow, and spleen was monitored by FACS to estimate the disease progression. 


KG-1 and KG-1a are challenging to differentiate in vitro, making them valuable for studying potential drugs that promote differentiation, such as differentiating CD34+ progenitor cells into dendritic-like cells [35,36].



## Kasumi-1

This cell line expresses myeloperoxidase and can differentiate into neutrophils and macrophages after treatment with IL-5 or TPA, respectively. It also expresses `CD34`, suggesting it originated from an early myeloid stem cell. 




```
- The K562 line is composed of undifferentiated blast cells that are rich in glycophorin and may be induced to produce fetal and embryonic hemoglobin in the presence of hemin.
K562系由富含糖蛋白的未分化母细胞组成，在血红蛋白存在的情况下可诱导产生胎儿和胚胎血红蛋白。

- The KG-1 cell line is composed predominantly of myeloblasts and promyelocytes. A unique characteristic of the KG-1 cells is their almost complete dependence on colony-stimulating factor for proliferation in soft-gel culture.
KG-1细胞系主要由成髓细胞和早幼髓细胞组成。KG-1细胞的一个独特特征是它们在软凝胶培养中几乎完全依赖集落刺激因子增殖。

- The `HL-60` is a promyelocytic leukemia cell line.  In the presence of DMSO, the cells mature into granulocytes.
HL-60是早幼粒细胞白血病细胞系。在DMSO存在下，细胞成熟为粒细胞。

- Both the KG-1 and HL-60 cells differentiate into nondividing mononuclear phagocytes when exposed to phorbol esters. 
KG-1和HL-60细胞在暴露于磷酯时均分化为不分裂的单核吞噬细胞。
```






- https://www.sciencedirect.com/science/article/pii/S0006291X19312069

AML cell lines (Kas-1, `HL60`, NB4 and `K562`) and normal cell line of 293T were obtained from American Type Culture Collection (ATCC, USA). 

The effects of TYP on AML were also confirmed in vivo using BALB/c mice xenografts bearing HL60 cells. 


- https://www.sciencedirect.com/topics/medicine-and-dentistry/acute-myeloid-leukemia-cell-line

The various vitamin D compounds have similar effects on inducing differentiation and inhibiting proliferation of several `acute myeloid leukemia cell lines` such as `HL-60, U937, THP-1, HEL, and NB4`.

In contrast, `more immature myeloid leukemia cell lines` such as `HL-60 blasts, KG1, KGla, and K562` do not respond to the hormone.

Vitamin D analogs inhibit cell growth mainly by inducing cell cycle arrest. Many studies have shown that treated leukemic cell lines accumulate in the G0/G1 and G2/M phase of the cell cycle, with a concomitant decrease in the proportion of cells in S-phase [31–33].

HL-60 cells treated with 1,25(OH)2D3 acquire the morphology and functional characteristics of `macrophages`. Expression of the cell-surface markers CD14 and CD11b are up-regulated. 



## ATCC: Leukemia Cell Line Panel

- https://www.atcc.org/products/tcp-1010

A panel of 7 leukemia cell lines representing Acute Myeloid Leukemia (AML), Acute Monocytic Leukemia (AMoL), Chronic Myeloid Leukemia (CML), and Acute Lymphoblastic Leukemia (ALL). Each culture contains genomic mutations in one or more of the following genes according to the Sanger COSMIC database: CDKN2A, KDM6A, TP53, NRAS, NOTCH1, PTEN, FBXW7, FLT3, KRAS, MLH1, and PIK3R1.

```
Components

KASUMI-1, ATCC CRL-2724
HL-60, ATCC CCL-240
THP-1, ATCC TIB-202
K-562, ATCC CCL-243
RS4;11, ATCC CRL-1873
MOLT-4, ATCC CRL-1582
CCRF-CEM, ATCC CCL-119
```




# APA seq method

These have been extensively reviewed elsewhere [19,97] and include, for example, `PAS-seq, 3′-seq and 3′READS`, which also allow analysis of rare or FACS-purified cell populations.



# HSC -> MPP -> Mature blood cells

> Fig.3 APA Is Differentially Regulated in Stem Cell Hierarchies.
> (B) `HSCs exhibit rather long 3′-UTRs`, and shortening is observed in the MPP compartment. 
In mature blood cells, globally longer 3′-UTRs have been detected. 
No direct quantitative comparison between HSCs/MPPs and mature blood cells is possible at this point, as the studies have been performed independently. 




# 稳态？ cellular homeostasis？怎么研究的？

https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE157583


# AML APA 分化

https://pubmed.ncbi.nlm.nih.gov/34482400/






# CD34+ dataset //todo

## 分离方法

- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6889502/

Briefly, mononuclear cells were isolated using Ficoll (GE Healthcare) and were enriched 60–90% for CD34+ hematopoietic and progenitor cells (HSPCs) (STEM CELL Technologies).


- Colony formation assay
- Cell cycle and apoptosis
	* To discriminate between G0/G1, cells were fixed and permeabilized using the BD Cytofix/Cytoperm kit (BD Biosciences).







## (1) GSE92274 Microwell-Seq

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE92274
- https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA357074&o=acc_s%3Aa

> Lai S, Huang W, Xu Y, Jiang M et al. Comparative transcriptomic analysis of hematopoietic system between human and mouse by Microwell-seq. Cell Discov 2018;4:34. PMID: 29977598

```
We sampled 
7 batches (CD34+_b1-7) of Human CD34+ mobilized peripheral blood stem cells (PBSCs); 
2 batches (CD34+_thawed_l6-7) of thawed Human CD34+ mobilized peripheral blood stem cells (PBSCs) and 
2 batches (CD34-_b1-2) of thawed Human CD34- mobilized peripheral blood stem cells (PBSCs), 
around 5000 single cells per sample.

Human CD34+ cells were selected by human CD34 selection kit (StemCell Technologies Cat #18056), following the protocol provided by the manufacturer. After spin at 300 x g for 5min, the supernatant was removed and CD34+ cells were suspended in 1x DPBS + 2mM EDTA and diluted to ~ 100,000/mL for Microwell-seq. 

After thawing in IMDM medium, human CD34+ cells were suspended in 100μL of PBS+5% FBS for exposure of antibodies.


下载2个: 来自外周血的CD34+细胞。
SRR5099310 4Gb  /Human CD34 positive cells  GSM2424886  CD34+_b6
SRR5099311 6Gb /Human CD34 positive cells  GSM2424887	CD34+_b7
SRR5099312 6Gb  /Human CD34 negative cells  GSM2424888  CD34-_1
SRR5217574 1Gb  /Human CD34 negative cells  GSM2424889	CD34-_2

$ fasterq-dump --split-files SRR5099310
$ fasterq-dump --split-files SRR5099312

$ fasterq-dump --split-files SRR5217574
$ fasterq-dump --split-files SRR5099311

@Z server
$ scp wangjl@y.biomooc.com:/data/wangjl/sra/cell_cycle/cd34/*fastq .

这个是
```



## (2) Microwell-seq 2

- https://pubmed.ncbi.nlm.nih.gov/32977829/

> J Hematol Oncol. 2020 Sep 25;13(1):128. doi: 10.1186/s13045-020-00941-y.
> A single-cell survey of cellular hierarchy in acute myeloid leukemia

```
Using Microwell-seq, a high-throughput single-cell mRNA sequencing platform, we analyzed the cellular hierarchy of bone marrow samples from 40 patients and 3 healthy donors. We also used single-cell single-molecule real-time (SMRT) sequencing to investigate the clonal heterogeneity of AML cells.
```



## (3) GSE144568 (引用很多GSE)

- https://genomebiology.biomedcentral.com/articles/10.1186/s13059-023-03031-7#availability-of-data-and-materials
```
Targeted DNA sequencing and scRNA-seq data used in this study were deposited into the Genome Sequence Archive for Human at the BIG data center, Beijing Institute of Genomics, Chinese Academy of Sciences and China National Center for Bioinformation under accession number HRA001009 [84], HRA000996 [85], HRA001021 [86]. 
The release of these data is permitted by The Ministry of Science and Technology of the People’s Republic of China (permission number 2023BAT0907). 

Published scRNA-seq datasets of healthy donors were available under GEO accession `GSE144568` [10], `GSE120221` [11], `GSE132509` [12], `GSE116256` [21]. 

Bulk RNA-seq data of AML patients were obtained from TCGA [87] and TARGET [88] website. 

The clinical and genetic information were retrieved from their uploaded supplementary Table S1 [57] and the NCI TARGET website [89] for TCGA and TARGET, respectively. 

Published microarray expression dataset for flow cytometry-sorted CD34+CD38− cells from AML patients was obtained under the GEO accession GSE76008 [30]. 

The authors declared that all other data supporting the findings of the study are within the paper and its additional files.
```


## GSE144568 (6 healthy)
- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE144568

We used 10x genomics platform to profile single-cell transcriptome of CD34+Lineage- hematopoietic stem/progenitor cells (HSPCs) derived from 16 human myelofibrosis tissue samples and 5 healthy donors


## GSE120221 (20 healthy, 2018)


## GSE132509: ALL (2020: childhood leukemia)
> Caron M, St-Onge P, Sontag T, Wang YC et al. `Single-cell analysis of childhood leukemia reveals a link between developmental states and ribosomal protein expression as a source of intra-individual heterogeneity`. Sci Rep 2020 May 15;10(1):8079. PMID: 32415257

Assessing intra-individual transcriptional heterogeneity in cALL patients using single cell RNA-seq

10X Genomics 3’ single cell RNA-seq: 

- Pre-B t(12;21) [ETV6-RUNX1] acute lymphoblastic leukemia, 
- Pre-B High hyper diploid [HHD] acute lymphoblastic leukemia, 
- Pre-T acute lymphoblastic leukemia, 
- Healthy pediatric bone marrow mononuclear cells. 

Annotations.tsv contains sample, cell cycle phase, tSNE/UMAP coordinates, and assigned cell type.

```
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE132509

GSM3872434	ETV6-RUNX1_1  SRR9264343
GSM3872435	ETV6-RUNX1_2  SRR9264344
GSM3872436	ETV6-RUNX1_3  SRR9264345
GSM3872437	ETV6-RUNX1_4  SRR9264346
GSM3872438	HHD_1  SRR9264347
GSM3872439	HHD_2  SRR9264348
GSM3872440	PRE-T_1  SRR9264349
GSM3872441	PRE-T_2  SRR9264350

GSM3872442	PBMMC_1  SRR9264352
GSM3872443	PBMMC_2  SRR9264353
GSM3872444	PBMMC_3  SRR9264354

平均 17-26Gb

```




# AML 与 线粒体氧化磷酸化（oxidative phosphorylation，OXPHOS）

https://new.qq.com/rain/a/20230221A02DPF00

https://www.yxj.org.cn/detailPage?articleId=387235


- https://zhuanlan.zhihu.com/p/611206560?utm_id=0 线粒体蛋白亚定位方法



- AML细胞(尤其是LSCs)高度依赖线粒体氧化磷酸化(OXPHOS)存活，但OXPHOS过度活跃的机制尚不清楚，也缺乏抑制OXPHOS的非细胞毒性策略。
- G0, G1, G2-S 怎么区分？
- 在PDX（人源性肿瘤异种移植）小鼠模型上，作者发现敲低MFN2/OPA1导致癌细胞更难在小鼠身上生长
- 作者进一步探究了线粒体融合调控AML增殖和细胞周期的分子机制。通过对于线粒体功能的研究，作者发现敲低MFN2/OPA1导致ROS（活性氧物质）降低。使用活性氧清除剂可以达到MFN2/OPA1敲低一样的增加G0、减少G1细胞比例的效果。


急性髓系白血病（AML）是髓系原始细胞分化障碍及异常扩增导致的血液癌症，也是儿童中继ALL（急性淋系白血病）之后第二常见的白血病。尽管儿童AML疗效在近几十年内有了极大提高，但五年总体生存率仍然只有70%左右。

线粒体是为细胞提供能量的重要细胞器，与癌细胞增殖有密切关系。靶向线粒体蛋白质BCL2的维奈托克与化疗联用取得了良好的AML临床疗效，进一步表明了线粒体相关细胞过程与AML有密切关系。BCL2调控的细胞凋亡仅仅是线粒体的众多功能之一，线粒体的其他功能很可能与AML相关，有可能在线粒体中发现AML的新靶点。

近日，来自瑞士的 Tamburini 团队在 Leukemia 上发表了题为 Mitochondrial fusion is a therapeutic vulnerability of acute myeloid leukemia 的文章。文章发现了抑制线粒体融合可以导致`AML癌细胞在G0/G1细胞周期停滞`，是潜在的AML新治疗方法。



维奈托克是一种一流的靶向药物，旨在选择性地结合和抑制B细胞淋巴瘤-2（BCL-2）蛋白。

在一些血癌和其他肿瘤中，BCL-2会积聚并阻止癌细胞死亡或自毁，这一过程称为细胞凋亡。维奈托克能阻断BCL-2蛋白，帮助恢复细胞凋亡过程。

靶向线粒体蛋白质BCL2的维奈托克与化疗联用取得了良好的AML临床疗效，进一步表明了线粒体相关细胞过程与AML有密切关系。BCL2调控的细胞凋亡仅仅是线粒体的众多功能之一，线粒体的其他功能很可能与AML相关，有可能在线粒体中发现AML的新靶点。



# 亚细胞定位：GFP

目前研究亚细胞定位最常用的是融合报告基因定位法，将目标蛋白与荧光蛋白的N端或者C端融合，通过瞬时转化技术或稳定遗传转化技术，使得该融合蛋白在受体材料细胞内表达，目标蛋白会牵引荧光蛋白一起定位到目标细胞器，在扫描共聚焦显微镜的激光照射下会发出绿色荧光，从而可以精确地定位蛋白质的位置。



