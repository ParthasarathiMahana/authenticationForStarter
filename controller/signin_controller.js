const Users = require('../models/user');

module.exports.signIn = async(req, res)=>{
    const user = await Users.find({email:req.body.email});
    if(user == false){
        return res.render("home");
    }
    if(user[0].password == req.body.password){
        res.cookie("user_id", user[0]._id);
        return res.render("homeAfterLogin",{user_email:user[0].email});
    }else{
        console.log("Incorrect password", req.body.password, user[0].password);
        res.render('home');
    }
}