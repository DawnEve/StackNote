export default{
	template:`
		<pre v-if="sentence!=''" class="box saying">{{sentence}}</pre>

		<component is="style" scoped>
		/*
		https://cloud.tencent.com/developer/ask/sof/1004033
		*/
		    pre.box{font-weight:bold; color:#bbb;}
		</component>
	`,
	data(){
		return{
			sentence: ''
		}
	},


	methods:{
    	getSentence(){
    		var self=this;
			axios.get('/data/api/ChickenSoup.json', {} ).then(function(res){
				var data=eval("("+res.data+")");
				var len=data.length, 
					n=Math.floor(Math.random() * len );

				//console.log(data, len)
				self.sentence=data[n];
			})
		}
	},

	mounted(){
		this.getSentence();
	}


}