const { UserModel, IdentityTokenModel } = require('../db/model/schema');
const bcrypt = require('bcrypt');
const { MongoClient, ObjectId } = require('mongodb');
const { logger } = require('../middleware/logging');

const saveRegisteredUsers = async user => {
    try {
        if (user?.password) {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            user.password = await bcrypt.hash(user.password, salt);
        }
        const saveUser = new UserModel({ user });
        await saveUser.save();
        return saveUser;
    } catch (err) {
        logger.error(`Error while saving Registered Users: ` + err);
    }
};

const checkUserExists = async email => {
    try {
        const isExists = await UserModel.findOne({ 'user.email': email });
        return isExists;
    } catch (err) {
        logger.error(`Error while checking user exists: ` + err);
    }
};

const checkIsValidPassword = async (email, password) => {
    try {
        const userData = await UserModel.findOne({ 'user.email': email });
        if (userData && bcrypt.compareSync(password, userData.user.password)) {
            return true;
        }
    } catch (err) {
        logger.error(`Error while checking valid password: ` + err);
    }
};

const getClientIdentityTokens = async () => {
    try {
        const clientData = await IdentityTokenModel.findOne({});
        return clientData;
    } catch (err) {
        logger.error(`Error while getting client identity tokens: ` + err);
    }
};

module.exports = {
    saveRegisteredUsers,
    checkUserExists,
    checkIsValidPassword,
    getClientIdentityTokens,
};
