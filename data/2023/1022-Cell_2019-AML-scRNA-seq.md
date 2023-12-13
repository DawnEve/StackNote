Cell_2019 精读笔记


> Single-Cell RNA-Seq Reveals AML Hierarchies Relevant to Disease Progression and Immunity
> https://pubmed.ncbi.nlm.nih.gov/30827681/
> Cell. 2019 Mar 7;176(6):1265-1281.e24. doi: 10.1016/j.cell.2019.01.031. Epub 2019 Feb 28.
> Department of Pathology, Massachusetts General Hospital and Harvard Medical School, Boston, MA 02114, USA; Ludwig Center at Harvard Medical School, Boston, MA 02115, USA; Broad Institute of MIT and Harvard, Cambridge, MA 02142, USA; Center for Cancer Research, Massachusetts General Hospital and Harvard Medical School, Boston, MA 02114, USA.


白血病，也就是我们常说的血癌，是由造血干细胞克隆性增殖所导致的恶性血液疾病。而急性髓系白血病是较为常见的白血病类型之一，一般占急性白血病的70%~80%。患该疾病的老人（65岁以上）有70%会在诊断后的一年内会死亡，死亡较快并且死亡率较高。而AML的致病机制是较为复杂的，受多方面的影响，例如化学物质、放射性物质、遗传因素、基因突变、信号通路异常、表观遗传调控、白血病微环境或免疫失衡等。




# 治疗方法

## 大剂量阿糖胞苷(HiDAC)

阿糖胞苷是一种有机化合物，化学式为C9H13N3O5，临床上主要作为细胞S增殖期的嘧啶类抗代谢药物，通过抑制细胞DNA的合成干扰细胞的增殖。

阿糖胞苷最早在1959年由加州大学伯克利分校的Richard Walwick、Walden Roberts和Charles Dekker合成。美国食品药品监督管理局在1969年6月批准阿糖胞苷进入市场。它最初由Upjohn公司以Cytosar-U的商品名出售这种药物的化学结构是胞嘧啶与阿拉伯糖结合成的核苷，因此得名“阿糖胞苷”。正常情况下，胞嘧啶与另一种糖类（脱氧核糖）结合，形成DNA的成分之一脱氧胞苷。然而有些多孔动物门生物能用阿拉伯糖与胞嘧啶结合成另一种化合物（不是DNA的成分），人们在这些生物体中发现了此化合物，即阿糖胞苷。阿糖胞苷与脱氧胞苷十分类似以至于能够代替后者并入人类DNA，然而结构上的不同又使得DNA无法复制，进而杀死受影响的细胞。用药时，阿糖胞苷以这种作用机理被杀死癌细胞。它是第一种以改变核苷本身而作用的化疗药物——其他更早期的类似药物（如5-氟尿嘧啶）改变的是碱基。


**药理作用**

本品为主要作用于细胞S增殖期的嘧啶类抗代谢药物，通过抑制细胞DNA的合成，干扰细胞的增殖。阿糖胞苷进入人体后经激酶磷酸化后转为阿糖胞苷三磷酸及阿糖胞苷二磷酸，前者能强有力地抑制DNA聚合酶的合成，后者能抑制二磷酸胞苷转变为二磷酸脱氧胞苷，从而抑制细胞DNA聚合及合成。
本品为细胞周期特异性药物，对处于S期增殖期细胞的作用最敏感，对抑制RNA及蛋白质合成的作用较弱。

**功能主治**

主要用于急性白血病：对急性粒细胞白血病疗效最好，对急性单核细胞白血病及急性淋巴细胞白血病也有效。一般均与其他药物合并应用。对恶性淋巴瘤、肺癌、消化道癌、头颈部癌有一定疗效，对病毒性角膜炎及流行性结膜炎等也有一定疗效。




## induction chemotherapy 诱导化疗

一种在手术或放疗之前进行的化疗，旨在缩小肿瘤，使其更容易被手术切除或放疗治疗。

Induction chemotherapy is often used to shrink tumors before surgery or radiation therapy.
诱导化疗通常用于在手术或放疗之前缩小肿瘤。



## 3+7

急性髓系白血病（AML）患者的长期疗效在近20年得到了明显改善[1]–[3]，柔红霉素（DNR）或去甲氧柔红霉素联合阿糖胞苷（Ara-C）（DA或IDA）方案（又称“3+7方案”）目前已经是公认的AML的标准`诱导化疗`方案。然而诱导后的最佳`巩固治疗`，目前尚无定论。

https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7342724/



## HE 染色怎么看？


## FAB 分型 M0-M7

Fig.5F-G; P1274 左下











# 单细胞聚类方法 

- https://blog.csdn.net/qq_44185558/article/details/123209167
- https://blog.csdn.net/weixin_44743001/article/details/121972346

## 技术: BackSPIN 非监督聚类 //todo??

