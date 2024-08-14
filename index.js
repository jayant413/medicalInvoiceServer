const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const colors = require('colors')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('Connected to MongoDB'.bgMagenta.white))
    .catch(err => console.error('Could not connect to MongoDB'.bgRed.white, err));

// Import routes
const invoiceRoutes = require('./routes/invoiceRoutes');

// Use routes
app.use('/invoices', invoiceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
});
