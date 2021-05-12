// get post list

export default{
	inject:['categories', 'tagdict', 'posts'],

	template:`
	<nav></nav>

	<article>
		<h1>Tags<template v-if="$route.params.tag">: {{$route.params.tag}}</template></h1>
		<div class="tag-cloud">
			<div class=tag>
				<template v-for="(i,v) in tagdict">
					<a :class="{cur:$route.params.tag==v}" :href="'#/tag/'+v">{{v}}({{i}})</a>
				</template>
			</div>
		</div>


		<br>



		<ul class="post-archive-container">
			<template v-if="$route.params.tag">
				<template v-for="post in posts.value" :id="post.title">
					<li class="post-archive" v-if="post.tags.includes($route.params.tag)">
						<span>{{post.time}}</span>

						<span>/<a title="category" :href="'#/category/'+categories[post.category]">
									{{categories[post.category]}}</a>/</span>

						<span><a :href="'#'+post.url">{{post.caption}}</a></span>
					</li>
				</template>
			</template>



			<template v-else>
				<li class="post-archive" v-for="post in posts.value" :id="post.title">
					<span>{{post.time}}</span>

					<span>/<a title="category" :href="'#/category/'+categories[post.category]">
								{{categories[post.category]}}</a>/</span>

					<span><a :href="'#'+post.url">{{post.caption}}</a></span>
				</li>
			</template>
		</ul>


	</article>
	<aside></aside>
	`,

}