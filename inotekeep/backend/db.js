const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}


module.exports = connectToMongo;