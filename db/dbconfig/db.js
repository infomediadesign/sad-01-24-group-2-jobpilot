const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://' +
                'AppBraille23' +
                ':' +
                'Heidelberg23' +
                '@' +
                'clusterbraille.u3wyeru.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                dbName: process.env.MONGODB_DATABASE,
            }
        );
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
