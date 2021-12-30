var _require = require('../../model/blog'),
    Article = _require.Article; //导入文章集合构造函数
var _require2 = require('../../model/comment'),
    Comment = _require2.Comment; //导入评论集合构造函数
module.exports = function _callee(req, res) {
  var id, article, comments;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.query.id; //接收客户端传递过来的文章id值
          _context.next = 3;
          return regeneratorRuntime.awrap(Article.findOne({
            _id: id
          }));
        case 3:
          article = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(Comment.find({
            aid: id
          }));
        case 6:
          comments = _context.sent;
          res.render('blog_home/article.art', {
            article: article,
            comments: comments
          });
        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};