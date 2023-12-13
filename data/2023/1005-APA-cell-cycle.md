APA & cell cycle


# 测序数据

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE104736

```
GEO:
GSM2806897	HeLa_Fucci_G1_1
GSM2806898	HeLa_Fucci_G1_2
GSM2806899	HeLa_Fucci_G1_3

GSM2806900	HeLa_Fucci_S_1
GSM2806901	HeLa_Fucci_S_2
GSM2806902	HeLa_Fucci_S_3

GSM2806903	HeLa_Fucci_G2_1
GSM2806904	HeLa_Fucci_G2_2
GSM2806905	HeLa_Fucci_G2_3


GSM2806906	U2OS_Fucci_G1_1
GSM2806907	U2OS_Fucci_G1_2
GSM2806908	U2OS_Fucci_S_1
GSM2806909	U2OS_Fucci_S_2
GSM2806910	U2OS_Fucci_G2_1
GSM2806911	U2OS_Fucci_G2_2



SRA: 平均1G per item.
https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA413699&o=acc_s%3Aa

Run	cell_line	GEO_Accession (exp)	Phase
SRR6150369	HeLa	GSM2806897	G1
SRR6150370	HeLa	GSM2806898	G1
SRR6150371	HeLa	GSM2806899	G1

SRR6150372	HeLa	GSM2806900	S
SRR6150373	HeLa	GSM2806901	S
SRR6150374	HeLa	GSM2806902	S

SRR6150375	HeLa	GSM2806903	G2
SRR6150376	HeLa	GSM2806903	G2
SRR6150377	HeLa	GSM2806903	G2

SRR6150378	HeLa	GSM2806904	G2
SRR6150379	HeLa	GSM2806904	G2
SRR6150380	HeLa	GSM2806904	G2

SRR6150381	HeLa	GSM2806905	G2
SRR6150382	HeLa	GSM2806905	G2
SRR6150383	HeLa	GSM2806905	G2

SRR6150384	U2OS	GSM2806906	G1
SRR6150385	U2OS	GSM2806907	G1
SRR6150386	U2OS	GSM2806908	S
SRR6150387	U2OS	GSM2806909	S
SRR6150388	U2OS	GSM2806910	G2
SRR6150389	U2OS	GSM2806911	G2


$ fasterq-dump --version
fasterq-dump : 3.0.7

$ fasterq-dump --split-files SRR6150369
$ fasterq-dump --split-files SRR6150370
$ fasterq-dump --split-files SRR6150371
$ fasterq-dump --split-files SRR6150372
17:45--> 0
17:00--> 15G
18:57 --> 45G End.


$ tail -n 3 SRR_Acc_List.txt | while read id; do echo $id `date`; 
fasterq-dump --split-files $id;
done;
```



## 比对

Y station:

```
$ STAR --version
2.7.9a 


$ cd /home/wangjl/data/ref/human/gencode/
$ ls -lth
-rw-rw-r-- 1 wangjl wangjl 849M Dec 19  2020 GRCh38.p13.genome.fa.gz
-rw-rw-r-- 1 wangjl wangjl  43M Dec 19  2020 gencode.v36.annotation.gtf.gz 

$ gunzip -c GRCh38.p13.genome.fa.gz > GRCh38.p13.genome.fa
$ gunzip -c gencode.v36.annotation.gtf.gz > gencode.v36.annotation.gtf
```

构建索引
```
$ STAR --runThreadN 10 --runMode genomeGenerate \
	--genomeDir /home/wangjl/data/ref/human/gencode/star_index_hg38/ \
	--genomeFastaFiles /home/wangjl/data/ref/human/gencode/GRCh38.p13.genome.fa \
	--sjdbGTFfile /home/wangjl/data/ref/human/gencode/gencode.v36.annotation.gtf
18:51-->
19:24--> 开始运行比对，2h后开始:
	硬盘足够 /dev/sdb       ext4      3.6T  1.6T  1.9T  45% /data

报错：
Oct 05 18:51:29 ..... started STAR run
Oct 05 18:51:29 ... starting to generate Genome files
Oct 05 18:52:08 ..... processing annotations GTF
Oct 05 18:52:29 ... starting to sort Suffix Array. This may take a long time...
Oct 05 18:52:41 ... sorting Suffix Array chunks and saving them to disk...
Oct 05 19:46:54 ... loading chunks from disk, packing SA...
Killed
作者说需要 32GB of RAM: https://github.com/alexdobin/STAR/issues/754
To fit it into 16GB of RAM, please use
--genomeSAsparseD 3 --genomeSAindexNbases 12
```


转移 fastq 文件：Y to Z
```
有index /data/wangjl/ref/hg38/gencode/index/STAR/

$ cd /home/wangjl/data/HeLa/
$ scp -r wangjl@y.biomooc.com:/data/wangjl/sra/cell_cycle/ .

原 Y/ 可删。
```



合并文件: 按 GSM 编号
```
$ cd /data/wangjl/HeLa/cell_cycle/
$ mkdir raw
$ ln -s ../SRR6150369.fastq raw/G1_rep1.fastq
$ ln -s ../SRR6150370.fastq raw/G1_rep2.fastq
$ ln -s ../SRR6150371.fastq raw/G1_rep3.fastq

$ ln -s ../SRR6150372.fastq raw/S_rep1.fastq
$ ln -s ../SRR6150373.fastq raw/S_rep2.fastq
$ ln -s ../SRR6150374.fastq raw/S_rep3.fastq

$ cat SRR6150375.fastq SRR6150376.fastq SRR6150377.fastq >raw/G2_rep1.fastq
$ cat SRR6150378.fastq SRR6150379.fastq SRR6150380.fastq >raw/G2_rep2.fastq
$ cat SRR6150381.fastq SRR6150382.fastq SRR6150383.fastq >raw/G2_rep3.fastq

$ mv cell_cycle/SRR6150384.fastq
...

$ ln -s ../SRR6150384.fastq raw/U2OS_G1_rep1.fastq
$ ln -s ../SRR6150385.fastq raw/U2OS_G1_rep2.fastq

$ ln -s ../SRR6150386.fastq raw/U2OS_S_rep1.fastq
$ ln -s ../SRR6150387.fastq raw/U2OS_S_rep2.fastq

$ ln -s ../SRR6150388.fastq raw/U2OS_G2_rep1.fastq
$ ln -s ../SRR6150389.fastq raw/U2OS_G2_rep2.fastq


查看文件
$ pwd
/data/wangjl/HeLa/cell_cycle
$ ls -lth raw/
total 15G
-rw-rw-r-- 1 wangjl wangjl 5.5G Oct  6 14:55 G2_rep3.fastq
-rw-rw-r-- 1 wangjl wangjl 4.4G Oct  6 14:55 G2_rep2.fastq
-rw-rw-r-- 1 wangjl wangjl 4.6G Oct  6 14:54 G2_rep1.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 14:53 S_rep3.fastq -> ../SRR6150374.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 14:53 S_rep2.fastq -> ../SRR6150373.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 14:53 S_rep1.fastq -> ../SRR6150372.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 14:52 G1_rep3.fastq -> ../SRR6150371.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 14:52 G1_rep2.fastq -> ../SRR6150370.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 14:51 G1_rep1.fastq -> ../SRR6150369.fastq

$ ls -lth raw/
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 18:36 U2OS_G2_rep2.fastq -> ../SRR6150389.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 18:36 U2OS_G2_rep1.fastq -> ../SRR6150388.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 18:36 U2OS_S_rep2.fastq -> ../SRR6150387.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 18:36 U2OS_S_rep1.fastq -> ../SRR6150386.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 18:36 U2OS_G1_rep2.fastq -> ../SRR6150385.fastq
lrwxrwxrwx 1 wangjl wangjl   19 Oct  6 18:36 U2OS_G1_rep1.fastq -> ../SRR6150384.fastq
```



