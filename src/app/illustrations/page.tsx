"use client"
import styles from "./page.module.css";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import BackBar from '../backbar'

{/* MaterialUI Imports*/}
import MenuIcon from '@mui/icons-material/Menu';

{/* Function Imports*/}
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

const ColoredLine = ( color: any ) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
  );

export default function Illustrations() {
  return (
    <main className={styles.main}>
      <BackBar/>
      
      {/* Illustrations Section*/}
      <div className={styles.illustrations}>
        <ColoredLine color="white"/>
        <div className={styles.top}>
          <h1>Illustrations</h1>
        </div>

        <div className={styles.drawings}>
        <div className={styles.drawing}>
            <Image src={death_of_the_pharaoh} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={tartarus} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={elf_nora} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={judging_eyes} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={fates_grip} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={samurai} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={prettiest_girl} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={prisoner_boy} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={inspo_by_mikalikesrain} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
            <div className={styles.info}>
              <div className={styles.info_text}>
                <h1>&quot;inspo_by_mikalikesrain&quot;</h1>
                <div className={styles.info_type}>
                  <p>Photo</p>
                </div>
              </div>

              <p className={styles.info_date}>Dec 10, 2023</p>
            </div>
          </div>

          <div className={styles.drawing}>
            <Image src={young_italy} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
            <Image src={the_look} width={850} height={850} style={{padding: 8}} alt="placeholder1"/>
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
    </main>
  );
}


