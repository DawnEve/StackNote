# Article
> A Cancer-Specific Ubiquitin Ligase Drives mRNA Alternative Polyadenylation by Ubiquitinating the mRNA 3′ End Processing Complex
> 
> Molecular Cell [2020年影响因子/JCR分区：15.584/Q1]
> Volume 77, Issue 6, 19 March 2020, Pages 1206-1221.e7
> https://doi.org/10.1016/j.molcel.2019.12.022
> https://www.sciencedirect.com/science/article/pii/S1097276519309529?via%3Dihub



## Highlights
- MAGE-A11 is aberrantly expressed in cancer and is a potent oncogene
	MAGE-A11在肿瘤中异常表达，是潜在的癌基因
- MAGE-A11-HUWE1 ubiquitin ligase promotes ubiquitination and degradation of PCF11
	MAGE-A11-HUWE1 泛素连接酶 泛素化和降解 PCF11
- MAGE-A11 promotes alternative polyadenylation and 3′ UTR shortening in cancer
	MAGE-A11 促进肿瘤中的APA和3’UTR缩短
- MAGE-A11-induced 3′ UTR shortening modulates core oncogenes and tumor suppressors
	MAGE-A11介导的3’UTR缩短 调控 核心癌基因和肿瘤抑制子。

## Graphical Abstract

![Graphical Abstract](data/2021/images/05/0517-APA.jpg)

# Summary

肿瘤中有3’UTR缩短的现象，但是机制未知。 本文给出一个 3’缩短的机制：
Here, we describe a widespread mechanism promoting 3′ US in cancer through ubiquitination of the mRNA 3′ end processing complex protein, PCF11, by the cancer-specific MAGE-A11–HUWE1 ubiquitin ligase.

1. MAGE-A11 is normally expressed only in the male germline but is frequently re-activated in cancers.
2. MAGE-A11 对肿瘤细胞的 生存(viability) 是必须的。
3. 筛选 MAGE-A11 靶基因发现它能泛素化 PCF11，导致 CFIm25从mRNA3’端复合体脱落。
This leads to APA of many transcripts affecting core oncogenic and tumor suppressors, including cyclin D2 and PTEN. 

These findings provide insights into the molecular mechanisms driving APA in cancer and suggest therapeutic strategies.


# Introduction

polyadenylation sites (PASs) 

## APA概述

1. PAS 的选择是多种核心序列元件，被多种蛋白复合物识别，包括:  
including `CPSF, CFI, CFII, and CstF complexes`, and single proteins, such as `PABPN1, RBBP6, and SYMPK` (Elkon et al., 2013, Shi et al., 2009, Tian and Manley, 2017).

调节这些组分，能导致 cryptic PAS的使用，导致APA。


2. APA的影响很大，对转录后基因调控有影响，including mRNA stability, translation, nuclear export, and cellular localization (reviewed in Tian and Manley, 2017). 

由于APA导致3’UTR缩短的一个后果是，mRNA逃脱miRNA的抑制。(Hoffman et al., 2016, Mayr and Bartel, 2009, Sandberg et al., 2008)

- 除了 cis 方式调控同种转录本，
- 3’缩短 还会 trans 方式导致 竞争性内源RNA(ceRNA)调控。就是 缩短的3 ' utr不再隔离miRNAs，这样被释放的 miRNA 就直接抑制其 ceRNA 伙伴了。


3. APA可以是正常生理功能的调控过程，比如 cellular differentiation, neuronal activity, and spermatogenesis (Flavell et al., 2008, Ji and Tian, 2009, Li et al., 2016).

- 脑中常常 3’UTR增长，多样的蛋白亚型对应着不同的细胞亚定位
- 而3’缩短，则与T细胞激活及诱导分裂，精细细胞发育相关，


4. 异常的APA常常与肿瘤等疾病相关，全局性3'变短是大多数肿瘤的 hallmark.

- 多肿瘤分析发现，超90% 的 APA 事件导致 3′ 缩短 (Xia et al., 2014). 
- 几个癌基因受到影响，包括 cyclin D1细胞周期调控子，因为3'缩短而高表达(Mayr and Bartel, 2009).
- 本组最近研究发现，乳腺癌中3'缩短，打断ceRNA crosstalk，从而trans 方式抑制肿瘤抑制基因 (Park et al., 2018)

虽然有这些发现，促进APA的机制还是没有建立起来。

虽然恶性胶质瘤的部分子集有3'缩短，归因于CFIm25低表达，但是对大多数肿瘤来说，3'UTR缩短的机制还是未知的。