比对: on Z
```
$ cd /home/wangjl/data/HeLa/cell_cycle/
$ mkdir map

$ STAR --version
2.7.10b

$ vim raw/list.txt
G1_rep1
G1_rep2
G1_rep3
S_rep1
S_rep2
S_rep3
G2_rep1
G2_rep2
G2_rep3

$ head -n3 raw/list.txt | while read id; do echo ${id} `date`;
$ tail -n3 raw/list.txt | while read id; do echo ${id} `date`;

$ tail -n6 raw/list.txt |head -n3| while read id; do echo ${id} `date`;
  STAR --runThreadN 20 \
	--outSAMtype BAM SortedByCoordinate \
	--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
	--readFilesIn /home/wangjl/data/HeLa/cell_cycle/raw/${id}.fastq \
	--genomeLoad LoadAndKeep \
	--limitBAMsortRAM 20000000000 \
	--outFileNamePrefix /home/wangjl/data/HeLa/cell_cycle/map/${id}_
done;



第二批
$ vim raw/list2.txt
U2OS_G1_rep1
U2OS_G1_rep2
U2OS_S_rep1
U2OS_S_rep2
U2OS_G2_rep1
U2OS_G2_rep2

$ cat raw/list2.txt | while read id; do echo ${id} `date`;
  STAR --runThreadN 20 \
	--outSAMtype BAM SortedByCoordinate \
	--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
	--readFilesIn /home/wangjl/data/HeLa/cell_cycle/raw/${id}.fastq \
	--genomeLoad LoadAndKeep \
	--limitBAMsortRAM 20000000000 \
	--outFileNamePrefix /home/wangjl/data/HeLa/cell_cycle/map/${id}_
done;

# time: 平均1min per sample
查看比对效果:
G1_rep1 
	Uniquely mapped reads number |       18666214
	     Uniquely mapped reads % |       81.85%
G1_rep2: 24M, 81.8%
G1_rep3: 18M, 81.2%

S_rep1: 19M, 82.0%
S_rep2: 13M, 82.2%
S_rep3: 19M, 82.3%

G2_rep1: 17M, 82.4%
G2_rep2: 16M, 82.2%
G2_rep3: 20M, 82.2%
```


bam index
```
$ cat raw/list.txt | while read id; do echo ${id} `date`;
	samtools index -@ 10 map/${id}_Aligned.sortedByCoord.out.bam
done;

$ cat raw/list2.txt | while read id; do echo ${id} `date`;
	samtools index -@ 10 map/${id}_Aligned.sortedByCoord.out.bam
done;
```




IGV 查看结果
```
On Z server
$ python3 /home/wangjl/data/software/DaisyHttp/DaisyHttp.py 8892 /data/wangjl/HeLa/cell_cycle/map/
开端口
$ sudo iptables -I INPUT -p tcp --dport 8892 -j ACCEPT 

On Y station:
$ cd /home/wangjl/data/project/scIGV
$ python3 -m RangeHTTPServer 9000
或者
$ python3 /home/wangjl/data/project/DaisyHttp/DaisyHttp.py 9000 /home/wangjl/data/project/scIGV
根据 index5_7.html 修改 index5_8.html，基于 igv.js

浏览器查看: http://y.biomooc.com:9000/list/index5_8.html
```

结论：无法验证我找到的几个基因。









### DaPars 分析 APA

