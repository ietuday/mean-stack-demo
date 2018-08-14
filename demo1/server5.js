var express = require('express');
var app = express();
var logger = require('./looger');

app.use(logger);
app.use(express.static('public'));

var blocks = {
    'Fixed': 'Fastened Securely in position',
    'Movable': 'Capable is being moved',
    'Rotating': 'Moving in a circle around its center'
};

app.use('/blocks/:name', function(request, response) {
    // var description = blocks[request.params.name];
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[block];

    console.log("description : ", description);

    if (!description) {
        response.status(404).json('No description found for ' + request.params.name);
    } else {
        response.json(description);
    }

});

app.listen(3000, function() {
    console.log("Server running on 3000");
});