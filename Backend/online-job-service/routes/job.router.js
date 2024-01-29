const { Router } = require('express');
const { validationResult, body } = require('express-validator');
const { logger } = require('../middleware/logging');
const { buildJobApplicationDetails } = require('../services/job.services');

const router = new Router();

const validateJobTrackReqBody = [
    body('email').notEmpty().isEmail().withMessage('Valid email is required.'),
    body('accessToken').notEmpty().withMessage('Access Token is required.'),
    body('expiryDate').notEmpty().withMessage('Expiry Date is required.'),
    body('refreshToken').notEmpty().withMessage('Refresh Token is required.'),
];

router.post('/track', validateJobTrackReqBody, async (req, res) => {
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
        const emailQueryString = '"subject:Your Application"';
        const jobApplicationStatusData = await buildJobApplicationDetails(
            req.body.email,
            req.body.accessToken,
            req.body.expiryDate,
            req.body.refreshToken,
            emailQueryString
        );
        if (jobApplicationStatusData) {
            res.status(200).json(jobApplicationStatusData);
        } else {
            return res.status(404).json({
                timestamp: new Date(),
                status: 404,
                error: 'Not Found',
                message: erroMessage,
                path: `${req.baseUrl}${req.path}`,
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

module.exports = router;
