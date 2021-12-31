const express = require('express');
const { User } = require('../model/user'); //导入用户集合
const admin = express.Router(); //创建后台管理页面路由

admin.get('/login', require('../controller/admin/login_page')); //进入登录页面
admin.post('/login', require('../controller/admin/login_func')); //实现登录功能
admin.get('/logout', require('../controller/admin/logout_func')); //实现退出功能

admin.get('/user-edit', require('../controller/admin/admin_info')); //创建或编辑用户信息页面
admin.get('/user', require('../controller/admin/admin_users_page')); //展示用户列表
admin.post('/user-add', require('../controller/admin/admin_add')); //实现用户添加功能
admin.post('/user-modify', require('../controller/admin/admin_modify')); //实现用户修改功能
admin.get('/user-delete', require('../controller/admin/admin_delete')); //实现用户删除功能

admin.get('/article', require('../controller/admin/blogs_page')); //展示博客列表
admin.get('/article-edit', require('../controller/admin/blog_info')); //创建博客的信息页面
admin.post('/article-add', require('../controller/admin/blog_add')) //实现博客添加功能
admin.get('/article-delete', require('../controller/admin/blog_delete')); //实现博客删除功能

module.exports = admin;