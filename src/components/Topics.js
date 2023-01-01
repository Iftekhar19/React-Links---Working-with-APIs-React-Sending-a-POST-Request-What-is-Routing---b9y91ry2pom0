import React from "react";
import { Link,useHistory } from "react-router-dom";

const Topics = () => {
  const his=useHistory();
  return (
    <div id="topics-div">
      <h2>Topics</h2>
      <ul>
        <li>
          <h2 id="rendering"><Link to="/topics/rendering">Rendering</Link></h2>
        </li>
        <li>
          <h2 id="components"><Link to="/topics/components">Components</Link></h2>
        </li>
      </ul>
      <hr />
      <button id="topics-back-button" onClick={()=>{his.push("/")}}>Back</button>
    </div>
  );
};

export default Topics;
