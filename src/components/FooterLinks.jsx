import React from 'react'

export const FooterLinks = ({
    title,
    links,
    style
}) => {
  return (
    <ul className="md:ml-[150px] sm:flex block flex-col ss:ml-[0px] mb-8 sm:mb-0">
      <h3 className='text-white font-bold mb-5 text-[24px] md:text-[15px]'>{title}</h3>
      {
        links.map(item => (
          <li key={item} className='text-secondaryText mb-2 text-[18px] md:text-[13px]'>{item}</li>
        ))
      }
    </ul>
  )
}
