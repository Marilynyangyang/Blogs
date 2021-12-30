var express = require('express');
var home = express.Router(); //创建博客展示页面路由

home.get('/', require('../controller/blog_home/home')); //主页面
home.get('/article', require('../controller/blog_home/blogs')); //博客展示页面
home.post('/comment', require('../controller/blog_home/comments')); //博客评论功能

module.exports = home;