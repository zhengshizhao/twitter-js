var swig = require('swig');

var locals = {
	title: 'An example',
	people: { 
		person1 : {name: "Galdalf"},
		person2: {name: "Frodo"},
		person3: {name: "Hermione"}
	}
};

//title - An example
//for person in people should print out person.name
//person.name - Gandalf, Frodo, Hermione

swig.renderFile('./views/index.html',locals, function(err, output){
	console.log(output);
});

// var tpl = swig.compileFile('./views/index.html');
// tpl({title : 'An example'});
// swig.renderFile('./views/index.html',{}, function(err, output){
// 	console.log(output);
// });
// console.log(tpl)