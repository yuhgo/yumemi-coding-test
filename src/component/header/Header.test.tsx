import { render } from "@testing-library/react"
import React from "react"

import { Header } from "./Header"

describe("Header ests", () => {
  test("Should render Header", () => {
    const { getByText } = render(<Header title="総人口推移" />)

    expect(getByText("総人口推移")).toBeTruthy()
  })
})
