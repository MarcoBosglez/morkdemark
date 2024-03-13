"use client"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { useState } from "react";

export default function Footer() {
    return (
        <div>
            {/* Made By */}
            <div className="made_by">
                <div className="socials">
                <a href=""><p>INSTAGRAM</p><OpenInNewIcon/></a>
                <a href=""><p>LINKED IN</p><OpenInNewIcon/></a>
                <a href=""><p>GITHUB</p><OpenInNewIcon/></a>
                </div>

                <p>Made with Love by <a href="">marcobglz</a> @ 2024</p>
            </div>
        </div>
    );
}


