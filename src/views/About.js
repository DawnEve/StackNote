export default{
	template:`
	<nav></nav>
	<article class=about>
		<h1>About 关于</h1>

		<h2>本项目</h2>
		<p>StackNote <img src="/favicon.ico"> 的本意是用来记录读文献/学英语/学编程的心得体会的，为方便自我监督，特别强调了创建日期。</p>
		<p>StackNote 是一个基于Vue3.0的管理 markdown 笔记的博客系统，还用了官方路由插件 vue-router。 
			使用ajax获取md文件，并在浏览器内使用 marked.js 把 Markdown 文件转换为 html。
			为了最大程度的降低复杂度，决定不引入Vuex。未来还可能去掉 vue router插件。</p>
		<p>本项目使用Vue3.0的CDN模式，属于非常规编码。项目无需构建，直接静态服务器即可运行。
			目前博客仅提供前台显示部分，后台目录需要手工维护。整个系统相当于是管理和有序显示markdown的。
			而文章书写推荐使用功能完善的、能编辑和预览 markdown 文件的 
			<a target="_blank" href="https://www.typora.io/">Typora 编辑器</a>。</p>
		<p>项目源码: <a target="_blank" href="https://github.com/DawnEve/StackNote">https://github.com/DawnEve/StackNote</a></p>

		<p>版本变化请关注 <a target="_blank" href="https://github.com/DawnEve/StackNote/blob/master/changeLog.txt">change log</a> 文件。
		使用方法请关注 <a target="_blank" href="https://github.com/DawnEve/StackNote/blob/master/ReadMe.md">Read Me</a> 文件。</p>

		<p class="smaller"><i>注: 我们和网页版的 <a target="_blank" href="https://stacknote.io/">stacknote.io</a> 没有关系，
		与付费的 <a target="_blank" href="https://notestack.io/about">notestack.io</a> 也没有关系。 
		我们只是不约而同的想到了同一个名字，来解决同一个问题：为技术人员提供一个自主可控的笔记文档管理系统。</i></p>







		<h2>About Me</h2>
		<p>我是该博客框架的作者王吃瓜，有什么想法、建议与意见，推荐使用邮件联系我。</p>

		<p>Email: jimmyMall at 163 dot com</p>


		<h2>关于生信</h2>
		<p>如果你对生信感兴趣，不妨关注一下 <a target="_blank" href="http://www.biomooc.com/">生物慕课网</a>，
			这是一个常用生信代码参考网站，特别关注可视化技术。
			鉴于精力和时间有限，进展缓慢。主要针对大屏幕编程用户，所以基本没移动端适配。</p>

		<p>我们还有几个QQ群，感兴趣可以加入: </p>
		<ul>
			<li>生物信息与R语言QQ群 187923577</li>
			<li>NGS分析群 322719050</li>
			<li>生物信息与Phthon/ML/AI群 572686844</li>
			<li>英语读报-英文名著群 755650994</li>
			<li>js/php熟手交流群 369578518</li>
		</ul>


	<h2>目的</h2>
<p><b>阅读文献，追踪都有哪些玩家？</b></p>
<p>某个生物学方向（发育、免疫、癌症）的大佬，强在领域的深耕，先进的技术平台，能产生高质量的data，第一作者和通讯一般都是搞实验的，生信最多也就是个共一，文章容易冲击CNS。【掌握实验材料、临床样本、测序数据】</p>
<p>某个疾病（depression、SLE、HSCR）的遗传学家，主要就是借助genomics的技术来找疾病的variants和genes，以技术为主，文章不容易发大，除非data够大。</p>
<p>大型Atlas合作项目，基本就是烧钱，作铺垫性的工作，短期内很难看到成效，文章基本能发到CNS。</p>
<p>开发算法、模型和数据库的计算生物学家，针对前沿的数据（scRNA-seq，image data）和问题（pleiotropy），提出特定的解决方案，文章也不容易发大，以统计和算法为主。</p>





		<br>
		<hr>

		<h2>友情链接</h2>
		<p>主要包括我自己通过各种渠道看到的或精致或专业的个人博客，欢迎推荐自己的博客给我，如果我感兴趣也会添加到下面。</p>

		<h3>web技术博客</h3>
		<p v-html="linksWeb"></p>



		<h3>生信技术博客</h3>
		<p v-html="linksBioinfo"></p>


	</article>
	<aside></aside>
	`,

	data(){
		return{
			linksWeb: marked(`
- [廖雪峰的官方网站](https://www.liaoxuefeng.com/): Git, Python, JavaScript, SQL,  
- [阮一峰的网络日志](http://www.ruanyifeng.com/blog/): JavaScript,  
- [灵感_idea](https://ideazhao.com/): 前端博客  
- [南科大计科笔记](https://github.com/Sunt-ing/SUSTech-CS-Notes): CS-Notes
			`),


			linksBioinfo: marked(`
- [Firas Sadiyah](https://firas.io/post/): training 栏目挺好
- [徐洲更](http://xuzhougeng.top/): [生信脚本](https://github.com/xuzhougeng/myscripts/blob/master/igv_web.py)
- [白墨石](https://zhenglei.blog.csdn.net/article/details/111247660): 统计学，生信文件格式
- [顾恺](https://www.bioinfo-scrounger.com/)
- [Alboukadel Kassambara (肿瘤生信)](https://www.alboukadel.com/): [统计 sthda](http://www.sthda.com/english/)、[可视化(ggpubr/factoextra/survminer)](https://rpkgs.datanovia.com/)
- [陈雯-斑马鱼-lncRNA](http://blog.biochen.com/about)
- [Digital-LI 生信文献](https://www.cnblogs.com/leezx/)：日常分享文献, 按[tag](https://www.cnblogs.com/leezx/tag/)查看。
- [yiweiniu ATAC](https://yiweiniu.github.io/blog/)
- [Zou Weige](https://www.jianshu.com/u/ec301f20ee2b): 单细胞, labmate
- a-[小xuo生](https://www.cnblogs.com/jessepeng/p/?page=14): 生信R语言/机器学习，植物


- [Yunze Liu 博客](https://www.jieandze1314.com/): [单细胞分析](https://jieandze1314.osca.top/)
	* [#TCGA](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4NjU4ODQ2MQ==&action=getalbum&album_id=1642483079111835651&scene=173)
- [DAVE TANGs BLOG](https://davetang.org/muse/learn/): 十年生信博主 english: COMPUTATIONAL BIOLOGY AND GENOMICS
	* [Ming Tang](https://divingintogeneticsandgenomics.rbind.io/): 生信个人主页
	* [可重复性研究](https://davetang.github.io/reproducible_bioinformatics/index.html)
- [基迪奥生物](https://www.zhihu.com/org/ji-di-ao-sheng-wu): R语言绘图、文献思路等

- 公众号合集: 
	* [#转录组研究](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MTcwNjA4NQ==&action=getalbum&album_id=1335351932285976579)
			`)
		}
	}
}

