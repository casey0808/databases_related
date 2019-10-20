// npm init
// npm install --save express
// npm install --save body-parser
// npm install mysql
// mysql-ctl start


var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser  = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));


var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	database: 'join_us',
});

app.get('/', function(req, res){
	var q = 'SELECT COUNT(*) AS count FROM users';
	connection.query(q, function(error, results){
		if (error) throw error;
		var count = results[0].count;
		res.render('home', {data: count});
		//var msg = 'WE HAVE ' + results[0].count + ' users!';
		//res.send(msg);
	});
});

app.post('/register', function(req, res){
	var person = {email: req.body.email};
	connection.query('INSERT INTO users SET ?', person, function(error, results){
		if (error) throw error;
		console.log(error);
		console.log(results);
		res.redirect('/');
	});
});

app.get('/joke', function(req, res){
	res.send("I don't know any jokes :( ");
});

app.get('/random_num', function(req, res){
	var num = Math.floor(Math.random()* 10 + 1);
	res.send('Your lucky number is ' + num);
});


app.listen(3000, function(){
	console.log('App listening on Port 3000!');
});

