
export default{
	inject:['categories'],
	template:`
	<h3>分类目录</h3>
	<ul>
		<li v-for="(v,k) in categories">
			<a :href="'#/category/'+v">{{v}}</a>
		</li>
	</ul>
	`
}