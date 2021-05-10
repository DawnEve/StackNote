//没用上，总是出错: 数据不同步
var log=console.log;

var store = {
  debug: true,
  state: {
    posts:null,
    categories: {1:"文献", 2:"英语", 3:"代码", 4:"杂谈" },
  },

  init: function(){
  	if (this.debug) console.log('init MessageAction triggered');
    var self=this;
  	axios.get('/data/api/posts', {} ).then(function(res){
  		var posts=eval(res.data);
  		for(var i=0; i<posts.length;i++){
  			var post=posts[i];
  			// 计算属性
  			post.url='/post/'+post.year+"/"+post.title;
  			post.time=post.year +'-'+ post.title.substring(0,2) +'-' + post.title.substring(2,4);
  		}

  		self.state.posts=posts;
  	});
  },


  //底下的等待删除
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.posts = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.posts = ''
  }
};

store.init();

export default store;