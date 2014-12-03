
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
  $('#username').val('');
  $('#password').val('');

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
  $('#username').val('');
  $('#password').val('');

  return false;
});

$('#send_url').click(function(event){
  event.preventDefault();

  var request = {
    link: $('#linkki_url_js').val(),
    description: $('#tieto_url_js').val()
  }

  console.log("add link with:", request);

  socket.emit('add link', JSON.stringify(request));
  $('#linkki_url_js').val('');
  $('#tieto_url_js').val('');

  return false;
});

$('#hae_url').click(function(event){
  event.preventDefault();

  var request = {
    word: $('#haku_rivi').val()
  }

  console.log("search with:", request);

  socket.emit('search', JSON.stringify(request));

  return false;
});


// RESPONSES
socket.on('login response', function(msg){
  console.log('login response: ' + msg);
});

socket.on('register response', function(msg){
  console.log('register response: ' + msg);
});

socket.on('search response', function(msg){
  console.log('search response: ' + msg);
  // Generoi taulukko haku.html-tiedostoon oikeaan kohtaan
});

socket.on('add link response', function(msg){
  console.log('add link response: ' + msg);
});