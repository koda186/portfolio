//Import the Component component from React
import React from 'react';
//Import the Link Component
import {Link} from 'react-router-dom';

//thumbnail component
//****link each slot with its corresponding attributes,
//by filling them in with props.attribute-name***
function Thumbnail(props){
    return(
        <div className = "project">
            <Link to = {props.link}>
                <div className = "project-image">
                    <img src = {props.image} alt="Project Image"/>
                </div>

                <div className = "project-title">{props.title}</div>
                <div className = "project-category">{props.category}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;