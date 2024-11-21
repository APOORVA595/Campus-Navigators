const express = require('express');
const app = express();
const connectDB = require('./config/db');
const teacherRoutes = require('./routes/teacherRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the teacher routes for API requests
app.use('/api/teachers', teacherRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
