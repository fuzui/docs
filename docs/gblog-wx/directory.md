---
title: 代码结构
---

```
GBLOG-WX
├── cloudfunctions                  // 云服务
│      └── check_message            // 云函数 敏感词汇过滤
│      └── get_qrcode               // 云函数 小程序码生成
├── miniprogram
│      └── components               // 自定义组件
│              └── admin-login      // 后台登陆页
│              └── article-list     // 文章列表
│              └── authorize        // 微信登录
│              └── comment          // 评论列表
│              └── image-loader     // 图片处理组件
│              └── painter          // painter小程序生成图片组件
│              └── mp-weixin        // mp-html小程序富文本组件
│      └── config                   // 配置文件
│      └── custom-tab-bar           // 自定义tabbar
│      └── images                   // 图片
│      └── pages                    // 页面代码
│      └── services                 // 封装方法
│              └── api              // 接口实现
│              └── const-data       // 常量
│              └── posters          // 海报样式
│      └── styles                   // 样式
│              └── colorui          // color-ui组件库
│      └── utils                    // 公用js
```

