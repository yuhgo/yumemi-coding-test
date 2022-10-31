import type { CustomNextPage } from "next"
import React from "react"
import { IndexPageComponent } from "src/pages-component/index"
import { AppLayout } from "src/pages-layout/app"

const IndexPage: CustomNextPage = () => {
  return <IndexPageComponent />
}

IndexPage.getLayout = (page) => {
  return <AppLayout title="総人口推移">{page}</AppLayout>
}

export default IndexPage
