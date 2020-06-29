---
title: TrendDB 时序数据库安装与使用
---

## 一、简介

TrendDB 实时数据库销售

### 1. 系统稳定性

国内自主知识产权，已经 10 年历史了。

### 2. 数据库及服务价格

数据库小容量（365 点以下）免费（免费点数有限，有限次数远程服务）；

5000 点以内，2 元每点； 每增加 5000 点，增量部分单点价格打 8 折；

例如 20000 点价格为 5000×2+5000×2×0.8=18000 元；

25000 点的价格为 18000+5000 ×2×0.8×0.8=24400 元。以此类推。

收费部分 3 年免费远程技术支持。

### 3. 软件操作系统版本

windows版、linux版（centos7.2 、ubuntu16.04）
（生产建议使用Linux）

### 4. 部署方式

提供软件集成到你的系统。

### 5. 公司地址

北京

部分研发在深圳。

### 6. 数据库手册

（此安装包为 Windows 点数限制版，仅供免费学习使用）

解压压缩包，在 doc 目录下有对应版本的安装手册和数据库接口开发文档。

### 7. TrendDB 学习版本下载

> 链接:https://pan.baidu.com/s/1Y5WkDqGDmX3nILO_Jm7NGg 密码:uqux





## 二、安装步骤
### 1.解压
下载下来为一个trendDB压缩包，将其解压并放到其自定义路径下，建议磁盘预留空间10G+。
![解压](https://images.gitee.com/uploads/images/2020/0223/175147_06ceafec_4988475.gif "111.gif")

### 2.安装服务
点击进入TrendDB目录，按顺序运行以下：（管理员权限运行）
* 运行Lic-Install.bat
* 运行DB-Install.bat
* 运行trenddb_server.exe
![安装服务](https://images.gitee.com/uploads/images/2020/0223/175804_910b7006_4988475.png "安装服务.png")
* 右击我的电脑，管理，在服务下可看到是否已经启动
![查看服务](https://images.gitee.com/uploads/images/2020/0223/175843_a302063d_4988475.png "安装服务2.png")

### 3.设置环境变量
在环境变量PATH中添加trenddb根目录。
![环境变量设置](https://images.gitee.com/uploads/images/2020/0223/180844_666db1fc_4988475.png "环境变量.png")
### 4.运行客户端
点击进入TrendDB目录，运行trenddb_view.exe
输入
地址127.000.000.001 
端口9000 
用户名 admin
密码 123456
如果登录成功则代表安装完成！
![登录客户端](https://images.gitee.com/uploads/images/2020/0223/180225_3846f159_4988475.png "登录客户端.png")

## 三、联系
如安装过程中有问题请加Q群联系：826927997