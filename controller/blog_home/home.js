var pagination = require('mongoose-sex-page');
var _require = require('../../model/blog'),
    Article = _require.Article; //导入分页模块
module.exports = function _callee(req, res) {
  var page, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = req.query.page; //获取页码值
          _context.next = 3;
          return regeneratorRuntime.awrap(pagination(Article).page(page).size(4).display(5).find().exec());
        case 3:
          result = _context.sent;
          res.render('blog_home/default.art', {
            result: result
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};