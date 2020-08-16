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
                    <Image src = {props.image} width = "450" height = "250" crop = "fill" gravity = "center"  rounded/>
            </Link>
        </div>
    );
}


export default Thumbnail;