```
Z server 
$ cd /home/wangjl/data/software
$ git clone https://github.com/DawnEve/dapars.git
$ cd dapars/

$ /usr/bin/pip2.7 install rpy2==2.8.1 --user

需要3个文件
- BED file: a tab separated, 12 columns, which represents the gene model.
- BedGraph file: stores the reads alignment results from an aligned BAM file.
- Gene Symbol file: two columns containing NCBI RefSeq and gene symbol.


(1) 下载12列bed文件
http://genome.ucsc.edu/cgi-bin/hgTables?command=start

genome: Human
assembly: Dec. 2013 (GRCh38/hg38)
group: Genes and Gene Predictions
track: NCBI RefSeq
table: RefGene All(ncbiRefSeq)
region: genome
output format: BED - browser extensible data
output file: hg38_RefSeq_All_gene.bed

Click ‘get output’ button, and in the next page ‘Output refGene as BED’ click ‘get BED’ button.
复制到Z服务器: /home/wangjl/data/ref/hg38/

$ head hg38_RefSeq_All_gene.bed 
chr1    67092164        67109072        XM_011541469.2  0       -       67093004        67103382        0       5       1440,187,70,145,44,     0,3070,4087,11073,16864,
chr1    67092164        67131227        XM_017001276.2  0       -       67093004        67127240        0       9       1440,187,70,145,68,113,158,92,86,       0,3070,4087,11073,19412,23187,33587,35001,38977,
chr1    67092164        67131227        XM_011541467.2  0       -       67093004        67127240        0       9       1440,187,70,106,68,113,158,92,86,       0,3070,4087,11073,19412,23187,33587,35001,38977,



(2) To generate the BedGraph files from BAM files, you need the chromsome size file chromInfo.txt.gz which can be downloaded from UCSC (hg19 or mm9) and then use the BedTools' genomecov as follow:

http://hgdownload.soe.ucsc.edu/goldenPath/mm10/database/
wget http://hgdownload.soe.ucsc.edu/goldenPath/mm10/database/chromInfo.txt.gz
gunzip chromInfo.txt.gz 


http://hgdownload.soe.ucsc.edu/goldenPath/hg38/database/
$ wget http://hgdownload.soe.ucsc.edu/goldenPath/hg38/database/chromInfo.txt.gz
$ gunzip chromInfo.txt.gz 

## /home/wangjl/data/ref/hg38
$ mv chromInfo.txt  hg38_chr_size.txt
$ head hg38_chr_size.txt
chr1    248956422       /gbdb/hg38/hg38.2bit
chr2    242193529       /gbdb/hg38/hg38.2bit
chr3    198295559       /gbdb/hg38/hg38.2bit
...


## http://bedtools.readthedocs.io/en/latest/content/tools/genomecov.html
## bedtools genomecov -bg -ibam sample_sorted.bam -g mm9_chr_size.txt -split > sample.bedgraph

$ bedtools --version
bedtools v2.31.0

$ mkdir /data/wangjl/HeLa/cell_cycle/bedGraph
$ bedtools genomecov -bg -ibam /data/wangjl/HeLa/cell_cycle/map/G1_rep1_Aligned.sortedByCoord.out.bam \
-g /home/wangjl/data/ref/hg38/hg38_chr_size.txt -split > /data/wangjl/HeLa/cell_cycle/bedGraph/G1_rep1.bedgraph

警告 *****WARNING: Genome (-g) files are ignored when BAM input is provided.
意思就是：有bam则-g参数无效。

第一批
$ tail -n8 raw/list.txt | while read id; do echo $id `date`;
bedtools genomecov -bg -ibam /data/wangjl/HeLa/cell_cycle/map/${id}_Aligned.sortedByCoord.out.bam \
-g /home/wangjl/data/ref/hg38/hg38_chr_size.txt -split > /data/wangjl/HeLa/cell_cycle/bedGraph/${id}.bedgraph;
done;

第二批
$ cat raw/list2.txt | while read id; do echo $id `date`;
bedtools genomecov -bg -ibam /data/wangjl/HeLa/cell_cycle/map/${id}_Aligned.sortedByCoord.out.bam \
-g /home/wangjl/data/ref/hg38/hg38_chr_size.txt -split > /data/wangjl/HeLa/cell_cycle/bedGraph/${id}.bedgraph;
done;

大约 2min/sample.

$ head bedGraph/G1_rep1.bedgraph 
chr1    13333   13383   1
chr1    14411   14416   1
chr1    14416   14425   2


(3)The Gene Symbol file can be downloaded from UCSC Table Browser.

http://genome.ucsc.edu/cgi-bin/hgTables?command=start

genome: Human
assembly: Dec. 2023 (GRCh38/hg38)
group: Genes and Gene Predictions
track: NCBI RefSeq
table: RefSeq All(ncbiRefSeq)
region: genome
output format: selected fields from primary and related tables
output file: hg38_20231006_RefSeq_id_from_UCSC.txt
Click ‘get output’ button, and in the next page select


name: Name of gene (usually transcript_id from GTF)
name2: Alternate name (e.g. gene_id from GTF)
Click ‘get output’ and save the file.

复制到服务器：
/home/wangjl/data/ref/hg38/hg38_20231006_RefSeq_id_from_UCSC.txt
```



### 开始运行 DaPars (Z server)

```
(1). Generate region annotation
DaPars will use the extracted distal polyadenylation sites to infer the proximal polyadenylation sites based on the alignment files.
在比对文件上，使用远端位点，来推测近端位点。

$ hg38RefDir=/home/wangjl/data/ref/hg38/
$ python2 ~/software/dapars/src/DaPars_Extract_Anno.py -b ${hg38RefDir}/hg38_RefSeq_All_gene.bed -s ${hg38RefDir}/hg38_20231006_RefSeq_id_from_UCSC.txt -o ${hg38RefDir}/hg38_refseq_extracted_3UTR.bed
# 1min; Total extracted 3' UTR: 64972

共 6.4 万个UTR区域
  64021  384126 3698097 hg38_refseq_extracted_3UTR.bed

$ head hg38_refseq_extracted_3UTR.bed                                                                                                                                                                            
chr17   61120198        61129671        XR_001752959.2|LOC107984992|chr17|-     0       -
chr3    132390595       132391049       XR_007096093.1|LOC124909435|chr3|+      0       +
chr11   30794383        30794447        XR_242862.5|LOC101928338|chr11|+        0       +


(2). Sample processing
The files generated in step 1 above will be used in step 2. 
Also for this step, you need to generate configure_file for each sample. For example

$ cd /data/wangjl/HeLa/cell_cycle/bedGraph/
$ cat configure_file_G1_S.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1
Group1_Tophat_aligned_Wig=G1_rep1.bedgraph,G1_rep2.bedgraph,G1_rep3.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2
Group2_Tophat_aligned_Wig=S_rep1.bedgraph,S_rep2.bedgraph,S_rep3.bedgraph

Output_directory=DaPars_Output/
Output_result_file=G1_S

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.5
Fold_change_cutoff=0.59
########################

$ pip2 install numpy --user
$ pip2 install scipy --user

$ pip2 list | grep -i rpy2
rpy2           2.8.1
## $ pip2 install rpy2==1.8.4 没有这个版本 https://zhuanlan.zhihu.com/p/422482178

$ /usr/bin/pip2.7 install rpy2==2.8.6 --user
$ /usr/bin/pip2.7 install singledispatch==3.4.0.0 --user
$ /usr/bin/pip2.7 install six==1.1.0 --user

$ python2 ~/software/dapars/src/DaPars_main.py configure_file_G1_S.config
[Fri 06 Oct 2023 08:50:07 PM ] Start Analysis ...
[Fri 06 Oct 2023 08:50:07 PM ] Loading coverage ...
[Fri 06 Oct 2023 08:53:19 PM ] Loading coverage finished ...
[Fri 06 Oct 2023 09:09:27 PM ] Filtering the result ...
[Fri 06 Oct 2023 09:09:34 PM ] Finished!
耗时 20 min;
```



查看结果

- 只有一个输出文件

