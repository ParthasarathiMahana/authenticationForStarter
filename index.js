const express = require("express");
const app = express();
const path = require("path");
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("assets"));
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/', require('./routes'));

app.listen(PORT,(err)=>{
    if(err){
        return console.log("Error occured while connecting server with port", err);
    }

    console.log("Server is up and runnig on port",PORT);
})