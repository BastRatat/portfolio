 // @ts-nocheck

import React from 'react';
import pictureOne from '../../images/img_1.jpg'
import pictureTwo from '../../images/img_2.jpg'
import pictureThree from '../../images/img_3.jpg'
import './Picture.css'

const ProfilePicture:React.FunctionComponent = ({ picture }) => {
    if (picture === 1) {
        return (
            <div className="container d-flex justify-content-center">
                <img src={pictureOne} className="img-fluid" alt="programming" />
            </div>
        )
    } else if (picture === 2) {
        return (
            <div className="container d-flex justify-content-center">
                <img src={pictureTwo} className="img-fluid" alt="programming" />
            </div>
        )
    } else if (picture === 3) {
        return (
            <div className="container d-flex justify-content-center">
                <img src={pictureThree} className="img-fluid" alt="programming" />
            </div>
        )  
    }
}
 
export default ProfilePicture