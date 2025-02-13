import React from 'react';
import styles from './SecondSection.module.scss';
import HaircutImage from '../images/haircut-image2.png'; 

function SecondSection() {
  return (
    <div className={styles.main}>
      <div className={styles.secondary}>
        <div className={styles["left-info"]}>
          <h1 style={{ width: "610px" }}>YOUR PERSONAL BARBER SERVICE AT YOUR HOME</h1>
          <p>
            Looking for a professional haircut in the comfort of your home? 
            I am "name", a skilled barber with years of experience in delivering 
            top-notch styles tailored to you. Whether you need a sharp fade, a classic 
            cut, or a fresh beard trim, I bring the barber chair to your doorstep.
          </p>

          <div className={styles["info-wrapper"]}>
            <div className={styles["info-box"]}>
              <h1>99<span>%</span></h1>
              <h2>CUSTOMER<br /> SATISFACTION</h2>
            </div>
            <div className={styles["info-box"]}>
              <h1>10<span>+</span></h1>
              <h2>YEARS OF<br /> EXPERIENCE</h2>
            </div>
          </div>
        
        </div>
        <img src={HaircutImage}/>
      </div>
    </div>
  );
}

export default SecondSection;