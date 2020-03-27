import React from 'react';
//import {Link} from 'react-router-dom';
//import authorImage from '../images/authorImage.jpg'

function Sidebar() {
    
    return (
        <side-bar>

            <div>
                <aside id="aside" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" >
                            
                            </div>
                        <h3 id="author"><a href="index.html">Robert Allen</a></h3>
                        <span className="email"><i className="fa fa-envelope"/> Rallen186@gmail.com</span>
                    </div>
                    <nav id="colorlib-main-menu">
                        <ul>
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"/></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"/></a></li>
                            <li><a href="https://bitbucket.org/" target="_blank" rel="noopener noreferrer"><i className="fa fa-bitbucket"/></a></li>
                        </ul>
                    </nav>
                </aside>

            </div>
            
        </side-bar>
    );
}
export default Sidebar;