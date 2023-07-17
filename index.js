const express = require("express");
const app = express();

const PORT = 8000;

app.get('/',(req, res)=>{
    res.send("This is Home Page...");
})

app.listen(PORT,(err)=>{
    if(err){
        return console.log("Error occured while connecting server with port", err);
    }

    console.log("Server is up and runnig on port",PORT);
})