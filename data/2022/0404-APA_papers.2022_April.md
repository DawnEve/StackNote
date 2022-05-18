> APA 文献摘要阅读


# Viremia and ART 抑制下的 环状RNA谱，可以预测 HIV-1 Viremic 病人特有的 竞争性circRNA-miRNA-mRNA 网络
> Circular RNA Profiles in Viremia and ART Suppression Predict Competing circRNA-miRNA-mRNA Networks Exclusive to HIV-1 Viremic Patients
> Viruses. 2022 Mar 25;14(4):683. doi: 10.3390/v14040683.
> 1 Department of Veterinary and Biomedical Sciences, University of Minnesota, Saint Paul, MN 55108, USA.
> PMID: 35458413
> Keywords: RNA silencing suppressor; bioinformatics; circular RNAs; competing endogenous RNA networks; microRNA response elements; post-transcriptional regulation.


Abstract 摘要的模板: 

BG1: HIV 这个传染病，威胁全世界。
Since the onset of the HIV-1/AIDS epidemic in 1981, 75 million people have been infected with the virus, and the disease remains a public health crisis worldwide. 

BG2: 环状RNA来自于外显子和内含子的反向剪接，选择性剪接的一种。
Circular RNAs (circRNAs) are derived from excised exons and introns during backsplicing, a form of alternative splicing. 

这种非常规剪切转录本与转录组的相关性的研究还未常规化。
The relevance of unconventional, non-capped, and non-poly(A) transcripts to transcriptomics studies remains to be routinely investigated. 


GAP: 还没有研究的: 宿主编码的 circRNA 和 病毒复制 之间的连接，在慢性进展的病人和抗病毒药物治疗过程中。
Knowledge gaps to be filled are the interface between host-encoded circRNAs and viral replication in chronically progressed patients and upon treatment with antiviral drugs. 


data: 实现了生信流程，使用公开的HIV-1阳性病人的血液RNA测序，之前是对比病毒血症及抗病毒治疗后的转录本变化。
We implemented a bioinformatic pipeline and repurpose publicly archived RNA sequence reads from the blood of 19 HIV-1-positive patients that previously compared transcriptomes during viremia and viremia suppression by antiretroviral therapy (ART). 


Now: 通过分析，抗病毒治疗后的 circRNA 变得不可检测了！
The in silico analysis identified viremic patients' circRNA that became undetectable after ART. 

这些 circRNA 起源于一部分宿主基因，富集在 HDAC生物途径。
The circRNAs originated from a subset of host genes enriched in the HDAC biological pathway. 

这些 circRNA和其 mRNA 共有一部分 miRNA 响应元件(MREs)，有些出现在 HIV-1 的mRNA中。
These circRNAs and parental mRNAs held in common a small collection of miRNA response elements (MREs), some of which were present in HIV-1 mRNAs. 

含有 MRE 的靶标 mRNA 富集在 RNA polymerase II 通路。
The function of the MRE-containing target mRNA enriched the RNA polymerase II GO pathway. 

为了可视化具体的 circRNA-miRNA-target mRNA，开发了交互式 Circos 工具，能把 复杂的竞争内源网络，这些相互作用来源于 病毒血症 vs 非病毒血症 患者的 7 个 circRNA
To visualize the interplay between individual circRNA-miRNA-target mRNA, important for HIV-1 and potentially other diseases, an Interactive Circos tool was developed to efficiently parse the intricately competing endogenous network of circRNA-miRNA-mRNA interactions originating from seven circRNA singled out in viremic versus non-viremic patients. 

展望:
联合下调的 circRNA 作为一种新的抗病毒靶向策略值得研究。
The combined downregulation of the identified circRNAs warrants investigation as a novel antiviral targeting strategy.

---
我的总结:   
* 2条背景: HIV, circRNA
* Gap;
* our data - assay- result;
* future;


---
* viremia [vaɪˈriːmɪə] n. （美）[医]病毒血症（等于 viraemia）
* interplay [ˈɪntəpleɪ] n. 相互影响，相互作用
* warrant [ˈwɒrənt] n. （法院授予警方采取行动的）令状，授权令；（思考、决定或做某事的）正当理由，依据；v. 使有必要，使正当；需要，值得；允诺，保证


