import React from "react";
const ChatUI = dialogs => {
  return dialogs.map((dialog, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index
    }, dialog);
  });
};
export default ChatUI;