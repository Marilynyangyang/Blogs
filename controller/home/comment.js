//将评论集合构造函数进行导入
var _require = require('../../model/comment'),
    Comment = _require.Comment;

module.exports = function _callee(req, res) {
  var _req$body, content, uid, aid;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // 接收客户端传递过来的请求参数
          _req$body = req.body, content = _req$body.content, uid = _req$body.uid, aid = _req$body.aid; // 将评论信息存储到评论集合中

          _context.next = 3;
          return regeneratorRuntime.awrap(Comment.create({
            content: content,
            uid: uid,
            aid: aid,
            time: new Date()
          }));

        case 3:
          // 将页面重定向回文章详情页面
          res.redirect('/home/article?id=' + aid);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};