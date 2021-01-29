import React from 'react';

const Message = props => {
    const { message, greeting } = props,
        session_name = sessionStorage.getItem('name');

    let sentByCurrentUser = false;

    const trimmedName = session_name.trim().toLowerCase();

    if (message.author === session_name) sentByCurrentUser = true;

    return sentByCurrentUser ? (
        <div className="container-fluid d-inline-flex">
            <div className="card sentByCurrUser row text-white bg-primary">
                <div className="card-body col">
                    <h5 className="card-title">{trimmedName}</h5>
                    <p className="card-text">{message.message}</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="container-fluid d-inline-flex justify-content-end">
            <div className="card sentByOther row text-white bg-secondary">
                <div className="card-body col">
                    <h5 className="card-title">{message.author}</h5>
                    <p className="card-text">{message.message}</p>
                </div>
            </div>
        </div>
    );
};

export default Message;
