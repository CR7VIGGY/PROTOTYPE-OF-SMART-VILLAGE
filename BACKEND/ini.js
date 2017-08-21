var mqtt = require('mqtt');
var mqttClient = mqtt.connect("mqtt://user1:cr7@m13.cloudmqtt.com:18654");
mqttClient.on('connect', function () {
  console.log("MQTT connected.")
  // TODO subscribe to the topic
});
 
mqttClient.on('message', function (topic, message) {
  console.log("Topic: " + topic);
  console.log("Message: " + message.toString());
});
