# 目的

查找 Smart-seq2 数据集，人鼠都可以。最好是细胞系的。

查找范围： NCBI，GEO 等不限。

在SRA搜索：
https://www.ncbi.nlm.nih.gov/sra/?term=(smart_seq2)+AND+%22Homo+sapiens%22%5Borgn%3A__txid9606%5D

按照sample查找GEO: 
https://www.ncbi.nlm.nih.gov/geo/browse/?view=samples&search=Smart-seq2&sort=tax&display=100&page=7


## 日期
`date: 2021/10/05`


## 初步结果

```
pubmed 搜索:
smart-seq2 HeLa: 0个
smart seq2 HeLa: 0个

smart-seq2 breast cancer: 2个
	- https://pubmed.ncbi.nlm.nih.gov/29069469/
	- https://pubmed.ncbi.nlm.nih.gov/33575084/

Smart seq2: 70个

smart seq2 cell line: 10个
	- https://pubmed.ncbi.nlm.nih.gov/28249587/ 
		* [Genome Biology](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE85534): HEK293, K562
	- https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC6572856/ NO data
	- https://pubmed.ncbi.nlm.nih.gov/31314649/ No data
	- https://pubmed.ncbi.nlm.nih.gov/29186152/ bam: SRP107036
		* https://www.ncbi.nlm.nih.gov/sra/?term=SRP107036
		* non-small-cell lung cancer cell lines (NCI-H1650 and NCI-H1975); HCT-116; 
	- https://pubmed.ncbi.nlm.nih.gov/30961669/ 华大测序仪效果比较
		* The plate-based Smart-seq2 scRNA-seq runs using mESC and K562 cells and ERCCs spike-ins: BioProject (#PRJNA430491), SRP132313
```



# 详情(二级标题表示有data)

`https://pubmed.ncbi.nlm.nih.gov/?term=Smart+seq2&size=100`: 70

`https://pubmed.ncbi.nlm.nih.gov/?term=smart-seq2&size=100`: 68



1: Picelli S, Faridani OR, Björklund AK, Winberg G, Sagasser S, Sandberg R.
Full-length RNA-seq from single cells using Smart-seq2. Nat Protoc. 2014
Jan;9(1):171-81. doi: 10.1038/nprot.2014.006. Epub 2014 Jan 2. PMID: 24385147.

//Your institute does not have access to this article



2: Picelli S, Björklund ÅK, Faridani OR, Sagasser S, Winberg G, Sandberg R.
Smart-seq2 for sensitive full-length transcriptome profiling in single cells.
Nat Methods. 2013 Nov;10(11):1096-8. doi: 10.1038/nmeth.2639. Epub 2013 Sep 22.
PMID: 24056875.

//Your institute does not have access to this article



## 3: 比较学研究 mESC (Mol Cell 2017)

3: Ziegenhain C, Vieth B, Parekh S, Reinius B, Guillaumet-Adkins A, Smets M,
Leonhardt H, Heyn H, Hellmann I, Enard W. Comparative Analysis of Single-Cell
RNA Sequencing Methods. Mol Cell. 2017 Feb 16;65(4):631-643.e4. doi:
10.1016/j.molcel.2017.01.023. PMID: 28212749.

> https://pubmed.ncbi.nlm.nih.gov/28212749/
>
> https://linkinghub.elsevier.com/retrieve/pii/S1097-2765(17)30049-7

---

```
6 Methods: CEL-seq2, Drop-seq, MARS-seq, SCRB-seq, Smart-seq, and Smart-seq2. 
Cell type: 583 mouse embryonic stem cells

data https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE75790
mESC, 共157 个。

GSM2220598	SmartSeq2A_A1
...
GSM2220754	SmartSeq2B_H9

```
Smart-seq2 等6种方法检测到的基因数:
![1002_Smart-seq2_6methods.png](data/2021/images/10/1002_Smart-seq2_6methods.png)



4: Picelli S. Full-Length Single-Cell RNA Sequencing with Smart-seq2. Methods
Mol Biol. 2019;1979:25-44. doi: 10.1007/978-1-4939-9240-9_3. PMID: 31028630.

//方法书。
// Among the latter, Smart-seq2 is still considered the “gold standard” due to its sensitivity, precision, lower cost, scalability and for being easy to set up on automated platforms. 


## 5: 激光显微镜 + smart-seq2 做空间转录组(2016)
5: Nichterwitz S, Chen G, Aguila Benitez J, Yilmaz M, Storvall H, Cao M,
Sandberg R, Deng Q, Hedlund E. Laser capture microscopy coupled with Smart-seq2
for precise spatial transcriptomic profiling. Nat Commun. 2016 Jul 8;7:12139.
doi: 10.1038/ncomms12139. PMID: 27387371; PMCID: PMC4941116.

`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE76514`
//We started with capturing 120 cells and subsequently scaled down to 50 cells, 30 cells, 10 cells, 5 cells, 2 cells and finally 1 cell. 
不适合使用。细胞太少。

//We applied LCM-seq to **mouse and human neuron samples**, and demonstrated that LCM-seq can allow us to acquire high quality RNA-seq data from mouse and human tissues to conduct various transcriptomic studies.



6: Hashimshony T, Senderovich N, Avital G, Klochendler A, de Leeuw Y, Anavy L,
Gennert D, Li S, Livak KJ, Rozenblatt-Rosen O, Dor Y, Regev A, Yanai I. `CEL-
Seq2`: sensitive highly-multiplexed single-cell RNA-Seq. Genome Biol. 2016 Apr
28;17:77. doi: 10.1186/s13059-016-0938-8. PMID: 27121950; PMCID: PMC4848782.

// 比第一代更好。 Here, we present CEL-Seq2, a modified version of our CEL-Seq method, with threefold higher sensitivity, lower costs, and less hands-on time. 

//带UMI: We implemented CEL-Seq2 on Fluidigm's C1 system, providing its first single-cell, on-chip barcoding method, and we detected gene expression changes accompanying the progression through the cell cycle in **mouse fibroblast cells**.

没有可用数据: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE78779



7: Jaeger BN, Yángüez E, Gesuita L, Denoth-Lippuner A, Kruse M, Karayannis T,
Jessberger S. Miniaturization of Smart-seq2 for Single-Cell and Single-Nucleus
RNA Sequencing. STAR Protoc. 2020 Sep 18;1(2):100081. doi:
10.1016/j.xpro.2020.100081. PMID: 33000004; PMCID: PMC7501729.
// 改造：fACS 分选到384孔板，微量液体操作机器人。
//无数据。方法学。

