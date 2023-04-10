# NGS同时检测 骨髓增生异常综合征 骨髓移植后 突变率和嵌合性 (J Clin Med. 2019)
> https://pubmed.ncbi.nlm.nih.gov/31795155/ 
> Simultaneous Monitoring of Mutation and Chimerism Using Next-Generation Sequencing in Myelodysplastic Syndrome
> https://www.mdpi.com/2077-0383/8/12/2077
> 附录S2有SNP位点列表，pdf格式。

## 名词解释:

- 白血病微小残留病（minimal residual disease，MRD）是复发的主要根源。
- 骨髓增生异常综合征(myelodysplastic syndrome,MDS)是一组以骨髓细胞发育异常和无效造血、外周血细胞减少以及具有向急性髓细胞性白血病转变风险为特征的克隆性造血系统疾病
- chimerism [kaɪˈmɪərɪzəm] n. 嵌合性；[遗] 嵌合现象
- allogeneic hematopoietic stem cell transplantation (allo-HSCT);
- allogeneic [ˈæləʊˌdʒenɪk] adj. 同种异体的；同种异系的


## 摘要

移植后 + 供者
We enrolled patients who were diagnosed with MDS and received allo-HSCT and their corresponding donors. 

监控 MRD: 53个DNA样本，计算治疗后mutant allele burden
Monitoring MRD by NGS assay was performed using 53 DNA samples by calculating mutant allele burden after treatment. 

监控 嵌合性: 评估后挑选121个SNP，九三平均供者allele burden。
For monitoring chimerism by NGS, we selected 121 single nucleotide polymorphisms (SNPs) after careful stepwise evaluation and calculated average donor allele burden. 


NGS获取的信息与骨髓作比较，基于染色体分析-短散重复序列的分析。
Data obtained from NGS were compared with bone marrow findings, chromosome analysis and short tandem repeat (STR)-based chimerism. 

SNP技术分析嵌合性更精确，优于STR方法。
SNP-based NGS chimerism analysis was accurate and even superior to conventional STR method by overcoming the various technical limitations of STR. 


In addition, simultaneous monitoring of mutation and chimerism using NGS could implement comprehensive pre- and post-HSCT monitoring of various clinical conditions such as complete donor chimerism, persistent mixed chimerism, early relapse, and even donor cell-derived diseases.


## 文章细节: 

流程:
1. fastq file(cutadapt, sickle) -> bwa+picard
2. BAM file -> samtools mpileup
3. Mpileup file -> varscan
4. VCF file ->
5. informative SNP selection
6. Reads counts for targeted sites(use Mpileup file in step4)-> sequenza mpileup2acgt
7. Donor chimerism calculation: chimerism analysis 


### 2.4. Customised NGS Panel Analysis

设计了87个基因。
NGS was performed using a customized myeloid panel containing 87 genes frequently mutated in patients with MDS and myeloproliferative neoplasia (Supplementary Table S1). 

靶向文库。
Target capture sequencing was performed using a customized target kit (3039061, Agilent Technologies, Santa Clara, CA, USA) according to the manufacturer’s instructions. 

建库，测序 101bp PE。
DNA libraries were constructed according to the protocol, and the customized target kit was performed using an Illumina HiSeq4000 platform to generate 101 bp paired-end reads. 

