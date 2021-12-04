var express = require('express');
var exphbs = require('express-handlebars');

var peopleData = require('./peopleData');

var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  res.status(200).render('homePage');
});

app.get('/people', function (req, res, next) {
  res.status(200).render('peoplePage', {
    people: peopleData
  });
});

app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (peopleData[person]) {
    res.status(200).render('photoPage', peopleData[person]);
  } else {
    next();
  }
});

app.post('/people/:person/addPhoto', function(req, res, next){
  console.log(" --- req.body:", req.body)
  var url = req.body.url
  var caption = req.body.caption
  var person = req.params.person.toLocaleLowerCase()

  console.log(" ---url:", url)
  console.log(" ---caption:", caption)
  console.log(" ---person:", person)

  if(peopleData[person]){
    if(url&&caption){
      peopleData[person].photos.push({
        url:url,
        caption:caption
      })
    }else{
      res.status(400).send("Request needs `url`and `caption`")
    }
  }else{
    next()
  }
  
})

app.get('*', function (req, res, next) {
  res.status(404).render('404', {
    page: req.url
  });
});

app.listen(port, function () {
  console.log("== Server listening on port", port);
})
