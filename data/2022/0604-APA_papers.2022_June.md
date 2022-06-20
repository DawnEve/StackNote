0604-APA_papers.2022_June.md


# Lecture 1 (2022.6.10 form NIH)
![上皮很难搞](data/2022/images/06/0610_Tumor_Functional_colony.png)

> lichun.ma@nih.gov About tumour evolution. HCC 肝癌;

```
张学工: DCA mapping? Mutation based colony ~ Function based colony;
古谨: Tumore 细胞的多 region 采样，怎么机器学习注释的？分级聚类怎么做的？
	biopsy 一针扎进入，取得东西可能差别很大。Tomor biology 差不多;
```	





# Cell cycle

## (Good)[NC] Cell cycle gene regulation dynamics revealed by RNA velocity and deep-learning
> Nat Commun. 2022 May 23;13(1):2865. doi: 10.1038/s41467-022-30545-8.
> Institut de Génétique et de Biologie Moléculaire et Cellulaire (IGBMC); Université de Strasbourg; Centre National de la Recherche Scientifique (CNRS) UMR 7104; Institut National de la Santé et de la Recherche Médicale (INSERM) UMR-S 1258, 1 Rue Laurent Fries, 67404, Illkirch, France. arriba87@gmail.com.
> https://pubmed.ncbi.nlm.nih.gov/35606383/


Abstract
Despite the fact that the cell cycle is a fundamental process of life, a detailed quantitative understanding of gene regulation dynamics throughout the cell cycle is far from complete. Single-cell RNA-sequencing (scRNA-seq) technology gives access to these dynamics without externally perturbing the cell. Here, by generating scRNA-seq libraries in different cell systems, we observe cycling patterns in the unspliced-spliced RNA space of cell cycle-related genes. Since existing methods to analyze scRNA-seq are not efficient to measure cycling gene dynamics, we propose a deep learning approach (DeepCycle) to fit these patterns and build a high-resolution map of the entire cell cycle transcriptome. Characterizing the cell cycle in embryonic and somatic cells, we identify major waves of transcription during the G1 phase and systematically study the stages of the cell cycle. Our work will facilitate the study of the cell cycle in multiple cellular models and different biological contexts.











## [PNAS] (同步化的 MCF7) Transcriptional landscape of the human cell cycle.
> https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE94479
> https://www.pnas.org/doi/epdf/10.1073/pnas.1617636114
> PMID: 28289232

However, transcriptional gene regulation and histone modification dynamics at different cell cycle stages is largely unknown.

MCF7 cells are `synchronized to three different cell cycle stages: G0/G1, S and M phase`. Global nuclear run-on followed by RNA sequencing (GRO-seq), ChIP-seq for H3K27ac and H3K4me2 modification were carried out in the synchronized cells. Dnase-seq were performed in asynchronized MCF7 cells.


```
GSM2476255	MCF7 RNA-seq G0/G1
GSM2476256	MCF7 RNA-seq S phase
GSM2476257	MCF7 RNA-seq M phase
```


### 细胞同步化

Cells were synchronized to G0/G1, G1/S, and M phasewith hormone starvation, thymidine double treatment, and thymidine-nocodazole treatment, respectively. For detailed operations, seeSI Appendix,Supplemental Methods.

