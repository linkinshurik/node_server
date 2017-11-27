const express = require('express');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./services/passport');
require('./models/User');

const app = express(keys.mongoURI);
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);