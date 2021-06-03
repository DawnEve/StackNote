
export default{
	template:`
	<div class="content">
		<h1>Welcome!</h1>
		<i>Genomics . Data . Science</i>
		<blockquote style="border-left:5px solid #bdbdbd; 
		font-size: 1.125em;font-style: italic;
		margin-left:0px; padding-left:10px;">
		<p style="max-width:300px; color:#999;">Computational biologist using genomic data science 
		to explore the epigenomics of the immune system.</p>
		</blockquote>

		<div id="page-index">

			<p>» <a href="#/category/文献">文献阅读：照亮前方的路</a> </p>
			<p>» <a href="#/category/英语">学英语：打开一扇门的钥匙</a> </p>
			<p>» <a href="#/category/代码">代码研究：代码就是生产力</a> </p>
			<p>» <a href="#/home">全部博客(Blog)</a>  </p>
			

			<img src="/static/images/StackNote_logo.png" />
			<br>
			<span>Powered by StackNote</span>
		</div>

		<div id="clockdiv">
		    <canvas id="dom" width="120" height="120">时钟canvas</canvas>
		</div>

	</div>		
	`,

}