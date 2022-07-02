
export default{
	template:`
	<div class="content">
		<h1>Welcome!</h1>
		<i>Genomics . Data . Science</i>
		<blockquote style="border-left:5px solid #bdbdbd; 
		font-size: 1.125em;font-style: italic;
		margin-left:0px; padding-left:10px;">
		<p style="max-width:300px; color:#999;">Computational biologist using genomic data science 
		to explore the epigenomics of the immune system.</p>
		</blockquote>

		<div id="page-index">

			<p>» <a href="#/category/文献">文献阅读：照亮前方的路</a> </p>
			<p>» <a href="#/category/英语">学英语：打开一扇门的钥匙</a> </p>
			<p>» <a href="#/category/代码">代码研究：代码就是生产力</a> </p>
			<p>» <a href="#/home">全部博客(Blog)</a>  </p>
			

			<img src="/static/images/StackNote_logo.png" />
			<br>
			<span>Powered by StackNote</span>
		</div>

		<div id="clockdiv">
		    <canvas id="canvas-clock" width="210" height="210">时钟canvas</canvas>
		</div>

	</div>		
	`,

	methods:{
		clockRun(){
			//初始化画布
			var canvas = document.getElementById('canvas-clock');
			//获取context对象
			var ctx = canvas.getContext('2d');
			function drawFrame(){
				//获取时间
				var H=new Date().getHours();
				var M=new Date().getMinutes();
				var S=new Date().getSeconds();

				//settings
				var length_L=30;
				var length_M=20;

				canvas.height = canvas.height // 清空画布

				//2.晚上涂黑 18点后 6点前。
				if(H >18 || H<6){
					ctx.fillStyle="#000";
				}else{
					ctx.fillStyle="#FFF";
				}
				// 如果是晚上，则涂黑背景
				ctx.fillRect(0,0, canvas.width,canvas.height);

				//3.圆形钟表外圈
				var R=(canvas.width-10)/2;
				var cX=(canvas.width-10)/2+5; //圆心的坐标
				//描边
				ctx.beginPath();
				ctx.lineWidth=3;
				ctx.arc(cX,cX,R, 0, Math.PI*2);
				ctx.closePath(); //结束路径
				ctx.stroke(); //描边
				//填充
				ctx.fillStyle="#FFF";
				ctx.globalAlpha=0.7;
				ctx.fill();//白色表盘

				//中心点
				ctx.globalAlpha=1;
				//ctx.fillStyle="#000";
				ctx.beginPath();
				ctx.arc(cX,cX, 5, 0, Math.PI*2);
				ctx.fill();

				//时针描线,
				var Rh=(canvas.width-length_L)/2; //时针内圈的半径
				var angle=Math.PI/180; //PI*2==360度, 
				for(var i=0; i<360; i+=30){
					//console.log(i/30);
					ctx.beginPath();
					ctx.moveTo(cX+R*Math.cos(angle*i), cX+R*Math.sin(angle*i));
					ctx.lineTo(cX+Rh*Math.cos(angle*i), cX+Rh*Math.sin(angle*i));
					ctx.lineWidth=2;
					ctx.stroke();
				}

				//小格子描线
				var Rm=(canvas.width-length_M)/2; //小格子内圈的半径
				for(var i=0; i<360; i+=6){
					//console.log(i/6);
					ctx.beginPath();
					ctx.moveTo(cX+R*Math.cos(angle*i), cX+R*Math.sin(angle*i));
					ctx.lineTo(cX+Rm*Math.cos(angle*i), cX+Rm*Math.sin(angle*i));
					ctx.lineWidth=1;
					ctx.stroke();
				}


				//画时针
				var angle_pH=angle*(( H %12+M/60+S/3600)-3)/12*360;
				ctx.beginPath();
				ctx.moveTo(cX+0.5*R*Math.cos(angle_pH), cX+0.5*R*Math.sin(angle_pH));
				ctx.lineTo(cX,cX);
				ctx.lineWidth=5;
				ctx.stroke();

				//画分针
				var angle_pM=angle*((M+S/60)%60-15)/60*360;
				ctx.beginPath();
				ctx.moveTo(cX+0.7*R*Math.cos(angle_pM), cX+0.7*R*Math.sin(angle_pM));
				ctx.lineTo(cX,cX);
				ctx.lineWidth=2;
				ctx.stroke();

				//画秒针
				var angle_pS=angle*((S)%60-15)/60*360;
				ctx.beginPath();
				ctx.moveTo(cX+0.8*R*Math.cos(angle_pS), cX+0.8*R*Math.sin(angle_pS));
				ctx.lineTo(cX,cX);
				ctx.lineWidth=1;
				ctx.strokeStyle="#F00";
				ctx.stroke();

				//下一帧
				//window.requestAnimationFrame(that.drawFrame) //报错
				setTimeout( function(){
					drawFrame()
				}, 1000)
			}
			drawFrame();
		}
	},

	mounted(){
		this.clockRun();
    	console.log("Canvas clock run.")
    },

}