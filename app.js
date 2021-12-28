//导入要用到的模块
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var dateFormat = require('dateformat');
var template = require('art-template');
var morgan = require('morgan');
var config = require('config');

//连接数据库
require('./model/connection');

//处理post请求参数
app.use(bodyParser.urlencoded({
  extended: false
}));
//配置session
app.use(session({
  secret: 'secret key'
}));

//开放静态资源文件
app.use(express["static"](path.join(__dirname, 'public')));
//express模板所在的位置
app.set('views', path.join(__dirname, 'views'));
//模板的默认后缀
app.set('view engine', 'art');
//渲染后缀为art所使用的的模板引擎是什么
app.engine('art', require('express-art-template'));
//导入日期
template.defaults.imports.dateFormat = dateFormat;
//导入home,admin模块
var home = require('./route/home');
var admin = require('./route/admin');
//拦截请求判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));
//匹配路由的请求路径
app.use('/home', home);
app.use('/admin', admin);
//监听端口
app.listen(10630, function () {
  console.log('服务器开启成功！');
});