> 见 [补充材料](https://www.pnas.org/action/downloadSupplement?doi=10.1073%2Fpnas.1617636114&file=pnas.1617636114.sapp.pdf)

![fig.s1](data/2022/images/06/0604_Cell_Synchronization_G0_G1S_M.png)

Figure S1. Synchronization of MCF-7 cells at different cell cycle stages. FACS showing DNA content of unsynchronized (A) and synchronized MCF-7 cells at (B) G0/G1, (C) G1/S and (D) M phases. 
细胞同步化，A是未同步化，BCD是分别同步化到不同细胞周期。


- Supplemental methods: Cell synchronization
  * G0/G1: MCF-7 cells were cultured in white DMEM media supplemented with 10% (vol/vol) charcoal-stripped FBS for 72 hours. | G0/G1 是饥饿处理 72h: 活性炭处理过的血清，for what?
  * G1/S: At 25-30% confluence, MCF-7 cells were wash twice with 1xPBS and cultured in red DMEM media supplemented with 10% (vol/vol) FBS, 1% Pen-Strep, 1% Glutamine and 2mM thymidine (Sigma-Aldrich, St. Louis, MO) for 18 hours (first block). After the first thymidine block, MCF-7 cells were with 1xPBS to remove thymidine and then cultured in fresh red DMEM supplemented with 10% (vol/vol) FBS, 1% Pen-Strep and 1% Glutamine for 9hours. After releasing, perform second round of thymidine block for 17 hours. | G1/S 是 thymidine 胸苷双阻断法。
  * M phase: At 40% confluence, MCF-7 cells were cultured in red DMEM supplemented with 10% (vol/vol) FBS, 1% Pen-Strep, 1% Glutamine and 2mM thymidine for 24 hours (S-phase block). After thymidine block, wash with 1xPBS and culture in fresh red DMEM supplemented with 10% (vol/vol) FBS, 1% Pen-Strep and 1% Glutamine for 3 hours. After releasing, add 200ng/ml nocodazole (Sigma Aldrich) to the media for 12 hours (mitotic block). After mitotic block, gently shake off and collect the non-adhesion cells. | M期是 thymidine + mitotic 阻断后的











## [NM 2015] 识别非同步化细胞的周期基因，使用 RNA-seq
> Oscope identifies oscillatory genes in unsynchronized single-cell RNA-seq experiments
> nature methods | Published: 24 August 2015
> Department of Statistics, University of Wisconsin, Madison, WI, USA.
> https://pubmed.ncbi.nlm.nih.gov/26301841/
> https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE64016
> Whitfield data 2002 http://genome-www.stanford.edu/Human-CellCycle/HeLa/

开发了一个统计学方法 Oscope 来识别震荡的转录组基因。
识别了 C1 的可能错误。

Abstract
Oscillatory gene expression is fundamental to development, but technologies for monitoring expression oscillations are limited. We have developed a statistical approach called Oscope to identify and characterize the transcriptional dynamics of oscillating genes in single-cell RNA-seq data from an unsynchronized cell population. Applying Oscope to a number of data sets, we demonstrated its utility and also identified a potential artifact in the Fluidigm C1 platform.


Main

检测震荡的基因，即使研究最清楚的细胞周期，也没有完全研究清楚。活细胞成像的特异性和灵敏度很高，但是通量太小，一个实验只能检测几个基因。Recent advances in live-cell imaging have improved the sensitivity and specificity with which continuous measurements can be made within a single cell2, but constraints associated with reporters and detection channels limit monitoring to relatively few genes in any given experiment. 

芯片和普通RNA-seq 拿到的是平均后的基因表达。

细胞同步化能获得很多同步的细胞，但是改变了很多转录组动态变化，不能用于全新发现。
Cell synchronization, when possible, attenuates a number of these problems for known oscillatory systems (typically the cell cycle) but can dramatically alter the transcriptional dynamics of others, and it does not facilitate de novo discovery.

单细胞样本，也不可能做详细的时间序列样本。如果是组织样本，也不可能同步化。



### Oscope 算法流程

1. 找基因对
2. K-means 聚类
3. 在每个基因组内，调整细胞顺序。使用 extended nearest-insertion (ENI) algorithm (旅行商 问题)


基础假设

- 非同步化系统中，细胞表示不同状态。Like previous algorithms, Oscope capitalizes on the fact that cells from an unsynchronized population represent distinct states in a system. 
- 不打算建立临近细胞之间微小变化的线性顺序。 However, unlike previous approaches, ours does not attempt to construct a linear order on the basis of minimizing change among adjacent samples. 
- 而是使用震荡基因的共调控信息，建立震荡基因组，然后建立组内的环形顺序，定义每个样本的在一个震荡周期的位置。 Rather, Oscope utilizes co-regulation information among oscillators to identify groups of putative oscillating genes and then reconstructs the cyclic order of samples for each group, defined as the order that specifies each sample's position within one cycle of the oscillation (referred to as a base cycle). 
- 不同的基因组，其细胞顺序可能不同。






### 最近邻插入算法

最近邻插入算法，是解决 旅行商问题的：给出成对城市间的距离，算法给出旅行顺序，使总旅程最短。
The nearest-insertion algorithm 10 was developed to address the traveling salesman problem: given pairwise distances between cities, the algorithm provides a computationally efficient way to order travel to all cities so that overall distance is minimized

TSP问题，即traveling salesman problem——旅行商问题。


- 随机挑选3个基因，组成无向环。The ENI starts with three randomly selected cells and forms a loop (undirected graph). 
- 随机挑选第4个细胞，有三个插入位置。A fourth cell is chosen at random and inserted into the three cell-cell gaps on the loop. This forms three candidate orders. 
- 使用 滑动多项式回归(SPR) 的 均方误(MSE)评价每种顺序。 We evaluate each order using the aggregated mean squared error (MSE) of a sliding polynomial regression (SPR). 
对于每个给定顺序，对每个基因的表达值拟合SRP。 For a given order, SPR is fitted to the expression of each gene.

- 为了捕捉数据的循环特征，SPR拟合了m个多项式回归模型，从环上m个均匀分布的点开始。
To capture cyclic features of the data, SPR fits m polynomial regression models starting with m evenly distributed points on the loop. 

- 在m个模型中，最大的MSE被定义为该基因SPR的MSE。
The largest MSE among the m models is defined as the MSE of the SPR for this gene. 

- 对于每个序列，将振荡基因群的 聚集MSE 定义为所有基因间MSE的总和。
For each order, the aggregated MSE of an oscillatory gene group is defined as the summation of the MSEs among all genes. 

- 聚合MSE最小的顺序，作为前四个单元的最优顺序。
The optimal order of the first four cells is then selected as the one that minimizes the aggregated MSE. 

- 然后接着插入第5个点，直到所有细胞都在环中。
This process is repeated to insert the fifth cell and so on, until all cells are in the loop. 

- 使用 2-opt 算法，避免局部最优。
A 2-opt algorithm is then applied to avoid finding local maxima.



> todo: 滑动多项式回归; 2-opt 算法;



#### 2-opt 算法

2-opt其实是2-optimization的缩写，简言之就是两元素优化。也可以称作2-exchange 。
2-opt algorithm最早是由 croes 发表在Operations Research上的一篇名为A Method for Solving Traveling-Salesman Problems的论文（该论文可在OR数据库付费下载）中提出的。最初是用于解决TSP问题的算法。

2-opt属于局部搜索算法，局部搜索算法（local search algorithm）是解决组合优化问题的有效工具。1986年，Glover对局部搜索算法进行推广衍生，提出了禁忌搜索算法（tabu search algorithm），如今已经广为人知并且在组合优化领域中得到了广泛的应用。


这里我们就举一个2-opt算法最原始应用的例子——解决TSP问题：
假设有一个旅行商必须要从A城市出发经过BCDEFGH这几个城市最后回到A城市(可以理解为约束条件)，目标函数是路程最短(更广义的说是 费用最少)。
首先我们可以任选一个可行解s={A,B,C,D,E,F,G,H,A}，并假设s是最优解Smin。然后使用2-opt算法进行问题的求解：随机选取两点i和k，将i之前的路径不变添加到新路径中，将i到k之间的路径翻转其编号后添加到新路径中，将k之后的路径不变添加到新路径中。
原路径: A ==> B ==> C ==> D ==> E ==> F ==>G ==> H ==> A
i = 4, k =7
新路径:
1. (A ==> B ==>C)
2. A ==> B ==> C==> (G ==> F ==> E ==> D)
3. A ==> B ==> C==> G ==> F ==> E ==> D (==> H ==> A)
从而获得一个新的可行解。将可行解代入目标函数可得目标函数值，将其与Smin的目标函数值比较，取两者目标函数值较小的可行解为Smin，直到找不到比Smin还小的函数值为止。至此，该TSP问题已用2-opt算法解决。


2-opt的推广: 很容易将2-opt算法推广到k-opt算法，即将上例s中的k个元素进行调换，以更换可行解并检验其在目标函数中的优度。
2-opt也叫2-exchange方法。或者说k-exchange，其中k≥2 。



#### 滑动多项式回归 sliding polynomial regression //todo

https://blog.csdn.net/wangjunliang/article/details/125256066












### hESC 单细胞测序样本

(213 unlabeled and 247 H1-FUCCI cells are shown as open and filled circles, respectively). 
FUCCI labels (ignored before applying Oscope) are shown in different colors for the 247 cells.


- To further evaluate Oscope on scRNA-seq data, we analyzed profiles of single undifferentiated human embryonic stem cells (hESCs)11. We applied Oscope to three replicate scRNA-seq experiments on H1 hESCs (n = 213). 

> 11. Thomson, J.A. et al. Science 282, 1145–1147 (1998).

- “Cell Cycle” biological process (GO:0007049).

- 这个数据是自己造的: 247 个 H1 hESC 带荧光泛素化标记细胞周期报告子。To confirm whether the recovered profiles were associated with cell-cycle phasing, we performed additional scRNA-seq experiments (n = 247) on H1 hESCs harboring the fluorescent ubiquitination-based cell-cycle indicators 13 reporter (H1-FUCCI, see Online Methods) in which cells were identified as being in G1, S or G2/M phase. 

> 13. Sakaue-Sawano, A. et al. Cell 132, 487–498 (2008).



---

> 213 H1 hESC; SE 67bp; C1;

Cells having fewer than 5,000 genes with TPM >1 were removed in quality control. 62, 78 and 73 cells passed the quality control in three replicate hESC experiments for a total of 213 H1 hESCs.





### H1-FUCCI hESC cell line.

Fluorescent ubiquitination-based cell-cycle indicator (FUCCI) H1 hESCs were generated by piggyBac insertion of a cassette encoding an eef1a promoter–driven mCherryCDT1-IRES-EgfpGMNN double transgene (custom ordered from GenScript).

- CDT1: CDT1 is the essential regulator of the initiation of DNA replication. Overexpressed CDT1 can cause DNA damage through re-replication. 
	* Chromatin licensing and DNA replication factor 1 (Cdt1),
- GMNN: the DNA replication inhibitor Geminin (GMNN).

The H1-FUCCI cell line provides a two-color fluorescence labeling system allow ing single-cell suspensions from G1, S or G2/M cell-cycle phases to be isolated by FACS.

- A total of 91, 80, and 76 cells in G1, S and G2/M, respectively, passed our quality-control criteria as defined in the H1 hESC read-mapping and quality-control section.




### 培养基

All cell cultures performed in our laboratory have routinely tested negative for mycoplasma contamination and have been authenticated by cytogenetic tests.

---

mycoplasma [ˌmaɪkəʊˈplɑːzmə] n. [微] 支原菌，[微] 支原体
cytogenetic [ˌsaɪtəʊdʒɪˈnetɪk] adj. 细胞生成的；细胞发生的


---

oscillatory [ˈɒsɪlətəri] adj. 振荡的；振动的；动摇的
artifact [ˈɑːtɪfækt] n. （尤指有文化价值或历史价值的）人工制品，历史文物；非自然存在物体，假象（=artefact）
prohibitive [prəˈhɪbətɪv] adj. （费用或价格）高得令人望而却步的；限制性的，禁止的

capitalize [ˈkæpɪtəlaɪz] v. 用大写字母书写（或印刷），把……首字母大写；【利用（capitalize on）】
sinusoidal [,saɪnə'sɔɪdəl] adj. 正弦曲线的

magenta [məˈdʒentə] n. 品红；洋红；红色苯胺染料 adj. 洋红色的；品红色的
unprecedented [ʌnˈpresɪdentɪd] adj. 前所未有的，史无前例的；（大小、数量、程度等）前所未知的，空前的
longitudinal [ˌlɒŋɡɪˈtjuːdɪnl; ˌlɒndʒɪˈtjuːdɪnl] adj. 纵长的，纵向的；纵观的；经度的










# [IF7.4] 肿瘤病人的转录后损伤相关的3UTR的突变(n=2413)
> Comprehensive characterization of posttranscriptional impairment-related 3'-UTR mutations in 2413 whole genomes of cancer patients
> NPJ Genom Med. 2022 Jun 2;7(1):34. doi: 10.1038/s41525-022-00305-0.
> State Key Laboratory of Molecular Oncology, National Cancer Center, National Clinical Research Center for Cancer, Cancer Hospital, Chinese Academy of Medical Sciences and Peking Union Medical College, Beijing, 100021, China.
> PMID: 35654793


样本: 
To explore the posttranscriptional function of 3'-UTR somatic mutations in tumorigenesis, we collected whole-genome data from 2413 patients across 18 cancer types.

分析:

发现25k个3UTR的SNV，共 2.9k个基因，其中 24个 RBP。
Our updated algorithm, PIVar, revealed 25,216 3'-UTR posttranscriptional impairment-related SNVs (3'-UTR piSNVs) spanning 2930 genes; 24 related RBPs were significantly enriched. 

突变率在18个肿瘤中都增加，4个肿瘤中与不良预后相关。
The somatic 3'-UTR piSNV ratio was markedly increased across all 18 cancer types, which was associated with worse survival for four cancer types. 

几个肿瘤相关基因可能在蛋白和转录后调控上致瘤，而一些 3UTR SNV 主要通过转录后机制起作用。
Several cancer-related genes appeared to facilitate tumorigenesis at the protein and posttranscriptional regulation levels, whereas some 3'-UTR piSNV-affected genes functioned mainly via posttranscriptional mechanisms. 

评估了免疫细胞和检查点分子，高低3UTR比率的组，预测了 80个与 3UTR SNV 相关的化合物。
Moreover, we assessed immune cell and checkpoint characteristics between the high/low 3'-UTR piSNV ratio groups and predicted 80 compounds associated with the 3'-UTR piSNV-affected gene expression signature. 










# [IF 8.7] CPEB1 在 小神经胶质中 调节 免疫应答、吞噬、APA
> CPEB1 regulates the inflammatory immune response, phagocytosis, and alternative polyadenylation in microglia
> Glia. 2022 May 30. doi: 10.1002/glia.24222. Online ahead of print.
> Program in Molecular Medicine, University of Massachusetts Chan Medical School, Worcester, Massachusetts, USA.
> PMID: 35635122


小胶质细胞是中枢神经系统的髓系细胞，在大脑发育、神经回路稳态和神经疾病中发挥重要作用。
Microglia are myeloid cells of the central nervous system that perform tasks essential for brain development, neural circuit homeostasis, and neural disease. 

有刺激时，Microglia 上调 TLR4，触发下游信号，比如 TAK1
Microglia react to inflammatory stimuli by upregulating inflammatory signaling through several different immune cell receptors such as the Toll-like receptor 4 (TLR4), which signals to several downstream effectors including transforming growth factor beta-activated kinase 1 (TAK1). 


本文： CPEB1 控制 TAK1 的表达水平。
Here, we show that TAK1 levels are regulated by CPEB1, a sequence-specific RNA binding protein that controls translation as well as RNA splicing and alternative poly(A) site selection in microglia. 


LPS 结合到 TLR4，在 CPEB1 敲除老鼠中导致 Iba1 升高(小胶质细胞炎症相关)，IL6 升高。
Lipopolysaccharide (LPS) binds the TLR4 receptor, which in CPEB1-deficient mice leads to elevated expression of ionized calcium binding adaptor molecule 1 (Iba1), a microglial protein that increases with inflammation, and increased levels of the cytokine IL6. 

机制: 
(1)LPS 诱导 IL6 反应可以被如下抑制剂阻断: JNK, p38, ERK, NFκB, and TAK1.
This LPS-induced IL6 response is blocked by inhibitors of JNK, p38, ERK, NFκB, and TAK1. 

(2) CPEB1 缺乏的 小胶质细胞中，吞噬不被 LPS 或者 ERK抑制剂影响，但是能被 TAK1 抑制。
In contrast, phagocytosis, which is elevated in CPEB1-deficient microglia, is unaffected by LPS treatment or ERK inhibition, but is blocked by TAK1 inhibition. 

(3) 以上表明: CPEB1 影响 小胶质细胞的 炎症反应和吞噬。
These data indicate that CPEB1 regulates microglial inflammatory responses and phagocytosis. 

RNA-seq 表明，炎症和吞噬伴随着 RNA 水平、转录本、APA选择性的改变。
RNA-seq indicates that these changes in inflammation and phagocytosis are accompanied by changes in RNA levels, splicing, and alternative poly(A) site selection. 

所以，CPEB1 调控 RNA 表达，在 小胶质细胞 功能中有重要作用。
Thus, CPEB1 regulation of RNA expression plays a role in microglial function.


---

microglia [ˌmaɪkrəʊˈɡlɪə] n. [组织] 小神经胶质；小神经胶质细胞；格子细胞









# [IF 4.45] RNA 修饰与胃癌预后(水文)
> Characterization of RNA modifications in gastric cancer to identify prognosis-relevant gene signatures
> Cancer Med. 2022 May 30. doi: 10.1002/cam4.4861. Online ahead of print.
> Department of Surgical Oncology, The First Affiliated Hospital of China Medical University, Shenyang, China.
> PMID: 35635121


APA 产生的3‘转录本和 m7G 产生的5’转录本，对胃癌的预后未知。
Background: Most human genes have diverse transcript isoforms, which mainly arise from alternative cleavage and polyadenylation (APA) at 3' ends. N7-methylguanosine (m7 G) is also an essential epigenetic modification at the 5' end. However, the contribution of these two RNA modifications to the development, prognosis, regulation mechanisms, and drug sensitivity of gastric cancer (GC) is unclear.










# [IF 22.63] HAS2 3'UTR缩短促进肺动脉高压中透明质酸的高合成和生物能量功能障碍 [公司的文章]
> 3'UTR shortening of HAS2 promotes hyaluronan hyper-synthesis and bioenergetic dysfunction in pulmonary hypertension
> Matrix Biol. 2022 Jun 4;S0945-053X(22)00075-0. doi: 10.1016/j.matbio.2022.06.001
> Respiratory Medicine, Ansible Health Mountain View, CA.
> PMID: 35671866


Pulmonary hypertension (PH) 肺动脉高压 ; 肺高压 ; 肺高血压

HA upregulation involves depletion of NUDT21, a master regulator of alternative polyadenylation, resulting in 3'UTR shortening and hyper-expression of HAS2. 


In summary, our results uncover a novel mechanism of HA hyper-synthesis and downstream effects on pulmonary vascular cell metabolism and remodeling.

- nudix hydrolase-21 (NUDT21, or cleavage factor Im subunit 25)


> In concert with evolving literature, the new findings of our study support the following sequence of events: 
> (1)hypoxic conditions trigger loss of NUDT21, (2)promoting has2 3’UTR shortening with subsequently increased has2 expression, (3)stimulating progressive accumulation of HA that initiates and contributes to vascular remodeling in PH.


相关文献:
> 23. Y. Xing, L. Chen, H. Gu, C. Yang, J. Zhao, Z. Chen, M. Xiong, G. Kazobinka, Y. Liu, T. Hou
**Downregulation of NUDT21 contributes to cervical cancer progression through alternative polyadenylation**
Oncogene, 40 (11) (2021), pp. 2051-2064
NUDT21调节APA 导致宫颈癌恶化


> 49. C.C. Gao, Q.Q. Xu, F.J. Xiao, H. Wang, C.T. Wu, L.S. Wang
**NUDT21 suppresses the growth of small cell lung cancer by modulating GLS1 splicing**
Biochem Biophys Res Commun, 526 (2) (2020), pp. 431-438
NUDT21 通过调节 GLS1 剪接抑制小细胞肺癌生长。



---

hyaluronan n. 透明质酸（一种天然保湿剂）
bioenergetic [ˈbaɪəʊˌenəˈdʒetɪk] adj. 生物能量学
pulmonary [ˈpʌlmənəri] adj. 肺的；有肺的；肺状的
ventricular [venˈtrɪkjələ(r)] adj. 心室的；脑室的；膨胀的；腹部的
glycan [ˈɡlaɪkæn] n. [有化] 聚糖；多糖
artery [ˈɑːtəri] n. 动脉；干线，干道，干流
spontaneous [spɒnˈteɪniəs] adj. 自发的，非筹划安排的；（程序，事件）自发的，自然的；（人）天真率直的；（生物）（机体活动）本能的
glycolytic [ˌɡlaɪkəʊˈlɪtɪk] adj. 糖分解的

in concert with 和……相呼应；与……合作；和……一致










# [IF 4.37] 神经细胞对不同RNA的稳定性的控制机制不同：APA、lncRNA、mt RNA(Bin Tian)
> Neuronal Cells Display Distinct Stability Controls of Alternative Polyadenylation mRNA Isoforms, Long Non-Coding RNAs, and Mitochondrial RNAs
> Front Genet. 2022 May 18;13:840369. doi: 10.3389/fgene.2022.840369. eCollection 2022.
> Department of Microbiology, Biochemistry and Molecular Genetics, Rutgers New Jersey Medical School, Newark, NJ, United States.
> PMID: 35664307


比较三个人细胞系的 polyA+ RNA 的稳定性。
RNA stability plays an important role in gene expression. Here, using 3' end sequencing of newly made and pre-existing poly(A)+ RNAs, we compare transcript stability in multiple human cell lines, including HEK293T, HepG2, and SH-SY5Y. 


虽然mRNA稳定性比较保守，但是GC含量高的转录本在 SH-SY5Y 中有更稳定的二级结构，相对于另两个细胞系。
We show that while mRNA stability is generally conserved across the cell lines, specific transcripts having a high GC content and possibly more stable secondary RNA structures are relatively more stable in SH-SY5Y cells compared to the other 2 cell lines. 


These features also differentiate stability levels of alternative polyadenylation (APA) 3'UTR isoforms in a cell type-specific manner. 


Using differentiation of a neural stem cell line as a model, we show that mRNA stability difference could contribute to gene expression changes in neurogenesis and confirm the neuronal identity of SH-SY5Y cells at both gene expression and APA levels. 

In addition, compared to transcripts using 3'-most exon cleavage/polyadenylation sites (PASs), those using intronic PASs are generally less stable, especially when the PAS-containing intron is large and has a strong 5' splice site, suggesting that intronic polyadenylation mostly plays a negative role in gene expression.

Interestingly, the differential mRNA stability among APA isoforms appears to buffer PAS choice in these cell lines. Moreover, we found that several other poly(A)+ RNA species, including promoter-associated long noncoding RNAs and transcripts encoded by the mitochondrial genome, are more stable in SH-SY5Y cells than the other 2 cell lines, further highlighting distinct RNA metabolism in neuronal cells. 

Together, our results indicate that distinct RNA stability control in neuronal cells may contribute to the gene expression and APA programs that define their cell identity.




