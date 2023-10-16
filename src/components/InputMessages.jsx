import React from "react";

const InputMessages = ({ name, onChange, id, placeholder , value }) => {
    return (
        <div className="input-messages">
            <textarea name={name} onChange={onChange} id={id} placeholder={placeholder} value={value}>
            </textarea>
        </div>
    );
};

export default InputMessages;