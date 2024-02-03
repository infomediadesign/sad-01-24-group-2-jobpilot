const OpenAI = require('openai');
const { IdentityTokenModel, OpenAiModel } = require('../db/model/schema');
const { trainJobAssistant, trainApplicationAssistantDetails } = require('../middleware/helpers');
const { logger } = require('../middleware/logging');

const getClientIdentityTokens = async () => {
    try {
        const clientData = await IdentityTokenModel.findOne({});
        return clientData;
    } catch (err) {
        logger.error(`Error while getting client identity tokens from db:  ${err}`);
    }
};

const getOpenAiTrainData = async () => {
    try {
        const openAiData = await OpenAiModel.find({});
        return openAiData[0];
    } catch (err) {
        logger.error(`Error while getting open ai train data from db: ${err}`);
    }
};

const jobAssistant = async question => {
    try {
        const { openAiSecretKey } = await getClientIdentityTokens();
        const openai = new OpenAI({
            apiKey: openAiSecretKey,
        });
        const { jobAssistant } = await getOpenAiTrainData();
        const assistantDetails = await trainJobAssistant(jobAssistant);
        const thread = await openai.beta.threads.create();

        await openai.beta.threads.messages.create(thread.id, {
            role: 'user',
            content: question,
        });

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: assistantDetails.assistantId,
        });
        let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        while (runStatus.status !== 'completed') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        }

        const messages = await openai.beta.threads.messages.list(thread.id);
        const lastMessageForRun = messages.data
            .filter(message => message.run_id === run.id && message.role === 'assistant')
            .pop();
        return lastMessageForRun;
    } catch (error) {
        logger.error(`Error in jobAssistant: ${error}`);
    }
};

const jobApplicationAssistant = async message => {
    try {
        const { openAiSecretKey } = await getClientIdentityTokens();
        const openai = new OpenAI({
            apiKey: openAiSecretKey,
        });
        const { jobApplicationAssistant } = await getOpenAiTrainData();
        const jobApplicationAssistantDetails = await trainApplicationAssistantDetails(
            jobApplicationAssistant
        );

        const thread = await openai.beta.threads.create();

        await openai.beta.threads.messages.create(thread.id, {
            role: 'user',
            content: message,
        });

        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: jobApplicationAssistantDetails.assistantId,
        });

        let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

        while (runStatus.status !== 'completed') {
            await new Promise(resolve => setTimeout(resolve, 1000));
            runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        }
        const messages = await openai.beta.threads.messages.list(thread.id);
        const lastMessageForRun = messages.data
            .filter(message => message.run_id === run.id && message.role === 'assistant')
            .pop();

        return lastMessageForRun;
    } catch (error) {
        logger.error(`Error in jobApplicationAssistant: ${error}`);
    }
};

const createThread = async () => {
    try {
        const { openAiSecretKey } = await getClientIdentityTokens();
        const openai = new OpenAI({
            apiKey: openAiSecretKey,
        });
        const thread = await openai.beta.threads.create();
        return thread.id;
    } catch (err) {
        logger.error(`Error in creating new thread: ${err}`);
    }
};

module.exports = {
    jobAssistant,
    jobApplicationAssistant,
    createThread,
};
