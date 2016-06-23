var express = require('express');
var data = require('./api/data');
var app = express();

// simulates a dummy API
app.get('/api/', function(req, res) {
    res.send(data.arrivals());
});

app.use(express.static('demo'));

app.listen(3000, function() {
    console.log('Demo is running on localhost:3000');
});