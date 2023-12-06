import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

import styles from '../../css/Home.module.css'

const HomeEntry: types.Brick = () => {
  return (
    <div className={styles.homeContent}>
      <Repeater propName="HomeTitle" />
      <Repeater propName="ImagePair" />
      <Repeater propName="HomeParagraph" />
      <Repeater propName="SteamBox" />
    </div>
  )
}

HomeEntry.schema = {
  name: 'HomeEntry',
  label: 'Home Page Entry',
  hideFromAddMenu: true,
  repeaterItems: [
    {
      name: 'HomeTitle',
      itemType: 'HomeTitle',
      itemLabel: 'Title Blurb',
    },
    {
      name: 'ImagePair',
      itemType: 'ImagePair',
      itemLabel: 'Image Pair',
    },
    {
      name: 'HomeParagraph',
      itemType: 'HomeParagraph',
      itemLabel: 'Paragraph',
    },
    {
      name: 'SteamBox',
      itemType: 'SteamBox',
      itemLabel: 'Steam Box',
    },
  ],
  getDefaultProps: () => ({
    HomeTitle: [{
      blurb: 'Customize each section with a title, image pair, paragraph, or steam link!'
    }],
  }),
}

export default HomeEntry