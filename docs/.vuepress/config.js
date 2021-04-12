module.exports = {
	// "deploy-gh": "GH=1 yarn docs:build && bash scripts/deploy-gh.sh"
  base: '/blog-demo/',
  title: 'blog-demo',
  description: 'Vuepress blog demo',
  themeConfig: {
	  	// 你的GitHub仓库，请正确填写
	    repo: 'git@github.com:Roxannej/blog.git',
	    // 自定义仓库链接文字。
	    repoLabel: 'My GitHub',
	  	nav: [
	  		{ text: 'Home', link: '/' },
	  		{ text: 'FirstBlog', link: '/blog/FirstBlog.md' }, 
				{ text:'博客', 
				items:[
					{text:'vue', link:'/index/vue/vue/md'}
				]}
			]
  }
}