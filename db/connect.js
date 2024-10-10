const mongoose = require('mongoose');

const connectDB = (URL) => {
    mongoose.connect(URL)
    console.log('The server is connected to the database');
}

module.exports = connectDB;