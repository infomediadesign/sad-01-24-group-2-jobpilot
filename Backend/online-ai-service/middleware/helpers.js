const { logger } = require('../middleware/logging');

const trainJobAssistant = async jobAssistant => {
    try {
        const jobAssistantTrainedData = {
            assistantId: jobAssistant.id,
            name: jobAssistant.name,
            instructions: jobAssistant.instructions,
            tools: [
                {
                    type: 'retrieval',
                },
            ],
            model: jobAssistant.model,
        };

        return jobAssistantTrainedData;
    } catch (err) {
        logger.error(`Error while training job assistant data: ${err}`);
    }
};

const trainApplicationAssistantDetails = async jobApplicationAssistant => {
    try {
        const applicationAssistantTrainedData = {
            assistantId: jobApplicationAssistant.id,
            name: jobApplicationAssistant.name,
            instructions: jobApplicationAssistant.instructions,
            tools: [
                {
                    type: 'retrieval',
                },
            ],
            model: jobApplicationAssistant.model,
        };

        return applicationAssistantTrainedData;
    } catch (err) {
        logger.error(`Error while training application assistant data: ${err}`);
    }
};

module.exports = {
    trainJobAssistant,
    trainApplicationAssistantDetails,
};
