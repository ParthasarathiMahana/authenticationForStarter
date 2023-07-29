const User = require('../models/user');
const Users = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports.signIn = async(req, res)=>{
    const user = await Users.find({email:req.body.email});
    return res.render("homeAfterLogin",{user_email:user[0].email});
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
            user.updateOne({password: bcrypt.hash(req.body.new_password, 10)});
            return res.render('homeAfterLogin')
        }
        console.log("password do not match");
        return res.render('home');
    }
}