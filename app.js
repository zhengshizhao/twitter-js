var express = require('express');
var swig = require('swig');

var app = express();

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', './views')

swig.setDefaults({ cache: false });

var locals = {
	title: 'An example',
	people: { 
		person1 : {name: "Galdalf"},
		person2: {name: "Frodo"},
		person3: {name: "Hermione"}
	}
};

app.use('/', function logger (req, res, next){
	console.log(req.method, req.path, res.statusCode);
	next();
});

app.get('/news', function(req, res, next){
 	res.render( 'index', locals);
 	// res.send("news");
 });

// app.get('/:type', function(req, res, next){
//  	res.send("Grace hopper news");
//     console.log(req.params.type);
//  });

app.use(function(req, res, next){
	res.send("hello world");
});

app.listen(3000, function(){
	console.log("server listening");
});