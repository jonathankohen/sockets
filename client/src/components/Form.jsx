import React, { useState } from 'react';

const Form = props => {
    const {
            onSubmitProp,
            initialInput,
            secondInput,
            placeholder,
            label,
            buttonText,
        } = props,
        [input, setInput] = useState(initialInput),
        [roomInput, setRoomInput] = useState(initialInput);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp(input, roomInput);
        setInput('');
    };

    return (
        <form
            className="form-inline justify-content-between"
            onSubmit={handleSubmit}
        >
            <label className="sr-only" htmlFor="formInput">
                {label}
            </label>
            <input
                type="text"
                className="form-control col-lg-10"
                id="formInput"
                placeholder={placeholder}
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            {secondInput ? (
                <input
                    type="text"
                    className="form-control col-lg-10 my-3"
                    id="formInput"
                    placeholder="Enter room name"
                    value={roomInput}
                    onChange={e => setRoomInput(e.target.value)}
                />
            ) : null}
            <button
                type="submit"
                className="btn btn-primary col-lg-2"
                id="formButton"
            >
                {buttonText}
            </button>
        </form>
    );
};

export default Form;