- Fig1A, P1266左下

> Zeisel, A., Mun˜ oz-Manchado, A.B., Codeluppi, S., Lo¨ nnerberg, P., La Manno, G., Jure´ us, A., Marques, S., Munguba, H., He, L., Betsholtz, C., et al. (2015). Brain structure. Cell types in the mouse cortex and hippocampus revealed by single-cell RNA-seq. Science 347, 1138–1142.


CIDR, BackSPIN 和pcaReduce 使用了这种分层聚类方法。然后,用户可以选择最适合所需的类。对于具有许多不同细胞类型的极大型数据集(>100,000个细胞)来说,可能有必要进行多级聚类的.



## KNN - spring 可视化

- https://github.com/AllonKleinLab/SPRING

- 高变基因。
- For KNN visualization we calculated pairwise correlation coefficients between single cells. 
- Then we constructed a graph by connecting each cell to its five most highly correlated neighbors. 
- This graph was visualized using SPRING, an interactive tool that uses force-directed graph drawing.

## tSNE 

- 高变基因
- For t-SNE visualization we used the Rtsne implementation in R and default parameters, except setting the maximum number of iterations to 2,000 (5,000 for the healthy BM data).










# AML细胞系: OCI-AML3, MUTZ-3


# FLT3-ITD(internaltandem duplication, ITD, 内部串联重复)

ITD 被本文认为比突变更抑制分化，能把AML阻滞在祖细胞及之前。



# AML1-ETO //todo

ref: Pabst,2001,Nat Med;

https://baike.baidu.com/item/白血病蛋白AML1-ETO增加细胞凋亡敏感性的机制及其意义研究/58344839?fr=aladdin
https://baike.baidu.com/item/白血病相关蛋白AML1-ETO调控丙酮酸激酶M2的机制及生物学意义/58395551?fr=ge_ala




# Seq-well 数据处理流程

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSM3588004

Data procesing was performed in three main steps:

1) Cell barcodes were extracted from sequencing reads prior to alignment.
2) Reads were aligned to the human genome using STAR guided by RefSeq gene annoations, producing both genome and pseudo-transcriptome alignments.
3) For each cell barcode, reads mapping uniquely to a gene were collapsed by their unique molecular identifier (UMI).
4) For each gene and cell barcode the number of UMIs was used to generate a digital expression matrix (DEM).



# Cell preparation

Aspirates from the iliac crest of normal BM donors and AML patients were processed using density gradient centrifugation to isolate
mononuclear cells, viably frozen with `10% DMSO and stored in liquid nitrogen` (only BM5 was not frozen). Frozen cells were thawed
using standard procedures, and viable cells were enriched using `magnetic removal of dead cells` (Miltenyi Biotec 130-090-101) or
flow cytometry to sort propidium iodide-negative cells.

活细胞: PI- 



## 比对：Transcripts were quantified using the '-quantMode TranscriptomeSAM' option.

STAR

--quantMode TranscriptomeSAM #同时生成基于转录本的比对文件

This resulted in two alignment files, one in which reads were aligned to the genome, and one which contained pseudo-alignments to the transcriptome.









# Generation of the Random forest classifier //todo












# Blood 2020: APA AML 分化

## AML1-ETO 融合原癌蛋白(RUNX1-RUNX1T1)

- AML1 -> RUNX1 @chr21
- ETO -> RUNX1T1 @chr8

t(8, 21)





## BeatAML data set

- https://isb-cancer-genomics-cloud.readthedocs.io/en/latest/sections/data/BEATAML_about.html

The BEATAML1.0 consists of over 220 files with 56 phenotyped subjects, 672 tumor specimens collected from 562 cases, and over 36 TB of data. 

The data is made up of mainly BAM, VCF, TXT, and TSV files. The majority of the data is whole-exome sequencing along with RNA sequencing.


- https://registry.opendata.aws/beataml/

- 下载 https://ftp.ncbi.nlm.nih.gov/dbgap/studies/phs001657/phs001657.v1.p1/

- https://gdc.cancer.gov/about-data/publications/BEATAML1-0-COHORT-2022














## dataset on GEO

3'RNA sequencing and standard RNA-sequencing data of patient samples and healthy HSPC
controls were deposited to the Gene Expression Omnibus, accessions `GSE146657` and `GSE149237`.

FIP1L1 knockdown and control `Kasumi-1` cell RNA-sequencing and 3'RNA sequencing data were
also deposited to GEO, accession `GSE146475`. 

All DNA constructs generated from this study will be
made available by email request or will be submitted to Addgene for purchase.




### 3‘READS of CD34+ primary cells

