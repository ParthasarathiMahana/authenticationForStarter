const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

passport.use(new googleStrategy({
    clientID: "913408440296-nrcmm29ul0ml3ueaiglh8v970tgtk3un.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/login/auth/google/callback"
    },

    async function(accessToken, refreshToken, profile, done){
        let user = await User.findOne({email: profile.emails[0].value});
        if(user){
            console.log(profile);
            return done(null, user);
        }else{
            let psTemp = crypto.randomBytes(20).toString('hex');
            console.log(psTemp);
            let ps = await bcrypt.hash(psTemp, 10);
            await User.create({
                email: profile.emails[0].value,
                password: ps
            })
            return done(null, user);
        }
    }

));


module.exports = passport;