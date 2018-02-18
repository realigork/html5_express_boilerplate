var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/src');
app.use(express.static(staticPath));

app.listen(3000, function() {
    console.log('Server is listening on http://localhost:3000...');
})
