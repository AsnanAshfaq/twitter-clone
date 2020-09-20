import React from "react";
import "./LeftBar.css";

function LeftBarOptions({active, Icon, text }) {
  return (
    <div className={`row d-flex flex-row pt-2 option mt-2  ${active && "active"}`}>
      <div className="col-3 d-flex justify-content-end icon">
        {/* icon */}
        <Icon />
      </div>
      <div className="col-9 text">
        {/* text  */}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default LeftBarOptions;
