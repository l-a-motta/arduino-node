var express = require('express');
app = express();
server = require('http').createServer(app);
io = require('socket.io').listen(server);
var SerialPort = require("serialport")
var serialPort = new SerialPort("/COM3", { baudRate: 9600 });
 
server.listen(8080);// Coloque aqui o IP desejado para comunicação servidor/arduino/usuario

app.use(express.static('public'));// Não tenho certeza se usar public pode causar um risco de segurança, a biblioteca express não tinha documentação boa sobre isso       
 
var send = 0;// O valor inicial que será "mandado" para o arduino
 
io.sockets.on('connection', function (socket) {
        socket.on('led', function (data) {
                send = data.value;

                var buf = new Buffer.alloc(1);
                buf.writeUInt8(send);
                serialPort.write(buf);
               
                io.sockets.emit('led', {value: send});   
        });
       
        socket.emit('led', {value: send});
});

// Descomente para receber valores do arduino

/*var read = 0;// O valor inicial do que será "recebido" do arduino
io.sockets.on('connection', function (socket) {
        socket.on('led', function (data) {
                read = io.sockets.receive('led', {value: get});

                var buf = new Buffer.alloc(1);
                buf.writeUInt8(read);
                console.log(buf);  
        });
});*/
 
console.log("Web Server online, va para o localhost:8080 ou seu IP personalizado.");