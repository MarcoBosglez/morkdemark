"use client"
import styles from "./page.module.css";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import Link from 'next/link';
import NavBar from "./navbar"
import React, { useRef } from "react";

{/* MaterialUI Imports*/}
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MouseIcon from '@mui/icons-material/Mouse';
import { BorderAllSharp, Padding } from "@mui/icons-material";
import Divider from '@mui/material/Divider';

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

{/* Art Imports*/}
import prisoner_boy from "/src/app/img/prisoner_boy.png"
import fates_grip from "/src/app/img/fates_grip.png"
import samurai from "/src/app/img/samurai.png"
import the_look from "/src/app/img/the_look.png"
import young_italy from "/src/app/img/young_italy.png"
import prettiest_girl from "/src/app/img/prettiest_girl.png"
import inspo_by_mikalikesrain from "/src/app/img/inspo_by_mikalikesrain.png"
import elf_nora from "/src/app/img/elf_nora.png"
import judging_eyes from "/src/app/img/judging_eyes.png"
import tartarus from "/src/app/img/tartarus.png"
import death_of_the_pharaoh from "/src/app/img/death_of_the_pharaoh.png"

import pattern1 from "/src/app/assets/111.avif"
import pattern2 from "/src/app/assets/555.jpg"

import slider_pic_1 from "/src/app/img/slider_pics_1.jpeg"
import slider_pic_2 from "/src/app/img/slider_pics (2).jpeg"
import slider_pic_3 from "/src/app/img/slider_pics (3).jpeg"
import slider_pic_4 from "/src/app/img/slider_pics (4).jpeg"
import slider_pic_5 from "/src/app/img/slider_pics (5).jpeg"
import slider_pic_6 from "/src/app/img/slider_pics (6).jpeg"
import slider_pic_7 from "/src/app/img/slider_pics (7).jpeg"
import slider_pic_8 from "/src/app/img/slider_pics (8).jpeg"
import slider_pic_9 from "/src/app/img/slider_pics (9).jpeg"
import slider_pic_10 from "/src/app/img/slider_pics (10).jpeg"
import slider_pic_11 from "/src/app/img/slider_pics (11).jpeg"
import slider_pic_12 from "/src/app/img/slider_pics (12).jpeg"
import noise from "/src/app/img/noise.png"

import BachelorsDegree from "/src/app/img/bachelorsdegree.jpg"
import TecIcon from "/src/app/img/TecLogo.png"
import ScaleIcon from "/src/app/img/ScaleLogo.png"
import NDSIcon from "/src/app/img/NDSLogo.png"

