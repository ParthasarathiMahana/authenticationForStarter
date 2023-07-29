const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// authentication using passport and passport local strategy
passport.use(new LocalStrategy({usernameField: 'email'},
    async function(email, password, done) {
      try{
        const user = await User.findOne({ email: email });
        if (!user){
            return done(null, false);
        }

        if (!user || !await bcrypt.compare(password, user.password)){
            console.log("invalid email or password");
            return done(null, false);
        }

        if(await bcrypt.compare(password, user.password)){
          return done(null, user);
        }

        return done(null, false);

      }
      catch(err){
        return done(err, false);
      }
    })
);

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

passport.checkAuthentication = function(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  return res.render('/');
}

passport.setAuthenticatedUser = (req, res, next)=>{
  if(req.isAuthenticated()){
    res.locals.user = req.user;
  }
  next();
}

module.exports = passport;