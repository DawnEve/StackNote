APA & cell cycle


> GEO 数据比对结果查看：http://blog2.dawneve.cc/index.php?k=BMMC&id=2_2



# 关于 Fucci 技术查看 活细胞细胞周期

- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5724894/

Sorting U2OS and HeLa cells genetically modified with the Fucci System allowed us to separate cells according to cell cycle progression followed by RNA Sequencing to characterize the oscillating transcriptome in cells without the need for chemical synchronization.

HeLa cells were sorted at three timepoints, while U2OS cells were sorted at two timepoints. Each time into three groups, categorized as "G1", "S", and "G2".



## Fucci-based separation of cell cycle phases and deep RNA sequencing

To characterize the relationship of the Fucci probes to the mitotic cell cycle, we analyzed chromatin content and DNA replication status and visualized it overlaid on Fucci reporter fluorescence, Panel A in S1 Fig. 

This experiment establishes that the majority of actively replicating cells are mAG-hGem+, mKO2-hCdt1+. 

We then used Fucci reporters to sort live, unsynchronized cells into discrete populations corresponding to non-replicating 1X-chromatin cells (G1-phase), actively replicating cells (S-phase) and non-replicating 2X-chromatin cells (G2/M-phase) by flow cytometry (Fig 1A and 1B, S1 Table). 



## Cell culture

HeLa.S-Fucci and U2OS-Fucci are variants of the human cervical carcinoma cell line HeLa.S and the osteosarcoma cell line U2OS that express mKo2-hCdt1(30–120) and mAg-hGem(1–110)[20].

来源：买的，或要的。
The HeLa.S-Fucci cell line was obtained from Riken Cell Bank, and the U2OS-Fucci cell line was a kind gift from Dr. Masai at the Tokyo Metropolitan Institute of Medical Science, Japan.

> 20. Sakaue-Sawano A, Kurokawa H, Morimura T, Hanyu A, Hama H, Osawa H, et al. Visualizing spatiotemporal dynamics of multicellular cell-cycle progression. Cell. 2008;132(3):487–98.




## 产品网页

- https://lifescience.evidentscientific.com.cn/zh/applications/fucci_ca_fv3000/




# paper

List of genes involved in motility that are altered with CstF64 knockdown

- https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6203201/
- Alternative polyadenylation (Relative usage of distal site)	

MAP4, SP100, DYNC1I2, TBX5, OSBPL8, RBFOX2, BMPR1A, LAMA4, DOCK7, RAP2C, RHOT1, LAMC1, ACTR2, IQGAP1, RHOT2, APP, LMO4, CERS2, GNA12, EGFR, WASF2, AMFR, SUN1, AMOTL1, STAT3, BSG, EXT1, COL18A1, NTF3, SIAH1, DPP4, EMP2




# BMMC dataset from 10x

```
On Z server: /data/wangjl/BMMC/merge/data/cid_AML035_cluster19.txt
1.after Seurat cluster

sample cluster cellNumber
ctrl1 	 12  133
ctrl1 	 19  79
ctrl1 	 20  118
ctrl2 	 12  92
ctrl2 	 19  97
ctrl2 	 20  77
AML027 	 12  245
AML027 	 19  12
AML027 	 20  72
AML035 	 12  403
AML035 	 19  167
AML035 	 20  80


2. split bam by cid

$ samtools --version
samtools 1.16.1-43-g11f9bdc-dirty
Using htslib 1.16-32-gd7737aa
Copyright (C) 2022 Genome Research Ltd.

$ cd /data/wangjl/BMMC/merge/bam

-rw-rw-r--. 1 wangjl wangjl 22G May  9  2017 /data/wangjl/BMMC/donor1/frozen_bmmc_healthy_donor1_possorted_genome_bam.bam
$ samtools view  /data/wangjl/BMMC/donor1/frozen_bmmc_healthy_donor1_possorted_genome_bam.bam | head

样品1： 22G
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid_ctrl1_cluster${i}.txt -o donor1_cluster${i}.bam \
	/data/wangjl/BMMC/donor1/frozen_bmmc_healthy_donor1_possorted_genome_bam.bam
done;

样品2： 19G
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid_ctrl2_cluster${i}.txt -o donor2_cluster${i}.bam \
/data/wangjl/BMMC/donor2/frozen_bmmc_healthy_donor2_possorted_genome_bam.bam
done;

样品3： 20G
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid_AML027_cluster${i}.txt -o AML027_cluster${i}.bam \
/data/wangjl/BMMC/AML027_pre/aml027_pre_transplant_possorted_genome_bam.bam
done;

样品4： 5.7G
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid_AML035_cluster${i}.txt -o AML035_cluster${i}.bam \
/data/wangjl/BMMC/AML035_pre/aml035_pre_transplant_possorted_genome_bam.bam
done;


3. index
$ ls *bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

4. 启动服务
$ python3 /home/wangjl/data/software/DaisyHttp/DaisyHttp.py 8893 /data/wangjl/BMMC/merge/bam
开端口
$ sudo iptables -I INPUT -p tcp --dport 8893 -j ACCEPT 


5. 到Y station 使用 scIGV 查看
浏览器查看: http://y.biomooc.com:9000/list/index5_9.html
```




