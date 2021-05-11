
export default{
	inject:['categories', 'catdict'],
	template:`
	<h3>分类目录</h3>
	<ul>
		<li v-for="(v,k) in categories">
			<a :href="'#/category/'+v">{{v}} ({{catdict[k] | 0}})</a>
		</li>
	</ul>
	`
}