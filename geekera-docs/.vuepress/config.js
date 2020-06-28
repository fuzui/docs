module.exports = {
	locales: {
		'/': {
			selectText: '选择语言',
        	label: '简体中文',
			lang: 'zh-CN',
			title: '极客文档',
			description: '心之所向，即所向披靡'
		},
		'/en/': {
			selectText: 'Languages',
        	label: 'English',
			lang: 'en-US',
			title: 'Geek Docs',
			description: 'The heart to, namely sweeps away all obstacles'
		}
	},
	head: [
		['link', {
			rel: 'icon',
			href: 'https://cdn.fuzui.net/blog/logo_31_1587573903203.png'
		}],
		['script', {}, `
			var _hmt = _hmt || [];
			(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?a35645ada7638f826316b05fa8ee955b";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
			})();
        `]
	],
	themeConfig: {
		locales: {
			'/': {
				nav: require('./nav/zh'),
				sidebarDepth: 2,
				sidebar: {
					'/gblog-wx/': getGblogwxSidebar('基础', '高级配置'),
				}
			}
		},
		repo: 'fuzui/docs',
		repoLabel: 'GitHub',
		smoothScroll: true,
		lastUpdated: '最后更新于'
	},
	plugins: [
		['@vuepress/back-to-top', true],
		[
            'sitemap',
            {
                hostname: 'https://docs.geekera.cn',
            },
        ],
	],
	extraWatchFiles: [
		'.vuepress/nav/zh.js'
	]
}

function getGblogwxSidebar(groupA, groupB) {
	return [{
			title: groupA,
			collapsable: false,
			children: [
				''
			]
		},
		{
			title: groupB,
			collapsable: false,
			children: [
				'posters-share',
				'custom-style',
				'subscribe'
			]
		}
	]
}