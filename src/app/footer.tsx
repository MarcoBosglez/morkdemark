"use client"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { useState } from "react";

export default function Footer() {
    return (
        <div>
            {/* Made By */}
            <div className="made_by">
                <div className="socials">
                    <a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon/></a>
                    <a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon/></a>
                    <a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon/></a>
                </div>

                <p>Made with Love by <a href="">marcobglz</a> @ 2024</p>
            </div>
        </div>
    );
}


