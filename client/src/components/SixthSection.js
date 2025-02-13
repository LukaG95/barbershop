import React, { useState } from 'react';
import styles from './SixthSection.module.scss';
import HaircutImage from '../images/haircut-image4.png'; 
import MapsImage from '../images/googlemaps-image.png'; 
import PhoneImage from '../images/phone.png'; 
import MessageImage from '../images/message.png'; 

function SixthSection() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmai] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className={styles.main}>
      <img src={HaircutImage} />
      <img src={MapsImage} />

      <div className={styles["info-wrapper"]}>

        <h1>MAKE AN APPOINTMENT</h1>
        <p>
          Ready for a fresh look? Book your next haircut or grooming session with our expert barbers. 
          Choose a time that works for you, and we'll take care of the rest. See you soon!
        </p>

        <div className={styles["info-box"]}>
          <div><img src={PhoneImage} /></div>
          <div>
            <h2>GIVE US A CALL</h2>
            <p>040 765 061</p>
          </div>
        </div>
        
        <div className={styles["info-box"]}>
          <div><img src={MessageImage} /></div>
          <div>
            <h2>SEND US AN EMAIL</h2>
            <p>hello@example.com</p>
          </div>
        </div>

      </div>

      <div className={styles["form-wrapper"]}>
        <input 
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="FULL NAME"
        />
        <input 
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder="SUBJECT"
        />
        <div style={{ display: "flex" }}>
          <input 
            style={{ marginRight: "20px" }}
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder="PHONE NUMBER"
          />
          <input 
            value={email}
            onChange={e => setEmai(e.target.value)}
            placeholder="EMAIL ADDRESS"
          />
        </div>
       
        <input 
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="PLEASE TYPE YOUR MESSAGE HERE"
        />
        
        <button className={styles["action-one"]}>BOOK AND APPOINTMENT</button>
      </div>
    </div>
  );
}

export default SixthSection;