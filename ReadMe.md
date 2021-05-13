# StackNote 

> A serveless blog system based on Vue3.0

Aim: 记录文献/英语/代码等，方便自我监督。


## Supported Browsers

StackNote require a modern web browser with support for Javascript ECMAScript 2015.


## What's new?
- 支持 快速新增顶部菜单，并对应到一个md文件。



# Directory structure
```
/
|index.html
|static/
  |-js/
    |-lib/ Vue3.js, vue-router.js, marked.js, ...
  |-css/
|src/
  |-views/
    |-About.js
    |-Home.js
    |-MyPost.js
  |-components/
    |-PostTags.js
|data/  # User data here, editable
  |-api/db.json # a json file, like a DataBase of posters, and categories;
  |-files/recipe.md #放新增顶部菜单对应的md文本
  |-2021/ # one year one dir
    |-0509-test2.md  # blog files
```

博客基础代码不到1M，如果想上传到github，请特别珍惜使用图片，否则文件体积会迅速膨胀。

用户的可编辑部分大都在 /data/ 文件夹下。
除了顶部菜单，是在 /index.html 中定义的。



# How to use this note system?

## 1.Download

$ git clone https://github.com/DawnEve/StackNote.git

## 2.Create a md file

In `/data/2021/` with a name like `0511`-how_to_use_xx.`md`,

    File name must be started with 4 digits: month and date;
    and ended with .md or .html

- We recommend using awesome `Typora` to edit your markdown file.
- You can also save the md file and use html file ( `文件-导出-html with style` ) in the note system.
- Use absolute picture url in markdown, like `/data/2021/images/05/xx.png` 


## 3.Update meta data

lastly, edit database-like file  `/data/api/db.json`, which is an json containing the meta info of the system.

```
{
	categories:{1:"文献", 2:"英语", 3:"代码", 4:"杂谈" },

	posts:[
	 
		{
			year: 2021,
			title:"0511-CSS_flex_and_grid.md",
			caption: "CSS布局: flex and grid",
			category:3,
			tags: ['css', "flex", "grid"],
		},

		{
			year: 2021,
			title:"0509-test.md",
			caption: "测试1",
			category:1,
			tags: ["IGV", "测试"]
		},

		{
			year: 2021,
			title:"0509-test2.md",
			caption: "测试2",
			category:3,
			tags: ['js', "测试"]
		},
	]
}
```

- Newest files at the top in `posts`.
- Caption is the header shown in the note page.
- Categories are also defined in this json file.

```
categories: {1:"文献", 2:"英语", 3:"代码", 4:"杂谈" }
```
Don't change category info too often, or you may risk mess up the system.

- Tags are recorded here `/data/api/tags.js`. Though this file is useless to the system up to now, it can help you curb the use of too many tags.




## 4.run a static server

You can use apache or node.js, or push to github pages.

```
## node 版静态资源服务器: centOS / win10 测试通过
$ npm install -g http-server ## 安装一次即可

Start http-server from the project root directory
$ cd /your/path/
$ http-server -p 12345

or 
$ npx http-server 
```

Then use web browser: http://localhost:12345


## 5.how to add a new top menu liking to a md file?

Add the info in /index.html, add router, import file
make new file like src/views/Recipe.js






# 意见反馈

若内容有争议、或做得不到位的地方，请及时联系我们进行整改。


# 参与贡献

如果您对本项目有任何建议或发现文中内容有误的，欢迎提交 issues 进行指正。
对于项目的更正和改进，欢迎提交 PR。
如果您有文章推荐请以 markdown 格式到邮箱 jimmyMall at 163 dot com


# todo list

- 怎么翻页？
- 怎么处理多个/data/子文件夹？
- 移动端字体太小 [done]
- 移动端隐藏侧栏 [done]
- 说说
- 友情链接
- 打印版css表
- 第三方留言 https://twikoo.js.org/