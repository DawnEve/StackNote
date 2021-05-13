import MyMarkdownFile from "../components/MyMarkdownFile.js"

export default{
	template:`
		<my-markdown-file filepath="/data/api/files/recipe.md"></my-markdown-file>
		<!-- 
		<my-markdown-file filepath="/ReadMe.md"></my-markdown-file>
		-->
		

	`,
	components:{ MyMarkdownFile, }
}