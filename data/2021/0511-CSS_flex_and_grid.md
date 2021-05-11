
> 随便写点，有空慢慢补。



flex适合一维布局
 grid适合二维布局
 Grid 可以做Flexbox做不了的事
 Flex可以做 Grid 做不了的事
 他们可以共同工作
 Grid item可以成为flexbox容器
 flex item可以成为grid 容器
 Grid 可以嵌套 flexFlexbox本质上从单一维度布局，行或列
 grid布局从双维度行和列

前端工程师可以flex布局一把梭，解决80%以上的需求。





# flex和grid布局的差别

flex是一维布局 ，grid是二维布局也就是说grid布局可以更好的操作行和列。flex布局和grid布局是现在的主流的两种布局方式。



# flex 布局

```
flex-direction:
- row(默认) 水平，起点在左端
- row-reverse 水平，起点在右端
- column:垂直，起点在上沿
- column-reverse:垂直，起点在下沿

.container{
	display:flex; /* 使元素成为flex容器，也可用 inline-flex，区别在于一个容器在文档流里是块级元素，一个是行内元素*/ 
	flex-direction: row; /* 沿水平方向从左往右排列*/
}
```



一个flex布局的例子: 上中下，其中 中间部分又分为左中右。

```
<!DOCTYPE html>
<header>header...</header>

<main>
   <nav>1nav...</nav>
   <article>2article...</article>
   <aside>3aside...</aside>
</main>

<footer>footer...</footer>

<style>
main { display: flex; border:1px solid #eee;}
main > nav     { order: 1; width: 200px; }
main > article { order: 2; min-width: 12em; flex:1; }
main > aside   { order: 3; width: 200px; }

main, nav, article, aside{
	border:1px solid red;
	margin:3px;
	height: 80px;
}
</style>
```

效果如下:

![flex_demo](/data/2021/images/05/flex_demo.png)



## flex 缩放自适应

https://www.html.cn/archives/7212









# 开起网格布局 display:grid;

```

<div class="box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

<style>
.box{
    width: 1200px;
    height: 80vh;
    display: grid;  /* 开启grid布局*/
    grid-template-columns: repeat(3,30%);   /* 设置列*/
    grid-template-rows: repeat(3,30%);  /* 设置行*/
    grid-column-gap: 20px; /* 设置网格之间的间距*/
    grid-row-gap: 20px; /* 设置网格之间的间距*/
}

.box div{
    background-color: #34ce57;
}
</style>
```

如下图

![grid_demo](/data/2021/images/05/grid_demo.png)



- The end;