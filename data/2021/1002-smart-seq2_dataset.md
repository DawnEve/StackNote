# 目的

查找 Smart-seq2 数据集，人鼠都可以。最好是细胞系的。

查找范围： NCBI，GEO 等不限。

在SRA搜索：
https://www.ncbi.nlm.nih.gov/sra/?term=(smart_seq2)+AND+%22Homo+sapiens%22%5Borgn%3A__txid9606%5D

按照sample查找GEO: 
https://www.ncbi.nlm.nih.gov/geo/browse/?view=samples&search=Smart-seq2&sort=tax&display=100&page=7



## 初步结果



```
pubmed 搜索:
smart-seq2 HeLa: 0个
smart seq2 HeLa: 0个

smart-seq2 breast cancer: 2个
	- https://pubmed.ncbi.nlm.nih.gov/29069469/
	- https://pubmed.ncbi.nlm.nih.gov/33575084/

Smart seq2: 70个

smart seq2 cell line: 10个
	- https://pubmed.ncbi.nlm.nih.gov/28249587/ 
		* [Genome Biology](https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE85534): HEK293, K562
	- https://www.ncbi.nlm.nih.gov/labs/pmc/articles/PMC6572856/ NO data
	- https://pubmed.ncbi.nlm.nih.gov/31314649/ No data
	- https://pubmed.ncbi.nlm.nih.gov/29186152/ bam: SRP107036
		* https://www.ncbi.nlm.nih.gov/sra/?term=SRP107036
		* non-small-cell lung cancer cell lines (NCI-H1650 and NCI-H1975); HCT-116; 
	- https://pubmed.ncbi.nlm.nih.gov/30961669/ 华大测序仪效果比较
		* The plate-based Smart-seq2 scRNA-seq runs using mESC and K562 cells and ERCCs spike-ins: BioProject (#PRJNA430491), SRP132313
```



# 详情(二级标题表示有data)

`https://pubmed.ncbi.nlm.nih.gov/?term=Smart+seq2&size=100`: 70

`https://pubmed.ncbi.nlm.nih.gov/?term=smart-seq2&size=100`: 68



1: Picelli S, Faridani OR, Björklund AK, Winberg G, Sagasser S, Sandberg R.
Full-length RNA-seq from single cells using Smart-seq2. Nat Protoc. 2014
Jan;9(1):171-81. doi: 10.1038/nprot.2014.006. Epub 2014 Jan 2. PMID: 24385147.

//Your institute does not have access to this article



2: Picelli S, Björklund ÅK, Faridani OR, Sagasser S, Winberg G, Sandberg R.
Smart-seq2 for sensitive full-length transcriptome profiling in single cells.
Nat Methods. 2013 Nov;10(11):1096-8. doi: 10.1038/nmeth.2639. Epub 2013 Sep 22.
PMID: 24056875.

//Your institute does not have access to this article



## 3: 比较学研究 mESC (Mol Cell 2017)

3: Ziegenhain C, Vieth B, Parekh S, Reinius B, Guillaumet-Adkins A, Smets M,
Leonhardt H, Heyn H, Hellmann I, Enard W. Comparative Analysis of Single-Cell
RNA Sequencing Methods. Mol Cell. 2017 Feb 16;65(4):631-643.e4. doi:
10.1016/j.molcel.2017.01.023. PMID: 28212749.

> https://pubmed.ncbi.nlm.nih.gov/28212749/
>
> https://linkinghub.elsevier.com/retrieve/pii/S1097-2765(17)30049-7

---

```
6 Methods: CEL-seq2, Drop-seq, MARS-seq, SCRB-seq, Smart-seq, and Smart-seq2. 
Cell type: 583 mouse embryonic stem cells

data https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE75790
mESC, 共157 个。

GSM2220598	SmartSeq2A_A1
...
GSM2220754	SmartSeq2B_H9

```



4: Picelli S. Full-Length Single-Cell RNA Sequencing with Smart-seq2. Methods
Mol Biol. 2019;1979:25-44. doi: 10.1007/978-1-4939-9240-9_3. PMID: 31028630.

