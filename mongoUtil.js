var mongo = require('mongodb');

var client = mongo.mongoClient;
var _db;

module.exports = {};
module.connect = function(){
  client.connect('mongodb://localhost:27017/local', function(err, db){
    if(err){
      console.log('Error connecting to MongoDB - check mongod connection');
      process.exit(1);
    }
    _db = db;
    console.log('Connected to MongoDB');
  });
};