```
$ head DaPars_Output/G1_S_All_Prediction_Results.txt -n3
Gene    fit_value       Predicted_Proximal_APA  Loci    A_1_long_exp    A_1_short_exp   A_1_PDUI        A_2_long_exp    A_2_short_exp   A_2_PDUI        A_3_long_exp    A_3_short_exp   A_3_PDUI        B_1_long_exp    B_1_short_expB_1_PDUI        B_2_long_exp    B_2_short_exp   B_2_PDUI        B_3_long_exp    B_3_short_exp   B_3_PDUI        Group_A_Mean_PDUI       Group_B_Mean_PDUI       PDUI_Group_diff P_val   adjusted.P_val  Pass_Filter
NM_001079862.4|DBI|chr2|+       3192.4  119372446       chr2:119372245-119372543        135.90  117.46  0.54    142.12  124.84  0.53    159.52  129.58  0.55    154.47  138.52  0.53    162.42  68.05   0.70    155.95  108.21  0.590.54     0.606666666667  -0.0666666666667        0.18752508590359251     1.0     N
NR_152584.1|SNHG1|chr11|-       146.6   62852161        chr11:62851978-62852436 36.66   29.83   0.55    30.32   32.78   0.48    35.93   24.36   0.60    40.40   30.65   0.57    27.24   25.14   0.52    41.93   28.16   0.60    0.543333333333       0.563333333333  -0.02   0.8578148382879072      1.0     N

共 4k 行：  4372 122416 914982 DaPars_Output/G1_S_All_Prediction_Results.txt

没有一个过标准了
$ cat DaPars_Output/G1_S_All_Prediction_Results.txt | awk '{print $28}' | sort | uniq -c
   4371 N
      1 Pass_Filter

查看 p.adj<0.05 的区域，只有6个
$ cat DaPars_Output/G1_S_All_Prediction_Results.txt | awk '$27<0.05 {print $1"\t"$27"\t"$25}'
NM_004450.3|ERH|chr14|- 0.000674086953612       -0.13
NM_001271606.2|BASP1|chr5|+     0.0236104649761 -0.08
NM_001143760.1|EIF5A|chr17|+    3.3074608833e-12        0.136666666667
NM_005556.4|KRT7|chr12|+        0.00215752971031        -0.176666666667
NM_002823.5|PTMA|chr2|+ 8.1763339642e-48        0.08
NM_003486.7|SLC7A5|chr16|-      3.67791080931e-32       -0.0433333333333

Gene    adjusted.P_val  PDUI_Group_diff

IGV 目测，没有一个通过的。
```





第二个比较：
```
$ cd /data/wangjl/HeLa/cell_cycle/bedGraph/
$ cat configure_file_G1_G2.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1
Group1_Tophat_aligned_Wig=G1_rep1.bedgraph,G1_rep2.bedgraph,G1_rep3.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2
Group2_Tophat_aligned_Wig=G2_rep1.bedgraph,G2_rep2.bedgraph,G2_rep3.bedgraph

Output_directory=DaPars_Output/
Output_result_file=G1_G2

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.5
Fold_change_cutoff=0.59
########################

$ python2 ~/software/dapars/src/DaPars_main.py configure_file_G1_G2.config


结果:
$ cat DaPars_Output/G1_G2_All_Prediction_Results.txt | awk '$27<0.05 {print $1"\t"$27"\t"$25}'
Gene    adjusted.P_val  PDUI_Group_diff
NM_001272053.2|MRFAP1|chr4|+    0.00123665240507        0.116666666667
NR_146148.1|RNA28SN2|chr21|+    0.0354567537147 -0.0833333333333
NM_001212.4|C1QBP|chr17|-       0.000885916398371       0.136666666667
NM_006088.6|TUBB4B|chr9|+       0.00232817285875        0.0766666666667
XM_024447427.2|ADIPOR1|chr1|-   0.0458324212253 0.15
NM_001287434.2|CCND3|chr6|-     0.0481259411195 -0.17
NM_001382225.1|MLF2|chr12|-     0.000885916398371       -0.116666666667
NM_001098210.2|CTNNB1|chr3|+    0.00411096121326        0.193333333333
NM_001540.5|HSPB1|chr7|+        3.07671731797e-05       0.126666666667
NM_002018.4|FLII|chr17|-        0.000294542430792       -0.346666666667
NM_001271606.2|BASP1|chr5|+     0.000510343035568       -0.09
NM_004343.4|CALR|chr19|+        1.443794627e-06 0.136666666667
NM_006082.3|TUBA1B|chr12|-      1.90433802753e-14       0.09
NM_001143760.1|EIF5A|chr17|+    7.35823635349e-12       0.15
NM_001401021.1|VDAC1|chr5|-     0.0126259288932 -0.04
NM_133639.4|RHOV|chr15|-        0.0301948556705 -0.246666666667
NM_001012664.3|SLC3A2|chr11|+   0.000529575755719       0.1
NR_145822.1|RNA28SN1|chr21|+    0.0481259411195 -0.0766666666667
NM_000146.4|FTL|chr19|+ 0.00203585769868        0.1
NR_146154.1|RNA28SN3|chr21|+    0.0458324212253 -0.08
NM_001355006.2|NPM1|chr5|+      1.11375468774e-06       -0.0833333333333
NM_001277224.2|TAGLN2|chr1|-    2.16987881951e-12       0.21
XM_047420333.1|IMPDH1|chr7|-    0.00411096121326        0.166666666667
NM_001136017.3|CCND3|chr6|-     0.0481555323384 -0.17
NM_002823.5|PTMA|chr2|+ 8.18873286797e-41       0.08
NM_003486.7|SLC7A5|chr16|-      0.000156566488878       0.0366666666667
NM_005556.4|KRT7|chr12|+        0.0141429860074 -0.16
```


第三个比较：
```
$ cd /data/wangjl/HeLa/cell_cycle/bedGraph/
$ cat configure_file_S_G2.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1
Group1_Tophat_aligned_Wig=S_rep1.bedgraph,S_rep2.bedgraph,S_rep3.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2
Group2_Tophat_aligned_Wig=G2_rep1.bedgraph,G2_rep2.bedgraph,G2_rep3.bedgraph

Output_directory=DaPars_Output/
Output_result_file=S_G2

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.5
Fold_change_cutoff=0.59
########################

$ python2 ~/software/dapars/src/DaPars_main.py configure_file_S_G2.config


$ cat DaPars_Output/S_G2_All_Prediction_Results.txt | awk '$27<0.05 {print $1"\t"$27"\t"$25}'
NM_001401011.1|VDAC1|chr5|-     0.0305378427536 -0.116666666667
NR_146148.1|RNA28SN2|chr21|+    0.00120300776798        -0.103333333333
NM_001675.4|ATF4|chr22|+        0.0342618121224 0.0733333333333
NM_001212.4|C1QBP|chr17|-       0.000896389923773       0.14
NM_004710.7|SYNGR2|chr17|+      0.034980758178  0.186666666667
NM_006088.6|TUBB4B|chr9|+       3.18707261409e-05       0.0766666666667
NM_182810.3|ATF4|chr22|+        0.0334191451016 0.0733333333333
NM_001415059.1|LOC128125822|chr6|+      0.00024199999286        0.133333333333
NM_001201483.4|ENO1|chr1|-      1.00856937153e-05       -0.0833333333333
NM_001287434.2|CCND3|chr6|-     0.000961788233078       -0.253333333333
NM_001382225.1|MLF2|chr12|-     0.00105364682933        -0.113333333333
NM_001540.5|HSPB1|chr7|+        2.84519966678e-09       0.18
XM_017006385.3|TM4SF1|chr3|-    0.0364188883913 0.0633333333333
XM_017018690.2|MCRS1|chr12|-    0.0483860417505 -0.333333333333
NM_001142418.2|MORF4L2|chrX|-   0.000896389923773       0.116666666667
NM_004343.4|CALR|chr19|+        0.000786224988722       0.113333333333
NM_014214.3|IMPA2|chr18|+       0.0199561049702 -0.2
NM_006082.3|TUBA1B|chr12|-      3.3583534335e-08        0.0666666666667
NM_001012300.1|MCRS1|chr12|-    0.0483860417505 -0.333333333333
NM_001401021.1|VDAC1|chr5|-     0.00187651696863        -0.0533333333333
NR_145822.1|RNA28SN1|chr21|+    1.17667631741e-14       -0.146666666667
NM_000146.4|FTL|chr19|+ 0.000142319104784       0.123333333333
NM_002273.4|KRT8|chr12|-        1.00856937153e-05       -0.136666666667
NR_146154.1|RNA28SN3|chr21|+    0.0017725634309 -0.1
NM_001355006.2|NPM1|chr5|+      1.1353218401e-05        -0.0933333333333
NM_001410932.1|DDX21|chr10|+    0.0309276967547 0.163333333333
NM_001277224.2|TAGLN2|chr1|-    4.00548428495e-12       0.203333333333
NM_001136017.3|CCND3|chr6|-     0.000961788233078       -0.25
NM_003486.7|SLC7A5|chr16|-      5.74552605427e-52       0.08

Gene    adjusted.P_val  PDUI_Group_diff
```





