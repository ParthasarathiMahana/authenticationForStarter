const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/usersDetails");
const db = mongoose.connection;

db.once('open', function(){
    console.log('connected!');
})

module.exports = db;