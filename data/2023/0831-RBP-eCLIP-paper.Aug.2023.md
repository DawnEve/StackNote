# CLIP-seq 和 eCLIP了解学习笔记

CLIP-seq（Crosslinking immunoprecipitation-high-throughput-sequencing，交联免疫共沉淀）是一种分子生物学的方法，其通过结合UV交联和免疫共沉淀的方法来分析蛋白与RNA相互作用的结合位点。

> https://zhuanlan.zhihu.com/p/138255575



## Workflow

- 首先使用UV在体内交联RNA与蛋白复合物，UV曝光后会在相近的蛋白以及核酸之间形成共价键。
- 随后裂解交联的细胞，片段化RNA，免疫沉淀分离目标蛋白。
- 接下来为逆转录做准备，在RNA的3'末端添加RNA接头并标记RNA确保结合蛋白的RNA的信息被保留。
- 随后去除蛋白部分，使用凝胶电泳和膜转移后将RNA蛋白复合物与游离的RNA分离开，再使用蛋白酶K将蛋白去除掉。
	* 这一步会在交联部分会留下一些氨基酸，从而导致交联的核酸部分有cDNA的truncation，这一步在后续的iCLIP等方法中被利用来进一步提高方法的分辨率。
- 之后cDNA被重新合成用于后续高通量测序，通过生物信息学的方法可以分析具体的作用位点。




## 历史和应用

- CLIP最原始是用来研究小鼠脑内神经特异的RNA结合蛋白和剪切因子间的相互作用的，这个方法发现RNA结合位点有剪切因子Nora结合的motif。对cDNA文库进行测序发现许多位点与可变外显子位置相近，其中许多被发现时Nova1/2剪切需要的pattern。
- 2008年，CLIP技术结合高通量测序创造了基因组层面的图谱，之后该技术得到了更多应用，大量的RNA结合蛋白的结合位点得以被发现。其中AArgonaute的CLIP分析发现了小鼠脑内、胚胎干细胞以及培养的组织细胞中的microRNA靶点。
- CLIP技术的一个改良是miCLIP或者m6A-CLIP，这个方法通过突变酶或者特异修饰的抗体实现了甲基化RNA位点的检测。
- 2010年，iCLIP建立了新的生成cDNA的方式，能够对截断的cDNA进行扩增，从而通过分析截断的cDNA的起始位点对RNA-蛋白的相互作用位点进行检测。iCLIP之后被进一步改良，如`eCLIP`、irCLIP。在此之外还有PAR-CLIP



## 方法

- HITS-CLIP/CLIP-SEQ。依赖于UV交联诱导的突变区域来定位蛋白RNA结合位点，通过CIMS（交联诱导的突变位点）分析交联位点。
	* 紫外交联：紫外暴露后，直接临近的蛋白和RNA形成共价键。依赖突变位点识别交联区域。
- PAR-CLIP。依赖于活细胞将光反应性核糖核苷类似物（4-thiouridine(4-SU，T->C),6-thioguanosine(6-SG,G->A)掺杂到新生的RNA转录物中
- iCLIP
- eCLIP，2016。由于之前的CLIP方法很依赖于技术，而且产生了低复杂度的文库，有很高的实验失败率。eCLIP这个方法可以通过在`维持单核苷酸结合分辨率时减少不必要的PCR重复（约60%）`，并通过`大小匹配的input controls（size-matched input）提高检测的特异性`。



> 小结：简单介绍了CLIP-seq的原理和技术方法，目前RNA-蛋白结合技术发展很快，前几年也有很多综述










# 有帮助的综述


## (综述) RNA-蛋白相互作用的一些方法 (Nature Methods, 2019)
> Methods to study RNA–protein interactions 
> Nature Methods
> https://www.nature.com/articles/s41592-019-0330-1
> 付费

非编码RNA与RBP结合起作用。
Noncoding RNA sequences, including long noncoding RNAs, small nucleolar RNAs, and untranslated mRNA regions, accomplish many of their diverse functions through direct interactions with RNA-binding proteins (RBPs). 

最近新发现的很多RBP，缺乏已知的RNA结合结构域，强调了 RBP 复杂性和多样性。
Recent efforts have identified hundreds of new RBPs that lack known RNA-binding domains, thus underscoring the complexity and diversity of RNA–protein complexes. 

- underscore [ˌʌndəˈskɔː(r)] v. 强调；在……的下面划线

最近的进展拓展了RNA-蛋白互作的研究方法，主要分两类：
Recent progress has expanded the number of methods for studying RNA–protein interactions in two general categories: 

* approaches that characterize proteins bound to an RNA of interest (RNA-centric), 
* and those that examine RNAs bound to a protein of interest (protein-centric). 


Each method has unique strengths and limitations, which makes it important to select optimal approaches for the biological question being addressed. 

