import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Form from '../components/Form';
import Messages from '../components/Messages';

const Chat = () => {
    const [socket] = useState(() => io(':8080')),
        [message, setMessage] = useState(''),
        [messages, setMessages] = useState([]);
    // initial messages? message?
    // [greeting, setGreeting] = useState('');

    // const name = sessionStorage.getItem('name');

    const handleChange = e => {
        setMessage(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (message !== '') {
            socket.emit('chat_message', {
                author: sessionStorage.getItem('name'),
                message: message,
            });
            setMessage('');
        }
    };

    useEffect(() => {
        socket.on('new_message_from_server', msg => {
            setMessages(prevMessages => {
                return [...prevMessages, msg];
            });
        });

        return () => socket.disconnect(true);
    }, [socket]);

    return (
        <div>
            <h1 className="my-5 text-center">Chat</h1>
            <Messages messages={messages} />

            <Form
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={message}
                label="Enter message"
                placeholder="Enter message"
                buttonText="Send"
            />
        </div>
    );
};

export default Chat;