//方法书。
// Among the latter, Smart-seq2 is still considered the “gold standard” due to its sensitivity, precision, lower cost, scalability and for being easy to set up on automated platforms. 


## 5: 激光显微镜 + smart-seq2 做空间转录组
5: Nichterwitz S, Chen G, Aguila Benitez J, Yilmaz M, Storvall H, Cao M,
Sandberg R, Deng Q, Hedlund E. Laser capture microscopy coupled with Smart-seq2
for precise spatial transcriptomic profiling. Nat Commun. 2016 Jul 8;7:12139.
doi: 10.1038/ncomms12139. PMID: 27387371; PMCID: PMC4941116.

`https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE76514`
//We started with capturing 120 cells and subsequently scaled down to 50 cells, 30 cells, 10 cells, 5 cells, 2 cells and finally 1 cell. 
不适合使用。细胞太少。

//We applied LCM-seq to **mouse and human neuron samples**, and demonstrated that LCM-seq can allow us to acquire high quality RNA-seq data from mouse and human tissues to conduct various transcriptomic studies.



6: Hashimshony T, Senderovich N, Avital G, Klochendler A, de Leeuw Y, Anavy L,
Gennert D, Li S, Livak KJ, Rozenblatt-Rosen O, Dor Y, Regev A, Yanai I. CEL-
Seq2: sensitive highly-multiplexed single-cell RNA-Seq. Genome Biol. 2016 Apr
28;17:77. doi: 10.1186/s13059-016-0938-8. PMID: 27121950; PMCID: PMC4848782.




7: Jaeger BN, Yángüez E, Gesuita L, Denoth-Lippuner A, Kruse M, Karayannis T,
Jessberger S. Miniaturization of Smart-seq2 for Single-Cell and Single-Nucleus
RNA Sequencing. STAR Protoc. 2020 Sep 18;1(2):100081. doi:
10.1016/j.xpro.2020.100081. PMID: 33000004; PMCID: PMC7501729.

8: Hagemann-Jensen M, Ziegenhain C, Chen P, Ramsköld D, Hendriks GJ, Larsson
AJM, Faridani OR, Sandberg R. Single-cell RNA counting at allele and isoform
resolution using Smart-seq3. Nat Biotechnol. 2020 Jun;38(6):708-714. doi:
10.1038/s41587-020-0497-0. Epub 2020 May 4. PMID: 32518404.

9: Baran-Gale J, Chandra T, Kirschner K. Experimental design for single-cell RNA
sequencing. Brief Funct Genomics. 2018 Jul 1;17(4):233-239. doi:
10.1093/bfgp/elx035. PMID: 29126257; PMCID: PMC6063265.

10: Picelli S. Single-cell RNA-sequencing: The future of genome biology is now.
RNA Biol. 2017 May 4;14(5):637-650. doi: 10.1080/15476286.2016.1201618. Epub
2016 Jul 21. PMID: 27442339; PMCID: PMC5449089.

11: Serra L, Chang DZ, Macchietto M, Williams K, Murad R, Lu D, Dillman AR,
Mortazavi A. Adapting the Smart-seq2 Protocol for Robust Single Worm RNA-seq.
Bio Protoc. 2018 Feb 20;8(4):e2729. doi: 10.21769/BioProtoc.2729. PMID:
29564372; PMCID: PMC5857950.

12: Chang D, Serra L, Lu D, Mortazavi A, Dillman A. A Revised Adaptation of the
Smart-Seq2 Protocol for Single-Nematode RNA-Seq. Methods Mol Biol.
2021;2170:79-99. doi: 10.1007/978-1-0716-0743-5_6. PMID: 32797452.

