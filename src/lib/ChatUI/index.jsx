import React from "react";


const ChatUI = (dialogs) => {

    return dialogs.map((dialog, index) => {
        return <div key={index}>{dialog}</div>;
    });

}
export default ChatUI