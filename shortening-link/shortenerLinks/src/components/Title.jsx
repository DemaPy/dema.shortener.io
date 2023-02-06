import React from 'react'

export const Title = ({text, style}) => {
  return (
    <h2 className={`${style}`}>{text}</h2>
  )
}
