"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from 'next/link';
import React from 'react';

gsap.registerPlugin(ScrollToPlugin);

export default function BackBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const container = useRef(null);
    const { contextSafe } = useGSAP({ scope: container })

    const openMenu = contextSafe(() => {
        setMenuOpen(!menuOpen)
        gsap.fromTo('.background-color, .menu-items, .social-links', {
            x: 3000,
            opacity: 0,
            duration: 0.5,
            ease: "slow(0.7,0.7,false)",
        }, {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "slow(0.7,0.7,false)",
        })
    })

    const closeMenu = contextSafe(() => {
        gsap.fromTo('.background-color, .menu-items, .social-links', {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "slow(0.7,0.7,false)",
        }, {
            x: 2050,
            opacity: 0,
            duration: 0.5,
            ease: "slow(0.7,0.7,false)",
        })
        setMenuOpen(!menuOpen)
    })

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
                    .menu {
                        margin-right: ${menuOpen ? '10px' : '0px'};
                    }
                    .menu-items, .social-links  {
                        display: ${menuOpen ? 'visible' : 'none'};
                    }
                    .background-color {
                        display: ${menuOpen ? 'flex' : 'none'};
                    }
                `}
            </style>

            <div className="background-color">
                <div className="bg"></div>
                <div className="bg bg2"></div>
                <div className="bg bg3"></div>
            </div>

            <nav className="back">
                <div className="backbar" style={{padding: 25}}>
                    <div>
                        <a className="logo" href="../"><h1>[GO BACK]</h1></a>
                        <a className="logo_change" href="../"><h1>{'<<'} G0 B4CK</h1></a>
                    </div>
                    <a className="menu" onClick={() => menuOpen === false ? openMenu() : closeMenu()} href="#">{ menuOpen === false ? <MenuIcon style={{fontSize: 40}}/> : <CloseIcon style={{fontSize: 40}}/>}</a>
                </div>

                <div className="menu-items">
                    <Link href="../">Home</Link>

                    <Link href="../#services">Skills</Link>

                    <Link href="../#experience">Experience</Link>

                    <Link href="../#projects">Projects</Link>

                    <Link href="../illustrations">Art</Link>
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


