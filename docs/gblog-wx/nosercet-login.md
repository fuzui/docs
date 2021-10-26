---
title: 后台免密登陆
---
>首先[开启并配置云环境](./open-cloud.md)（若不使用该功能可跳过）
>
>说明：
>
>来源于[issue](https://github.com/fuzui/GBlog-wx/issues/8)。实现思路：在首次登陆成功后，将用户的openid与halo账号密码存放与云数据库中（未加密，数据库权限为仅创建者可读写）。之后进入登陆页面会去云数据库中找是否有关联账号信息，取出账号信息进行登陆。修改密码后会要求再次输入账号信息来更新云数据库，开通二步登陆后，进入登陆页面只会输入一下二步验证码。

1. 创建云数据库

点击云开发—数据库，新建名为`admin_user`的集合。

![]( https://oss.fuzui.net/img/202110270037707.png)



检查集合权限，确定为`仅创建者可读写`

![]( https://oss.fuzui.net/img/202110270040262.png)



2. 配置

在`config/api.js`文件中，修改如下代码

```json
const CloudConfig = {
  isOpen: true,
  env: 'fuzui',  //云环境ID
  adminUser: false     // 后台免密登陆
}
```

修改adminUser为`true`