## MAGE 概述

5. MAGE基因在真核中很保守，是通过共有的结构域定义的
defined by a common MAGE homology domain (MHD), which consists of tandem winged helix motifs (Doyle et al., 2010, Lee and Potts, 2017, Newman et al., 2016).


| 名词        | 解释           |
| ------------- |:-------------:|
| tandem winged helix motifs | 串联翼螺旋图案 |


- 人MAGE蛋白的一个子集被分类为 cancer-testis antigens (CTAs)癌睾抗原，因为他们生理上只在睾丸中表达，但是也在肿瘤中异常表达。
- 最近，MAGE CTA 受到重视，被作为肿瘤hallmark，因为在侵袭性肿瘤中高表达，与不良预后相关，及促肿瘤生长和转移。 (Pineda et al., 2015, Weon and Potts, 2015).
- 我们等研究者发现，MAGE蛋白作为 底物连接子(substrate adaptors)  招募新蛋白到具体的E3泛素连接酶上，促进他们的泛素化和并常常导致降解。(Doyle et al., 2010, Hao et al., 2013, Pineda et al., 2015).
- 所以，MAGE蛋白可能代表了肿瘤通过重新编程泛素连接酶，来重新布线癌细胞中增殖细胞功能的关键信号通路的一种方式。
- 然后，多数MAGE CTAs，包括MAGE-A11的分子机制和致癌可能性都未知


## 本研究

6. 本文，我们展示了正常情况下，生殖细胞才表达的MAGE-A11在肿瘤中异常表达，并通过促进APA导致很多转录本3‘缩短，而促瘤。

- MAGE-A11作为HUWE1 E3 泛素连接酶的底物连接子，促进肿瘤中mRNA3’端处理复合体的PCF11亚基的异常泛素化。
- 这导致 CFIm25从mRNA3‘端丢失，导致远端PAS上游富集CFIm25结合位点的转录本3’缩短。
- 表达不能降解的PCF11突变体能抑制MAGE-A11的致癌能力和3‘缩短。
- 分析受MAGE-A11影响的转录本，揭示了核心促瘤和抑制瘤基因和通路。
	* 包括原癌基因 cyclin D2的3’端缩短，导致Rb肿瘤抑制子通路的下调。
- 进一步的，3‘缩短的转录本的ceRNA伴侣，包含很多肿瘤抑制基因，比如被MAGE-A11下调的PTEN，导致Akt生长信号通路的激活。

以上发现，提供了MAGE-A11的功能，帮助理解驱动肿瘤中APA的分子机制。





# Results

## 1.MAGE-A11 肿瘤中异常表达，完全能驱动肿瘤生长

(1) qRT-PCR in 26个 健康人组织，只在睾丸和胎盘(placenta )表达(`Fig 1A`)
GTEx 51个组织验证(Fig S1A)

蛋白水平: 免疫组化 亚定位
showing expression of MAGE-A11 in germ cells of the testis and syncytiotrophoblasts in placental tissue (Figures S1B and S1C).


TCGA分析，MAGE-A11在很多肿瘤汇中高表达，
including lung squamous cell carcinoma (>60%), 
ovarian carcinoma (>40%),
and head and neck squamous cell carcinoma (>40%) (`Figure 1B`).

细胞系敲除实验: MAGE-A11 siRNA (fig 1C): 瞬转敲除后 细胞成活率下降。
KO后细胞生长实验(fig 1D) : KO后分裂下降
克隆形成实验(fig 1E,F)
敲除后重新转入表达载体(fig 1G)
KO cell in mouse(fig 1H)
不表达的细胞，过表达后，小鼠肿瘤长得快(Fig 1-I,J)



## 2.MAGE-A11促进泛素化，促进PCF11的蛋白酶依赖的降解

MAGE-A11 Promotes Ubiquitination and Proteasome-Dependent Degradation of PCF11

- 获得直接相互作用蛋白 4 个，都是已知的与mRNA3’处理复合体有关。
	* PCF11 and CLP1 belong to the cleavage factor II (CFII) subcomplex that directly interacts with RNA polymerase II (RNAPII) via p-S2 residues in the RNAPII CTD-binding PCF11 CID domain (Licatalosi et al., 2002, Meinhart and Cramer, 2004).
