import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import { Text, RichText, Image, types } from "react-bricks/frontend";
import styles from "../../../css/Home.module.css";

//=============================
// Component to be rendered
//=============================
const Home: types.Brick = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.bannerContainer}>
        <img src={'/assets/header.jpg'} className={styles.headerimg} width='100%' alt='Paper Perjury banner'/>
        <iframe
            src="https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB"
            title="Paper Perjury Trailer"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={styles.bannerVideo}
          />
      </div>
      <div className={styles.blurb}>
        <span>Solve Crimes, Outsmart Criminals</span>
      </div>
      <div className={styles.homeContent}>
        <div className={styles.homeDescription}>
          <p className={styles.abstract}>
            Paper Perjury is an engaging point-and-click detective game available on Steam. Developed by James Acosta and his team, Paper Perjury garnered recognition by winning the Tiny Team Selections award in 2023. In Paper Perjury, players step into the shoes of Justina, a hired police clerk with a knack for discovering the truth. With a total of 5 cases to investigate, players must put their detective skills to the test by interviewing suspects and collecting evidence. The game's pixel art style adds a charming and nostalgic touch, making Paper Perjury a must-play for fans of classic detective adventures like Ace Attorney.
          </p>
          <div className={`${styles.blurb} ${styles.release}`}>
            <span>Coming Early 2024</span>
          </div>
          <div className={styles.steamContainer}>
            <div className={styles.steamTitle}>
              <h4>Paper Perjury<span> on Steam</span></h4>
              <img src='/assets/steamLogo.png' alt='steam logo'/>
            </div>
            <div className={styles.steamInfo}>
              <img src='/assets/main.jpg' alt='steam banner' />
              <p>
                It all started with a simple robbery. When that thread was pulled, a tapestry of mysteries was revealed. Solve cases and outsmart criminals in a detective story full or lies, confessions, and maybe even a murder or two.
              </p>
            </div>
            <div className={styles.steamPlatformIcons}>
              <img src='/assets/tinyTeam.png' width='5%' alt='Tiny Team Award' />
              <FontAwesomeIcon icon={faWindows} className={styles.platformIcons}/>
              <FontAwesomeIcon icon={faApple} className={styles.platformIcons}/>
            </div>
            <div className={styles.steamButtons}>
              <div className={styles.steamButtonLeft}>
                <span>Coming 2024</span>
              </div>
              <a href='https://store.steampowered.com/app/1919600/Paper_Perjury/' target='blank' className={styles.steamButtonRight}>Add to your wishlist</a>
            </div>
          </div>
        </div>
        <div className={styles.homeScreenshots}>
          <img src='/assets/screenshot1.jpg' alt='gameplay'/>
          <img src='/assets/screenshot2.jpg' alt='gameplay'/>
        </div>
      </div>
    </div>
  );
};

//=============================
// Brick Schema
//=============================
Home.schema = {
  name: "home",
  label: "Home Page",
  category: 'layout',
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default Home;