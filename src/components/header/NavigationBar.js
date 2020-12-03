// Prepares anchors for navigation bar

import React from 'react';
import './NavigationBar.css';

const NavigationBar:React.FunctionComponent = () => {
    return ( 
        <div className="navbar container d-flex justify-content-center align-items-center">
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item py-2 px-5">HOME</li>
                    <li className="list-inline-item py-2 px-5">PROJECTS</li>
                    <li className="list-inline-item py-2 px-5">CONTACT</li>
                </ul>
            </nav>
        </div>

    )
}

export default NavigationBar