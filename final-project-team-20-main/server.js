//Routing Code (server side javascript)
// by Ella Riis, Javier Garcia, Min Ji Chang, and Cyrus Shafizadeh

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars')
var diceData = require('./diceData.json')

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', function (req, res, next) {
	console.log("HOME");
	var genData = diceData[0];

	res.status(200).render('dicePage', {
		urls: genData.urls
	})
});

app.use(express.static('public'));

app.get('/style/:styleChoice', function(req, res, next) {
	var styleChoice = req.params.styleChoice.toLowerCase();
	var styleData = diceData[styleChoice];

	if (styleData) {

    res.status(200).render('dicePage', {
      urls: styleData.urls
    })
  } else {
    next();
  }
});

app.get('*', function (req, res) {
	console.log("ERROR");
	res.status(404).render('404', {
		path: req.url
	})
});


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
