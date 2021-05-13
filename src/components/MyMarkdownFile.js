// my-markdown-files filepath="/data/api/files/recipe.md"

export default{
	props:['filepath'],

	template:`
		<nav></nav>
		<article>
			<div class=content>
				<p class="path">Path: {{filepath}}</p>
				<div class='markdown'>
					<div v-html="md"></div>
				</div>
			</div>
		</article>
		<aside></aside>
		<link rel="stylesheet" type="text/css" href="/static/css/MarkDown.css">
	`,

	data(){
		return{
			md: "#  header 1",
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