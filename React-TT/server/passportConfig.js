const UserAccount = require('./models/UserAccounts');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;

//passport for login ID

module.exports = function(passport){
    //local strategy for identifying User
    passport.use(
        new localStrategy((username, password, done) =>{
            UserAccount.findOne({username: username}, (err,user) =>{
                if(err) throw err;
                if(!user) return done(null,false);
                bcrypt.compare(password, user.password, (err,result)=>{
                    if(err) throw err;
                    if(result === true ){
                        return done(null, user);
                    }
                    else{
                        return done(null,false);
                    }
                });
            });
        })
    );
    passport.serializeUser((user,cb)=>{
        cb(null,user.id);
        //serializaton call back
    })
    passport.deserializeUser((id, cb)=>{
        UserAccount.findOne({_id: id},(err,user)=>{
            cb(err,user);
            //call back for user account found
        })
    })
}