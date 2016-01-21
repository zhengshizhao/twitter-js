var express = require('express');
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser')

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.use('/', routes)

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views')
swig.setDefaults({ cache: false });

//code
app.use(express.static('public'));

app.listen(3000, function(){
	console.log("server listening");
});