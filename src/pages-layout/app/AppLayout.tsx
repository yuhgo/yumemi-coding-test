import Head from "next/head"
import React, { FC } from "react"

import { LayoutErrorBoundary } from "../../pages-layout"
import { Header } from "./Header"

type AppLayoutProps = {
  children: React.ReactNode
  title: "総人口推移"
}

export const AppLayout: FC<AppLayoutProps> = (props) => {
  const { children, title } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Header title={title} />
      </header>
      <main>
        <LayoutErrorBoundary>
          <div>{children}</div>
        </LayoutErrorBoundary>
      </main>
    </div>
  )
}
