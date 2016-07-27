const mongoose = require('mongoose');
var db = mongoose.connection;

var Singer = require('../Database/Models/singerModel');
//verifying
db.on('error', console.error);


var dbMethods = {};


//Mongodb CRUD Operation for HOSTS
dbMethods.createNewSinger = function(req, res){
  singerData = req.body;
  var singerTemp = new Singer(singerData);
  singerTemp.save(function(err, singerData) {
    if (err) return console.log('erorr at create', err.code);
    console.dir('saved!');
  });
}


dbMethods.verifySinger = function(req, res) {
    var singerNameInput = req.body.username;
    var singerPasswordInput = req.body.password;
    // fetch user and test password verification
    Singer.findOne({ username: singerNameInput}, function(err, user) {
        if (err) throw err;

        // test a matching password
        user.comparePassword(singerPasswordInput, function(err, isMatch) {
            if (err) throw err;
            console.log('Password:', isMatch); // -> Password123: true
        });

        // test a failing password
        user.comparePassword(singerPasswordInput, function(err, isMatch) {
            if (err) throw err;
            console.log('Password:', isMatch); // -> 123Password: false
        });
    });
  }









mongoose.connect('mongodb://localhost/karaokeBoxRedux');

module.exports = dbMethods;
