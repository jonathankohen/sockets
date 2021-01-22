require('dotenv').config();

const express = require('express'),
    app = express(),
    port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send('Yoni was here');
});

const server = app.listen(port, () =>
    console.log(`Listening on port ${port}...`)
);

const io = require('socket.io')(server, { cors: true });

io.on('connection', socket => {
    socket.emit('Welcome', 'Hi from the server');
});
