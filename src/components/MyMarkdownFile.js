// my-markdown-files filepath="/data/api/files/recipe.md"

export default{
	props:['filepath', 'title'],

	template:`
		<nav></nav>
		<article>
			<div class=content>
				<p class="path">Path: {{filepath}}</p>

				<div class="post-title">
			        {{title}}
			    </div>
			    <div class="post-meta"></div>


				<div class='markdown' v-html="md"></div>
			</div>
		</article>
		<aside></aside>
		<link rel="stylesheet" type="text/css" href="/static/css/MarkDown.css">
	`,

	data(){
		return{
			md: "# Loading ...",
		}
	},


	methods:{
    	getData(){
    		var self=this;
			axios.get(this.$props.filepath, {}).then(function(res){
				self.md=marked( res.data )
			})
		}
	},

	mounted(){
		this.getData();
	},
}