import { render } from "@testing-library/react"
import React from "react"

import { IndexPageComponent } from "../pages-component/index"
import { AppLayout } from "../pages-layout/app/AppLayout"

describe("Page Tests", () => {
  test("Should render Page", () => {
    const { getByText } = render(
      <AppLayout title="総人口推移">
        <IndexPageComponent />
      </AppLayout>
    )

    expect(getByText("総人口推移")).toBeTruthy()
    expect(getByText("IndexPageComponent")).toBeTruthy()
  })
})
