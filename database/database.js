function Database() {

  if(typeof this.mysql == "undefined") {
    this.init();
  }
}

Database.prototype.init = function() {

  var mysql = require('mysql');

  this.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'test1234',
    database : 'linkbank'
  });

},

Database.prototype.search = function(word, socket) {
  console.log("search:", word);

  var query = this.connection.query("SELECT address, description FROM link WHERE description LIKE '%" + word + "%' OR address LIKE '%"+ word +"%'", function(err, rows, fields) {
      if(err) {
        console.log("search query failed:", err);
      }
      else {
        console.log("found", rows);
        socket.emit('search response', JSON.stringify(rows));
      }
    });
},

Database.prototype.addlink = function(link, description, socket) {
  console.log("addlink:", link, description);

  this.connection.query("INSERT INTO link (address, description) VALUES (?, ?)", [link, description], function(err, result) {
    if(err) {
      console.log("addlink query failed:", err);
      socket.emit('add link response', false);
    }
    else {
      socket.emit('add link response', true);
    }
  });

},

Database.prototype.login = function(username, passwordhash, socket) {

  this.connection.query("SELECT passwordhash FROM user WHERE username = ?", [username], function(err, rows, fields) {
    if(err) {
      console.log("login query failed:", err);
    }
    else {
      var status = false;
      if(typeof rows[0] !== "undefined") {
        if(passwordhash == rows[0].passwordhash) {
          status = true;
        }
        else {
          status = false;
        }
      }
      socket.emit('login response', status);
      socket.authorized = status;
    }
  });
}

Database.prototype.register = function(username, passwordhash, socket) {

  console.log("register:", username, passwordhash);

  var query = this.connection.query("INSERT INTO user (username, passwordhash) VALUES (?,?)", [username, passwordhash], function(err, result) {
    if(err) {
      console.log("register query failed:", err);
    }
    else {
      socket.emit('register response', true);
      socket.authorized = true;
    }
  });
}

module.exports = Database;