- 这是个什么实验？
To elucidate the molecular mechanisms of MAGE-A11 oncogenic activity, we performed unbiased analysis of MAGE-A11 interacting proteins by `tandem affinity purification (TAP) coupled to liquid chromatography-tandem mass spectrometry (LC-MS/MS)`. Only 4 proteins, PCF11, CLP1, POLR2A, and POLR2B, in addition to the MAGE-A11 bait, were identified repeatedly and specifically in TAP-MAGE-A11 cells compared to TAP-vector controls (Figures 2A and S3A).

- coIP验证: We confirmed that MAGE-A11 interacts with the CFII complex and RNAPII in cells by co-immunoprecipitation (coIP) (Figure 2B). 
- Further analysis revealed that the `MAGE-A11 directly binds PCF11`, but not CLP1 (Figure 2C), in vitro.

- Previously, we have reported that many MAGE proteins bind to specific E3 ubiquitin ligases and modulate ubiquitination of target proteins (Doyle et al., 2010, Hao et al., 2013, Hao et al., 2015, Pineda et al., 2015, Weon et al., 2018).


## 3.MAGE-A11 招募 PCF11 到HUWE1 E3 泛素连接酶，泛素化和降解

MAGE-A11 Recruits PCF11 to the HUWE1 E3 Ubiquitin Ligase for Ubiquitination and Degradation



## 4.MAGE-A11促进APA导致肿瘤中3‘缩短

MAGE-A11 Promotes Alternative Polyadenylation Leading to 3′ US in Tumors

- 不表达与过表达细胞系，普通RNA-seq，结果 过表达的213/268个APA事件是缩短的。

We performed high-depth (2.5 × 108 reads) RNA sequencing (RNA-seq) and applied our previously described bioinformatics algorithm `DaPars` (dynamic analysis of alternative polyadenylation from RNA-seq) (Masamha et al., 2014, Xia et al., 2014) to identify 3′ UTR alterations between control and MAGE-A11-expressing HEK293FT cells.

MAGE-A11 expression resulted in 268 APA events, with the majority, 213, being 3′ US events in which the proximal PAS (pPAS) was preferentially used (Figures 4A and 4B). 

Similar results were also obtained using the `APAtrap algorithm` (Ye et al., 2018) with a large number of 3′ US transcripts identified by both approaches (χ2 p < 0.00001). 

- MAGE-A11 KO后，3’UTR 变长的增多(Fig S4A)
- These results suggest that MAGE-A11 promotes 3′ US of transcripts.

- 进一步分析了`卵巢癌和肺癌的TCGA转录本数据集`的3‘使用，发现MAGE-A11高表达vs低表达的肿瘤中，85%和87%的APA事件是3’缩短。
Furthermore, analysis of TCGA transcriptomics datasets from human ovarian carcinoma and lung squamous carcinoma patient tumors for 3′ UTR usage revealed a significant number of transcripts (106 [85% of APA events] and 151 [87% of APA events], respectively) with 3′ US in MAGE-A11-expressing tumors compared to MAGE-A11-negative control tumors (Figures 4F–4H).

- 值得注意的是，很多有APA的转录本的mRNA表达水平都发生了变化，与转录中顺式调控元件被打扰一致。
Notably, **many of the transcripts with APA had altered mRNA levels**, consistent with disruption of cis-regulatory elements in the 3′ UTR of these transcripts (Figures S4B–S4F). 

- 结论: MAGE-A11 调控 PCF11，驱动APA导致肿瘤中3‘UTR缩短。
Together, these results suggest that MAGE-A11 regulation of PCF11 drives APA leading to 3′ US in tumors.


## 5.MAGE-A11介导的PCF11泛素化导致CFIm25从RNAPII解离
MAGE-A11-Induced PCF11 Ubiquitination Dissociates CFIm25 from RNAPII

- Although depletion of CFIm25 by small interfering RNA (siRNA)-mediated knockdown led to 3′ US, 
- depletion of PCF11 produced 3′ UTR lengthening (Baejen et al., 2017, Kamieniarz-Gdula et al., 2019, Li et al., 2015, Masamha et al., 2014, Ogorodnikov et al., 2018). 
- In contrast, our data suggest that MAGE-A11-induced PCF11 ubiquitination leads to 3′ US (Figure 4). 


- We found that MAGE-A11 expression resulted in significant reduction in CFIm25 association with RNAPII by coIP (Figures 5A, 5B, and S5A).

- CFIm25 dissociation from RNAPII by MAGE-A11 is HUWE1 dependent, confirming the importance of ubiquitination (Figure 5C). 
- However, this effect was independent of PCF11 degradation, as **rescue of PCF11 levels** in MAGE-A11-expressing cells by MG132 led to stabilization of PCF11 but failed to rescue CFIm25 association with RNAPII (Figures 5D and 5E). 

