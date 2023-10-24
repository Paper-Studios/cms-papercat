import React, { useEffect, useState } from 'react'
import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'
import Layout from '../components/layout'

const ReactBricksApp = ({ Component, pageProps }: AppProps) => {
  const [links, setLinks] = useState({discord: '', twitter: '', steam: ''});

  useEffect(() => {
    const pagesRendered = pageProps.header?.content; // header is a layout entity that defaults to navbar content (see pageTypes.ts)
    const navProps = pagesRendered?.find((page) => page.type === 'navbar').props;
    console.log('pages rendered are ', pagesRendered);
    console.log('nav props are ', navProps);
    if (navProps) {
      setLinks({
        discord: navProps.discordURL,
        twitter: navProps.twitterURL,
        steam: navProps.steamURL
      });
    }
  }, [pageProps]);

  return (
    <ReactBricks {...config}>
      <Layout links={links}>
        <Component {...pageProps} />
      </Layout>
    </ReactBricks>
  )
}

export default ReactBricksApp
