require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () =>
    console.log(`Listening on port ${port}...`)
);

const io = require('socket.io')(server, { cors: true });

io.on('connection', socket => {
    socket.on('new_user', (username, roomInput) => {
        socket.join(`${roomInput}`);
        io.to(`${roomInput}`).emit(
            'greeting',
            `${username} has joined the chat`
        );
    });

    socket.on('chat_message', msg => {
        io.emit('new_message_from_server', msg);
    });

    // socket.on('disconnecting', () => {
    //     console.log(socket.rooms); // the Set contains at least the socket ID
    // });

    // socket.on('disconnect', () => {
    //     // socket.rooms.size === 0
    // });
});
