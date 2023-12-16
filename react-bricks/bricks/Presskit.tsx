import React from 'react';
import { Text, types, Repeater } from 'react-bricks/frontend';
import IFramePlayer from './features/IFramePlayer';

import styles from '../../css/Presskit.module.css';

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
  name: 'presskit',
  label: 'Press Kit',
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
        ],
        EntryParagraph: [
          {
            paragraph: 'Paper Perjury is a detective mystery game where you solve a series of cases as newly hired police clerk Justina Smith and find out the truth behind a string of suspicious crimes. Work with the energetic detective Ernest Hunt and dig for clues in the paper trail to discover the secrets that paperwork can hide.'
          }
        ]
      },
      {
        PresskitEntryTitle: [
          {
            title: 'History'
          }
        ],
        EntryParagraph: [
          {
            paragraph: 'Paper Perjury started because the creator James Acosta wanted to use Ace Attorney mechanics outside of the standard courtroom setting. While originally called Paper Trails, it has been renamed to Paper Perjury to emphasize the core gameplay of catching witnesses in their lies.'
          }
        ]
      },
      {
        PresskitEntryTitle: [
          {
            title: 'Features'
          }
        ],
        EntryParagraph: [
          { paragraph: '• Collect evidence from colorful characters, each animated in handcrafted pixel art' },
          { paragraph: '• Interview witnesses from all walks of life.' },
          { paragraph: '• Use evidence to outwit criminals to catch them in their lies - and shove the truth in their face!' },
          { paragraph: '• Explore mysteries with grounded themes centered around the gentrification of an ever-growing city.' },
          { paragraph: "• Groove to the game's jazzy soundtrack to truly become a great detective!" },
          { paragraph: "• Befriend a cat! (the most important part of any game)" },
        ]
      },
      {
        PresskitEntryTitle: [
          {
            title: 'Images'
          }
        ],
      }
    ]
  }),
  sideEditProps: [
    {
      groupName: 'Youtube Trailer',
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
  ]
}

export default Presskit;