13: Krishnaswami SR, Grindberg RV, Novotny M, Venepally P, Lacar B, Bhutani K,
Linker SB, Pham S, Erwin JA, Miller JA, Hodge R, McCarthy JK, Kelder M,
McCorrison J, Aevermann BD, Fuertes FD, Scheuermann RH, Lee J, Lein ES, Schork
N, McConnell MJ, Gage FH, Lasken RS. Using single nuclei for RNA-seq to capture
the transcriptome of postmortem neurons. Nat Protoc. 2016 Mar;11(3):499-524.
doi: 10.1038/nprot.2016.015. Epub 2016 Feb 18. PMID: 26890679; PMCID:
PMC4941947.

14: van Kuijk K, Kuppe C, Betsholtz C, Vanlandewijck M, Kramann R, Sluimer JC.
Heterogeneity and plasticity in healthy and atherosclerotic vasculature explored
by single-cell sequencing. Cardiovasc Res. 2019 Oct 1;115(12):1705-1715. doi:
10.1093/cvr/cvz185. PMID: 31350876; PMCID: PMC6873093.

15: Yamazaki M, Hosokawa M, Arikawa K, Takahashi K, Sakanashi C, Yoda T,
Matsunaga H, Takeyama H. Effective microtissue RNA extraction coupled with
Smart-seq2 for reproducible and robust spatial transcriptome analysis. Sci Rep.
2020 Apr 27;10(1):7083. doi: 10.1038/s41598-020-63495-6. PMID: 32341421; PMCID:
PMC7184581.

16: Zhang F, Bai H, Gao R, Fei K, Duan J, Zhang Z, Wang J, Hu X. Dynamics of
peripheral T cell clones during PD-1 blockade in non-small cell lung cancer.
Cancer Immunol Immunother. 2020 Dec;69(12):2599-2611. doi:
10.1007/s00262-020-02642-4. Epub 2020 Jun 26. PMID: 32591861.

17: Zhang Y, Zheng L, Zhang L, Hu X, Ren X, Zhang Z. Deep single-cell RNA
sequencing data of individual T cells from treatment-naïve colorectal cancer
patients. Sci Data. 2019 Jul 24;6(1):131. doi: 10.1038/s41597-019-0131-5. PMID:
31341169; PMCID: PMC6656756.

18: Dyer NP, Shahrezaei V, Hebenstreit D. LiBiNorm: an htseq-count analogue with
improved normalisation of Smart-seq2 data and library preparation diagnostics.
PeerJ. 2019 Feb 4;7:e6222. doi: 10.7717/peerj.6222. PMID: 30740268; PMCID:
PMC6366399.

19: Guillaumet-Adkins A, Rodríguez-Esteban G, Mereu E, Mendez-Lago M, Jaitin DA,
Villanueva A, Vidal A, Martinez-Marti A, Felip E, Vivancos A, Keren-Shaul H,
Heath S, Gut M, Amit I, Gut I, Heyn H. Single-cell transcriptome conservation in
cryopreserved cells and tissues. Genome Biol. 2017 Mar 1;18(1):45. doi:
10.1186/s13059-017-1171-9. PMID: 28249587; PMCID: PMC5333448.

20: Miao Y, Wang P, Xie B, Yang M, Li S, Cui Z, Fan Y, Li M, Xiong B. BRCA2
deficiency is a potential driver for human primary ovarian insufficiency. Cell
Death Dis. 2019 Jun 17;10(7):474. doi: 10.1038/s41419-019-1720-0. PMID:
31209201; PMCID: PMC6572856.

21: Alsema AM, Jiang Q, Kracht L, Gerrits E, Dubbelaar ML, Miedema A, Brouwer N,
Hol EM, Middeldorp J, van Dijk R, Woodbury M, Wachter A, Xi S, Möller T, Biber
KP, Kooistra SM, Boddeke EWGM, Eggen BJL. Profiling Microglia From Alzheimer's
Disease Donors and Non-demented Elderly in Acute Human Postmortem Cortical
Tissue. Front Mol Neurosci. 2020 Oct 28;13:134. doi: 10.3389/fnmol.2020.00134.
PMID: 33192286; PMCID: PMC7655794.

22: Villani AC, Shekhar K. Single-Cell RNA Sequencing of Human T Cells. Methods
Mol Biol. 2017;1514:203-239. doi: 10.1007/978-1-4939-6548-9_16. PMID: 27787803.

