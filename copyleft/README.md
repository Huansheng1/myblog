# 个人练手实战项目
## 博客源码
> Github：[https://github.com/Huansheng1/Huansheng1.github.io](https://github.com/Huansheng1/Huansheng1.github.io)   
> Gitee码云：<https://gitee.com/huanshenga/Myblog>  
>> 成品地址 ：<http://hs.xuexizuoye.com>  
>> 最初版本地址 ：<http://huanshenga.gitee.io/myblog/dist/> --- 停更，请使用上面地址  
> 注意，这种***引入图片写法有个坑***！  
> 1. 当部署到github的gh-pages时，因为网站静态页域名为 github用户名.io/项目名；  
> 2. 但是：  
>> * 实际每个人的github网站为 github用户名.io  
>> * 这将导致 此处如果使用md语法的图片，该图片地址将为：github用户名.io/img/myblog.png  
>> * 但实际图片地址应为 github用户名.io/项目名/img/myblog.png  
>> * 导致 图片无法显示！  
> 因此，这里我们需要使用 ：<a :href="$withBase('/guide/')" alt="基准用处">基准地址</a> 有提及到！  
> `![myBlog](/img/myblog.png) `  
<!-- <img :src="$withBase('/img/myblog.png')" alt="myBlog">  加载太慢，我们图片改用gitee -->
<img src="https://gitee.com/huanshenga/myimg/raw/master/PicGo/20200701181426.png" alt="myBlog">

## 已完成项目
* [饿了么实战上手](vue-eleme)

## 计划中的实战项目
**参考列表***：  
网页：  
* [豆瓣影音开发文档](https://hanxueqing.github.io/Douban-Movie/#/)
* [仿肯德基宅急送App-Vue实战](https://juejin.im/post/5d31277b51882549491754e1#heading-14)  
* * [git源码](https://github.com/zlyyyy/bilibili-vue)  
* [仿bilibili视频网站项目-Vue实战](https://juejin.im/post/5ebcb2175188256d8e6562e6)  
* [Vue全家桶打造自适应 web 音乐播放器](https://juejin.im/post/5afcdc73518825428630b216#heading-0)  
* * [类似视频教程](https://pan.baidu.com/s/1-aizmGQ720l5OSYBqKjVpA#list/path=%2F)
* [网易云 + QQ音乐 第三方 web端](https://github.com/jsososo/NeteaseMusic)  
* [网易云音乐-Vue实战](https://github.com/ddqre12345/vue-music)  
* * [01-Vue项目实战-网易云音乐-准备工作](https://juejin.im/post/5eb27050f265da7b9625e830#heading-1)
* * [高仿网易云音乐(Vue实例)](https://juejin.im/post/5d96dd9d51882509563a096e#heading-9)
* [千峰vue实战喵喵电影项目](https://github.com/b-yp/miaomiaoym)  
* * [视频教程](https://www.bilibili.com/video/BV1Gb411x7Y2?from=search&seid=17325397406872594960)
* [小米商城PC版](https://github.com/jay-zhou-ikun/MiMall 'https://juejin.im/post/5e873036f265da47f0792a2f#heading-1')

客户端：  
* [手摸手Electron + Vue实战](https://juejin.im/user/583e9479128fe1006accb411/posts)  

小程序：  
* [uni-app小程序客到店项目](https://juejin.im/post/5e7d8319e51d4546f03d7b0b#comment)
* [从零实现一个单词对战游戏](https://juejin.im/post/5ea1ab976fb9a03c4c5bdf4c)