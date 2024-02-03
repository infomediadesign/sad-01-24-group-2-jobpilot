const { OAuth2Client } = require('google-auth-library');
const { logger } = require('../middleware/logging');

const oAuth2Client = new OAuth2Client({
    clientId: '444846798337-k9c1hgoprt0vbv2n4oh9b408jb0co8kp.apps.googleusercontent.com',
    clientSecret: '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',
    redirectUri: process.env.GOOGLE_CALLBACK_URL,
    // clientId: '925596356512-uasm5jslub0i457dhfsk2tlgkvhh4li7.apps.googleusercontent.com',
    // clientSecret: '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',
    // redirectUri: process.env.GOOGLE_CALLBACK_URL,
});

module.exports = oAuth2Client;