表明: MAGE-A11介导PCF11泛素化，但是不降解，导致mRNA3’端复合物重塑，而CFIm25解离。
These results suggest that MAGE-A11-induced PCF11 ubiquitination, but not degradation, causes remodeling of the mRNA 3′ end processing complex that leads to dissociation of CFIm25. 
所以，简单的使用siRNA删除PCF11并不能模拟MAGE-A11诱导的PCF11的泛素化。
Moreover, simple steady-state depletion of PCF11 by siRNA does not mimic the effect of MAGE-A11-induced ubiquitination of PCF11.


- Motif: UGUA集中在对MAGE-A11诱导3‘缩短敏感的基因中
Consistent with the dissociation of CFIm25 from RNAPII playing an important role in MAGE-A11-induced 3′ US, sequence analysis of MAGE-A11-sensitive transcripts revealed significantly more CFIm25 binding motifs (UGUA) compared to unaffected transcripts (Figure 5F).


- 位置分析发现，UGUA motif主要集中在对MAGE-A11敏感的基因的远端polyA site上游，而不是近端，或者不敏感的基因。
Furthermore, analysis of UGUA motif distribution near distal and proximal PASs, as described previously (Zhu et al., 2018), showed motif enrichment upstream of distal PASs in MAGE-A11-sensitive transcripts, but not proximal PASs or transcripts unaffected by MAGE-A11 (Figures 5G and S5C–S5F). 


Collectively, these findings provide insights into how PCF11 ubiquitination affects the mRNA 3′ end processing complex through loss of CFIm25 that leads to 3′ US of transcripts with enriched UGUA motifs upstream distal PASs. 




## 6.调控PCF11对于MAGE-A11介导的肿瘤和APA都是必须的

Regulation of PCF11 Is Essential for MAGE-A11-Induced Tumorigenesis and APA

 we identified a non-degradable PCF11 mutant. 


These results suggest that the ability of MAGE-A11 to regulate PCF11 is critical for its oncogenic activity.



## 7.MAGE-A11介导的3’UTR缩短，调控很多核心促瘤和抑瘤通路
MAGE-A11-Induced 3′ US Modulates Core Oncogenic and Tumor Suppressor Pathways

蛋白水平：
Consistent with previous results, PCF11 was downregulated upon MAGE-A11 expression (Figure 7A). 


3‘UTR缩短的转录本，包括CCND2，在MAGE-A11表达后上调。
More importantly, we found several 3′ US transcripts with altered protein levels, including the CCND2 (cyclin D2) oncogene that was upregulated upon MAGE-A11 expression (Figure 7A). 

- CCND2 基因：
As a member of the D-type cyclins, `cyclin D2 has been widely implicated in cell cycle transition, differentiation, and cellular transformation` (Evron et al., 2001, Sherr, 1995), and `its overexpression is highly correlated with poor prognosis in various cancers` (Mermelshtein et al., 2005, Sicinski et al., 1996, Takano et al., 1999, Takano et al., 2000). 


`Cyclin D-Cdk4/6 inactivates retinoblastoma (Rb) tumor suppressor` by progressive multi-phosphorylation to release transcription factors, such as E2F (Narasimha et al., 2014, Sherr, 1995). 

MAGE-A11 increased phospho-Rb (S807 and S811) in HEK293FT cells and MAGE-A11 expression in ovarian and lung squamous cell carcinoma patient tumor samples correlated with increased phospho-Rb (S807/811; Figures 7E, 7F, and S7B). 


CCND2对 MAGE-A11 促分裂有重要贡献。
Knockdown of cyclin D2 decreased proliferation of MAGE-A11 expressing DAOY, but not MAGE-A11 knockout DAOY (Figure 7G), thus implicating upregulation of cyclin D2 by MAGE-A11 as an important contributor to MAGE-A11-mediated cellular proliferation.


CCND2 3‘UTR过表达，其3’端可以作为miRNA、其他结合到CCND2转录本因子的海绵。
CCND2 在MAGE-A11阴性时，能上调cyclin D2蛋白水平，而MAGE-A11阳性细胞里则不行。
We found that expression of the CCND2 3′ UTR upregulated cyclin D2 protein levels in MAGE-A11-negative, but not MAGE-A11-positive, cells (Figures 7H and S7C).