23: Mazzurana L, Czarnewski P, Jonsson V, Wigge L, Ringnér M, Williams TC,
Ravindran A, Björklund ÅK, Säfholm J, Nilsson G, Dahlén SE, Orre AC, Al-Ameri M,
Höög C, Hedin C, Szczegielniak S, Almer S, Mjösberg J. Tissue-specific
transcriptional imprinting and heterogeneity in human innate lymphoid cells
revealed by full-length single-cell RNA-sequencing. Cell Res. 2021
May;31(5):554-568. doi: 10.1038/s41422-020-00445-x. Epub 2021 Jan 8. PMID:
33420427; PMCID: PMC8089104.

24: Trombetta JJ, Gennert D, Lu D, Satija R, Shalek AK, Regev A. Preparation of
Single-Cell RNA-Seq Libraries for Next Generation Sequencing. Curr Protoc Mol
Biol. 2014 Jul 1;107:4.22.1-17. doi: 10.1002/0471142727.mb0422s107. PMID:
24984854; PMCID: PMC4338574.

25: Wang W, Zhong Y, Zhuang Z, Xie J, Lu Y, Huang C, Sun Y, Wu L, Yin J, Yu H,
Jiang Z, Wang S, Wang C, Zhang Y, Huang Y, Han C, Zhong Z, Hu J, Ouyang Y, Liu
H, Yu M, Wei X, Chen D, Huang L, Hou Y, Lin Z, Liu S, Ling F, Yao X. Multiregion
single-cell sequencing reveals the transcriptional landscape of the immune
microenvironment of colorectal cancer. Clin Transl Med. 2021 Jan;11(1):e253.
doi: 10.1002/ctm2.253. PMID: 33463049; PMCID: PMC7775989.

26: Nichterwitz S, Benitez JA, Hoogstraaten R, Deng Q, Hedlund E. LCM-Seq: A
Method for Spatial Transcriptomic Profiling Using Laser Capture Microdissection
Coupled with PolyA-Based RNA Sequencing. Methods Mol Biol. 2018;1649:95-110.
doi: 10.1007/978-1-4939-7213-5_6. PMID: 29130192.

27: Liu J, Chang HW, Huang ZM, Nakamura M, Sekhon S, Ahn R, Munoz-Sandoval P,
Bhattarai S, Beck KM, Sanchez IM, Yang E, Pauli M, Arron ST, Fung-Leung WP,
Munoz E, Liu X, Bhutani T, North J, Fourie AM, Rosenblum MD, Liao W. Single-cell
RNA sequencing of psoriatic skin identifies pathogenic Tc17 cell subsets and
reveals distinctions between CD8<sup>+</sup> T cells in autoimmunity and cancer.
J Allergy Clin Immunol. 2021 Jun;147(6):2370-2380. doi:
10.1016/j.jaci.2020.11.028. Epub 2020 Dec 9. PMID: 33309739.

28: Cui D, Liu Y, Jiang X, Ding C, Poon LC, Wang H, Yang H. Single-cell RNA
expression profiling of SARS-CoV-2-related ACE2 and TMPRSS2 in human
trophectoderm and placenta. Ultrasound Obstet Gynecol. 2021 Feb;57(2):248-256.
doi: 10.1002/uog.22186. PMID: 32851697; PMCID: PMC7461088.

29: Wang X, He Y, Zhang Q, Ren X, Zhang Z. Direct Comparative Analyses of 10X
Genomics Chromium and Smart-seq2. Genomics Proteomics Bioinformatics. 2021 Mar
2:S1672-0229(21)00048-6. doi: 10.1016/j.gpb.2020.02.005. Epub ahead of print.
PMID: 33662621.

30: Treger RS, Pope SD, Xing X, Iwasaki A. Application of a Modified Smart-seq2
Sample Preparation Protocol for Rare Cell Full-length Single-cell mRNA
Sequencing to Mouse Oocytes. Bio Protoc. 2019 Aug 20;9(16):e3345. doi:
10.21769/BioProtoc.3345. PMID: 33654848; PMCID: PMC7854224.

