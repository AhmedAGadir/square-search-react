import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#services">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#portfolio">Jobs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Work With Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Submit a CV</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;