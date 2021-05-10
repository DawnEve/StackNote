// get post list
import PostTags from "../components/PostTags.js"


export default{
	inject:['categories', ],

	data(){
		return{
			posts:'',
		}
	},

	template:`
	<div class=content>
		<ul class="post-preview-container">
			<li class="post-preview" v-for="post in posts" :id="post.title">
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
	</div>
	`,

	methods:{
    	getPostList(e){
    		var self=this;
    		var log=console.log;

			axios.get('/data/api/posts', {} ).then(function(res){
				var posts=eval(res.data);
				for(var i=0; i<posts.length;i++){
					var post=posts[i];
					// 计算属性
					post.url='/post/'+post.year+"/"+post.title;
					post.time=post.year +'-'+ post.title.substring(0,2) +'-' + post.title.substring(2,4);
				}
				self.posts=posts;
			});
    	}
    },

    mounted(){
    	this.getPostList()
    },

    components:{ PostTags, }

}