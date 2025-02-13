import React from 'react';
import styles from './Footer.module.scss';
import FacebookImage from '../images/facebook.png';
import DiscordImage from '../images/discord.png'; 
import InstagramImage from '../images/instagram.png'; 
import TwitterImage from '../images/twitter.png'; 

function FirstSection() {
  return (
    <footer className={styles.main}>
      <p>© Copyright 2024 barbershop - All rights reserved</p>
      <div>
        <img src={FacebookImage}/>
        <img style={{marginTop: "3px"}} src={DiscordImage}/>
        <img src={InstagramImage}/>
        <img src={TwitterImage}/>
      </div>
    </footer>
  );
}

export default FirstSection;