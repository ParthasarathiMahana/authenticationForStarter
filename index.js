const express = require("express");
const app = express();

const PORT = 8000;

app.get("/",(re, res)=>{
    res.send("this is home.");
});

app.listen(PORT, (err)=>{
    if(err){
        return console.log("Error while runnig the server on the given port", PORT);
    }

    console.log("server is up and running on port:", PORT);
})