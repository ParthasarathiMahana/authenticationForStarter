const express = require("express");
const app = express();
const path = require("path");

const PORT = 8000;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static("assets"));
app.use(express.urlencoded());

app.get('/',(req, res)=>{
    res.render("home");
})

app.listen(PORT,(err)=>{
    if(err){
        return console.log("Error occured while connecting server with port", err);
    }

    console.log("Server is up and runnig on port",PORT);
})