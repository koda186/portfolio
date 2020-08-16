import React from 'react';
//import {Link} from 'react-router-dom';
//import authorImage from '../images/authorImage.jpg'

function Sidebar() {
    return (
        <side-bar>
            <div>
                <aside id="aside" className="border js-fullheight">
                    <div className="text-center">
                        <h3 id="author"><a href="index.html">Robert Allen</a></h3>
                        <span className="email"><i className="fa fa-envelope"/> Rallen186@gmail.com</span>
                    </div>
                </aside>
            </div>   
        </side-bar>
    );
}
export default Sidebar;