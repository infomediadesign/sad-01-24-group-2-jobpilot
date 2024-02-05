const { OAuth2Client } = require('google-auth-library');
const { getClientIdentityTokens } = require('../services/auth.services');
const { logger } = require('../middleware/logging');

const oAuth2Client = new OAuth2Client({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_CALLBACK_URL,
});

module.exports = oAuth2Client;
