var _require = require('../../model/user'),
    User = _require.User;

var bcrypt = require('bcrypt');

module.exports = function _callee(req, res) {
  var _req$body, email, password, user, pass;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //接受请求参数
          _req$body = req.body, email = _req$body.email, password = _req$body.password; //没有输入邮件地址

          if (!(email.trim().length == 0 || password.trim().length == 0)) {
            _context.next = 3;
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
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 9:
          pass = _context.sent;

          //password == user.password
          if (pass) {
            //登录成功
            req.session.username = user.username; // res.send('登录成功');

            req.app.locals.userInfo = user; //跳转用户类别页面

            res.redirect('/admin/user');
          } else {
            res.status(400).render('admin/error', {
              msg: '邮件或者密码错误！'
            });
          }

          _context.next = 14;
          break;

        case 13:
          //没有查询到用户
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