import React from 'react'
import { UseGameClickedContext } from '../bricks/GameInfoContext'
import Button from '../bricks/layout/Button'
import IFramePlayer from '../bricks/features/IFramePlayer'

import styles from '../../css/Games.module.css'

const GameInfo: React.FC = () => {
  const { gameDisplayed } = UseGameClickedContext();

  return (
    <div className={styles.gameInfoDisplay}>
      <div className={styles.gameInfoDisplayTitle}>{gameDisplayed.name}</div>
      <p style={{marginBottom: '6%', fontFamily: '"Source Sans 3", sans-serif'}}>{gameDisplayed.summary}</p>
      <IFramePlayer videoLink={gameDisplayed.embeddedurl} classname={styles.gameDisplayVideo} />
      <div className={styles.gamesButtonContainer}>
        <Button
          icon={'steam'}
          text={'Buy on Steam'}
          href={gameDisplayed.steamLink}
          type={'button'}
          buttonType={'link'}
          size={'small'}
          form={false}
          isTargetBlank={true}
        />
      </div>
    </div>
  );
}

export default GameInfo