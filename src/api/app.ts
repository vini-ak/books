var express = require('express');
var app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/*
 * ROUTES
 */
app.get('/', function (req, res) {
    res.send('Hello world');
});

app.post('/', function (req, res) {
    res.send('My post request');
});


app.listen(8080, () => {
    console.log(`Example app listening on port ${8080}`);
});