import React, { useState } from "react";

const Switch = ({text}) => {
  const [btnSwitch, setBtnSwitch] = useState(false)


  return (
    <div className="d-flex flex-row">
      <p className="m-3 inline-block">{text}</p>
      <button
        type="button"
        onClick={() => setBtnSwitch(!btnSwitch)}
        style={{opacity: 1, transition: "all 0.3s ease-in-out", marginRight: "5px", padding: "0px 5px"}}
        
        className={btnSwitch? "bg-gray-800 text-white rounded-full": ""}
      >
        Popular {text}
      </button>
      <button
      type="button"
      className={btnSwitch? "" : "bg-gray-800 text-white px-3 rounded-full"}
      onClick={() => setBtnSwitch(!btnSwitch)}
      >Top {text}</button>
    </div>
  );
};

export default Switch;