```
1. down
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE146657 SE-50
Data are 3'RNA-sequencing (3'READS) of CD34+ healthy HSPC controls and CD34+ bead-enriched AML blasts from AML patient samples. 
For analysis, two different healthy HSPC samples were compared to eight patient samples.

- CBF 是什么？  见下文小标题。
- 50bp SE; 0.6-1.8Gb /sample
- 前2个是 Hematopoietic stem and progenitor cells (HSPCs)，其余是 Blasts
- 最后一列死 mutation 信息

GSM4403522	HSPC_6_3'READS  Healthy SRR11272944 
GSM4403523	HSPC_7_3'READS  Healthy SRR11272945

GSM4403524	AML_Pt1_3'READS  AML    SRR11272946 inv(16), trisomy 2, trisomy 8
GSM4403525	AML_Pt2_3'READS  AML    SRR11272947 trisomy 13, trisomy 19, i(17q)
GSM4403526	AML_Pt3_3'READS  AML    SRR11272948 del(5q), gain(11q)
GSM4403527	AML_Pt4_3'READS  AML    SRR11272949 FLT3-ITD

GSM4403528	CBF_Pt1_3'READS  AML    SRR11272950 t(8;21), -Y
GSM4403529	CBF_Pt2_3'READS  AML    SRR11272951 t(8;21), cKIT mut
GSM4403530	CBF_Pt3_3'READS  AML    SRR11272952 t(8;21)
GSM4403531	CBF_Pt4_3'READS  AML    SRR11272953 t(8;21), FLT3-ITD


$ cd /home/wangjl/data/rsa/CD34/
$ mkdir 3READS; cd 3READS
$ fasterq-dump --split-files SRR11272944


2.map 50-SE
$ cd /home/wangjl/data/rsa/CD34/3READS/
$ mkdir map
id=SRR11272944

STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/CD34/3READS/${id}_1.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFilterMatchNminOverLread 0.2 --outFilterScoreMinOverLread 0.2 \
--outFileNamePrefix /data/wangjl/rsa/CD34/3READS/map/short_${id}_

3. index
ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

4.View on scIGV
$ ln -s /data/wangjl/rsa/CD34/3READS/map/ /data/wangjl/HeLa/cell_cycle/CD34_3READS
```





### RNA-seq of CD34+ primary cells

```
https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE149237
RNA-sequencing of CD34+ healthy HSPC controls and CD34+ bead-enriched AML blasts from AML patient samples. 
For analysis, five healthy HSPCs were sequenced and compared to eight AML patient samples, subdivided into four t(8;21) and four non-t(8;21) AML patients.

- 200bp 是双端吗？ 每一个GSM 对应2个SRR号

GSM4403509	HSPC_1_RNA-seq SRR11601147 SRR11601148 2Gb/sample
GSM4403510	HSPC_2_RNA_seq SRR11601149 SRR11601150
GSM4403511	HSPC_3_RNA-seq SRR11601151 SRR11601152
GSM4403512	HSPC_4_RNA_seq SRR11601153 SRR11601154
GSM4403513	HSPC_5_RNA-seq SRR11601155 SRR11601156

GSM4403514	AML_Pt1_RNA-seq SRR11601157 SRR11601158
GSM4403515	AML_Pt2_RNA-seq SRR11601159 SRR11601160
GSM4403516	AML_Pt3_RNA-seq SRR11601161 SRR11601162
GSM4403517	AML_Pt4_RNA-seq SRR11601163 SRR11601164

GSM4403518	CBF_Pt1_RNA-seq SRR11601165 SRR11601166
GSM4403519	CBF_Pt2_RNA-seq SRR11601167 SRR11601168
GSM4403520	CBF_Pt3_RNA-seq SRR11601169 SRR11601170
GSM4403521	CBF_Pt4_RNA-seq SRR11601171 SRR11601172

$ cd /home/wangjl/data/rsa/CD34/
$ fasterq-dump --split-files SRR11601147
把SRR号写入文件，一行一个，共26个。
1$ cat SRR_Acc_List.txt | head -n 6 | tail -n 6 | while read id; do echo $id; 
fasterq-dump --split-files -e 2 $id;
done;
47,48 doing


仅修改第一行，其余2行不变
2$ cat SRR_Acc_List.txt | head -n 12 | tail -n 6 | while read id; do echo $id; 

3$ cat SRR_Acc_List.txt | head -n 18 | tail -n 6 | while read id; do echo $id; 
53,54 doing

4$ cat SRR_Acc_List.txt | head -n 24 | tail -n 6 | while read id; do echo $id; 
65,66 doing

5$ cat SRR_Acc_List.txt | head -n 30 | tail -n 2 | while read id; do echo $id; 
71,72 doing



2. map
$ mkdir map
id=GSM4403509; id1=SRR11601147; id2=SRR11601148 |m->10:21 to 
id=GSM4403510; id1=SRR11601149; id2=SRR11601150 |m->14:36 to
id=GSM4403511; id1=SRR11601151; id2=SRR11601152 |m->14:38 to
id=GSM4403512; id1=SRR11601153; id2=SRR11601154 |m->10:27 to
id=GSM4403513; id1=SRR11601155; id2=SRR11601156 |m->14:40 to
id=GSM4403514; id1=SRR11601157; id2=SRR11601158 |m
id=GSM4403515; id1=SRR11601159; id2=SRR11601160 |m->10:36 to
id=GSM4403516; id1=SRR11601161; id2=SRR11601162
id=GSM4403517; id1=SRR11601163; id2=SRR11601164
id=GSM4403518; id1=SRR11601165; id2=SRR11601166 |m->10:31 to
id=GSM4403519; id1=SRR11601167; id2=SRR11601168
id=GSM4403520; id1=SRR11601169; id2=SRR11601170
id=GSM4403521; id1=SRR11601171; id2=SRR11601172 |m->10:23 to


ls -lth map/$id*; ls -lth $id1*; ls -lth $id2*


STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/CD34/${id1}_1.fastq,/data/wangjl/rsa/CD34/${id2}_1.fastq /data/wangjl/rsa/CD34/${id1}_2.fastq,/data/wangjl/rsa/CD34/${id2}_2.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/CD34/map/${id}_


3. index
ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;


4.View on scIGV
$ ln -s /data/wangjl/rsa/CD34/map/ /data/wangjl/HeLa/cell_cycle/CD34
```




