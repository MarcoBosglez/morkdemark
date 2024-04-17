"use client"
import styles from "./page.module.css";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from 'next/link';
import NavBar from "./navbar"

{/* MaterialUI Imports*/}
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MouseIcon from '@mui/icons-material/Mouse';
import { BorderAllSharp, Padding } from "@mui/icons-material";
import Divider from '@mui/material/Divider';

{/* Function Imports*/}
import first_drawing from "/src/app/img/first.png"
import second_drawing from "/src/app/img/second.png"
import third_drawing from "/src/app/img/third.png"
import fourth_drawing from "/src/app/img/fourth.png"
import fifth_drawing from "/src/app/img/fifth.png"
import sixth_drawing from "/src/app/img/sixth.png"
import seventh_drawing from "/src/app/img/seventh.png"

import pattern1 from "/src/app/assets/111.avif"
import pattern2 from "/src/app/assets/555.jpg"

import BachelorsDegree from "/src/app/img/bachelorsdegree.jpg"
import TecIcon from "/src/app/img/TecLogo.png"
import ScaleIcon from "/src/app/img/ScaleLogo.png"
import NDSIcon from "/src/app/img/NDSLogo.png"
import React from "react";

const ColoredLine = ( color: any ) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2
      }}
  />
);


/*
let innerCursor = document.querySelector<HTMLElement>('.inner-cursor');

document.addEventListener('mousemove', moveCursor);
function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
}*/

