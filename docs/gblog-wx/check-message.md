---
title: 评论敏感词汇过滤
---
>首先[开启并配置云环境](./open-cloud.md)（若不使用该功能可跳过）
>
>说明：因为微信审核原因，若未开通此功能，在提交版本审核时，请在halo后台将评论审核开关打开（后台-系统-博客设置-评论设置-评论审核后才显示）。

1. 配置

在`config/api.js`文件中，修改如下代码

```json
const CloudConfig = {
  isOpen: true,
  env: 'fuzui',  //云环境ID
  checkMessage: true,   // 敏感词检测
}
```
修改checkMessage为`true`

2. 上传云函数

右击cloudfunctions下check_message文件夹，点击击“上传并部署：云端安装依赖(不上传node_moudles)”，等待完成。

3. 右击cloudfunctions，同步云函数列表