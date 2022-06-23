---
title: 自定义样式
---
* 自定义文章解析样式

  参考主题设置中自定义样式。

  注意标签样式需为严格的JSON格式，eg:`{"ul": "padding-left: 25px;","h5": "font-size: 15px;"}`，
  
  > key为标签，例如`table`、`th`、`td`为表格样式；`pre`为代码块样式；`blockquote`为引用样式，你也可以增加更多，例如`tr`、`a`、`h1`等。

​		而容器样式为字符串类型，eg:`padding: 12px;font-size: 15px;`。

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