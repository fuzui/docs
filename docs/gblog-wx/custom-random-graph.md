---
title: 自定义随机图
---
>首先[开启并配置云环境](./open-cloud.md)（若不使用自定义随机图功能可跳过）

1. 开通内容管理

[微信官方文档-开通内容管理](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/extensions/cms/guidance.html)

2. 导入数据

登录内容管理，点击内容模型，点击右侧导入模型，选择`/extension/cloud/`下`random-graph-date.json`文件。

![](https://cdn.fuzui.net/blog/gdoc-01.png)

3. 配置

在`config/api.js`文件中，修改如下代码
```json
const CloudConfig = {
  isOpen: true,
  env: 'fuzui',  //云环境ID
  randomGraphOpen: true   // 随机图开启（内容管理）
}
```
修改randomGraphOpen为`true`

4. 上传云函数

右击cloudfunctions下get_random_graph文件夹，点击击“上传并部署：云端安装依赖(不上传node_moudles)”，等待完成。

5. 右击cloudfunctions，同步云函数列表

6. 管理随机图

登录内容管理，点击内容集合下的随机图，进行随机图管理。（目前限制最多50张）

随后清空小程序缓存，重新加载即可展示。

> 随机图获取后存放在缓存中，所以每次增减随机图后，需要清空缓存才可显示最新。

![](https://cdn.fuzui.net/blog/gdoc-02.png)