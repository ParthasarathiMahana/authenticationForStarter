const User = require('../models/user');
const Users = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports.signIn = async(req, res)=>{
    if(req.isAuthenticated()){
        return res.render("homeAfterLogin");
    }
}

module.exports.signOut =(req, res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
    return res.render('home');});
}

module.exports.resetPassword = async(req, res)=>{
    if(req.isAuthenticated()){
        let user = await User.findOne({email:req.user.email});
        if(user == false){
            return console.log("user not found for password reset");
        }
        if(req.body.new_password === req.body.confirm_password){
            let user1 = await User.findByIdAndUpdate(user._id,{password: await bcrypt.hash(req.body.new_password, 10)})
            console.log("password changed");
            return res.render('homeAfterLogin',{user_email:user.email})
        }
        console.log("password do not match");
        return res.render('home');
    }
}