#### (a) featureCounts 基因表达定量

```
$ cd /home/wangjl/data/rsa/CD34
$ mkdir counts

$ ls -lh map/GSM44035*bam #共13个
-rw-rw-r-- 1 wangjl wangjl 7.3G Oct 26 10:25 map/GSM4403509_Aligned.sortedByCoord.out.bam 
...
-rw-rw-r-- 1 wangjl wangjl  14G Oct 26 10:29 map/GSM4403521_Aligned.sortedByCoord.out.bam


$ featureCounts \
-a /data/wangjl/ref/hg38/gencode/GRCh38.p13.gtf \
-p \
-T 10 \
-o counts/featureCounts_GSM44035_matrix.txt \
-t exon -g gene_name \
map/GSM44035*.sortedByCoord.out.bam #13个

仅 38-58% assign 上?? 16 17 才 9%？？

然后使用R t-test 比较DEG: kd vs. wt. 
```

```
featureCounts 的 assign 特别低，有几个相当低，GSM4403516/GSM4403517/GSM4403521: 5.07%, 8.98%, 14.59%

主要原因是 Unassigned_MultiMapping 太高！

$ less counts/featureCounts_GSM44035_matrix.txt.summary 
	GSM4403509	GSM4403510	GSM4403511	GSM4403512	GSM4403513	GSM4403514	GSM4403515	GSM4403516	GSM4403517	GSM4403518	GSM4403519	GSM4403520	GSM4403521
Assigned	69144477	66742895	68397899	57071117	52381920	100059448	87961491	36930779	40794157	60673315	76041775	83764796	54060187
Unassigned_Unmapped	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_Read_Type	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_Singleton	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_MappingQuality	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_Chimera	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_FragmentLength	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_Duplicate	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_MultiMapping	87188598	83687704	95678488	94726194	96559816	38634134	73280646	666996730	393568662	86894526	39173982	35360796	298785322
Unassigned_Secondary	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_NonSplit	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_NoFeatures	19317426	13023705	22658686	19177773	14969230	22053763	24294022	20432359	15889727	18271545	17877881	16334481	12067004
Unassigned_Overlapping_Length	0	0	0	0	0	0	0	0	0	0	0	0	0
Unassigned_Ambiguity	6125195	5289220	6548113	5513962	5014004	9129927	8834925	3530080	3983334	5813452	6958710	7615513	5395521
ratio	38.03835085	39.55286308	35.3874025	32.33691739	31.00898582	58.9010212	45.25441192	5.073676193	8.980831061	35.34652599	54.2952518	58.54583465	14.59870757
total	69.144477	66.742895	68.397899	57.071117	52.38192	100.059448	87.961491	36.930779	40.794157	60.673315	76.041775	83.764796	54.060187
```





#### (b) DaPars 分析 3UTR 使用

DaPars 的使用，参考 http://blog3.dawneve.com/#/post/2023/1005-APA-cell-cycle.md

