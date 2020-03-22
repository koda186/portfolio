//Import the Component component from React
import React from 'react';
//Import the Link Component
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'

//thumbnail component
//****link each slot with its corresponding attributes,
//by filling them in with props.attribute-name***
function Thumbnail(props){
    return(
        <div className = "project">

            <Link to = {props.link}>
                <div className = "project-image">
                    <Image src = {props.image} alt="Project" style={{padding: "1px" , width: "100%"}} rounded />
                </div>
            </Link>
        </div>
    );
}

export default Thumbnail;