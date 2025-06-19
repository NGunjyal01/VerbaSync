const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const connectDB = require('./config/db');

const uploadFileRoute = require("./routes/uploadFile")

// Middleware
app.use(cors());
app.use(express.json());

app.use('/',uploadFileRoute)

// Connect to database
connectDB();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));