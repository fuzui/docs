---
title: 开启云函数
---
>配置小程序云服务（若不使用海报分享、评论过滤、免密登录功能可跳过）

​	1. 开启

在后台主题设置中通用设置开启云函数。

​	2. 如未配置在控制台会出现如下提示：

![](https://oss.fuzui.net/img/003601_03be824a_4988475.png)

​	3. 点击开发者工具左上方“云开发”，进入开通，填写环境名称和环境ID创建；

![](https://oss.fuzui.net/img/003601_534028ef_4988475.png)



​	4. 右击cloudfunctions，点击更多设置，选择刚刚创建的环境；

![](https://oss.fuzui.net/img/003601_d97e171a_4988475.png)



​	5. 在`config/api.js`文件中修改刚刚设置云服务的环境ID

```js
const Config = {
  cloudEnv: '' // 云环境ID
}
```