综述 RNA-蛋白互作，主要是各自的适用情况。
Here we review methods for the study of RNA–protein interactions, with a focus on their suitability for specific applications.





## (综述) CLIP以及相关变种技术的区别以及应用 (Nature Reviews Methods Primers, 2021)
> CLIP and complementary methods
> Nature Reviews Methods Primers
https://www.nature.com/articles/s43586-021-00018-1

RNA分子在转录过程中开始组装成核糖核蛋白(RNP)复合物。
RNA molecules start assembling into ribonucleoprotein (RNP) complexes during transcription. 

动态RNP组装主要由RNA上的顺式作用元件指导，协调RNA参与的所有过程。
Dynamic RNP assembly, largely directed by cis-acting elements on the RNA, coordinates all processes in which the RNA is involved. 


为识别被RBP结合的内源RNA的部位，CLIP 及互补的，基于空间距离的方法被开发出来
To identify the sites bound by a specific RNA-binding protein on endogenous RNAs, `cross-linking and immunoprecipitation (CLIP)` and complementary, proximity-based methods have been developed. 

- endogenous [enˈdɒdʒənəs] adj. [生物] 内生的；内因性的
- complementary [ˌkɒmplɪˈment(ə)ri] adj. 相互补充的，相辅相成的；互补色的；（基因序列、核苷酸等）互补的；
- proximity [prɒkˈsɪməti] n. （时间、空间、关系的）靠近，亲近


本文，讨论蛋白为中心的方法及变体，优化策略和质量评估；及RNA为中心的方法，识别一个具体RNA的蛋白伴侣。
In this Primer, we discuss the main variants of these protein-centric methods and the strategies for their optimization and quality assessment, as well as RNA-centric methods that identify the protein partners of a specific RNA. 

我们概述 CLIP 数据分析的主要计算挑战，则么处理多种来源的背景，怎么识别功能相关的结合区域。
We summarize the `main challenges of computational CLIP data analysis`, how to `handle various sources of background` and how to `identify functionally relevant binding regions`. 

勾画了CLIP的多种应用，及分享数据的可用数据库。
We outline the various applications of CLIP and available databases for data sharing. 

讨论前景： CLIP 整合其他互补方法，更全面理解 RNP 组装和重塑，阐明具体细胞类型和亚细胞区室中RNP的时空动态，以及理解 RNP 缺陷怎么引起疾病。
We discuss the prospect of integrating data obtained by CLIP with complementary methods to gain a comprehensive view of RNP assembly and remodelling, unravel the spatial and temporal dynamics of RNPs in specific cell types and subcellular compartments and understand how defects in RNPs can lead to disease. 

最后，展示领域内的开发问题，给出进一步开发和应用的方向。
Finally, we present open questions in the field and give directions for further development and applications.

- unravel [ʌnˈræv(ə)l] v. （使）解开，（使）松开；弄清，阐明；崩溃，失败
- defect [ˈdiːfekt] n. 缺点，缺陷，毛病






## RNA结合蛋白和核糖体的单细胞靶标的强大发现 (nature methods, 2021)
> Robust single-cell discovery of RNA targets of RNA-binding proteins and ribosomes
> https://www.nature.com/articles/s41592-021-01128-0
> 收费

单细胞这两年发展也很快，Gene Yeo实验室在发明eCLIP后创造了很多数据并且发表在了ENCODE上，前两年也有单细胞的研究，我个人认为eCLIP还是很耗时间的，我们做下来大概要4-5天的时间，新的方法目前还没有尝试，但是open-mind for it


RBP 是基因表达、RAN处理的十分关键的调控子，这对基因功能是必须的。
RNA-binding proteins (RBPs) are critical regulators of gene expression and RNA processing that are required for gene function. 

单细胞中RBP 调控的动态是未知的。
Yet the dynamics of RBP regulation in single cells is unknown. 

为此，开发了 STAMP (通过 APOBEC 介导的谱分析测量目标)，能高效检测 RBP-RNA 互作。
To address this gap in understanding, we developed STAMP (Surveying Targets by APOBEC-Mediated Profiling), which efficiently detects RBP–RNA interactions. 


STAMP 不依赖紫外交联，或 免疫共沉淀。
STAMP does not rely on ultraviolet cross-linking or immunoprecipitation and, when coupled with single-cell capture, can identify RBP-specific and cell-type–specific RNA–protein interactions for multiple RBPs and cell types in single, pooled experiments. 

将STAMP与长读序列配对，以同种异构体特异性的方式产生RBP目标位点。
Pairing STAMP with long-read sequencing yields RBP target sites in an isoform-specific manner. 

Finally, Ribo-STAMP leverages small ribosomal subunits to measure transcriptome-wide ribosome association in single cells. 

STAMP enables the study of RBP–RNA interactomes and translational landscapes with unprecedented cellular resolution.













