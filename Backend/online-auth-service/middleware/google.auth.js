const OAuth2Strategy = require('passport-google-oauth2').Strategy;
const { logger } = require('../middleware/logging');

const {
    saveRegisteredUsers,
    checkUserExists,
    getClientIdentityTokens,
} = require('../services/auth.services');

const useOauthPassport = async passport => {
    const { googleClientId, googleClientSecret } = await getClientIdentityTokens();
    await passport.use(
        new OAuth2Strategy(
            {
                clientID: googleClientId,
                clientSecret: googleClientSecret,
                callbackURL: process.env.GOOGLE_CALLBACK_URL,
                scope: ['profile', 'email'],
            },
            async (accessToken, refreshToken, profile, done) => {
                const user = await checkUserExists(profile.email);
                if (!user) {
                    const userData = {
                        firstname: profile.given_name,
                        lastname: profile.family_name,
                        email: profile.emails[0].value,
                        googleId: profile.id,
                    };
                    await saveRegisteredUsers(userData);
                } else {
                    logger.info('login successfull');
                    return done(null, user);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};

module.exports = {
    useOauthPassport,
};
