const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using passport and passport local strategy
passport.use(new LocalStrategy(
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user){
        if (err){
            return done(err);
        }

        if (!user || !bcrypt.compare(password, user.password)){
            console.log("invalid email or password");
            return done(null, false);
        }

        return done(null, user);
      });
    }
));

// serialization
passport.serializeUser(function(user, done){
    done(null, user.id);
})

// deserialization
passport.deserializeUser(async function(id, done){
    let user = await User.findById(id);
    if(user !== false){
        return done(null, user);
    }
    return done(null, false);
})

module.exports = passport;