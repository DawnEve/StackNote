// get post list
import PostTags from "../components/PostTags.vue.js"
import MyCategory from "../components/MyCategory.vue.js"

import ChickenSoup  from "../components/ChickenSoup.vue.js"


export default{
	inject:['categories', 'posts'],

	template:`
	<nav>
		<my-category />
	</nav>

	<article class="content">
		<!--
		<blockquote>
			“聪明出于勤奋,天才在于积累。”
		</blockquote>
		-->

		<ul class="post-preview-container">
			<li class="post-preview" v-for="post in posts.value" :id="post.title">
				<div class="post-time">
					{{post.time}}
				</div>

				<div class="post-info">
					<a :href="'#'+post.url"><h3>{{post.caption}}</h3></a>
					/
					<span class=cat>
						<a title="category" :href="'#/category/'+categories.value[post.category]">
							{{categories.value[post.category]}}</a>
					</span> 
					/ 
					<span class=tags> <post-tags :tags="post.tags"></post-tags> </span>
				</div>
			</li>
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


		<chicken-soup></chicken-soup>
	</aside>

	`,

    components:{ PostTags, MyCategory, ChickenSoup }
}