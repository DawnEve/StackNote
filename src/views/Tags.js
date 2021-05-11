// get post list

export default{
	inject:['categories', 'tagdict', 'posts'],

	template:`
	<nav></nav>

	<article>
		<h1>Tags</h1>
		<div class="tag-cloud">
			<div class=tag>
				<template v-for="(i,v) in tagdict">
					<a class=larger :href="'#/tag/'+v">{{v}}({{i}})</a>
				</template>
			</div>
		</div>


		<br>

		<ul class="post-archive-container">
			<li class="post-archive" v-for="post in posts.value" :id="post.title">
				{{post.time}} <a :href="'#'+post.url">{{post.caption}}</a>
			</li>
		</ul>


	</article>
	<aside></aside>
	`,

}