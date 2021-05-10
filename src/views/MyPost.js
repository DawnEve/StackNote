//MyPost.js

export default {
	props:['caption'],
	template:`
		<h1>{{caption}}</h1>
		<div class='content' v-html="compiledMarkdown"></div>
	`,

	
    methods:{
    	getData(e){
    		var self=this;
    		var path=this.path;

			axios.post('/data/'+path, {
				action:'fetchall',
				usr:"admin",
				pass:123
			}).then(function(response){
				self.input=response.data;
			});
    	}
    },

	computed: {
		compiledMarkdown() {
			return marked(this.input, {});
		},
	},

    mounted(){
    	this.getData()
    },
}