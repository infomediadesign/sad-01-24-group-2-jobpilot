const UserModel = require('../db/model/schema');
const bcrypt = require('bcrypt');
const { MongoClient, ObjectId } = require('mongodb');
const { logger } = require('../middleware/logging');

const saveRegisteredUsers = async user => {
    try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        user.password = await bcrypt.hash(user.password, salt);
        const saveUser = new UserModel({ user });
        await saveUser.save();
        return saveUser;
    } catch (err) {
        logger.error(`Error while saving Registered Users: ` + err);
    }
};

const checkUserExists = async email => {
    try {
        const isExists = await UserModel.exists({ 'user.email': email });
        return isExists;
    } catch (err) {
        logger.error(`Error while checking user exists: ` + err);
    }
};

module.exports = { saveRegisteredUsers, checkUserExists };
