import React from 'react'
import { types } from 'react-bricks/frontend'
// import { UseGameDisplayContext, UseGameClickedContext } from './GameInfoContext'

import styles from '../../css/Games.module.css'


const GameCard: types.Brick<{ index: number }> = ({ index }) => {
  // const { gameInfo } = UseGameDisplayContext();
  // const changeGame = UseGameClickedContext();

  // after mapping and explicitly exposing the index on the repeater, use as identifier:
  const gameCardId = `gameCard_${index}`;

  return (
    // <div className={styles.gamesContent} onClick={() => { changeGame({ name: gameCardId} ) }}>
    <div className={styles.gamesContent}>
      <div className={styles.gameCard}>
        <span className={styles.gamePreview}>
          <span className={styles.gameImg} />
          <span className={styles.cardFade} />
          <span className={styles.cardBorder} />
        </span>
        {/* <span className={styles.gameTitle}>{gameInfo[gameCardId]?.title}</span> */}
        <span className={styles.gameTitle}>Paper Perjury</span>
      </div>
    </div>
  )
}

GameCard.schema = {
  name: 'GameCard',
  label: 'Game Card',
  hideFromAddMenu: true,
  sideEditProps: [
    {
      groupName: 'Game Card Info',
      defaultOpen: true,
      props: [
        {
          name: 'title',
          label: 'Game Title',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'summary',
          label: 'Summary of the Game',
          type: types.SideEditPropType.Textarea,
        },
        {
          name: 'embeddedurl',
          label: 'YouTube Trailer Url',
          helperText: 'On YouTube, click on Share, then Embed, then copy the src url without quotations',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'steamLink',
          label: 'Steam Link Url',
          type: types.SideEditPropType.Text,
        },
      ]
    },
  ]
}

export default GameCard