import { ReactBricks } from 'react-bricks/frontend'
import type { AppProps } from 'next/app'
import config from '../react-bricks/config'
import Layout from '../components/layout'

const ReactBricksApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ReactBricks {...config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReactBricks>
  )
}

export default ReactBricksApp
