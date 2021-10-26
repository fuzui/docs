---
title: 搭建
---

## 后台搭建

采用halo搭建，具体可查看[halo文档](https://halo.run)

> Halo 是一款现代化的个人独立博客系统

## 小程序配置

* 拉取代码

  ```shell
  git clone git@github.com:fuzui/GBlog-wx.git
  ```

* 导入工具

  通过[微信公众平台](https://mp.weixin.qq.com/)注册小程序账号，登录后在`开发——开发设置`中查看AppID；

  下载微信开发者工具，选择`小程序——导入项目`，选择刚刚clone的文件夹并填写自己的AppID.

  ![1](https://cdn.fuzui.net/blog/1_1588866821272.png)

* 配置

  将`miniprogram/config`中`api-tmp.js`文件复制并重命名为`api.js`。

  修改`api.js`如下配置：

  ```javascript
  const ApiBaseUrl = '';//生产上
  const Config = {
    AccessKey: '',
    guestbookSheetId: 2
  }
  ```

  1.`ApiBaseUrl`为halo后台地址，上线必须为域名，在开发者工具中可点击`右上角详情——本地设置`，将不校验合法域名打勾。

  2.`AccessKey`为halo api的AccessKey。进入halo后台管理系统，在`系统——博客设置——高级选项——API设置`中，将API 服务开启，并设置Access key。将此Access key填入上述js文件中对应位置。

  ![123](https://cdn.fuzui.net/blog/123_1588867938268.png)

  3.`guestbookSheetId`该值是留言板页面id，默认为关于页的评论，可自行前往表结构中查看。（默认2）



* 配置合法域名

  在[微信公众平台](https://mp.weixin.qq.com/)中，`开发——开发设置——服务器域名`中添加request、uploadFile、downloadFile合法域名。将上述`ApiBaseUrl`域名添加到request合法域名，例如`www.geekera.com`。

  <img src="https://oss.fuzui.net/img/20200529020312.png" style="zoom:150%;" />

  ![](https://oss.fuzui.net/img/20200628014304.png)

* 设置小程序最低基础库版本要求

  在[微信公众平台](https://mp.weixin.qq.com/)中，`设置 - 基本设置 - 基础库最低版本设置`进行配置，保存为2.10.4版本。

  > 原因：[《小程序登录、用户信息相关接口调整说明》](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)

  ![](https://oss.fuzui.net/img/20210326002230.png)



*当以上配置完成后，便可开启你的小程序之旅了*