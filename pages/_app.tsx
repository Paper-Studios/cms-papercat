import type { AppProps } from "next/app"
import ReactBricksApp from "../components/ReactBricksApp"

import "../css/style.css"

const MyApp = (props: AppProps) => {
  return (
    <ReactBricksApp {...props} />
  )
}

export default MyApp
