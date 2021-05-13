# 简介

Vue.js 是 渐进式 JavaScript 框架(The Progressive JavaScript Framework)，特点如下:

- 易用 Approachable: 已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！
- 灵活 Versatile: 不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。
- 高效 Performant: 20kB min+gzip 运行大小, 超快虚拟 DOM, 最省心的优化



## how to use
[英文官网](https://www.vuejs.org/)
[中文官网](https://cn.vuejs.org/)


```
目前一共三个版本了，我从2.0开始关注:
vue2.0
https://github.com/miostudio/vue_learn
http://vue.biomooc.com/


vue3.0
https://github.com/DawnEve/jsLecture
http://jslecture.biomooc.com/Vue/index.html
```

## how to use named ancher without trigger router?

Ref [sf](https://stackoverflow.com/questions/42645964/vue-js-anchor-to-div-within-the-same-component)

```
//P.S. the code is written for Vue 2.
//You will have to adjust it to Vue 1.

//Your view:
<a class="porto-button" @click="scrollMeTo('porto')">Porto, Portugal</a>
...
<div ref="porto" class="fl-porto">



//Your code:
methods: {
  scrollMeTo(refName) {
    var element = this.$refs[refName];
    
    //method 1
    var top = element.offsetTop;
    window.scrollTo(0, top);

    //method 2
    //element.scrollIntoView({ behavior: 'smooth' });
  }
}
```


