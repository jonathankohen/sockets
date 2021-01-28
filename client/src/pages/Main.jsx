import React, { useState } from 'react';
import { navigate } from '@reach/router';

import Form from '../components/Form';

const Main = () => {
    const [name, setName] = useState('');

    const handleChange = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        sessionStorage.setItem('name', name);
        navigate(`/chat`);
    };

    return (
        <>
            <h1 className="my-5">Please enter name below:</h1>
            <Form
                className=""
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={name}
                label="Enter name"
                placeholder="John Smith"
                buttonText="Start Chatting"
            />
        </>
    );
};

export default Main;
