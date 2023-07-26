const express = require("express");
const router = express.Router();

const signinController = require('../controller/signin_controller');

router.use('/', signinController.signOut);

module.exports = router;