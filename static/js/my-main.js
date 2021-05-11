//通过id获取dom
function $(o){
	if(typeof o=="object") return o;
	return document.getElementById(o);
}


/** 返回创建的dom元素
* 只有第一个参数是必须的。
* 其余2个参数可选。
*/
function createElement(tag, json, innerHTML){
	var json=json||{};
	var dom=document.createElement(tag);
	
	if(json!=undefined){
		for(var key in json){
			dom.setAttribute(key,json[key]);
		}
	}
	
	if(innerHTML!=undefined){
		dom.innerHTML=innerHTML;
	}
	return dom;
}







// 右下角 回到顶部 单击
window.addEventListener('load',function(e){
	var gotoTop=document.getElementById('gotoTop');
	gotoTop.onclick = function(){
		var timer = null;
		cancelAnimationFrame(timer);
		timer = requestAnimationFrame(function fn(){
			var oTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(oTop > 0){
				//scrollBy(0,-50);
				scrollBy(0, -Math.max(oTop/20, 10) );
				timer = requestAnimationFrame(fn);
			}else{
				cancelAnimationFrame(timer);
			}
		});
	};
},false);

// 右下角 回到顶部: 滚动超过500px时，显示 gotoTop 按钮
window.addEventListener('scroll',function(e){
	var oTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(oTop>=600){
		gotoTop.style.visibility='visible'
	}else{
		gotoTop.style.visibility='hidden'
	}
},false);




