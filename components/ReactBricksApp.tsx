import React, { useEffect, useState } from 'react';
import { ReactBricks } from 'react-bricks/frontend';
import { GameInfoData, UseGameInfoContext } from '../react-bricks/context/GameInfoContext';
import type { AppProps } from 'next/app';
import config from '../react-bricks/config';
import Layout from '../components/layout';

// pageProps is an object with the initial props that were preloaded for the page by data fetching methods in [[...slug]].tsx
// the Component prop is the active page, so whenever you navigate between routes, Component will change to the new page and any props you send to Component will be received by the page
const ReactBricksApp = ({ Component, pageProps }: AppProps) => {
  const [links, setLinks] = useState({discord: '', twitter: '', steam: ''});
  const { setGameInfo } = UseGameInfoContext();

  useEffect(() => {
    // header is a layout entity that defaults to navbar content (see pageTypes.ts). Optional chaining to account for admin interface
    const initialPagesRendered = pageProps.header?.content;
    // when switching components (tabs), pageProps are accessible through a slightly different path:
    const pagesRendered = pageProps.page?.content;
    const navProps = initialPagesRendered?.find((page) => page.type === 'navbar').props;
    // since the GameCard bricks are repeaters, they need a global state context in order to render their information on Games page upon click
    const gameProps = pagesRendered?.find((page) => page.type === 'Games')?.props.GameCard;

    if (navProps) {
      setLinks({
        discord: navProps.discordURL,
        twitter: navProps.twitterURL,
        steam: navProps.steamURL
      });
    }

    if (gameProps) {
      const games: GameInfoData = { gameInfo: {} };
      gameProps.forEach((gameCard) => {
        const {
          name,
          summary,
          embeddedurl,
          steamLink
        } = gameCard.props;

        games.gameInfo[name] = {
          name,
          summary,
          embeddedurl,
          steamLink,
        }
      });
      setGameInfo(games);
    }
  }, [pageProps, setGameInfo]);

  return (
    <ReactBricks {...config}>
      <Layout links={links}>
        <Component {...pageProps} />
      </Layout>
    </ReactBricks>
  );
}

export default ReactBricksApp;
