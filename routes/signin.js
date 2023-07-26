const express = require('express');
const router = express.Router();
const signinController = require('../controller/signin_controller');

router.use('/', signinController.signIn);

module.exports = router;