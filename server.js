var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var favicon = require('serve-favicon');
var daysRemaining = require('./lib/daysRemaining.js');

var app = express();

function requireHTTPS(req, res, next){
  if (req.headers['x-forwarded-proto'] != 'https') {
      return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
};

app.use(express.static(__dirname + '/public'));
if (process.env.NODE_ENV === 'production') {app.use(requireHTTPS);}
app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.render('home');
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
  console.log('Express started on localhost:' + app.get('port'));
});
