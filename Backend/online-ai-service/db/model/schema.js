const mongoose = require('mongoose');

const IdentityTokenSchema = new mongoose.Schema({
    googleClientId: { type: String, required: false },
    googleClientSecret: { type: String, required: false },
    openAiSecretKey: { type: String, required: false },
});

const OpenAiSchema = new mongoose.Schema({
    jobAssistant: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        instructions: { type: String, required: true },
        model: { type: String, required: true },
    },
    jobApplicationAssistant: {
        id: { type: String, required: true },
        name: { type: String, required: true },
        instructions: { type: String, required: true },
        model: { type: String, required: true },
    },
});

const IdentityTokenModel = mongoose.model('client_identity_tokens', IdentityTokenSchema);

const OpenAiModel = mongoose.model('open_ais_data', OpenAiSchema);

module.exports = { IdentityTokenModel, OpenAiModel };
