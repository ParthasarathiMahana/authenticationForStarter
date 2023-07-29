const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use("/signup", require('./signup.js'));
router.use("/login", require('./signin.js'));
router.use("/logout", require('./signout.js'));
router.use("/resetpassword", require('./resetpassword.js'));

module.exports = router;