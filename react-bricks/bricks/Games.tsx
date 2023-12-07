'use client'
import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { UseGameDisplayContext, UseGameClickedContext } from './GameInfoContext'
import { Text, RichText, Image, types, Repeater } from 'react-bricks/frontend'
import Button from './layout/Button'

import styles from '../../css/Games.module.css'

const Games: types.Brick<{}> = ({ pageProps }: AppProps) => {
  // const { gameInfo, setGameInfo } = UseGameDisplayContext();
  // const changeGame = UseGameClickedContext();
  const [gameDisplayed, setGameDisplayed] = useState({
    title: '',
    summary: '',
    embeddedurl: '',
    steamLink: '',
  });

  // useEffect(() => {
  //   const pagesRendered = pageProps;
  //   console.log('pages Rendered are ', pagesRendered);
  //   // setGameInfo based on the props extracted from pagesRendered when I figure out what those are from admin interface
  // }, [pageProps, setGameInfo]);

  function resetGameDisplayed (e) {
    if (!e.target.closest('.gameCard')) {
      // changeGame(null);
      setGameDisplayed({
        title: '',
        summary: '',
        embeddedurl: '',
        steamLink: '',
      });
    }
  }

  return (
    <div className={styles.gamesPage}>
      <div className={styles.gamesDisplayLeft}>
        <h3 style={{margin: '5% 0'}}>We make games!</h3>
        {gameDisplayed.title &&
          <div className={styles.gameInfoDisplay}>
            <div style={{marginBottom: '6%'}}>{gameDisplayed.title}</div>
            <p style={{marginBottom: '6%', fontFamily: '"Source Sans 3", sans-serif'}}>{gameDisplayed.summary}</p>
            <iframe
              src={gameDisplayed.embeddedurl}
              title="Paper Perjury Trailer"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={styles.gameDisplayVideo}
            />
            <div className={styles.gamesButtonContainer}>
              <Button icon={'steam'} text={'Buy on Steam'} href={gameDisplayed.steamLink} type={'button'} buttonType={'link'} size={'small'} form={false}/>
            </div>
          </div>
        }
      </div>
      <div className={styles.gamesSelectRight} onClick={resetGameDisplayed}>
        <h2 style={{marginBottom: '5%'}}>Current releases:</h2>
        <Repeater propName="GameCard" />
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
        summary: 'TEST SUMMARY',
        embeddedurl: 'www.youtube.com',
        steamLink: 'www.webdevrachel.com',
      }
    ]
  })
}

export default Games