---
title: 订阅消息
---
>开启订阅，此功能需启动node项目。[GBlog-wxpush](https://gitee.com/ufec/GBlog-wxpush)
>
>感谢[ufec](https://gitee.com/ufec)对订阅相关功能的实现。

## 1.下载

> 下载之前确保本地/服务器安装了npm（推荐使用nvm管理）

```shell
git clone https://gitee.com/ufec/GBlog-wxpush.git
npm install
```

## 2.配置小程序订阅末班

打开微信后台，左侧找到订阅消息，点击添加

![](https://oss.fuzui.net/img/003303_80b6a978_4988475.png)



搜索“留言审核信息”和“新作品推荐提醒”

![](https://oss.fuzui.net/img/003303_fcfd710c_4988475.png)



在“留言审核通知”选用栏**依次**勾选`留言内容`、`回复内容`、`审核状态`、`回复人`、`文章标题`；

![](https://oss.fuzui.net/img/003303_f7c54379_4988475.png)



在“新作品推荐提醒”选用栏**依次**勾选`作品名称`、`发表时间`、`作者`；

![](https://oss.fuzui.net/img/003303_8a701a57_4988475.png)



提交完成后会出现两个模板：

![](https://oss.fuzui.net/img/003303_689c7d1e_4988475.png)

记下这两个模板ID。

## 3.配置项目

> 配置启动之前请确保安装MongoDB、Redis。

在`config/config.js`文件中，修改如下代码：

```javascript
module.exports={
    // 小程序信息
    appInfo: {
        AppID: "wx0345c0b270baa60f",
        AppSecret: "", //小程序AppSecret，可在https://mp.weixin.qq.com中开发——开发设置中获取
    },
    redis: {
        host: "127.0.0.1",
        port: 6379,
        pass: "" //没有就不填
    },
    site: {
        url: "https://www.geekera.cn", //网站博客地址，结尾无斜杠
        key: "", //api KEY，halo后台配置的AccessKey
        author: "fuzui" //文章作者名
    },
    subscribe: {
        comment: "W56K5······································", // 留言审核通知模板id
        article: "vhOJ1······································", //新作品推荐提醒模板id
    }
}
```

在`config/database.js`文件中记录了MongoDB信息，默认则无需修改。



## 4.启动

在项目根路径下输入一下命令

1.开启服务

```shell
npm start
```

2.另开一个终端(cmd)，启动定时任务。

> 可修改`utils/schedule.js`中255行：
>
> ```
> schedule.scheduleJob('30 30 21 * * *', () => {	//表示每天21点30分30秒执行
> ```
>
> 将`'30 30 21 * * *'`修改为`'10 * * * * *'`（每十秒执行任务）方便测试

```
node utils/schedule.js
```

至此服务端启动成功。



## 5.开启小程序新文章订阅功能

在小程序项目`GBlog-wx`中，修改`config/api.js`中以下代码：

```javascript
//订阅配置
const PushConfig = {
  isOpen: true,	//默认为false未开启，这里需要true开启
  updateKey: "vhOJ1·······································",//新文章订阅模板id
  messageKey: "W56K········································",//留言审核通知模板id，
  SubscribeUrl: "http://127.0.0.1:5000",//订阅服务地址,服务器需修改为域名并设置微信reques合法域名
}
```



## 6.测试

在小程序中进入关于页，点击最下方“订阅推送更新”，订阅成功后，前往后台发布新文章，待定时任务时间达到，微信就会收到新文章推送信息；

评论某一文章时勾选”回复是否接受推送“，在后台通过并回复该评论，待定时任务时间达到，微信就会收到评论回复通知。



## 7.部署

使用是必然要部署到服务器的，即服务器拉去并修改代码，可通过`nohup npm start &`后台启动服务。

可通过nginx代理5000端口，并将域名添加到小程序的request合法域名之中。
