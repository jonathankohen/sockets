import React from 'react';

const Message = props => {
    const { message } = props,
        session_name = sessionStorage.getItem('name');

    let sentByCurrentUser = false;

    const trimmedName = session_name.trim().toLowerCase();

    if (message.author === session_name) sentByCurrentUser = true;

    return sentByCurrentUser ? (
        <div className="sentByCurrUser card text-white bg-primary mb-3 d-inline-block">
            <div className="card-body">
                <h5 className="card-title">{trimmedName}</h5>
                <p className="card-text">{message.message}</p>
            </div>
        </div>
    ) : (
        <div className="sentByOther card text-white bg-success mb-3 d-inline-block">
            <div className="card-body">
                <h5 className="card-title">{message.author}</h5>
                <p className="card-text">{message.message}</p>
            </div>
        </div>
    );
};

export default Message;
