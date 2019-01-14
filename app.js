var express = require('express');
var app = express();
app.use(express.static('sources'));
app.set('port', (process.env.PORT || 3000));
app.listen(3000, function () { console.log('server start on port 3000!'); });



// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
