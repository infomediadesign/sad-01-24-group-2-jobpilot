const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: {
        any: mongoose.Mixed,
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
});

const IdentityTokenSchema = new mongoose.Schema({
    jwtSecret: { type: String, required: false },
});

const UserModel = mongoose.model('registered_users', UserSchema);
const IdentityTokenModel = mongoose.model('client_identity_tokens', IdentityTokenSchema);

module.exports = { UserModel, IdentityTokenModel };
