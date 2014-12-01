
var socket = io();

// REQUESTS
$('#login').click(function(event){
  event.preventDefault();

  var request = {
    username: $('#username').val(),
    password: CryptoJS.SHA1($('#password').val()).toString(CryptoJS.enc.Hex)
  }

  console.log("login with:", request);
  
  socket.emit('login message', JSON.stringify(request));
  username: $('#username').val('');
  password: $('#password').val('');

  return false; 
});

$('#register').click(function(event){
  event.preventDefault();

  var request = {
    username: $('#username').val(),
    password: CryptoJS.SHA1($('#password').val()).toString(CryptoJS.enc.Hex)
  }

  console.log("register with:", request);

  socket.emit('register message', JSON.stringify(request));
  username: $('#username').val('');
  password: $('#password').val('');

  return false;
});

// RESPONSES
socket.on('login response', function(msg){
  console.log('message: ' + msg);
});

socket.on('register response', function(msg){
  console.log('message: ' + msg);
});