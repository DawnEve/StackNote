
export default{
	inject:['categories', 'catdict'],
	template:`
	<h3><a href="#/home">分类目录</a></h3>
	<ul>
		<li v-for="(v,k) in categories.value">
			<a :href="'#/category/'+v">{{v}} ({{catdict[k] | 0}})</a>
		</li>
	</ul>
	`
}