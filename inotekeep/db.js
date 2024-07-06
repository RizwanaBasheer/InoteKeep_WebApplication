const mongoose = require('mongoose');

const mongoURI = process.env.ATLAS_URI;

const connectToMongo = () => {
    mongoose.connect(mongoURI);

    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (error) => {
        console.error('Error connecting to MongoDB:', error);
    });
}


module.exports = connectToMongo;