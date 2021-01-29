import React from 'react';

import Message from './Message';

const Messages = props => {
    const { messages, greeting } = props;

    return (
        <>
            <h1 className="my-5 text-center font-underline textShadowSm">
                Enter message below &darr;
            </h1>

            {messages.map((message, i) => (
                <div key={i} className="mt-5">
                    <Message message={message} />
                </div>
            ))}
        </>
    );
};

export default Messages;
