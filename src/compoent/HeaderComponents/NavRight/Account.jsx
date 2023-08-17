import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopUup = () => {
  return (
    <div className="popUp">
      <div className="popUpLink">Login</div>
      <div className="popUpLink">Sign Up</div>
    </div>
  );
};

export const Account = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="menu"
      onClick={() => {
        setShow(!show);
      }}
    >
      <span className="icon icon-left">
        <FontAwesomeIcon icon="user" />
      </span>
      Account
      <span className="icon">
        <FontAwesomeIcon icon="chevron-down" />
      </span>
      {show && (
        <div className="account">
          <PopUup />
        </div>
      )}
    </div>
  );
};
