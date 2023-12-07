import React from 'react'
import Games from './Games'
import { GameDisplayContextProvider } from './GameInfoContext'

const GamePageContextConsumer: React.FC = () => {
  return (
    <GameDisplayContextProvider>
      <Games />
    </GameDisplayContextProvider>
  );
}

export default GamePageContextConsumer