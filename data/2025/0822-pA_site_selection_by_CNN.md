polyA Deep learning model lists




# PolyaID: identify polyA sites at nucleotide resolution(Nat Commun. 2023)
> Stroup EK, Ji Z. Deep learning of human polyadenylation sites at nucleotide resolution reveals molecular determinants of site usage and relevance in disease. Nat Commun. 2023;14(1):7378.
> https://pubmed.ncbi.nlm.nih.gov/37968271/
> Department of Pharmacology, Feinberg School of Medicine, Northwestern University, Chicago, IL, 60611, USA.

## CNN 结构: LSTM

![fig](data/2025/images/0822_CNN_PolyaID.png)

- Fig. 1: Developing deep learning models to identify polyA sites at nucleotide-level resolution and calculate polyA site strength.
- a Overview of data analysis steps(略). b The PolyaID model architecture(见上图). g The PolyaStrength model architecture(略).
- 训练两个模型：PolyaID 识别polyA位置； PolyaStrength 计算polyA位置的序列强度。


## 预测：next polyA model must be transformer, 就看谁的手速快了。






# APARENT2: 揭示 突变对人的 APA 的影响(Genome Biol. 2022)
> Linder J, Koplik SE, Kundaje A, Seelig G. Deciphering the impact of genetic variation on human polyadenylation using APARENT2. Genome Biol. 2022;23(1):232.
> https://pubmed.ncbi.nlm.nih.gov/36335397/
> Department of Genetics, Stanford University, Stanford, USA. jlinder2@stanford.edu.

残差神经网络 APARENT2, 从DNA序列推断APA效果更好。
We introduce a residual neural network model, APARENT2, that can infer 3'-cleavage and polyadenylation from DNA sequence more accurately than any previous model.

展示性能：reporter data, 及人 GTEx的 3aQTL。
We demonstrate APARENT2's performance on several variant datasets, including functional reporter data and human 3' aQTLs from GTEx.

微调模型，揭示组织特异性变体的效应。
We fine-tune APARENT2 on human tissue-resolved transcriptomic data to elucidate tissue-specific variant effects.

结合模型和 mRNA 稳定性数据，我们扩展了 aQTL 效应预测范围至 整个3UTR区域。
By combining APARENT2 with models of mRNA stability, we extend aQTL effect size predictions to the entire 3' untranslated region.


Finally, we perform in silico saturation mutagenesis of all human polyadenylation signals and compare the predicted effects of [Formula: see text] million variants against gnomAD. 

While loss-of-function variants were generally selected against, we also find specific clinical conditions linked to gain-of-function mutations. 

孤独症。
For example, we detect an association between gain-of-function mutations in the 3'-end and autism spectrum disorder. 

多个细胞系，包括 小神经胶质 来源的细胞。
To experimentally validate APARENT2's predictions, we assayed clinically relevant variants in multiple cell lines, including microglia-derived cells.




# DeeReCT-APA 使用DL预测APA(Genomics Proteomics Bioinformatics. 2022)
> DeeReCT-APA: Prediction of Alternative Polyadenylation Site Usage Through Deep Learning
> https://pubmed.ncbi.nlm.nih.gov/33662629/
> King Abdullah University of Science and Technology (KAUST), Computational Bioscience Research Center (CBRC), Computer, Electrical and Mathematical Sciences and Engineering (CEMSE) Division, Thuwal 23955-6900, Saudi Arabia.


> Fig2 CNN 结构: DNA序列，one-hot编码，卷积(n层)，拉直，全连接层，输出?





# SCAPTURE: 单细胞数据获取 APA(Genome Biol. 2021)

> SCAPTURE: a deep learning-embedded pipeline that captures polyadenylation information from 3' tag-based RNA-seq of single cells
> CAS Key Laboratory of Computational Biology, Shanghai Institute of Nutrition and Health, University of Chinese Academy of Sciences, Chinese Academy of Sciences, Shanghai, 200031, China.

识别、评价、定量pA位点。
Single-cell RNA-seq (scRNA-seq) profiles gene expression with high resolution. Here, we develop a stepwise computational method-called SCAPTURE to identify, evaluate, and quantify cleavage and polyadenylation sites (PASs) from 3' tag-based scRNA-seq. 

新发现polyA位点
SCAPTURE detects PASs de novo in single cells with high sensitivity and accuracy, enabling detection of previously unannotated PASs. 

定量的pA转录本提供了超越基因表达的优化的细胞亚型信息
Quantified alternative PAS transcripts refine cell identity analysis beyond gene expression, enriching information extracted from scRNA-seq data. 

