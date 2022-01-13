const express = require('express');
const travelRoutes = require('./routes/travelRoutes');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

//connect to database
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/travel', travelRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`${PORT} is running...`)
});  