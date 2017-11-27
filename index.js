const express = require('express');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express(keys.mongoURI);
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);