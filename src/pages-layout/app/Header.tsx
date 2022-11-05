import React, { FC } from "react"

type HeaderProps = {
  title: string
}

/** @package */
export const Header: FC<HeaderProps> = (props) => {
  const { title } = props

  return (
    <div className="bg-blue-100 py-6 text-center shadow-lg">
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  )
}
