import React, { useState } from 'react'
import { styles } from '../constants/style'
import { Button } from './Button'

export const Links = ({ data }) => {
  return (
    <div className='w-full flex gap-7 mt-[50px]'>
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
    <div className={`overflow-hidden text-[20px] w-full font-bold md:flex-row flex-col md:px-[30px] md:py-[20px] py-[10px] px-[15px] rounded-md bg-white ${styles.flexBetween}`}>
      <a className='text-black hover:text-black sm:text-[20px] text-[18px] md:py-0 pb-[10px]' href={link.fullLink}>{link.fullLink}</a>
      <div className={`${styles.flexCenter} md:gap-8 gap-3 border-t-2 md:border-t-0 md:py-0 py-2`}>
        <a href={link.shorterLink} className='text-btnLime hover:text-btnLime sm:text-[20px] text-[18px]'>{link.shorterLink}</a>
          <button onClick={() => handleClick()} className={`${toggle ? "bg-violet-900 text-white" : "bg-btnLime text-[white]"} outline-none border-none focus:outline-0 md:w-fit w-full md:ml-10`}>{toggle ? "Copied!" : "Copy"}</button>
      </div>
    </div>
  )
}