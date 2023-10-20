import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons';
import IFramePlayer from "./features/IFramePlayer";
import { Text, RichText, Image, types } from "react-bricks/frontend";
import styles from "../../css/Home.module.css";

interface HomeProps {
  videoLink: string;
  blurb1: string;
  blurb2: string;
  abstract: string;
  steamTitle: string;
  steamDesc: string;
  tinyTeam: boolean;
  windowsIcon: boolean;
  appleIcon: boolean;
  blackSteamBtn: string;
  greenSteamBtn: string;
  greenSteamBtnLink: string;
}

const Home: types.Brick<HomeProps> = ({ videoLink, tinyTeam, windowsIcon, appleIcon, greenSteamBtnLink }) => {
  return (
    <div className={styles.Home}>
      <div className={styles.bannerContainer}>
        <Image
          propName="header"
          alt="Paper Perjury Banner"
          imageClassName={styles.headerimg}
          aspectRatio={2.21}
        />
        <IFramePlayer videoLink={videoLink} />
      </div>
      <div className={styles.blurb}>
        <Text
          renderBlock={({ children }) => (
            <span>{children}</span>
          )}
          propName="blurb1"
          placeholder=""
        />
      </div>
      <div className={styles.homeContent}>
        <div className={styles.homeDescription}>
          <RichText
            renderBlock={({ children }) => (
              <p className={styles.abstract}>{children}</p>
            )}
            placeholder="Type an abstract..."
            propName="abstract"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Italic,
              types.RichTextFeatures.Highlight
            ]}
            renderHighlight={({ children }) => (
              <span style={{ color: '#F5647F' }}>{children}</span>
            )}
          />
          <div className={`${styles.blurb} ${styles.release}`}>
            <Text
              renderBlock={({ children }) => (
                <span>{children}</span>
              )}
              propName="blurb2"
              placeholder=""
            />
          </div>
          <div className={styles.steamContainer}>
            <div className={styles.steamTitle}>
              <Text
                renderBlock={({ children }) => (
                  <h4>{children}<span> on Steam</span></h4>
                )}
                propName="steamTitle"
                placeholder="Title"
              />
              <img src='/assets/steamLogo.png' alt='steam logo'/>
            </div>
            <div className={styles.steamInfo}>
              <Image
                propName="main"
                alt="Steam Game Banner"
                aspectRatio={3.1}
              />
              <Text
                renderBlock={({ children }) => (
                  <p>{children}</p>
                )}
                propName="steamDesc"
                placeholder=""
              />
            </div>
            <div className={styles.steamPlatformIcons}>
              {tinyTeam && <img src='/assets/tinyTeam.png' width='5%' alt='Tiny Team Award' />}
              {windowsIcon && <FontAwesomeIcon icon={faWindows} className={styles.platformIcons}/>}
              {appleIcon && <FontAwesomeIcon icon={faApple} className={styles.platformIcons}/>}
            </div>
            <div className={styles.steamButtons}>
              <div className={styles.steamButtonLeft}>
                <Text
                  renderBlock={({ children }) => (
                    <span>{children}</span>
                  )}
                  propName="blackSteamBtn"
                  placeholder=""
                />
              </div>
              <a href={greenSteamBtnLink} target="blank" className={styles.steamButtonRight}>
                <Text
                  renderBlock={({ children }) => (
                    <span>{children}</span>
                  )}
                  propName="greenSteamBtn"
                  placeholder=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.homeScreenshots}>
          <Image
            propName="screenshot1"
            alt="Gameplay"
            aspectRatio={1.78}
            maxWidth={600}
          />
          <Image
            propName="screenshot2"
            alt="Gameplay"
            aspectRatio={1.78}
            maxWidth={600}
          />
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
    blurb2: "Coming Early 2024",
    abstract: "Paper Perjury is an engaging point-and-click detective game available on Steam. Developed by James Acosta and his team, Paper Perjury garnered recognition by winning the Tiny Team Selections award in 2023. In Paper Perjury, players step into the shoes of Justina, a hired police clerk with a knack for discovering the truth. With a total of 5 cases to investigate, players must put their detective skills to the test by interviewing suspects and collecting evidence. The game's pixel art style adds a charming and nostalgic touch, making Paper Perjury a must-play for fans of classic detective adventures like Ace Attorney.",
    steamTitle: "Paper Perjury",
    steamDesc: "It all started with a simple robbery. When that thread was pulled, a tapestry of mysteries was revealed. Solve cases and outsmart criminals in a detective story full or lies, confessions, and maybe even a murder or two.",
    tinyTeam: true,
    windowsIcon: true,
    appleIcon: true,
    blackSteamBtn: "Coming 2024",
    greenSteamBtn: "Add to your wishlist",
    greenSteamBtnLink: "https://store.steampowered.com/app/1919600/Paper_Perjury/"
  }),
  sideEditProps: [
    {
      groupName: 'Hero Banner',
      defaultOpen: true,
      props: [
        {
          name: 'videoLink',
          label: 'Trailer Url',
          helperText: 'On YouTube, click on Share, then Embed, then copy the src url without quotations',
          type: types.SideEditPropType.Text,
        }
      ]
    },
    {
      groupName: 'Hero Content',
      defaultOpen: false,
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
        },
        {
          name: 'abstract',
          label: 'Summary of Game',
          type: types.SideEditPropType.Text,
        }
      ]
    },
    {
      groupName: 'Steam Section',
      defaultOpen: false,
      props: [
        {
          name: 'steamTitle',
          label: 'Steam Game Title',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'steamDesc',
          label: 'Steam Game Description',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'tinyTeam',
          label: 'Tiny Team Award Icon',
          type: types.SideEditPropType.Boolean
        },
        {
          name: 'windowsIcon',
          label: 'Windows Platform Icon',
          type: types.SideEditPropType.Boolean
        },
        {
          name: 'appleIcon',
          label: 'Mac Platform Icon',
          type: types.SideEditPropType.Boolean
        },
        {
          name: 'blackSteamBtn',
          label: 'Black Rectangle Text',
          type: types.SideEditPropType.Text
        },
        {
          name: 'greenSteamBtn',
          label: 'Green Steam Button Text',
          type: types.SideEditPropType.Text
        },
        {
          name: 'greenSteamBtnLink',
          label: 'Green Button Link to Game Steam Page',
          type: types.SideEditPropType.Text
        }
      ]
    }
  ],
};

export default Home;