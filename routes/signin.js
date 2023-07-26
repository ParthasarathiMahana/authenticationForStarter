const express = require('express');
const router = express.Router();
const signinController = require('../controller/signin_controller');

router.use('/', signinController.signIn);
router.use('/logout', signinController.signOut)

module.exports = router;