import React from 'react';
import styles from './FirstSection.module.scss';
import MainImage from '../images/haircut-image.png';
import PinImage from '../images/pin.png'; 
import PhoneImage from '../images/phone.png'; 
import TimeImage from '../images/time.png'; 

function FirstSection() {
  return (
    <div className={styles.main}>
      <img src={MainImage} />
      <div className={styles.title}>
        <h1>THE ULTIMATE CONVENIENCE <br /> FOR BUSY PEOPLE</h1>
        <h2>Experience the benefits of in-home barber services</h2>
        <div>
          <button className={styles["action-one"]}>BOOK AND APPOINTMENT</button>
          <button className={`${styles["action-two"]} ${styles["action-two--stripe"]}`}>BROWSE SERVICES</button>
        </div>
      </div>
      <div className={styles["info-wrapper"]}>
        <div className={styles["info-box"]}>
          <img src={PinImage} />
          <h1>ADDRESS</h1>
          <div className={styles.spacer}></div>
          <p>BIZOVIŠKA CESTA 43F,<br/>1000 LJUBLJANA</p>
        </div>
        <div className={styles["info-box"]}>
          <img src={PhoneImage} />
          <h1>PHONE</h1>
          <div className={styles.spacer}></div>
          <p>040 765 061<br/>01 570 049</p>
        </div>
        <div className={styles["info-box"]}>
          <img src={TimeImage} />
          <h1>HOURS</h1>
          <div className={styles.spacer}></div>
          <p>MON - SAT: 9AM - 8PM<br/>SUN: 9AM - 6PM</p>
        </div>
      </div>
    </div>
  );
}

export default FirstSection;