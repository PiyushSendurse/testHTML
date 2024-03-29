var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");


//server configuration
app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});
 

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:43};
  res.send(person);
});

 
var server = app.listen(8800, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8800", host, port)
})