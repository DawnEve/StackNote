
export default{
	props:['tags'],
	template:`
		<template v-if="isNotEmpty">
			tags: 
			<template v-for="tag in tags">
				<a :href="'#/tag/'+tag">{{tag}}</a> 
			</template>
		</template>
	`,

	computed:{
		isNotEmpty(){
			return Object.keys(this.$props.tags).length != 0
		}
	}
}