var sensorType = process.env.ROBOT_NAME || "unnamedBot";

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port ', port);

});

var robot = new brickpi.Robot();

var bumperSwitch = new brickpi.Sensor({
	port: brickpi.SENSOR_PORT.ONE, 
	type: brickpi.SENSOR_TYPE.TOUCH, 
	name: 'Bumper Sensor'
});

console.log("Setting up robot.");
robot.setup().addSensor(bumperSwitch);
robot.run(function(){
	console.log("Robot is running.");
});

bumperSwitch.on('change',function() {
	console.log("Bumper changed to "+bumperSwitch.getValue());
});
