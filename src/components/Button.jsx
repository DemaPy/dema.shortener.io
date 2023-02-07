import React from 'react'

export const Button = ({ text, style }) => {
  return (
    <button className={`${style} bg-btnLime text-white font-bold hover:bg-[#87d6d6] border-none`}>{text}</button>
  )
}
