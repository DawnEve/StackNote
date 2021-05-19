# StackNote 

![logo](./static/images/StackNote_logo.png)

> A serveless blog system based on Vue3.0

Aim: 记录文献阅读/英语/代码等笔记，方便自我监督。


## Supported Browsers

StackNote require a modern web browser with support for Javascript ECMAScript 2015.


## What's new?
- 支持 快速新增顶部菜单，并对应到一个md文件。
- 第二版 logo
- 首页随机显示一条自定义 鸡汤



# Directory structure
```
/
|index.html
|static/
  |-js/
    |-lib/ Vue3.js, vue-router.js, marked.js, ...
    |-my-main.js # self defined js function
  |-css/
    |-MarkDown.css # md的样式
    |-index.css # self defined style
|src/
  |-views/
    |-About.js
    |-Home.js
    |-MyPost.js
  |-components/
    |-PostTags.js
|data/  # User data here, editable
  |-api
    |-db.json # a json file, like a DataBase of posters, and categories;
    |-ChickenSoup.json #自定义鸡汤
  |-files
    |-recipe.md # 菜谱示例: 放新增顶部菜单对应的md文本
  |-2021/ # one year one dir
    |-0509-test2.md  # blog files
```

博客基础代码不到1M，如果想上传到github，请十分吝啬图片的使用，以避免整个文件夹体积过大。

用户的可编辑部分大都在 /data/ 文件夹下。
顶部菜单是在 /index.html 中定义的。




# How to use this note system?

## 1.Download

$ git clone https://github.com/DawnEve/StackNote.git

## 2.Create a md file

In `/data/2021/` with a name like `0511`-how_to_use_xx.`md`,

    File name must be started with 4 digits: month and date;
    and ended with .md or .html
    文件名只能使用大小写字母、数字和下划线_、连字符-，不能出现 空格 和 汉字，否则可能出错。

- We recommend using awesome [Typora](https://www.typora.io/) to edit your markdown file.
- You can save both .md file and .html file ( `Fule - Output - html with style` ), and use html file in the note system, leaving the .md file to be edited in the future.
- When insert pictures, using absolute path in markdown, like `/data/2021/images/05/xx.png` 



## 3.Update meta data

lastly, edit database-like file  `/data/api/db.json`, which is a JSON file containing the meta data of the system.

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

- Categories are also defined in this json file.
```
categories: {1:"文献", 2:"英语", 3:"代码", 4:"杂谈" }
```
Don't change category info too often, or you may risk messing up the system.


- Newest file sits at the top in `posts` key.
- Title is the file name of .md or .html.
- Caption is the header shown in the top of each note page.


- Tags are recorded in `/data/api/tags.js`. Though this file is useless to the system up to now, it can help you curb the use of too many tags.




## 4.Run a static server

You can use `Apache` or `Node` or `Python` to start a static server, or push the files to github pages.

```
## node: tested on CentOS and win10
$ npm install -g http-server ## install once

Start http-server from the project root directory
$ cd /your/path/
$ http-server -p 12345

or 
$ npx http-server 


or using python3
## setup a http server at the current dir:
$ python -m http.server --bind 127.0.0.1 12345
```

Then open your web browser: http://localhost:12345




## 5.Editing methods

#### How to add a new top menu pointing to a .md file?

Add the info in /index.html, add router, import file
make new file like src/views/Recipe.js





# 意见反馈

若内容有争议、或做得不到位的地方，请及时联系我们进行整改。



# 参与贡献

如果您对本项目有任何建议或发现文中内容有误的，欢迎提交 issues 进行指正。
对于项目的更正和改进，欢迎提交 PR。

GitHub: https://github.com/DawnEve/StackNote

如果您有文章推荐请以 markdown 格式到邮箱 jimmyMall at 163 dot com


# todo list

- 怎么翻页？
- 怎么处理多个/data/子文件夹 [done]
- 移动端字体太小 [done]
- 移动端隐藏侧栏 [done]
- 说说
- 友情链接
- 打印版css表
- 第三方留言 https://twikoo.js.org/
