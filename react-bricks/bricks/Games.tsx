import React, { useState, useEffect, useContext } from 'react'
import { UseGameInfoContext, UseGameClickedContext } from './GameInfoContext'
import { Text, RichText, Image, types, Repeater, useAdminContext } from 'react-bricks/frontend'
import Button from './layout/Button'
import GameInfo from '../components/GameInfo'

import styles from '../../css/Games.module.css'

const Games: types.Brick<{}> = (props) => {
  const { gameInfo } = UseGameInfoContext();
  const {changeGame, gameDisplayed } = UseGameClickedContext();
  const { isAdmin, previewMode } = useAdminContext()

  function resetGameDisplayed (e) {
    if (!e.target.classList.contains('Games_gameImg__pux6T')) {
      isAdmin && !previewMode ? '' :
      changeGame('');
    }
  }

  console.log('game displayed is ', gameDisplayed);

  return (
    <div className={styles.gamesPage}>
      <div className={styles.gamesDisplayLeft}>
        <h2>We make games!</h2>
        {gameDisplayed && Object.keys(gameDisplayed).length > 0 &&
          <GameInfo />
        }
      </div>
      <div className={styles.gamesSelectRight} onClick={(e) => resetGameDisplayed(e)}>
        <h3 style={{marginBottom: '5%'}}>Current releases:</h3>
        <Repeater propName="GameCard"/>
      </div>
    </div>
  )
}

Games.schema = {
  name: 'Games',
  label: 'Games Page',
  repeaterItems: [{
    name: 'GameCard',
    itemType: 'GameCard',
    itemLabel: 'Game Card',
  }],
  getDefaultProps: () => ({
    GameCard: [
      {
        name: 'Paper Perjury',
        summary: 'It all started with a simple robbery. When that thread was pulled, a tapestry of mysteries was revealed. Solve cases and outsmart criminals in a detective story full of lies, confessions, and maybe even a murder or two.',
        embeddedurl: 'https://www.youtube.com/embed/mvKB5AkDQko?si=1ccbq7YIoceeRCtJ',
        steamLink: 'https://store.steampowered.com/app/1919600/Paper_Perjury/',
      },
    ]
  })
}

export default Games