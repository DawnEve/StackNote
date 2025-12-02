> APA paper scan

# PASSpedia: 单细胞不同物种APA位点数据库(Genomics Proteomics Bioinformatics. 2025, IF=8.5)
> PASSpedia: A Polyadenylation Site Database Across Different Species at Single Cell Resolution
> https://pubmed.ncbi.nlm.nih.gov/40986375/
> Center for Molecular Medicine, Children's Hospital of Fudan University and Shanghai Key Laboratory of Medical Epigenetics, International Laboratory of Medical Epigenetics and Metabolism, Ministry of Science and Technology, Institutes of Biomedical Sciences, Fudan University, Shanghai 200032, China.

Here, we upgraded our previously developed deep learning-based PAS analysis pipeline `SCAPTURE v2` to profile PASs from 1330 published 3' tag-based scRNA-seq datasets across seven species, resulting in a comprehensive PAS landscape across species.

- https://bits.fudan.edu.cn/PASSpedia/









# 肌萎缩性侧索硬化症(ALS) 眶额叶皮层 单个核转录图谱：基于深度学习解析APA机制 (Cell Genom, IF=7.85)
> Single-nucleus transcriptome atlas of orbitofrontal cortex in ALS with a deep learning-based decoding of alternative polyadenylation mechanisms
> Tanz Centre for Research in Neurodegenerative Diseases, University of Toronto, Toronto, ON, Canada.
> https://pubmed.ncbi.nlm.nih.gov/40967225/

Amyotrophic lateral sclerosis (ALS) and frontotemporal lobar degeneration (FTLD) are fatal neurodegenerative diseases sharing clinical and pathological features. 

都牵涉 神经-胶质细胞 互作，但是，细胞类型特异的改变还未知。
Both involve complex neuron-glia interactions, but cell-type-specific alterations remain poorly defined. 

We performed single-nucleus RNA sequencing of the frontal cortex from C9orf72-related ALS (with and without FTLD) and sporadic ALS (sALS). Neurons showed prominent changes in mitochondrial function, protein homeostasis, and chromatin remodeling. Comparison with independent datasets from other cortical regions revealed consistent pathway alterations, including upregulation of STMN2 and NEFL across brain regions and subtypes.

为研究APA，开发了 APA-Net，整合转录组和RBP来预测APA。
We further examined dysregulation of alternative polyadenylation (APA), an understudied post-transcriptional mechanism, uncovering cell-type-specific APA patterns. To investigate its regulation, we developed the alternative polyadenylation network (APA-Net), a multi-modal deep learning model integrating transcript sequences and RNA-binding protein (RBP) expression profiles to predict APA.

This atlas advances our understanding of ALS/FTLD molecular pathology and provides a valuable resource for future mechanistic studies.




# https://www.cell.com/cell-genomics/home


# Biotechnology Advances, IF=12.5



# Spl-ISO-Seq | buff 叠满了： 脑 + 空转 + 长读长 + 近似单细胞+ APA(Nat Commun. 2025)
> A spatial long-read approach at near-single-cell resolution reveals developmental regulation of splicing and polyadenylation sites in distinct cortical layers and cell types
> Feil Family Brain and Mind Research Institute, Weill Cornell Medicine, New York, NY, USA.
> https://pubmed.ncbi.nlm.nih.gov/40883294/

全基因组的空间长读长方法，通常缺少单细胞分辨率，产生短read长度。本方法能检测 exon和APA，近单细胞分辨率。
Genome-wide spatial long-read approaches often lack single-cell resolution and yield limited read lengths. Here, we introduce `spatial ISOform sequencing (Spl-ISO-Seq)`, which reveals exons and polyadenylation sites with near-single-cell resolution.

读长两倍或者三倍标准长度。新软件。青春期前后对比，视觉皮层样本，发现：皮层vs白质有更强的剪切 和 APA 调控。 //什么指标？
Spl-ISO-Seq selects long cDNAs and doubles to triples read lengths compared to standard preparations. Adding a highly specific software tool `(Spl-ISOquant)` and comparing human post-mortem pre-puberty (8-11 years) to post-puberty (16-19 years) visual cortex samples, we find that cortex harbors stronger splicing and poly(A)-site regulation than white matter.

> Fig. 5. Developmental polyadenylation regulation equally affects cortical layers more than the white matter.
> a Percent significant genes with differential polyA sites. Cortex percent significant: 24.67%, WM percent significant: 3.70%.
> pA变化显著的基因百分比: x=皮层 vs 白质，比的是同一个位置的年龄段样本？
> 正文: However, while we had observed a threefold higher value for alternative exons between cortical layers and white matter, for poly(A)-site choice we observed a > sixfold higher level (Fig. 5a).(目测 25/4=6.25)


然后，少突细胞在白质中调控更强。
However, oligodendrocyte regulation is stronger in white matter.

在皮质层，在兴奋神经和pA位点，layer4有更强的剪切变化。
Among cortical layers, layer 4 has the most developmentally-regulated splicing changes in excitatory neurons and in poly(A) sites.

在发育调控layer4的外显子下游，我们也发现了重复元件。//什么元件？
We also find repeat elements downstream of developmentally-regulated layer 4 exons.

选择性剪切的改变连接了 突触后结构和功能。
Overall, alternative splicing changes are linked to post-synaptic structure and function.

这些结果揭示了发育剪接在青春期特定层和细胞类型中的变化。
These results root developmental splicing changes during puberty in specific layers and cell types.