细胞间的比较
```
$ cd /data/wangjl/HeLa/cell_cycle/bedGraph/
$ cat configure_file_HeLa_U2OS.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1
Group1_Tophat_aligned_Wig=G1_rep1.bedgraph,G1_rep2.bedgraph,G1_rep3.bedgraph,S_rep1.bedgraph,S_rep2.bedgraph,S_rep3.bedgraph,G2_rep1.bedgraph,G2_rep2.bedgraph,G2_rep3.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2
Group2_Tophat_aligned_Wig=U2OS_G1_rep1.bedgraph,U2OS_G1_rep2.bedgraph,U2OS_S_rep1.bedgraph,U2OS_S_rep2.bedgraph,U2OS_G2_rep1.bedgraph,U2OS_G2_rep2.bedgraph

Output_directory=DaPars_Output/
Output_result_file=HeLa_U2OS

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.5
Fold_change_cutoff=0.59
########################

$ python2 ~/software/dapars/src/DaPars_main.py configure_file_HeLa_U2OS.config


结果
$ cat DaPars_Output/HeLa_U2OS_All_Prediction_Results.txt | awk '{print $55}' | sort | uniq -c
   2883 N
      1 Pass_Filter
     31 Y

$ cat DaPars_Output/HeLa_U2OS_All_Prediction_Results.txt | awk '$55=="Y" {print $1"\t"$54"\t"$52}' | head
M_032112.3|MRPL43|chr10|-      5.59046632886e-16       -0.552222222222
NM_033668.2|ITGB1|chr10|-       3.00282246599e-53       0.511666666667
XM_006712985.2|CTNNB1|chr3|+    1.42068828477e-22       0.71
XM_047432697.1|ZFAND6|chr15|+   6.7323241788e-05        0.536666666667
NM_022826.4|MARCHF7|chr2|+      1.70706324982e-07       0.767222222222
NM_002491.3|NDUFB3|chr2|+       3.86220485733e-15       -0.573333333333
XM_047422111.1|SDF4|chr1|-      5.74445810505e-12       0.573888888889
NM_001284302.3|ANLN|chr7|+      7.89058388453e-18       0.637916666667
NM_001320397.1|PCNP|chr3|+      1.4109510639e-18        0.621111111111
NM_001163788.4|PTBP3|chr9|-     0.000519552170055       0.53875

NM_001098210.2|CTNNB1|chr3|+    1.4130670429e-24        0.747777777778
NM_007006.3|NUDT21|chr16|-      4.8745809457e-06        0.573333333333
NM_001540.5|HSPB1|chr7|+        2.10109796501e-272      -0.607777777778
NM_152858.3|WTAP|chr6|+ 1.07003003395e-07       -0.525555555556
XM_047424270.1|PTBP3|chr9|-     0.000657945645137       0.540416666667
NM_001376246.1|MARCHF7|chr2|+   1.70706324982e-07       0.76
XM_011510703.3|SEPTIN10|chr2|-  9.39346417804e-06       0.527222222222
NM_001287504.2|ITPRID2|chr2|+   2.23956305031e-05       0.593888888889
XM_024454349.2|MGAT4B|chr5|-    3.86442130742e-09       0.51
NM_001011553.4|SEPTIN7|chr7|+   3.5498245642e-15        0.53

NM_005998.5|CCT3|chr1|- 2.75829343244e-74       -0.517777777778
NM_174889.5|NDUFAF2|chr5|+      1.09231953032e-12       -0.547777777778
NM_020199.3|C5orf15|chr5|-      5.55581020978e-07       0.543888888889
NM_001009552.2|PPP2CB|chr8|-    2.02836061526e-08       0.609444444444
NM_021928.4|SPCS3|chr4|+        0.000119132100481       0.582777777778
NM_001282806.2|MARCHF7|chr2|+   1.70706324982e-07       0.763333333333
NR_073128.1|KTN1|chr14|+        1.56156971201e-10       0.537222222222
NM_002117.6|HLA-C|chr6|-        4.50538210104e-28       -0.507222222222
NM_001302960.2|AIP|chr11|+      1.08258639343e-06       -0.568
NM_001402711.1|KTN1|chr14|+     4.54808175672e-11       0.547777777778

NM_012255.5|XRN2|chr20|+        2.25964736174e-08       0.621666666667

Gene    adjusted.P_val  PDUI_Group_diff

少量几个基因重复：
$ cat DaPars_Output/HeLa_U2OS_All_Prediction_Results.txt | awk '$55=="Y" {print $1}'| awk -F "|" '{print $2}'|sort | uniq -c| sort -k1nr
      3 MARCHF7
      2 CTNNB1
      2 KTN1
      2 PTBP3
      1 AIP
      1 ANLN
      1 C5orf15
...
```




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








# MDA-MB-231 转录本在细胞周期中的变化：抗癌药

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE216497

> Li CX, Wang JS, Wang WN, Xu DK et al. Expression dynamics of periodic transcripts during cancer cell cycle progression and their correlation with anticancer drug sensitivity. Mil Med Res 2022 Dec 19;9(1):71. PMID: 36529792


However, the patterns of transcript isoform expression in the cell cycle are unclear. Therapies targeting cell cycle checkpoints are commonly used as anticancer therapies, but none of them were designed and have been evaluated at alternative splicing transcripts level.