31: He B, Gu W, Wang L, Zheng Z, Shao Z, Huan L, Zhang B, Ma Y, Niu J, Xie X,
Wang G. RNA-seq between asexual archeospores and meiosis-related conchospores in
Neopyropia yezoensis using Smart-seq2. J Phycol. 2021 Jul 14. doi:
10.1111/jpy.13197. Epub ahead of print. PMID: 34260752.

32: Onsbring H, Tice AK, Barton BT, Brown MW, Ettema TJG. An efficient single-
cell transcriptomics workflow for microbial eukaryotes benchmarked on Giardia
intestinalis cells. BMC Genomics. 2020 Jun 29;21(1):448. doi:
10.1186/s12864-020-06858-7. PMID: 32600266; PMCID: PMC7325058.

33: Gu H, Raman AT, Wang X, Gaiti F, Chaligne R, Mohammad AW, Arczewska A, Smith
ZD, Landau DA, Aryee MJ, Meissner A, Gnirke A. Smart-RRBS for single-cell
methylome and transcriptome analysis. Nat Protoc. 2021 Aug;16(8):4004-4030. doi:
10.1038/s41596-021-00571-9. Epub 2021 Jul 9. PMID: 34244697.

34: Van Der Byl W, Rizzetto S, Samir J, Cai C, Eltahla AA, Luciani F. Single-
Cell Transcriptome Analysis of T Cells. Methods Mol Biol. 2019;2048:155-205.
doi: 10.1007/978-1-4939-9728-2_16. PMID: 31396939.

35: Chen W, Gardeux V, Meireles-Filho A, Deplancke B. Profiling of Single-Cell
Transcriptomes. Curr Protoc Mouse Biol. 2017 Sep 8;7(3):145-175. doi:
10.1002/cpmo.30. PMID: 28884792.

36: Byrne A, Supple MA, Volden R, Laidre KL, Shapiro B, Vollmers C. Depletion of
Hemoglobin Transcripts and Long-Read Sequencing Improves the Transcriptome
Annotation of the Polar Bear (<i>Ursus maritimus</i>). Front Genet. 2019 Jul
19;10:643. doi: 10.3389/fgene.2019.00643. PMID: 31379921; PMCID: PMC6658610.

37: Strzelecka PM, Ranzoni AM, Cvejic A. Single-Cell Transcriptomic Analysis of
Hematopoietic Cells. Methods Mol Biol. 2021;2185:135-158. doi:
10.1007/978-1-0716-0810-4_9. PMID: 33165847.

38: Liang S, Bellato HM, Lorent J, Lupinacci FCS, Oertlin C, van Hoef V, Andrade
VP, Roffé M, Masvidal L, Hajj GNM, Larsson O. Polysome-profiling in small tissue
samples. Nucleic Acids Res. 2018 Jan 9;46(1):e3. doi: 10.1093/nar/gkx940. PMID:
29069469; PMCID: PMC5758873.

39: Qiao Y, Ren C, Huang S, Yuan J, Liu X, Fan J, Lin J, Wu S, Chen Q, Bo X, Li
X, Huang X, Liu Z, Shu W. High-resolution annotation of the mouse
preimplantation embryo transcriptome using long-read sequencing. Nat Commun.
2020 May 27;11(1):2653. doi: 10.1038/s41467-020-16444-w. Erratum in: Nat Commun.
2021 Mar 15;12(1):1767. PMID: 32461551; PMCID: PMC7253418.

40: Natarajan KN, Miao Z, Jiang M, Huang X, Zhou H, Xie J, Wang C, Qin S, Zhao
Z, Wu L, Yang N, Li B, Hou Y, Liu S, Teichmann SA. Comparative analysis of
sequencing technologies for single-cell transcriptomics. Genome Biol. 2019 Apr
9;20(1):70. doi: 10.1186/s13059-019-1676-5. PMID: 30961669; PMCID: PMC6454680.

