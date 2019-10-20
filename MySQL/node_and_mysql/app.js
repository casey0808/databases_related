// npm install mysql
// npm install faker

var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	database: 'join_us'
});

// // SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function(error, results, fields){
// 	if (error) throw error;
// 	console.log(results[0].total);
// });

// var q = 'SELECT * FROM users';
// connection.query(q, function(error, results, fields){
// 	if (error) throw error;
// 	console.log(results);
//});

// INSERTING DATA
// var person = {
// 	email: faker.internet.email(),
// 	created_at: faker.date.past()
// };

// var end_result = connection.query('INSERT INTO users SET ?', person, 
// 				function(error, results){
// 					if (error) throw error;
// 					console.log(results);
// });

// INSERTING LOTS OF DATA ===============
var data = [];
for (var i = 0; i < 500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
};

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(error, results){
		if (error) throw error;
		console.log(results);
});


connection.end();
