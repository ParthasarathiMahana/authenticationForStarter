const Users = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports.signIn = async(req, res)=>{
    const user = await Users.find({email:req.body.email});
    if(user == false){
        if(req.cookies.user_id){
            let userTemp = await Users.findById(req.cookies.user_id);
            return res.render("homeAfterLogin",{user_email:userTemp.email});
        }
        return res.render("home");
    }
    if(bcrypt.compare(req.body.password, user[0].password)){
        res.cookie("user_id", user[0]._id);
        return res.render("homeAfterLogin",{user_email:user[0].email});
    }else{
        console.log("Incorrect password", req.body.password, user[0].password);
        res.render('home');
    }
}

module.exports.signOut =(req, res)=>{
    // res.clearCookie('user_id');
    req.logout(function(err) {
        if (err) { return next(err); }
    return res.render('home');});
}