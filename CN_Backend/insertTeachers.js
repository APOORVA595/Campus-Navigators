


const mongoose = require('mongoose');
const Teacher = require('./models/teacherModel');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/teacherDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        // First Teacher - Prof. Alice
        const teacher1 = new Teacher({
            name: "Prof. Alice",
            staffroom: "Room 101 - MRD Block",
            floor: "1st Floor",
            schedule: [
                { location: "MRD Block - Room 202", startTime: "9:00 AM", endTime: "11:00 AM", day: "Monday" },
                { location: "F Block - Room 104", startTime: "12:30 PM", endTime: "2:00 PM", day: "Tuesday" }
            ],
            currentLocation: "MRD Block - Room 202"
        });

        // Second Teacher - Dr. Bob
        const teacher2 = new Teacher({
            name: "Dr. Bob",
            staffroom: "Room 202 - GJBC Block",
            floor: "2nd Floor",
            schedule: [
                { location: "GJBC Block - Room 303", startTime: "10:00 AM", endTime: "12:00 PM", day: "Monday" },
                { location: "BE Block - Room 105", startTime: "1:00 PM", endTime: "3:00 PM", day: "Wednesday" }
            ],
            currentLocation: "GJBC Block - Room 303"
        });

        // Save both teachers
        await teacher1.save();
        console.log("Teacher 1 (Prof. Alice) data inserted successfully!");


        await teacher2.save();
        console.log("Teacher 2 (Dr. Bob) data inserted successfully!");

        // Disconnect after insertion
        mongoose.disconnect();
    })
    .catch(err => {
        console.error("Error inserting data:", err);
        mongoose.disconnect();
    });
