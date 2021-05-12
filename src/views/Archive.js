// get post list

export default{
	inject:['categories', 'posts', 'years'],

	template:`
	<nav></nav>

	<article>
		<h1>Archive</h1>

		<ul class="post-archive-container">

			<template v-for="year in years">
				<h2>{{year}}</h2>
				
				<template v-for="post in posts.value" :id="post.title">

					<li class="post-archive" v-if="post.year==year">
						{{post.date}} <a :href="'#'+post.url">{{post.caption}}</a>
					</li>

				</template>

			</template>
			

		</ul>

	</article>

	<aside></aside>
	`,

    components:{ }
}