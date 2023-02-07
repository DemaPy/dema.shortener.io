import React, { useState } from 'react'
import { styles } from '../constants/style'
import { Button } from './Button'

export const Links = ({ data }) => {
  return (
    <div className='w-full flex flex-col gap-7 mt-[50px]'>
      {
        data.map(obj => (
          <Link key={obj.allData.code} link={obj}/>
        ))
      }
    </div>
  )
}



function Link({ link }) {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(prev => !prev)
    navigator.clipboard.writeText(link.shorterLink)
  }

  return (
    <div className={`text-[20px] font-bold px-[30px] py-[20px] rounded-md bg-white ${styles.flexBetween}`}>
      <a className='text-black hover:text-black' href={link.fullLink}>{link.fullLink}</a>
      <div className={`${styles.flexCenter} gap-8`}>
        <a href={link.shorterLink} className='text-btnLime hover:text-btnLime'>{link.shorterLink}</a>
        <button onClick={() => handleClick()} className={`${toggle ? "bg-violet-900 text-white" : "bg-btnLime"} outline-none border-none focus:outline-0`}>{toggle ? "Copied!" : "Copy"}</button>
      </div>
    </div>
  )
}