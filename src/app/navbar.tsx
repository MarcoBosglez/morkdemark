"use client"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const container = useRef(null);
    const { contextSafe } = useGSAP({ scope: container })

    const scrollOnClick = contextSafe((section: any) => {
        gsap.to(window, { duration: 1, scrollTo:{ y: section }})
        setMenuOpen(!menuOpen)
        closeMenu()
    })

    const openMenu = contextSafe(() => {
        setMenuOpen(!menuOpen)
        gsap.fromTo('.background-color, .menu-items, .socials-bar', {
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
        gsap.fromTo('.background-color, .menu-items, .socials-bar', {
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
        <div ref={container}>
            <style>
                {`
                    html {
                        overflow-y: ${menuOpen ? 'hidden' : 'visible'};
                    }
                    .menu {
                        margin-right: ${menuOpen ? '10px' : '0px'};
                    }
                    .menu-items, .social-links {
                        display: ${menuOpen ? 'visible' : 'none'};
                    }
                    .socials-bar {
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

            <nav className="nav">
                <div className="navbar" style={{padding: 25}}>
                    <div>
                        <Link className="logo" href="#"><div>mork<a style={{color: 'orange'}}>demark</a></div></Link>
                        <Link className="logo_change" href="#"><div>m0rk<a style={{color: 'orange'}}>d3m4rk</a></div></Link>
                    </div>
                    <a className="menu" onClick={() => menuOpen === false ? openMenu() : closeMenu()}>{ menuOpen === false ? <MenuIcon style={{fontSize: 40}}/> : <CloseIcon style={{fontSize: 40}}/>}</a>
                </div>

                <div className="menu-items">
                    <a onClick={() => scrollOnClick('#home')}>Home</a>

                    <a onClick={() => scrollOnClick('#services')}>Skills</a>

                    <a onClick={() => scrollOnClick('#experience')}>Experience</a>

                    <a onClick={() => scrollOnClick('#projects')}>Projects</a>

                    <a onClick={() => scrollOnClick('#illustrations')}>Art</a>

                    <Link href="../contact">Contact</Link>
                </div>

                <div className="socials-bar">
                    <a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon style={{fontSize: 40}}/></a>
                    <a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon style={{fontSize: 40}}/></a>
                    <a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon style={{fontSize: 40}}/></a>
                </div>
            </nav>
        </div>
    );
}


