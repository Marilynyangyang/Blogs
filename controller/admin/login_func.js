var _require = require('../../model/user'),
    User = _require.User;
module.exports = function _callee(req, res) {
  const users = [
    {
      "username": "admin",
      "email": "admin@email.com",
      "password": "admin",
      "role": "admin",
      "state": 0
    }
  ];
  //User.insertMany(users);
  var _req$body, email, password, user, pass;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password; //接受请求参数
          if (!(email.trim().length == 0 || password.trim().length == 0)) {
            _context.next = 3; //没有输入邮件地址
            break;
          }
          return _context.abrupt("return", res.status(400).render('admin/error', {
            msg: '邮件或者密码错误'
          }));
        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));
        case 5:
          user = _context.sent;
          if (!user) {
            _context.next = 13;
            break;
          }
          _context.next = 9;
          return regeneratorRuntime.awrap(password == user.password);
        case 9:
          pass = _context.sent;
          if (pass) {
            req.session.username = user.username; //登录成功
            req.app.locals.userInfo = user;
            res.redirect('/admin/user'); //跳转用户列表页面
          } else {
            res.status(400).render('admin/error', {
              msg: '邮件或者密码错误！'
            });
          }
          _context.next = 14;
          break;
        case 13:
          res.status(400).render('admin/error', {
            msg: '邮件或者密码错误！'
          });
        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};