var mongo = require('mongodb');
var credentials = require('./credentials');

var client = mongo.MongoClient;
var _db;

module.exports = {
  connect: function(){
    client.connect('mongodb://' + credentials.user + ':' + credentials.password + '@ds013901.mlab.com:13901/sage-express', function(err, db){
      if(err){
        console.log('Error connecting to MongoDB - check mongod connection');
        process.exit(1);
      }
      _db = db;
      console.log('Connected to MongoDB');
    });
  },
  skills: function(){
    return _db.collection('skills');
  },
  historicPlaces: function(){
    return _db.collection('historic.places')
  }
};