split by NUDT21

```
$ cd /data/wangjl/BMMC/merge/bam2/


样品1: 22G run
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid.NUDT21.low_ctrl1_cluster${i}.txt -o donor1_cluster${i}.low.bam \
	/data/wangjl/BMMC/donor1/frozen_bmmc_healthy_donor1_possorted_genome_bam.bam;
samtools view -@ 50 -D CB:../data/cid.NUDT21.hi_ctrl1_cluster${i}.txt -o donor1_cluster${i}.hi.bam \
	/data/wangjl/BMMC/donor1/frozen_bmmc_healthy_donor1_possorted_genome_bam.bam;
done;

简化版: 从之前的小bam中再次拆分
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid.NUDT21.low_ctrl1_cluster${i}.txt -o s_donor1_cluster${i}.low.bam \
/data/wangjl/BMMC/merge/bam/donor1_cluster${i}.bam;
samtools view -@ 50 -D CB:../data/cid.NUDT21.hi_ctrl1_cluster${i}.txt -o s_donor1_cluster${i}.hi.bam \
/data/wangjl/BMMC/merge/bam/donor1_cluster${i}.bam;
done;

验证: 基本一致。
1.替换大bam
2.添加 cid  .NUDT21.low, .low
3.输出添加 s_ 前缀

样品2： 19G simple run
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid.NUDT21.low_ctrl2_cluster${i}.txt -o s_donor2_cluster${i}.low.bam \
/data/wangjl/BMMC/merge/bam/donor2_cluster${i}.bam;
samtools view -@ 50 -D CB:../data/cid.NUDT21.hi_ctrl2_cluster${i}.txt -o s_donor2_cluster${i}.hi.bam \
/data/wangjl/BMMC/merge/bam/donor2_cluster${i}.bam;
done;

样品3： 20G simple run
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid.NUDT21.low_AML027_cluster${i}.txt -o s_AML027_cluster${i}.low.bam \
/data/wangjl/BMMC/merge/bam/AML027_cluster${i}.bam;
samtools view -@ 50 -D CB:../data/cid.NUDT21.hi_AML027_cluster${i}.txt -o s_AML027_cluster${i}.hi.bam \
/data/wangjl/BMMC/merge/bam/AML027_cluster${i}.bam;
done;

样品4： 5.7G simple
$ for i in 12 19 20; do echo $i `date`;
samtools view -@ 50 -D CB:../data/cid.NUDT21.low_AML035_cluster${i}.txt -o s_AML035_cluster${i}.low.bam \
/data/wangjl/BMMC/merge/bam/AML035_cluster${i}.bam;
samtools view -@ 50 -D CB:../data/cid.NUDT21.hi_AML035_cluster${i}.txt -o s_AML035_cluster${i}.hi.bam \
/data/wangjl/BMMC/merge/bam/AML035_cluster${i}.bam;
done;

3. index
$ ls *bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

4. 启动服务
$ python3 /home/wangjl/data/software/DaisyHttp/DaisyHttp.py 8893 /data/wangjl/BMMC/merge/bam
开端口
$ sudo iptables -I INPUT -p tcp --dport 8893 -j ACCEPT 


5. 到Y station 使用 scIGV 查看
浏览器查看: http://y.biomooc.com:9000/list/index5_9B.html
```






