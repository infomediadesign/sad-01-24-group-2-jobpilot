const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user: {
        any: mongoose.Mixed,
        firstname: { type: String, required: false, default: '' },
        lastname: { type: String, required: false, default: '' },
        email: { type: String, required: true },
        password: { type: String, required: false, default: null },
        googleId: { type: String, required: false, default: null },
    },
});

const IdentityTokenSchema = new mongoose.Schema({
    jwtSecret: { type: String, required: false },
    googleClientId: { type: String, required: false },
    googleClientSecret: { type: String, required: false },
});

const UserModel = mongoose.model('registered_users', UserSchema);
const IdentityTokenModel = mongoose.model('client_identity_tokens', IdentityTokenSchema);

module.exports = { UserModel, IdentityTokenModel };
