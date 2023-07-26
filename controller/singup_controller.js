const db = require('../config/mongoose');
const Noty = require('noty');
const  Users = require('../models/user');

module.exports.signup = async(req, res)=>{
    // cecking whether password and confirm password are same or not
    if(req.body.password !== req.body.confirm_password){
        return res.render("home");
    }

    // checking for same email id in the db
    var userData = await Users.find({email:req.body.email});
    if(userData == false){
        Users.create({email:req.body.email, password: req.body.password});
        console.log("New user added to the database.");
        return res.render("home");
    }

    // returning back to home page if the user already exists
    console.log(req.body.email, "already exists.");
    return res.render("home");
}