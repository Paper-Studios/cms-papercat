import type { AppProps } from "next/app"
import ReactBricksApp from "../components/ReactBricksApp"
import dynamic from "next/dynamic"

import "../css/style.css"

const MyApp = (props: AppProps) => {
  return (
    <ReactBricksApp {...props} />
  )
}

// export default MyApp
export default dynamic (() => Promise.resolve(MyApp), {ssr: false})
