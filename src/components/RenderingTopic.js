import React from 'react'
import { useHistory } from 'react-router-dom'

const RenderingTopic = () => {
  const his=useHistory();
  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      <button id="rendering-back-button" onClick={()=>{his.push("/topics")}}>
        Back
      </button>
    </div>
  )
}

export default RenderingTopic