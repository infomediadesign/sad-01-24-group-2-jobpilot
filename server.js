const app = require('./app');
const { logger } = require('./middleware/logging');
const dbService = require('./db/dbconfig/db');

app.listen(process.env.PORT || 4000, () => {
    console.log(process.env.PORT)
    logger.info(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`);
});

dbService.connectDB();
