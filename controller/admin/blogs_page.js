var _require = require('../../model/blog'),
    Article = _require.Article; //将文章集合的构造函数导入到当前文件中
var pagination = require('mongoose-sex-page'); //导入mongoose-sex-page模块
module.exports = function _callee(req, res) {
  var page, articles;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = req.query.page; //接收客户端传递过来的页码
          req.app.locals.currentLink = 'article'; //标识当前访问的是文章管理页面
          _context.next = 4;
          return regeneratorRuntime.awrap(pagination(Article).find().page(page).size(4).display(4).exec());
        case 4:
          articles = _context.sent;
          res.render('admin/article.art', {
            articles: articles
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};