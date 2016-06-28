// 모듈을 추출합니다.
var http    = require('http');
var mqtt   = require('mqtt');
var client  = mqtt.connect('mqtt://172.30.1.34');

var temp_value;

client.on('connect', function () {
  client.subscribe('moduFARM/sensor/temp');
 // client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  temp_value = message.toString();
  //client.end();
});

// 웹 서버를 생성합니다.
var server = http.createServer(function (request, response) {

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('<h1> temp_value :</h1>' + temp_value);

}).listen(52273, function () {
    console.log('Server running at port 52273');
});