More generally, our technologies enable exciting observations for any complex tissue.





# (综述)RNA处理与机械传导 (Cell Rep, IF=6.9)
> The bidirectional interplay between RNA processing and mechanotransduction
> https://pubmed.ncbi.nlm.nih.gov/40884791/
> Curriculum in Cell Biology and Physiology, The University of North Carolina at Chapel Hill, Chapel Hill, NC, USA; Department of Cell Biology and Physiology, The University of North Carolina at Chapel Hill, Chapel Hill, NC, USA; Integrated Vascular Biology Training Program, The University of North Carolina at Chapel Hill, Chapel Hill, NC, USA.

通过机械传导，细胞感知和响应环境中的机械刺激。
Through mechanotransduction, cells sense and respond to mechanical stimuli from their environment.

机械刺激先是被机械传感器感知，然后转为生化信号，最终控制基因表达。
A mechanical stimulus is first detected by a mechanosensor, then converted into a biochemical signal, which can ultimately control the expression of genes. 

RNA处理，包括传统和选择性剪切、3’端pA，5’加帽，是基因表达调控的一个精细机制。
RNA processing, which includes canonical and alternative splicing, 3' end polyadenylation, and 5' end capping, is a mechanism that fine-tunes gene expression regulation.

本文：回顾 机械传导 和 RNA处理，特别是剪切和APA 的关系。
Here, we provide an overview of recent studies revealing substantial links between mechanotransduction and RNA processing, with a focus on alternative splicing and polyadenylation.

We first describe the molecular players that are known to mediate mechanotransduction. Then, we examine how mechanical forces inform the functions of RNA-binding proteins. We next summarize recent investigations demonstrating that genes encoding mechanosensory proteins are alternatively spliced and how alternative splicing might impact isoform functions. Last, we discuss the role of mechanical forces on alternative splicing and polyadenylation landscapes.






# Stereo-seq V2: FFPE的total RNA空转(Cell, 2025)
> Stereo-seq V2: Spatial mapping of total RNA on FFPE sections with high resolution
> State Key Laboratory of Genome and Multi-omics Technologies, BGI Research, Shenzhen 518083, China.
> https://pubmed.ncbi.nlm.nih.gov/40882628/

Performing total RNA profiling on formalin-fixed, paraffin-embedded (FFPE) samples, the predominant sample conservation method in clinical practice, remains challenging for current spatial transcriptomics techniques. Here, we introduce Stereo-seq V2, which employs random primers to capture and sequence RNAs in situ on FFPE sections and provides single-cell resolution.

随机引物扩增，非偏好捕获整个RNA覆盖度，提高marker基因敏感度，non-pA RNA效率，免疫库覆盖度。
The random-priming-based strategy offers unbiased transcript capturing and uniform gene body coverage, which increase the sensitivity to marker genes, the efficiency of non-polyadenylation (poly(A)) RNA profiling, and immune repertoire coverage.

测试：TNBC样本，识别肿瘤特有的剪切。
We demonstrated the robust performance of Stereo-seq V2 on clinical FFPE samples using triple-negative breast cancer (TNBC) sections and identified tumor-specific alternative splicing events.

结核感染小鼠模型，同时监视：宿主基因表达动态，病原体转录组
In a Mycobacterium tuberculosis (Mtb)-infected mouse model, we monitored gene expression dynamics of host and pathogen transcriptomes simultaneously by utilizing Stereo-seq V2.

组装免疫库，识别TM特有的BCR克隆，在人TB肺样本中也有。
We also assembled immune repertoires and identified Mtb-specific BCR clones, which could also be observed in human tuberculous lung samples.

These results highlight Stereo-seq V2's potential in biomedical research and personalized medicine.







# 番茄中 Pi饥饿后，cis-natural antisense RNA 调控SlSPX5的APA (Nat Commun. 2025)
> A cis-natural antisense RNA regulates alternative polyadenylation of SlSPX5 under Pi starvation in tomato
> College of Life and Environmental Sciences, Hangzhou Normal University, Hangzhou, China.
> https://pubmed.ncbi.nlm.nih.gov/40858627/

APA在植物响应压力上还未知。
Alternative polyadenylation (APA) generates transcript diversity by producing mRNA isoforms with distinct 3' ends. Despite the critical roles that APA plays in various biological processes, the mechanisms regulating APA in response to stresses have remained poorly understood in plants.

Here, we perform comprehensive analysis of APA in tomato, and focus on a phosphate (Pi)- regulated APA gene SlSPX5, encoding a putative Pi sensor protein. SlSPX5 interacts with and sequesters the transcription factor SlPHL1 in the cytosol, thereby inhibiting the expression of Pi starvation inducible genes. 

发现：Pi删除条件下，cis-NAT 激活，促进 SlSPX5 的近端pA使用。
We discover that a cis-natural antisense RNA (cis-NAT) is activated from SlSPX5 to promote its proximal polyadenylation under Pi-depleted conditions.

机制: cis-NAT的转录诱导了 RNA Pol II 暂停，产生Ser2磷酸化信号，招募APA机器到SlSPX5的5’端。
The transcription of this cis-NAT induces RNA Polymerase II pausing, generating Ser2 phosphorylation signals that recruit polyadenylation machinery to the 5' end of SlSPX5.

Our findings demonstrate that a cis-NAT regulates APA of its cognate gene in response to Pi starvation.










