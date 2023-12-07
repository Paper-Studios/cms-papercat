import React, { createContext, useContext, useState } from 'react'

export type GameInfoContext = {
  gameInfo: {
    [key: string]: GameClickedType
  }
};

export type GameInfoContextType = {
  gameInfo: GameInfoContext;
  setGameInfo: React.Dispatch<React.SetStateAction<GameInfoContext>>;
};

export type GameTitle = {
  name: string;
};

export type GameClickedType = {
  title: string;
  summary: string;
  embeddedurl: string;
  steamLink: string;
}

export const GameDisplayContext = createContext<GameInfoContextType | undefined>(undefined);
export const GameClickedContext = createContext<(gameTitle: GameTitle) => GameClickedType | null>(() => null);

export const UseGameDisplayContext = () => {
  const context = useContext(GameDisplayContext);
  if (!context) {
    throw new Error('useGameDisplayContext must be used within GameDisplayContextProvider');
  }
  return context;
}

export const UseGameClickedContext = () => {
  return useContext(GameClickedContext);
}

export const GameDisplayContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [gameInfo, setGameInfo] = useState<GameInfoContext>({} as GameInfoContext);

  function changeGame(gameTitle: GameTitle): GameClickedType {
    const gameSelected = gameInfo[gameTitle.name];
    return gameSelected || null;
  }

  return (
    <GameDisplayContext.Provider value={{ gameInfo, setGameInfo }}>
      <GameClickedContext.Provider value={changeGame}>
        {children}
      </GameClickedContext.Provider>
    </GameDisplayContext.Provider>
  );
};

