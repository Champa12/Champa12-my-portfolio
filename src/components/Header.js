import React from 'react'
import Typed from "react-typed"
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>My Personal Portfolio website</h1>
                <Typed className="typed-text"

                    strings={['Front-End Developer', 'IT Support Technician', "A Mother"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <div className="button">
                    <button>Contact Me</button>
                </div>
            </div>

        </div>
    )
}

export default Header