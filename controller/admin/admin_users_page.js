const { User } = require('../../model/user');
module.exports = async(req, res) => {
    let page = req.query.page || 1; //接受客户端传递过来的当前页的参数
    let pagesize = 10; //每一页显示的数据条数
    let count = await User.countDocuments({}); //查询用户数据的总数
    let total = Math.ceil(count / pagesize); //总页数
    let start = (page - 1) * pagesize; //页码对应的数据查询开始位置
    let users = await User.find({}).limit(pagesize).skip(start); //将用户信息从数据库中查询出来
    res.render('admin/user', {
        users: users,
        page: page,
        total: total
    });
}