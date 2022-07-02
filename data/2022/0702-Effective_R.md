高效R语言编程

记录和探讨高效使用R语言的经验和教训，有些算是最佳实践。

> h1 间隔10行，h2间隔5行;





# 1.熟悉R语言


## 学习方法R语言

学习R的方法包括: 看视频，读博客，在线课程，经典书，大量练习，论文，源码。

视频比较直观，方便入门。
但是视频容量有限，最后细节还是要靠看书，搜博客。

这个过程中肯定要配合大量练习，不能复制粘贴，自己打字才能知道错在哪里。
如果一个话题读不懂，可以多找十几个博客等教程，总有一个能看进去的，然后其余的做补充。
或者今天看不懂，过两天继续看，可能就懂了。
如果是数学等前置知识不够，那就先补齐前置知识再接着看。


实际使用时，还是要看论文里的描述，先模仿再改进和超越。

熟练后，读经典、知名R包的源码是精进R代码水平最快的方式。
读的时候很痛苦，要做笔记，开始要硬着头皮读，后面就越来越轻松了。





## 使用=而不是<-

我认为<-这个符号除了历史原因外，没有存在的必要，能用=的优先使用=，除非不得不用。
<=的缺点：输入时要按2个键(即使用快捷键也是2个键)；与其他语言不同，大多数情况是冗余的；写到html中会和<>冲突，可能导致有些代码不显示，不利于分享。

必须使用<-而不能使用=的场景，我见过的十分有限:

```
system.time(expr1 <- rnorm(10e5))
system.time(expr2 = rnorm(10e5)) # error
```





## 设置查看函数，同时查看 head() 和 tail()

```
.env = new.env() #创建新环境，使用 .开头的变量， > ".env" %in% ls() #[1] FALSE
.env$ht = function(d, n = 6){ print(dim(d)); rbind(head(d, n), tail(d, n)) } #添加函数
attach(.env) #把环境添加到当前环境

> ht(iris, 2)
    Sepal.Length Sepal.Width Petal.Length Petal.Width   Species
1            5.1         3.5          1.4         0.2    setosa
2            4.9         3.0          1.4         0.2    setosa
149          6.2         3.4          5.4         2.3 virginica
150          5.9         3.0          5.1         1.8 virginica
```





# 2.向量化操作


## (1) 要声明向量的长度

```
# 不声明向量长度，则每次长度增加都需要复制整个向量，十分耗时。
fn1 = function(n){
	res=NULL;
	for(i in 1:n){
		res=c(res, i);
	}
	return(res);
}

# 声明长度后就很快了。
fn2 = function(n){
	# res=vector(typeof(0L), n);
	res=numeric(n); #第二种写法
	for(i in 1:n){
		res[i]=i;
	}
	return(res);
}

# 直接用R原生函数是最快的。
fn3 = function(n){
	return( seq(1,n,1) )
}

# 耗时
> system.time(fn1(1e5)) #十分慢
   user  system elapsed 
  7.328   0.016   7.341 
> system.time(fn2(1e5)) #很快
   user  system elapsed 
  0.005   0.000   0.005
> system.time(fn3(1e5)) #最快
   user  system elapsed 
  0.001   0.000   0.001 

# install.packages('microbenchmark')
library("microbenchmark")
n=1e5
> microbenchmark(fn1(n), fn2(n), fn3(n), times = 5, unit = "s")
```


## 越靠近C/C++越快

```
# 把数组arr的第一个元素累加n次
fn1=function(arr, n){
  for(i in 1:n){
    arr[1]=arr[1]+i
  }
  return(arr)
}

# 尝试先取值，减少了不必要的 arr[1] 取值操作
fn2=function(arr, n){
  x=arr[1]
  for(i in 1:n){
    x=x+i
  }
  arr[1]=x
  return(arr)
}

fn3=function(arr, n){
  arr[1]=arr[1]+sum(1:n)
  return(arr)
}

arr=c(1,2,3)
n=1e6
> system.time(fn1(arr, n))
   user  system elapsed 
   0.05    0.00    0.05 
> system.time(fn2(arr, n)) #这个节省了一半时间。
   user  system elapsed 
  0.018   0.000   0.018 
> system.time(fn3(arr, n))
   user  system elapsed 
      0       0       0 
```









# 3.数据框的操作









# R 包的使用

## 查看R包函数的源码

可以在R中查看，也可以在github上找源码查看。


```
> runif
function (n, min = 0, max = 1) 
.Call(C_runif, n, min, max)
<bytecode: 0x557e501cfcc0>
<environment: namespace:stats>

> getFunction("dim")
function (x)  .Primitive("dim")

> getFunction(".Primitive")
function (name)  .Primitive(".Primitive")

> getFunction("head")
function (x, ...) 
UseMethod("head")
<bytecode: 0x557e5121a3b8>
<environment: namespace:utils>
```


```
> getFunction("as.factor")
function (x) 
{
    if (is.factor(x)) 
        x
    else if (!is.object(x) && is.integer(x)) {
        levels <- sort.int(unique.default(x))
        f <- match(x, levels)
        levels(f) <- as.character(levels)
        if (!is.null(nx <- names(x))) 
            names(f) <- nx
        class(f) <- "factor"
        f
    }
    else factor(x)
}
<bytecode: 0x557e4fddfbe8>
<environment: namespace:base>
```














# 参考: 写的过程中发现的资料。

- [Efficient R programming @github](https://csgillespie.github.io/efficientR/)
	https://csgillespie.github.io/efficientR/programming.html

