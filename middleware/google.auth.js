const GoogleStrategy = require('passport-google-oauth20').Strategy;
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const { saveRegisteredUsers, checkUserExists } = require('../services/auth.services');
const UserModel = require('../db/model/schema');
 
const useOauthPassport = passport => {

    passport.use(
        new OAuth2Strategy(
            {
                clientID: '439813060938-io4iu132262anpv0101cdoctapj6j5bq.apps.googleusercontent.com',
                clientSecret: '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',
                callbackURL: 'http://localhost:4000/api/auth/google',
                authorizationURL: 'https://accounts.google.com/o/oauth2/auth',    
                tokenURL: 'https://accounts.google.com/o/oauth2/token',
            },
            async (accessToken, refreshToken, profile, done) => {
                console.log("profile-------------->",profile)
                const user = await checkUserExists(profile.email); 
                    if (!user) {
                    //login
                    const userData = {
                        firstname:profile.given_name,
                        lastname:profile.family_name,
                        email:profile.emails[0].value,
                        googleId:profile.id,
                        //googleId:profile.id,
                    };
                    const userData1 = await saveRegisteredUsers(userData);
                }
                console.log("login successfull");

               // return done(null,user) ;
            }
        )
    );

    passport.serializeUser((user,done)=>{
        done(null,user);
    })
    
    passport.deserializeUser((user,done)=>{
        done(null,user);
    });
};
 
module.exports = {
    useOauthPassport,
};