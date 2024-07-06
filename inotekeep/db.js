const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://rizwanabasheer067:hNzeKAhi1VEyfUoQ@inote.mbucrtj.mongodb.net/?retryWrites=true&w=majority&appName=INote"

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