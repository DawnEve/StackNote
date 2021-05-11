// get post list
import PostTags from "../components/PostTags.js"


export default{
	inject:['categories', 'posts'],


	template:`
		<blockquote>
			“聪明出于勤奋,天才在于积累。”
		</blockquote>

		<ul class="post-preview-container">
			<li class="post-preview" v-for="post in posts.value" :id="post.title">
				<div class="post-time">
					{{post.time}}
				</div>

				<div class="post-info">
					<a :href="'#'+post.url"><h3>{{post.caption}}</h3></a>

					<span class=cat>
						<a title="category" :href="'#/category/'+categories[post.category]">
							{{categories[post.category]}}</a>
					</span> / 
					<span class=tags>tags: <post-tags :tags="post.tags"></post-tags> </span>
				</div>
			</li>
		</ul>

	`,

    components:{ PostTags, }
}