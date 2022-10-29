import "../styles/globals.scss"

import type { CustomAppPage } from "next/app"
import React, { memo } from "react"

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page
    })

  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default memo(App)