41: Zhong S, Wang M, Zhan Y, Zhang J, Yang X, Fu S, Bi D, Gao F, Shen Y, Chen Z.
Single-nucleus RNA sequencing reveals transcriptional changes of hippocampal
neurons in APP23 mouse model of Alzheimer's disease. Biosci Biotechnol Biochem.
2020 May;84(5):919-926. doi: 10.1080/09168451.2020.1714420. Epub 2020 Jan 13.
PMID: 31928331.

42: Andrews TS, Hemberg M. False signals induced by single-cell imputation.
F1000Res. 2018 Nov 2;7:1740. doi: 10.12688/f1000research.16613.2. PMID:
30906525; PMCID: PMC6415334.

43: Rangel GW, Clark MA, Kanjee U, Goldberg JM, MacInnis B, José Menezes M,
Ferreira MU, Duraisingh MT. Plasmodium vivax transcriptional profiling of low
input cryopreserved isolates through the intraerythrocytic development cycle.
PLoS Negl Trop Dis. 2020 Mar 2;14(3):e0008104. doi:
10.1371/journal.pntd.0008104. PMID: 32119669; PMCID: PMC7067476.

44: Vanlandewijck M, Betsholtz C. Single-Cell mRNA Sequencing of the Mouse Brain
Vasculature. Methods Mol Biol. 2018;1846:309-324. doi:
10.1007/978-1-4939-8712-2_21. PMID: 30242769.

45: Zhang B, Zhu L, Dai Y, Li H, Huang K, Luo Y, Xu W. An in vitro attempt at
precision toxicology reveals the involvement of DNA methylation alteration in
ochratoxin A-induced G0/G1 phase arrest. Epigenetics. 2020 Jan-
Feb;15(1-2):199-214. doi: 10.1080/15592294.2019.1644878. Epub 2019 Jul 22. PMID:
31314649; PMCID: PMC6961687.

46: Westoby J, Herrera MS, Ferguson-Smith AC, Hemberg M. Simulation-based
benchmarking of isoform quantification in single-cell RNA-seq. Genome Biol. 2018
Nov 7;19(1):191. doi: 10.1186/s13059-018-1571-5. PMID: 30404663; PMCID:
PMC6223048.

47: Linker SB, Randolph-Moore L, Kottilil K, Qiu F, Jaeger BN, Barron J, Gage
FH. Identification of bona fide B2 SINE retrotransposon transcription through
single-nucleus RNA-seq of the mouse hippocampus. Genome Res. 2020
Nov;30(11):1643-1654. doi: 10.1101/gr.262196.120. PMID: 33122305; PMCID:
PMC7605253.

48: Seumois G, Vijayanand P. Single-cell analysis to understand the diversity of
immune cell types that drive disease pathogenesis. J Allergy Clin Immunol. 2019
Nov;144(5):1150-1153. doi: 10.1016/j.jaci.2019.09.014. PMID: 31703762; PMCID:
PMC7595676.

49: Kucharski M, Tripathi J, Nayak S, Zhu L, Wirjanata G, van der Pluijm RW,
Dhorda M, Dondorp A, Bozdech Z. A comprehensive RNA handling and transcriptomics
guide for high-throughput processing of Plasmodium blood-stage samples. Malar J.
2020 Oct 9;19(1):363. doi: 10.1186/s12936-020-03436-w. PMID: 33036628; PMCID:
PMC7547485.

50: Kameoka H, Maeda T, Okuma N, Kawaguchi M. Structure-Specific Regulation of
Nutrient Transport and Metabolism in Arbuscular Mycorrhizal Fungi. Plant Cell
Physiol. 2019 Oct 1;60(10):2272-2281. doi: 10.1093/pcp/pcz122. PMID: 31241164.

51: Sturgess KHM, Calero-Nieto FJ, Göttgens B, Wilson NK. Single-Cell Analysis
of Hematopoietic Stem Cells. Methods Mol Biol. 2021;2308:301-337. doi:
10.1007/978-1-0716-1425-9_22. PMID: 34057731.