去接头和低质量的序列。
We used cutadapt [12] and sickle (https://github.com/najoshi/sickle, accessed on 29 October 2015) for removing adapter sequences and low-quality sequence reads. 

BWA比对到hg19上。
Burrows-Wheeler aligner [13] was used to align the sequencing reads onto the human reference genome (hg19). 

使用GATK做
local realignment, 局部比对
score recalibration, 打分再校准
filtering of sequence data. 过滤序列
We used a Genome Analysis ToolKit (GATK) [14] for local realignment, score recalibration, and filtering of sequence data. 

picard和 samtools 用于产生 mpileup 文件。
Picard (https://github.com/broadinstitute/picard, accessed on 18 May 2015) and Samtools [15] were also used for basic processing and management of the sequencing data and generated mpileup file. 

VarScan 来找突变。
VarScan v.2.3.9. (http://varscan.sourceforge.net/, accessed on 16 September 2015) was used to call variants. 

使用Samtools mpileup and sequenza回去计算目标点的碱基个数，计算供者嵌合率。
The donor chimerism and mutant allele burden (MAB) were calculated using reads counts for the four bases (A,C,G,T) on target sites retrieved by Samtools mpileup and sequenza [16]. 

Figure 1 illustrates the analytical work flow.


### 2.6. SNP-Based NGS Chimerism Analysis

对于NGS嵌合分析，我们回顾了所有被鉴定的SNPs在普通韩国人群中的杂合度频率
For NGS chimerism analysis, we reviewed all the identified SNPs as the frequency of heterozygosity in the general Korean population (the Korean reference genome database investigated 1722 Korean individuals). 

纯合位点: 90-100%，
杂合位点: 45-60%。
The homozygous and heterozygous alleles were determined by base count frequency of 90–100% and 45–60% [8], respectively. 

从韩国数据库中选择嵌合度 0.2-0.8 的杂合位点，用于嵌合度分析的要满足条件：
We examined 153 SNPs with a frequency of heterozygosity ranging from 0.2 to 0.8 in the Korean database and selected optimal SNPs for NGS chimerism analysis based on the following criteria: 
(1) >500 mean read depth, 
(2) ≤0.2% BE, and 
(3) <10% measurement error of heterozygous alleles (ME, difference of read count between reference and alternative alleles) [19]. 


? background error (BE)


最后选择了 121 个SNP位点(supp S2表格)。

Finally, 121 SNPs were selected for NGS chimerism analysis (Supplementary Table S2), and the average read depth, %BE, and %ME of selected SNPs were 1398.3 ± 538.9, 0.082% ± 0.035%, and 3.31% ± 2.27%, respectively. 


Donor allele burden of each SNP was calculated according to the following formula; 
- A/(A+a) [Donor(AA) and Recipient(aa)], 
- a/(A+a) [Donor(aa) and Recipient(AA)], 
- 1-2x{a/(A+a)} [Donor(AA) and Recipient(Aa)], 
- 1-2x{A/(A+a)} [Donor(aa) and Recipient(Aa)]. 
- Donor chimerism was defined as the average donor allele burden [19].

> 8. Aloisio, M.; Licastro, D.; Caenazzo, L.; Torboli, V.; D’eustacchio, A.; Severini, G.M.; Athanasakis, E.A. Technical application of quantitative next generation sequencing for chimerism evaluation. Mol. Med. Rep. 2016, 14, 2967–2974





# 定量NGS进行嵌合分析的技术应用 (Mol Med Rep. 2016)
> A technical application of quantitative next generation sequencing for chimerism evaluation
> Department of Life Sciences, University of Trieste, I‑34127 Trieste, Italy.
> https://pubmed.ncbi.nlm.nih.gov/27499173/
> https://www.ncbi.nlm.nih.gov/pmc/articles/pmid/27499173/
> Ion Torrent 测序仪。

一个 44 扩增子的panel + 自定义生信管线(基因分型、定量)。
Based on the technology of Ion AmpliSeq, a 44-amplicon custom chimerism panel was designed, and a custom bioinformatics pipeline dedicated to the genotyping and quantification of NGS data was coded.

平均 16 个有效受者 等位基因。 检测极限为 1%。
The custom chimerism panel allowed identification of an average of 16 informative recipient alleles. The limit of detection of the protocol was fixed at 1% due to the NGS background (<1%). The protocol followed the standard Ion AmpliSeq library preparation and Ion Torrent Personal Genome Machine guidelines. 

Overall, the present study added to the scientific literature, identifying novel technical details for a possible future application of NGS for chimerism quantification.

供者来源的细胞占100%，叫做全完嵌合(complete chimerism (CC))。
供者+受者共存，叫混合嵌合(mixed chimerism (MC))。
Chimerism analysis is a tool that allows to determination of the genotypic origin of post-transplantation hematopoiesis. Subsequent to HSCT, a patient presenting with 100.0% donor-origin cells during follow up is considered to have the status of complete chimerism (CC), patients in which the donor- and recipient-origin cells coexist have the status of mixed chimerism (MC) (7). 
有效基因标记用于区分供者、受者的基因组，来检测嵌合状态。
Informative genetic markers are used to discriminate between recipient and donor genomes in order to detect the chimerism status (8).



## 等位基因的筛选(Ion AmpliSeq custom chimerism panel design)

A multi phase strategy was employed to evaluate the main characteristics of the ACCh panel: 

人群中，这些位点的平均杂合度 0.5。
i) The panel average heterozygosity was assessed around 0.5 for the European population (HapMap Phase 3 CEU population); 

每个染色体选2个主 SNP，位于同一个染色体的不同区域。
ii) two SNPs per somatic chromosome, termed 'main SNPs' (mSNPs), were selected and located in two different regions of the same chromosome; 

扩增子组成满足如下条件：
iii) the amplicon composition was evaluated according to the following requirements: 
a) GC percentage ranging between 40.0 and 60.0%; 
b) presence of one mSNP inside each amplicon; 
c) mSNP location preferably in the centre of the amplicon; 
d) absence of INDEL SNPs; 
e) absence of homopolymers and potential homopolymer generation from SNP variants and their flanking regions; 
f) absence of flanking SNPs to the mSNPs.


