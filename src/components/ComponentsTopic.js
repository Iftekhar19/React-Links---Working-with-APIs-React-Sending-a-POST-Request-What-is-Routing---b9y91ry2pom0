import React from "react";
import {Link } from "react-router-dom";

const ComponentsTopic = () => {
  return (
    <div id="components-div">
      <h3>Components in React</h3>
      
        <Link to="/topics"><button id="components-back-button">Back</button></Link>
      
    </div>
  );
};

export default ComponentsTopic;