这个句子后面的定语太乱了。
To visualize the interplay between individual circRNA-miRNA-target mRNA, (important for HIV-1 and potentially other diseases), an Interactive Circos tool was developed to parse the (intricately competing endogenous) network 
	of circRNA-miRNA-mRNA interactions 
		originating from seven circRNA 
			singled out in viremic versus non-viremic patients. 









# (结论可借鉴)植物致病性真菌的 选择性剪接和APA(PacBio)
> Landscape and regulation of alternative splicing and alternative polyadenylation in a plant pathogenic fungus
> New Phytol. 2022 Apr 22. doi: 10.1111/nph.18164. Online ahead of print.
> PMID: 35451076
> State Key Laboratory of Crop Stress Biology for Arid Areas, College of Plant Protection, Northwest A&F University, Yangling, Shaanxi, 712100, China.

长读长测序 + 链特异性 RNA-seq，多组织
// Here we combine PacBio Isoform-Sequencing and strand-specific RNA-Seq of multiple tissues and mutant characterization to reveal the landscape and regulation of AS and APA in Fusarium graminearum. 


酵母和动物是远端的信号强，而这个真菌是近端的APA变体表达量高。
//Unlike in yeasts and animals, distal APA sites have strong signals, but proximal APA isoforms are highly expressed in F. graminearum.

3端处理因子，促进近端APA位点的使用和内含子剪接。
//The 3'-end processing factors FgRNA15, FgHRP1, and FgFIP1 play roles in promoting proximal APA site usage and intron splicing. 

老的 vs 静息态组织， 
	* 包含的内含子增加，远端APA位点使用增加，
	* spliceosomal and 3'-end processing factors 下调。
表明在真菌中， 内含子比例上升和3UTR延长是调控 aging 的一个新机制。
//A genome-wide increase in intron inclusion and distal APA site usage and downregulation of the spliceosomal and 3'-end processing factors were observed in older and quiescent tissues, indicating intron inclusion and 3'-UTR lengthening as novel mechanisms in regulating aging and dormancy in fungi. 

总结: 本文为理解真菌的AS和APA的复杂性提供提供了新视野。
This study provides new insights into the complexity and regulation of AS and APA in filamentous fungi.










# (综述)通过 ELAV/Hu proteins 调控 神经 RNA 谱
> Regulation of neuronal RNA signatures by ELAV/Hu proteins
> Wiley Interdiscip Rev RNA. 2022 Apr 15;e1733. doi: 10.1002/wrna.1733. Online ahead of print.
>  Max-Planck-Institute of Immunobiology and Epigenetics, Freiburg, Germany.
> PMID: 35429136

BG1: RNA结合蛋白很普遍，能调控共表达和转录后水平。
The RNA-binding proteins encoded by the highly conserved elav/Hu gene family, found in all metazoans, regulate the expression of a wide range of genes, at both the co-transcriptional and posttranscriptional level. 

BG2: 神经系统特有的 ELAV/Hu 蛋白对神经分化是必要的，其突变与人神经发育与神经再生疾病相关。
Nervous-system-specific ELAV/Hu proteins are prominent for their essential role in neuron differentiation, and mutations have been associated with human neurodevelopmental and neurodegenerative diseases. 

BG3: 果蝇ELAV，通过促进几百个基因的AS和APA，介导神经RNA谱。
Drosophila ELAV, the founding member of the protein family, mediates the synthesis of neuronal RNA signatures by promoting alternative splicing and alternative polyadenylation of hundreds of genes.

BG4: 最近识别 ELAV 直接靶向RNA，解释了蛋白质在塑造神经转录组方面的的核心作用，强调了转录谱对于神经维持和器官存活的重要性。
The recent identification of ELAV's direct RNA targets revealed the protein's central role in shaping the neuronal transcriptome, and highlighted the importance of neuronal transcript signatures for neuron maintenance and organism survival. 

动物已经进化了多种细胞机制，保证 ELAV/Hu 功能的稳健性。
Animals have evolved multiple cellular mechanisms to ensure robustness of ELAV/Hu function. 

果蝇中，elav 用一种3UTR自动调控的方式保持其蛋白质水平的稳定性。
In Drosophila, elav autoregulates in a 3'UTR-dependent manner to maintain optimal protein levels. 

