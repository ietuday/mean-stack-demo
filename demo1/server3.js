var express = require('express');
var app = express();
var logger = require('./looger');
app.use(logger);
// app.use(express.static('public'));
app.use(express.static('public'));

app.use('/blocks', function(request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks);
});

app.listen(3000);