---
nuclei ['njuːklɪaɪ] n. 核心，核子；原子核（nucleus的复数形式）
nucleus  [ˈnjuːkliəs] n. 原子核；细胞核；核心，中心；神经核；（彗星的）核
organoid  [ˈɔːɡənɔɪd]  细胞器


## 8-: Smart-seq2 / 3检测到的基因数
8: Hagemann-Jensen M, Ziegenhain C, Chen P, Ramsköld D, Hendriks GJ, Larsson
AJM, Faridani OR, Sandberg R. Single-cell RNA counting at allele and isoform
resolution using `Smart-seq3`. Nat Biotechnol. 2020 Jun;38(6):708-714. doi:
10.1038/s41587-020-0497-0. Epub 2020 May 4. PMID: 32518404.
// 升级: 
-  Here we introduce Smart-seq3, which combines full-length transcriptome coverage with a 5′ unique molecular identifier RNA counting strategy that enables in silico reconstruction of thousands of RNA molecules per cell.
- we identified substantial differences in isoform usage in different mouse strains and human cell types. 
- Smart-seq3 greatly increased sensitivity compared to Smart-seq2, typically detecting thousands more transcripts per cell. 
- fig.1d Smart-seq2 / 3检测到的基因数
![1002_Smart-seq2](/data/2021/images/10/1002_Smart-seq2.png)

---
allelic [ə'li:lik]  adj. 等位基因的；等位的



9: Baran-Gale J, Chandra T, Kirschner K. Experimental design for single-cell RNA
sequencing. Brief Funct Genomics. 2018 Jul 1;17(4):233-239. doi:
10.1093/bfgp/elx035. PMID: 29126257; PMCID: PMC6063265.
//综述: 如何设计单细胞测序。
//无数据。


10: Picelli S. Single-cell RNA-sequencing: The future of genome biology is now.
RNA Biol. 2017 May 4;14(5):637-650. doi: 10.1080/15476286.2016.1201618. Epub
2016 Jul 21. PMID: 27442339; PMCID: PMC5449089.
// 综述。无数据。


## 11-: Tn5切割后的BA图谱：200bp单峰。
11: Serra L, Chang DZ, Macchietto M, Williams K, Murad R, Lu D, Dillman AR,
Mortazavi A. Adapting the Smart-seq2 Protocol for Robust Single Worm RNA-seq.
Bio Protoc. 2018 Feb 20;8(4):e2729. doi: 10.21769/BioProtoc.2729. PMID:
29564372; PMCID: PMC5857950.
// 方法学: 做线虫。无数据。

![1002_Smart-seq2_BA_profile.png](/data/2021/images/10/1002_Smart-seq2_BA_profile.png)
>Figure 4.. Examples of Smart-seq2 BioAnalyzer profiles after tagmentation and library preparation. 
**A**. An example of a sample that has been fully tagmented shows one peak around 200 bp. 
**B**. An example of a sample that was not fully tagmented shows a broad distribution of fragments ranging from 150-1,000 bp.

---
nematode  [ˈnemətəʊd]  adj. 线虫类的 n. 线虫，线虫类
worm [wɜːm] n. 虫，蠕虫；蜗杆；螺纹



12: Chang D, Serra L, Lu D, Mortazavi A, Dillman A. A Revised Adaptation of the
Smart-Seq2 Protocol for Single-Nematode RNA-Seq. Methods Mol Biol.
2021;2170:79-99. doi: 10.1007/978-1-0716-0743-5_6. PMID: 32797452.
// 适配: 植物线虫

---
parasitic  [ˌpærəˈsɪtɪk]  adj. 寄生的（等于parasitical）
obligate  [ˈɒblɪɡeɪt] adj. 专性的；必需的



13: Krishnaswami SR, Grindberg RV, Novotny M, Venepally P, Lacar B, Bhutani K,
Linker SB, Pham S, Erwin JA, Miller JA, Hodge R, McCarthy JK, Kelder M,
McCorrison J, Aevermann BD, Fuertes FD, Scheuermann RH, Lee J, Lein ES, Schork
N, McConnell MJ, Gage FH, Lasken RS. Using single nuclei for RNA-seq to capture
the transcriptome of postmortem neurons. Nat Protoc. 2016 Mar;11(3):499-524.
doi: 10.1038/nprot.2016.015. Epub 2016 Feb 18. PMID: 26890679; PMCID:
PMC4941947.
// 神经细胞。

---
postmortem  [pəust'mɔ:təm]  n. 验尸；检视；尸体检查 adj. 死后的；死后发生的



14: van Kuijk K, Kuppe C, Betsholtz C, Vanlandewijck M, Kramann R, Sluimer JC.
Heterogeneity and plasticity in healthy and atherosclerotic vasculature explored
by single-cell sequencing. Cardiovasc Res. 2019 Oct 1;115(12):1705-1715. doi:
10.1093/cvr/cvz185. PMID: 31350876; PMCID: PMC6873093.
//综述。

---
atherosclerotic [,æθərəʊsklə'rɒtɪk] adj. 动脉粥样硬化的
vasculature  [ˈvæskjʊlətʃə(r)] n. 脉管系统




15: Yamazaki M, Hosokawa M, Arikawa K, Takahashi K, Sakanashi C, Yoda T,
Matsunaga H, Takeyama H. Effective microtissue RNA extraction coupled with
Smart-seq2 for reproducible and robust spatial transcriptome analysis. Sci Rep.
2020 Apr 27;10(1):7083. doi: 10.1038/s41598-020-63495-6. PMID: 32341421; PMCID:
PMC7184581.
// 空间转录组：微组织提取 + Smart-set2


## 16-: 非小细胞肺癌 PD-1抗体前后的外周T cell seq
16: Zhang F, Bai H, Gao R, Fei K, Duan J, Zhang Z, Wang J, Hu X. Dynamics of
peripheral T cell clones during PD-1 blockade in non-small cell lung cancer.
Cancer Immunol Immunother. 2020 Dec;69(12):2599-2611. doi:
10.1007/s00262-020-02642-4. Epub 2020 Jun 26. PMID: 32591861.
// 4个病人。数据在 GSA: HRA000104
> https://link.springer.com/article/10.1007%2Fs00262-020-02642-4

- Here we performed Smart-seq2 single-cell RNA sequencing (scRNA-seq) analysis on 3,110 peripheral T cells of non-small cell lung cancer (NSCLC) patients before and after the initiation of programmed cell death protein 1 (PD-1) blockade. 


## 17-: iSTARTRAC T cell
17: Zhang Y, Zheng L, Zhang L, Hu X, Ren X, Zhang Z. Deep single-cell RNA
sequencing data of individual T cells from treatment-naïve colorectal cancer
patients. Sci Data. 2019 Jul 24;6(1):131. doi: 10.1038/s41597-019-0131-5. PMID:
31341169; PMCID: PMC6656756.
// 新工具: 网页版 TCR 分析。
// As described in our related research paper11, the raw sequencing data have been deposited in the European Genome-phenome Archive database under study accession id EGAS00001002791 and dataset accession id EGAD0000100391031, which are available in FASTQ file format upon request and approval. 
> iSTARTRAC  http://crctcell.cancer-pku.cn/
> 11. Zhang, L. et al. Lineage tracking reveals dynamic relationships of T cells in colorectal cancer. Nature 564, 268–272 (2018).



18: Dyer NP, Shahrezaei V, Hebenstreit D. LiBiNorm: an htseq-count analogue with
improved normalisation of Smart-seq2 data and library preparation diagnostics.
PeerJ. 2019 Feb 4;7:e6222. doi: 10.7717/peerj.6222. PMID: 30740268; PMCID:
PMC6366399.
//`LiBiNorm`：对 smart-seq2 的定量标准化方法。
// 使用的数据 SRA accession SRR1743160，Drosophila melanogaster 黑腹果蝇
https://www.ncbi.nlm.nih.gov/sra/?term=SRR1743160
https://trace.ncbi.nlm.nih.gov/Traces/sra/?study=SRP051726

---
analogue [ˈænəlɒɡ] adj. 类似的；相似物的；模拟计算机的



## 19: K562 cell 26个: 保存条件对测序的影响(不一定能用)
19: Guillaumet-Adkins A, Rodríguez-Esteban G, Mereu E, Mendez-Lago M, Jaitin DA,
Villanueva A, Vidal A, Martinez-Marti A, Felip E, Vivancos A, Keren-Shaul H,
Heath S, Gut M, Amit I, Gut I, Heyn H. Single-cell transcriptome conservation in
cryopreserved cells and tissues. Genome Biol. 2017 Mar 1;18(1):45. doi:
10.1186/s13059-017-1171-9. PMID: 28249587; PMCID: PMC5333448.
// GSE85534 冷藏保存的样本，测序后的差异: MARS-seq(HEK293), Smart-seq2(HEK293, K562), PBMC, mouse colon cells, patient-derived orthotopic ovarian tumor xenograft cells.

> https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE85534
> https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA338759 还是无法区分293的2种测序方法。略过。
> EK293细胞，又叫人胚胎肾细胞293，是一个衍生自人胚胎肾细胞的细胞系，具有转染效率高，易于培养等特点.
> K562_fresh 24个;  K562细胞是第一个人类髓性白血病人工培养的细胞
```
SRR5041217
SRR5041218
SRR5041219
SRR5041220
SRR5041221
SRR5041222
SRR5041223
SRR5041224
SRR5041225
SRR5041226
SRR5041227
SRR5041228
SRR5041229
SRR5041230
SRR5041231
SRR5041232
SRR5041233
SRR5041234
SRR5041235
SRR5041236
SRR5041237
SRR5041238
SRR5041239
SRR5041240
```
---
cryopreserve ['kraɪəʊ,prɪ'zɜːv] 冷藏保存的


20: Miao Y, Wang P, Xie B, Yang M, Li S, Cui Z, Fan Y, Li M, Xiong B. BRCA2
deficiency is a potential driver for human primary ovarian insufficiency. Cell
Death Dis. 2019 Jun 17;10(7):474. doi: 10.1038/s41419-019-1720-0. PMID:
31209201; PMCID: PMC6572856.
// 卵母细胞，primary ovarian insufficiency (POI) 
//无数据。


## 21: barcoded-SmartSeq2(小神经胶质细胞)
21: Alsema AM, Jiang Q, Kracht L, Gerrits E, Dubbelaar ML, Miedema A, Brouwer N,
Hol EM, Middeldorp J, van Dijk R, Woodbury M, Wachter A, Xi S, Möller T, Biber
KP, Kooistra SM, Boddeke EWGM, Eggen BJL. Profiling Microglia From Alzheimer's
Disease Donors and Non-demented Elderly in Acute Human Postmortem Cortical
Tissue. Front Mol Neurosci. 2020 Oct 28;13:134. doi: 10.3389/fnmol.2020.00134.
PMID: 33192286; PMCID: PMC7655794.
// 急性人死后皮层组织中阿尔茨海默病供体和非痴呆老年人的小胶质细胞分析
//Microglia are the tissue-resident macrophages of the central nervous system (CNS). 
//人脑皮质层的样本，其中 microglia 在AD和对照中无差别。
//Notably, gene expression profiles and subcluster composition of microglia did not differ between AD donors and non-demented elderly in bulk RNA sequencing nor in single-cell sequencing.
// https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE146639
//Twenty-five microglia samples (13 LPS and 12 GFS) from 17 donors were sequenced as bulk samples, and 14 LPS samples from 14 donors were single-cell sequenced. Two donors were sequenced with both the 10X Genomics platform and the barcoded-SmartSeq2 protocol. Four donors (1 CTR, 3 CTR+) were included in both single-cell and bulk cohorts.

---
microglia [maɪkˈroʊɡlɪr] n. [组织] 小神经胶质；小神经胶质细胞；格子细胞
cortical [ˈkɔːtɪkl]adj. 皮质的；[生物] 皮层的；外皮的
AD: Alzheimer's Disease



## 22-: 书的章节（推荐阅读）
22: Villani AC, Shekhar K. Single-Cell RNA Sequencing of Human T Cells. Methods
Mol Biol. 2017;1514:203-239. doi: 10.1007/978-1-4939-6548-9_16. PMID: 27787803.

//**Understanding how populations of human T cells leverage cellular heterogeneity, plasticity, and diversity to achieve a wide range of functional flexibility, particularly during dynamic processes such as development, differentiation, and antigenic response, is a core challenge that is well suited for single-cell analysis.**

//https://link.springer.com/protocol/10.1007%2F978-1-4939-6548-9_16
//无数据


## 23: 固有淋巴样细胞 ILC（数据 @EGA ）
23: Mazzurana L, Czarnewski P, Jonsson V, Wigge L, Ringnér M, Williams TC,
Ravindran A, Björklund ÅK, Säfholm J, Nilsson G, Dahlén SE, Orre AC, Al-Ameri M,
Höög C, Hedin C, Szczegielniak S, Almer S, Mjösberg J. Tissue-specific
transcriptional imprinting and heterogeneity in human innate lymphoid cells
revealed by full-length single-cell RNA-sequencing. Cell Res. 2021
May;31(5):554-568. doi: 10.1038/s41422-020-00445-x. Epub 2021 Jan 8. PMID:
33420427; PMCID: PMC8089104.

// The impact of the microenvironment on innate lymphoid cell (ILC)-mediated immunity in humans remains largely unknown.
// CD127+ ILCs across four human tissues.:
- Correlation analysis identified gene modules characterizing the migratory properties of tonsil and blood ILCs, 
- and signatures of tissue-residency, activation and modified metabolism in colon and lung ILCs.

//Data are from ten independent experiments with one tissue donor each (blood = 3, lung = 4 and colon = 3) integrated with data from
//  tonsil data: GSE70580 
//https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150050 
// raw data at EGA，没有找到编号 https://ega-archive.org/

---
human innate lymphoid 人类先天淋巴
innate  [ɪˈneɪt] adj. 先天的；固有的；与生俱来的
lymphoid [ˈlɪmfɔɪd]adj. 淋巴的；淋巴样的
tonsil [ˈtɒnsl] n. [解剖] 扁桃体；扁桃腺
alarmin  警报素
imprint [ɪmˈprɪnt] n. 印记；痕迹；特征；版本说明 vt. 加特征；刻上记号





## 24-: Tn5 切割后
24: Trombetta JJ, Gennert D, Lu D, Satija R, Shalek AK, Regev A. Preparation of
Single-Cell RNA-Seq Libraries for Next Generation Sequencing. Curr Protoc Mol
Biol. 2014 Jul 1;107:4.22.1-17. doi: 10.1002/0471142727.mb0422s107. PMID:
24984854; PMCID: PMC4338574.
// 2014 综述。

> Figure 5 Typical best-case results following Nextera library construction, pooling, and normalization. The ideal average fragment size for a Nextera library is 350–500 bp.
![1002_Smart-seq2_BA_profile-2.png](/data/2021/images/10/1002_Smart-seq2_BA_profile-2.png)


## 25: 多区域scRNA-seq CRC 免疫微环境
25: Wang W, Zhong Y, Zhuang Z, Xie J, Lu Y, Huang C, Sun Y, Wu L, Yin J, Yu H,
Jiang Z, Wang S, Wang C, Zhang Y, Huang Y, Han C, Zhong Z, Hu J, Ouyang Y, Liu
H, Yu M, Wei X, Chen D, Huang L, Hou Y, Lin Z, Liu S, Ling F, Yao X. Multiregion
single-cell sequencing reveals the transcriptional landscape of the immune
microenvironment of colorectal cancer. Clin Transl Med. 2021 Jan;11(1):e253.
doi: 10.1002/ctm2.253. PMID: 33463049; PMCID: PMC7775989.

// 华大的单细胞平台：[DNBelab C4](https://www.genomics.cn/solution-5644.html)
//In this study, we have taken the advantage of two single-cell RNA sequencing technologies (Smart-seq2 and DNBelab C4) to generate an atlas of 15,115 immune and nonimmune cells from primary tumors and hepatic metastases of 18 colorectal cancer (CRC) patients. 

//immune infiltration within CRC
//data: 国家基因库 https://db.cngb.org/cnsa/, https://db.cngb.org/search/project/CNP0000916/



26: Nichterwitz S, Benitez JA, Hoogstraaten R, Deng Q, Hedlund E. LCM-Seq: A
Method for Spatial Transcriptomic Profiling Using Laser Capture Microdissection
Coupled with PolyA-Based RNA Sequencing. Methods Mol Biol. 2018;1649:95-110.
doi: 10.1007/978-1-4939-7213-5_6. PMID: 29130192.
// 书章节。


## 27:皮肤病(n=7304)
27: Liu J, Chang HW, Huang ZM, Nakamura M, Sekhon S, Ahn R, Munoz-Sandoval P,
Bhattarai S, Beck KM, Sanchez IM, Yang E, Pauli M, Arron ST, Fung-Leung WP,
Munoz E, Liu X, Bhutani T, North J, Fourie AM, Rosenblum MD, Liao W. Single-cell
RNA sequencing of psoriatic skin identifies pathogenic Tc17 cell subsets and
reveals distinctions between CD8<sup>+</sup> T cells in autoimmunity and cancer.
J Allergy Clin Immunol. 2021 Jun;147(6):2370-2380. doi:
10.1016/j.jaci.2020.11.028. Epub 2020 Dec 9. PMID: 33309739.

//Methods: We used single-cell RNA sequencing to compare CD8+ T-cell transcriptomic heterogeneity between psoriatic and healthy skin.
//support vector machine 支持向量机
//data: [GSE146264](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE146264)
//n=4574 passQC:  https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA609972&o=acc_s%3Aa


---
psoriatic [,sɔri'ætik] adj. 牛皮癣的 n. 牛皮癣患者


## 28: 超声产科, 胎盘滋养层
28: Cui D, Liu Y, Jiang X, Ding C, Poon LC, Wang H, Yang H. Single-cell RNA
expression profiling of SARS-CoV-2-related ACE2 and TMPRSS2 in human
trophectoderm and placenta. Ultrasound Obstet Gynecol. 2021 Feb;57(2):248-256.
doi: 10.1002/uog.22186. PMID: 32851697; PMCID: PMC7461088.

// 此前的数据，GEO上都没有标注怎么建库：
- the datasets of the human placentae were from GSE89497, 
- and the datasets of in-vitro cultured human embryos were from GSE109555. 


---
trophectoderm [trɔ'fektəudə:m]  n. 滋养外胚层
placenta [pləˈsentə]  n. [胚] 胎盘；[植] 胎座
trimester [traɪˈmestə(r)] n. 三个月；一学期



## 29-: 10x vs Smart-seq2的比较
29: Wang X, He Y, Zhang Q, Ren X, Zhang Z. Direct Comparative Analyses of 10X
Genomics Chromium and Smart-seq2. Genomics Proteomics Bioinformatics. 2021 Mar
2:S1672-0229(21)00048-6. doi: 10.1016/j.gpb.2020.02.005. Epub ahead of print.
PMID: [33662621](https://pubmed.ncbi.nlm.nih.gov/33662621/).

- Smart-seq2 detected more genes in a cell, especially low abundance transcripts as well as alternatively spliced transcripts, but captured higher proportion of mitochondrial genes. 
- The composite of Smart-seq2 data also resembled bulk RNA-seq data more.
- For 10X-based data, we observed higher noise for mRNAs with low expression levels. 
- Approximately 10%-30% of all detected transcripts by both platforms were from non-coding genes, with long non-coding RNAs (lncRNAs) accounting for a higher proportion in 10X. 
- 10X-based data displayed more severe dropout problem, especially for genes with lower expression levels. 
- However, 10X-data can detect rare cell types given its ability to cover a large number of cells. 
- In addition, each platform detected distinct groups of differentially expressed genes between cell clusters, indicating the different characteristics of these technologies. 
- Our study promotes better understanding of these two platforms and offers the basis for an informed choice of these widely used technologies.

// data:https://ngdc.cncb.ac.cn/gsa/,  (GSA: HRA000063 and HRA000064), 
- 10x https://ngdc.cncb.ac.cn/gsa-human/browse/HRA000063
- 没有找到 Smart-seq2的数据：500 Error




30: Treger RS, Pope SD, Xing X, Iwasaki A. Application of a Modified Smart-seq2
Sample Preparation Protocol for Rare Cell Full-length Single-cell mRNA
Sequencing to Mouse Oocytes. Bio Protoc. 2019 Aug 20;9(16):e3345. doi:
10.21769/BioProtoc.3345. PMID: 33654848; PMCID: PMC7854224.

// 应用到 卵母细胞
// 无数据




31: He B, Gu W, Wang L, Zheng Z, Shao Z, Huan L, Zhang B, Ma Y, Niu J, Xie X,
Wang G. RNA-seq between asexual archeospores and meiosis-related conchospores in
Neopyropia yezoensis using Smart-seq2. J Phycol. 2021 Jul 14. doi:
10.1111/jpy.13197. Epub ahead of print. PMID: 34260752.

// 植物。跳过。

---
asexual  [ˌeɪˈsekʃuəl] adj. [生]无性的；无性生殖的；性冷淡的；无性恋的
ascospore n. [植]囊孢子，子囊孢子
meiosis  [maɪˈəʊsɪs] n. [细胞] 减数分裂；[遗][细胞] 成熟分裂
条斑紫菜(P.yezoensis)
Porphyra yezoensis 条斑紫菜 ; 紫菜
spore [spɔː(r)] n. 孢子






32: Onsbring H, Tice AK, Barton BT, Brown MW, Ettema TJG. An efficient single-
cell transcriptomics workflow for microbial eukaryotes benchmarked on Giardia
intestinalis cells. BMC Genomics. 2020 Jun 29;21(1):448. doi:
10.1186/s12864-020-06858-7. PMID: 32600266; PMCID: PMC7325058.
// 微生物。跳过。

---
Giardia [dʒi'ɑrdiə; 'dʒɑrdiə] n. 贾第虫属；梨形鞭毛虫属
microbial eukaryotes 微生物真核生物
eukaryote  [jʊˈkærɪəʊt]  n. 真核细胞（等于eucaryote）
protist  [ˈprəʊtɪst]  n. [生物] 原生生物



## 33-: 综述: 甲基化测序 Smart-RRBS
33: Gu H, Raman AT, Wang X, Gaiti F, Chaligne R, Mohammad AW, Arczewska A, Smith
ZD, Landau DA, Aryee MJ, Meissner A, Gnirke A. Smart-RRBS for single-cell
methylome and transcriptome analysis. Nat Protoc. 2021 Aug;16(8):4004-4030. doi:
10.1038/s41596-021-00571-9. Epub 2021 Jul 9. PMID: 34244697.

// 第一单位 broad; 第二单位 公司 http://www.shengtinggroup.com/
// Our Smart-RRBS (reduced representation bisulfite sequencing) protocol combines Smart-seq2 and RRBS and entails physically separating mRNA from the genomic DNA. 
// It generates paired epigenetic promoter and RNA-expression measurements for ~24% of protein-coding genes in a typical single cell.

---
sterilization  [ˌsterəlaɪˈzeɪʃn]  [医][食品] 杀菌；使不孕；无用状态
fluorometer [ˌflʊəˈrɒmɪtə(r)] n. 荧光计；氟量计
electrophoresis  [ɪˌlektrəʊfəˈriːsɪs]  n. [化学] 电泳





34: Van Der Byl W, Rizzetto S, Samir J, Cai C, Eltahla AA, Luciani F. Single-
Cell Transcriptome Analysis of T Cells. Methods Mol Biol. 2019;2048:155-205.
doi: 10.1007/978-1-4939-9728-2_16. PMID: 31396939.
// 书章节。T cell，Smart-seq2 无数据。


35: Chen W, Gardeux V, Meireles-Filho A, Deplancke B. Profiling of Single-Cell
Transcriptomes. Curr Protoc Mouse Biol. 2017 Sep 8;7(3):145-175. doi:
10.1002/cpmo.30. PMID: 28884792.
// 书章节。单细胞转录组。


36: Byrne A, Supple MA, Volden R, Laidre KL, Shapiro B, Vollmers C. Depletion of
Hemoglobin Transcripts and Long-Read Sequencing Improves the Transcriptome
Annotation of the Polar Bear (<i>Ursus maritimus</i>). Front Genet. 2019 Jul
19;10:643. doi: 10.3389/fgene.2019.00643. PMID: 31379921; PMCID: PMC6658610.

// 北极熊。跳过。

---
hemoglobin  [ˌhiːməˈɡləʊbɪn] n. [生化] 血红蛋白（等于haemoglobin）；血红素


## 37-: 单细胞测红系发育(Smart-seq2 和 10x)
37: Strzelecka PM, Ranzoni AM, Cvejic A. Single-Cell Transcriptomic Analysis of
Hematopoietic Cells. Methods Mol Biol. 2021;2185:135-158. doi:
10.1007/978-1-0716-0810-4_9. PMID: 33165847.
//书章节。

// Currently available scRNA-Seq platforms can be broadly divided into two categories: droplet-based and plate-based. 

// Here, we describe detailed protocols of two of the most used methods for scRNA-Seq of hematopoietic cells: Smart-Seq2 (plate-based) and 10× Genomics (droplet-based).

> Fig. 3 Examples of good quality Bioanalyzer traces. Typical traces of:  (d) Library following tagmentation
> ![1002_Smart-seq2_BA_profile-3.png](/data/2021/images/10/1002_Smart-seq2_BA_profile-3.png)

---
hematopoietic  [,hemətəʊpɒɪ'i:tɪk] adj. 造血的；生血的



38: Liang S, Bellato HM, Lorent J, Lupinacci FCS, Oertlin C, van Hoef V, Andrade
VP, Roffé M, Masvidal L, Hajj GNM, Larsson O. Polysome-profiling in small tissue
samples. Nucleic Acids Res. 2018 Jan 9;46(1):e3. doi: 10.1093/nar/gkx940. PMID:
29069469; PMCID: PMC5758873.

// MCF7 核糖体 相关的RNA。
//The technique generates polysome-associated RNA with a quality reflecting the starting material and, when coupled with smart-seq2 single-cell RNA sequencing, translatomes in small tissues from biobanks can be obtained. 

---
polysome [ˈpɒlɪsəʊm] n. [生化] 多核糖体；[生化] 多核蛋白体
sucrose [ˈsuːkrəʊz; ˈsuːkrəʊs] n. [食品][有化] 蔗糖





## 39-: long-read (PacBio SMRT)
39: Qiao Y, Ren C, Huang S, Yuan J, Liu X, Fan J, Lin J, Wu S, Chen Q, Bo X, Li
X, Huang X, Liu Z, Shu W. High-resolution annotation of the mouse
preimplantation embryo transcriptome using long-read sequencing. Nat Commun.
2020 May 27;11(1):2653. doi: 10.1038/s41467-020-16444-w. Erratum in: Nat Commun.
2021 Mar 15;12(1):1767. PMID: 32461551; PMCID: PMC7253418.

// 长读段测序。Identification of novel transcripts using PacBio SMRT sequencing in seven stages of preimplantation mouse embryos


## 40: Smart-seq2(mES, K562)比较测序仪:illumina HiSeq4000 vs BIGseq 500
40: Natarajan KN, Miao Z, Jiang M, Huang X, Zhou H, Xie J, Wang C, Qin S, Zhao
Z, Wu L, Yang N, Li B, Hou Y, Liu S, Teichmann SA. Comparative analysis of
sequencing technologies for single-cell transcriptomics. Genome Biol. 2019 Apr
9;20(1):70. doi: 10.1186/s13059-019-1676-5. PMID: 30961669; PMCID: PMC6454680.

// data: We generate a resource of 468 single cells and 1297 matched single cDNA samples, performing `SMARTer and Smart-seq2` protocols on two cell lines( `mESC and K562`) with RNA spike-ins. 
//We sequence these libraries on `both platforms` using single- and paired-end reads.
// Fig.1a SMARTer 就是 用 Fluidigm C1 芯片的。

> The `SMARTer`, two replicates of Smart-seq2 scRNA-seq runs using mESCs and both spike-ins (ERCCs and SIRVs) and sequenced on BGISEQ-500 are deposited at E-MTAB-7239 [19]. 
> The matched ESC data can be retrieved from ArrayExpress (E-MTAB-5483, E-MTAB-5484 and E-MTAB-5485) [5]. 
> The plate-based Smart-seq2 scRNA-seq runs using mESC and K562 cells and ERCCs spike-ins, sequenced on both HiSeq 4000 and BGISEQ-500 are deposited at BioProject (#PRJNA430491) [20], linked sequence read archive repository (SRA#: SRP132313) [21] and CNGB nucleotide Sequencing archive (CNP0000075).




## 41: mouse海马体单细胞测序(modified Smart-seq2)
41: Zhong S, Wang M, Zhan Y, Zhang J, Yang X, Fu S, Bi D, Gao F, Shen Y, Chen Z.
Single-nucleus RNA sequencing reveals transcriptional changes of hippocampal
neurons in APP23 mouse model of Alzheimer's disease. Biosci Biotechnol Biochem.
2020 May;84(5):919-926. doi: 10.1080/09168451.2020.1714420. Epub 2020 Jan 13.
PMID: 31928331.

// Here we used single-nucleus RNA sequencing (snRNA-seq) to access the transcriptional changes of hippocampal neurons in APP23 mouse model of AD. 
//We performed snRNA-seq using a `modified Smart-seq2` technique on 3,280 neuronal nuclei from the hippocampus of young and aged APP23 and control mice and identified four distinct subpopulations.

// https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE141044


---
hippocampal [ˌhɪpəˈkæmpəl] adj. 海马的；海马趾的





42: Andrews TS, Hemberg M. False signals induced by single-cell imputation.
F1000Res. 2018 Nov 2;7:1740. doi: 10.12688/f1000research.16613.2. PMID:
30906525; PMCID: PMC6415334.

//插值导致错误信号。


43: Rangel GW, Clark MA, Kanjee U, Goldberg JM, MacInnis B, José Menezes M,
Ferreira MU, Duraisingh MT. Plasmodium vivax transcriptional profiling of low
input cryopreserved isolates through the intraerythrocytic development cycle.
PLoS Negl Trop Dis. 2020 Mar 2;14(3):e0008104. doi:
10.1371/journal.pntd.0008104. PMID: 32119669; PMCID: PMC7067476.

// 低输入低温保存的间日疟原虫通过红细胞内发育周期的转录谱分析

---
plasmodium  [plæzˈməʊdɪəm]  n. [无脊椎] 疟原虫；变形体；原形体；多核的原形质块
vivax ['vaivæks]  n. （引起疟疾的）疟原虫
intraerythrocytic   红细胞内的，红细胞内的




44: Vanlandewijck M, Betsholtz C. Single-Cell mRNA Sequencing of the Mouse Brain
Vasculature. Methods Mol Biol. 2018;1846:309-324. doi:
10.1007/978-1-4939-8712-2_21. PMID: 30242769.

// 书章节。鼠脑，FACS筛选到384孔板

---
vasculature  [ˈvæskjʊlətʃə(r)] n. 脉管系统



## 45-: 毒素对 人胚肾小管上皮细胞系 的影响
45: Zhang B, Zhu L, Dai Y, Li H, Huang K, Luo Y, Xu W. An in vitro attempt at
precision toxicology reveals the involvement of DNA methylation alteration in
ochratoxin A-induced G0/G1 phase arrest. Epigenetics. 2020 Jan-
Feb;15(1-2):199-214. doi: 10.1080/15592294.2019.1644878. Epub 2019 Jul 22. PMID:
31314649; PMCID: PMC6961687.

//体外精确毒理学尝试揭示了赭曲霉毒素 A 诱导的 G0/G1 期阻滞中 DNA 甲基化改变的参与
//These cells are sorted with a flow cytometer and subjected to mRNA and DNA methylation sequencing using Smart-Seq2 and single-cell reduced-representation bisulfite sequencing (scRRBS) technology, respectively.

//HKC CELL LINE 人胚肾小管上皮细胞系

//Integrated analysis of the transcriptome and methylome profiles reveals that OTA causes abnormal expression of the essential genes that regulate G1/S phase transition, act as signal transductors in G1 DNA damage checkpoints, and associate with the anaphase-promoting complex/cyclosome.

// 无数据。

---
toxicology  [ˌtɒksɪˈkɒlədʒi] n. [毒物] 毒物学，[毒物] 毒理学
ochratoxin  [əʊkrəˈtɒksɪn]  n. [微] 赭曲霉素



## 46-: 模拟数据，测试scRNA-seq的isoform定量(参考结论)
46: Westoby J, Herrera MS, Ferguson-Smith AC, Hemberg M. Simulation-based
benchmarking of isoform quantification in single-cell RNA-seq. Genome Biol. 2018
Nov 7;19(1):191. doi: 10.1186/s13059-018-1571-5. PMID: 30404663; PMCID:
PMC6223048.

// We carry out a benchmark for five popular isoform quantification tools. 

// An important biological insight comes from our analysis of real data which shows that `genes that express two isoforms in bulk RNA-seq` predominantly `express one or neither isoform in individual cells`.




47: Linker SB, Randolph-Moore L, Kottilil K, Qiu F, Jaeger BN, Barron J, Gage
FH. Identification of bona fide B2 SINE retrotransposon transcription through
single-nucleus RNA-seq of the mouse hippocampus. Genome Res. 2020
Nov;30(11):1643-1654. doi: 10.1101/gr.262196.120. PMID: 33122305; PMCID:
PMC7605253.

// 小鼠 海马体，转座子元件。

---
bona fide  [ˌbəʊnə ˈfaɪdi]  adj. 真实的；真诚的
retrotransposon [,retrotræns'pozɑn]  n. 还原转座子；[遗] 逆转录转座子



48: Seumois G, Vijayanand P. Single-cell analysis to understand the diversity of
immune cell types that drive disease pathogenesis. J Allergy Clin Immunol. 2019
Nov;144(5):1150-1153. doi: 10.1016/j.jaci.2019.09.014. PMID: 31703762; PMCID:
PMC7595676.

// 综述。单细胞测序，理解驱动发病机理的免疫细胞的多样性。

---
pathogenesis [ˌpæθəˈdʒenɪsɪs] n. 发病机理；发病原




49: Kucharski M, Tripathi J, Nayak S, Zhu L, Wirjanata G, van der Pluijm RW,
Dhorda M, Dondorp A, Bozdech Z. A comprehensive RNA handling and transcriptomics
guide for high-throughput processing of Plasmodium blood-stage samples. Malar J.
2020 Oct 9;19(1):363. doi: 10.1186/s12936-020-03436-w. PMID: 33036628; PMCID:
PMC7547485.

// 疟疾

---
plasmodium  [plæzˈməʊdɪəm] n. [无脊椎] 疟原虫；变形体；原形体；多核的原形质块
malaria [məˈleəriə] n. [内科] 疟疾；瘴气




50: Kameoka H, Maeda T, Okuma N, Kawaguchi M. Structure-Specific Regulation of
Nutrient Transport and Metabolism in Arbuscular Mycorrhizal Fungi. Plant Cell
Physiol. 2019 Oct 1;60(10):2272-2281. doi: 10.1093/pcp/pcz122. PMID: 31241164.

//真菌

---
arbuscular [ɑːˈbʌskjʊlə(r)] 灌木的
mycorrhizal 菌根
hematopoietic  [,hemətəʊpɒɪ'i:tɪk]  adj. 造血的；生血的




## 51-: mcSCRB-seq
51: Sturgess KHM, Calero-Nieto FJ, Göttgens B, Wilson NK. Single-Cell Analysis
of Hematopoietic Stem Cells. Methods Mol Biol. 2021;2308:301-337. doi:
10.1007/978-1-0716-1425-9_22. PMID: 34057731.

//书章节。

//  The plate-based protocol described in this chapter is a combination of the Smart-Seq2 and `mcSCRB-Seq` protocols, optimized in our laboratory.
> 25.Bagnoli JW, Ziegenhain C, Janjic A et al (2018) Sensitive and powerful single-cell RNA sequencing using mcSCRB-seq. Nat Commun 9:1–8.  https://doi.org/10.1038/s41467-018-05347-6
> We combined these and other improvements to develop a scRNA-seq library protocol we call molecular crowding SCRB-seq (`mcSCRB-seq`), which we show to be one of the most sensitive, efficient, and flexible scRNA-seq methods to date.
> https://www.nature.com/articles/s41467-018-05347-6




52: Ooi CC, Mantalas GL, Koh W, Neff NF, Fuchigami T, Wong DJ, Wilson RJ, Park
SM, Gambhir SS, Quake SR, Wang SX. High-throughput full-length single-cell mRNA-
seq of rare cells. PLoS One. 2017 Nov 29;12(11):e0188510. doi:
10.1371/journal.pone.0188510. PMID: 29186152; PMCID: PMC5706670.

//改进：提高通量。稀有细胞。

//In this work, we present a high-throughput full-length mRNA-seq protocol incorporating a magnetic sifter and magnetic nanoparticle-antibody conjugates for rare cell enrichment, and Smart-seq2 chemistry for sequencing.


## 53-: 自动化, 全长scRNA-seq(humanCellAtlas)
53: Mamanova L, Miao Z, Jinat A, Ellis P, Shirley L, Teichmann SA. High-
throughput full-length single-cell RNA-seq automation. Nat Protoc. 2021
Jun;16(6):2886-2915. doi: 10.1038/s41596-021-00523-3. Epub 2021 May 14. PMID:
33990801.

//自动化。全长测序。
//Here, we describe an automated protocol for full-length single-cell RNA sequencing, including both an in-house automated Smart-seq2 protocol and a commercial kit-based workflow. 
// 用在了  www.humancellatlas.org



54: Wang N, Li CY, Zhu HB, Hao HS, Wang HY, Yan CL, Zhao SJ, Du WH, Wang D, Liu
Y, Pang YW, Zhao XM. Effect of vitrification on the mRNA transcriptome of bovine
oocytes. Reprod Domest Anim. 2017 Aug;52(4):531-541. doi: 10.1111/rda.12942.
Epub 2017 Mar 12. PMID: 28295644.

//牛。跳过。

---
vitrification  [ˌvɪtrɪfɪˈkeɪʃn] n. 玻璃化；透明化；玻璃状物（等于vitrifaction）
bovine [ˈbəʊvaɪn]  adj. 牛的；似牛的；迟钝的 n. 牛科动物
oocyte [ˈəʊəsaɪt] n. [细胞] 卵母细胞




55: Peng Y, Qiao H. The Application of Single-Cell RNA Sequencing in Mammalian
Meiosis Studies. Front Cell Dev Biol. 2021 Aug 18;9:673642. doi:
10.3389/fcell.2021.673642. PMID: 34485276; PMCID: PMC8416306.

// 综述。scRNA-seq用于哺乳动物减数分裂

---
meiosis [maɪˈəʊsɪs] n. [细胞] 减数分裂；[遗][细胞] 成熟分裂


## 56-: scDaPars 分析sc APA
56: Gao Y, Li L, Amos CI, Li W. Analysis of alternative polyadenylation from
single-cell RNA-seq using scDaPars reveals cell subpopulations invisible to gene
expression. Genome Res. 2021 Oct;31(10):1856-1866. doi: 10.1101/gr.271346.120.
Epub 2021 May 25. PMID: 34035046.

// 看不到全文。




57: Cole C, Byrne A, Beaudin AE, Forsberg EC, Vollmers C. Tn5Prime, a Tn5 based
5' capture method for single cell RNA-seq. Nucleic Acids Res. 2018 Jun
1;46(10):e62. doi: 10.1093/nar/gky182. PMID: 29548006; PMCID: PMC6007450.

// GM12878 人B淋巴细胞
// 新方法，找到TSS位置。However, most widely used RNA-seq protocols fail to provide crucial information regarding `transcription start sites`. Here we present a protocol, Tn5Prime, that takes advantage of the Tn5 transposase-based Smart-seq2 protocol to create RNA-seq libraries that capture the 5' end of transcripts. 

---




58: Sun R, Xu K, Ji S, Pu Y, Yu L, Yin L, Zhang J, Pu Y. Toxicity in
hematopoietic stem cells from bone marrow and peripheral blood in mice after
benzene exposure: Single-cell transcriptome sequencing analysis. Ecotoxicol
Environ Saf. 2021 Jan 1;207:111490. doi: 10.1016/j.ecoenv.2020.111490. Epub 2020
Oct 26. PMID: 33120278.

// 苯 暴露后 小鼠的(骨髓来源、外周血来源的) 造血干细胞中的毒性。单细胞分析。

//Here, Smart-seq2 single-cell transcriptome sequencing was used to detect transcriptomic alternations in BM HSCs and peripheral blood HSCs (PBSCs) in male C57B/6 mice exposed to benzene. 



## 59-: iMAP: 对抗配对转移网络 整个sc datasets
59: Wang D, Hou S, Zhang L, Wang X, Liu B, Zhang Z. iMAP: integration of
multiple single-cell datasets by adversarial paired transfer networks. Genome
Biol. 2021 Feb 18;22(1):63. doi: 10.1186/s13059-021-02280-8. PMID: 33602306;
PMCID: PMC7891139.

//We present a novel unsupervised batch effect removal framework, called iMAP, based on both deep autoencoders and generative adversarial networks.

//Applying iMAP to tumor microenvironment datasets from two platforms, Smart-seq2 and 10x Genomics, we find that iMAP can leverage the powers of both platforms to discover novel cell-cell interactions.

---
adversarial  [ˌædvəˈseəriəl] adj. 对抗的；对手的，敌手的




## 60-: barcoded Smart-seq2 of MDA-MB-231 放射前后
60: Gao Y, Duan Q, Wu N, Xu B. A heterogeneous cellular response to ionizing
radiation revealed by single cell transcriptome sequencing. Am J Cancer Res.
2021 Feb 1;11(2):513-529. PMID: 33575084; PMCID: PMC7868766.

// https://pubmed.ncbi.nlm.nih.gov/33575084/
//单细胞转录组测序揭示的电离辐射的异质细胞反应
//We utilized the `barcoded Smart-seq2` single cell transcriptome sequencing technology in breast cancer cell line `MDA-MB-231` both without and with IR treatment.

//In the absence of ATM kinase, cells displayed much less transcriptional changes after IR.

//To further understand how ATM, a major hub protein required for an optimal DNA damage response, affected the heterogeneous IR response, we also knocked down ATM gene for single cell transcriptome sequencing.

//We analysed 3’ mRNA libraries for 334 single cells using breast cancer cell line MDA-MB-231
// https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE145700


`barcoded Smart-seq2`: 
> 32. Dong J, Hu Y, Fan X, Wu X, Mao Y, Hu B, Guo H, Wen L, Tang F. Single-cell RNA-seq analysis unveils a prevalent epithelial/mesenchymal hybrid state during mouse organogenesis. Genome Biol. 2018;19:31.


---
heterogeneous  [ˌhetərəˈdʒiːniəs] adj. 由很多种类组成的，混杂的；各种各样的；（化学）不均一的，多相的；（数学）不纯一的，参差的
ionize  [ˈaɪənaɪz] vi. 离子化 vt. 电离；使离子化
organogenesis  [ˌɔːɡənəʊˈdʒenɪsɪs] n. [胚] 器官发生；[胚] 器官形成




## 61-: splicing 也有细胞特异性(参考结论)
61: Olivieri JE, Dehghannasiri R, Wang PL, Jang S, de Morree A, Tan SY, Ming J,
Ruohao Wu A; Tabula Sapiens Consortium, Quake SR, Krasnow MA, Salzman J. RNA
splicing programs define tissue compartments and cell types at single cell
resolution. Elife. 2021 Sep 13;10:e70692. doi: 10.7554/eLife.70692. Epub ahead
of print. PMID: 34515025.

//We apply the SpliZ, a new statistical approach, to detect cell-type-specific splicing in >110K cells from 12 human tissues.

//SpliZ analysis reveals 170 genes with regulated splicing during human spermatogenesis, including examples conserved in mouse and mouse lemur. 

//The SpliZ allows model-based identification of subpopulations indistinguishable based on gene expression, illustrated by subpopulation-specific splicing of classical monocytes involving an ultraconserved exon in SAT1.

//Together, this analysis of differential splicing across multiple organs establishes that splicing is regulated cell-type-specifically.

---
lemur  [ˈliːmə(r)] n. [脊椎] 狐猴
mouse lemur 鼠狐猴




62: Santoro F, Chien KR, Sahara M. Isolation of human ESC-derived cardiac
derivatives and embryonic heart cells for population and single-cell RNA-seq
analysis. STAR Protoc. 2021 Feb 11;2(1):100339. doi: 10.1016/j.xpro.2021.100339.
PMID: 33644774; PMCID: PMC7887647.

// 教程：分离人ESC来源的心脏衍生物

---
cardiac  [ˈkɑːdiæk] adj. 心脏的，心脏病的；（与）贲门（有关）的
derivative [dɪˈrɪvətɪv] n. 派生物，衍生物；派生词；（金融）衍生工具（产品）；导数，微商 adj. 非独创的，模仿他人的；（金融产品）衍生的



## 63: CRC 肿瘤干细胞状态：转录组与端粒
63: Wang H, Gong P, Chen T, Gao S, Wu Z, Wang X, Li J, Marjani SL, Costa J,
Weissman SM, Qi F, Pan X, Liu L. Colorectal Cancer Stem Cell States Uncovered by
Simultaneous Single-Cell Analysis of Transcriptome and Telomeres. Adv Sci
(Weinh). 2021 Feb 8;8(8):2004320. doi: 10.1002/advs.202004320. PMID: 33898197;
PMCID: PMC8061397.

// Here, simultaneous measurement of telomere length and transcriptome in the same cells enables systematic assessment of CSCs in primary colorectal cancer (CRC). 
// The in-depth transcriptome profiled by SMART-seq2 is independently validated by high-throughput scRNA-seq using 10 × Genomics.

// It is found that rare CSCs exist in dormant state and display plasticity toward cancer epithelial cells (EPCs) that essentially are presumptive tumor-initiating cells (TICs), while both retaining the prominent signaling pathways including WNT, TGF-β, and HIPPO/YAP. 

//SRA: SRP113436, https://www.ncbi.nlm.nih.gov/sra/?term=SRP113436 , 831个细胞。

---
telomere  [ˈteləmɪə]  n. [遗] 端粒
dormant  [ˈdɔːmənt] adj. 休眠的；静止的；睡眠状态的；隐匿的
plasticity  [plæˈstɪsəti]  n. 塑性，可塑性；适应性；柔软性




## 64: 肾小球
64: He B, Chen P, Zambrano S, Dabaghie D, Hu Y, Möller-Hackbarth K, Unnersjö-
Jess D, Korkut GG, Charrin E, Jeansson M, Bintanel-Morcillo M, Witasp A,
Wennberg L, Wernerson A, Schermer B, Benzing T, Ernfors P, Betsholtz C, Lal M,
Sandberg R, Patrakka J. Single-cell RNA sequencing reveals the mesangial
identity and species diversity of glomerular cell transcriptomes. Nat Commun.
2021 Apr 9;12(1):2141. doi: 10.1038/s41467-021-22331-9. PMID: 33837218; PMCID:
PMC8035407.

// 单细胞RNA测序揭示了肾小球细胞转录组的系膜特性和物种多样性
//https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC8035407/

//To this end, we use Smart-seq2 to profile 4332 individual glomerulus-associated cells isolated from human living donor renal biopsies and mouse kidney. 

// mouse: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE160048
//Due to EU General Data Protection Regulation (GDPR), raw sequencing data of human Smart-seq2 scRNA-seq have been submitted to European Genome-Phenome Archive (EGA) with the accession number EGAD00001006861. 
//https://ega-archive.org/datasets/EGAD00001006861

//https://patrakkalab.se/kidney/

---
mesangial adj. 肾小球系膜的
glomerular [ɡlɒˈmerʊlə(r)] 小球的；血管小球的




## 65-: 基于小数据，生成数据： VAEs and DBMs
65: Treppner M, Salas-Bastos A, Hess M, Lenz S, Vogel T, Binder H. Synthetic
single cell RNA sequencing data from small pilot studies using deep generative
models. Sci Rep. 2021 Apr 30;11(1):9403. doi: 10.1038/s41598-021-88875-4. PMID:
33931726; PMCID: PMC8087667.

//Deep generative models, such as variational autoencoders (VAEs) or deep Boltzmann machines (DBMs), can generate an arbitrary number of synthetic observations after being trained on an initial set of samples. 



66: Rosales SL, Liang S, Engel I, Schmiedel BJ, Kronenberg M, Vijayanand P,
Seumois G. A Sensitive and Integrated Approach to Profile Messenger RNA from
Samples with Low Cell Numbers. Methods Mol Biol. 2018;1799:275-302. doi:
10.1007/978-1-4939-7896-0_21. Erratum in: Methods Mol Biol. 2018;1799:C3. PMID:

// 书章节。


## 67: 脑脊液中弥漫大B细胞
67: Ruan H, Wang Z, Zhai Y, Xu Y, Pi L, Zheng J, Zhou Y, Zhang C, Huang R, Chen
K, Li X, Ma W, Wu Z, Shen J, Deng X, Zhang C, Guan M. Single-cell transcriptome
analysis of diffuse large B cells in cerebrospinal fluid of central nervous
system lymphoma. iScience. 2021 Aug 11;24(9):102972. doi:
10.1016/j.isci.2021.102972. PMID: 34471864; PMCID: PMC8387906.

//中枢神经系统淋巴瘤脑脊液弥漫大B细胞单细胞转录组分析
// https://pubmed.ncbi.nlm.nih.gov/34471864/


//Diffuse large B cells in the cerebrospinal fluid (CSF-DLBCs) have offered great promise for the diagnostics and therapeutics of central nervous system lymphoma (CNSL) leptomeningeal involvement.
//To explore the phenotypic states of CSF-DLBCs, we analyzed the transcriptomes of more than one thousand CSF-DLBCs from `six patients` with CNSL diffuse large B-cell lymphoma (DLBCL) using `Smart-seq2` single-cell RNA sequencing.

// data: https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE175510

//We identified inherent heterogeneity of CSF-DLBCs, which were mainly manifested in `cell cycle state, cancer-testis antigen expression, and classification based on single-cell germinal center B-cell signature`.


//细胞周期: 
> fig.4 (D) Estimation of the cell cycle state of every CSF-DLBC (circles) on the basis of relative expression of G1/S (x axis) and G2/M (y axis) gene sets in different CNSL-DLBCL patients. Cells are colored by presumed cell cycle states. Red, cycling cells (score >0.2); pink, intermediate (0 < score ≤0.2); gray, noncycling cells (score ≤0).
> ![1002_cell_cycle_score.png](/data/2021/images/10/1002_cell_cycle_score.png)

---
cerebrospinal  [ˌserɪbrəʊˈspaɪnəl]  adj. [解剖] 脑脊髓的
lymphoma [lɪmˈfəʊmə] n. [肿瘤] 淋巴瘤




68: Wang X, Yu L, Wu AR. The effect of methanol fixation on single-cell RNA
sequencing data. BMC Genomics. 2021 Jun 5;22(1):420. doi:
10.1186/s12864-021-07744-6. Erratum in: BMC Genomics. 2021 Jul 19;22(1):554.
PMID: 34090348; PMCID: PMC8180132.

//固定对测序的影响。全长测序受到影响，而 drop-seq 受影响较小。
//By grouping transcripts based on their lengths and GC content, we find that transcripts with different features are affected by fixation to different degrees in full-length sequencing data, while the effect is alleviated in Drop-seq result.



## 69: 神经疾病(AD, HD)
69: Sorek M, Oweis W, Nissim-Rafinia M, Maman M, Simon S, Hession CC, Adiconis
X, Simmons SK, Sanjana NE, Shi X, Lu C, Pan JQ, Xu X, Pouladi MA, Ellerby LM,
Zhang F, Levin JZ, Meshorer E. Pluripotent stem cell-derived models of
neurological diseases reveal early transcriptional heterogeneity. Genome Biol.
2021 Mar 4;22(1):73. doi: 10.1186/s13059-021-02301-6. PMID: 33663567; PMCID:
PMC7934477.

//Analyzing single-cell RNA sequencing from Alzheimer’s disease (AD) and Huntington’s disease (HD) patients, we find increased transcriptional heterogeneity in disease-state neurons. 
// https://pubmed.ncbi.nlm.nih.gov/33663567/

//Identification of transcriptional heterogeneity changes in Huntington's disease (HD) and Autism Spectrum Disorder (ASD) human embryonic stem cells(hESC)- and induced pluripotent stem cells(iPSC)-derived neural progenitor cells
//https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE138525

---
pluripotent [ˌplʊərɪˈpəʊt(ə)nt] adj. 多能（性）的
neurological [ˌnjʊərəˈlɒdʒɪkl]  adj. 神经病学的，神经学上的
Alzheimer’s disease (AD) https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE138852
Huntington’s disease (HD) https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE152058



70: Shu M, Xue X, Nie H, Wu X, Sun M, Qiao L, Li X, Xu B, Xiao Z, Zhao Y, Fan Y,
Chen B, Zhang J, Shi Y, Yang Y, Lu F, Dai J. Single-cell RNA sequencing reveals
Nestin<sup>+</sup> active neural stem cells outside the central canal after
spinal cord injury. Sci China Life Sci. 2021 May 28. doi:
10.1007/s11427-020-1930-0. Epub ahead of print. PMID: 34061300.

// 书章节。神经。
