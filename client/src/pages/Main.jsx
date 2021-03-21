import React, { useState } from 'react';
import io from 'socket.io-client';
import { navigate } from '@reach/router';

import Form from '../components/Form';

const Main = () => {
    const [socket] = useState(() => io(':8000'));

    const secondInput = true;

    const onSubmitProp = (input, roomInput) => {
        localStorage.setItem('name', input.trim());

        const username = localStorage.getItem('name');

        socket.emit('new_user', (username, roomInput));

        navigate(`/chat/${roomInput}`);
    };

    return (
        <>
            <div className="container">
                <div className="row main align-items-end">
                    <div className="col">
                        <h1 className="my-5 textShadowSm">Enter name &darr;</h1>
                        <Form
                            onSubmitProp={onSubmitProp}
                            initialInput=""
                            label="Enter your name"
                            placeholder="Enter your name"
                            buttonText="Start Chatting"
                            secondInput={secondInput}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
