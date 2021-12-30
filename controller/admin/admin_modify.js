var bcrypt = require('bcrypt');

var _require = require('../../model/user'),
    User = _require.User;

module.exports = function _callee(req, res, next) {
  var _req$body, username, email, role, state, password, id, user, isValue, obj;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //解构
          _req$body = req.body, username = _req$body.username, email = _req$body.email, role = _req$body.role, state = _req$body.state, password = _req$body.password; //即将要修改的用户id

          id = req.query.id; // res.send(body.password);

          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            _id: id
          }));

        case 4:
          user = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(password == user.password);

        case 7:
          isValue = _context.sent;

          if (!isValue) {
            _context.next = 14;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(User.updateOne({
            _id: id
          }, {
            username: username,
            email: email,
            role: role,
            state: state
          }));

        case 11:
          res.redirect('/admin/user');
          _context.next = 16;
          break;

        case 14:
          obj = {
            path: '/admin/user-edit',
            message: '密码比对失败，不能进行用户信息的修改',
            id: id
          };
          next(JSON.stringify(obj));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};