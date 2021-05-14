import MyMarkdownFile from "../components/MyMarkdownFile.js"

export default{
	template:`
		<!-- 
		<my-markdown-file filepath="/data/api/files/recipe.md" title="Recipe"></my-markdown-file>
		-->
		<my-markdown-file filepath="/ReadMe.md" title="ReadMe"></my-markdown-file>
	`,
	components:{ MyMarkdownFile, }
}