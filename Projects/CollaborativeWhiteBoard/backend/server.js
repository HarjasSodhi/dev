const express = require('express');
let server = express();
let http = require('http').createServer(server);
var io = require('socket.io')(http);
var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;

let Olddata;

io.on('connection', (socket) => {
    console.log(socket.id);
    io.sockets.emit('canvas-data', Olddata);
    socket.on('canvas-data', (data) => {
        Olddata=data;
        socket.broadcast.emit('canvas-data', Olddata);
    })
})

http.listen(server_port, () => {
    console.log("Started on : " + server_port);
})