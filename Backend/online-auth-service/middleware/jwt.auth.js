const jwt = require('jsonwebtoken');
const { getClientIdentityTokens } = require('../services/auth.services');
const { logger } = require('./logging');

const generateJwtToken = async email => {
    try {
        const { jwtSecret } = await getClientIdentityTokens();
        return jwt.sign({ email }, jwtSecret, {
            expiresIn: '1h',
            algorithm: 'HS256',
        });
    } catch (err) {
        logger.error('Error while generating jwt token: ', err);
    }
};

module.exports = {
    generateJwtToken,
};
