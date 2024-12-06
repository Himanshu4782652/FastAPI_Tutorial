const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculator');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/calculator', calculatorRoutes);

module.exports = app;