export default function Home() {
  return (
    <main className={styles.main} id="main">
      {/* Navigation Bar with Logo and Menu Icon*/}
      <NavBar/>

      {/* Home Section*/}
      <div className={styles.home} id="home">

        {/* About and Photo*/}
        <div className={styles.about}>
          {/* About */}
          <div className={styles.hero_text}>
            <div className={styles.hero_title}>
              <h1>Marco Bosquez</h1>
            </div>

            <div className={styles.hero_info}>
              <p>Hello, I am a 22 year old {" "}
                <ReactTyped className={styles.typewriter}
                  strings={['Artist', 'Developer', 'Engineer']} 
                  typeSpeed={100} 
                  loop
                  backSpeed={35}
                  showCursor={true}
                /> 
                based in
              </p>
              <p>Mexico City with a love for technology, digital illustrations, and martial arts.</p>
              <a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon/></a>
              <a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon/></a>
            </div>      
          </div>

          {/* Photo */}
          <div className={styles.hero_image}>
            <div className={styles.hero_image_src}></div>
          </div>

          
        </div>
      </div>

      {/* Image Slider Section*/}
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
        </div>
        <div className={styles.slide}>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
        </div>
        <div className={styles.slide}>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
        </div>
        <div className={styles.slide}>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern2} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
          <Image src={pattern1} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt="placeholder1"/>
        </div>
      </div>
      
      {/* Services Section*/}
      <div className={styles.services} id="services">
        <h2>SKILLS</h2>

        <div className={styles.service_title}>
          <div style={{borderRadius: 35, backgroundColor: 'black', width: 150, height:90}}><div className={styles.background_text_alt}>5Y</div></div>
          <h1>C++ PYTHON</h1>
        </div>
        <div className={styles.service_title}>
          <div style={{borderRadius: 35, backgroundColor: 'white', width: 150,  height:90}}><div className={styles.background_text}>3Y</div></div>
          <h1>JAVA C# JS</h1>
        </div>
        <div className={styles.service_title}>
          <div style={{borderRadius: 35, backgroundColor: 'black', width: 150,  height:90}}><div className={styles.background_text_alt}>2Y</div></div>
          <h1>REACT NODE</h1>
        </div>
        <div className={styles.service_title}>
          <div style={{borderRadius: 35, backgroundColor: 'white', width: 150,  height:90}}><div className={styles.background_text}>1Y</div></div>
          <h1>UX/UI</h1>
        </div>
      </div>

      {/* Experience Section*/}
      <div className={styles.experiences} id="experience">
        <h1>EXPERIENCE</h1>
        <div className={styles.experience_holder}>
          <div className={styles.jobs_holder}>
            <div className={styles.card_holder} id="#scaleai" style={{backgroundColor: 'rgb(240, 166, 81)', color: 'black'}}>
              <div className={styles.job_organization}>
                <Image src={ScaleIcon} style={{ width: 100, height: 100, borderRadius: 30}} alt={""}></Image>
                <div>
                  <h2>Scale AI</h2>
                  <p>Jr Developer | Jun 2022 - Feb 2024</p>
                </div>
              </div>

              <p>
                Implemented efficient and reliable web scraping solutions to extract critical data and insights from various online resources. 
              </p>

              <div className={styles.project_technologies}>
                  <p>Node.js</p>
                  <p>Puppeteer</p>
                  <p>TypeScript</p>
                  <p>Web Scraping</p>
                  <p>APIs</p>
              </div>

            </div>
            <div className={styles.card_holder} id="#nds" style={{backgroundColor: 'rgb(216, 84, 84)'}}>
              <div className={styles.job_organization}>
                <Image src={NDSIcon} style={{ width: 100, height: 100, borderRadius: 30}} alt={""}></Image>
                <div>
                  <h2>NDS Cognitive Labs</h2>
                  <p>Intern | Aug 2022 - Dec 2024</p>
                </div>
              </div>
              <p>
                Developed a web application using ReactJS for dynamic document searches, enhancing the efficiency of information retrieval for end-users
              </p>

              <div className={styles.project_technologies}>
                  <p>MongoDB</p>
                  <p>ReactJS</p>
                  <p>IBM Watson</p>
                  <p>Axios</p>
                  <p>APIs</p>
                  <p>ChatBots</p>
                  <p>AI</p>
              </div>

            </div>
          </div>

          <div className={styles.school_holder}>
            <div className={styles.card_holder} id="#tec" style={{backgroundColor: 'black'}}>
              <Image src={BachelorsDegree} alt={""}></Image>
              <div className={styles.school_organization}>
                <Image src={TecIcon} style={{ width: 100, height: 100, borderRadius: 40}} alt={""}></Image>
                <div>
                  <h2>Tecnologico de Monterrey</h2>
                  <p>Bachelor of Science in Computer Engineering</p>
                  <p>Aug 2019 - Jun 2023</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Projects Section*/}
      <div className={styles.projects} id="projects">
        <div className={styles.item_grid}>
          <h1>PROJECTS</h1>
          <div className={styles.project_a}>
            <div className={styles.project_description}>
              <div className={styles.project_text}>
                <h1>Amazon Recorder System Helper</h1>
                <p>Full-stack AWS Service</p>

                <span>
                  Developed a full-stack system using Java and ReactJS that works as an extension for Amazon Connect. This web service was used to
                  record all interactions between call center employees and customers to provide business insights and performance metrics for audit
                  and training purposes
                </span>
              </div>
            </div>

            <div className={styles.project_utils}>
              <div className={styles.project_technologies}>
                <p>Java</p>
                <p>Spring</p>
                <p>Docker</p>
                <p>ReactJS</p>
              </div>

              <div className={styles.project_links}>
                <a href="https://www.canva.com/design/DAFC-AICFmk/iNRwH7Y5dZ84vgsd7hp9UQ/view">View Doc</a>
              </div>
            </div>

          </div>
          <div className={styles.project_b}>
            <div className={styles.project_description}>
              <div className={styles.project_text}>
                <h1>Environmental Emergency</h1>
                <p>IoT Project</p>

                <span>
                  A Webapp that obtains data from IoT devices then processes them and displays it in a dashboard. This information is used to warn
                  people for environmental emergencies
                </span>
              </div>
            </div>

            <div className={styles.project_utils}>
              <div className={styles.project_technologies}>
                <p>Packet Tracer</p>
                <p>PHP</p>
                <p>SQL</p>
              </div>

              <div className={styles.project_links}>
                <a href="docs.google.com/presentation/d/1vxBDzPVCE1g1hheTncPaOFOFPcSsbcfyIIzE3Ko3dHQ">View Doc</a>
              </div>
            </div>
          </div>
          <div className={styles.project_c}>
            <div className={styles.project_description}>
              <div className={styles.project_text}>
                <h1>Urban Mobility</h1>
                <p>AI Project</p>

                <span>
                  A Unity-based multi-agent simulation that represents traffic of an intersection. The simulation allows cars to search for available
                  parking spaces by traveling through a canvas which contains smart traffic lights
                </span>
              </div>
            </div>

            <div className={styles.project_utils}>
              <div className={styles.project_technologies}>
                <p>Python</p>
                <p>Kubernetes</p>
                <p>Mesa</p>
              </div>

              <div className={styles.project_links}>
                <a href="https://github.com/grchristian/movilidad-urbana">Github Repo</a>
              </div>
            </div>
          </div>
          <div className={styles.project_d}>
            <div className={styles.project_description}>
              <div className={styles.project_text}>
                <h1>ML Sentiment Analysis Article</h1>
                <p>Pending Publication</p>

                <span>
                  An application of Natural Language Processing (NLP) based on mental health tweets. Applying multiclass and multi-label
                  classification of 625 manually labeled tweets to identify the accuracy of our negative sentiment model. 
                  Made with Python and the “SciKit Learn” library through an automated pipeline using Jupyter Notebook. 
                </span>
              </div>
            </div>

            <div className={styles.project_utils}>
              <div className={styles.project_technologies}>
                <p>ML</p>
                <p>Python</p>
                <p>NLTK</p>
              </div>

              <div className={styles.project_links}>
                <a href="https://docs.google.com/document/d/1MFH38nQ5xG5OHCYjKd0BxZkVB76p-qiI/">View Doc</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrations Section*/}
      <div className={styles.illustrations} id="illustrations">
        <ColoredLine color="white"/>
        <div className={styles.top}>
          <h1>Illustrations</h1>
          <Link href="/illustrations">View All</Link>
        </div>

        <div className={styles.drawings}>
          <div className={styles.drawing}>
            <Image src={second_drawing} width={550} height={550} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Fate&apos;s Grip&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Feb 11, 2024</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={third_drawing} width={550} height={550} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Samurai&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Jan 04, 2024</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={first_drawing} width={550} height={550} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Prisoner&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Dec 16, 2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={fifth_drawing} width={550} height={550} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Young Italy&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Oct 21, 2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={sixth_drawing} width={550} height={550} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={seventh_drawing} width={550} height={550} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>2023</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Illustrations Section */}
      <Link href="/contact">
        <div className={styles.contact} id="contact">
          <h2>CONTACT</h2>
          <h1 className={styles.side_title}>LET&apos;S TALK!</h1>
          <h1>LET&apos;S TALK!</h1>
          <h1 className={styles.side_title}>LET&apos;S TALK!</h1>
          <ul className={styles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </div>
      </Link>

      {/* <div className='inner-cursor'></div> */}

    </main>
  );
}


