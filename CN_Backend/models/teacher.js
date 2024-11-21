const mongoose = require('mongoose');

// Define the teacher schema
const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    staffroom: { type: String, required: true },
    floor: { type: String, required: true },
    schedule: [{
        location: String,  // e.g., 'Mechanical Lab - Room 202'
        startTime: String, // e.g., '9:00 AM'
        endTime: String,   // e.g., '11:00 AM'
        day: String        // e.g., 'Monday'
    }]
});

// Create and export the teacher model
const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