# 基金 标题 整合

```
$ find . | xargs grep -i "白血病" 2>/dev/null --color=auto | grep "单细胞" | grep "细胞周期"


txtBlog2 ./Project/104_job.txt:关键词: 
txtBlog2 ./Project/102_fund.txt:127:基金申请：APA + AML + 细胞周期
txtBlog2 ./Paper/PHD2023_note.txt:关键词: 单细胞测序；单细胞测序方法；单细胞转录组测序；单细胞多聚腺苷酸化测序；可选择性多聚腺苷酸化；细胞周期
```

> 关键词： 单细胞 + 白血病 + 细胞周期
> 博士课题：单细胞多聚腺苷酸化测序方法的构建及其在细胞周期动态分析中的应用研究


## 可能的题目

- 利用高通量单细胞RNA测序解析慢性粒单核细胞白血病特异分子标记物

```
急性髓系白血病中细胞周期异常的多聚腺苷酸化机制研究

急性髓系白血病中细胞周期异常的APA机制研究


单细胞水平调控AML增殖的多聚腺苷酸化位点的筛选及分子机制的研究


另一个项目：SCCPDH 通过 APA 调控白血病造血干细胞的增值和分化研究
	SCCPDH 通过选择性多聚腺苷酸化调控造血祖细胞增殖的机制研究
```


可能的机制
- AML 分化异常，持续分裂，可能和细胞周期失调密切相关。
- 已有研究发现，多种肿瘤中细胞周期相关的APA表现异常，但是白血病中具体的异常基因，及其机制还不清楚。
- 本研究将研究：1.不同细胞亚群中



急性髓系白血病(AML)是一种以髓系造血干/祖细胞异常增殖和分化障碍为主要特征的血液系统恶性肿瘤,是成人急性白血病中最常见、病死率最高的一种[1]。





## AML + APA in pubmed


### (1) MDS to AML 的 APA 机制 (Neoplasma. 2023, IF=3.4)
> Neoplasma. 2023 Jun;70(3):350-360. doi: 10.4149/neo_2023_230115N27.
> A new pathway for the transformation of AML in MDS: APA mechanism regulated by NUDT21 and RUNX1
> https://pubmed.ncbi.nlm.nih.gov/37498064/
> Shanxi Medical University, Taiyuan, China.

Using lentiviral packaging technology, NUDT21 knockdown and overexpression models were developed in AML and MDS cell lines.

The cell cycle, apoptosis, differentiation, and cytokines were examined by flow cytometry, CCK-8 analyzed proliferation, and the intracellular localization of NUDT21 and RUNX1 was examined by immunofluorescence. 



### (2) AML scRNA-seq APA (RNA Biol. 2019, IF=4.7)
> RNA Biol. 2019 Jun;16(6):785-797. doi: 10.1080/15476286.2019.1586139. Epub 2019 Mar 13.
> Role of alternative polyadenylation dynamics in acute myeloid leukaemia at single-cell resolution
> https://pubmed.ncbi.nlm.nih.gov/30810468/

Genes with APA dynamics specific to the AML samples were significantly enriched in cellular signal transduction pathways that contribute to AML development. Moreover, many leukaemic cell marker genes such as `NF-κB`, GATA2 and IAP-Family genes exhibited APA dynamics that specifically affected abnormal proliferation and differentiation of leukemic BMMCs. 

Additionally, mature erythroid cells displayed greater APA dynamics and global 3' UTR shortening compared with other cell types. 




### (3) APA 异常导致AML分化障碍 (Blood. 2022, IF=25.4)
> Blood. 2022 Jan 20;139(3):424-438. doi: 10.1182/blood.2020005693.
> Alternative polyadenylation dysregulation contributes to the differentiation block of acute myeloid leukemia
> 1. Moores Cancer Center and.
> 2. Division of Biological Sciences, University of California San Diego, La Jolla, CA.
> https://pubmed.ncbi.nlm.nih.gov/34482400/












