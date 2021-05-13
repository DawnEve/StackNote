//MyPost.js
import PostTags from "../components/PostTags.js"
import MyCategory from "../components/MyCategory.js"

export default {
	inject:['categories', 'posts'],

	data(){
		return{
			path: this.$route.params.postPath.join('/'), //this.$route.fullPath,
			html:"# Loading ...",
			suffix: 'md',
			//posts: this.$root.$data.posts,
			//post: 'xx', 

		}
	},
	//props:['caption'],
	template:`
	<nav>
		<my-category />
	</nav>

	<article>
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
						<a title="category" :href="'#/category/'+categories.value[post.category]">
							{{categories.value[post.category]}}</a> /
						<span class=tags>tags: <post-tags :tags="post.tags"></post-tags> </span>
					</div>
				</template>
			</template>



			<div class='markdown' :class="[{'typora-export':suffix=='html'}]">
				<div v-html="html"></div>
			</div>
	</div>
	</article>


	<aside>
		<div id="side_contents">
			<div class='side_menu'></div>
		</div>
	</aside>

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
			}, function(err){
				//console.log("1-->failed:",err)
				self.html=marked("# 404 (Not Found)");
			}).then(function(){
				self.addContents();
			});
    	},



    	/*添加目录*/
    	//v2.0 修订过，锚点加到h内;
    	addContents(){
			var oMd=document.getElementsByClassName("content")[0],
				aH=oMd.querySelectorAll("h1,h2,h3,h4,h5,h6"),
				oUl=createElement('ol');
				
			for(var i=0;i<aH.length;i++){
				var j=i+1;
				var oH=aH[i],
					text=oH.innerText,  //"5.启动nginx"
					tagName=oH.tagName;  //"H3"
				var indentNum='indent_'+ tagName.replace("H",''); //标题缩进行数
				
				if(text.trim()!=""){
					// if h tag is empty, do nothing
					//1. add anchor					
					oH.append(
						createElement('a',{'name':'pos'+j,
							'my-data':'anchor',
							//'style':"margin-top:-1px; padding-top:1px; border:1px solid rgba(0,0,0,0.0);"
						},)
					)

					
					//2. show in the contents
					var innerSpan = createElement('span',{},text );
					var innerLi = createElement('li',{'class':'text_menu '+indentNum} );
					// 添加点击锚点
					var innerA = createElement('a',
						{
							//'href':'#pos'+j, 
						'onclick': "scrollMeTo('pos"+j+"')",
						'title':tagName+": "+text}); //鼠标悬停提示文字
					// 装载锚点 
					innerLi.appendChild(innerSpan);
					innerA.appendChild(innerLi);
					oUl.appendChild( innerA );
				}
			}
			
			//2.加入侧边菜单中
			$("side_contents").getElementsByTagName("div")[0].append( oUl.cloneNode(true) );
		},


		/*滚轮时更新 当前目录*/
		//v2.0 锚点在h内时，要看 a的父节点h距离顶部的距离
		highlightCurrentContent() {
			var log=console.log;
			//为了保证兼容性，这里取两个值，哪个有值取哪一个
			//scrollTop就是触发滚轮事件时滚轮的高度
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//开始循环干活了
			//目录内容
			var oMenu=$('side_contents');
			var aSpan=oMenu.getElementsByTagName("span");
			
			//正文内容
			var aA= document.querySelectorAll("a[my-data]");

			//对正文的锚点进行遍历
			for(var i=0;i<aA.length;i++){
				if(aA[i].parentNode.offsetTop<scrollTop+20){
					//remove class cur, for 导航
					for(var j=0;j<aSpan.length;j++){
						aSpan[j].parentElement.parentElement.setAttribute("class","");
						//aSpan[j].parentElement.setAttribute("class","");
					}
					//add class cur, for 导航
					var oA=aSpan[i].parentElement.parentElement
					//var oA=aSpan[i].parentElement
					oA.setAttribute("class","cur")
				}
			}
		},


		// 改版右侧 目录宽度
		changeSideBarWidth(){
			var oDiv=$("side_contents");
			var oSide=document.getElementsByTagName('aside')[0];

			oDiv.style.width = getComputedStyle( oSide ).width
		},



    },

    mounted(){
    	this.getData();
    	window.addEventListener('scroll', this.highlightCurrentContent, true);

    	this.changeSideBarWidth();
    	window.addEventListener('resize', this.changeSideBarWidth, true);
    },

    // 离开组件要销毁监听
    unmounted() {
	  window.removeEventListener("scroll", this.highlightCurrentContent, true);
	  window.removeEventListener('resize', this.changeSideBarWidth, true);
	  //console.log('destroyed! on scroll')
	},

    components:{ PostTags, MyCategory, }
}