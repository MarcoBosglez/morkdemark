"use client"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useState } from "react";

import Link from 'next/link';

export default function BackBar() {

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
                    img, form {
                        display: ${menuOpen ? 'none' : 'visible'};
                    }
                    .back {
                        background-color: ${menuOpen ? '#0f0f0f' : ''};
                        height: ${menuOpen ? '200%' : '0%'}
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

            <nav className="back">
                <div className="backbar" style={{padding: 25}}>
                    <div>
                        <a className="logo" href="../"><h1>[GO BACK]</h1></a>
                        <a className="logo_change" href="../"><h1>{'<<'} G0 B4CK</h1></a>
                    </div>
                    <a className="menu" onClick={toggleMenu} href="#">{ menuOpen === false ? <MenuIcon style={{fontSize: 40}}/> : <CloseIcon style={{fontSize: 40}}/>}</a>
                </div>

                <div className="menu-items">
                    <Link onClick={toggleMenu} href="../">Home</Link>

                    <Link onClick={toggleMenu} href="../#services">Services</Link>

                    <Link onClick={toggleMenu} href="../#experience">Experience</Link>

                    <Link onClick={toggleMenu} href="../#projects">Projects</Link>

                    <Link onClick={toggleMenu} href="../illustrations">Art</Link>
                </div>

                <div className="social-links">
                    <ul className="links-list">
                        <li className="social-link"><a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon/></a></li>
                        <li className="social-link"><a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon/></a></li>
                        <li className="social-link"><a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon/></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}


