SELECT COUNT(*) FROM books;

SELECT released_year, COUNT(*) FROM books GROUP BY released_year;

SELECT SUM(stock_quantity) FROM books;

SELECT CONCAT(author_fname, ' ', author_lname) AS author, AVG(released_year)
FROM books
GROUP BY author;

SELECT CONCAT(author_fname, ' ', author_lname) AS full_name
FROM books
ORDER BY pages DESC
LIMIT 1;

SELECT released_year AS year, COUNT(*) AS '\# books' , AVG(pages) AS 'avg pages'
FROM books
GROUP BY released_year;

// ==============

CREATE TABLE inventory (
    item_name VARCHAR(100),
    price DECIMAL(8, 2),
    quantity INT
);

SELECT NOW();
SELECT CURDATE();
SELECT DAYOFWEEK(CURDATE());
SELECT DAYNAME(CURDATE());
SELECT DATE_FORMAT(CURDATE(), '%m/%d/%Y');
SELECT DATE_FORMAT(NOW(), '%M %D at %h:%i');

CREATE TABLE tweets(
	content VARCHAR(100),
	username VARCHAR(100),
	created_at TIMESTAMP DEFAULT NOW()
);