- 为确定抑制cyclin D2的具体的miRNA，使用 TargetScan 分析，当CCND2 3’URT缩短后损失的，预测的miRNA结合位点。然后和miRNA表达数据集关联，识别相关的miRNA。
In order to determine which particular miRNA(s) might mediate cyclin D2 repression, we analyzed the predicted miRNA binding sites (`TargetScan`; Agarwal et al., 2015) lost upon CCND2 3′ US and correlated these to miRNA expression datasets (`miRmine`; Panwar et al., 2017) to identify relevant miRNAs.

Using this approach, we identified **miR-191-5p**, a previously reported miRNA targeting CCND2 (Di Leva et al., 2013), as a likely candidate. 

These results suggest that MAGE-A11-mediated 3′ US of CCND2 leads to increased cyclin D2 protein levels, in part through loss of miR-191-5p repression.


- we and others have also shown that these now-liberated miRNAs can downregulate competing endogenous mRNAs (`ceRNAs`) in trans (Park et al., 2018).
- 自己开发的方法，在MAGE-A11高表达的卵巢癌和肺鳞癌中，预测 3‘缩短与ceRNA伴侣的反式trans效应的，很多是肿瘤抑制子。 Using our previously established computational approach to predict the trans effect of 3′ US to their ceRNA partners (Park et al., 2018), we found that many 3′ US ceRNA partners in ovarian cancer or lung squamous cell carcinoma patient samples with high MAGE-A11 levels are tumor suppressors (Figure 7K). 

These results suggest that MAGE-A11-induced 3′ US has both cis and trans effects on oncogenes (cyclin D2) and tumor suppressors (PTEN), respectively, to alter key cell growth and signaling pathways.









# Discussion

## 1. APA概述
mRNA 3’端处理很重要。
哺乳动物基因大多有多个polyA 位点，APA通过3‘UTR长度不同，增加转录本多样性。
很多肿瘤中，通过APA 3'UTR大范围的缩短，但是肿瘤中造成APA的机制未知。本文提供了一个机制。

## 2. 机制描述1: PCF11的作用
- 肿瘤特异的E3泛素连接酶 MAGE-A11-HUWE1，调控PCF11泛素化，导致mRNA 3’处理复合体的变化，增多了肿瘤中的3‘UTR缩短。
- PCF11是很多人细胞和组织的 3’处理复合体的一个组分(Kamieniarz-Gdula et al., 2019).
- 和我们的发现一致，MAGE-A11介导的PCF11泛素化导致的表型，和miRNA KD PCF11不同。
- 进一步的，PCF11偶联mRNA 3‘处理和mRNA向外运输(Johnson et al., 2009) ，
- phosphorylation of PCF11 CID by WNK1 is critical for release of transcripts from chromatin-associated RNAPII (Volanakis et al., 2017).

Therefore, nuclear export of mature transcripts in tumor cells could potentially be regulated by MAGE-A11-mediated PCF11 ubiquitination.


## 3. 机制描述2: 脱离miRNA抑制剂ceRNA网络

- 研究 MAGE-A11介导的PCF11泛素化，受影响的基因有原癌基因和抑癌基因。
- First，原癌基因3’UTR 缩短导致高表达，是因为逃脱miRNA抑制。
短片段高表达很常见。Indeed, the alternative isoforms, especially shorter transcripts of genes encoding cyclin D1, cyclin D2, and FGF2, are more prominently detected in cancers compared to normal tissues (Mayr and Bartel, 2009).

- Furthermore，淋巴瘤中，cyclin D1的3‘UTR缩短和cyclinD1的高表达、高增殖相关(Rosenwald et al., 2003).
本研究发现，MAGE-A11导致 cyclin D2的3’缩短，而不是 cyclin D1或D3，导致蛋白升高。

这些研究表明: MAGE-A11能选择性的，通过调节肿瘤中3‘缩短来调控基因表达。


---
- Second，3’缩短在抑瘤的 ceRNA中有重要作用，in trans反式 (Park et al., 2018)。
- Intriguingly，肺癌和卵巢癌中，MAGE-A11表达后，3‘缩短的基因的ceRNA伴侣都富集在肿瘤抑制子上。
> Intriguingly, the ceRNA partners of 3′ US genes upon expression of MAGE-A11 are strongly enriched for tumor suppressors in lung squamous cell carcinoma (p = 1.93−26) and ovarian cancer (p = 7.71−21).

- Remarkably，那些都是重要的抑癌基因，比如PTEN。下调PTEN会导致Akt pro-survival signaling上调。


---
MAGE-A11 能通过APA顺式和反式调控基因表达。导致重编程重要的细胞信号通路，比如细胞周期和Akt通路，来驱动肿瘤进展。
These findings indicate MAGE-A11 may orchestrate gene expression changes in cis and in trans by modulating APA that results in reprogramming critical cellular signaling pathways, such as cell cycle and Akt signaling, to drive tumorigenesis. 


