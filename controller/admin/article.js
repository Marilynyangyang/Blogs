//将文章集合的构造函数导入到当前文件中
var _require = require('../../model/article'),
    Article = _require.Article; // 导入mongoose-sex-page模块


var pagination = require('mongoose-sex-page');

module.exports = function _callee(req, res) {
  var page, articles;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 接收客户端传递过来的页码
          page = req.query.page; // 标识 标识当前访问的是文章管理页面

          req.app.locals.currentLink = 'article'; // page 指定当前页
          // suze 指定每页显示的数据条数
          // display 指定客户端要显示的页码数量
          // exec 向数据库中发送查询请求
          // 查询所有文章数据

          _context.next = 4;
          return regeneratorRuntime.awrap(pagination(Article).find().page(page).size(4).display(4).exec());

        case 4:
          articles = _context.sent;
          // res.send(articles);
          // 渲染文章列表页面模板
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