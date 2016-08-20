var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.render('index', {});
});

app.set('views', './views')

app.set('view engine', 'pug')



app.use('/xlsx.js', express.static(__dirname + '/node_modules/xlsx/dist/xlsx.core.min.js'));

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('localhost:3000');
});