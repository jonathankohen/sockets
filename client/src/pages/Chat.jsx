import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import Form from '../components/Form';
import Messages from '../components/Messages';

const Chat = () => {
    const [socket] = useState(() => io(':8000')),
        [messages, setMessages] = useState([]),
        [greeting, setGreeting] = useState(''),
        messagesEndRef = React.createRef();

    useEffect(() => {
        socket.on('new_message_from_server', msg => {
            setMessages(prevMessages => {
                return [...prevMessages, msg];
            });
        });

        socket.on('greeting', msg => {
            setGreeting(msg);
        });

        return () => socket.disconnect(true);
    }, [socket]);

    useEffect(() => {
        setGreeting('');
        const scrollToBottom = () => {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        };
        scrollToBottom();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages]);

    const onSubmitProp = input => {
        socket.emit('chat_message', {
            author: localStorage.getItem('name'),
            message: input,
        });
    };

    return (
        <div className="container-fluid shadow">
            <div className="row chat align-items-start vh-100">
                <div className="col">
                    <Messages
                        id="messages"
                        className="mt-5"
                        messages={messages}
                    />

                    {greeting ? (
                        <h5 className="greeting text-center">
                            <em>{greeting}</em>
                        </h5>
                    ) : null}

                    <div ref={messagesEndRef} />
                </div>
            </div>

            <div className="row align-items-end" id="form_section">
                <div className="col my-5">
                    <Form
                        onSubmitProp={onSubmitProp}
                        initialInput=""
                        label="Enter message"
                        placeholder="Enter message"
                        buttonText="Send"
                    />
                </div>
            </div>
        </div>
    );
};

export default Chat;
