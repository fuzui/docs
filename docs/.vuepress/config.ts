import type { UserConfig, DefaultThemeOptions } from "vuepress";

const config: UserConfig<DefaultThemeOptions> = {
  lang: "zh-CN",
  title: "极客文档",
  description: "心之所向，即所向披靡",

  themeConfig: {
    locales: {
      "/": {
        navbar: [
          {
            text: "RuoYi-Antdv",
            link: "/RuoYi-Antdv/",
          },
          {
            text: "GBlog-wx",
            link: "/gblog-wx/",
          },
          {
            text: "风电演示",
            link: "/windpower/",
          },
          {
            text: "博客",
            link: "https://www.geekera.cn/",
          },
        ],
        sidebarDepth: 2,
        sidebar: {
          "/RuoYi-Antdv/": [
            {
              text: "基础",
              isGroup: true,
              children: [
                "README.md",
                "/RuoYi-Antdv/show.md",
                "/RuoYi-Antdv/use.md",
                "/RuoYi-Antdv/directory.md",
                "/RuoYi-Antdv/function.md",
              ],
            },
            {
              text: "其他",
              isGroup: true,
              children: ["update-log.md", "dev-plan.md"],
            },
          ],
          "/gblog-wx/": [
            {
              text: "基础",
              isGroup: true,
              children: [
                "README.md",
                "show.md",
                "use.md",
                "directory.md",
                "function.md",
              ],
            },
            {
              text: "高级配置",
              isGroup: true,
              children: ["open-cloud.md", "posters-share.md", "custom-random-graph.md", "custom-style.md", "check-message.md", "nosercet-login.md", "subscribe.md"],
            },
            {
              text: "其他",
              isGroup: true,
              children: ["dev-plan.md", "update-log.md"],
            },
          ],
          "/windpower/": [
            {
              text: "项目说明",
              isGroup: true,
              children: ["README.md"],
            },
            {
              text: "TrendDB数据库",
              isGroup: true,
              children: ["databaseInstall.md"],
            },
            {
              text: "常见问题",
              isGroup: true,
              children: ["question-and-answer.md"],
            },
          ],
        },
      },
    },
    repo: "fuzui/docs",
    repoLabel: "GitHub",
    smoothScroll: true,
    editLink: true,
    editLinkText: "编辑本页",
    lastUpdated: true,
    lastUpdatedText: "最后更新于",
  },
  base: "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.fuzui.net/blog/logo_31_1587573903203.png",
      },
    ],
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a35645ada7638f826316b05fa8ee955b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
    `,
    ],
  ],
};

export = config;
