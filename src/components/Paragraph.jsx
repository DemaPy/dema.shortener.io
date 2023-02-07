import React from 'react'

export const Paragraph = ({style, text}) => {
  return (
    <p className={`text-secondaryText ${style}`}>{text}</p>
  )
}
