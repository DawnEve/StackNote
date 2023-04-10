# 单细胞

## [Front Immunol. 2022] CD8+ T细胞发育树揭示肿瘤异质性，为肝癌治疗提供参考
> CD8+ T cell trajectory subtypes decode tumor heterogeneity and provide treatment recommendations for hepatocellular carcinoma
> https://pubmed.ncbi.nlm.nih.gov/35967384/
> Department of Hepatobiliary and Pancreatic Surgery, The First Affiliated Hospital of Zhengzhou University, Zhengzhou, China.


非负矩阵分解。
A total of 3,817 immune cells and 1,750 HCC patients of 15 independent public datasets were retrieved. The Seurat and Monocle algorithms were used to depict T cell evolution, and **nonnegative matrix factorization (NMF)** was further applied to identify the molecular classification.





## [GB] 单细胞分析结肠癌类器官

> Systematic evaluation of colorectal cancer organoid system by single-cell RNA-Seq analysis
> https://pubmed.ncbi.nlm.nih.gov/35484598/




## tencent刚发的scBERT文章

- https://github.com/TencentAILabHealthcare/scBERT
- https://www.nature.com/articles/s42256-022-00534-z.pdf



## 单细胞鉴定出 PD-1 高表达的 ILC 前体细胞，并定义它的发育路径(Nature. 2016)
> Single-cell RNA-seq identifies a PD-1hi ILC progenitor and defines its development pathway
> https://pubmed.ncbi.nlm.nih.gov/27749818/
> Wellcome Trust Sanger Institute, Hinxton, Cambridge CB10 1HH, UK.


ILC 功能类似T细胞(细胞毒性、分泌细胞因子)，但是没有抗原特异的受体，是重要的免疫反应和组织稳态调控子
Innate lymphoid cells (ILCs) functionally resemble T lymphocytes in cytotoxicity and cytokine production but lack antigen-specific receptors, and they are important regulators of immune responses and tissue homeostasis. 


ILC的来源 淋巴祖细胞。
ILCs are generated from common lymphoid progenitors, which are subsequently committed to innate lymphoid lineages in the α-lymphoid progenitor, early innate lymphoid progenitor, common helper innate lymphoid progenitor and innate lymphoid cell progenitor compartments. 


组成包括 常规NK、类辅助细胞(ILC1, ILC2, ILC3)
ILCs consist of conventional natural killer cells and helper-like cells (ILC1, ILC2 and ILC3). 

ILC前体细胞的细胞异质性、发育路径、信号依赖还不清楚。
Despite recent advances, the cellular heterogeneity, developmental trajectory and signalling dependence of ILC progenitors are not fully understood. 


使用单细胞测序技术，识别 ILC 祖细胞亚群，划定 ILC 发育阶段和路径，报告了高表达 PD-1的是一个定向的祖细胞。 
Here, using single-cell RNA-sequencing (scRNA-seq) of mouse bone marrow progenitors, we reveal ILC precursor subsets, delineate distinct ILC development stages and pathways, and report that high expression of programmed death 1 (PD-1hi) marked a committed ILC progenitor that was essentially identical to an innate lymphoid cell progenitor. 


我们的数据定义 PD-1 + IL-25R+ 作为 ILC2 发育的早期检查点，该检查点因锌指蛋白Bcl11b缺失而被消除，但因IL-25R过表达而恢复。
Our data defined PD-1hiIL-25Rhi as an early checkpoint in ILC2 development, which was abolished by deficiency in the zinc-finger protein Bcl11b but restored by IL-25R overexpression. 

和T类似，PD-1在激活的ILC中上调。
Similar to T lymphocytes, PD-1 was upregulated on activated ILCs. 


使用 PD-1 抗体 删除 PD-1+ 的ILC，降低 细胞因子水平。
Administration of a PD-1 antibody depleted PD-1hi ILCs and reduced cytokine levels in an influenza infection model in mice, and blocked papain-induced acute lung inflammation. 


These results provide a perspective for exploring PD-1 and its ligand (PD-L1) in immunotherapy, and allow effective manipulation of the immune system for disease prevention and therapy.





## 全生物单细胞RNA-Seq揭示刺胞细胞类型多样性及其调控 (Cell. 2018)
> Cnidarian Cell Type Diversity and Regulation Revealed by Whole-Organism Single-Cell RNA-Seq





