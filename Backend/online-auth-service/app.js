const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes/routes');
const exampleRoutes = require('./routes/number.router');
const loadSwaggerSpec = require('./util/swagger');

const app = express();

app.use(express.json());
const swaggerSpec = loadSwaggerSpec();

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routes);
app.use('/internal/example', exampleRoutes);

module.exports = app;
