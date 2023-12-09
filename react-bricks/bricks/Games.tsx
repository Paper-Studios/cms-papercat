'use client'
import React, { useState, useEffect, useContext } from 'react'
import type { AppProps } from 'next/app'
import { UseGameInfoContext, UseGameClickedContext } from './GameInfoContext'
import { Text, RichText, Image, types, Repeater, useReactBricksContext, usePageValues } from 'react-bricks/frontend'
import { PageViewer, usePage, cleanPage, ReactBricksContext } from 'react-bricks'
import Button from './layout/Button'

import styles from '../../css/Games.module.css'

const Games: types.Brick<{}> = (props) => {
  const { gameInfo } = UseGameInfoContext();
  const {changeGame, gameDisplayed } = UseGameClickedContext();

  // useEffect(() => {
  //   console.log('game displayed is ', gameDisplayed);
  // }, [gameDisplayed]);
  console.log('gameDisplayed', gameDisplayed)

  function resetGameDisplayed (e) {
    // console.log('e', e.taget.closest('.gameCard'))
    console.log('e is ', e.target !== "Games_gameImg__pux6T");
    // if (!e.target.closest('.gameCard')) {
    //   console.log('firing')
    //   changeGame('');
    // }
  }

  return (
    <div className={styles.gamesPage}>
      <div className={styles.gamesDisplayLeft}>
        <h3 style={{margin: '5% 0'}}>We make games!</h3>
        {/* {gameDisplayed.title &&
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
        } */}
      </div>
      <div className={styles.gamesSelectRight} onClick={(e) => resetGameDisplayed(e)}>
        <h2 style={{marginBottom: '5%'}}>Current releases:</h2>
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
        summary: 'TEST SUMMARY',
        embeddedurl: 'www.youtube.com',
        steamLink: 'www.webdevrachel.com',
      },
      {
        name: 'Second Game',
        summary: 'Another Test summary for the second game to display for data sake',
        embeddedurl: 'pretend I am a youtube url',
        steamLink: 'pretend I am a steamlink url',
      }
    ]
  })
}

export default Games