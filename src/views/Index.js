
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
			//Canvas 坐标系统: 左上角原点，x向左，y向下为正方向。
			//Canvas 角度系统: x轴+方向为0，顺时针为角度正方向。使用弧度制，换算方法 Math.PI/180*角度

			function drawFrame(){
				//获取时间
				var now=new Date();
				var hour=now.getHours(); //24小时制
				var minute=now.getMinutes();
				var second=now.getSeconds();

				//1. settings
				var marginLength=10; //四边空白部分
				var tickLengthL=30; //表盘刻度长度，长刻度 1-12
				var tickLengthS=20; //表盘刻度长度，短刻度 1-2中间5格
				var centerR=8; //中心点的半径

				var ratioH=0.45; //时针半径与表盘的比例
				var ratioM=0.65; //分针半径与表盘的比例
				var ratioS=0.8; //秒针半径与表盘的比例

				//(2).设置前景色、背景色
				var fColor="#000"; //daylight
				var bColor="#fff";
				//晚上黑北京: 18点后 6点前。
				if(hour >18 || hour<6){
					fColor="#fff"; //night
					bColor="#000";
				}


				//2. begin to draw
				// (1)清空画布
				canvas.height = canvas.height;

				//(2).圆形钟表外圈
				var R=(canvas.width-marginLength)/2; //圆盘半径
				var cX=(canvas.width-marginLength)/2+ marginLength/2; //圆心坐标
				//描边
				//ctx.save() //保存图形状态
				ctx.beginPath();
				ctx.arc(cX,cX,R, 0, Math.PI*2);
				ctx.closePath(); //结束路径
				//
				ctx.lineWidth=marginLength; //描边宽度
				ctx.strokeStyle="#000";
				ctx.stroke(); //描边
				//
				ctx.lineWidth=marginLength*0.9; //描边宽度
				ctx.strokeStyle="#555";
				ctx.stroke(); //描边
				//
				ctx.lineWidth=marginLength*0.5; //描边宽度
				ctx.strokeStyle="#999";
				ctx.stroke(); //描边
				//
				ctx.lineWidth=marginLength*0.2; //描边宽度
				ctx.strokeStyle="#fff";
				ctx.stroke(); //描边

				//填充 背景色
				ctx.fillStyle=bColor;
				//ctx.globalAlpha=0.7;
				ctx.fill();//白色表盘

				//(3)指针中心点
				//ctx.globalAlpha=1;
				ctx.fillStyle=fColor;
				ctx.beginPath();
				ctx.arc(cX,cX, centerR, 0, Math.PI*2);
				ctx.fill();
				//ctx.restore() //保存图形状态

				// (4)刻度线
				//大刻度线
				var Rh=(canvas.width-tickLengthL)/2; //时针内圈的半径
				var angle=Math.PI/180; //PI*2==360度, 
				for(var i=0; i<360; i+=30){
					//console.log(i/30);
					ctx.beginPath();
					ctx.moveTo(cX+R*Math.cos(angle*i), cX+R*Math.sin(angle*i));
					ctx.lineTo(cX+Rh*Math.cos(angle*i), cX+Rh*Math.sin(angle*i));
					ctx.lineWidth=2;
					ctx.strokeStyle=fColor;
					ctx.stroke();
				}

				//小刻度线
				var Rm=(canvas.width-tickLengthS)/2; //小格子内圈的半径
				for(var i=0; i<360; i+=6){
					//console.log(i/6);
					ctx.beginPath();
					ctx.moveTo(cX+R*Math.cos(angle*i), cX+R*Math.sin(angle*i));
					ctx.lineTo(cX+Rm*Math.cos(angle*i), cX+Rm*Math.sin(angle*i));
					ctx.lineWidth=1;
					ctx.strokeStyle=fColor;
					ctx.stroke();
				}

				//小时数值 1-12
				var r=0.85;
				ctx.font="bold 25px Arial"; //文字样式
				ctx.textAlign='center'; //文字对齐 center
				ctx.textBaseline='middle';
				ctx.fillStyle=fColor;
				for(var i=0; i<360; i+=30){
					var x=cX+Rh*Math.cos(angle*i)*r;
					var y=cX+Rh*Math.sin(angle*i)*r;
					//填充文字
					var text=Math.round( (i/30+2)%12+1 ); //刻度值
					ctx.fillText( text, x, y);//文字和位置
				}


				// (5) 指针
				//画时针
				var angle_pH=angle*(( hour %12+minute/60+second/3600)-3)/12*360;
				ctx.beginPath();
				ctx.moveTo(cX+ratioH*R*Math.cos(angle_pH), cX+ratioH*R*Math.sin(angle_pH));
				ctx.lineTo(cX,cX);
				ctx.lineWidth=5;
				ctx.strokeStyle=fColor;
				ctx.stroke();

				//画分针
				var angle_pM=angle*((minute+second/60)%60-15)/60*360;
				ctx.beginPath();
				ctx.moveTo(cX+ratioM*R*Math.cos(angle_pM), cX+ratioM*R*Math.sin(angle_pM));
				ctx.lineTo(cX,cX);
				ctx.lineWidth=3;
				ctx.strokeStyle=fColor;
				ctx.stroke();

				//画秒针
				var angle_pS=angle*((second)%60-15)/60*360;
				ctx.beginPath();
				ctx.moveTo(cX+ratioS*R*Math.cos(angle_pS), cX+ratioS*R*Math.sin(angle_pS));
				ctx.lineTo(cX,cX);
				ctx.lineWidth=2;
				ctx.strokeStyle="#F00";
				ctx.stroke();

				//(6) 动画下一帧
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