const express = require('express');
const app = express();
const server = require('http').createServer(app);
var port = process.env.PORT || 3030;
const mainRoute = require('./routes/main');

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use('/', mainRoute);

io.on('connection', socket => {
    socket.on('chat', msg => {
        console.log('New msg: ', msg);
        io.emit('chat', msg);
    });
});

server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