ELAV 的完全缺失，会导致 FNE 的激活与核定位，这个过程被叫做 EXon-Activated functional Rescue (EXAR)
A complete absence of ELAV causes the activation and nuclear localization of the normally cytoplasmic paralogue FNE, in a process termed EXon-Activated functional Rescue (EXAR). 

其他物种，包括哺乳动物，使用一个不同的策略，比如蛋白冗余，维持 ELAV 蛋白的功能，确保神经转录组的身份。
Other species, including mammals, seem to utilize different strategies, such as protein redundancy, to maintain ELAV protein function and effectively safeguard the identity of the neuronal transcriptome. 

本文分类: 
This article is categorized under: RNA Processing > 3' End Processing RNA in Disease and Development > RNA in Development RNA Interactions with Proteins and Other Molecules > Protein-RNA Interactions: Functional Implications.


---
背诵句子: Animals have evolved multiple cellular mechanisms to ensure robustness of ELAV/Hu function.







# (典型套路文章) m6 诱导的 SIAH1抑制， 通过调控 CPSF1 促进 AG-V7 的可选择性剪切
> m 6 A-induced repression of SIAH1 facilitates alternative splicing of androgen receptor variant 7 by regulating CPSF1
> [2022IF=8.886]Mol Ther Nucleic Acids. 2022 Mar 15;28:219-230. doi: 10.1016/j.omtn.2022.03.008. eCollection 2022 Jun 14.
> 1 Department of Urology, Ren Ji Hospital, School of Medicine, Shanghai Jiao Tong University, Shanghai 200001, People's Republic of China.
> PMID: 35402071
> Keywords: AR; AR-v7; CPSF1; MT: RNA/DNA Editing; SIAH1; androgen receptor; prostate cancer.

BG1: 组成型转录因子 AR-v7，在 去雄抗性前列腺癌 的进展中有重要的作用。
Androgen receptor splice variant 7 (AR-v7), a constitutively active transcription factor, plays a crucial role in the progression of castration-resistant prostate cancer (CRPC). 

NOW: 这里，我们发现 受E3泛素连接酶 SIAH11 调控的 CPSF1(切合和腺苷特异复合物的最大亚基)，促进 AR-v7 表达。
Here, we found that the cleavage and polyadenylation specificity factor 1 (CPSF1) (the largest subunit of the multi-protein cleavage and polyadenylation specificity complex), regulated by the E3 ubiquitin ligases SIAH1, promoted AR-v7 expression. 

data: 芯片数据分析 + 临床样本分析 表明: SIAH1 在前列腺癌(PC)中下调，与PC进展负相关。
The data from microarray-based analysis and clinical specimen-based analysis showed that SIAH1 expression was decreased in PCa and was negatively correlated with aggressive phenotypes of PCa. 

在阉割情况下，SIAH1 抑制 PC 细胞生长和侵袭
* SIAH1 repressed PCa cell growth and invasion under castrate conditions. 

SIAH1 直接与 CPSF1 互作，促进CPSF1的泛素化和降解。
* SIAH1 directly interacted with CPSF1 and promoted ubiquitination and degradation of CPSF1. 

CPSF1 表达与 SIAH1 表达负相关，但是和 PC 进展正相关。
* CPSF1 expression was negatively correlated with SIAH1 expression, but positively with PCa progression. 

CPSF1 过表达会转换 AR 剪切模式，导致 AR-V7降解。机制是通过结合到 AR的外显子CE3的 AAUAAA 信号上。
* CPSF1 overexpression switched the AR splicing pattern and facilitated the generation of the oncogenic isoform (AR-v7) by binding to the AAUAAA polyadenylation signal contained in AR-cryptic exon CE3. 

功能上， SIAH1 作为PC发病的抑癌基因，抑制 CPSF1 介导的AR-v7 生成。
Functionally, SIAH1 acted as a tumor suppressor in PCa pathogenesis by repressing CPSF1-mediated AR-v7 generation. 

最后: 我们发现PC中 m6A 甲基化与 SIAH1 的抑制有关。
Finally, we demonstrated that m6A methylation was concerned with the repression of SIAH1 in PCa. 

