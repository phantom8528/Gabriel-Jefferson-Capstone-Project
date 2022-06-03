const LocalStrategy = require('passport-local').Strategy;

const {client} = require('./server-to-chapterdb');
const bcrypt = require('bcrypt');
const res = require('express/lib/response');

const initialize = (passport) => {
    const authenticateUser = (email, password) => {
        client.query(`SELECT * FROM chapter_users WHERE email = $1`,
        [email], 
        (err, results) => {
            if (err) {
                throw err; 
            }
            console.log(results.rows);
            if(results.rows.length > 0){
                const user = results.rows[0];
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err){
                        throw err;
                    }

                    if(isMatch){
                        return done(null, user);
                    }else{
                        return done(null, false, {message: "Password is not Correct!"});
                    }
                })
            }else{
                return done(null, false, {message: "Email is not registered"});
            }


        })
    }
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    }, authenticateUser))

    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        client.query(`SELECT * FROM chapter_users WHERE id = $1`, [users_id], (err, result) => {
            if (err){
                throw err;
            }
            return done(null, results.rows[0]);
        })
    });



}

module.exports = {initialize};