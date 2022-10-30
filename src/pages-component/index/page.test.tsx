import { render } from "@testing-library/react"
import React from "react"

import { IndexPage } from "./page"

describe("Page Component Tests", () => {
  test("Should render Page", () => {
    const { getByText } = render(<IndexPage />)

    expect(getByText("IndexPage")).toBeTruthy()
  })
})
