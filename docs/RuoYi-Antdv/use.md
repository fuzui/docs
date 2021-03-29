---
title: 快速开始
---

## 开始使用

1. 环境准备
   * 运行启动RuoYi-Vue，参考[RuoYi文档](https://doc.ruoyi.vip/ruoyi-vue/)
   * 安装[node](http://nodejs.org/)和[git](https://git-scm.com/)

1. 安装

   ```shell
   git clone git@gitee.com:fuzui/RuoYi-Antdv.git
   ```

   或

   ```shell
   git clone git@github.com:fuzui/RuoYi-Antdv.git
   ```

2. 本地开发

   进入项目根目录

   ```shell
   npm install
   ```

   > 若耗时太长可使用`npm install --registry=https://registry.npm.taobao.org`

   ```shell
   npm run serve
   ```

   > 打开浏览器访问 [http://localhost:8000](http://localhost:8080/)

4. 部署

   后端部署参考RuoYi文档：[RuoYi-Vue后端部署](https://doc.ruoyi.vip/ruoyi-vue/document/hjbs.html#%E5%90%8E%E7%AB%AF%E9%83%A8%E7%BD%B2)

   打包：

   ```shell
   npm run build
   ```

   打包完成后将`/dist`整个文件夹放入服务器中自定义目录(当然也可以在服务器上直接装环境拉代码后打包)。

   修改nginx配置：

   ```nginx
   server {
   	# 你的域名
       server_name ruoyi.setworld.net;
       index index.html index.htm;
   	# 你的打包路径
       root /data/ruoyi-antdv/dist;
   	# gzip 加速
       gzip on;
       gzip_static on;
       gzip_min_length 1k;
       gzip_comp_level 9;
       gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/    gif image/png;
       gzip_vary on;
       gzip_disable "MSIE [1-6]\.";
       location / {
           try_files $uri $uri/ /index.html =404;
       }
       location /api/ {
   		# 你的后台地址
           proxy_pass http://127.0.0.1:8080/;
           #proxy_set_header Host $http_host;
           client_max_body_size    20m;
           client_body_buffer_size 1280k;
           proxy_connect_timeout 15s;
           proxy_send_timeout 15s;
           proxy_read_timeout 15s;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       }
   }
   ```

   

## 注意事项

* 若需使用代码生成，请按照文档描述修改：
  [代码生成前端适配](https://gitee.com/fuzui/RuoYi-Antdv/tree/master/docs/gen) 

  

## 自定义图标



## 优化建议
* 线上环境去除主题配置
* nginx按照上述配置开启`gzip`