var formidable = require('formidable'); //引入formidable第三方模块
var path = require('path');
var _require = require('../../model/blog'),
    Article = _require.Article;
module.exports = function (req, res) {
  var form = new formidable.IncomingForm(); //创建表单解析对象
  form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');//配置上传文件的存放位置
  form.keepExtensions = true; //保留上传文件的后缀
  //解析表单
  form.parse(req, function _callee(err, fields, files) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(Article.create({
              title: fields.title,
              author: fields.author,
              publishDate: fields.publishDate,
              cover: files.cover.path.split('public')[1],
              content: fields.content
            }));
          case 2:
            res.redirect('/admin/article');
          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  });
};