o explore alternative splicing patterns during cell cycle progression, we performed sequential transcriptomic assays following cell cycle synchronization in breast cancer MDA-MB-231 cell lines, used flow cytometry and reference cell cycle transcripts to confirm the cell cycle phases of samples.


- MDA-MB-231 cells were harvested at `0, 3, 4.5, 6, 7, 9, 10, 11.5, 13, and 16 hr` after G1/S phase release. 
- For M phase arrest, when MDA-MB-231 cells were released from G1/S phase, 1 µg/ml nocodazole was added, and after 10 hr, they were supplemented with 5 µg/ml actinomycin D.

> When MDA-MB-231 cells were released from G1/S phase, 1 ug/ml nocodazole was added, and after 10 hr, they were supplemented with 5 ug/ml actinomycin D.

- 微管蛋白抑制剂诺考达唑(Nocodazole)
- 放线菌素D (Actinomycin D) 是一种代谢物、细胞凋亡诱导剂和强效抗生素，可与 DNA 的 GpC 步骤结合。可抑制DNA的修复和RNA的转录、转运，使细胞周期停滞在 G1期。
- 放线菌素D 是自噬的激活剂，可在淋巴细胞性白血病中诱导p53依赖性细胞的死亡。
- 放线菌素D; 更生霉素; 核酸和蛋白质合成抑制剂
- 分子中含有一个苯氧环结构，通过它连接两个等位的环状肽链。此肽链可与DNA分子的脱氧鸟嘌呤发挥特异性相互作用，使dactinomycin D嵌入DNA双螺旋的小沟中，与DNA形成复合体，阻碍RNA多聚酶的功能，抑制RNA的合成，特别是mRNA的合成。属于周期非特异性药物。
- 微管对于细胞进入有丝分裂时期是至关重要的，许多药物，如vincristine、colcemid、Nocodazole等都可以干扰微管的聚合，从而使细胞停留在细胞周期的G2/M 期。


```
1. download
GSM6674966	231_Synchronized RNA-seq_double-thymidine_time 1 0 SRR22029273
GSM6674967	231_Synchronized RNA-seq_double-thymidine_time 2 3 SRR22029272
GSM6674968	231_Synchronized RNA-seq_double-thymidine_time 3 4.5 SRR22029271
GSM6674969	231_Synchronized RNA-seq_double-thymidine_time 4 6 SRR22029270
GSM6674970	231_Synchronized RNA-seq_double-thymidine_time 5 7 SRR22029269
GSM6674971	231_Synchronized RNA-seq_double-thymidine_time 6 9 SRR22029268
GSM6674972	231_Synchronized RNA-seq_double-thymidine_time 7 10 SRR22029267
GSM6674973	231_Synchronized RNA-seq_double-thymidine_time 8 11.5 SRR22029266
GSM6674974	231_Synchronized RNA-seq_double-thymidine_time 9 13 SRR22029265
GSM6674975	231_Synchronized RNA-seq_double-thymidine_time 10 16 SRR22029264

GSM6674976	231_Synchronized RNA-seq_double-thymidine_Nocodazole_ActinomycinD_time 1 0  SRR22029259
GSM6674977	231_Synchronized RNA-seq_double-thymidine_Nocodazole_ActinomycinD_time 2 1.5 SRR22029260
GSM6674978	231_Synchronized RNA-seq_double-thymidine_Nocodazole_ActinomycinD_time 3 3 SRR22029261
GSM6674979	231_Synchronized RNA-seq_double-thymidine_Nocodazole_ActinomycinD_time 4 4.5  SRR22029262
GSM6674980	231_Synchronized RNA-seq_double-thymidine_Nocodazole_ActinomycinD_time 5 6  SRR22029258

GSM6674981	231_Synchronized RNA-seq_control SRR22029263


SRR22029258
to
SRR22029273
$ cd /home/wangjl/data/rsa/MDA-MB-231/
$ fasterq-dump --split-files SRR22029258

$ cat SRR_Acc_List.txt | head -n 8|tail -n4 | while read id; do echo $id; fasterq-dump --split-files $id; done;


2. map
$ mkdir map
id=SRR22029258

STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/MDA-MB-231/${id}_1.fastq /data/wangjl/rsa/MDA-MB-231/${id}_2.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/MDA-MB-231/map/${id}_;


3. index
ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

4.View on scIGV
$ ln -s /data/wangjl/rsa/MDA-MB-231/map/ /data/wangjl/HeLa/cell_cycle/MDA-MB-231
```




## 基因表达定量

```
// Z server.
$ cd /home/wangjl/data/rsa/MDA-MB-231/
$ mkdir counts

$ featureCounts \
-a /data/wangjl/ref/hg38/gencode/GRCh38.p13.gtf \
-p \
-T 10 \
-o counts/featureCounts_MDA-MB-231_CellCycle10Points_matrix.txt \
-t exon -g gene_name \
map/SRR22029*.sortedByCoord.out.bam \
2> counts/SRR22029.sortedByCoord.out.bam.log
#16个bam

比对到:  70-75%
	Successfully assigned alignments : 55424393 (71.6%) 
位置: 
-rw-rw-r-- 1 wangjl wangjl 25M Nov 12 10:25 /home/wangjl/data/rsa/MDA-MB-231/counts/featureCounts_MDA-MB-231_CellCycle10Points_matrix.txt

接着比较不同周期之间的 APA factor 的差异？ 热图





2. use R: /data/wangjl/BMMC/script/b03_bulk_MDA-MB-231-CellCycle10TimePoints.R

同时，直接下载表达量矩阵: GSE216497_231_Synchronized_RNA-seq_gene_expresion_FPKM.txt.gz

```








# HeLa cell along cell cycle

- https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE81485
- https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA321855&o=acc_s%3Aa

