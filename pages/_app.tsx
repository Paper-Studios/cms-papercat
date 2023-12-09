import type { AppProps } from 'next/app'
import ReactBricksApp from '../components/ReactBricksApp'
import { GameInfoContextProvider } from '../react-bricks/bricks/GameInfoContext'

import '../css/style.css'

const MyApp = (props: AppProps) => {
  return (
    <GameInfoContextProvider>
      <ReactBricksApp {...props} />
    </GameInfoContextProvider>
  )
}

export default MyApp
