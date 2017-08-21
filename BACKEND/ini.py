import paho.mqtt.client as mqtt
import urlparse

# Init MQTT client
mqttClient = mqtt.Client()
# e.g. mqtt://username:password@m20.cloudmqtt.com:port
mqttConnectionString = "mqtt://user1:cr7@m13.cloudmqtt.com:18654"
url = urlparse.urlparse(mqttConnectionString) 	
mqttClient.username_pw_set(url.username, url.password)
mqttClient.connect(url.hostname, url.port)


