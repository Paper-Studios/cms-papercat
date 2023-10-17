import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import IFramePlayer from "../features/IFramePlayer";
import { Text, RichText, Image, types } from "react-bricks/frontend";
import styles from "../../../css/Home.module.css";

//=============================
// Local Types
//=============================

interface HomeProps {
  videoLink: string;
  blurb1: string;
  blurb2: string;
}

//=============================
// Component to be rendered
//=============================
const Home: types.Brick<HomeProps> = ({ videoLink }) => {
  return (
    <div className={styles.Home}>
      <div className={styles.bannerContainer}>
        <Image
          propName="image"
          alt="Paper Perjury Banner"
          imageClassName={styles.headerimg}
          aspectRatio={2.21}
        />
        {/* <img src={'/assets/header.jpg'} className={styles.headerimg} width='100%' alt='Paper Perjury banner'/> */}
        {/* <iframe
            src={videoLink}
            title="YouTube video player"
            allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className={styles.bannerVideo}
          /> */}
          <IFramePlayer videoLink={videoLink} />
      </div>
      <div className={styles.blurb}>
        <Text
          renderBlock={({ children }) => (
            <span>{children}</span>
          )}
          propName="blurb1"
        />
      </div>
      <div className={styles.homeContent}>
        <div className={styles.homeDescription}>
          <p className={styles.abstract}>
            Paper Perjury is an engaging point-and-click detective game available on Steam. Developed by James Acosta and his team, Paper Perjury garnered recognition by winning the Tiny Team Selections award in 2023. In Paper Perjury, players step into the shoes of Justina, a hired police clerk with a knack for discovering the truth. With a total of 5 cases to investigate, players must put their detective skills to the test by interviewing suspects and collecting evidence. The game's pixel art style adds a charming and nostalgic touch, making Paper Perjury a must-play for fans of classic detective adventures like Ace Attorney.
          </p>
          <div className={`${styles.blurb} ${styles.release}`}>
            <Text
              renderBlock={({ children }) => (
                <span>{children}</span>
              )}
              propName="blurb2"
            />
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
  getDefaultProps: () => ({
    videoLink: "https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB",
    blurb1: "Solve Crimes, Outsmart Criminals",
    blurb2: "Coming Early 2024"
  }),
  sideEditProps: [
    {
      groupName: 'Hero Banner',
      defaultOpen: true,
      props: [
        {
          name: 'videoLink',
          label: 'Trailer Url in embed format (On Youtube: Share > embed > copy the src url)',
          type: types.SideEditPropType.Text,
        }
      ]
    },
    {
      groupName: 'Hero Content',
      defaultOpen: true,
      props: [
        {
          name: 'blurb1',
          label: 'First Title Blurb',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'blurb2',
          label: 'Second Title Blurb',
          type: types.SideEditPropType.Text,
        }
      ]
    }
  ],
};

export default Home;