总结: 我们的发现定义了 SIAH1/CPSF1/AR-v7 轴作为调控PC进展的调控因子，提供了治疗PC的靶标。
Our results define SIAH1/CPSF1/AR-v7 axis as a regulatory factor of PCa progression, providing a promising target for treating PCa.






# 植物APA: 拟南芥及其盐生亲缘植物mRNA选择性聚腺苷酸化调控耐盐反应的差异
> Divergence in the Regulation of the Salt Tolerant Response Between Arabidopsis thaliana and Its Halophytic Relative Eutrema salsugineum by mRNA Alternative Polyadenylation
> Front Plant Sci. 2022 Mar 25;13:866054. doi: 10.3389/fpls.2022.866054. eCollection 2022.
> 1 Key Laboratory of the Ministry of Education for Coastal and Wetland Ecosystems, College of the Environment and Ecology, Xiamen University, Xiamen, China.

标题断句: Divergence in the Regulation of the Salt Tolerant Response 
Between (Arabidopsis thaliana) and (Its Halophytic Relative Eutrema salsugineum) 
by mRNA Alternative Polyadenylation


只放目的和结论:
目的: 
Salt tolerance is an important mechanism by which plants can adapt to a saline environment. 

To understand the process of salt tolerance, we performed global analyses of mRNA alternative polyadenylation (APA), an important regulatory mechanism during eukaryotic gene expression, in Arabidopsis thaliana and its halophytic relative Eutrema salsugineum with regard to their responses to salt stress. 

Analyses showed that while APA occurs commonly in both Arabidopsis and Eutrema, Eutrema possesses fewer APA genes than Arabidopsis (47% vs. 54%).


结论: 
Our results suggest that adapted species exhibit more orderly response at the RNA maturation step under salt stress, while more salt-specific poly(A) sites were activated in Arabidopsis to cope with salinity conditions. 


Collectively, our findings not only highlight the importance of APA in the regulation of gene expression in response to salt stress, but also provide a new perspective on how salt-sensitive and salt-tolerant species perform differently under stress conditions through transcriptome diversity.


---
divergence [daɪˈvɜːdʒəns] n. 差异，不同；（气流或洋流的）分开处；（数）发散







# (综述)肿瘤中的 HnRNP C 调节异常分析
> An analysis of the role of HnRNP C dysregulation in cancers
> [2022IF=2.658]Biomark Res. 2022 Apr 8;10(1):19. doi: 10.1186/s40364-022-00366-4.
> The Hengyang Key Laboratory of Cellular Stress Biology, Institute of Cytology and Genetics, Hengyang Medical School, University of South China, Hengyang, 421001, Hunan, China.
> Keywords: Cancers; HnRNP C; Molecular interactions; RNA-binding protein.

核不均一核糖核蛋白 C 是 RNA结合蛋白 核不均一核糖核蛋白 家族的一部分。
Heterogeneous nuclear ribonucleoproteins C (HnRNP C) is part of the hnRNP family of RNA-binding proteins. 

hnRNP C 和肿瘤的关系有广泛的研究，在很多肿瘤中发现过 hnRNP C 的异常调控。
The relationship between hnRNP C and cancers has been extensively studied, and dysregulation of hnRNP C has been found in many cancers. 

根据现有公开数据， hnRNP C 可以促进 hnRNA 成熟为 mRNA，可以稳定 mRNA，控制他们的翻译。
According to existing public data, hnRNP C could promote the maturation of new heterogeneous nuclear RNAs (hnRNA s, also referred to as pre-mRNAs) into mRNAs and could stabilize mRNAs, controlling their translation. 

本文综述 hnRNA C在肿瘤中的调控和异常调控。
This paper reviews the regulation and dysregulation of hnRNP C in cancers. 

它与一些肿瘤基因及其他生物分子(miRNA, lncRNA, dsRNA)互作，甚至直接结合到上面。
It interacts with some cancer genes and other biological molecules, such as microRNAs (miRNAs), long noncoding RNAs (lncRNAs), and double-stranded RNAs (dsRNAs). 
Even directly binds to them. 

在不同肿瘤中，hnRNP C 的APA，m6A修饰等的生物学作用有差别。
The effects of hnRNP C on biological processes such as alternative cleavage and polyadenylation (APA) and N6-methyladenosine (m6A) modification differ among cancers. 

