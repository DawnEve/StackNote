// get post list
import PostTags from "../components/PostTags.vue.js"
import MyCategory from "../components/MyCategory.vue.js"

export default{
	inject:['categories', 'posts'],

	template:`
	<nav>
		<my-category />
	</nav>

	<article class="content">
		<h1>Category: {{$route.params.cate}}</h1>


		<ul class="post-preview-container">
			<template v-for="post in posts.value" :id="post.title">


				<li class="post-preview" v-if="$route.params.cate==categories.value[post.category]">
				<div class="post-time">
					{{post.time}}
				</div>

				<div class="post-info">
					<a :href="'#'+post.url"><h3>{{post.caption}}</h3></a>

					<span class=cat>
						<a title="category" :href="'#/category/'+categories.value[post.category]">
							{{categories.value[post.category]}}</a>
					</span> 
					/ 
					<span class=tags> <post-tags :tags="post.tags"></post-tags> </span>
				</div>
				</li>


			</template>
		</ul>
	</article>

	<aside>
		<div class=box>
			<div class=light>
				Genomics . Data . Science
				<br>
				<br>
				Paper · English · R/Python · bioinfomatics · random thoughts
			</div>
		</div>


	</aside>

	`,

    components:{ PostTags, MyCategory,  }
}