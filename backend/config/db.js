// Remove mongoose dependency since it's not needed anymore
// const mongoose = require('mongoose');

const connectDB = async () => {
    // Remove MongoDB connection logic since it's not required
    console.log('Database connection logic removed');
};

// Remove the export statement for connectDB if it's no longer needed
module.exports = connectDB;