```
1.准备：需要3个文件
- BED file: a tab separated, 12 columns, which represents the gene model.
- BedGraph file: stores the reads alignment results from an aligned BAM file.
- Gene Symbol file: two columns containing NCBI RefSeq and gene symbol.

(1) 12 列 bed 文件
$ head /home/wangjl/data/ref/hg38/hg38_RefSeq_All_gene.bed 
chr1    67092164        67109072        XM_011541469.2  0       -       67093004        67103382        0       5       1440,187,70,145,44,     0,3070,4087,11073,16864,
chr1    67092164        67131227        XM_017001276.2  0       -       67093004        67127240        0       9       1440,187,70,145,68,113,158,92,86,       0,3070,4087,11073,19412,23187,33587,35001,38977,

(2) To generate the BedGraph files from BAM files
需要
$ head /home/wangjl/data/ref/hg38/hg38_chr_size.txt
chr1    248956422       /gbdb/hg38/hg38.2bit
chr2    242193529       /gbdb/hg38/hg38.2bit
chr3    198295559       /gbdb/hg38/hg38.2bit

$ bedtools --version
bedtools v2.31.0

$ cd /home/wangjl/data/rsa/CD34/
$ mkdir bedGraph
$ bedtools genomecov -bg -ibam /home/wangjl/data/rsa/CD34/map/GSM4403509_Aligned.sortedByCoord.out.bam \
-g /home/wangjl/data/ref/hg38/hg38_chr_size.txt -split > /home/wangjl/data/rsa/CD34/bedGraph/GSM4403509.bedgraph

警告 *****WARNING: Genome (-g) files are ignored when BAM input is provided.
意思就是：有bam则-g参数无效。

列表
$ cat GSE_list.txt 
GSM4403509
GSM4403510
GSM4403511
GSM4403512
GSM4403513
GSM4403514
GSM4403515
GSM4403516
GSM4403517
GSM4403518
GSM4403519
GSM4403520
GSM4403521

$ cat GSE_list.txt | head -n 5 | while read id; do echo $id `date`;
$ cat GSE_list.txt | head -n 9|tail -n4 | while read id; do echo $id `date`;
$ cat GSE_list.txt | tail -n 4 | while read id; do echo $id `date`;
bedtools genomecov -bg -ibam /home/wangjl/data/rsa/CD34/map/${id}_Aligned.sortedByCoord.out.bam \
-g /home/wangjl/data/ref/hg38/hg38_chr_size.txt -split > /home/wangjl/data/rsa/CD34/bedGraph/${id}.bedgraph;
done;

(3)The Gene Symbol file can be downloaded from UCSC Table Browser.
$ head /home/wangjl/data/ref/hg38/hg38_20231006_RefSeq_id_from_UCSC.txt
#name   name2
XM_011541469.2  C1orf141
XM_017001276.2  C1orf141
XM_011541467.2  C1orf141
NM_001276352.2  C1orf141




2. 开始运行 DaPars (Z server)
(1). Generate region annotation
$ hg38RefDir=/home/wangjl/data/ref/hg38/
$ python2 ~/software/dapars/src/DaPars_Extract_Anno.py -b ${hg38RefDir}/hg38_RefSeq_All_gene.bed -s ${hg38RefDir}/hg38_20231006_RefSeq_id_from_UCSC.txt -o ${hg38RefDir}/hg38_refseq_extracted_3UTR.bed
# 1min; Total extracted 3' UTR: 64972

$ head /home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 
chr17   61120198        61129671        XR_001752959.2|LOC107984992|chr17|-     0       -
chr3    132390595       132391049       XR_007096093.1|LOC124909435|chr3|+      0       +
chr11   30794383        30794447        XR_242862.5|LOC101928338|chr11|+        0       +

(2). Sample processing
The files generated in step 1 above will be used in step 2. 

$ cd /home/wangjl/data/rsa/CD34/bedGraph/
$ cat configure_file_AML_HSPC.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1: KO
Group1_Tophat_aligned_Wig=GSM4403514.bedgraph,GSM4403515.bedgraph,GSM4403516.bedgraph,GSM4403517.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2:WT
Group2_Tophat_aligned_Wig=GSM4403509.bedgraph,GSM4403510.bedgraph,GSM4403511.bedgraph,GSM4403512.bedgraph,GSM4403513.bedgraph

Output_directory=DaPars_Output/
Output_result_file=AML_HSPC

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.5
Fold_change_cutoff=0.59
########################


$ cat configure_file_CBF_HSPC.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1: KO
Group1_Tophat_aligned_Wig=GSM4403518.bedgraph,GSM4403519.bedgraph,GSM4403520.bedgraph,GSM4403521.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2:WT
Group2_Tophat_aligned_Wig=GSM4403509.bedgraph,GSM4403510.bedgraph,GSM4403511.bedgraph,GSM4403512.bedgraph,GSM4403513.bedgraph

Output_directory=DaPars_Output/
Output_result_file=CBF_HSPC

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.5
Fold_change_cutoff=0.59
########################


$ python2 ~/software/dapars/src/DaPars_main.py configure_file_AML_HSPC.config
# 17:05->18:16

$ python2 ~/software/dapars/src/DaPars_main.py configure_file_CBF_HSPC.config
# 17:06->18:16





3. 过滤结果
$ pwd 
/home/wangjl/data/rsa/CD34/bedGraph
$ ls -lth DaPars_Output/
-rw-rw-r-- 1 wangjl wangjl 2.6M Nov  9 18:16 AML_HSPC_All_Prediction_Results.txt
-rw-rw-r-- 1 wangjl wangjl 2.6M Nov  9 18:16 CBF_HSPC_All_Prediction_Results.txt

(1)
$ cat /home/wangjl/data/rsa/CD34/bedGraph/DaPars_Output/AML_HSPC_All_Prediction_Results.txt | awk '{print $37}' | sort | uniq -c
   9703 N
      1 Pass_Filter
      5 Y
$ cat /home/wangjl/data/rsa/CD34/bedGraph/DaPars_Output/AML_HSPC_All_Prediction_Results.txt | awk '$37=="Y"{print $1}'
XR_007066191.1|ENOSF1|chr18|-
NM_001365849.1|POU2F1|chr1|+
NM_001198786.2|POU2F1|chr1|+
NR_046273.1|LOC729683|chr17|+
NM_153256.4|PROSER2|chr10|+

目测检测: 
- ENOSF1 是一个重叠基因区域，左侧的 TYMS 可能有一个外显子。
- POU2F1 是一个3UTR超级长(15k)的基因，AML 中偏向 distal 位点。 pubmed 热点基因
- PROSER2 的 3UTR 前有一个 反义lncRNA； pubmed 研究的少 n=8


$ cat /home/wangjl/data/rsa/CD34/bedGraph/DaPars_Output/CBF_HSPC_All_Prediction_Results.txt | awk '{print $37}' | sort | uniq -c
   9578 N
      1 Pass_Filter
      4 Y

(2)
$ cat /home/wangjl/data/rsa/CD34/bedGraph/DaPars_Output/CBF_HSPC_All_Prediction_Results.txt | awk '$37=="Y"{print $1}'
NM_001365849.1|POU2F1|chr1|+
NR_003610.1|PDXDC2P-NPIPB14P|chr16|-
NM_001198786.2|POU2F1|chr1|+
NR_046273.1|LOC729683|chr17|+

- PDXDC2P-NPIPB14P lncRNA

(3) 测试一下其他条件，只要显著就行：
i) 查看 p.adj<0.05 的区域，只有6个
$ cat /home/wangjl/data/rsa/CD34/bedGraph/DaPars_Output/AML_HSPC_All_Prediction_Results.txt | awk '$36<0.05 {print $1"\t"$36"\t"$35}' | sort -k3,3 |wc
   1820    5460  121912

$ cat DaPars_Output/AML_HSPC_All_Prediction_Results.txt | awk '$36<0.05 {print $1"\t"$36"\t"$34}' | sort -k3n | head
XR_007060773.1|LRRC14|chr8|+    1.53261174207e-30       -0.4895
XR_007060770.1|LRRC14|chr8|+    8.92713036381e-25       -0.476
XM_011522485.3|CIITA|chr16|+    3.44595130865e-17       -0.4755
XR_007060775.1|LRRC14|chr8|+    4.76700767994e-28       -0.466
NM_031434.4|TMUB1|chr7|-        9.37077391349e-29       -0.4395
NM_007046.4|EMILIN1|chr2|+      7.42148987846e-15       -0.438
NM_001042698.2|ZSWIM7|chr17|-   1.88795450606e-07       -0.4375
XM_047422111.1|SDF4|chr1|-      3.07284382412e-42       -0.411
NR_024458.1|TPT1-AS1|chr13|+    9.20870493539e-30       -0.404
NM_015227.6|POFUT2|chr21|-      3.12503051716e-06       -0.398

- LRRC14 在 FIP1L1 KD后使用 distal pA
- CIITA 基因重叠太复杂
- TMUB1 在AML中相对 normal 使用 proximal pA; pubmed 热点
- EMILIN1 *显著 在 non-CBF AML 中使用近端。在CBF中极低表达。
- SDF4 在 AML 中使用 p pA
- POFUT2 不明显


$ cat DaPars_Output/AML_HSPC_All_Prediction_Results.txt | awk '$36<0.05 {print $1"\t"$36"\t"$34}' | sort -k3n | tail
XM_006711275.4|UTP25|chr1|+     0.00101210076405        0.391
NM_001364603.1|PDE4D|chr5|-     0.000215435342028       0.3935
NM_015185.3|ARHGEF9|chrX|-      3.27711768152e-08       0.421
NM_000850.5|GSTM4|chr1|+        1.2233901422e-25        0.4765
XM_011516968.3|AGO2|chr8|-      4.00160765044e-10       0.4765
XR_007066191.1|ENOSF1|chr18|-   2.07017570022e-33       0.513
NM_001198786.2|POU2F1|chr1|+    7.4952572481e-10        0.543
NM_001365849.1|POU2F1|chr1|+    7.4952572481e-10        0.543
NR_046273.1|LOC729683|chr17|+   9.81529949332e-13       0.545
NM_153256.4|PROSER2|chr10|+     1.96761349977e-07       0.57

- UTP25 AML distal pA;
- PDE4D 低表达; 
- ARHGEF9 ?
- GSTM4 d pA, hot;
- AGO2 long UTR 15k，不明显;
- ENOSF1 重叠严重
- POU2F1 前文有了。
- PROSER2 前文有了。

(3B)
$ cat DaPars_Output/CBF_HSPC_All_Prediction_Results.txt | awk '$36<0.05 {print $1"\t"$36"\t"$34}' | wc
   1476    4428   77264

$ cat DaPars_Output/CBF_HSPC_All_Prediction_Results.txt | awk '$36<0.05 {print $1"\t"$36"\t"$34}' | sort -k3n | head
NR_003610.1|PDXDC2P-NPIPB14P|chr16|-    6.5694141869e-16        -0.681
XM_005260299.5|COMMD7|chr20|-   6.87266934047e-06       -0.414
XR_007061150.1|LOC101928953|chr8|-      2.08081801301e-06       -0.3975
NM_006965.4|ZNF24|chr18|-       2.21699337859e-06       -0.3955
NM_001042698.2|ZSWIM7|chr17|-   5.22406275854e-07       -0.385
XM_047415857.1|PIGG|chr4|+      1.35929131503e-07       -0.3765
XR_007061146.1|LOC101928953|chr8|-      9.10832671747e-06       -0.3735
XM_047442617.1|SLC25A14|chrX|+  0.0288865603626 -0.366
XM_011522485.3|CIITA|chr16|+    2.28794753743e-08       -0.36
NM_032626.6|RBBP6|chr16|+       0.00339081115361        -0.3595

- COMMD7
- ZNF24
- ZSWIM7
- PIGG
- SLC25A14
- RBBP6

$ cat DaPars_Output/CBF_HSPC_All_Prediction_Results.txt | awk '$36<0.05 {print $1"\t"$36"\t"$34}' | sort -k3n | tail
NM_015185.3|ARHGEF9|chrX|-      0.00121713163131        0.332666666667
XM_047440740.1|LTN1|chr21|-     0.000272685137741       0.337
NM_001037165.2|FOXK1|chr7|+     2.22657812104e-06       0.34
NM_002207.3|ITGA9|chr3|+        1.23821614708e-08       0.3595
XM_011516968.3|AGO2|chr8|-      7.04102850115e-08       0.364
XM_047441913.1|INTS6L|chrX|+    0.000124597725779       0.392
XR_007064479.1|AVEN|chr15|-     0.00429944619554        0.394
NR_046273.1|LOC729683|chr17|+   1.68550399056e-20       0.55
NM_001198786.2|POU2F1|chr1|+    2.0798458228e-10        0.5605
NM_001365849.1|POU2F1|chr1|+    2.0798458228e-10        0.5605

- ARHGEF9
- LTN1
- FOXK1
- ITGA9
- INTS6L
- AVEN
- POU2F1
```













