const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/usersDetails");
const db = mongoose.connection;

module.exports = db;