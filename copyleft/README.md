# 博客源码
> Github：[https://github.com/Huansheng1/Huansheng1.github.io](https://github.com/Huansheng1/Huansheng1.github.io)   
> Gitee码云：<https://gitee.com/huanshenga/Myblog>  
>> 成品地址 ：<http://huanshenga.gitee.io/myblog/dist/>  
> 注意，这种***引入图片写法有个坑***！  
> 1. 当部署到github的gh-pages时，因为网站静态页域名为 github用户名.io/项目名；  
> 2. 但是：  
>> * 实际每个人的github网站为 github用户名.io  
>> * 这将导致 此处如果使用md语法的图片，该图片地址将为：github用户名.io/img/myblog.png  
>> * 但实际图片地址应为 github用户名.io/项目名/img/myblog.png  
>> * 导致 图片无法显示！  
> 因此，这里我们需要使用 ：<a :href="$withBase('/guide/')" alt="基准用处">基准地址</a> 有提及到！  
> `![myBlog](/img/myblog.png) `  
<img :src="$withBase('/img/myblog.png')" alt="myBlog">  
