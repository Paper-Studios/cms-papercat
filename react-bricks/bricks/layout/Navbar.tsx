import React from 'react'
import { types, Link, Text } from 'react-bricks/frontend'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faPeopleGroup,
  faGamepad,
  faFeatherPointed,
  faEnvelope,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons'

import styles from '../../../css/Navbar.module.css'

interface NavItemProps {
  discordURL: string
  twitterURL: string
  steamURL: string
}
const Navbar: types.Brick<NavItemProps> = ({
  discordURL,
  twitterURL,
  steamURL,
}) => {
  return (
    <div className={styles.navigationContainer}>
      <header className={styles.topNavHeader}>
        <div className={styles.topNavLargeCard}>
          <div className={styles.logoBg}>
            <img src={'/logo.png'} className={styles.pcLogo} alt='Paper Cat Logo' />
          </div>
          <div className={styles.topNavSocials}>
            <h3 className={styles.h3}>Paper Cat Games</h3>
            <div className={styles.socialsIconContainer}>
              <a href={discordURL} target="blank">
                <div className={`${styles.socialIcon} ${styles.discord}`} />
              </a>
              <a href={twitterURL} target="blank">
                <div className={`${styles.socialIcon} ${styles.twitter}`} />
              </a>
              <a href={steamURL} target="blank">
                <div className={`${styles.socialIcon} ${styles.steam}`} />
              </a>
            </div>
          </div>
        </div>
        <nav className={styles.navigationLinks}>
          <ul className={styles.navDesktopUl}>
            <li><Link href="/" activeClassName={styles.active}>Home</Link></li>
            <li><Link href="/team" activeClassName={styles.active}>Team</Link></li>
            <li><Link href="/games" activeClassName={styles.active}>Games</Link></li>
            <li><Link href="/blog" activeClassName={styles.active}>Blog</Link></li>
            <li><Link href="/contact" activeClassName={styles.active}>Contact</Link></li>
            <li><Link href="/presskit" activeClassName={styles.active}>Press Kit</Link></li>
          </ul>
          <ul className={styles.navMobileUl}>
            <li><Link href="/" className={styles.navMobileLi} activeClassName={styles.active}><FontAwesomeIcon icon={faHouse} /></Link></li>
            <li><Link href="/team" className={styles.navMobileLi} activeClassName={styles.active}><FontAwesomeIcon icon={faPeopleGroup} /></Link></li>
            <li><Link href="/games" className={styles.navMobileLi} activeClassName={styles.active}><FontAwesomeIcon icon={faGamepad} /></Link></li>
            <li><Link href="/blog" className={styles.navMobileLi} activeClassName={styles.active}><FontAwesomeIcon icon={faFeatherPointed} /></Link></li>
            <li><Link href="/contact" className={styles.navMobileLi} activeClassName={styles.active}><FontAwesomeIcon icon={faEnvelope} /></Link></li>
            <li><Link href="/presskit" className={styles.navMobileLi} activeClassName={styles.active}><FontAwesomeIcon icon={faBoxOpen} /></Link></li>
          </ul>
        </nav>
      </header>
      <div className={styles.botNavHeader}>
        <div className={styles.botNavSkewedLargeCard} />
        <div className={styles.botNavSkewedSmallCards}>
          <div className={`${styles.navCard} ${styles.cardOne}`} />
          <div className={`${styles.navCard} ${styles.cardTwo}`} />
          <div className={`${styles.navCard} ${styles.cardThree}`} />
        </div>
      </div>
    </div>
  )
}

Navbar.schema = {
  name: 'navbar',
  label: 'Navbar',
  // hideFromAddMenu: true,
  // hideFromBricksPane: true,
  category: 'layout',
  getDefaultProps: () => ({
    discordURL: "https://www.discord.com/",
    twitterURL: "https://www.twitter.com/",
    steamURL: "https://store.steampowered.com/",
  }),
  sideEditProps: [
    {
      groupName: 'Social Links',
      defaultOpen: true,
      props: [
        {
          name: 'discordURL',
          label: 'Discord Url',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'twitterURL',
          label: 'Twitter Url',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'steamURL',
          label: 'Steam Url',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default Navbar