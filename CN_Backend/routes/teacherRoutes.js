const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacherModel');

// Route to get teacher details by name
router.get('/:name', async (req, res) => {
    const teacherName = req.params.name;

    try {
        const teacher = await Teacher.findOne({ name: new RegExp(`^${teacherName}$`, 'i') });

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        // Logic to determine the teacher's current location based on their schedule
        const currentLocation = getCurrentLocation(teacher.schedule);
        teacher.currentLocation = currentLocation;

        res.json({
            name: teacher.name,
            staffroom: teacher.staffroom,
            floor: teacher.floor,
            currentLocation: teacher.currentLocation
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Helper function to determine current location based on schedule
function getCurrentLocation(schedule) {
    const currentTime = new Date();
    const currentDay = currentTime.toLocaleString('en-US', { weekday: 'long' });
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    for (const slot of schedule) {
        if (slot.day === currentDay) {
            const [startHour, startMinute] = parseTimeTo24HourFormat(slot.startTime);
            const [endHour, endMinute] = parseTimeTo24HourFormat(slot.endTime);

            // Check if current time is within the teacher's schedule
            if (
                (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
                (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute))
            ) {
                return slot.location; // Teacher is currently in this location
            }
        }
    }
    return "Not currently available"; // No matching schedule found
}

// Helper function to convert 12-hour time format to 24-hour
function parseTimeTo24HourFormat(time) {
    let [timePart, ampm] = time.split(' ');
    let [hour, minute] = timePart.split(':').map(Number);
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    return [hour, minute];
}

module.exports = router;
