const Joi = require('joi');
const { User, validateUser } = require('../../model/user');
module.exports = async(req, res, next) => {
    try {
        await validateUser(req.body) //定义对象验证规则
    } catch (e) {
        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message })); //验证没有通过则重定向
    }
    let user = await User.findOne({ email: req.body.email }); //根据邮箱查询用户是否存在
    if (user) {
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱地址已经被占用了' })) //如果存在邮箱已经背别人占用
    }
    await User.create(req.body);
    res.redirect('/admin/user'); //返回用户列表页面
}