它的主要功能是调控肿瘤基因的稳定性和翻译水平， hnRNP C 可以作为一个诊断上的一个候选生物标记物。
Its main function is regulating stability and level of translation of cancer genes, and the hnRNP C is regarded as a candidate biomarker and might be valuable for prognosis evaluation.



---
heterogeneous [ˌhetərəˈdʒiːniəs] adj. 有很多种类组成的；（化）不均一的，多相的；（数）不纯一的，参差的





# [Front Genet]HXB/BXH 基因重组小鼠中，使用AS和APA评估 爱喝酒的基因结构
> Beyond Genes: Inclusion of Alternative Splicing and Alternative Polyadenylation to Assess the Genetic Architecture of Predisposition to Voluntary Alcohol Consumption in Brain of the HXB/BXH Recombinant Inbred Rat Panel
> Front Genet. 2022 Mar 15;13:821026. doi: 10.3389/fgene.2022.821026. eCollection 2022.
> Department of Pharmaceutical Sciences, University of Colorado Anschutz Medical Campus, Aurora, CO, United States.
> PMID: 35368676


Post transcriptional modifications of RNA are powerful mechanisms by which eukaryotes expand their genetic diversity. For instance, researchers estimate that most transcripts in humans undergo alternative splicing and alternative polyadenylation. These splicing events produce distinct RNA molecules, which in turn yield distinct protein isoforms and/or influence RNA stability, translation, nuclear export, and RNA/protein cellular localization. Due to their pervasiveness and impact, we hypothesized that alternative splicing and alternative polyadenylation in brain can contribute to a predisposition for voluntary alcohol consumption. 


小鼠模型 HXB/BXH 重组小鼠，脑，产生 RNA 和 剪切变体 和 APA 位点。
Using the HXB/BXH recombinant inbred rat panel (a subset of the Hybrid Rat Diversity Panel), we generated over one terabyte of brain RNA sequencing data (total RNA) and identified novel splice variants (via StringTie) and alternative polyadenylation sites (via aptardi) to determine the transcriptional landscape in the brains of these animals. 


建立分析流程，确定高质量转录本之后，我们定量了转录本，整合了基因型数据，来识别候选转录本的共表达网络与 嗜酒相关的候选转录本，用一种2个瓶颈选择模式。
After establishing an analysis pipeline to ascertain high quality transcripts, we quantitated transcripts and integrated genotype data to identify candidate transcript coexpression networks and individual candidate transcripts associated with predisposition to voluntary alcohol consumption in the two-bottle choice paradigm. 


For genes that were previously associated with this trait (e.g., Lrap, Ift81, and P2rx4) (Saba et al., Febs. J., 282, 3556-3578, Saba et al., Genes. Brain. Behav., 20, e12698), we were able to distinguish between transcript variants to provide further information about the specific isoforms related to the trait. We also identified additional candidate transcripts associated with the trait of voluntary alcohol consumption (i.e., isoforms of Mapkapk5, Aldh1a7, and Map3k7). 

Consistent with our previous work, our results indicate that transcripts and networks related to inflammation and the immune system in brain can be linked to voluntary alcohol consumption. 

Overall, we have established a pipeline for including the quantitation of alternative splicing and alternative polyadenylation variants in the transcriptome in the analysis of the relationship between the transcriptome and complex traits.


---
predisposition [ˌpriːdɪspəˈzɪʃn] n. 倾向；素质；易染病体质









# (综述) RNA 结合蛋白与肿瘤转移 [Semin Cancer Biol,IF=15.7]
> RNA-binding proteins and cancer metastasis
> Semin Cancer Biol. 2022 Mar 23;S1044-579X(22)00073-6. doi: 10.1016/j.semcancer.2022.03.018. Online ahead of print.
> Soochow University Laboratory of Cancer Molecular Genetics, Suzhou Medical College of Soochow University, Suzhou, Jiangsu 215123, China; Department of Basic Medicine, Kangda College of Nanjing Medical University, Lianyungang 222000, China.


