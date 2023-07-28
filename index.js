const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
// for passport authentication
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

const flash = require('connect-flash');

const PORT = 8000;
app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(session({
    name:'autheticationSystem',
    secret:'PSM',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000*60*100)
    }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

app.listen(PORT,(err)=>{
    if(err){
        return console.log("Error occured while connecting server with port", err);
    }

    console.log("Server is up and runnig on port",PORT);
})