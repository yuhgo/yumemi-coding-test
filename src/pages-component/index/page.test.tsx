import { render } from "@testing-library/react"
import React from "react"

import { IndexPageComponent } from "./page"

describe("Page Component Tests", () => {
  test("Should render PageComponent", () => {
    const { getByText } = render(<IndexPageComponent />)

    expect(getByText("IndexPageComponent")).toBeTruthy()
  })
})