const ColoredLine = ( color: any ) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2
      }}
  />
);

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default function Home() {
  return (
    <main className={styles.main} id="main">
      {/* Navigation Bar with Logo and Menu Icon*/}
      <NavBar/>

      {/* Home Section*/}
      <div className={styles.home} id="home">

        {/* About and Photo*/}
        <div className={styles.about}>

          {/* Photo */}
          <div className={styles.hero_image}>
          </div>

          {/* About */}
          <div className={styles.hero_text}>
            <div className={styles.hero_title}>
              <h1>Marco Bosquez</h1>
            </div>

            <div className={styles.hero_info}>
              <div className={styles.introduction}> 
                <p>Hi! I'm Marco, a 23 year old&nbsp;</p>
                <ReactTyped className={styles.typewriter}
                  strings={['Artist.', 'Developer.', 'Engineer.']} 
                  typeSpeed={100} 
                  loop
                  backSpeed={35}
                  showCursor={true}
                /> 
              </div>
              <div>
                <a href="https://www.instagram.com/marcobglz/" target="_blank"><InstagramIcon/></a>
                <a href="https://github.com/MarcoBosglez/" target="_blank"><GitHubIcon/></a>
                <a href="https://www.linkedin.com/in/marco-bosquez-5580271a1//" target="_blank"><LinkedInIcon/></a>
              </div>
            </div>      
          </div>

        </div>

        <div className={styles.hero_background}>
          <Canvas
            camera={{
              position: [8, -7.5, -5],
            }}
            style={{ height: "100vh" }}
          >
            <OrbitControls maxDistance={50} minDistance={1} enableZoom={false}/>
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <PointCircle />
          </Canvas>
        </div>
      </div>
      
      {/* Services Section*/}
      <div className={styles.services} id="services">
        <h2>SKILLS</h2>

        <div className={styles.service_title}>
          <div style={{backgroundColor: 'rgb(240, 166, 81)'}}><div className={styles.background_text_alt}>5Y</div></div>
          <h1>C++ PYTHON</h1>
        </div>
        <div className={styles.service_title}>
          <div style={{backgroundColor: 'rgb(216, 84, 84)'}}><div className={styles.background_text}>3Y</div></div>
          <h1>JAVA C# JS</h1>
        </div>
        <div className={styles.service_title}>
          <div style={{backgroundColor: 'rgb(240, 166, 81)'}}><div className={styles.background_text_alt}>2Y</div></div>
          <h1>REACT NODE</h1>
        </div>
        <div className={styles.service_title}>
          <div style={{backgroundColor: 'rgb(216, 84, 84)'}}><div className={styles.background_text}>1Y</div></div>
          <h1>UX/UI</h1>
        </div>
      </div>

      {/* Experience Section*/}
      <div className={styles.experiences} id="experience">
        <h1>EXPERIENCE</h1>
        <div className={styles.experience_holder}>
          <div className={styles.jobs_holder}>
            <div className={styles.card_holder} id="#scaleai" style={{backgroundColor: 'black'}}>
              <div className={styles.job_organization}>
                <Image src={ScaleIcon} alt={""}></Image>
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
            <div className={styles.card_holder} id="#nds" style={{backgroundColor: 'aliceblue', color: 'black'}}>
              <div className={styles.job_organization}>
                <Image src={NDSIcon} alt={""}></Image>
                <div>
                  <h2>NDS</h2>
                  <p>Intern | Aug 2022 - Dec 2024</p>
                </div>
              </div>
              <p>
                Developed a web application using ReactJS for dynamic document searches, enhancing the efficiency of information retrieval for end-users
              </p>

              <div className={styles.project_technologies}>
                  <p style={{backgroundColor: 'black', color: 'white'}}>MongoDB</p>
                  <p style={{backgroundColor: 'black', color: 'white'}}>ReactJS</p>
                  <p style={{backgroundColor: 'black', color: 'white'}}>IBM Watson</p>
                  <p style={{backgroundColor: 'black', color: 'white'}}>Axios</p>
                  <p style={{backgroundColor: 'black', color: 'white'}}>APIs</p>
                  <p style={{backgroundColor: 'black', color: 'white'}}>ChatBots</p>
                  <p style={{backgroundColor: 'black', color: 'white'}}>AI</p>
              </div>

            </div>
          </div>

          <div className={styles.school_holder}>
            <div className={styles.card_holder} id="#tec" style={{backgroundColor: 'black'}}>
              <Image src={BachelorsDegree} alt={""}></Image>
              <div className={styles.school_organization}>
                <Image src={TecIcon} alt={""}></Image>
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

              <a className={styles.project_links} id="amazonrsh" href="https://www.canva.com/design/DAFC-AICFmk/iNRwH7Y5dZ84vgsd7hp9UQ/view">View Doc</a>
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

              <a className={styles.project_links} id="iotproject" href="docs.google.com/presentation/d/1vxBDzPVCE1g1hheTncPaOFOFPcSsbcfyIIzE3Ko3dHQ">View Doc</a>
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

              <a className={styles.project_links} id="aiproject" href="https://github.com/grchristian/movilidad-urbana">Github Repo</a>
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

              <a className={styles.project_links} id="mlproject" href="https://docs.google.com/document/d/1MFH38nQ5xG5OHCYjKd0BxZkVB76p-qiI/">View Doc</a>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrations Section*/}
      <div className={styles.illustrations} id="illustrations">
        <div className={styles.top}>
          <Link href="/illustrations"><h1>Illustrations</h1></Link>
        </div>

        <ColoredLine color="white"/>

        <div className={styles.drawings}>
          <div className={styles.drawing}>
            <Image src={death_of_the_pharaoh} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Death of the Pharaoh&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Apr 16, 2024</p>
            </div>
          </div>
          <div className={styles.drawing}>
            <Image src={tartarus} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Tartarus&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Apr 09, 2024</p>
            </div>
          </div>
          <div className={styles.drawing}>
            <Image src={elf_nora} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Elf Nora&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Feb 27, 2024</p>
            </div>
          </div>
          <div className={styles.drawing}>
            <Image src={judging_eyes} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Judging Eyes&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Feb 23, 2024</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={fates_grip} alt="placeholder1"/>
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
            <Image src={samurai} alt="placeholder1"/>
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
            <Image src={prettiest_girl} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;Prettiest Girl&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Dec 27, 2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={prisoner_boy} alt="placeholder1"/>
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
            <Image src={inspo_by_mikalikesrain} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;inspo from @mikalikesrain&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Dec 10, 2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={young_italy} alt="placeholder1"/>
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
            <Image src={the_look} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;The Look&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Sep 20, 2023</p>
            </div>
          </div>
          
        </div>
      </div>

      {/* Illustrations Section */}
      <Link href="/contact">
        <div className={styles.contact} id="contact">
          <div>
            <h2>CONTACT</h2>
            <h1 className={styles.side_title}>LET&apos;S TALK!</h1>
            <h1>LET&apos;S TALK!</h1>
            <h1 className={styles.side_title}>LET&apos;S TALK!</h1>
          </div>
        </div>
      </Link>

    </main>
  );
}


