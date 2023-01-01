import React from "react";
import { useHistory } from "react-router-dom";

const ComponentsTopic = () => {
  const his=useHistory();
  return (
    <div id="components-div">
      <h3>Components in React</h3>
      <button id="components-back-button" onClick={()=>{his.push("/topics")}}>
        Back
      </button>
    </div>
  );
};

export default ComponentsTopic;
