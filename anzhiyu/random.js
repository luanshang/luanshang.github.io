var posts=["2023/10/17/hello-world/","2023/10/25/Clash-Clash汉化/","2023/10/24/VSCode-VSCode添加快捷键Ctrl-Enter跳转下一行/","2023/10/17/Hexo-Hexo安装/","2023/10/18/交换路由-三层交换机/","2023/10/28/交换路由-VRRP可靠性实验/","2023/10/17/动漫-国漫/","2023/10/29/Linux-服务-CentOS开启SSH服务/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};