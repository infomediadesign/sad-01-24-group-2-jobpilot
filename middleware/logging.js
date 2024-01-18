const {
    createLogger,
    transports,
    format: { combine, timestamp, label, printf, prettyPrint },
} = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

const logger = createLogger();

const myFormat = printf(
    ({ timestamp, label, level, message }) => `${timestamp} [${label}] ${level}: ${message}`
);

logger.configure({
    level: process.env.LOG_LEVEL,
    format: combine(label({ label: 'online-auth-service' }), timestamp(), prettyPrint(), myFormat),
    transports: [
        new DailyRotateFile({
            datePattern: 'YYYY-MM-DD',
            dirname: './logs',
            filename: 'online-auth-service-%DATE%.log',
            maxFiles: process.env.LOG_MAX_DAYS,
            utc: true,
            handleExceptions: true,
        }),
        new transports.Console({
            format: combine(
                label({ label: 'online-auth-service' }),
                timestamp(),
                prettyPrint(),
                myFormat
            ),
            handleExceptions: true,
        }),
    ],
});

module.exports = { logger };
