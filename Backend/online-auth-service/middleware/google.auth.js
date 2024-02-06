const { OAuth2Client } = require('google-auth-library');
const { getClientIdentityTokens } = require('../services/auth.services');
const { logger } = require('../middleware/logging');

const createOAuth2Client = async () => {
    try {
        const { googleClientId, googleClientSecret } = await getClientIdentityTokens();
        const oAuth2Client = new OAuth2Client({
            clientId: googleClientId,
            clientSecret: googleClientSecret,
            redirectUri: process.env.GOOGLE_CALLBACK_URL,
        });
        return oAuth2Client;
    } catch (err) {
        logger.error(`Error while initializing OAuth2Client: ${err} `);
    }
};

module.exports = { createOAuth2Client };