```
1. download
GSM2154754	double thymidine block at 0h    SRR3535826  G1-S  来自SRR页面的推断
GSM2154755	double thymidine block at 3h    SRR3535828  S
GSM2154756	double thymidine block at 4.5h  SRR3535830  S-G2
GSM2154757	double thymidine block at 6h    SRR3535832  G2-M   *SRR编号跳了一个数字？
GSM2154758	double thymidine block at 9h    SRR3535834  M-G1
GSM2154759	double thymidine block at 10.5h SRR3535835  M-G1
GSM2154760	double thymidine block at 12h   SRR3535836  G1
GSM2154761	double thymidine block at 15h   SRR3535837  G1-S

GSM2154762	double thymidine block at 18h   SRR3535838  S-G2
GSM2154763	double thymidine block at 19.5h SRR3535839  G2-M
GSM2154764	double thymidine block at 21h   SRR3535840  M-G1
GSM2154765	double thymidine block at 22.5h SRR3535841  M-G1
GSM2154766	double thymidine block at 25.5h SRR3535842  G1
GSM2154767	double thymidine block at 30h   SRR3535843  G1-S

GSM2183617	G1 phase untreated, duplicate  b  SRR3616961  G1-b
GSM2183618	G1 phase untreated, duplicate a   SRR3616962  G1-a


$ cd /home/wangjl/data/rsa/HeLa/
$ cat SRR_list.txt #16个
SRR3535826
SRR3535828
SRR3535830
SRR3535832
SRR3535834
SRR3535835
SRR3535836
SRR3535837

SRR3535838
SRR3535839
SRR3535840
SRR3535841
SRR3535842
SRR3535843
SRR3616961
SRR3616962
$ cat SRR_list.txt | head -n 8 | while read id; do echo $id `date`; done;
$ cat SRR_list.txt | tail -n 8 | while read id; do echo $id `date`; 
fasterq-dump --split-files $id;
done;
22:39-> 34和35报错，35重新下载
$ fasterq-dump --split-files SRR3535835
2023-11-16T10:01:26 fasterq-dump.3.0.7 err: insp_get_file_size( 'https://sra-pub-run-odp.s3.amazonaws.com/sra/SRR3535835/SRR3535835', remotely = YES ) -> RC(rcNS,rcFile,rcCreating,rcTimeout,rcExhausted)




2. map
$ mkdir map
id=SRR3535826

STAR --runThreadN 50 \
--outSAMtype BAM SortedByCoordinate \
--genomeDir /data/wangjl/ref/hg38/gencode/index/STAR/ \
--readFilesIn /data/wangjl/rsa/HeLa/${id}_1.fastq /data/wangjl/rsa/HeLa/${id}_2.fastq \
--genomeLoad LoadAndKeep \
--limitBAMsortRAM 20000000000 \
--outFileNamePrefix /data/wangjl/rsa/HeLa/map/${id}_;


3. index
ls  map/*bam | while read id; do echo $id; 
samtools index -@ 10 $id;
done;

4.View on scIGV
$ ln -s /data/wangjl/rsa/HeLa/map/ /data/wangjl/HeLa/cell_cycle/HeLa
```


## 基因表达定量

```
$ cd /home/wangjl/data/rsa/HeLa/
$ mkdir counts

$ featureCounts \
-a /data/wangjl/ref/hg38/gencode/GRCh38.p13.gtf \
-p \
-T 10 \
-o counts/featureCounts_HeLa_CellCycle16Points_matrix.txt \
-t exon -g gene_name \
map/SRR3*.sortedByCoord.out.bam 2>&1 | \
tee counts/SRR3.sortedByCoord.out.bam.log

assigned 69-79%， SRR3616961 45.7%;
file: counts/featureCounts_HeLa_CellCycle16Points_matrix.txt



2. use R: /data/wangjl/BMMC/script/b04_bulk_HeLa-CellCycle16TimePoints.R

```




## DaPars 分析 APA(HeLa)

