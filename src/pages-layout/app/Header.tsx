import React, { FC } from "react"

type HeaderProps = {
  title: string
}

/** @package */
export const Header: FC<HeaderProps> = (props) => {
  const { title } = props

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}
