var posts=["2023/10/17/hello-world/","2023/10/18/交换路由-三层交换机/","2023/10/17/Hexo-Hexo安装/","2023/10/17/动漫-国漫/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};