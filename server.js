var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

var Database = require('./database/database');
var database = new Database();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  var address = socket.handshake.address;
  console.log("New connection from " + address);

  socket.on('login message', function(msg){
    console.log('login request: ' + msg);
    msg = JSON.parse(msg);
    // Do a SQL query
    database.login(msg.username, msg.password, socket);
  });

  socket.on('register message', function(msg){
    console.log('message: ' + msg);
    msg = JSON.parse(msg);
    // Do a SQL query
    database.register(msg.username, msg.password, socket);
  });
});

http.listen(3000, function(){
  console.log('listening on http://localhost:'+port);
});