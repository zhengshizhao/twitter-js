var express = require('express');
var app = express();

app.use('/', function logger (req, res, next){
	console.log(req.method, req.path, res.statusCode);
	next();
});



app.get('/news', function(req, res, next){
 	res.send("news");
    //res.end()
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