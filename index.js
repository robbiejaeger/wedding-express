var express = require('express');

var app = express();
var daysRemaining = require('./lib/daysRemaining.js');

app.use(express.static(__dirname + '/public'));

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.render('home', { daysRemaining: daysRemaining.getDaysRemaining() });
});

app.get('/lodging', function(req, res){
  res.render('lodging');
});

app.get('/ceremony', function(req, res){
  res.render('ceremony');
});

app.get('/reception', function(req, res){
  res.render('reception');
});

app.get('/registry', function(req, res){
  res.render('registry');
});


// custom 404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

// custom 500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
