const mongoose = require('mongoose');

// MongoDB connection URI
const uri = "mongodb://localhost:27017/teacherDB"; // Change the URI if you're using a remote database

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