## CBF 是什么？

核心结合因子相关急性髓系白血病（CBF-AML）是急性髓系白血病（AML）中较常见的细胞遗传学亚型，约占AML总数的15％，该病包括2种遗传学表型，为t(8;21)(q22;q22)和t(16;16)(p13.1;q22)/inv(16)(p13.1q22)，分别导致RUNX1-RUNX1T1和CBFB-MYH11融合基因。尽管相对其他AML亚型而言，CBF-AML患者的预后相对更好，但高达40%的患者会出现疾病复发。








- congenital [kənˈdʒenɪt(ə)l] adj. （病症等）先天的，天生的；（特定性格等）与生俱来的，生性的
- neutropenia [ˌnjuːtrəˈpiːnɪə] n. 嗜中性白血球减少症

- pyruvate [paɪˈruːveɪt] n. [有化] 丙酮酸盐；丙酮酸酯
- dehydrogenase [ˌdiːhaɪˈdrɒdʒəneɪz] n. [生化] 脱氢酶

- acetylation [əˈsetɪˌleɪʃən] n. 乙酰化作用

















# 免疫学杂志丨NF-kB 诱导激酶控制先天免疫细胞的线粒体呼吸能力、分化和炎症状态

https://zhuanlan.zhihu.com/p/614653693