- RBPs influence diverse cancer-associated cellular phenotypes, such as proliferation, apoptosis, senescence, migration, invasion, and angiogenesis, contributing to the initiation and development of tumors, as well as clinical prognosis. 
- Metastasis is the leading cause of cancer-related recurrence and death. 
- Therefore, it is necessary to elucidate the molecular mechanisms behind tumor metastasis. 
- In fact, a growing body of published research has proved that RBPs play pivotal roles in cancer metastasis. 


In this review, we will summarize the recent advances for helping us understand the role of RBPs in tumor metastasis, and discuss dysfunctions and dysregulations of RBPs affecting metastasis-associated processes including epithelial-mesenchymal transition (EMT), migration, and invasion of cancer cells. 

Furthermore, we will discuss emerging RBP-based strategy for the treatment of cancer metastasis.

---
aptamer n. 适体；适配子







#  [植物] 全长转录本构建，稻属 [BMC Plant Biol, IF=4.2]
> Full-length transcriptome reconstruction reveals genetic differences in hybrids of Oryza sativa and Oryza punctata with different ploidy and genome compositions
> BMC Plant Biol. 2022 Mar 21;22(1):131. doi: 10.1186/s12870-022-03502-2.
> School of Life Sciences, Hubei University, Wuhan, 430062, People's Republic of China.

Conclusions: The results indicated that alternative polyadenylation (APA) and AS events contributed to the complexity and superiority of polyploids in the activity of translation regulators, nucleic acid binding transcription factor activities and the regulation of molecular function. 

Therefore, these APA and AS events in allopolyploid rice were found to play a role in regulation. 

Our study provides new germplasm for polyploid rice breeding and reveals complex regulatory mechanisms that may be related to heterosis and fertility.

---
ploidy [ˈplɔɪdi] n. [遗] 倍性；[遗] 倍数性
allopolyploid [ˌæləˈpɒlɪˌplɔɪd] n. 异源多倍体；异源多倍染色体









# [植物] 全长转录本 - 马铃薯幼苗低温响应的分子机制 [BMC Plant Biol]
> Full-length transcriptome sequencing reveals the molecular mechanism of potato seedlings responding to low-temperature
> BMC Plant Biol. 2022 Mar 18;22(1):125. doi: 10.1186/s12870-022-03461-8.
> Anhui Academy of Agricultural Sciences, Hefei, 230031, Anhui, China. 527927758@qq.com.

We used public available genomic contigs to analyze the gene features, simple sequence repeat, and alternative splicing event of 24,658 non-redundant transcript sequences, predicted the coding sequence and identified the alternative polyadenylation.










# 非酒精脂肪肝中，APA导致代谢损伤 [NAR, IF=16.48]
> Dysregulated RNA polyadenylation contributes to metabolic impairment in non-alcoholic fatty liver disease
> Nucleic Acids Res. 2022 Mar 16;gkac165. doi: 10.1093/nar/gkac165. Online ahead of print.
> MRC London Institute of Medical Sciences, Du Cane Road, London W12 0NN, UK.

背景: mRNA前体处理很重要，能调控基因表达。
Pre-mRNA processing is an essential mechanism for the generation of mature mRNA and the regulation of gene expression in eukaryotic cells. 

未知: mRNA前处理与多种疾病有关，但是其代谢病理学未知。
While defects in pre-mRNA processing have been implicated in a number of diseases their involvement in metabolic pathologies is still unclear. 

本文：
Here, we show that both alternative splicing and alternative polyadenylation, two major steps in pre-mRNA processing, are significantly altered in non-alcoholic fatty liver disease (NAFLD). 

Moreover, we find that Serine and Arginine Rich Splicing Factor 10 (SRSF10) binding is enriched adjacent to consensus polyadenylation motifs and its expression is significantly decreased in NAFLD, suggesting a role mediating pre-mRNA dysregulation in this condition. 

Consistently, inactivation of SRSF10 in mouse and human hepatocytes in vitro, and in mouse liver in vivo, was found to dysregulate polyadenylation of key metabolic genes such as peroxisome proliferator-activated receptor alpha (PPARA) and exacerbate diet-induced metabolic dysfunction.

Collectively our work implicates dysregulated pre-mRNA polyadenylation in obesity-induced liver disease and uncovers a novel role for SRSF10 in this process.


