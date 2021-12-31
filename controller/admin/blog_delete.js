var _require = require('../../model/blog'),
    Article = _require.Article;
module.exports = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Article.findOneAndDelete({
            _id: req.query.id
          }));
        case 2:
          res.redirect('/admin/article'); //将页面重定向到用户列表页面
        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};