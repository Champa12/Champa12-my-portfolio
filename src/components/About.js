import React from "react"
import myself from "../myself.jpg"

const About = () => {
    return (

        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile" src={myself} alt="my profile pic.." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Hello! I am Mis Champa. I graduated from Penn State University in December 2022, major of Computer Science. I have +3 years of expertise in web application development with knowledge of all aspects of the software
                        development cycle using React.js, HTML5, CSS3, JavaScript and jQuery. I create responsive websites that are displayed on all devices desktops and smartphones.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default About