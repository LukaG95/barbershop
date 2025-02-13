import React from 'react';
import styles from './ForthSection.module.scss';
import HaircutImage from '../images/haircut-image3.png';


function ForthSection() {
  return (
    <div className={styles.main}>
      <img src={HaircutImage} />
      <h1>EXPERIENCE THE LUXURY OF CONCIERGE BARBER SERVICES AT YOUR HOME</h1>
      <button className={styles["action-one"]}>BOOK AN APPOINTMENT</button>
    </div>
  );
}

export default ForthSection;