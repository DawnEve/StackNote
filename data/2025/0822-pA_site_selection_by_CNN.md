polyA Deep learning model lists


> 最新的在最上。


# scTail: 使用 reads 1 检测polyA使用率(Genome Biol. 2025)
> scTail: precise polyadenylation site detection and its alternative usage analysis from reads 1 preserved 3' scRNA-seq data
> https://pubmed.ncbi.nlm.nih.gov/40775355/

The first-strand reads (often reads 1) of three-prime single-cell RNA-seq (3' scRNA-seq) can contain informative cDNA for analysis of polyadenylation sites (PAS), but are often overlooked or trimmed. 

使用R1识别pA，使用R2定量。
Here, we describe a computational method, scTail, to identify PAS using first-strand reads and quantify its expression leveraging second-strand reads, consequently enabling detection of alternative PAS usage.


Compared with other methods, scTail detects PAS more precisely and retains high sensitivity. Furthermore, we demonstrated that combining `scTail` and `BRIE2` can discover differential alternative PAS usage in various biological processes including cancers and time-series development, giving critical insight into PAS regulation.



## CNN 结构

![fig](data/2025/images/0822_CNN_scTail.png)

- Fig. 2 Developing scTail to identify PAS from 3′ tag-based scRNA-seq.
- C Flowchart of deep neural network embedded into scTail to filter low-quality putative PASs from sequence



## Code

- https://github.com/StatBiomed/scTail

- https://github.com/saketkc/gencode_regions


## Method

**Analysis of genomic feature of PAS**

The genomic interval of 5′ UTR, 3′ UTR, intron, and exon were obtained by inputting
the hg38 GTF file to gencode_regions package (https:// github. com/ saket kc/ genco de_
regio ns). Then, PAS detected by scTail in K562 were assigned to genomic features such
as 5′ UTR, 3′ UTR, and so on.


**BRIE2 (v 2.2.2) [43]**
> 43. Huang Y, Sanguinetti G. BRIE2: computational identification of splicing phenotypes from single-cell transcriptomic experiments. Genome Biol. 2021;22(1):251.








# scUTRquant: 发现 不依赖基因表达的3UTR变化(NC, 2024)
> Quantifying 3′UTR length from scRNA-seq data reveals changes independent of gene expression
> https://pubmed.ncbi.nlm.nih.gov/38744866/
> https://www.nature.com/articles/s41467-024-48254-9
> Tri-Institutional Training Program in Computational Biology and Medicine, Weill Cornell Graduate College, New York, NY, 10021, USA.

Although more than half of all genes generate transcripts that differ in 3'UTR length, current analysis pipelines only quantify the amount but not the length of mRNA transcripts. 

人鼠200个细胞类型中的pA，注释到 GENCODE 上大约40%。
3'UTR length is determined by 3' end cleavage sites (CS). We map CS in more than 200 primary human and mouse cell types and increase CS annotations relative to the GENCODE database by 40%. 

大约一半pA只在部分细胞类型中，表明大多数基因只有1个或2个主3’结尾。
Approximately half of all CS are used in few cell types, revealing that most genes only have one or two major 3' ends. 

流程：scUTRquant
We incorporate the CS annotations into a computational pipeline, called scUTRquant, for rapid, accurate, and simultaneous quantification of gene and 3'UTR isoform expression from single-cell RNA sequencing (scRNA-seq) data. 

474个细胞类型，2134个干扰，发现细胞类型之间的很多3UTR长度变化 广泛存在，受到基因表达调控，但是影响的多是不同的基因。
When applying scUTRquant to data from 474 cell types and 2134 perturbations, we discover extensive 3'UTR length changes across cell types that are as widespread and coordinately regulated as gene expression changes but affect mostly different genes.
当将scUTRquant应用于来自474种细胞类型和2134种扰动的数据时，我们发现细胞类型之间广泛的3'UTR长度变化与基因表达变化一样广泛和协调调节，但主要影响不同的基因。

mRNA丰度和长度是大致独立的事件，它们共同决定了蛋白质合成的数量和空间组织
Our data indicate that mRNA abundance and mRNA length are two largely independent axes of gene regulation that together determine the amount and spatial organization of protein synthesis.









# PolyaID: identify polyA sites at nucleotide resolution(Nat Commun. 2023)
> Stroup EK, Ji Z. Deep learning of human polyadenylation sites at nucleotide resolution reveals molecular determinants of site usage and relevance in disease. Nat Commun. 2023;14(1):7378.
> https://pubmed.ncbi.nlm.nih.gov/37968271/
> Department of Pharmacology, Feinberg School of Medicine, Northwestern University, Chicago, IL, 60611, USA.

## CNN 结构: LSTM 及核心代码

- https://github.com/zhejilab/PolyaModelsHuman

![fig](data/2025/images/0822_CNN_PolyaID.png)

- Fig. 1: Developing deep learning models to identify polyA sites at nucleotide-level resolution and calculate polyA site strength.
- a Overview of data analysis steps(略). b The PolyaID model architecture(见上图). g The PolyaStrength model architecture(略).
- 训练两个模型：PolyaID 识别polyA位置； PolyaStrength 计算polyA位置的序列强度。



Supposing the supporting read number for site i is ni, its relative usage ui and the log-odds transformed value oi were calculated as (Eq. 4):

* Ui=ni/(n_max_site + n_second_max_site)
* Oi=log2(ui / (1-ui))

**Model architecture and training.** The polyA sequences (240 nt) were converted into a (4 × 240)matrix using one-hot encoding, the same as for the PolyaIDmodel. For the Sequence-Modeling unit, we also used a convolutional layer followed with a bidirectional LSTMlayer, but their parameters are different from those of PolyaID and are described in (Supplementary Data 3). The output layer predicts the log-odds transformed usage levels. We used the mean squared error implemented in TensorFlow2 as the loss function for model training (Eq. 5):

* LOSS_usage=1/n * Sigma累加(i=1, n, (ui - vi)**2  )

where ui and vi are predicted and observed usage level for the polyA site i. Data was fed into themodel during training in a batch size of 100, with a learning rate of 0.001, and optimized using the Adam optimizer with Nesterov momentum.

53,105 terminal exonic polyA sites were used to build the model. And we required that the selected genes should contain ≥2 polyA sites in terminal exons. The sites were randomly separated into 80% training, 10% validation, and 10% holdout test splits. Training was monitored using the loss function and the accuracy of predictions. The model was trained for 9 epochs, after which it attained the minimum loss on the validation set. Severalmodelswere trained in replicate, and a representative model was chosen.






```
# https://github.com/zhejilab/PolyaModelsHuman/blob/main/polyA_prediction_pipeline.ipynb

## CONSTRUCT MODELS AND INPUT DATA

def make_polyaid_model(model_path):
	'''Builds the PolyaID model and loads the trained weights.
	'''

	from contextlib import redirect_stderr

	with redirect_stderr(open(os.devnull, "w")):

		from keras import Input
		from keras.models import Model
		from keras.layers import Dense, Dropout, Flatten, Bidirectional
		from keras.layers import Conv1D, MaxPooling1D, LSTM
		from keras.activations import sigmoid
		from keras.layers import ReLU
		from keras import backend as K

	import tensorflow as tf
	tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)
	
	model_input = Input(shape = input_shape)
	
	x = ReLU()(Conv1D(512, 8, padding = 'valid', strides = 1, name = 'bin_conv')(model_input))
	x = MaxPooling1D(pool_size = 3, strides = 3, name = 'bin_pool')(x)
	x = Dropout(polyaid_bin_dropout)(x)
	x = Bidirectional(LSTM(units = 128, return_sequences = True, name = 'bin_lstm'))(x)
	x = Dropout(polyaid_bin_dropout)(x)
	x = Flatten(name = 'bin_flatten')(x)
		
	bin_x = ReLU()(Dense(256, kernel_initializer = 'glorot_uniform', name = 'bin_dense1')(x))
	bin_x = Dropout(polyaid_bin_dropout)(bin_x)
	bin_x = ReLU()(Dense(256, kernel_initializer = 'glorot_uniform', name = 'bin_dense2')(bin_x))
	bin_x = Dropout(polyaid_bin_dropout)(bin_x)
	bin_x = ReLU()(Dense(128, kernel_initializer = 'glorot_uniform', name = 'bin_dense3')(bin_x))
	bin_x = Dropout(polyaid_bin_dropout)(bin_x)
	bin_x = ReLU()(Dense(64, name = 'bin_dense4')(bin_x))
	bin_x = Dense(polyaid_bin_len, activation = 'sigmoid', name = 'bin_predictions')(bin_x)
		
	prob_x = ReLU()(Dense(256, kernel_initializer = 'glorot_uniform', name = 'prob_dense1')(x))
	prob_x = Dropout(polyaid_vec_dropout)(prob_x)
	prob_x = ReLU()(Dense(256, kernel_initializer = 'glorot_uniform', name = 'prob_dense2')(prob_x))
	prob_x = Dropout(polyaid_vec_dropout)(prob_x)
	prob_x = ReLU()(Dense(128, kernel_initializer = 'glorot_uniform', name = 'prob_dense3')(prob_x))
	prob_x = Dropout(polyaid_vec_dropout)(prob_x)
	prob_x = ReLU()(Dense(64, name = 'prob_dense4')(prob_x))
	prob_x = Dense(polyaid_vec_len, activation = 'softmax', kernel_initializer = 'zeros', name = 'prob_predictions')(prob_x)
	
	model = Model(inputs = [model_input], outputs = [bin_x, prob_x], name = 'model')
	model.load_weights(model_path)
		
	return model



def make_polyastrength_model(model_path):
	'''Builds the PolyaStrength model and loads the trained weights.
	'''

	from contextlib import redirect_stderr

	with redirect_stderr(open(os.devnull, "w")):

		from keras import Input
		from keras.models import Model
		from keras.layers import Dense, Dropout, Flatten, Bidirectional
		from keras.layers import Conv1D, MaxPooling1D, LSTM
		from keras.layers import ReLU	
		from keras import backend as K

	import tensorflow as tf
	tf.compat.v1.logging.set_verbosity(tf.compat.v1.logging.ERROR)

	model_input = Input(shape = input_shape)

	x = ReLU()(Conv1D(64, 8, padding = 'valid', strides = 1, name = 'seq_conv')(model_input))
	x = MaxPooling1D(pool_size = 3, strides = 3, name = 'bin_pool')(x)
	x = Dropout(polyastrength_bin_dropout)(x)
	x = Bidirectional(LSTM(units = 16, return_sequences = True, name = 'bin_lstm'))(x)
	x = Dropout(polyastrength_bin_dropout)(x)
	x = Flatten(name = 'bin_flatten')(x)
	
	bin_x = ReLU()(Dense(128, kernel_initializer = 'glorot_uniform', name = 'bin_dense1')(x))
	bin_x = Dropout(polyastrength_bin_dropout)(bin_x)
	bin_x = ReLU()(Dense(64, name = 'bin_dense2')(bin_x))
	bin_x = Dense(polyastrength_bin_len, activation = 'linear', name = 'bin_predictions')(bin_x)
	
	model = Model(inputs = model_input, outputs = bin_x, name = 'model')
	model.load_weights(model_path)
	
	return model
```


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





