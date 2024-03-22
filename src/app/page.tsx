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

import TecIcon from "/src/app/img/TecLogo.png"
import ScaleIcon from "/src/app/img/ScaleLogo.png"
import NDSIcon from "/src/app/img/NDSLogo.png"
import { brown } from "@mui/material/colors";

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
          <Image src={first_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
        <div className={styles.slide}>
          <Image src={first_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
        <div className={styles.slide}>
          <Image src={first_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
        <div className={styles.slide}>
          <Image src={first_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={second_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={third_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fourth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={fifth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={sixth_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
          <Image src={seventh_drawing} width={280} height={280} style={{borderRadius: 45, padding: 8}} alt=""/>
        </div>
      </div>
      
      {/* Services Section*/}
      <div className={styles.services} id="services">
        <h2>SKILLS</h2>

        <div className={styles.service_title}>
          <div style={{borderRadius: 35, backgroundColor: 'orange', width: 150, height:90}}><div className={styles.background_text}>5+</div></div>
          <h1>C++ PYTHON</h1>
        </div>
        <div className={styles.service_title}>
          <h1>JAVA C# JS</h1>
          <div style={{borderRadius: 35, backgroundColor: 'black', width: 150,  height:90}}><div className={styles.background_text}>3Y</div></div>
        </div>
        <div className={styles.service_title}>
        <div style={{borderRadius: 35, backgroundColor: 'red', width: 150,  height:90}}><div className={styles.background_text}>2Y</div></div>
          <h1>REACT NODE</h1>
        </div>
        <div className={styles.service_title}>
          <h1>UX/UI</h1>
          <div style={{borderRadius: 35, backgroundColor: 'white', width: 150,  height:90}}><div className={styles.background_text}>1Y</div></div>
        </div>
      </div>

      {/* Experience Section*/}
      <div className={styles.experiences} id="experience">
        <h1>Work Experience</h1>
        <ColoredLine color="white"/>
        <div className={styles.resume_item_holder}>
          <h2>Junior Developer</h2>
          <p>Scale AI</p>
          <span><p>06/2022 - 03/2024</p><p>Remote</p></span>
          <ul style={{paddingLeft: 20 }}>
            <li>
              Implementing efficient and reliable web scraping solutions to extract critical data and insights from various online resources. 
            </li>
            <li>
              Ensuring code maintainability, readability, and enhanced error handling in a streamlined web scraping process.
            </li>
            <li>
              Leveraging my expertise in Node.js, Puppeteer and TypeScript to create robusts scripts and automated workflows allowing for
              seamless data extraction from websites, APIs, and other online repositories.
            </li>
          </ul>
        </div>
        <div className={styles.resume_item_holder}>
          <h2>Intern</h2>
          <p>NDS Cognitive Labs</p>
          <span><p>08/2022 - 12/2024</p><p>Mexico City, MX</p></span>
          <ul style={{paddingLeft: 20 }}>
            <li>
              Developed a web application using ReactJS for dynamic document searches, enhancing the efficiency of information retrieval for end-users
            </li>
            <li>
              Collaborated with a front-end team in the "Virtual Assistant Management Platform" project to re-train Chatbots,
              improving their conversational capabilities and user experience. 
            </li>
            <li>
              Utilized technologies such as MongoDB, IBM Watson, and Axios for seamless data retrieval and integration with the web application
            </li>
          </ul>
        </div>

        <h1>Academic Experience</h1>
        <ColoredLine color="white"/>
        <div className={styles.resume_item_holder}>
          <h2>Bachelor of Science in Computer Engineering</h2>
          <p>Tecnologico de Monterrey</p>
          <span><p>08/2019 - 06/2023</p><p>Mexico City, MX</p></span>
          <ul style={{paddingLeft: 20 }}>
          </ul>
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
      <Link href="/contact">
        <div className={styles.contact} id="contact">
          <h2>CONTACT</h2>
          <h1 className={styles.side_title}>LET'S TALK!</h1>
          <h1>LET'S TALK!</h1>
          <h1 className={styles.side_title}>LET'S TALK!</h1>
        </div>
      </Link>


    </main>
  );
}


