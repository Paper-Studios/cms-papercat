import React from 'react'
import { types, Text, Image } from 'react-bricks/frontend'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindows, faApple } from '@fortawesome/free-brands-svg-icons'

import styles from '../../../css/Home.module.css'

interface SteamBoxProps {
  tinyTeam: boolean;
  windowsIcon: boolean;
  appleIcon: boolean;
  greenSteamBtnLink: string;
}
const SteamBox: types.Brick<SteamBoxProps> = ({tinyTeam, windowsIcon, appleIcon, greenSteamBtnLink}) => {
  return (
    <div className={styles.steamContainer}>
      <div className={styles.steamTitle}>
        <Text
          renderBlock={({ children }) => (
            <h4>{children}<span> on Steam</span></h4>
          )}
          propName='steamTitle'
          placeholder='Title'
        />
        <img src='/assets/steamLogo.png' alt='steam logo'/>
      </div>
      <div className={styles.steamInfo}>
        <Image
          propName='main'
          alt='Steam Game Banner'
          aspectRatio={3.1}
        />
        <Text
          renderBlock={({ children }) => (
            <p>{children}</p>
          )}
          propName='steamDesc'
          placeholder=''
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
            propName='blackSteamBtn'
            placeholder=''
          />
        </div>
        <a href={greenSteamBtnLink} target="blank" className={styles.steamButtonRight}>
          <Text
            renderBlock={({ children }) => (
              <span>{children}</span>
            )}
            propName='greenSteamBtn'
            placeholder=''
          />
        </a>
      </div>
    </div>
  )
}

SteamBox.schema = {
  name: 'SteamBox',
  label: 'Steam Box',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    steamTitle: "Title of Game",
    steamDesc: "Steam description goes here, just copy and paste the description from your steam store page! :)",
    tinyTeam: false,
    windowsIcon: true,
    appleIcon: false,
    blackSteamBtn: "$0.00",
    greenSteamBtn: "Add to Cart",
    greenSteamBtnLink: "https://store.steampowered.com/app/1919600/Paper_Perjury/"
  }),
  sideEditProps: [
    {
      groupName: 'Steam Section',
      defaultOpen: true,
      props: [
        {
          name: 'steamTitle',
          label: 'Steam Game Title',
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
  ]
}

export default SteamBox