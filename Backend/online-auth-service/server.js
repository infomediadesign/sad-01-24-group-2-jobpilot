const app = require('./app');
const { logger } = require('./middleware/logging');
const dbService = require('./db/dbconfig/db');

app.listen(4000, () => {
    logger.info(`Server running in ${4000} mode on port ${4000}`);
});

dbService.connectDB();
