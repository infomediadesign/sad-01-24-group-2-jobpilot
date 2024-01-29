const swaggerJSDoc = require('swagger-jsdoc');
const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const loadSwaggerSpec = () => {
    try {
        const swaggerFilePath = path.join(__dirname, 'swagger.yaml');
        const fileContents = fs.readFileSync(swaggerFilePath, 'utf8');
        return yaml.parse(fileContents);
    } catch (error) {
        console.error(`Error loading Swagger specification: ${error.message}`);
        return null;
    }
};

module.exports = loadSwaggerSpec;
