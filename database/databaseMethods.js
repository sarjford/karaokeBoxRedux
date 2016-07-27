const mongoose = require('mongoose');
var db = mongoose.connection;

var Singer = require('../Database/Models/singerModel');
//verifying
db.on('error', console.error);


var dbMethods = {};


//Mongodb CRUD Operation for HOSTS
dbMethods.createNewSinger = function(req, res){
  console.log(req);
  singerData = req.body;
  var singerTemp = new Singer(singerData);
  singerTemp.save(function(err, singerData) {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
}


dbMethods.verifyHost = function(singerNameInput, singerPasswordInput) {

    // fetch user and test password verification
    Host.findOne({ username: singerNameInput}, function(err, user) {
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
