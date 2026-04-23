require('dotenv').config();
const express = require('express');
const path = require('path');
require('./config/database');

const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Frontend static
app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));