# E2F 介导细胞分裂中 增强的APA (Genome Biol. 2012)
> Genome Biol. 2012 Jul 2;13(7):R59. doi: 10.1186/gb-2012-13-7-r59.
> E2F mediates enhanced alternative polyadenylation in proliferation
> https://pubmed.ncbi.nlm.nih.gov/22747694/


Abstract
Background: The majority of mammalian genes contain multiple poly(A) sites in their 3' UTRs. Alternative cleavage and polyadenylation are emerging as an important layer of gene regulation as they generate transcript isoforms that differ in their 3' UTRs, thereby modulating genes' response to 3' UTR-mediated regulation. 
增强的3UTR近端切割，导致全局3UTR缩短，最近偶联到分裂和癌症。调控这个的机制未知。
Enhanced cleavage at 3' UTR proximal poly(A) sites resulting in global 3' UTR shortening was recently linked to proliferation and cancer. However, mechanisms that regulate this enhanced alternative polyadenylation are unknown.


Results: Here, we explored, on a transcriptome-wide scale, alternative polyadenylation events associated with cellular proliferation and neoplastic transformation. 

识别和定量pA位点，2个人类细胞模型：分裂、阻滞、转化状态。
We applied a deep-sequencing technique for identification and quantification of poly(A) sites to two human cellular models, each examined under proliferative, arrested and transformed states. 

2个细胞模型观察到：全局3UTR变短 偶联 分裂，比 转化 相关性强。
In both cell systems we observed global 3' UTR shortening associated with proliferation, a link that was markedly stronger than the association with transformation. 

进一步：分裂和 内含子 pA 相关。
Furthermore, we found that proliferation is also associated with enhanced cleavage at intronic poly(A) sites. 

分裂细胞中 3’端处理蛋白集 上调，E2F 转录因子促进该调控。
Last, we found that the expression level of the set of genes that encode for 3'-end processing proteins is globally elevated in proliferation, and that E2F transcription factors contribute to this regulation.


结论: APA 关联 细胞分裂 和 转化，分裂 增强APA：3UTR缩短 及 内含子剪切。
Conclusions: Our results comprehensively identify alternative polyadenylation events associated with cellular proliferation and transformation, and demonstrate that the enhanced alternative polyadenylation in proliferative conditions results not only in global 3' UTR shortening but also in enhanced premature cleavage in introns. 

提示 E2F 介导的 3’端 共转录调控 是连接 APA 和 分裂的一个机制。
Our results also indicate that E2F-mediated co-transcriptional regulation of 3'-end processing genes is one of the mechanisms that links enhanced alternative polyadenylation to proliferation.

- neoplastic [ˌniːəʊˈplæstɪk] adj. [肿瘤] 瘤的；新造型主义的



##  什么是转化 transformation ? //todo
- oncogenic transformation [18]

> 18. Mayr C, Bartel DP. Widespread shortening of 3'UTRs by alternative cleavage and polyadenylation activates oncogenes in cancer cells. Cell. 2009;138:673–684. doi: 10.1016/j.cell.2009.06.016.
> https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2819821/

- neoplastic transformation. 
- These samples included 22 cancer cell lines, one cancer sample, five non-transformed cell lines, ten samples derived from blood cells and 97 tissues.

BJ-EHT/p53kd/p16kd/RASGV12ER cells expressing shRNA constructs targeting p53 and p16INK4A and 4-hydroxy-tamoxifen (4-OHT)-inducible oncogenic HRASG12V were cultured for 3 days in the presence of 100 nM 4-OHT to `transform the cells`. These cell lines are described in detail in [23]. `BJ-EHT cells were transfected` in a final concentration of 50 nM small interfering RNAs targeting E2F1 (targeting sequence 5′-GGCCCGAUCGAUGUUUUCC-3′) and E2F2 (targeting sequence 5′-GACUCGGUAUGACACUUCG-3′) using Dharmafect reagent (Dharmacon, Lafayette, Colorado, USA).
`siRNA 19nt 长`

