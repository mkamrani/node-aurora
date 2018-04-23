var express = require("express");
var app = express();

var PORT_NUMBER = 3000;

app.get('/', (req, res) => {

    //  The default example provided on the npm page of `mysql` package (https://www.npmjs.com/package/mysql).
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'Your DB Endpoint',
        user: 'admin',
        password: 'YOUR PASSWORD',
        database: 'test'
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) res.send(`Error: ${JSON.stringify(error)}`);
        res.send(`The solution is: ${results[0].solution}`);
    });

    connection.end();
});

app.listen(PORT_NUMBER, () => console.log(`Simple app listening to port ${PORT_NUMBER}`));