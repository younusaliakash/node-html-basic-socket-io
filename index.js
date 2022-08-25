const express = require('express');
const app = express();
const http = require('http');


const expressServer  = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(expressServer);

io.on('connection' , (socket) => {
    socket.on('chat', (msg) => {
        io.emit('chat-send', msg)
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})


expressServer.listen(3000, function () {
    console.log('Server is running at port 3000')
})