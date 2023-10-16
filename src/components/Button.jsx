import React from "react";
import * as AiIcon from "react-icons/ai";

export const SendButton = ({ text, actions, conditions, styles }) => {
    return (
        <button className={`${styles}`} onClick={actions} disabled={conditions}>
            {text}
            <AiIcon.AiOutlineSend />
        </button>
    );
};