---
implicate [ˈɪmplɪkeɪt] v. 使牵连其中，涉及；表明（或意指）……是起因；暗指，暗示 n. （主逻）蕴（涵）之物
pathology [pəˈθɒlədʒi] n. 病理学；病状；精神异常；社会异常；语言异常









# 单细胞中APA多样性的模型:SCAPE [NAR, IF=16.48]
> SCAPE: a mixture model revealing single-cell polyadenylation diversity and cellular dynamics during cell differentiation and reprogramming
> Nucleic Acids Res. 2022 Mar 14;gkac167. doi: 10.1093/nar/gkac167. Online ahead of print.
> Key Laboratory of Birth Defects and Related Diseases of Women and Children of MOE, Department of Laboratory Medicine, State Key Laboratory of Biotherapy, West China Second University Hospital, Sichuan University, Chengdu, Sichuan 610041, China.


Alternative polyadenylation increases transcript diversities at the 3' end, regulating biological processes including cell differentiation, embryonic development and cancer progression. 


贝叶斯方法，识别单细胞水平的APA位点，通过插入片段信息。
Here, we present a Bayesian method SCAPE, which enables de novo identification and quantification of polyadenylation (pA) sites at single-cell level by utilizing insert size information. 


We demonstrated its accuracy and robustness and identified 31 558 sites from 36 mouse organs, 43.8% (13 807) of which were novel. 

APA 亚型与 miRNA 结合相关，在基因表达没有差异的基因中，与组织、细胞类型、肿瘤类型调控有关。提供了另一种细胞聚类方式。
We illustrated that APA isoforms were associated with miRNAs binding and regulated in tissue-, cell type-and tumor-specific manners where no difference was found at gene expression level, providing an extra layer of information for cell clustering. 

红血球生成和诱导干细胞中，基因组范围的APA变化，表明APA功能在单细胞水平的灵活性和多样性。
Furthermore, we found genome-wide dynamic changes of APA usage during erythropoiesis and induced pluripotent stem cell (iPSC) differentiation, suggesting APA contributes to the functional flexibility and diversity of single cells. 

We expect SCAPE to aid the analyses of cellular dynamics and diversities in health and disease.









# RNA修饰的4个方式 [J Bioinform Comput Biol, IF=1.08]
> RNA modification writers influence tumor microenvironment in gastric cancer and prospects of targeted drug therapy
> J Bioinform Comput Biol. 2022 Mar 14;2250004. doi: 10.1142/S0219720022500044. Online ahead of print.
> Department of Gastrointestinal Surgery, The Affiliated Changzhou, No. 2 People's Hospital of Nanjing Medical University, Changzhou 213000, Jiangsu Province, P. R. China.

RNA adenosine modifications are crucial for regulating RNA levels. N6-methyladenosine (m6A), N1-methyladenosine (m1A), adenosine-to-inosine RNA editing, and alternative polyadenylation (APA) are four major RNA modification types.

Then, we constructed a scoring system, WM_score, and quantified the RNA modifications in patients of gastric cancer (GC), associating WM_score with TME, clinical outcomes, and effectiveness of targeted therapies.










# (综述) 通过 ELAV/Hu RNA结合蛋白的，可选择性 神经转录组 的调控[Front Genet, IF=4.2]
> Regulation of the Alternative Neural Transcriptome by ELAV/Hu RNA Binding Proteins
> Front Genet. 2022 Feb 23;13:848626. doi: 10.3389/fgene.2022.848626. eCollection 2022.
> Key Laboratory of RNA Biology, Institute of Biophysics, Chinese Academy of Sciences, Beijing, China.


The process of alternative polyadenylation (APA) generates multiple 3' UTR isoforms for a given locus, which can alter regulatory capacity and on occasion change coding potential. APA was initially characterized for a few genes, but in the past decade, has been found to be the rule for metazoan genes. 

现状：虽然对APA的基因状态、扰动、疾病等有了解，我们对于APA的机制和生物学还远远没有理解。
While numerous differences in APA profiles have been catalogued across genetic conditions, perturbations, and diseases, our knowledge of APA mechanisms and biology is far from complete. 

本综述：本文综述神经中的RNA结合蛋白ELAV/Hu ，产生的3UTR景观。
In this review, we highlight recent findings regarding the role of the conserved ELAV/Hu family of RNA binding proteins (RBPs) in generating the broad landscape of lengthened 3' UTRs that is characteristic of neurons. 

