import React from 'react'
import { Link } from 'react-router-dom'

const RenderingTopic = () => {
  
  return (
    <div id="rendering-div">
      <h3>Rendering in React</h3>
      
        <Link to="/topics"><button id="rendering-back-button">Back</button></Link>
      
    </div>
  )
}

export default RenderingTopic