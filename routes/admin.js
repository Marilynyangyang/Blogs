const express = require('express');
//导入用户集合
const { User } = require('../model/user');
const bcrypt = require('bcrypt');
//创建博客展示页面路由
const admin = express.Router();

//创建二级路由
admin.get('/login', require('../controller/admin/login_page'));
//实现登录功能
admin.post('/login', require('../controller/admin/login_func'));
//创建用户列表路由
admin.get('/user', require('../controller/admin/admin_userspage'));
//实现退出功能
admin.get('/logout', require('../controller/admin/logout_func'));
//创建用户编辑路由
admin.get('/user-edit', require('../controller/admin/admin_info'));
//实现用户添加功能
admin.post('/user-edit', require('../controller/admin/admin_add'));
//
admin.post('/user-modify', require('../controller/admin/admin_modify'));
// 用户删除功能路由
admin.get('/delete', require('../controller/admin/admin_delete'));
//文章列表
admin.get('/article', require('../controller/admin/blogs_page'));
//添加文章
admin.get('/article-edit', require('../controller/admin/blog_info'));
//实现文章添加功能
admin.post('/article-add', require('../controller/admin/blog_add'))
module.exports = admin;