把它们和AS关联，总结神经APA的研究方向，体内 ELAV/Hu 的功能，以及神经中 哪些调控模式的表型结果。
We relate this to their established roles in alternative splicing, and summarize ongoing directions that will further elucidate the molecular strategies for neural APA, the in vivo functions of ELAV/Hu RBPs, and the phenotypic consequences of these regulatory paradigms in neurons.

---
metazoan [ˌmetəˈzəʊən] adj. 后生动物的；多细胞动物的 n. 后生动物；多细胞动物
paradigm [ˈpærədaɪm] n. 典范，范例；样板，范式；词形变化表；纵聚合关系语言项









# eIF4A抑制剂对 黑素瘤和T细胞中 免疫相关 mRNA 的翻译的差异影响[Cancers (Basel), IF=6.6]
> Differential Effects on the Translation of Immune-Related Alternatively Polyadenylated mRNAs in Melanoma and T Cells by eIF4A Inhibition
> Cancers (Basel). 2022 Feb 24;14(5):1177. doi: 10.3390/cancers14051177.
> Institut Curie, PSL Research University, CNRS UMR 3348, INSERM U1278, 91401 Orsay, France.

靶向 结合到mRNA的5'帽的转录起始因子 eIF4F， 是一个值得期待的抗肿瘤途径。
Targeting the translation initiation complex eIF4F, which binds the 5' cap of mRNAs, is a promising anti-cancer approach. 

Silvestrol 是 eIF4F 的抑制剂，能抑制其 解螺旋功能，抑制 STAT1 转录的转录因子，然后在黑色素瘤中 降低免疫检查点分子 PD-L1 的转录。
Silvestrol, a small molecule inhibitor of eIF4A, the RNA helicase component of eIF4F, inhibits the translation of the mRNA encoding the signal transducer and activator of transcription 1 (STAT1) transcription factor, which, in turn, reduces the transcription of the gene encoding one of the major immune checkpoint proteins, i.e., programmed death ligand-1 (PD-L1) in melanoma cells. 

人的大多数基因能通过APA产生3'长度不同的转录本，当APA位点在最后一个外显子中时，可以产生蛋白变体，比如 STAT1基因。
A large proportion of human genes produce multiple mRNAs differing in their 3'-ends through the use of alternative polyadenylation (APA) sites, which, when located in alternative last exons, can generate protein isoforms, as in the STAT1 gene. 

这里： APA产生的 STAT1α 而不是 STAT1β 蛋白，对于IFNg治疗下的黑色素瘤细胞中， silvestrol 依赖的对PD-L1表达的抑制是必须的。
Here, we provide evidence that the STAT1α, but not STAT1β protein isoform generated by APA, is required for silvestrol-dependent inhibition of PD-L1 expression in interferon-γ-treated melanoma cells. 


Using polysome profiling in activated T cells we find that, beyond STAT1, eIF4A inhibition downregulates the translation of some important immune-related mRNAs, such as the ones encoding TIM-3, LAG-3, IDO1, CD27 or CD137, but with little effect on the ones for BTLA and ADAR-1 and no effect on the ones encoding CTLA-4, PD-1 and CD40-L. 

We next apply RT-qPCR and 3'-seq (RNA-seq focused on mRNA 3' ends) on polysomal RNAs to analyze in a high throughput manner the effect of eIF4A inhibition on the translation of APA isoforms. We identify about 150 genes, including TIM-3, LAG-3, AHNAK and SEMA4D, for which silvestrol differentially inhibits the translation of APA isoforms in T cells. 

It is therefore crucial to consider 3'-end mRNA heterogeneity in the understanding of the anti-tumor activities of eIF4A inhibitors.


---
helicase [ˈhiːlɪˌkeɪz] n. 解旋酶
melanoma [ˌmeləˈnəʊmə] n. （肿瘤）黑素瘤
stilbestrol n. [化]已烯雌酚
mole [məʊl] n. 鼹鼠；间谍，内奸；痣；（医）胎块，肿瘤；墨西哥辣酱；防波堤，海堤港；（化）摩尔
polysomal 多聚核糖体的