> 23. Voorhoeve PM, Agami R. The tumor-suppressive functions of the human INK4A locus. Cancer Cell. 2003;4:311–319. doi: 10.1016/S1535-6108(03)00223-X.


To `transform the MCF10A cells`, we transduced them with a retroviral vector expressing RASG12VER, and cultured them for 2 and 8 days in the presence of 100 nM 4-OHT.

### 4-OHT: (Z)-4-羟三苯氧胺
别名: (Z)-4-(1-[4-(二甲氨基乙氧基)苯基]-2-苯基-1-丁烯基)苯酚, (Z)-4-OHT, 反式-4-羟三苯氧胺



- The shorter isoform was not only able to transform fibroblasts but also human breast epithelial cell lines (Figure S7).








## 3'-end processing proteins 是啥？

Fig. 6 E2F-mediated regulation of APA in proliferation. 

x轴: CSTF1, CSTF2, CSTF3, CPSF2, CPSF3, CPSF4, CSTF2T, PCF11(不显著), MCM2(pos ctrl), (neg1, neg2)
y轴: 0-1.2, MCM2 做 pos ctrl, p53 合成启动子作为 neg ctrl.
(e) Effect of knocking down E2F1 on promoter activity of eight 3'-end processing genes assessed using reporter assays. MCM2 served as positive control and an artificial p53 promoter was used as a negative one. *P < 0.05, **P < 0.01. Error bars represent SEM. 


展示的基因: TMEM119, PTGS1, FAM100B(新基因名 UBALD2);
(g) The effect of knocking down E2F1+2 on the relative usage of 3' UTR proximal and distal CSs in three transcripts that showed enhanced usage of the proximal CSs in proliferation was examined using 3'-qPCR (Materials and methods). In all three cases examined, reducing E2F levels increased the relative cleavage at the distal site (namely, reduced the cleavage at the proximal one). Results shown are based on duplicates; in all cases, P < 0.05, one-tail t-test).
降低 E2F 水平，会增加 distal pA(也就是 降低 p pA).










# 晚期前列腺癌： 使用靶向剪切的药物 导致 内含子保留 (J Exp Clin Cancer Res. 2024, IF=12.66)
> Splicing targeting drugs highlight intron retention as an actionable vulnerability in advanced prostate cancer
> Chiara Naro  1   2 , Ambra Antonioni  1 , ..., Maria Paola Paronetto  5   6 , Claudio Sette  7   8
> 1 Department of Neuroscience, Section of Human Anatomy, Catholic University of the Sacred Heart, Largo Francesco Vito 1, 00168, Rome, Italy.
> https://pubmed.ncbi.nlm.nih.gov/38413979/

Advanced prostate cancer (PC) is characterized by insensitivity to androgen deprivation therapy and chemotherapy, resulting in poor outcome for most patients.

对细胞系使用三个药物：
three splicing-targeting drugs: Pladienolide B, indisulam and THZ531. 

> Pladienolide B 是一种大环内酯,可选择性结合剪接因子 3b 并抑制 mRNA 剪接。通过这种作用,pladienolide B 有效地阻止增殖细胞的生长
> Indisulam是一种碳酸酐酶抑制剂和抗肿瘤CDK抑制剂。Indisulam针对细胞周期的G1期,通过耗尽细胞周期蛋白E,诱导p53和p21,并抑制CDK2,导致G1/S转换受阻。
> THZ531是CDK12和CDK13的选择性抑制剂,IC50值分别为158 nM和69 nM。


Importantly, we identified PC-relevant genes (i.e. EZH2, MDM4) whose drug-induced splicing alteration exerts an impact on cell survival. 

Moreover, computational analyses uncovered a widespread impact of splicing-targeting drugs on intron retention, with enrichment in genes implicated in pre-mRNA 3'-end processing (i.e. CSTF3, PCF11). 

对APA抑制剂敏感，可增强正在使用的化疗药物。
Coherently, advanced PC cells displayed high sensitivity to a specific inhibitor of the cleavage and polyadenylation complex, which enhances the effects of chemotherapeutic drugs that are already in use for this cancer.