## 无标记基因 把组织分成不同的细胞类型(Science. 2014)
> Massively parallel single-cell RNA-seq for marker-free decomposition of tissues into cell types
> https://pubmed.ncbi.nlm.nih.gov/24531970/
> Department of Immunology, Weizmann Institute, Rehovot 76100, Israel.
> LPS 刺激前后的脾脏。

多细胞生物，异质性细胞类型导致生物功能不同。
In multicellular organisms, biological function emerges when heterogeneous cell types form complex organs. 

然而，把组织分成细胞亚群还是一个挑战。
Nevertheless, dissection of tissues into mixtures of cellular subpopulations is currently challenging. 

这里介绍 大规模平行 单细胞RNA测序方法，分析体内上千单细胞的转录组状态。
We introduce an automated massively parallel single-cell RNA sequencing (RNA-seq) approach for analyzing in vivo transcriptional states in thousands of single cells. 

结合 非监督分类方法，这有助于 从头开始的 脾脏组织的 细胞类型表征。
Combined with unsupervised classification algorithms, this facilitates ab initio cell-type characterization of splenic tissues. 

树突状细胞(DC)和其他造血细胞类型的单细胞转录状态建模，揭示了稳定状态和病原体激活后丰富的细胞类型异质性和基因模块活性。
Modeling single-cell transcriptional states in dendritic cells and additional hematopoietic cell types uncovers rich cell-type heterogeneity and gene-modules activity in steady state and after pathogen activation. 

因此，细胞多样性是通过推断可变的和动态的通路活性，而不是固定的预先编程的细胞类型层次来实现的。
Cellular diversity is thereby approached through inference of variable and dynamic pathway activity rather than a fixed preprogrammed cell-type hierarchy. 

这些数据表明，单细胞RNA-seq是复杂组织全面细胞分解的有效工具。
These data demonstrate single-cell RNA-seq as an effective tool for comprehensive cellular decomposition of complex tissues.











## 小鼠胚胎造血干细胞活性造血内皮细胞的 时空 和功能异质性[Front Cell Dev Biol. 2021]

> Spatiotemporal and Functional Heterogeneity of Hematopoietic Stem Cell-Competent Hemogenic Endothelial Cells in Mouse Embryos
> https://pubmed.ncbi.nlm.nih.gov/34458261/
> Front Cell Dev Biol. 2021 Aug
> State Key Laboratory of Proteomics, Academy of Military Medical Sciences, Academy of Military Sciences, Beijing, China.


Abstract

Hematopoietic stem cells (HSCs) are derived from hemogenic endothelial cells (HECs) during embryogenesis. The HSC-primed HECs increased to the peak at embryonic day (E) 10 and have been efficiently captured by the marker combination CD41-CD43-CD45-CD31+CD201+Kit+CD44+ (PK44) in the aorta-gonad-mesonephros (AGM) region of mouse embryos most recently. 

In the present study, we investigated the spatiotemporal and functional heterogeneity of PK44 cells around the time of emergence of HSCs. 

First, PK44 cells in the E10.0 AGM region could be further divided into three molecularly different populations showing endothelial- or hematopoietic-biased characteristics. Specifically, with the combination of Kit, the expression of CD93 or CD146 could divide PK44 cells into endothelial- and hematopoietic-feature biased populations, which was further functionally validated at the single-cell level. 

Next, the PK44 population could also be detected in the yolk sac, showing similar developmental dynamics and functional diversification with those in the AGM region. Importantly, PK44 cells in the yolk sac demonstrated an unambiguous multilineage reconstitution capacity after in vitro incubation. Regardless of the functional similarity, PK44 cells in the yolk sac displayed transcriptional features different from those in the AGM region. 

Taken together, our work delineates the spatiotemporal characteristics of HECs represented by PK44 and reveals a previously unknown HSC competence of HECs in the yolk sac. These findings provide a fundamental basis for in-depth study of the different origins and molecular programs of HSC generation in the future.


---

hematopoietic [ˌhemətəʊpɒɪˈi:tɪk] adj. 造血的；生血的
hematopoietic stem cell [组织] 造血干细胞
hemogenic endothelial cells 造血内皮细胞

