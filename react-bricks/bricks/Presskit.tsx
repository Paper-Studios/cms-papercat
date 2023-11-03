import React from "react";
import { Text, types, Repeater } from "react-bricks/frontend";
import IFramePlayer from "./features/IFramePlayer";

import styles from '../../css/Presskit.module.css'

interface PresskitProps {
  developerTitle: string;
  developerName: string;
  developerState: string;
  releaseTitle: string;
  releaseDate: string;
  platformTitle: string;
  platforms: string;
  trailer: string;
  videoLink: string;
}

const Presskit: types.Brick<PresskitProps> = ({ videoLink }) => {
  return (
    <div className={styles.presskitContent}>
      <div className={styles.presskitSidebar}>
        <div className={styles.sidebarContainer}>
          <Text
            propName='developerTitle'
            placeholder=''
            renderBlock={({ children }) => (
              <h3 className={styles.h3}>{children}</h3>
            )}
          />
          <Text
            propName='developerName'
            placeholder=''
            renderBlock={({ children }) => (
              <p>{children}</p>
            )}
          />
          <Text
            propName='developerState'
            placeholder=''
            renderBlock={({ children }) => (
              <p>{children}</p>
            )}
          />
        </div>
        <div className={styles.sidebarContainer}>
          <Text
            propName='releaseTitle'
            placeholder=''
            renderBlock={({ children }) => (
              <h3 className={styles.h3}>{children}</h3>
            )}
          />
          <Text
            propName='releaseDate'
            placeholder=''
            renderBlock={({ children }) => (
              <p>{children}</p>
            )}
          />
        </div>
        <div className={styles.sidebarContainer}>
          <Text
            propName='platformTitle'
            placeholder=''
            renderBlock={({ children }) => (
              <h3 className={styles.h3}>{children}</h3>
            )}
          />
          <Text
            propName='platforms'
            placeholder=''
            renderBlock={({ children }) => (
              <p>{children}</p>
            )}
          />
        </div>
      </div>
      <div className={styles.presskitMainbar}>
        <Text
          propName='trailer'
          placeholder=''
          renderBlock={({ children }) => (
            <h2 className={styles.h2}>{children}</h2>
          )}
        />
        <div className={styles.videoWrapper}>
          <IFramePlayer videoLink={videoLink} classname={styles.trailer}/>
        </div>
        <Repeater propName='PresskitEntry' />
      </div>
    </div>
  );
}

Presskit.schema = {
  name: "presskit",
  label: "Press Kit",
  repeaterItems: [{
    name: 'PresskitEntry',
    itemType: 'PresskitEntry',
    itemLabel: 'Entry',
  }],
  getDefaultProps: () => ({
    developerTitle: 'Developer',
    developerName: 'Paper Cat Games',
    developerState: 'Based in California, U.S.',
    releaseTitle: 'Release Date',
    releaseDate: 'Q1 2024',
    platformTitle: 'Platforms',
    platforms: 'Steam, PC',
    trailer: 'Trailer',
    videoLink: "https://www.youtube.com/embed/mvKB5AkDQko?si=jSEgbFWovtSaBkjB",
    PresskitEntry: [
      {
        PresskitEntryTitle: [
          {
            title: 'Description'
          }
        ]
      }
    ]
  }),
}

export default Presskit;