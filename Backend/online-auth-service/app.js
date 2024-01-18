const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes/routes');
const authRoutes = require('./routes/auth.router');
const loadSwaggerSpec = require('./middleware/swagger');

const app = express();
app.use(express.json(), (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).send({
            timestamp: new Date(),
            status: 400,
            error: 'Bad Request',
            message: err.message,
            path: `${req.baseUrl}${req.path}`,
        });
    }

    next();
});
const swaggerSpec = loadSwaggerSpec();

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routes);
app.use('/api/auth', authRoutes);

module.exports = app;
