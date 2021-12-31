const mongoose = require('mongoose'); //导入mongoose模块
//创建文章集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 20,
        minlength: 1,
        required: [true, '请填写博客标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请填写作者']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
});
const Article = mongoose.model('Article', articleSchema); //根据规则创建集合
module.exports = { Article } //将集合做为模块成员进行导出