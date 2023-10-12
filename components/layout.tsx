import React, { ReactNode, useContext, useEffect, useState } from "react"
import Navbar from "../react-bricks/bricks/layout/Navbar"
import styles from "../css/layout.module.css"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`${styles.App}`}>
      <main className={styles.mainContainer}>
        <Navbar discordURL='https://www.discord.com' twitterURL='https://www.twitter.com' steamURL='https://www.webdevrachel.com'/>
        {children}
      </main>
    </div>
  )
}

export default Layout
