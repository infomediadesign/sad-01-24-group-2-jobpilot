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
 
const UserModel = mongoose.model('registered_users', UserSchema);
 
module.exports = UserModel;