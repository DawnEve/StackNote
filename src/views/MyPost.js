//MyPost.js

export default {
	data(){
		return{
			path: this.$route.params.postPath.join('/'), //this.$route.fullPath,
			info:"# header",
			suffix: 'md',
		}
	},
	//props:['caption'],
	template:`
		<div class=content>
			<p class="title">Path: /data/{{path}}</p>
			<div class='markdown' :class="[{'typora-export':suffix=='html'}]">
				<div v-html="info"></div>
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
					self.info=marked(response.data, {});
				}else{
					self.info=response.data;
				}
			});
    	}
    },

    mounted(){
    	this.getData()
    },
}