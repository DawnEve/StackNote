// get post list

export default{
	inject:['categories', 'posts'],

	template:`
	<nav></nav>

	<article>
		<h1>Archive</h1>

		<ul class="post-archive-container">
			<li class="post-archive" v-for="post in posts.value" :id="post.title">
				{{post.time}} <a :href="'#'+post.url">{{post.caption}}</a>
			</li>
		</ul>

	</article>

	<aside></aside>
	`,

    components:{ }
}