MAGE-A11 对肿瘤治疗的启示。
These findings may have important implications on therapeutic strategies for treating cancer, as MAGE-A11 expression status may confer predictive power to the response of cells against therapies, such as CDK4/6 inhibitors and AKT pathway inhibitors.



## 4. MAGE-A11的文献综述

已知，APA 在不同的组织和发育阶段不同，所以APA指纹，远端和近端的使用，可以被发现。
- 比如，相对于体细胞，male germ cell 相当多的APA现象导致很多转录本3’端缩短。
- 特别的，polyA site选择在male germ cell 中是独特的，会导致睾丸特异的转录本(Li et al., 2016, MacDonald, 2019, MacDonald and Redondo, 2002). 
- 没有完全理解，是什么导致的male germ cell中广泛的PolyA位点的改变，导致3‘缩短但是mRNA处理复合体可能有参与，包括CFIm(Edwalds-Gilbert et al., 1997, McMahon et al., 2006, Sartini et al., 2008, Takagaki and Manley, 1998). 

本发现表明，MAGE-A11-HUWE1对于male germ cell的APA可能很重要。

Consistently，HUWE1对精子发生过程中的分化和进入减数分裂很重要(Bose et al., 2017)。

Furthermore，我们认为 MAGE-A11诱导肿瘤中APA并不是新现象，而是MAGE-A11在肿瘤和生殖细胞中的一个保守功能。



## 5. 结尾: 泛素化调节mRNA3’端处理复合体来控制APA

Overall, our results suggest that dynamic regulation of the mRNA 3′ end processing machinery by ubiquitination can serve as a mechanism to control APA in various biological and pathological states.








# Methods
大半是实验方法，略过。这里只细看分析方法。

- DaPars	Xia et al., 2014	https://github.com/ZhengXia/dapars
- MAT3UTR	Park et al., 2018	https://github.com/thejustpark/MAT3UTR
- DESeq2	Anders and Huber, 2010	https://bioconductor.org/packages/release/bioc/html/DESeq2.html
- HTSeq	Anders et al., 2015	https://htseq.readthedocs.io/en/release_0.11.1/count.html


## RNA-seq

Total RNA was extracted from cultured cells or xenograft tumors using RNeasy kit (QIAGEN) according to manufacturer’s instructions. RNA quality was assessed by 2100 Bioanalyzer RNA 6000 Nano assay (Agilent). Libraries were prepared using `TruSeq Stranded mRNA kits` (Illumina) and subjected to 100 cycle paired-end sequencing on the Illumina HiSeq platform.



## TCGA 3′-UTR analysis

The original TCGA RNA-seq gene expression data were obtained from the UCSC Cancer Genomics Hub (CGHub). 
All of the patients in a tumor type were ranked based on the CPM (count per million) values of MAGE-A11 gene. `The top 10 most highly MAGE-A11-expressed patients and bottom 10 least MAGE-A11 expressed patients were chosen as two groups`. 
The significant dynamics 3′-UTR usage genes between these two groups will be identified if the mean percentage of distal polyA usage (PDUI) change between these two groups is larger than 0.2 and mean fold change is larger than 1.5, also the p value calculated from Student’s t test is less than 0.05. 
Finally, we observed MAGE-A11 promotes strong 3′-UTR shortening in two tumor types including ovarian cancer (OV) and lung squamous cell carcinoma (LUSC).

---

按照MAGE-A11基因表达量对样本排序。前10高的和后10低的作为2组。

显著的3‘UTR动态基因筛选标准:
- abs(delta(远端使用率)) >0.2
- mean FC >1.5
- t test P value < 0.05

最后发现，在2类肿瘤中MAGE-A11导致3’UTR缩短效应最显著:  ovarian cancer (OV) and lung squamous cell carcinoma (LUSC).



## RNA-seq data analysis

