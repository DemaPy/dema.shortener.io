import React from 'react'

export const Social = ({
    social
}) => {
  return (
    <div className='flex items-center justify-center gap-5 md:mt-0 mt-[50px] md:ml-[50px]'>
        {
            social.map(item => (
                <img key={item.icon} src={item.icon} className="block mb-[10px]" alt="" />
            ))
        }
    </div>
  )
}
