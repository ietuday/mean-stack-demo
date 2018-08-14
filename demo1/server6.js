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

var locations = {
    'Fixed': 'First Floor',
    'Movable': 'Second Floor',
    'Rotating': 'Penthouse'
};

app.param('name', function(request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    request.blockName = block;
    next();
});


app.use('/blocks/:name', function(request, response) {
    // var description = blocks[request.params.name];
    // var name = request.params.name;
    // var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[request.blockName];

    console.log("description : ", description);

    if (!description) {
        response.status(404).json('No description found for ' + request.params.name);
    } else {
        // response.json(description);
        response.json(Object.keys(blocks));
    }

});

app.use('/locations/:name', function(request, response) {
    // var description = blocks[request.params.name];
    // var name = request.params.name;
    // var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    var location = locations[request.blockName];

    console.log("location : ", location);

    if (!location) {
        response.status(404).json('No location found for ' + request.params.name);
    } else {
        // response.json(location);
        response.json(Object.keys(location));
    }

});


app.listen(3000, function() {
    console.log("Server running on 3000");
});