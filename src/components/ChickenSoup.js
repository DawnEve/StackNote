export default{
	template:`
		<pre v-if="sentence!=''" class="box saying">{{sentence}}</pre>
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