RNA from cells with MAGE-A11 knocked out or overexpressed, and PCF mutant-expressing cells and controls were sequenced by HiSeq. 
The raw paired-end RNA-seq reads were filtering out low-quality reads using Trim Galore, and then aligned to the human genome (hg19/GRCh37) using STAR version 2.5.2b (Dobin et al., 2013) using the following alignment parameters: `–outSAMtype BAM SortedByCoordinate –outSAMstrandField intronMotif –outFilterMultimapNmax 10 –outFilterMultimapScoreRange 1 –alignSJDBoverhangMin 1 –sjdbScore 2 –alignIntronMin 20 –alignSJoverhangMin 8`. 
The resulted BAM files were converted into `bedgraph format` using bedtools version 2.17.0 (Quinlan and Hall, 2010). 
For each gene, the read count were calculated by HTSeq (Anders et al., 2015), and then CPM values based on read count were used. 
The read coverage was visualized at UCSC Genome Browsers (Goldman et al., 2015).
Differential gene analysis was performed using DESeq2 (Anders and Huber, 2010).


---

工具列表: 
```
> Trim Galore -- STAR 
> > bedtools -- UCSC Genome Browsers
> > HTSeq -- DESeq2
```

---

1. star的参数的意义？
2. bam to bedgraph format using bedtools
3. UCSC 可视化 read coverage
4. 差异基因 DESeq2

2和3见 txtBlog NGS/本地可视化；
4 已知；
1见下文:
```
我的bam中使用的: VN:STAR_2.5.2b 
我的系统中 $ STAR --version  #STAR_2.5.2b

$ STAR --help
Usage: STAR  [options]... --genomeDir REFERENCE   --readFilesIn R1.fq R2.fq
Spliced Transcripts Alignment to a Reference (c) Alexander Dobin, 2009-2015

(1)–outSAMtype BAM SortedByCoordinate \ 输出格式，xx.sort.bam
(2)–outSAMstrandField intronMotif \ 是否过滤掉非常规intron
outSAMstrandField 默认None；字符类型string: Cufflinks-like strand field flag
- None       not used
- intronMotif strand derived from the intron motif. Reads with inconsistent and/or non-canonical introns are filtered out.

(3)–outFilterMultimapNmax 10 \ 【默认】 输出 多比对 reads上限；超过的不比对，只统计到 Log.final.out 中的 "mapped to too many loci"。
outFilterMultimapNmax 默认 10；整数类型int: maximum number of loci the read is allowed to map to. Alignments (all of them) will be output only if the read maps to no more loci than this value.
  Otherwise no alignments will be output, and the read will be counted as "mapped to too many loci" in the Log.final.out .

(4) –outFilterMultimapScoreRange 1 \ 【默认】 输出结果??
outFilterMultimapScoreRange  默认 1；整型int: the score range below the maximum score for multimapping alignments

(5)–alignSJDBoverhangMin 1 \ 注释剪切比对时 overhang最小距离 ??
alignSJDBoverhangMin 默认 3; 正整数 int>0: minimum overhang (i.e. block size) for annotated (sjdb) spliced alignments

(6) –sjdbScore 2 \ 【默认值】 跨过数据库紧邻区域的额外比对分数
sjdbScore 默认 2; 整数int: extra alignment score for alignmets that cross database junctions

(7) –alignIntronMin 20 \ 最小内含子长度，超过这个范围认为是intron，短于则认为是删除。
alignIntronMin 默认 21; 最小内含子长度 minimum intron size: genomic gap is considered intron if its length>=alignIntronMin, otherwise it is considered Deletion

(8) –alignSJoverhangMin 8 \ 剪切比对最小overhang??
alignSJoverhangMin 默认5； 正整数int>0: minimum overhang (i.e. block size) for spliced alignments
```



## DaPars analysis

DaPars (Feng et al., 2018, Xia et al., 2014) was used to identify the most significant APA events between two conditions. We require that significant APA events should meet three criteria. First, the adjusted p value of PDUI differences was controlled at 5%. Second, the absolute mean difference of PDUI must be no less than 0.2. Third, the mean PDUI fold change must be no less than 1.5.

---
X. Feng, L. Li, E.J. Wagner, W. Li
TC3A: The Cancer 3′ UTR Atlas
Nucleic Acids Res., 46 (D1) (2018), pp. D1027-D1030
不一定能打开 http://tc3a.org/

比较2组间的显著的APA事件，
3个筛选标准: adj p值<0.05, abs(delta(PDUI))>=0.2, mean PDUI fold change >=1.5




## CFIm25 motif analysis

MAGE-A11 sensitive transcripts were defined as those transcripts with significant 3′-US upon MAGE-A11 overexpression, while MAGE-A11 insensitive transcripts were an equal number of randomly selected unaffected transcripts (PDUI differences less than 0.05; p value larger than 0.5). 
For each DaPars predicted PAS, the nearest annotated PAS was defined as the true PAS. 
`The annotated PASs were compiled from multiple domains including Refseq, ENSEMBL, UCSC gene models and PolyA_DB version 3` (Wang et al., 2018) databases. 
The sequences of 200 nucleotides upstream and downstream of the PASs were used for motif analysis. 
The CFIm25 motif density was calculated by counting the number of UGUA motif (smoothed over 7 nucleotide) along these specified annotation features, which included proximal and distal PAS.

