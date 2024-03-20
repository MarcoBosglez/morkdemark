"use client"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useState } from "react";

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            <style>
                {`
                    html {
                        overflow-y: ${menuOpen ? 'hidden' : 'visible'};
                    }
                    img {
                        display: ${menuOpen ? 'none' : 'visible'};
                    }
                    .nav {
                        background-color: ${menuOpen ? '#0f0f0f' : ''};
                        height: ${menuOpen ? '100%' : '0%'};
                        background: linear-gradient(-45deg, #FFBC42, #782ED9);
                        background-size: 200% 200%;
                        animation: gradient 15s ease infinite;
                        transition: all 0.5s ease;
                    }
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                    .menu {
                        margin-right: ${menuOpen ? '10px' : '0px'};
                    }
                    .menu-items {
                        display: ${menuOpen ? 'flex' : 'none'};
                    }
                    .social-links {
                        display: ${menuOpen ? 'flex' : 'none'};
                    }
                `}
            </style>

            <nav className="nav">
                <div className="navbar" style={{padding: 25}}>
                    <div>
                        <a className="logo" href="#"><h1>mork<a style={{color: 'orange'}}>demark</a></h1></a>
                        <a className="logo_change" href="#"><h1>m0rk<a style={{color: 'orange'}}>d3m4rk</a></h1></a>
                    </div>
                    <a className="menu" onClick={toggleMenu} href='javascript:void(0)'>{ menuOpen === false ? <MenuIcon style={{fontSize: 40}}/> : <CloseIcon style={{fontSize: 40}}/>}</a>
                </div>

                <div className="menu-items">
                    <a onClick={toggleMenu} href="#">Home</a>

                    <a onClick={toggleMenu} href="#services">Services</a>

                    <a onClick={toggleMenu} href="#experience">Experience</a>

                    <a onClick={toggleMenu} href="#projects">Projects</a>

                    <a onClick={toggleMenu} href="#illustrations">Art</a>
                </div>

                <div className="social-links">
                    <ul className="links-list">
                        <li className="social-link"><a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon style={{fontSize: 40}}/></a></li>
                        <li className="social-link"><a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon style={{fontSize: 40}}/></a></li>
                        <li className="social-link"><a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon style={{fontSize: 40}}/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


