import React from 'react'
import logo from "../logo.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-scroll"
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img className = "logo" src={logo} alt = "logo..." />My Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style = {{color: "white"}} />
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <Link smooth={true} to="Home" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} to="about" offset={-100} className="nav-link" href="#">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} to="experience" offset={-100} className="nav-link " href="#">Experience</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} to="project" offset={-100} className="nav-link" href="#">Project</Link>
                        </li>
                        <li class="nav-item">
                            <Link smooth={true} to="contact" offset={-100} className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>


    )
}

export default Navbar