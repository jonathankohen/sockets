import React, { useState } from 'react';
import io from 'socket.io-client';
import { navigate } from '@reach/router';

import Form from '../components/Form';

const Main = () => {
    const [socket] = useState(() => io(':8000'));

    const onSubmitProp = input => {
        localStorage.setItem('name', input.trim());
        const username = localStorage.getItem('name');
        socket.emit('new_user', username);
        navigate(`/chat`);
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
                            label="Please enter name below:"
                            placeholder="ex/ John Smith"
                            buttonText="Start Chatting"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
