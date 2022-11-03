import "../lib/tailwind.css"

import Head from "next/head"
import React, { FC } from "react"

import { Header } from "../component/header"

type RootLayoutProps = {
  children: React.ReactNode
  title: "総人口推移"
}

export const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <html lang="ja">
      <Head>
        <title>{title}</title>
      </Head>
      <body>
        <header>
          <Header title={title} />
        </header>
        <main>
          <div>{children}</div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
