const { Router } = require('express');
const { validationResult, body } = require('express-validator');
const { logger } = require('../middleware/logging');
const { jobAssistant, jobApplicationAssistant, createThread } = require('../services/ai.services');

const router = new Router();

const validateChatRequiredFields = [
    body('question').notEmpty().withMessage('Question is required.'),
];

const validateJobDetailsRequiredFields = [
    body('message').notEmpty().withMessage('Message is required.'),
];

router.post('/chat', validateChatRequiredFields, async (req, res) => {
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
        const lastMessageForRun = await jobAssistant(req.body.question);

        if (lastMessageForRun) {
            res.status(200).json({ response: lastMessageForRun.content[0].text.value });
        } else {
            res.status(500).send('No response received from the job assistant.');
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

router.post('/job/application/details', validateJobDetailsRequiredFields, async (req, res) => {
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
        const lastMessageForRun = await jobApplicationAssistant(req.body.message);

        if (lastMessageForRun) {
            res.status(200).json(JSON.parse(lastMessageForRun.content[0].text.value));
        } else {
            res.status(500).send('No response received from the job application assistant.');
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

router.post('/create-thread', async (req, res) => {
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
        const threadId = await createThread();
        res.json({ threadId });
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
