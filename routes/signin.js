const express = require('express');
const router = express.Router();
const signinController = require('../controller/signin_controller');
const passport = require('passport');

router.use('/', passport.authenticate(
    'local',
    {
        failureRedirect:'home'
    }
), signinController.signIn);
router.use('/logout', signinController.signOut)

module.exports = router;