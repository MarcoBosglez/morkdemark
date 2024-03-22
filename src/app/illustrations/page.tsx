"use client"
import styles from "./page.module.css";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import BackBar from '../backbar'

{/* MaterialUI Imports*/}
import MenuIcon from '@mui/icons-material/Menu';

{/* Function Imports*/}
import first_drawing from "/src/app/img/first.png"
import second_drawing from "/src/app/img/second.png"
import third_drawing from "/src/app/img/third.png"
import fourth_drawing from "/src/app/img/fourth.png"
import fifth_drawing from "/src/app/img/fifth.png"
import sixth_drawing from "/src/app/img/sixth.png"
import seventh_drawing from "/src/app/img/seventh.png"

const ColoredLine = ({ color }) => (
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
            <div style={{width:850, height:850}}><Image src={second_drawing} width={850} height={850}/></div>
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
            <Image src={third_drawing} width={850} height={850}  alt=""/>
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
            <Image src={first_drawing} width={850} height={850}  alt=""/>
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
            <Image src={fifth_drawing} width={850} height={850}  alt=""/>
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
    </main>
  );
}


