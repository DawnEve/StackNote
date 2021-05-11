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

## Download

$ git clone https://github.com/DawnEve/StackNote.git

## Create a md file

In `/data/2021/` with a name like `0511`-how_to_use_xx.`md`,

    File name must be started with 4 digits: month and date;
    and ended with .md or .html


- We recommend using awesome `Typora` to edit your markdown file.

- You can also save the md file and use html file ( `文件-导出-html with style` ) in the note system.

  

## Update meta data

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






# todo list

/  OK //todo 侧边栏没做
	/post/xxx.md OK  侧目录OK
	/category/xx
	/tag/xx

/archive //todo
/tags //todo

/about OK


