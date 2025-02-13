import React from 'react';
import styles from './ThirdSection.module.scss';
import HairToolImage from '../images/haircut-tool.png'; 
import CombImage from '../images/comb.png'; 
import TrimmerImage from '../images/trimmer.png'; 
import RazorImage from '../images/razor.png'; 
import OilImage from '../images/oil.png'; 
import BeardImage from '../images/beard.png'; 

function ThirdSection() {
  return (
    <div className={styles.main}>
      <div className={styles.secondary}>
        <h1>BROWSE OUR SERVICES</h1>
        <p>
          Bringing expert grooming directly to your door, we 
          provide a range of services to keep you looking your 
          best. Whether it’s a quick refresh or a complete transformation, 
          we ensure every service is tailored to your preferences.
        </p>

        <div className={styles["info-wrapper"]}>
          <div className={styles["info-box"]}>
            <img src={HairToolImage}/>
            <h2>ADULT HAIRCUT</h2>
            <p>Tailored cuts for every style, from clean classics to trendy modern looks.</p>
            <h2>€39 EUR</h2>
          </div>
          <div className={styles["info-box"]}>
            <img style={{ transform: "scaleX(-1)" }} src={CombImage}/>
            <h2>ADULT HAIRCUT</h2>
            <p>Tailored cuts for every style, from clean classics to trendy modern looks.</p>
            <h2>€39 EUR</h2>
          </div>
          <div className={styles["info-box"]}>
            <img src={TrimmerImage}/>
            <h2>ADULT HAIRCUT</h2>
            <p>Tailored cuts for every style, from clean classics to trendy modern looks.</p>
            <h2>€39 EUR</h2>
          </div>
          <div className={styles["info-box"]}>
            <img src={RazorImage}/>
            <h2>ADULT HAIRCUT</h2>
            <p>Tailored cuts for every style, from clean classics to trendy modern looks.</p>
            <h2>€39 EUR</h2>
          </div>
          <div className={styles["info-box"]}>
            <img src={OilImage}/>
            <h2>ADULT HAIRCUT</h2>
            <p>Tailored cuts for every style, from clean classics to trendy modern looks.</p>
            <h2>€39 EUR</h2>
          </div>
          <div className={styles["info-box"]}>
            <img src={BeardImage}/>
            <h2>ADULT HAIRCUT</h2>
            <p>Tailored cuts for every style, from clean classics to trendy modern looks.</p>
            <h2>€39 EUR</h2>
          </div>
        </div>

        <button className={styles["action-one"]}>BOOK AND APPOINTMENT</button>
      </div>

    </div>
  );
}

export default ThirdSection;