import React, { ReactNode } from "react"
import Navbar from "../react-bricks/bricks/layout/Navbar"
import styles from "../css/layout.module.css"

interface LayoutProps {
  links: {
    discord: string
    twitter: string
    steam: string
  }
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ links, children }) => {
  return (
    <div className={`${styles.App}`}>
      <main className={styles.mainContainer}>
        <Navbar discordURL={links.discord} twitterURL={links.twitter} steamURL={links.steam} />
        {children}
      </main>
    </div>
  )
}

export default Layout
