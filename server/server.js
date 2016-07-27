var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var dbMethods = require('../database/databaseMethods');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './../')));


app.get('/', function(req,res) {
  res.status(200);
  res.sendFile('/index.html');
});

app.post('/login', dbMethods.verifySinger, function(){
  res.send('success');
});

app.post('/signup', dbMethods.createNewSinger, function(){
  res.send('successLogin');
});

app.get('/*', function(req,res) {
  res.status(404);
});


app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});
