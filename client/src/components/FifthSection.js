import React from 'react';
import styles from './FifthSection.module.scss';
import CertificateImage from '../images/certificate.png'; 
import BeardImage from '../images/beard2.png'; 
import TrustImage from '../images/shield.png'; 

function FifthSection() {
  return (
    <div className={styles.main}>
      <h1>WHY CHOOSE US</h1>
      <p>
        We bring expert grooming to your home, combining convenience with precision. 
        With personalized services, top-quality tools, and a commitment to your style, 
        we ensure you look and feel your best—all without leaving your doorstep.
      </p>

      <div className={styles["info-wrapper"]}>
        <div className={styles["info-box"]}>
          <img src={CertificateImage} />
          <h1>LICENSED</h1>
          <div className={styles.spacer}></div>
          <p>Our team of licensed and insured barbers follow strict cleanliness and sanitation guidelines for a safe and comfortable experience.</p>
        </div>
        <div className={styles["info-box"]}>
          <img src={BeardImage} />
          <h1>MASTERS</h1>
          <div className={styles.spacer}></div>
          <p>Our barbers are passionate about their craft and ait to provide high-quality haircuts for every client.</p>
        </div>
        <div className={styles["info-box"]}>
          <img src={TrustImage} />
          <h1>TRUSTED</h1>
          <div className={styles.spacer}></div>
          <p>We have a strong online reputation with a 5-star rating from over 100 thousand satisfied clients.</p>
        </div>
      </div>

    </div>
  );
}

export default FifthSection;