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

app.get('/travel', function(req, res){
  res.render('travel');
});

app.get('/weddingEvents', function(req, res){
  res.render('weddingEvents');
});

app.get('/steamboatAttractions', function(req, res){
  res.render('steamboatAttractions');
});

app.get('/registry', function(req, res){
  res.render('registry');
});

app.use(function(req, res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
