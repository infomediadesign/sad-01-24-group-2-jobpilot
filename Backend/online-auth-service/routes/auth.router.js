const { Router } = require('express');
const passport = require('passport');
const { validationResult, body } = require('express-validator');
const { logger } = require('../middleware/logging');
const {
    saveRegisteredUsers,
    checkUserExists,
    checkIsValidPassword,
} = require('../services/auth.services');
const { generateJwtToken } = require('../middleware/jwt.auth');
const { useOauthPassport } = require('../middleware/google.auth');

const router = new Router();

useOauthPassport(passport);

const validateRegisterRequiredFields = [
    body('user.firstname').notEmpty().withMessage('First name is required.'),
    body('user.lastname').notEmpty().withMessage('Last name is required.'),
    body('user.email').notEmpty().isEmail().withMessage('Valid email is required.'),
    body('user.password').notEmpty().withMessage('Password is required.'),
];

const validateLoginRequiredFields = [
    body('email').notEmpty().isEmail().withMessage('Valid email is required.'),
    body('password').notEmpty().withMessage('Password is required.'),
];

router.post('/register', validateRegisterRequiredFields, async (req, res) => {
    try {
        logger.info(`Entering ${req.baseUrl}${req.path}`);
        const validationErrors = validationResult(req);
 
        if (!validationErrors.isEmpty()) {
            const erroMessage = validationErrors.array();
            return res.status(400).json({
                timestamp: new Date(),
                status: 400,
                error: 'Bad Request',
                message: erroMessage,
                path: `${req.baseUrl}${req.path}`,
            });
        }
        const isUserExists = await checkUserExists(req.body.user.email);
        if (isUserExists) {
            return res.status(400).json({
                timestamp: new Date(),
                status: 400,
                error: 'Bad Request',
                message: `User with email ${req.body.user.email} already exists`,
                path: `${req.baseUrl}${req.path}`,
            });
        } else {
            const addedUsers = await saveRegisteredUsers(req.body.user);
            if (addedUsers) {
                res.status(201).json({
                    message: 'User Registered successfully',
                    username: `${addedUsers.user.firstname} ${addedUsers.user.lastname}`,
                });
            }
        }
    } catch (err) {
        logger.error(err);
        return res.status(500).json({
            timestamp: new Date(),
            status: 500,
            error: 'Internal Server Error',
            message: err.message,
            path: `${req.baseUrl}${req.path}`,
        });
    }
});

router.post('/login', validateLoginRequiredFields, async (req, res) => {
    try {
        logger.info(`Entering ${req.baseUrl}${req.path}`);
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            const erroMessage = validationErrors.array();
            return res.status(400).json({
                timestamp: new Date(),
                status: 400,
                error: 'Bad Request',
                message: erroMessage,
                path: `${req.baseUrl}${req.path}`,
            });
        }
        const isValid = await checkIsValidPassword(req.body.email, req.body.password);
        if (!isValid) {
            return res.status(400).json({
                timestamp: new Date(),
                status: 400,
                error: 'Bad Request',
                message: 'Invalid Credientials',
                path: `${req.baseUrl}${req.path}`,
            });
        } else {
            const token = await generateJwtToken(req.body.email);
            res.status(200).json({
                token,
            });
        }
    } catch (err) {
        logger.error(err);
        return res.status(500).json({
            timestamp: new Date(),
            status: 500,
            error: 'Internal Server Error',
            message: err.message,
            path: `${req.baseUrl}${req.path}`,
        });
    }
});

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);
router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/',
        successRedirect: '/success',
    })
);

module.exports = router;
