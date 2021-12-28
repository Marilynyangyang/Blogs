const express = require('express');
//导入用户集合
const { User } = require('../model/user');
const bcrypt = require('bcrypt');
//创建博客展示页面路由
const admin = express.Router();

//创建二级路由
admin.get('/login', require('./admin/loginPage'));
//实现登录功能
admin.post('/login', require('./admin/login'));
//创建用户列表路由
admin.get('/user', require('./admin/userPage'));
//实现退出功能
admin.get('/logout', require('./admin/logout'));
//创建用户编辑路由
admin.get('/user-edit', require('./admin/user-edit'));
//实现用户添加功能
admin.post('/user-edit', require('./admin/user-edit-fn'));
//
admin.post('/user-modify', require('./admin/user-modify'));
// 用户删除功能路由
admin.get('/delete', require('./admin/user-delete'));
//文章列表
admin.get('/article', require('./admin/article'));
//添加文章
admin.get('/article-edit', require('./admin/article-edit'));
//实现文章添加功能
admin.post('/article-add', require('./admin/article-add'))
module.exports = admin;