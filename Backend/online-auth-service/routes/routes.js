const express = require('express');

const { logger } = require('../util/logging');

const router = express.Router();

router.get('/', (req, res) => {
    logger.silly('Health check');
    res.send(`Server is up and running at ${new Date()}`);
});

router.use('/exercise/braille', require('./number.router'));

module.exports = router;
