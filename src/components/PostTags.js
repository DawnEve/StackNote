
export default{
	props:['tags'],
	template:`
		<template v-for="tag in tags">
			<a :href="'#/tag/'+tag">{{tag}}</a> 
		</template>
	`
}