var express = require("express");
var mysql = require('mysql');
var router = express.Router();
var Database = require("../Database");

var host = "localhost";
var user = "root";
var passw = "";
var database = "RPG";

var con = mysql.createConnection({
    host: host,
    user: user,
    password: passw,
    database: database
});

con.connect(function(err) {
    if(err) throw(err);
});

router.post()