import React from "react"
//Import the thumbnail component
import Thumbnail from './Thumbnail.js';
import './App.css';
 
//Projects component
//The data we pass into the thumbnails are the props
function Projects(props) {
  return (
    // Render the Thumbnail component
    <div>

      <h1>Projects</h1>
      <Thumbnail
      link = ""
      image = ""
      title = ""
      category = ""
      />

    </div>
  )
}
 
export default Projects;