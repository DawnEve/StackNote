export default{
	template:`
	<nav></nav>
	<article class=about>
		<h1>About 关于</h1>

		<h2>本项目</h2>
		<p>StackNote <img src="/favicon.ico"> 的本意是用来记录读文献/学英语/学编程的心得体会的，为方便自我监督，特别强调了创建日期。</p>
		<p>StackNote 是一个基于Vue3.0的管理 markdown 笔记的博客系统，还用了官方路由插件 vue-router。 
			使用ajax获取md文件，并在浏览器内使用 marked.js 把 Markdown 文件转换为 html。</p>
		<p>本项目使用Vue3.0的CDN模式，属于非常规编码。项目无需构建，直接静态服务器即可运行。
			目前博客仅提供前台显示部分，后台目录需要手工维护。文章书写推荐使用能编辑和预览 markdown 文件的 Typora 编辑器。</p>
		<p>GitHub: <a target="_blank" href="https://github.com/DawnEve/StackNote">https://github.com/DawnEve/StackNote</a></p>

		<p>版本变化请关注 <a target="_blank" href="https://github.com/DawnEve/StackNote/blob/master/changeLog.txt">change log</a> 文件。</p>

		<p>使用方法请关注 <a target="_blank" href="https://github.com/DawnEve/StackNote/blob/master/ReadMe.md">Read Me</a> 文件。</p>




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

	</article>
	<aside></aside>
	`,
}