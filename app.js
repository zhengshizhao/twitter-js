var express = require('express');
var swig = require('swig');
var routes = require('./routes/')

var app = express();

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