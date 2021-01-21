require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send('Yoni was here');
});

const server = app.listen(process.env.PORT, () =>
    console.log(`Listening on port ${server.address().port}...`)
);

const io = require('socket.io')(server, { cors: true });

io.on('connection', socket => {
    socket.emit('Welcome', 'Hi from the server');
});
