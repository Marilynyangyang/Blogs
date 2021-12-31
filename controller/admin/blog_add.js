"use strict";

// 引入formidable第三方模块
var formidable = require('formidable');

var path = require('path');

var _require = require('../../model/blog'),
    Article = _require.Article;

module.exports = function (req, res) {
  // 1.创建表单解析对象
  var form = new formidable.IncomingForm(); // 2.配置上传文件的存放位置

  form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads'); // 3.保留上传文件的后缀

  form.keepExtensions = true; // 4.解析表单

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
              cover: files.cover.filepath.split('public')[1],
              content: fields.content
            }));

          case 2:
            // 将页面重定向到文章列表页面
            res.redirect('/admin/article');

          case 3:
          case "end":
            return _context.stop();
        }
      }
    });
  }); // res.send('ok');
};