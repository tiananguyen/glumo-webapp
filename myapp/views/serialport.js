var express = require('express');

var app = express();
//Start the server, listening on port 3000.
var server = app.listen(3000, () => {
    console.log("Listening to requests on port 3000...");
})
//Bind socket.io to our express server.
var io = require('socket.io')(server);
//Send index.html page on GET
app.use(express.static('views'));

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
//Connect serial port to port.....
const port = new SerialPort('/dev/cu.usbserial-1460');
 //Read the line only when new line comes.
const parser = port.pipe(new Readline({delimiter: '\r\n'}));
 //Read data
parser.on('data', (glucose) => {
    console.log(glucose);
    var today = new Date();
    //emit the data ->{date, time, glucose}
    io.sockets.emit('glucose', {date: today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear(), time: (today.getHours())+":"+(today.getMinutes()), glucose:glucose});
});
//Show a log
io.on('connection', (socket) => {
    console.log("Connected.");
})
