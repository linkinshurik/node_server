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


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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