heterogeneity [ˌhetərədʒəˈniːəti] n. 异质性，非均匀性
卵黄囊（yolk sac）
unambiguous [ˌʌnæmˈbɪɡjuəs] adj. 不含糊的；清楚的；明白的
delineate [dɪˈlɪnieɪt] v. （详细地）描述，解释；标明，标示（边界）





















# 空间转录组

## (华大 2022 Science) Single-cell Stereo-seq 脑再生
> https://pubmed.ncbi.nlm.nih.gov/36048929/
> BGI-Hangzhou, Hangzhou 310012, China.

Abstract

The molecular mechanism underlying brain regeneration in vertebrates remains elusive. We performed spatial enhanced resolution omics sequencing (Stereo-seq) to capture spatially resolved single-cell transcriptomes of axolotl telencephalon sections during development and regeneration. Annotated cell types exhibited distinct spatial distribution, molecular features, and functions. We identified an injury-induced ependymoglial cell cluster at the wound site as a progenitor cell population for the potential replenishment of lost neurons, through a cell state transition process resembling neurogenesis during development. Transcriptome comparisons indicated that these induced cells may originate from local resident ependymoglial cells. We further uncovered spatially defined neurons at the lesion site that may regress to an immature neuron-like state. Our work establishes spatial transcriptome profiles of an anamniote tetrapod brain and decodes potential neurogenesis from ependymoglial cells for development and regeneration, thus providing mechanistic insights into vertebrate brain regeneration.


---

elusive [ɪˈluːsɪv] adj. 难以理解的，难以记住的；难以发现的，难以捕获的
axolotl [ˈæksəˌlɒtəl] n. 蝾螈；[脊椎]美西螈（幼体，实验用动物）
telencephalon [ˌtelenˈsefəˌlɒn] n. 终脑，[胚] 端脑
ependymoglial ?
replenishment [rɪˈplenɪʃmənt] n. 补充，补给
lesion [ˈliːʒn] n. 损害；身体上的伤害；机能障碍
regress [rɪˈɡres] v. 倒退，回归；（尤指因催眠或精神疾患）回到从前；（统计）回归 n. 退回；（哲）倒溯论证







## [NAR] ViBrism DB 交互式查看2D和3D解剖图片和共表达网络
> ViBrism DB: an interactive search and viewer platform for 2D/3D anatomical images of gene expression and co-expression networks
> https://pubmed.ncbi.nlm.nih.gov/30371824/
> Nucleic Acids Res. 2019
> RIKEN Center for Advanced Photonics, Wako, Saitama 351-0198, Japan.


- 网址: http://vibrism.neuroinf.jp/
	* https://vibrism.neuroinf.jp/setsearch/gene/material-ids:Cx1/gene-symbols:Ccne2
	* https://vibrism.neuroinf.jp/setsearch/3d/view/Cx1


Understanding anatomical structures and biological functions based on gene expression is critical in a systemic approach to address the complexity of the mammalian brain, where >25 000 genes are expressed in a precise manner. 

共表达基因：可能调控细胞类型或区域特异的脑功能。
Co-expressed genes are thought to regulate cell type- or region-specific brain functions. 


Thus, well-designed data acquisition and visualization systems for profiling combinatorial gene expression in relation to anatomical structures are crucial. 

构建的平台: 基于微手术和webGL可视化程序，把小鼠脑的全基因转录组映射到鼠脑的4个发育阶段。
To this purpose, using our techniques of microtomy-based gene expression measurements and WebGL-based visualization programs, we mapped spatial expression densities of genome-wide transcripts to the 3D coordinates of mouse brains at four post-natal stages, and built a database, ViBrism DB (http://vibrism.neuroinf.jp/). 

能干什么？看编码基因、非编码基因的3D核磁成像表达。
With the DB platform, users can access a total of 172 022 expression maps of transcripts, including coding, non-coding and lncRNAs in the whole context of 3D magnetic resonance (MR) images. 

使用了 BAH viewer ，这是啥？
Co-expression of transcripts is represented in the image space and in topological network graphs. In situ hybridization images and anatomical area maps are browsable in the same space of 3D expression maps using a new browser-based 2D/3D viewer, BAH viewer. 

Created images are shareable using URLs, including scene-setting parameters. The DB has multiple links and is expandable by community activity.


---

anatomical [ˌænəˈtɒmɪk(ə)l] adj. 解剖的；解剖学的；结构上的