实例：感染vs健康病人PBMC的pA使用改变。
Using SCAPTURE, we show changes of PAS usage in PBMCs from infected versus healthy individuals at single-cell resolution.


## CNN 网络结构: BiLSTM

![fig](data/2025/images/0822_CNN_SCAPTURE.png)

- Fig2 Constructing the embedded DeepPASS model for position-insensitive prediction of PASs.
- b Schematic of DeepPASS construction and evaluation. 
	* Left, data processing strategy and model architecture. 
	* Middle, a sequence shifting strategy around stringent PASs was applied to construct positive training set for establishing DeepPASS model. 
	* Right, the generally used strategy with fixed sequences around stringent PASs for DeepPAS-fixed model. See “Methods” section for details.




# APARENT: A Deep Neural Network for Predicting and Engineering Alternative Polyadenylation(Cell, 2019)
> Volume 178, Issue 1p91-106.e23June 27, 2019Open Archive
> A Deep Neural Network for Predicting and Engineering Alternative Polyadenylation
> Department of Electrical & Computer Engineering, University of Washington, Seattle, WA 98195, USA.
> https://www.cell.com/cell/fulltext/S0092-8674(19)30498-2
> https://pubmed.ncbi.nlm.nih.gov/31178116/

- https://github.com/johli/aparent

APA 在人细胞中是转录多样性的主要驱动力量。
Alternative polyadenylation (APA) is a major driver of transcriptome diversity in human cells. 

这里，仅使用DNA训练模型，带有reporter的数据。
Here, we use deep learning to predict APA from DNA sequence alone. We trained our model (APARENT, APA REgression NeT) on isoform expression data from over 3 million APA reporters. 

预测很准确：推测APA和3UTR。
APARENT's predictions are highly accurate when tasked with inferring APA in synthetic and human 3'UTRs. 

每层可视化揭示：APARENT识别招募APA regulator 的motif，发现之前未知的3’端处理，整合这些特点为综合、可解释、顺式调控密码。
Visualizing features learned across all network layers reveals that APARENT recognizes sequence motifs known to recruit APA regulators, discovers previously unknown sequence determinants of 3' end processing, and integrates these features into a comprehensive, interpretable, cis-regulatory code. 

我们应用APARENT去改造polyA信号，并验证。
We apply APARENT to forward engineer functional polyadenylation signals with precisely defined cleavage position and isoform usage and validate predictions experimentally. 

最后，使用APARENT去定量SNP对APA的影响。
Finally, we use APARENT to quantify the impact of genetic variants on APA. 

我们在很多疾病环境中，检测到病变变体。
Our approach detects pathogenic variants in a wide range of disease contexts, expanding our understanding of the genetic origins of disease.


## CNN 结构

![fig](data/2025/images/0822_CNN_APARENT.png)

- **Figure 2 Model Architecture, Performance, and Layer-by-Layer Feature Analysis**
- (A) APARENT takes a 1-Hot-coded PAS sequence as input to predict % proximal isoform and % cleavage at each position.

- ME:从下往上，一个DNA序列，编码为4个01字符串，卷积层1，卷积层2，全连接层，然后输出2个判断(哪里切开，两种转录本的比例)








# DeepPASTA：依靠DNA序列和RNA二级结构，预测 polyA 位点 (Bioinformatics. 2019)
> DeepPASTA: deep neural network based polyadenylation site analysis
> Department of Computer Science and Engineering, University of California, Riverside, CA 92521, USA.
> https://pubmed.ncbi.nlm.nih.gov/31081512/

- https://github.com/arefeen/DeepPASTA

As alternative polyA sites are common in mammalian genes, several machine learning tools have been published for predicting polyA sites from sequence data.

使用有限的序列信息，或者老旧的算法，用于预测polyA。
These tools either consider limited sequence features or use relatively old algorithms for polyA site prediction. 

还没有考虑RNA二级结构。
Moreover, none of the previous tools consider RNA secondary structures as a feature to predict polyA sites.

DeepPASTA：依靠DNA序列和RNA二级结构，预测 polyA 位点。
Results: In this paper, we propose a new deep learning model, called DeepPASTA, for predicting polyA sites from both sequence and RNA secondary structure data. 

The model is then extended to predict tissue-specific polyA sites. 

可预测组织中最常用的polyA位点。
Moreover, the tool can predict the most dominant (i.e. frequently used) polyA site of a gene in a specific tissue and relative dominance when two polyA sites of the same gene are given. 

Our extensive experiments demonstrate that DeepPASTA signisficantly outperforms the existing tools for polyA site prediction and tissue-specific relative and absolute dominant polyA site prediction.





