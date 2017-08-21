var mongoClient = require('mongodb').MongoClient;
mongoClient.connect(mongodbUrl, function(err, db) {
  if(!err) {
    console.log('MongoDB connected');
    // TODO create collection & retrieve the db object
  }
});

mqttClient.on('message', function (topic, message) {
  console.log("Topic: " + topic);
  console.log("Message: " + message.toString());
  // TODO store data to database
});

var insertSensorData = function(db, data, cb) {
	// TODO insert data to db
};
var findLastSensorDataItem = function(db, cb) {
	// TODO fetch the last inserted data item
};
