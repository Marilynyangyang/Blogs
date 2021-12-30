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
require('babel-polyfill')

require('./model/db_connect'); //连接数据库
//处理post请求参数
app.use(bodyParser.urlencoded({
  extended: false
}));
//配置session
app.use(session({
  secret: 'secret key'
}));
app.use(express["static"](path.join(__dirname, 'public'))); //开放静态资源文件
app.set('views', path.join(__dirname, 'view')); //express模板所在的位置
app.set('view engine', 'art'); //模板的默认后缀
app.engine('art', require('express-art-template')); //渲染后缀为art所使用的的模板引擎
template.defaults.imports.dateFormat = dateFormat; //导入日期
app.use('/admin', require('./middleware/login_verify')); //拦截判断请求的用户登录状态
var home = require('./routes/blog_home');
var admin = require('./routes/admin');
app.use('/', home);
app.use('/home', home);
app.use('/admin', admin);
app.listen(10630, function () {
  console.log('服务器开启成功！');
});