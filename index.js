const express = require('express');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useMongoClient: true });
const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);