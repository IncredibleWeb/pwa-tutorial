var express = require('express');
var app = express();

app.use(express.static('demo'));

app.listen(3000, function() {
    console.log('Demo is running on localhost:3000');
});