```
1. 准备3个文件
(2)To generate the BedGraph files from BAM files

$ cd /home/wangjl/data/rsa/HeLa
$ mkdir bedGraph

$ cat SRR_list.txt 
SRR3535826
...
SRR3616962
共16个

$ cat SRR_list.txt | head -n 8 | while read id; do echo $id `date`; 
$ cat SRR_list.txt | tail -n 8 | while read id; do echo $id `date`; 
bedtools genomecov -bg -ibam /home/wangjl/data/rsa/HeLa/map/${id}_Aligned.sortedByCoord.out.bam \
-g /home/wangjl/data/ref/hg38/hg38_chr_size.txt -split > /home/wangjl/data/rsa/HeLa/bedGraph/${id}.bedgraph;
done;

*****WARNING: Genome (-g) files are ignored when BAM input is provided. 



2. 开始运行 DaPars (Z server)
(2). Sample processing
The files generated in step 1 above will be used in step 2. 

$ cd /home/wangjl/data/rsa/HeLa/bedGraph/
$ cat configure_file_3_0.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1: KO
Group1_Tophat_aligned_Wig=SRR3535828.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2:WT
Group2_Tophat_aligned_Wig=SRR3535826.bedgraph

Output_directory=DaPars_Output/
Output_result_file=hour_3_0

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.2
Fold_change_cutoff=0.59
########################

$ python2 ~/software/dapars/src/DaPars_main.py configure_file_3_0.config
# 只有一个样本，可以跑吗？ #22:17 -> 22:44
$ cat DaPars_Output/hour_3_0_All_Prediction_Results.txt | awk '$16=="Y" {print $1}'| awk -F "|" '{print $2}'|sort | uniq -c| sort -k1nr
      2 ALKBH6
      2 AP1S2
      2 ARID5A
      2 GPNMB
      2 NDRG2
      2 NELL2
      2 PHYKPL
      2 PTK2B
      2 TMEM128
      2 ZFYVE1
      1 ABTB1
      1 ACTMAP
      1 ADCK2
      1 ADIRF
      1 ALX1
... 共94个
ABTB1 ACTMAP ADCK2 ADIRF ALKBH6 ALX1 AP1S2 ARHGEF33 ARID5A BPTF C21orf58 C3orf33 CCDC113 CDC34 CFAP126 CHEK1 CHKB CHN1 CLINT1 CNTLN CRBN CRYL1 CXCL2 DCAF4 DCST1-AS1 DMBT1 EXOC6 FHIP2B FMN2 GCSHP3 GPNMB H2BC5 HERC1 HHLA3 HSCB IFNAR2 IL18BP ITGB4 KLC1 KLRK1 LCOR LINC00680 LOC105375905 LOC124903029 LOXL1 LRP6 LSP1P4 MACROD1 MCCC1 MIR4435-2HG MOK MPZL3 MST1R NDRG2 NELL2 NOL4L NUP210 ODF2L PDE2A-AS2 PELI1 PEX1 PHF8 PHLDB3 PHYKPL POLG2 POMT1 PTK2B RN7SK RNASEH2B RNF138 RNF207 RRAGB SEC24A SETD4 SLC35G1 SMIM7 SNX10 SOCS2 SOGA1 STAG3L5P SWSAP1 TMEM128 TMEM143 TNFSF12-TNFSF13 TNK1 WDR7 WDR81 WHAMMP4 ZBTB45 ZBTB49 ZFYVE1 ZNF621 ZNF708 ZNF79

Gene    fit_value       Predicted_Proximal_APA  Loci    A_1_long_exp    A_1_short_exp   A_1_PDUI        B_1_long_exp    B_1_short_exp   B_1_PDUI        Group_A_Mean_PDUI       Group_B_Mean_PDUI       PDUI_Group_diff P_val   adjusted.P_val  Pass_Filter
$ cat DaPars_Output/hour_3_0_All_Prediction_Results.txt | grep -i sccpdh
NM_016002.3|SCCPDH|chr1|+       10979.0 246767396       chr1:246767195-246768137        92.83   504.37  0.16    93.79   660.49  0.12    0.16    0.12    0.04    0.11102165578702083     0.458318439291  N

NM_001386055.1|ALKBH6|chr19|-   331.4   36009352        chr19:36009120-36009553 17.91   13.32   0.57    37.41   0.00    1.00    0.57    1.0     -0.43   4.72020205006538e-06    0.000199215980933       Y
XM_047439567.1|ALKBH6|chr19|-   541.9   36010876        chr19:36010590-36011077 24.59   48.95   0.33    36.71   41.89   0.47    0.33    0.47    -0.14   0.13221976041816222     0.508974133157  N
NM_198867.1|ALKBH6|chr19|-      331.4   36009352        chr19:36009121-36009553 17.91   13.32   0.57    37.41   0.00    1.00    0.57    1.0     -0.43   4.72020205006538e-06    0.000199215980933       Y




$ cat configure_file_G1_M.config
########################
#(1)3UTR annotation: The following file is the result of step 1.
Annotated_3UTR=/home/wangjl/data/ref/hg38/hg38_refseq_extracted_3UTR.bed 

#(2)sample bedGraph: A comma-separated list of BedGraph files of samples from condition 1: KO
Group1_Tophat_aligned_Wig=SRR3535836.bedgraph,SRR3535837.bedgraph

#A comma-separated list of BedGraph files of samples from condition 2:WT
Group2_Tophat_aligned_Wig=SRR3535832.bedgraph,SRR3535834.bedgraph,SRR3535840.bedgraph,SRR3535841.bedgraph

Output_directory=DaPars_Output/
Output_result_file=G1_M

#At least how many samples passing the coverage threshold in two conditions
Num_least_in_group1=1
Num_least_in_group2=1

Coverage_cutoff=20

#Cutoff for FDR of P-values from Fisher exact test.
FDR_cutoff=0.05
PDUI_cutoff=0.2
Fold_change_cutoff=0.59
########################


$ python2 ~/software/dapars/src/DaPars_main.py configure_file_G1_M.config
# 只有一个样本，可以跑吗？ #22:39 -> 23:46

Gene    fit_value       Predicted_Proximal_APA  Loci    A_1_long_exp    A_1_short_exp   A_1_PDUI        A_2_long_exp    A_2_short_exp   A_2_PDUI        B_1_long_exp    B_1_short_exp   B_1_PDUI        B_2_long_exp    B_2_short_exp   B_2_PDUI        B_3_long_exp    B_3_short_exp B_3_PDUI        B_4_long_exp    B_4_short_exp   B_4_PDUI        Group_A_Mean_PDUI       Group_B_Mean_PDUI       PDUI_Group_diff P_val   adjusted.P_val  Pass_Filter
$ cat DaPars_Output/G1_M_All_Prediction_Results.txt | awk '$16=="Y" {print $1}'| awk -F "|" '{print $2}'|sort | uniq -c| sort -k1nr
NM_016002.3|SCCPDH|chr1|+       8554.1  246767396       chr1:246767195-246768137        88.30   528.05  0.14    79.56   489.77  0.14    108.11  562.21  0.16    90.65   508.83  0.15    101.11  454.15  0.18    85.50   522.89  0.14    0.14    0.1575  -0.0175 0.4181913812357401    0.858902219186  N

没有pass的gene。
$ cat config.file
0  SRR3535826
3  SRR3535828
4  SRR3535830

6  SRR3535832 #4
9  SRR3535834
10 SRR3535835
12 SRR3535836

15 SRR3535837 #4
18 SRR3535838
19 SRR3535839
21 SRR3535840

22 SRR3535841 #3
25 SRR3535842
30 SRR3535843

$ cat config.file | tail -n 11 | head -n 4|tail -n3| while read hour srr; do echo -e $hour"\t"$srr"\t"`date`;
$ cat config.file | tail -n 11 | head -n 8|tail -n4| while read hour srr; do echo -e $hour"\t"$srr"\t"`date`;
$ cat config.file | tail -n3| while read hour srr; do echo -e $hour"\t"$srr"\t"`date`;

$ cat config.file | tail -n 11 | head -n 1| while read hour srr; do echo -e $hour"\t"$srr"\t"`date`;
cp configure_file_3_0.config configure_file_${hour}_0.config;
sed -i -e "s/3_0/${hour}_0/"  -e "s/SRR3535828/${srr}/" configure_file_${hour}_0.config;
python2 ~/software/dapars/src/DaPars_main.py configure_file_${hour}_0.config;
done
```














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








# PCF11 KD dataset (HeLa)

https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE124556
https://www.ncbi.nlm.nih.gov/Traces/study/?acc=PRJNA512488

> Kamieniarz-Gdula K, Gdula MR, Panser K, Nojima T et al. Selective Roles of Vertebrate PCF11 in Premature and Full-Length Transcript Termination. Mol Cell 2019 Apr 4;74(1):158-172.e9. PMID: 30819644

- 3' mRNA-seq in HeLa cells. 
- Control and PCF11 knock-down (4 biological replicates); 
- control and PCF11 PAS1 deletion clones muA and muB (3 biological replicates); 
- control and additional PCF11 PAS1 deletion clones muC and muD (1 replicate).

```
GSM3536477	3'mRNAseq_siLUC_rep1 SRR8383316
GSM3536478	3'mRNAseq_siLUC_rep2 SRR8383317
GSM3536479	3'mRNAseq_siLUC_rep3 SRR8383318
GSM3536480	3'mRNAseq_siLUC_rep4 SRR8383319

GSM3536481	3'mRNAseq_siPCF11_rep1 SRR8383320
GSM3536482	3'mRNAseq_siPCF11_rep2 SRR8383321
GSM3536483	3'mRNAseq_siPCF11_rep3 SRR8383322
GSM3536484	3'mRNAseq_siPCF11_rep4 SRR8383323

GSM3536485	3'mRNAseq_wt_rep1 SRR8383324
GSM3536486	3'mRNAseq_wt_rep2 SRR8383325
GSM3536487	3'mRNAseq_wt_rep3 SRR8383326

GSM3536488	3'mRNAseq_muA_rep1 SRR8383327
GSM3536489	3'mRNAseq_muA_rep2 SRR8383328
GSM3536490	3'mRNAseq_muA_rep3 SRR8383329

GSM3536491	3'mRNAseq_muB_rep1 SRR8383330
GSM3536492	3'mRNAseq_muB_rep2 SRR8383331
GSM3536493	3'mRNAseq_muB_rep3 SRR8383332

GSM3536494	3'mRNAseq_wt_rep4 SRR8383333
GSM3536495	3'mRNAseq_muC     SRR8383334
GSM3536496	3'mRNAseq_muD     SRR8383335



```










