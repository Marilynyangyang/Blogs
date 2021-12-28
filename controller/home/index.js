var _require = require('../../model/article'),
    Article = _require.Article; //导入分页模块

var pagination = require('mongoose-sex-page');

module.exports = function _callee(req, res) {
  var page, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 获取页码值
          page = req.query.page; // 从数据库中查询数据

          _context.next = 3;
          return regeneratorRuntime.awrap(pagination(Article).page(page).size(4).display(5).find().exec());

        case 3:
          result = _context.sent;
          // res.send('欢迎来到博客首页')
          // 渲染模板并传递数据
          res.render('home/default.art', {
            result: result
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};