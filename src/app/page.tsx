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
import { BorderAllSharp } from "@mui/icons-material";
import Divider from '@mui/material/Divider';

{/* Function Imports*/}
import first_drawing from "/src/app/img/first.png"
import second_drawing from "/src/app/img/second.png"
import third_drawing from "/src/app/img/third.png"
import fourth_drawing from "/src/app/img/fourth.png"
import fifth_drawing from "/src/app/img/fifth.png"
import sixth_drawing from "/src/app/img/sixth.png"
import seventh_drawing from "/src/app/img/seventh.png"

import TecIcon from "/src/app/img/TecLogo.png"
import ScaleIcon from "/src/app/img/ScaleLogo.png"
import NDSIcon from "/src/app/img/NDSLogo.png"

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2
      }}
  />
);

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
          <Image src={first_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
        <div className={styles.slide}>
          <Image src={first_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
        <div className={styles.slide}>
          <Image src={first_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
        <div className={styles.slide}>
          <Image src={first_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={250} height={250} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
      </div>
      
      {/* Services Section*/}
      <div className={styles.services} id="services">
        <h2>Services</h2>

        <div className={styles.service_title}>
          <Image src={first_drawing} width={140} height={90} style={{borderRadius: 45, padding: 4}} alt=""/>
          <h1>PYTHON, JAVA</h1>
        </div>
        <div className={styles.service_title}>
          <h1>REACT JS, NODE JS</h1>
          <Image src={first_drawing} width={140} height={90} style={{borderRadius: 45, padding: 4}} alt=""/>
        </div>
        <div className={styles.service_title}>
          <Image src={first_drawing} width={140} height={90} style={{borderRadius: 45, padding: 4}} alt=""/>
          <h1>MORE</h1>
        </div>
        <div className={styles.service_title}>
          <h1>WEB DESIGN</h1>
          <Image src={first_drawing} width={140} height={90} style={{borderRadius: 45, padding: 4}} alt=""/>
        </div>
      </div>

      {/* Experience Section*/}
      <div className={styles.experiences} id="experience">
        <h1>Experience</h1>

        <div className={styles.grid}>
          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.experience_holder}>
              <Image src={ScaleIcon} width={60} height={60} alt=""/>
              <h2>ScaleAI</h2>
            </div>
            <div className={styles.experience_info}>
              <h2 className={styles.experience_role}>Software Developer</h2>
              <h2 className={styles.experience_date}>Jun 2022 - Feb 2024</h2>
            </div>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.experience_holder}>
              <Image src={NDSIcon} width={85} height={40} alt=""/>
              <h2> </h2>
              <h2>NDS Cognitive Labs</h2>
            </div>
            <div className={styles.experience_info}>
              <h2 className={styles.experience_role}>Intern</h2>
              <h2 className={styles.experience_date}>Aug 2022 - Dec 2022</h2>
            </div>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.experience_holder}>
              <Image src={TecIcon} width={70} height={70} alt=""/>
              <h2>Tecnológico de Monterrey</h2>
            </div>
            <div className={styles.experience_info}>
              <h2 className={styles.experience_role}>Bachelor of Science in Computer Engineering</h2>
              <h2 className={styles.experience_date}>Graduated June 2023</h2>
            </div>
          </a>

          <a className={styles.cv} href={"/MarcoBosquez_Resume2024.pdf"} download>Download CV</a>
        </div>
      </div>
      
      {/* Projects Section*/}
      <div className={styles.projects} id="projects">
        <div className={styles.item_grid}>
          <div className={styles.projects_title}>
            <h1>PROJECTS</h1>
          </div>
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

              <Image src={first_drawing} width={170} height={170} style={{borderRadius: 45}} alt=""/>

            </div>

            <div className={styles.project_utils}>
              <div className={styles.project_technologies}>
                <p>Java</p>
                <p>Spring</p>
                <p>Docker</p>
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
                <a href="https://github.com/grchristian/movilidad-urbana">View Repo</a>
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

              <Image src={first_drawing} width={170} height={170} style={{borderRadius: 45}} alt=""/>

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
            <Image src={second_drawing} width={550} height={550} style={{padding: 8}} alt=""/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>"Fate's Grip"</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Feb 11, 2024</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={third_drawing} width={550} height={550} style={{padding: 8}} alt=""/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>"Samurai"</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Jan 04, 2024</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={first_drawing} width={550} height={550} style={{padding: 8}} alt=""/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>"Prisoner"</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Dec 16, 2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={fifth_drawing} width={550} height={550} style={{padding: 8}} alt=""/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>"Young Italy"</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Oct 21, 2023</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Illustrations Section */}
      <a href="/contact">
        <div className={styles.contact} id="contact">
          <h2>CONTACT</h2>
          <h1 className={styles.side_title}>LET'S TALK!</h1>
          <h1>LET'S TALK!</h1>
          <h1 className={styles.side_title}>LET'S TALK!</h1>
        </div>
      </a>


    </main>
  );
}


