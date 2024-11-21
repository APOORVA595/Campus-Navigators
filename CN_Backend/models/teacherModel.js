const mongoose = require('mongoose');

// Define the teacher schema
const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    staffroom: { type: String, required: true },
    floor: { type: String, required: true },
    schedule: [{
        location: String,
        startTime: String,
        endTime: String,
        day: String
    }],
    currentLocation: String, // Dynamic field to store current location
});

// Create the model based on the schema
const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
