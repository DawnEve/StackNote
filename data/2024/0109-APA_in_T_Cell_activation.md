T 细胞激活过程中的APA


关键词：alternative polyadenylation T cell activation

https://pubmed.ncbi.nlm.nih.gov/?term=alternative+polyadenylation+T+cell+activation&sort=date&size=50




# T细胞激活诱导的3UTR表达，是空间和信号依赖的(Scientific Reports, 2024)
> Alternative 3′UTR expression induced by T cell activation is regulated in a temporal and signal dependent manner
> https://www.nature.com/articles/s41598-024-61951-1
> Department of Biochemistry and Biophysics, Perelman School of Medicine, University of Pennsylvania, Philadelphia, PA, 19104, USA

T细胞激活后大部分基因的3UTR缩短，但是富集到 mTOR 通路的3UTR增长。
Most APA changes upon T cell activation involve 3′UTR shortening, although a set of genes enriched for function in the mTOR pathway exhibit 3′UTR lengthening.

延长T细胞激活时间，上调APA核心因子可能诱导3UTR缩短。在细胞增殖和上调APA核心因子之前，这一显著的APA程序改变会发生。
While upregulation of the core polyadenylation machinery likely induces 3′UTR shortening following prolonged T cell stimulation; a significant program of APA changes occur prior to cellular proliferation or upregulation of the APA machinery.

motif分析显示，至少一个APA子集的改变是RBM3驱动的。
Motif analysis suggests that at least a subset of these early changes in APA are driven by upregulation of RBM3, an RNA-binding protein which competes with the APA machinery for binding. 


Together this work expands our understanding of the impact and mechanisms of APA in response to T cell activation and suggests new mechanisms by which APA may be regulated.


## data

To define the global landscape of APA upon T cell stimulation, we re-analyzed our previously generated RNA-seq data from (CD45R0−) CD4+ primary T cells from 3 healthy human donors (GSE135118).

We quantified APA using `DaPars` where we compared naïve primary T cells from the 3 donors to ex vivo stimulated T cells for 8 h or 48 h with anti-CD3 or co-stimulation with anti-CD3 and anti-CD28.



- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE135118 27 samples(3个人，9样品/人[0h,8h,48h]*[naive, CD28, CD3+CD28])



原始数据是这个文章：

