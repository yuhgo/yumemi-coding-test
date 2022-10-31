import { render } from "@testing-library/react"
import React from "react"

import { AppLayout } from "./AppLayout"

describe("AppLayout Tests", () => {
  test("Should render AppLayout", () => {
    const { getByText } = render(
      <AppLayout title="総人口推移">
        <div></div>
      </AppLayout>
    )

    expect(getByText("総人口推移")).toBeTruthy()
  })
})
