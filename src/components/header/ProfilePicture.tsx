 // @ts-nocheck
import React from 'react';
import pictureOne from '../../images/img_1.jpg'
import pictureTwo from '../../images/img_2.jpg'
import pictureThree from '../../images/img_3.jpg'
import pictureFour from '../../images/img_4.jpg'
import './Picture.css'

interface ProfilePictureProps {
    picture: number
}

const ProfilePicture:React.FunctionComponent = ({picture}:ProfilePictureProps) => {
    if (picture === 1) {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <img src={pictureOne} className="image img-fluid rounded" alt="programming" width="350px" />
            </div>
        )
    } else if (picture === 2) {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <img src={pictureTwo} className="image img-fluid rounded" alt="programming" width="350px" />
            </div>
        )
    } else if (picture === 3) {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <img src={pictureThree} className="image img-fluid rounded" alt="programming" width="350px" />
            </div>
        )  
    } else if (picture === 4) {
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <img src={pictureFour} className="image img-fluid rounded" alt="programming" width="350px" />
            </div>
        )
    } else {
        return (
            <div>
                Nothing
            </div>
        )
    }
}
 
export default ProfilePicture