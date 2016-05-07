// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');
// var connection = mysql.createConnection({
//     port: 3306,
//     host: 'localhost',
//     user: 'root',
//     password: "",
//     database: "starwars"
// });

var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'x3jlek1a3o3kyso0',
    password: "i670kehozwc3yx82",
    database: "cn3u4o8yz9j6oxe6"
});




connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;