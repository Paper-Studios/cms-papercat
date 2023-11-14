import React, { useEffect, useState } from "react"
import { ReactBricks } from "react-bricks/frontend"
import type { AppProps } from "next/app"
import config from "../react-bricks/config"
import Layout from "../components/layout"

// pageProps is an object with the initial props that were preloaded for the page by data fetching methods in [[...slug]].tsx
// the Component prop is the active page, so whenever you navigate between routes, Component will change to the new page and any props you send to Component will be received by the page
const ReactBricksApp = ({ Component, pageProps }: AppProps) => {
  const [links, setLinks] = useState({discord: '', twitter: '', steam: ''});

  useEffect(() => {
    // header is a layout entity that defaults to navbar content (see pageTypes.ts)
    const pagesRendered = pageProps.header?.content;
    const navProps = pagesRendered?.find((page) => page.type === 'navbar').props;
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
  );
}

export default ReactBricksApp