# MTCH2 敲除 促进 AML 分化


## esterase staining 酯酶染色法


### 非特异性酯酶染色（nonspecific esterase stain）

> (Blood,2020 MTCH2)The addition of C646 prevented the increase in nonspecific esterase staining and histone acetylation, and restored the growth of MTCH2 knockdown cells to wild-type levels (Figure 3B-D and supplemental Figure 7).


**Non-specific esterase staining**
Cytospin slides were prepared for cells and subsequently stained for nonspecific esterase activity, following manufacturer’s instructions (Sigma-Aldrich). The stain intensity was quantitatively analyzed by ImageJ.



```
【参考范围】
胞浆中出现棕黄色颗粒为阳性。在单核细胞、i吞噬细胞中此类酶的含量较多且多数受到氟化钠（NaF）抑制；粒细胞、i淋巴细胞、i部分幼红细胞、i巨核细胞和血小板等呈阴性。

【影响因素】
1.酶的活性随标本采集后的时间而逐步下降，l应取材2d内染色。
2.a-NAE最佳反应pH为6.0～6.3之间。
3.染色时间和温度要相对恒定。
4.各种基质试剂由于其产品衍生物较多，l染色效果可随产地、i生产厂商及不同批号等因素相差甚远，l所以每次操作应设阴、i阳性对照。
5.在酯酶染色反应中切记基质浓度过高，l以防引起背景污染，l冲洗困难，l特别在冬天，l易使涂片表面产生脂质沉淀，l影响结果观察。

【临床意义】
1.非特异性酯酶又称单核细胞酯酶，l主要存在于单核细胞和组织细胞内，l正常单核细胞细胞各阶段均成阳性，l且可被氟化钠抑制。
2.急性粒细胞白血病可呈阳性或弱阳性，l急性早幼粒细胞白血病细胞呈强阳性，l但不被氟化钠抑制。
3.急性淋巴细胞白血病一般为阴性。
```





