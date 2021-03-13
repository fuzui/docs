---
title: 自定义样式
---
* 自定义文章解析样式

在`api.js`文件中，修改`ParserStyle`.

```javascript
const ParserStyle = {
  table: 'border-collapse:collapse;border-top:1px solid gray;border-left:1px solid gray;margin: 28rpx 0;',
  th: 'border-right:1px solid gray;border-bottom:1px solid gray;background: #ccc;',
  td: 'border-right:1px solid gray;border-bottom:1px solid gray;',
  blockquote: 'background-color:#e7f6ed;border-left:6px solid #4caf50;color:rgb(136, 136, 136);padding: 20rpx 40rpx 20rpx 30rpx;margin: 28rpx 0;',
  ul: 'padding-left: 25px;',
  ol: 'padding-left: 25px;',
  h1: 'font-size: 1.5em;line-height: 50px;',
  h2: 'font-size: 1.17em;line-height: 40px;',
  h3: 'font-size: 0.83em;line-height: 30px;',
  h4: 'font-size: 0.67em;line-height: 30px;',
  h5: 'font-size: 0.50em;line-height: 30px;'
}

```

`table`、`th`、`td`为表格样式；`pre`为代码块样式；`blockquote`为引用样式，你也可以增加更多，例如`tr`、`a`、`h1`等。



* 代码高亮

当前支持`html、css、C-like、JavaScript、shell、bash、docker、git、php、nginx、less、json、java、go、properties、sql、yaml`，主题为`Tomorrow Night`。

需按以下步骤来实现更多扩展及自定义：

1. 下载[mp-html](https://github.com/jin-yufeng/mp-html)

   git 方式

   ```shell
   # 通过 github 获取
   git clone https://github.com/jin-yufeng/mp-html.git
   # 或通过 gitee 获取
   git clone https://gitee.com/jin-yufeng/mp-html.git
   ```

   下载zip

   *github releases*：https://github.com/jin-yufeng/mp-html/releases
   *gitee releases*：https://gitee.com/jin-yufeng/mp-html/releases

   

   > 先装好node环境

2. 自定义高亮代码

   前往 [官网](https://prismjs.com/download.html) 下载对应的 *prism.min.js* （选择Minified version，下载后`prism.js`重命名为`prism.min.js`）和 *prism.css* 并替换 mp-html中*plugins/highlight/* 目录下的文件。

3. 开启插件

   在 mp-html中*tools/config.js* 文件中，将`plugins`中audio（音乐播放器）、highlight（代码高亮）、markdown（解析 md）取消注释。

   修改`plugins/highlight/config.js`中`copyByLongPress: true`以开启代码块复制功能。

4. 打包

   在mp-html根目录输入以下命令

   * `npm install`

     > 如果过慢可使用` npm install --registry=https://registry.npm.taobao.org`

   * `npm run build:weixin`

5. 替换组件

   将mp-html的`/dist`文件夹下的`mp-weixin`粘贴并完全替换小程序中`/components`下的`mp-weixin`文件夹。

6. 更多解析样式参考：[mp-html文档](https://jin-yufeng.gitee.io/mp-html)