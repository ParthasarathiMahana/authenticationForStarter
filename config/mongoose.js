const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect("mongodb://localhost:27017/usersDetails");
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.once('open', function(){
    console.log('connected!');
})

module.exports = db;