52: Ooi CC, Mantalas GL, Koh W, Neff NF, Fuchigami T, Wong DJ, Wilson RJ, Park
SM, Gambhir SS, Quake SR, Wang SX. High-throughput full-length single-cell mRNA-
seq of rare cells. PLoS One. 2017 Nov 29;12(11):e0188510. doi:
10.1371/journal.pone.0188510. PMID: 29186152; PMCID: PMC5706670.

53: Mamanova L, Miao Z, Jinat A, Ellis P, Shirley L, Teichmann SA. High-
throughput full-length single-cell RNA-seq automation. Nat Protoc. 2021
Jun;16(6):2886-2915. doi: 10.1038/s41596-021-00523-3. Epub 2021 May 14. PMID:
33990801.

54: Wang N, Li CY, Zhu HB, Hao HS, Wang HY, Yan CL, Zhao SJ, Du WH, Wang D, Liu
Y, Pang YW, Zhao XM. Effect of vitrification on the mRNA transcriptome of bovine
oocytes. Reprod Domest Anim. 2017 Aug;52(4):531-541. doi: 10.1111/rda.12942.
Epub 2017 Mar 12. PMID: 28295644.

55: Peng Y, Qiao H. The Application of Single-Cell RNA Sequencing in Mammalian
Meiosis Studies. Front Cell Dev Biol. 2021 Aug 18;9:673642. doi:
10.3389/fcell.2021.673642. PMID: 34485276; PMCID: PMC8416306.

56: Gao Y, Li L, Amos CI, Li W. Analysis of alternative polyadenylation from
single-cell RNA-seq using scDaPars reveals cell subpopulations invisible to gene
expression. Genome Res. 2021 Oct;31(10):1856-1866. doi: 10.1101/gr.271346.120.
Epub 2021 May 25. PMID: 34035046.

57: Cole C, Byrne A, Beaudin AE, Forsberg EC, Vollmers C. Tn5Prime, a Tn5 based
5' capture method for single cell RNA-seq. Nucleic Acids Res. 2018 Jun
1;46(10):e62. doi: 10.1093/nar/gky182. PMID: 29548006; PMCID: PMC6007450.

58: Sun R, Xu K, Ji S, Pu Y, Yu L, Yin L, Zhang J, Pu Y. Toxicity in
hematopoietic stem cells from bone marrow and peripheral blood in mice after
benzene exposure: Single-cell transcriptome sequencing analysis. Ecotoxicol
Environ Saf. 2021 Jan 1;207:111490. doi: 10.1016/j.ecoenv.2020.111490. Epub 2020
Oct 26. PMID: 33120278.

59: Wang D, Hou S, Zhang L, Wang X, Liu B, Zhang Z. iMAP: integration of
multiple single-cell datasets by adversarial paired transfer networks. Genome
Biol. 2021 Feb 18;22(1):63. doi: 10.1186/s13059-021-02280-8. PMID: 33602306;
PMCID: PMC7891139.

60: Gao Y, Duan Q, Wu N, Xu B. A heterogeneous cellular response to ionizing
radiation revealed by single cell transcriptome sequencing. Am J Cancer Res.
2021 Feb 1;11(2):513-529. PMID: 33575084; PMCID: PMC7868766.

61: Olivieri JE, Dehghannasiri R, Wang PL, Jang S, de Morree A, Tan SY, Ming J,
Ruohao Wu A; Tabula Sapiens Consortium, Quake SR, Krasnow MA, Salzman J. RNA
splicing programs define tissue compartments and cell types at single cell
resolution. Elife. 2021 Sep 13;10:e70692. doi: 10.7554/eLife.70692. Epub ahead
of print. PMID: 34515025.

62: Santoro F, Chien KR, Sahara M. Isolation of human ESC-derived cardiac
derivatives and embryonic heart cells for population and single-cell RNA-seq
analysis. STAR Protoc. 2021 Feb 11;2(1):100339. doi: 10.1016/j.xpro.2021.100339.
PMID: 33644774; PMCID: PMC7887647.

