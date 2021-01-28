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
    // io.emit('new_client');
    socket.on('chat_message', msg => {
        io.emit('new_message_from_server', msg);
    });
});
