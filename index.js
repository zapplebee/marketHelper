var express = require('express');
var app = express();
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

//pug renderer, index
app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  res.render('index', {});
});

//static xlsx
app.use('/xlsx.js', express.static(__dirname + '/node_modules/xlsx/dist/xlsx.core.min.js'));
app.use('/angular.js', express.static(__dirname + '/node_modules/angular/angular.js'));
app.use('/main.js', express.static(__dirname + '/main.js'));

//sass
app.use(sassMiddleware({
    src: path.join(__dirname, 'style'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'extended',
    prefix: "/public"
}));
app.use("/public", express.static(path.join(__dirname, 'public')));

//listen
app.listen(3000, function () {
  console.log('localhost:3000');
});