63: Wang H, Gong P, Chen T, Gao S, Wu Z, Wang X, Li J, Marjani SL, Costa J,
Weissman SM, Qi F, Pan X, Liu L. Colorectal Cancer Stem Cell States Uncovered by
Simultaneous Single-Cell Analysis of Transcriptome and Telomeres. Adv Sci
(Weinh). 2021 Feb 8;8(8):2004320. doi: 10.1002/advs.202004320. PMID: 33898197;
PMCID: PMC8061397.

64: He B, Chen P, Zambrano S, Dabaghie D, Hu Y, Möller-Hackbarth K, Unnersjö-
Jess D, Korkut GG, Charrin E, Jeansson M, Bintanel-Morcillo M, Witasp A,
Wennberg L, Wernerson A, Schermer B, Benzing T, Ernfors P, Betsholtz C, Lal M,
Sandberg R, Patrakka J. Single-cell RNA sequencing reveals the mesangial
identity and species diversity of glomerular cell transcriptomes. Nat Commun.
2021 Apr 9;12(1):2141. doi: 10.1038/s41467-021-22331-9. PMID: 33837218; PMCID:
PMC8035407.

65: Treppner M, Salas-Bastos A, Hess M, Lenz S, Vogel T, Binder H. Synthetic
single cell RNA sequencing data from small pilot studies using deep generative
models. Sci Rep. 2021 Apr 30;11(1):9403. doi: 10.1038/s41598-021-88875-4. PMID:
33931726; PMCID: PMC8087667.

66: Rosales SL, Liang S, Engel I, Schmiedel BJ, Kronenberg M, Vijayanand P,
Seumois G. A Sensitive and Integrated Approach to Profile Messenger RNA from
Samples with Low Cell Numbers. Methods Mol Biol. 2018;1799:275-302. doi:
10.1007/978-1-4939-7896-0_21. Erratum in: Methods Mol Biol. 2018;1799:C3. PMID:
29956159.

67: Ruan H, Wang Z, Zhai Y, Xu Y, Pi L, Zheng J, Zhou Y, Zhang C, Huang R, Chen
K, Li X, Ma W, Wu Z, Shen J, Deng X, Zhang C, Guan M. Single-cell transcriptome
analysis of diffuse large B cells in cerebrospinal fluid of central nervous
system lymphoma. iScience. 2021 Aug 11;24(9):102972. doi:
10.1016/j.isci.2021.102972. PMID: 34471864; PMCID: PMC8387906.

68: Wang X, Yu L, Wu AR. The effect of methanol fixation on single-cell RNA
sequencing data. BMC Genomics. 2021 Jun 5;22(1):420. doi:
10.1186/s12864-021-07744-6. Erratum in: BMC Genomics. 2021 Jul 19;22(1):554.
PMID: 34090348; PMCID: PMC8180132.

69: Sorek M, Oweis W, Nissim-Rafinia M, Maman M, Simon S, Hession CC, Adiconis
X, Simmons SK, Sanjana NE, Shi X, Lu C, Pan JQ, Xu X, Pouladi MA, Ellerby LM,
Zhang F, Levin JZ, Meshorer E. Pluripotent stem cell-derived models of
neurological diseases reveal early transcriptional heterogeneity. Genome Biol.
2021 Mar 4;22(1):73. doi: 10.1186/s13059-021-02301-6. PMID: 33663567; PMCID:
PMC7934477.

70: Shu M, Xue X, Nie H, Wu X, Sun M, Qiao L, Li X, Xu B, Xiao Z, Zhao Y, Fan Y,
Chen B, Zhang J, Shi Y, Yang Y, Lu F, Dai J. Single-cell RNA sequencing reveals
Nestin<sup>+</sup> active neural stem cells outside the central canal after
spinal cord injury. Sci China Life Sci. 2021 May 28. doi:
10.1007/s11427-020-1930-0. Epub ahead of print. PMID: 34061300.


