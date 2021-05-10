//MyPost.js
import PostTags from "../components/PostTags.js"

export default {
	inject:['categories', 'posts'],

	data(){
		return{
			path: this.$route.params.postPath.join('/'), //this.$route.fullPath,
			html:"# Loading ...",
			suffix: 'md',
			//posts: this.$root.$data.posts,
			post: 'xx', 

		}
	},
	//props:['caption'],
	template:`
		<div class=content>
			<p class="path">Path: /data/{{path}}</p>
			

			<!-- 详情 -->
			<template v-for="post in posts.value">
				<template v-if="post.year+'/'+post.title==this.path ">
					<div class="post-title">
				        {{post.caption}}
				    </div>
				    <div class="post-meta">
						{{post.time}} / 
						<a title="category" :href="'#/category/'+categories[post.category]">
							{{categories[post.category]}}</a> /
						<span class=tags>tags: <post-tags :tags="post.tags"></post-tags> </span>
					</div>
				</template>
			</template>



			<div class='markdown' :class="[{'typora-export':suffix=='html'}]">
				<div v-html="html"></div>
			</div>
		</div>
		<link v-if="suffix=='md'" rel="stylesheet" type="text/css" href="/static/css/MarkDown.css" media="all">
	`,


    methods:{
    	getData(){
    		//更新后缀名
    		var arr1=this.path.split('.');
			this.suffix=arr1[arr1.length-1];

    		//获取后台数据
    		var self=this;
			axios.get('/data/'+this.path, {
				/*action:'fetchall',
				pass:123*/
			}).then(function(response){
				if(['md', 'markdown'].indexOf(self.suffix)!=-1 ){
					self.html=marked(response.data, {});
				}else{
					self.html=response.data;
				}
			});
    	}
    },

    mounted(){
    	this.getData()
    },

    components:{ PostTags, }
}