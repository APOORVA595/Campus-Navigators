const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Teacher = require('./models/teacher');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/campusMap', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Endpoint to add a teacher (admin or user adding teachers)
app.post('/api/teachers', async (req, res) => {
    const { name, staffroom, floor, schedule } = req.body;

    const teacher = new Teacher({
        name,
        staffroom,
        floor,
        schedule
    });

    try {
        await teacher.save();
        res.status(201).send('Teacher added successfully');
    } catch (err) {
        res.status(400).send('Error adding teacher');
    }
});

// Endpoint to fetch teacher by name and their current location
app.get('/api/teachers/:name', async (req, res) => {
    try {
        const teacher = await Teacher.findOne({ name: req.params.name });

        if (!teacher) {
            return res.status(404).send('Teacher not found');
        }

        const currentLocation = getCurrentLocation(teacher);

        res.json({
            name: teacher.name,
            staffroom: teacher.staffroom,
            floor: teacher.floor,
            currentLocation
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Helper function to determine the current location based on schedule and time
function getCurrentLocation(teacher) {
    const currentTime = new Date();
    const currentDay = currentTime.toLocaleString('en-US', { weekday: 'long' });
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    for (let slot of teacher.schedule) {
        if (slot.day === currentDay) {
            const [startHour, startMinute] = parseTimeTo24HourFormat(slot.startTime);
            const [endHour, endMinute] = parseTimeTo24HourFormat(slot.endTime);

            if (
                (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
                (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute))
            ) {
                return `In ${slot.location} from ${slot.startTime} to ${slot.endTime}`;
            }
        }
    }
    return 'Not available';
}

// Helper function to parse 12-hour time format to 24-hour format
function parseTimeTo24HourFormat(time) {
    const [timePart, ampm] = time.split(' ');
    let [hour, minute] = timePart.split(':').map(Number);
    if (ampm === 'PM' && hour !== 12) hour += 12;
    if (ampm === 'AM' && hour === 12) hour = 0;
    return [hour, minute];
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
