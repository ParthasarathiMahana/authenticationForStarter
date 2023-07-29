const express = require('express');
const router = express.Router();
const signinController = require('../controller/signin_controller');
const passport = require('passport');

router.post('/', passport.authenticate('local',{
    failureRedirect:'/'
}),signinController.signIn);

router.get('/auth/google', passport.authenticate('google', {scope:['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/'}), signinController.signIn);

module.exports = router;