import React, { createContext, useContext, useState } from 'react'

export type GameInfoData = {
  gameInfo: {
    [key: string]: GameClickedType
  }
};

export type GameInfoContextType = {
  gameInfo: GameInfoData;
  setGameInfo: React.Dispatch<React.SetStateAction<GameInfoData>>;
};

export type GameClickedType = {
  name: string;
  summary: string;
  embeddedurl: string;
  steamLink: string;
}

export const GameInfoContext = createContext<GameInfoContextType | undefined>(undefined);

export type GameClickedContextType = {
  changeGame: (gameTitle: string) => void;
  gameDisplayed: GameClickedType;
}

export const GameClickedContext = createContext<GameClickedContextType | null>(null);

export const UseGameInfoContext = () => {
  const context = useContext(GameInfoContext);
  if (!context) {
    throw new Error('useGameInfoContext must be used within GameInfoContextProvider');
  }
  return context;
}

export const UseGameClickedContext = () => {
  const context = useContext(GameClickedContext);
  if (!context) {
    throw new Error('useGameClickedContext must be used within GameClickedContextProvider')
  }
  return context;
}

export const GameInfoContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gameInfo, setGameInfo] = useState<GameInfoData>({} as GameInfoData);
  const [gameDisplayed, setGameDisplayed] = useState<GameClickedType>({} as GameClickedType);

  function changeGame(gameTitle: string): void {
    const gameSelected = gameInfo.gameInfo[gameTitle];
    setGameDisplayed(gameSelected);
  }


  return (
    <GameInfoContext.Provider value={{ gameInfo, setGameInfo }}>
      <GameClickedContext.Provider value={{changeGame, gameDisplayed}}>
        {children}
      </GameClickedContext.Provider>
    </GameInfoContext.Provider>
  );
};

