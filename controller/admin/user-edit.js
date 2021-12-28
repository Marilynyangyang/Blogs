"use strict";

var _require = require('../../model/user'),
    User = _require.User;

module.exports = function _callee(req, res) {
  var _req$query, message, id, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //获取地址栏的id参数
          _req$query = req.query, message = _req$query.message, id = _req$query.id;

          if (!id) {
            _context.next = 8;
            break;
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            _id: id
          }));

        case 4:
          user = _context.sent;
          res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: '修改'
          });
          _context.next = 9;
          break;

        case 8:
          res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button: '添加'
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};