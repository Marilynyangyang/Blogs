var express = require('express');

//创建博客展示页面路由
var home = express.Router();

//创建二级路由
home.get('/', require('../controller/blog_home/index'));
home.get('/article', require('../controller/blog_home/article'));
home.post('/comment', require('../controller/blog_home/comment'));
module.exports = home;