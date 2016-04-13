var mongo = require('mongodb');

var client = mongo.MongoClient;
var _db;

module.exports = {
  connect: function(){
    client.connect('mongodb://localhost:27017/sage-express', function(err, db){
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
  }
};