import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        socket.on('connect', () => {
            socket.on('Welcome', data => console.log(data));
            return () => socket.disconnect(true);
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <h1>Chat</h1>
        </div>
    );
}

export default App;
