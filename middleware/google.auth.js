const { OAuth2Client } = require('google-auth-library');
const { logger } = require('../middleware/logging');

const createOAuth2Client = async () => {
    try {
        const oAuth2Client = new OAuth2Client({
            clientId: '444846798337-k9c1hgoprt0vbv2n4oh9b408jb0co8kp.apps.googleusercontent.com',
            clientSecret: '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',
            redirectUri:
                'https://online-auth-service-0b73a49cb2ea.herokuapp.com/api/auth/google/callback',
        });
        return oAuth2Client;
    } catch (err) {
        logger.error(`Error while initializing OAuth2Client: ${err} `);
    }
};

module.exports = { createOAuth2Client };
