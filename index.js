const express = require('express');
//const authRoutes = require('./routes/authRoutes');
//const keys = require('./config/keys');
//const mongoose = require('mongoose');
//require('./models/User');
//require('./services/passport');

//mongoose.connect(keys.mongoURI, { useMongoClient: true });
const app = express();
let count = 0;
let posts = [];
//authRoutes(app);

app.use(express.urlencoded());
app.use(express.json());


app.get('/', function (req, res) {
    res.send('start page');
});

app.post('/posts', function (req, res) {
    count++;
    posts.push(req.body);
    res.send({
        posts: posts,
        count: count
    });
});

app.get('/posts', function (req, res) {
    res.send({
        posts: posts,
        count: count
    });
});

app.delete('/posts', function (req, res) {
    posts = [];
    count = 0;
    res.send('ok');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);