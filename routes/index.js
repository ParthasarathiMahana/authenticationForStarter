const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use("/signup", require('./signup.js'))

module.exports = router;