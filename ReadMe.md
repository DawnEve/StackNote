# StackNote 

> a serveless blog system based on Vue3.0

Aim: 记录文献/英语/代码等，方便自我监督。


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
  |-api/posts # ajson file, like a DataBase of posters;
  |-2021/ # one year one dir
    |-0509-test2.md  # blog files
```




# How to use this note system?

## 1.Download

$ git clone https://github.com/DawnEve/StackNote.git

## 2.Create a md file

In `/data/2021/` with a name like `0511`-how_to_use_xx.`md`,

    File name must be started with 4 digits: month and date;
    and ended with .md or .html


- We recommend using awesome `Typora` to edit your markdown file.

- You can also save the md file and use html file ( `文件-导出-html with style` ) in the note system.

  

## 3.Update meta data

lastly, edit database-like file  `/data/api/posts`, which is an array containing the meta info of every posts.

```
[
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
```

- Newest files at the top.
- Caption is the last header shown in the note page.
- Categories are defined in /index.html 

```
categories: {1:"文献", 2:"英语", 3:"代码", 4:"杂谈" }
```

You can edit it yourself, but we recommend you think carefully before your note started to avoid mess up in the future.

- Tags are recorded here `/data/api/tags.js`. Though this file is useless to the system up to now, it can help you remember.

## 4.run a static server

You can use apache or node.js, or push to github pages.

```
## node 版静态资源服务器: centOS / win10 测试通过
$ npm install -g http-server ## 安装一次即可
$ cd /your/path/
$ http-server -p 12345
```

Then use web browser: localhost:12345



# 意见反馈

若内容有争议、或做得不到位的地方，请及时联系我们进行整改。


# 参与贡献

如果您对本项目有任何建议或发现文中内容有误的，欢迎提交 issues 进行指正。
对于项目的更正和改进，欢迎提交 PR。
如果您有文章推荐请以 markdown 格式到邮箱 jimmyMall at 163 dot com



# todo list

/  OK
	/post/xxx.md OK
	/category/xx OK
	/tag/xx

/archive OK
/tags OK

/about OK

