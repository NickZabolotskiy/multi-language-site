var express = require('express');
var app = express();
app.use(express.static('sources'));
app.set('port', (process.env.PORT || 3000));
app.listen(3000, function () { console.log('server start on port 3000!'); });