选取的SNP在正文表格II中。
https://www.ncbi.nlm.nih.gov/snp/ 现在用 GRCh38。
In total, 44 single-nucleotide, biallelic, polymorphisms were selected from the NCBI dbSNPs database (http://www.ncbi.nlm.nih.gov/SNP/, build 138, last database update 28.03.2014; Table II). 

包含SNP位点的4碱基序列作为目标来设计引物。
A total of 4 base sequences including mSNPs were used as target regions for primer design. The primer pool, intended for DNA library construction through multiplex PCR, was defined by Ion AmpliSeq Designer software, version 3.0.1 (Thermo Fisher Scientific, Inc.). A single-tube, 44 primer pair pool was purchased from Life Technologies (Thermo Fisher Scientific, Inc.).


## Hotspot panel bed file
使用UCSC 基因组浏览器创建热点的bed文件。
A hotspot panel bed file was created using the UCSC Genome Browser (https://genome.ucsc.edu). 

扩增子中间的SNP位点都包含。
All SNPs located in the central region of each amplicon were included (NCBI dbSNPs build 138; 'Common SNPs' =286). 

扩增子中的Indel，接近两端的SNP都去掉。
All the INDELs present across the amplicons, and the SNPs near the 5′ and 3′ ends of the amplicons were excluded from the file. 

以上44个选择的SNP作为 mSNP，同一个扩增子的SNP使用相同的chr和扩增子id进行索引。
All the above 44 selected SNPs were marked as 'mSNP' and the SNPs belonging to the same amplicon were indexed with the same chromosome/amplicon ID number. 
最后，一个热点面板bed文件创建好了：HP286SNPs
Finally, a hotspot panel bed file was created: 'HP286SNPs'.


## 基因分型和定量(Genotyping and quantification)

Genotyping of all DNA was performed automatically, together with the quantification of all the chimeras, using a custom bioinformatics tool. 

使用 R Shiny 写的网络app。函数功能见图1，代码问我们要。
The code of our tool was written using the Shiny package in R, a web framework to build interactive web applications (https://cran.r-project.org/web/packages/shiny/index.html). A functional diagram of the code is presented in Fig. 1 and the full code is available on request. The code is based on dependencies of the Bioconductor package that must be pre-installed for proper tool functionality.

图1: (如下)Code functional diagram. 
需要
	三个(移植前2个，移植后1个)的bam、bai文件。
	热点的bed文件和基因分型文件
计数：仅对bed定义的点计算ATGC四种碱基的count
过滤：
	如果三个中都没有定义某个SNP，则去掉该SNP
	未定义的基因型的SNP去掉
选择：有意义的受体等位基因(informative recipient alleles(IRA))
计算：基于IRA计算嵌合度：IRA 碱基数/总碱基数
统计分析: 均值，标准差，标准误，95%置信区间。


使用R包GenomicAlignments中的2个函数:readGAlignments和pileLettersAt对bam按bed提取碱基。
Briefly, it uses `readGAlignments` and `pileLettersAt` functions, from the `GenomicAlignments` package (13), to read bam files and extracts the letters/nucleotides into a set of individual genomic positions defined from the bed file. 

对于供者和受者，纯合和杂合基因型的定义是：90-100%，30-60%。
Thresholds for 'Donor' and 'Recipient', homozygous and heterozygous genotyping calls, are settled in base counts frequency ranges of 90.0–100.0% and 30.0–60.0%, respectively. 

该范围外的认为不可信，排除掉。
Genotyping calls not included in the thresholds ranges were excluded as unreliable; users can modify the thresholds according to their needs from the user interface.

Genotypes from each library were crosschecked to select only SNPs comparable in all conditions. 

按如下筛选 有效受体等位基因:
Selected SNPs from donors and recipients were labelled as informative recipient alleles (IRA) according to the following schema: 
Donor homozygous and recipient heterozygous [Donor (AA) and Recipient (Aa); Donor (aa) and Recipient (Aa)]; 
donor and recipient homozygous for different alleles [Donor (AA) and Recipient (aa); Donor (aa) and Recipient (AA)].

```
	供者: 受者
1	纯合,杂合
	AA:Aa
	aa:Aa
2	纯合,纯合
	AA:aa
	aa:AA
```


Only the IRA SNPs tagged as informative were used to calculate the chimera's donor:recipient ratio as median of the allele frequency ratio, while standard error was used to calculate confidence intervals of prediction at 95.0%.

To cross validate the tool, genotyping of all donor and recipient samples was also performed manually obtaining the variant data from the Ion Torrent plugin Variant Caller, version 4.4 using the 'Generic-PGM-Germ Line-Low Stringency' configuration coupled by the HP286SNPs hotspot bed file.


--- 

- single nucleotide polymorphism, SNP;









# NGS监视混合嵌合性(Clin Chim Acta. 2021)
> Development and performance of a next generation sequencing (NGS) assay for monitoring of mixed chimerism
> Devyser AB, Instrumentvägen 19, SE-126 53 Stockholm, Sweden. Electronic address: Linnea.Pettersson@devyser.com.
> https://pubmed.ncbi.nlm.nih.gov/33227269/

- mixed chimerism (MC) 
- measurable residual disease (MRD)

优势:
Real-time PCR displayed excellent sensitivity (>0,01%) but poor accuracy (>20 CV% at MC > 20%), while fragment analysis exhibited good accuracy (<5 CV% at MC > 20%) with limited sensitivity (>2,5%). 

In contrast, NGS chimerism demonstrated a sensitivity (>0,1%) equal to real-time PCR and an accuracy equal or better than STR analysis throughout an extensive range of mixed chimerism (0,1 - 100%).

评价:
To evaluate performance of the separate techniques for chimerism determination, 75 retrospective patient monitoring samples (3-7 weeks post-HSCT) with low (<5%), intermediate (5-20%) or high mixed chimerism (>20%) were analyzed. 

The between run precision for the NGS assay varied from 0,72% (>20% MC) to 7,38% (MC < 5%). 

In conclusion, NGS displayed a combination of high sensitivity with good accuracy in both artificial and clinical chimerism samples.


质控:
移植前100个reads，移植后 5000 个reads/样品。
The minimum number was defined as 100 paired reads per pre-transplant sample and 5000 per post-transplant sample. 
5000个PE reads 允许 查询 0.1% 位置上，使用5个PE reads达到 10x 覆盖度。
5000 paired end (PE) reads allow a chimerism call of 0.1% using 5 PE-reads that provide a depth of coverage of 10X.


We here show that a novel NGS-based chimerism product (Devyser Chimerism), displays excellent accuracy, precision and sensitivity of MC.



## Devyser Chimerism NGS (一家公司)
> https://devyser.com/kits-and-reagents/devyser-chimerism-ngs

Detect graft rejection and disease relapse in stem cell transplant patients at a very early stage with an advanced, single-protocol chimerism testing solution.
- Quickly detect graft rejection, disease relapse and minimal residual disease by tight monitoring
- Reduce hands-on time, below 45 minutes
- High precision and sensitivity down to >0.05 percent


### lineage-specific 嵌合率分析 能预测ALL移植后的复发(EJHaem. 2022)
> Early relapse prediction after allogeneic hematopoietic stem cell transplantation for acute lymphoblastic leukemia (ALL) using lineage-specific chimerism analysis
Post-transplantation
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9713209/
> Clinical Immunology and Transfusion Medicine Karolinska University Hospital Stockholm Sweden.

就是对细胞分亚群，看亚群特异的嵌合率，预测复发。


`Micro-chimerism` is defined as mixed chimerism (MC) <1 % in the sample of interest and may be of importance when chimerism is analyzed in the context of MRD and relapse. 

Studies have shown that progression of MC to complete donor chimerism (CDC) generally occurs in the `first 1–2 months post-HSCT` and association with relapse risk is mainly found for patients with persistent `increasing mixed chimerism (IMC)`.

The purpose of this study was to identify the optimal use of lineage-specific recipient-donor chimerism analysis for prediction of relapse in ALL.

Interestingly, although B-ALL (B-lymphocytes) was studied, relapse was associated with increased recipient chimerism in CD3+ bone marrow cells (T-lymphocytes) which had been sampled at least 30 days before a relapse in adults.

Relapse could be predicted with a sensitivity of 73% and a specificity of 83%. Similar results were obtained for children but with a higher recipient chimerism cut-off.


### 2.2. Cell separation and chimerism analysis
- 对于血液和骨髓，分单阳性的细胞亚群。
- 按文献10分析嵌合率。
- 分离细胞的纯度没有评估，但方法学验证时做了检验。
	* 血液样本 >95%，骨髓样本 70%–90%
- 嵌合率使用受者百分比。

Cells were routinely separated into the major cell types `(CD3+, CD19+, or CD33+ for blood samples` and `CD3+, CD19+, CD33+, or CD34+ for bone marrow samples)`, and chimerism was analyzed as previously described [10]. The purity of cell separations is not routinely assessed but has been tested during the validation of the methods. The purity for blood samples was generally >95% and for bone marrow samples 70%–90%. Throughout, samples categorized as positive for a CD marker are merely enriched for cells positive for the CD marker. Sampling was performed at each clinician's discretion. Chimerism results are presented as percent recipient throughout.

> 10. Lindahl H, Vonlanthen S, Valentini D, Björklund AT, Sundin M, Mielke S, et al. Lineage‐specific early complete donor chimerism and risk of relapse after allogeneic hematopoietic stem cell transplantation for acute myeloid leukemia. `Bone Marrow Transplant`. 2022;57(5):753–9



## 嵌合率检测方法
发育路径特异的嵌合体 及移植后复发风险
There are reports suggesting that even low absolute values of chimerism or subtle increments over time may predict relapse [17, 21]. 

For this reason, we argue that a method, or combination of methods, that achieves both high sensitivity and accuracy is required to harness the full potential of chimerism analysis for relapse prediction.


Chimerism

嵌合率大多通过 STR-PCR 定量，或 qRCR。
The majority of the chimerism results were generated by STR-PCR quantification using capillary electrophoresis or qPCR. 

两个方法都预先筛选受者和供者DNA，找有信息的标记，
然后使用 一个 (STR-PCR) 或 两个 (qPCR) 指标用于分析移植后的嵌合率。
Both methods included prior screening of recipient and donor DNA to find informative markers, 
for which one (STR-PCR) or two (qPCR) were used for chimerism analysis of post-HSCT samples. 

qPCR方法使用 Thermo 的共24个不同的位点的SNP/indel探针。
The qPCR method was based on Taqman probes (ThermoFisher) of single nucleotide polymorphisms (SNP) or indels at 24 different loci. 

常规地，混合嵌合量高的选择 STR-PCR 方法，因为该方法精确性高。
Routinely, STR-PCR was chosen for samples with higher amounts of mixed chimerism, taking advantage of the method’s good accuracy, 
嵌合率低的选择 qPCR，因为该方法灵敏度高。
and qPCR was chosen for samples with low amounts of mixed chimerism, taking advantage of the method’s good sensitivity [18]. 

在2020年，以上都可以被NGS替代了。
In 2020, these two methods were replaced by a NGS-based method (Devyser AB, Stockholm, Sweden), which has both good accuracy throughout the analytical range and good sensitivity [19]. 

嵌合现象报告为受体DNA的百分比。
不能产生可信嵌合体的样本都去掉了。
Chimerism is reported as percentage of recipient DNA throughout. 
Samples that did not generate a reliable chimerism result due to technical issues were removed in this study.
骨髓和血液样本的嵌合分析按医嘱，取样并不统一。
Bone marrow and blood samples for recipient chimerism analysis were taken at the clinician’s discretion and sampling frequencies are not uniform (Table 2).
最后，嵌合率在某时间点缺失的病人排除掉。
Consequently, patients were excluded when chimerism results were unavailable at time points and/or from sample types of interest for the analyses.

> 19. Pettersson L, Vezzi F, Vonlanthen S, Alwegren K, Hedrum A, Hauzenberger D. Development and performance of a next generation sequencing (NGS) assay for monitoring of mixed chimerism. Clin Chim Acta. 2021;512:40–48. doi: 10.1016/j.cca.2020.10.034

细节见下文。


## 回到该文章的 方法学

(1) STR and RQ-PCR analysis (作为对照方法)

移植前的病人和供者DNA样本，通过室内STR方法筛选有信息的STR标记。
In brief, patient and donor DNA samples were screened for informative STR markers prior to HSCT using the in-house STR method.

同时做了商业的STR嵌合检测。
Additional experiments using a commercial STR-based chimerism assay were performed running samples in triplicates with the Powerplex 16 system (Promega Biotech AB, Nacka, Sweden) according to the manufacturer’s instructions applying modifications according to [23].

qPCR 使用的引物和探针是用的文献的。
The primers and probes used for RQ-PCR chimerism
analysis and its performance was adopted from the paper by Alizadeh
et al. [22]. 

> 22. M. Alizadeh, M. Bernard, B. Danic, C. Dauriac, B. Birebent, C. Lapart, et al.Quantitative assessment of hematopoietic chimerism after bone marrow transplantation by real-time quantitative polymerase chain reaction Blood, 99 (12) (2002), pp. 4618-4625


(2) 2.5. NGS chimerism analysis

该NGS试剂盒基于 靶向24 indel 的测序，衡量它们的频率。
The Devyser Chimerism NGS kit is based on targeted sequencing of 24 indels and measuring their allele frequency. 

每个样本使用一个包含24个引物对的PCR反应，产生扩增子1文库(PCR1)。
Each sample is amplified using a single multiplex PCR reaction containing 24 primer pairs to create a target amplicon library (PCR1). 

第二个PCR反应中(PCR2)，添加测序引物+样本index，这样可以96个样本合并进行测序。
In a second PCR reaction (PCR2), sequencing adapters including unique index sequences are introduced into each amplicon, enabling pooling of up to 96 samples in each sequencing run. 

PCR2混样进行纯化，然后 75bp 双端测序。
The PCR2 pools were purified using Devyser Library Clean according to manufactures instructions (Devyser AB, Stockholm, Sweden) and sequenced 2 × 75 cycles on Illumina MiSeq instruments.


(3) 2.6. Sequencing data analysis and quality control

de-multiplexing: 按index区分样本。

仅保留双端平均测序 Q>26 的部分，保证测序质量。
and only read pairs, where the average QC score was higher than 26, were retained to secure the use of only high quality reads and to mitigate any potential sequence quality issues. 

匹配match + 比对align
通过质控的 read 比对到 24 个扩增子上，使用k-mer算法延伸。
All reads passing the quality check were aligned against the 24 amplicons using a seed and extend k-mer based algorithm (k equal to 5). 
一个改编的 Smith-Weatherman algorithm 算法用于把R1和R2比对到参考基因组。
An adapted Smith-Weatherman algorithm was subsequently used to align against the reference and the alternate sequence for both read1 and read2.


如果R1和R2都匹配到ref上(最多3个mis-match和1个碱基的indel)，比对也符合，这个读段就分配到这个扩增子，属于这个单倍型(ref or alt)，用于计算嵌合率。
If both read1 and read2 matched the reference or the alternate sequence (with at most 3 mis-matches and one base pair long indel) and their alignment agreed, then the read pair was assigned to the amplicon and to the corresponding haplotype (i.e., reference or alternate) and it was used to calculate chimerism. 

其他情况(R1和R2不一致，能比对上、但是其他单倍型)，这个读段对被认为不可信，分类为噪音，不用于计算嵌合率。
In all other cases (e.g., read1 and read2 did not agree, the reads aligned but they showed an unknown haplotype, etc.) the read pair was judged unreliable, was classified as noise and not used to compute chimerism. 

如果没有有效标记达到最低读段对，则该样本认为失败。
A sample was considered failed if there were no informative markers reaching/fulfilling the minimum number of paired reads. 

最低读段定义为 100 读段对/移植前样本，5000/移植后样本。
The minimum number was defined as 100 paired reads per pre-transplant sample and 5000 per post-transplant sample. 

5000个成对读段(PE)能识别0.1%的嵌合，使用5个PE读段提供10X的覆盖深度。
5000 paired end (PE) reads allow a chimerism call of 0.1% using 5 PE-reads that provide a depth of coverage of 10X.




(4) Chimerism calculations 嵌合率的计算

- homozygous [ˌhɒməˈzaɪɡəs] adj. 纯合子的；同型结合的
- variant allele frequency (VAF) 变异等位基因频率
- heterozygous [ˌhetərəˈzaɪɡəs] adj. 杂合的
- Minor Allele Frequency (MAF) 次等位基因频率


计算MC前，移植前样本要用本kit做基因型。
To facilitate computation and determination of MC, pre-transplant samples must be genotyped with the Devyser Chimerism assay. 

这24个基因标记
如果 变异等位基因频率(VAF) 在(0-1%，或 99-100%)，被定义为纯合(+/+, -/-)；
如果在40-60%，被定义为杂合子(+/-)；
其他范围的VAF，则定义为不确定(undetermined)。
Genotype status for each of the 24 genetic markers was defined as homozygous (i.e., +/+ or -/-) if the variant allele frequency (VAF) was between 0% and 1% / 99% and 100% or heterozygous (+/-) if the VAF was between 40% and 60%. For all other VAF levels, the genotype was undetermined.



对于基因型确定的样本，识别有信息的标记。
For genotyped samples, the informative markers were identified. 
定义：对病人独有的基因型，方便计算移植后MC。
A marker was defined informative if genotyped unique for the patient and thus enables percent MC measurement of patient DNA in a post-transplant sample. 
决定MC时，可用以下有信息的标记：
基因型(病人，供者):
纯合有效标记:(+/+, -/-) or (-/-,+/+)
杂合有效标记:(+/-, +/+) or (+/-, or -/-)
When determining the percent of MC, the following informative marker genotype profiles (patient genotype, donor genotype)can be used: homozygous informative marker genotypes (+/+, -/-) or (-/-,+/+) and heterozygous informative marker genotypes (+/-, +/+) or (+/-, or -/-).


移植后样本中，病人DNA的百分比 = 纯合有效标记中 病人位点 占比。
The percentage of patient DNA in a post-transplant sample was determined using the percentage of patient alleles in the MC sample for each homozygous informative marker. 
对于每个杂合有效标记， 病人位点 占比 x 2。
For each heterozygous informative marker, the percentage of patient alleles found in the MC sample was determined and multiplied by two. 
使用有效标记基因百分数的平均值，作为移植后的病人DNA百分比。
The percentage of the patient in the post-transplant sample was calculated as the average from the results of the informative markers.


不用扣除背景，因为测序错误可以忽略，因为使用了indel，短读长，严格筛选条件。
No background subtraction was performed as the sequencing error rate was negligible due to the use of indel markers, the short read length [26] and the stringent criteria established for indel selection (data not shown). 
筛选indel时，测序数据在靶区域比率很高，并且分析中丢弃的读段很少。
During the selection of indels, a high on-target percentage of the sequencing data was accomplished, and the number of reads discarded for the analysis was small.


杂合标记在移植前通常VAF低于理论的50%。
Heterozygous markers in pre-transplantation samples did not always show a VAF of the theoretical 50%. 
这促使我们进一步改进计算方法，计算>200个移植前样本中所有标记物的平均杂合度。
This prompted us to further improve the calculation method by computing the average heterozygosity of all markers in>200 pre-transplantation samples. 
以便建立每个marker的矫正因数，使杂合率更精确。
Thereby it was possible to establish a correction factor for each marker to determine the amount of chimerism more accurately. 
这提高了高MC(>80)的结果，对低MC的没影响。
This algorithm improved the results in sample characterized by high MC (i.e., >80%) but did not affect results in samples with low MC.



(5) 2.8. Selection of genetic markers for NGS chimerism analysis

Several parameters were considered during design and selection of suitable genetic markers (indels) for NGS chimerism analysis. 

首先，能区分个体，周围不能有其他indel/SNP。
Firstly, the ability of the genetic marker to differentiate between individuals were important but also the DNA sequence next to the targeted indel (no known SNPs or mutations) as well as the overall performance of the markers were crucial. 

覆盖indel的扩增产物，不能包含已知SNP，均聚物，其他与任何疾病偶联的变异。
Besides covering the indel, the PCR product (amplicon) was restricted to not contain any known SNPs, homopolymers or known genetic variants associated with any diseases. 

扩增子GC在 40-60%，最长75bp。
The amplicon was further restricted to have a GC content of 40–60% and a maximum length of 75 bp. 

使用公共数据，筛选 MAF>0.35%的位点。
Indels with Minor Allele Frequency (MAF) higher than 0.35% were selected using publicly available databases (i.e., 1000 Genomes). 

这24个位点重新确认，满足如下条件:
Fst<0.06
LD<0.02
MAF>0.35

The 24 chosen markers were re-analyzed to verify the following parameter criteria: 
fixation index (FST) < 0.06, 
linkage disequilibrium (LD) < 0.02 and 
Minor Allele Frequency (MAF) > 0.35. 

The 24 selected indels show low Fixation Index (FST) (i.e., < 0.06) [24].










# (综述)嵌合分析：文献与临床实践 (Bone Marrow Transplant. 2022 )
> Chimerism analysis for clinicians: a review of the literature and worldwide practices

1. 时间点
Most responses (94%) indicated testing chimerism at day 30, 73% indicated testing at day 90, 72% at day 180 and 63% at one year. Two respondents reported routinely testing earlier than day 30, one at day 15 and one at day 21, specifically in non-myeloablative (Non-MA) transplants.
...


2. 样本
Regarding specimen source, practically all programs (99%) use peripheral blood (PB) with 89% indicating PB as the primary specimen type used in chimerism testing. Sixty nine percent of respondents also test bone marrow, of which 13% cited bone marrow as the primary specimen type tested. One participant also reported using tissue samples in cases involving post-transplant lymphoproliferative disorder (PTLD).


In terms of lineage specific testing, 75% of the responses indicated testing whole blood, 67% indicated T cells, 46% indicated myeloid cells, 18% indicated B cells, 14% indicated NK cells and 9% indicated CD34+ cells as shown in Figure 1.


3. 方法

The vast majority of respondents reported using the semi-quantitative PCR amplification of genomic regions containing STRs. About a fifth of responses reported using qPCR and only a minority reported using recently introduced NGS based methods. 

Both qPCR and NGS rely on multiplex detection of single nucleotide polymorphisms (SNP) and/or genetic variation in the form of insertions or deletions (indel) polymorphism across multiple chromosomes (12–14). 

The reported proportions of method utilization are consistent with those reported in the published literature referring to chimerism analysis testing in the clinical context of HCT. 

三种方法的比较：使用，sensitivity, accuracy
Figure 2 summarizes the most significant differences among the three most commonly testing methods by the survey respondents (STR, qPCR, NGS). Three participants reported using FISH and no responses indicated using other approaches such as cytogenetics, red cell phenotyping, RFLP analysis or dPCR (15, 16).

However, NGS offers much higher precision than qPCR with CV < 2% at MC levels ≥ 5%. In the range of 0.1%−90%, NGS methodology is more accurate and more linear than qPCR and STR analysis (19).

ddPCR
However, the instrumentation is not yet as widely available as that of NGS, which are becoming commonplace in laboratories that are performing HLA typing for HCT donors and recipients.









# (综述)造血干细胞移植后嵌合率检测：过去15年的创新 (Diagnostics (Basel). 2021)
> Chimerism Monitoring Techniques after Hematopoietic Stem Cell Transplantation: An Overview of the Last 15 Years of Innovations
> Department of Molecular Medicine, Laboratory of Forensic Genetics, University of Padova, 35121 Padova, Italy.
> https://pubmed.ncbi.nlm.nih.gov/33808342/

After a comparative evaluation of the various techniques, it seems clear that STR-PCR still remains the gold standard option for chimerism study, even if it is likely that both dPCR and NGS could supplement or even replace the common methods of STR analysis.



- NGS: It can analyse STRs, Indel, or SNPs. Hhowever, given that it works in multiplex, bi-allelic markers also guarantee a high power of discrimination also `when pre-transplantation donor DNA is lacking` or chromosomal abnormalities are present;


3.4. Chimerism Monitoring through NGS

In the context of chimerism monitoring, the ability to work with multiplex provides an unprecedented opportunity to distinguish between two different genomes, both `in the absence of pre-transplantation donor DNA` and `in the presence of some chromosomal abnormalities` [31,60]. 

Moreover, these authors believe that the long time and the high cost of analysis represent the two most important limits to adopting NGS technologies in clinical field [31,60,61].