- MAGE-A11敏感的转录本的定义：MAGE-A11高表达时有显著的3‘UTR缩短的转录本。
- MAGE-A11不敏感的转录本，是同等数量的随机挑选的不受影响的转录本( abs(delta(PDUI))<=0.05, p>0.5).
- 对于每个DaPars预测到的polyA site，它最近的注释的polyA site被定义为 真的polyA site。
- 注释的polyA site 汇编自 Refseq, ENSEMBL, UCSC gene models 及 PolyA_DB3.
- polyA site上下游200nt序列用来做motif分析。
- CFIm25 motif 密度的计算：沿着指定的注释特征，计数 UGUA motif(7nt平滑化)，包括近端和远端polyA site。


---
最后一行没太懂，密度怎么计算的，怎么 along these specified annotation features //todo??

![fig 5F](/data/2021/images/05/0517_fig5f.png)

> Figure 5. MAGE-A11-Induced PCF11 Ubiquitination Dissociates CFIm25 from RNAPII
> (F) The number of UGUA motifs within 3′ US or unaffected transcripts in MAGE-A11 overexpressing HEK293FT cells. Equal numbers of transcripts with no 3′ UTR changes were randomly selected.



## Trans-effect analysis of 3′-US

We used `MAT3UTR` (Park et al., 2018) for the detection of trans-effect of MAGEA11-induced 3′-UTR shortening in ceRNA in two tumor types OV and LUSC. 
The Briefly, MAT3UTR can predict ceRNA partner expression changes by using its 3′-UTR shortening gene expression, 3′-UTR shortening gene level, microRNA binding sites and miRNA expression. 
The ` miRNA binding sites were compiled from a collection of TarBase, miRecords, miRTarBase and predicted miRNA-binding sites from TargetScanHuman version 6.2`. 
Exon and CDS annotation for TCGA and miRNA expression were downloaded from `Xena UCSC Genome browsers`. 
The enrichment of ceRNA partner genes with tumor suppressor gene (TSG) and oncogene (OG) was calculated by fisher exact test. 
The annotation of TSG and OG were from `TUSON prediction` (Davoli et al., 2013) with top 500 genes (p < 0.01) selected.

---
H.J. Park, P. Ji, S. Kim, Z. Xia, B. Rodriguez, L. Li, J. Su, K. Chen, C.P. Masamha, D. Baillat, et al.
3′ UTR shortening represses tumor-suppressor genes in trans by disrupting ceRNA crosstalk
Nat. Genet., 50 (2018), pp. 783-789
https://github.com/thejustpark/MAT3UTR
> http://162.105.205.69/index.php?s=/Index/scientific/id/2169/cid/12.html
> 最后，可变聚腺苷酸化（alternative polyadenylation）导致的3'UTR缩短主要是通过破坏竞争性内源RNA (ceRNA) cross talk来反式抑制肿瘤抑制基因而不是顺式增强癌基因的表达。李教授组开发了名为MAT3UTR的生物信息软件来预测3'UTR缩短的反式靶标（Nature 2014; Nature Genetics 2018）。

---
Xena UCSC Genome browsers
http://xena.ucsc.edu/

---
T. Davoli, A.W. Xu, K.E. Mengwasser, L.M. Sack, J.C. Yoon, P.J. Park, S.J. Elledge
Cumulative haploinsufficiency and triplosensitivity drive aneuploidy patterns and shape the cancer genome
Cell, 155 (2013), pp. 948-962





## Data and Code Availability

Proteomics data are available at MassIVE MSV000084123. 
RNA-seq data are available at NCBI GEO: GSE134898.


















# 英语学习

##   熟词新意

Moreover, this effect was more `pronounced` in comparison to siRNA-mediated knockdown of PCF11.

pronounced [prəˈnaʊnst]  adj. 显著的；断然的；讲出来的
vt. 发音；宣告；断言（pronounce 的过去式和过去分词）
vi. 发音；作出判断（pronounce 的过去式和过去分词）


## 生词
endogenous [enˈdɒdʒənəs] adj. [生物] 内生的；内因性的
stoichiometric [ˌstɔɪkɪəˈmetrɪk] adj. 化学计量的；化学计算的




> 2021.5.20 End Reading.