# Homoharringtonine  (Synonyms: 高三尖杉酯碱; Omacetaxine mepesuccinate; HHT)

- Homoharringtonine (Omacetaxine mepesuccinate;HHT) 是具有抗肿瘤特性的细胞毒性生物碱，其通过抑制翻译延长来起作用。
- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4292778/

Homoharringtonine (HHT) is a natural cephalotaxus alkaloid that is derived from the Cephalotaxus species found in China. It has been widely used in China for the treatment of acute myeloid leukemia (AML) and chronic myeloid leukemia (CML) for more than 3 decades. In the United States, the semi-synthesized HHT, known as Omacetaxine, has been approved by FDA in the setting of CML after failure of 2 or more tyrosine kinase inhibitors (TKIs) (Kantarjian et al., 2013). HHT exhibits its anti-leukemic effects in myeloid leukemia primarily through inhibition of protein synthesis, cell proliferation and by enhancing apoptosis of leukemic cells (Zhou et al., 1995; Yinjun et al., 2004; Tang et al., 2006).

机制: 在髓系的抗肿瘤作用，主要通过 抑制蛋白合成、细胞分裂，增强凋亡。







# venetoclax （维奈克拉）靶向药 

AML目前治疗手段

AML常见的治疗手段为最初始阿糖胞苷化疗，后又发展为造血干细胞移植。但是使用传统疗法的患者5年总生存率（OS）都较低，60岁以下患者OS为40%，60岁以上患者5年OS更是仅为10% ~ 20%。但在过去的几十年中，由于技术的停滞不前，所以一直也没有更好的治疗手段，但是从2016年起AML的治疗迎来突破，FDA相继批准了多款治疗AML的药物，并且有较好的临床效果，下表为一些用于治疗AML的药物。小编通过本篇文章来着重讲述Bcl-2靶点与全球首款Bcl-2抑制剂Venetoclax（维奈克拉片）。


Bcl-2靶点

B细胞淋巴瘤2蛋白（Bcl-2）家族具有抑制或促进凋亡的作用，其中Bcl-2等蛋白抑制凋亡，Bax等蛋白促进凋亡。由于Bcl-2影响细胞凋亡，所以一直是治疗癌症的主要靶点的研究目标，至今发现该靶点也已经接近40年。Bcl-2的主要作用是调节细胞凋亡。在AML中Bcl-2的高表达会导致患者的康复效果较差，抗凋亡Bcl-2的过度表达将导致在化疗期间AML细胞难以根除，产生耐药性。


Venetoclax

Venetoclax（维奈克拉片）是由艾伯维公司研发，2016年4月11日，经FDA批准上市，为全球第一款Bcl-2抑制剂，该药不仅为Bcl-2蛋白抑制剂的同类首创药物，也是蛋白-蛋白相互作用领域首个获批的小分子药物，具有里程碑意义。2020年12月2日，维奈克拉片在我国获得批准，与阿扎胞苷联合使用治疗75岁以上急性髓系白血病患者。

Venetoclax对Bcl-2的BH3结合域具有高亲和力，可以通过抑制AML细胞中Bcl-2的高表达，从而促进细胞凋亡和抑制细胞增殖。Venetoclax可用于慢性淋巴细胞白血病、急性髓性白血病和多发性骨髓瘤的治疗。目前该药物有10 mg、50 mg以及100 mg共3种规格。初始剂量为第一周每天1次，每次20 mg，经5周剂量爬坡后可达到每天400 mg的剂量。








