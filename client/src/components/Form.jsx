import React from 'react';

const Form = props => {
    const {
        handleSubmit,
        handleChange,
        input,
        placeholder,
        label,
        buttonText,
    } = props;

    return (
        <div className="d-flex justify-content-center">
            <form className="form-inline" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="form">
                    {label}
                </label>
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="form"
                    placeholder={placeholder}
                    value={input}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary mb-2">
                    {buttonText}
                </button>
            </form>
        </div>
    );
};

export default Form;
