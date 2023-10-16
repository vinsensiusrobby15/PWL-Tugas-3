import React from "react";
import * as AiIcon from "react-icons/ai"

const InputText = ({type, name, onChange, id, placeholder, value }) => {
    return (
        <div className="input-field">
            {type === "text" ? <AiIcon.AiOutlineUser size={24} /> : <AiIcon.AiOutlineMail size={24} />}
            <input type={type} name={name} onChange={onChange} id={id} placeholder={placeholder} value={value} />
        </div>
    );
};

export default InputText;