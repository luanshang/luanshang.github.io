var posts=["2023/10/17/hello-world/","2023/10/17/Hadoop-Had/","2023/10/17/动漫-国漫/","2023/10/17/Hadoop-Hexo安装/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};