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

			`),
			linksBioinfo: marked(`
- [徐洲更](https://github.com/xuzhougeng/myscripts/blob/master/igv_web.py): 生信脚本
- [白墨石](https://zhenglei.blog.csdn.net/article/details/111247660): 统计学，生信文件格式
- [Yunze Liu 博客](https://www.jieandze1314.com/): [单细胞分析](https://jieandze1314.osca.top/)
	* [#TCGA](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4NjU4ODQ2MQ==&action=getalbum&album_id=1642483079111835651&scene=173)
- [DAVE TANG'S BLOG](https://davetang.org/muse/learn/): 十年生信博主 english: COMPUTATIONAL BIOLOGY AND GENOMICS
	* [Ming Tang](https://divingintogeneticsandgenomics.rbind.io/): 生信个人主页
	* [可重复性研究](https://davetang.github.io/reproducible_bioinformatics/index.html)

- 公众号合集: 
	* [#转录组研究](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzI5MTcwNjA4NQ==&action=getalbum&album_id=1335351932285976579)
			`)
		}
	}
}