> Blake D, Radens CM, Ferretti MB, Gazzara MR et al. Alternative splicing of apoptosis genes promotes human T cell survival. Elife 2022 Oct 20;11. PMID: [36264057](https://pubmed.ncbi.nlm.nih.gov/36264057/)


共三个人，年龄和性别分别是：
```
DONOR_AGE	sex
46	male
32	male
26	female
```









# T helper 细胞的动态和可逆3UTR景观 (RNA, 2024)
> T helper cells exhibit a dynamic and reversible 3'UTR landscape
> https://pubmed.ncbi.nlm.nih.gov/38302256/
> UniversitatSpital Basel; denis.seyres@unibas.ch.
> https://rnajournal.cshlp.org/content/early/2024/02/01/rna.079897.123.long

In addition, we generated 3' end UTR sequencing data from naïve, activated, memory and regulatory CD4+ T cells.

3'UTR length changes were estimated using a non-negative matrix factorization approach and were compared with those inferred from long-read PacBio sequencing.

We found that APA events were transient and reverted after effector phase expansion. 

Using an orthogonal bulk RNAseq dataset, we did not find evidence of APA association with differential gene expression or transcript usage, indicating that APA has only a marginal effect on transcript abundance. 







# 产前和产后胸腺中 初始T细胞命运决定的信号(Front Immunol. 2023)
> Divergent molecular events underlying initial T-cell commitment in human prenatal and postnatal thymus
> https://pubmed.ncbi.nlm.nih.gov/37828991/
> Key Laboratory for Regenerative Medicine of Ministry of Education, Institute of Hematology, School of Medicine, Jinan University, Guangzhou, China.

Moreover, the transcriptional heterogeneity and posttranscriptional gene expression regulation such as alternative polyadenylation at different stages are also unknown.

Finally, we quantified the transcriptome-wide changes in alternative polyadenylation across T-cell development and found diverse preferences of polyadenylation site usage in divergent populations along the T-cell commitment trajectory.
在T细胞分化命运决定中，不同的分化群有不同的polyA偏好性。

Discussion: In summary, our results revealed transcriptional heterogeneity and a dynamic landscape of alternative polyadenylation during T-cell development in both human prenatal and postnatal thymus, providing a comprehensive resource for understanding T lymphopoiesis in human thymus.








# U1 snRNP 通过靶向 3’处理核心因子 促进 近端pA(J Mol Cell Biol. 2022)
> U1 snRNP proteins promote proximal alternative polyadenylation sites by directly interacting with 3' end processing core factors
> State Key Laboratory of Biocontrol, Guangdong Province Key Laboratory of Pharmaceutical Functional Genes, Department of Biochemistry, School of Life Sciences, Sun Yat-sen University, Higher Education Mega Center, Guangzhou 510006, China.
> https://pubmed.ncbi.nlm.nih.gov/36073763/

- U1 snRNP, 
- small nuclear ribonucleoprotein U1
- The spliceosome, a large complex containing five conserved `small ribonucleoprotein particles` (snRNPs) U1, U2, U4, U5 and U6, plays important roles in precursor messenger RNA splicing

真核细胞中，splicing和APA在基因调控网络中起重要作用。
In eukaryotic cells, both alternative splicing and alternative polyadenylation (APA) play essential roles in the gene regulation network. 

U1 小核蛋白颗粒(U1 snRNP)是剪切复合体的一个主要的组件，U1 snRNP复合体通过与3'端处理因子互作，抑制近端pA的使用。
U1 small ribonucleoprotein particle (U1 snRNP) is a major component of spliceosome, and U1 snRNP complex can suppress proximal APA sites through crosstalking with 3' end processing factors.

然而，我们敲除或过表达U1 snRNP的蛋白组分 SNRPA, SNRPC, SNRNP70, and SNRPD2，都在转录水平上促进近端pA的使用。
However, here we show that both knockdown and overexpression of SNRPA, SNRPC, SNRNP70, and SNRPD2, the U1 snRNP proteins, promote the usage of proximal APA sites at the transcriptome level. 

SNRNP70 驱动PABPN1从液滴到聚合的状态转移，降低 PABPN1 对近端pA的抑制作用。
SNRNP70 can drive the phase transition of PABPN1 from droplet to aggregate, which may reduce the repressive effects of PABPN1 on the proximal APA sites. 

另外，SNRNP70 能通过招募 CPSF6 促进近端 pA 位点，这表明 CPSF6 对APA的功能相关其他RNA结合蛋白，且是细胞上下文依赖的。
Additionally, SNRNP70 can also promote the proximal APA sites by recruiting CPSF6, suggesting that the function of CPSF6 on APA is related with other RNA-binding proteins and cell context-dependent.


结果：和U1 snRNP复合体相反，它的几个自由单体蛋白可以通过与3’端处理机器结合，促进近端pA的使用。
Consequently, these results reveal that, on the contrary to U1 snRNP complex, the free proteins of U1 snRNP complex can promote proximal APA sites through the interaction with 3' end processing machinery.

> Fig2G: Immunofluorescence analysis of the co-localization of SNRNP70 with CPSF6 and PABPN1 and co-localization of SNRPD2 with PABPN1 in HEK293T cells.








# 肿瘤中的3UTR缩短和蛋白代谢相关(RNA. 2021)
> Shortening of 3' UTRs in most cell types composing tumor tissues implicates alternative polyadenylation in protein metabolism
> https://pubmed.ncbi.nlm.nih.gov/34521731/
> Computational and Systems Biology, Biozentrum, University of Basel, Basel, CH-4056, Switzerland SIB Swiss Institute of Bioinformatics, Basel, CH-4056, Switzerland.

Fig.5A 3UTR lengthening bar plot
	5D Quasi-bulk sample

To resolve this, we developed a computational method, called `SCUREL`, that quantifies changes in 3' UTR length between groups of cells, including cells of the same type originating from tumor and control tissue. 

We used this method to study APA in human lung adenocarcinoma (LUAD). 

SCUREL relies solely on `annotated 3' UTRs` and on control systems such as `T cell activation`, and spermatogenesis gives qualitatively similar results at much greater sensitivity compared to the previously published `scAPA` method.










# Th1细胞分化中介导SNRPA的STAT5B的APA(J Immunol. 2017 Good)
> Small Nuclear Ribonucleoprotein Polypeptide A-Mediated Alternative Polyadenylation of STAT5B during Th1 Cell Differentiation
> https://pubmed.ncbi.nlm.nih.gov/28954886/
> State Key Laboratory for Biocontrol, Guangdong Province Key Laboratory of Pharmaceutical Functional Genes, Department of Biochemistry, School of Life Sciences, Sun Yat-sen University, Higher Education Mega Center, Guangzhou 510006, People's Republic of China; and.

`T cells are activated and differentiated into Th cells` depending on the rapid and accurate changes in the cell transcriptome. In addition to changes in mRNA expression, the sequences of many transcripts are altered by alternative splicing and alternative polyadenylation (APA). 

We profiled the `APA sites of human CD4+ T cell subsets` with high-throughput sequencing and found that `Th1 cells harbored more genes with shorter tandem 3' untranslated regions (UTRs) than did naive T cells`.

直接有APA的分子： STAT5B, a key regulator of Th1 differentiation, possessed three major APA sites and preferred shorter 3' UTRs in Th1 cells. 

上游分子：In addition, small nuclear ribonucleoprotein polypeptide A (SNRPA) was found to bind directly to STAT5B 3' UTR and facilitate its APA switching. 

通路：We also found that p65 activation triggered by TCR signaling could promote SNRPA transcription and 3' UTR shortening of STAT5B.

结论： Thus we propose that the APA switching of STAT5B induced by TCR activation is mediated by SNRPA.


## 正文

The genes with altered expression were enriched in the cell cycle, DNA metabolic processes, cellular response to stress, organelle fission, and macromolecular complex assembly (Fig. 2D).


- Table I. GO terms for genes with significant switching to longer or shorter UTRs
GO analysis of 404 APA site-switching genes in Th1 cells was performed by DAVID.
Mitochondrial membrane organization 6

Subsequent analysis of gene function by DAVID showed that APA genes were enriched in the regulation of macromolecular processes and transcription, whereas genes with significantly altered expression were enriched in cell cycle–related functions, chromosome organization, and cellular responses (Fig. 2, Table I).

- APA 改变的基因： 大分子代谢、转录
- 表达 改变的基因： 细胞周期、染色体组织、细胞响应。








# 细胞类型特异的APA (Nucleic Acids Res. 2019)
> Cell-type-specific analysis of alternative polyadenylation using single-cell transcriptomics data
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6821429/
> Department of Human Molecular Genetics and Biochemistry, Sackler School of Medicine, Tel Aviv University, Tel Aviv, Israel
> https://github.com/ElkonLab/scAPA mainly R code;

Fig.2
**Analysis of APA modulation in activated T cells**









# CD8 细胞的命运决定(Cell 2018)
> https://pubmed.ncbi.nlm.nih.gov/29326266/




# 中性粒细胞及应激 动态(nature immunology, 2022)
> Cellular and transcriptional dynamics of human neutrophils at steady state and upon stress
> https://www.nature.com/articles/s41590-022-01311-1




# 驻留、中央、效应记忆CD4 T细胞在 感染或疫苗后 的保护性免疫 (Immunology. 2018)
> The roles of resident, central and effector memory CD4 T-cells in protective immunity following infection or vaccination
> https://onlinelibrary.wiley.com/doi/full/10.1111/imm.12929
> https://pubmed.ncbi.nlm.nih.gov/29570776/
> Centre for Immunobiology, Institute of Infection, Immunity and Inflammation, University of Glasgow, Glasgow, UK.

In order to harness the diverse protective effects of memory CD4 T-cells, we need to understand how memory CD4 T-cells are generated and how they protect the host.

Currently we have limited understanding of the priming signals that lead to the generation of multifunctional memory cells. This information will be key to the development of more effective vaccines capable of producing protective multifunctional CD4 T-cells.





# (综述) CD4+ T cell memory(nature immunology, 2023)
> https://www.nature.com/articles/s41590-023-01510-4

Nevertheless, transcriptional profiling of human CD69+CD4+ T cells from tissues identified a partial overlap with mouse CD8+ TRM cells107. Combined TCR and single-cell RNA sequencing revealed expanded CD4+ T cell clones uniquely present in NLTs, providing further opportunities to refine TRM cell signatures130.

> 130.Poon, M. M. L. et al. Tissue adaptation and clonal segregation of human memory T cells in barrier sites. Nat. Immunol. 24, 309–319 (2023).





# T mem 响应快，分裂慢 (PLoS Pathog. 2008)
> Tentative T Cells: Memory Cells Are Quick to Respond, but Slow to Divide
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2275797/
> Molecular and Integrative Neurosciences Department, The Scripps Research Institute, La Jolla, California, United States of America

Although memory cells can detect, and respond to, virus infection **within a few hours**, their proliferation did not begin until **∼3 days** after infection, and occurred simultaneously in all anatomical compartments.

- For the first two days there was no loss of CFSE, and on day 3 there was limited cell division; 24 hours later, the cells had divided beyond the limits of detection of the CFSE assay (>7–8 cell divisions).
- CD4+ memory T cells do not initiate division until 3–4 days after infection







# 【实验：诱导分化】CD4+ T-Cell Differentiation In Vitro (Methods Mol Biol. 2020)
> https://pubmed.ncbi.nlm.nih.gov/31933201/

The following protocols describe the methods to induce naïve CD4+ T-cell differentiate into `Th1, Th2, Th17 and Treg` by activating TCR, together with the different cytokines and blocking antibodies in vitro. The efficiency of T helper cell differentiation is examined by detecting the expression of hallmark cytokines and transcription factors.





# T细胞激活 + scRNA-seq:  lungs, lymph nodes, bone marrow and blood (Nat Commun. 2019)
> Single-cell transcriptomics of human T cells reveals tissue and activation signatures in health and disease
> https://pubmed.ncbi.nlm.nih.gov/31624246/

Here, we use single cell RNA-sequencing (scRNA-seq) to define the heterogeneity of `human T cells isolated from lungs, lymph nodes, bone marrow and blood`, and their functional responses following `stimulation`. 


Through analysis of >50,000 resting and activated T cells, we reveal tissue T cell signatures in mucosal and lymphoid sites, and lineage-specific activation states across all sites including distinct effector states for CD8+ T cells and an interferon-response state for CD4+ T cells.






# (综述)T激活后的转录后修饰 (Eur J Immunol. 2021)
> T cells at work: How post-transcriptional mechanisms control T cell homeostasis and activation
> https://pubmed.ncbi.nlm.nih.gov/34180545/

Protective T cell responses rely on the concerted production of effector molecules such as cytolytic mediators, `granzymes, and perforins`, as well as `pro-inflammatory cytokines and chemokines`. 


Alternative polyadenylation is yet another `post‐transcriptional mechanism` involved in regulation of gene expression through mRNA 3’UTR by creating alternative 3’UTR isoforms. Global analysis of alternative 3’UTR isoforms in both human and murine quiescent T cells showed higher expression of longer 3’UTR isoforms compared to activated T cells [86, 87], because quiescent T cell preferentially use the distal polyadenylation sites. Extended 3’UTR isoforms contain more target sites for miRNAs and RBPs, which can lead to reduced protein expression in quiescent T cells, or even to functional diversity as was shown in human embryonic kidney HEK293 cells [86, 88, 89, 90, 91].

> 86. Sandberg, R., Neilson, J. R., Sarma, A., Sharp, P. A. and Burge, C. B., Proliferating cells express mRNAs with shortened 3′ untranslated regions and fewer microRNA target sites. Science. 2008. 320: 1643–1647. [PMC free article] [PubMed] [Google Scholar]
> 87. Gruber, A. R., Martin, G., Müller, P., Schmidt, A., Gruber, A. J., Gumienny, R., Mittal, N. et al., Global 3′ UTR shortening has a limited effect on protein abundance in proliferating T cells. Nat. Commun. 2014. 5: 1–10. [PubMed] [Google Scholar]

> 88. Domingues, R. G., Lago‐Baldaia, I., Pereira‐Castro, I., Fachini, J. M., Oliveira, L., Drpic, D., Lopes, N. et al., `CD5` expression is regulated during human T‐cell activation by alternative polyadenylation, PTBP1, and miR‐204. Eur. J. Immunol. 2016 Jun 1;46: 1490–1503. [PMC free article] [PubMed] [Google Scholar]
> 89. Chuvpilo, S., Zimmer, M., Kerstan, A., Glöckner, J., Avots, A., Escher, C., Fischer, C. et al., Alternative polyadenylation events contribute to the induction of `NF‐ ATc` in effector T cells. Immunity. 1999. 10: 261–269. [PubMed] [Google Scholar]
> 90. Berkovits, B. D. and Mayr, C., Alternative 3′ UTRs act as scaffolds to regulate `membrane protein localization`. Nature. 2015. 522: 363–367. [PMC free article] [PubMed] [Google Scholar]
> 91. Ma, W. and Mayr, C., `A membraneless organelle` associated with the endoplasmic reticulum enables 3’UTR‐mediated protein‐protein interactions. Cell. 2018. 175: 1492–1506.e19. [PMC free article] [PubMed] [Google Scholar]









# CD4+ T激活过程中，免疫疾病SNP调控的动态基因表达(Nat Genet. 2022)
> Immune disease risk variants regulate gene expression dynamics during CD4+ T cell activation
> 1.Wellcome Sanger Institute, Wellcome Genome Campus, Cambridge, UK.
> 2.Open Targets, Wellcome Genome Campus, Cambridge, UK.
> https://pubmed.ncbi.nlm.nih.gov/35618845/

We profiled `655,349 CD4+ T cells`, capturing transcriptional states of `unstimulated cells and three time points` of cell activation in 119 healthy individuals.

This identified 38 cell clusters, including transient clusters that were only present `at individual time points` of activation. 



## **Data availability**

The raw scRNA-seq data study have been deposited in the European Genome-phenome Archive with accession number [EGAD00001008197](https://ega-archive.org/datasets/EGAD00001008197). Genotypes have been deposited in the European Genome-phenome Archive with accession number [EGAD00010002291](https://ega-archive.org/datasets/EGAD00010002291). Processed single-cell data and summary statistics are available at https://trynkalab.sanger.ac.uk.

- https://ega-archive.org/datasets/EGAD00001008197
We isolated `naive and memory CD4+ T cells from 119 healthy individuals` and stimulated the cells using `anti-CD3/anti-CD28 coated beads`. We profiled gene expression using single cell RNA-seq (10X-Genomics 3’ v2 kit) at `resting state and three time points of activation (16h, 40h and 5 days post stimulation)` and mapped expression quantitative trait loci.


- 167 samples
- DAC: EGAC00001000205
- Technologies: Illumina HiSeq 4000, Illumina MiSeq



- https://ega-archive.org/datasets/EGAD00010002291
Blood samples were obtained from 119 healthy individuals of British ancestry. Genomic DNA was isolated from a suspension of PBMCs from each individual using a DNA isolation kit (Qiagen). Genotyping was then performed using the Infinium CoreExome-24 (v1.3) chip (Illumina).


- 09/03/2022
- 127 samples
- DAC: EGAC00001000205
- Technology: Infinium CoreExome-24 (v1.3) chip (Illumina)


---

- 单细胞可视化结果： https://trynkalab.sanger.ac.uk/
- EGA 账号申请： https://ega-archive.org/register/


## 评论

- https://www.nature.com/articles/s41588-022-01067-2

重点是3个ref及对应的一句话评论。






## 软件: cellSNP 单细胞基因型确定

- https://github.com/single-cell-genetics/cellSNP
- 新版本用C语言实现 https://academic.oup.com/bioinformatics/article/37/23/4569/6272512?login=false

使用 pysam / htslib ，结果和 samtools/bcftools mpileup 很像。

Here, we introduce a software, cellsnp-lite, implemented in C/C++ and based on well-supported package htslib, for genotyping in single-cell sequencing data for both droplet and well-based platforms. 

可用于混合单细胞测序中的供者基因型推断：

cellSNP aims to pileup the expressed alleles in single-cell or bulk RNA-seq data, which can be directly used for `donor deconvolution` in multiplexed single-cell RNA-seq data, particularly with `vireo`, which `assigns cells to donors and detects doublets`, even without genotyping reference.



## 软件 Vireo: Bayesian demultiplexing of pooled single-cell RNA-seq data without genotype reference

根据混合的 RNA-seq 数据用贝叶斯拆分。

- https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1865-2


genetic variants that segregate between the samples in the pool have been proposed as `natural barcode` for cell demultiplexing. 

To address this, we here present Vireo, a computationally efficient `Bayesian model to demultiplex single-cell data from pooled experimental designs`. 



