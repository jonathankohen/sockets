import React from 'react';

import Message from './Message';

const Messages = props => {
    const { messages } = props;
    return (
        <>
            {messages.map((message, i) => (
                <div key={i}>
                    <Message message={message} />
                </div>
            ))}
        </>
    );
};

export default Messages;
