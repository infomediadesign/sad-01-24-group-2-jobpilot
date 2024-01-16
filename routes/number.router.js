const { Router } = require('express');
const { validationResult } = require('express-validator');
const { logger } = require('../util/logging');
const { getAllNumbers, deleteNumbers } = require('../services/number.services');
const { replaceNumbers, generateRange, checkInvalidRange } = require('../util/helpers');

const router = new Router();

router.get('/get/numbers', async (req, res) => {
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

        res.send({ Name: 'Mahesh' });
    } catch (err) {
        logger.error(err);
        return res.status(500).json({
            timestamp: new Date(),
            status: 500,
            error: 'Bad Request',
            message: err.message,
            path: `${req.baseUrl}${req.path}`,
        });
    }
});

module.exports = router;
