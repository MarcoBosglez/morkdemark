"use client"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

import { useState } from "react";
import { Visibility } from '@mui/icons-material';

export default function Footer() {
    const container = useRef(null);
    const { contextSafe } = useGSAP({ scope: container })

    const scrollOnClick = contextSafe((section: any) => {
        gsap.to(window, { duration: 1.8, scrollTo:{ y: section, offsetY: 50 }})
    })

    return (
        <div>
            {/* Made By */}
            <div className="made_by">
                <div className="made_by_me">
                    <p>Built By <a className="footer_name" href="">marcobglz</a><a className="footer_change" href="">m4rc0bg1z</a></p>
                </div>

                <div className="socials" style={{visibility: 'visible'}}>
                    <a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon/></a>
                    <a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon/></a>
                </div>

                <div className="back_to_top" onClick={() => scrollOnClick(0)}>
                    <a className="back_name">Back to the Top</a><a className="back_change">B4ck t0 th3 T0p</a>
                </div>
                
            </div>
        </div>
    );
}


