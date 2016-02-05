var express = require('express');
var app = express();

var socios = {
    '619': true
};

app.get('/check', function (req, res) {
    if ( socios[req.query.code] ) {
        res.send('Socio al dia :)');
    } else {
        res.send('Carnet rechazado! :(');
    }
});

app.get('/add', function (req, res) {
    socios[req.query.code] = req.query.value.toLowerCase() === 'true';
    res.send('ok');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
