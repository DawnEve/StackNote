


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



// 滚动超过500px时，显示 gotoTop 按钮
window.addEventListener('scroll',function(e){
	var oTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(oTop>=600){
		gotoTop.style.visibility='visible'
	}else{
		gotoTop.style.visibility='hidden'
	}
},false);
