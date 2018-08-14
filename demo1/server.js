var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World');
    response.end();
});

app.get('/block', function(request, response) {
    // var blocks = ['Fixed', 'Movable', 'Rotating'];\
    // var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>'
    // response.send(blocks);
    // response.json(blocks);
    // response.redirect('/parts');
    response.redirect(301, '/parts');
});

app.listen(8000, function() {
    console.log('Listening on port 8000');
});