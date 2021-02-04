---
title: 海报分享
---
>配置小程序云服务（若不使用海报分享功能可跳过）

### 1.开启
在`config/api.js`文件中，修改如下代码
```json
const ShareConfig = {
  isOpen: false,
  env: ''
}
```
修改isOpen为`true`
(env为函数ID在下方提到)
### 2.如未配置在控制台会出现如下提示：

![](https://oss.fuzui.net/img/003601_03be824a_4988475.png)

### 3.点击开发者工具左上方“云开发”，进入开通，填写环境名称和环境ID创建；

![](https://oss.fuzui.net/img/003601_534028ef_4988475.png)

### 4.右击cloudfunctions，点击更多设置，选择刚刚创建的环境；

![](https://oss.fuzui.net/img/003601_d97e171a_4988475.png)

### 5.在`config/api.js`文件中修改刚刚设置云服务的环境ID

`1.`中所提到的`env`

### 6.打包上传云函数，首先安装npm、node环境（步骤略，推荐安装nvm：[Windows下安装及使用NVM](https://blog.csdn.net/qq_32682137/article/details/82684898)）,可通过`npm -v`检测是否安装。

### 7.右击cloudfunctions下get_qrcode文件夹，点击终端中打开，出现get_qrcode目录的cmd命令行，输入命令`npm i`等待完成，会发现多出如下`node_moudles`文件夹和`package-lock.json`文件。

![](https://oss.fuzui.net/img/003602_fd9b6b40_4988475.png)

![](https://oss.fuzui.net/img/003601_c9a84123_4988475.png)

![](https://oss.fuzui.net/img/003602_8a02f00f_4988475.png)

### 8.右击cloudfunctions下get_qrcode文件夹，点击“创建并部署：云端安装依赖(不上传node_moudles)”，等待完成。

![](https://oss.fuzui.net/img/003602_309f2b60_4988475.png)

### 9.右击cloudfunctions，同步云函数列表。

![](https://oss.fuzui.net/img/003602_52e131c9_4988475.png)

### 10.设置downloadFile合法域名
在[微信后台](https://mp.weixin.qq.com/)需将博客图片地址域名（halo附件地址）和微信头像域名添加到downloadFile合法域名，例如`cdn.fuzui.net`与`wx.qlogo.cn`。（在开发者工具中可勾选不校验合法域名运行）