const mongoose = require('mongoose');
//创建评论集合规则
const commentSchema = new mongoose.Schema({
	aid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Article'
	},
	uid: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	time: {
		type: Date
	},
	content: {
		type: String
	}
});
const Comment = mongoose.model('Comment', commentSchema); //创建评论集合
module.exports = { Comment } //将评论集合构造函数作为模块成员进行导出