---
title: 海报分享
---
>首先[开启并配置云环境](./open-cloud.md)（若不使用海报分享功能可跳过）

1. 开启

在后台主题设置中通用设置开启海报分享。
2. 上传云函数

右击cloudfunctions下get_qrcode文件夹，点击“创建并部署：云端安装依赖(不上传node_moudles)”，等待完成。

![](https://oss.fuzui.net/img/003602_309f2b60_4988475.png)

3. 右击cloudfunctions，同步云函数列表

![](https://oss.fuzui.net/img/003602_52e131c9_4988475.png)

4. 设置downloadFile合法域名

在[微信后台](https://mp.weixin.qq.com/)需将博客图片地址域名（halo附件地址）和微信头像域名添加到downloadFile合法域名，例如`cdn.fuzui.net`与`wx.qlogo.cn`、`thirdwx.qlogo.cn`。（在开发者工具中可勾选不校验合法域名运行）