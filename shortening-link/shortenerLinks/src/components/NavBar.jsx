import React, { useState } from 'react'
import { navbar } from '../constants/content'
import { styles } from '../constants/style'
import { Button } from './Button'

export const NavBar = () => {
  const [toggle, setToggle] = useState(false)

  const handleClick = () => {
    setToggle(prev => !prev)
    console.log('test')
  }

  return (
      <nav className={`${styles.flexBetween} ${styles.paddingY}`}>
        <section className='flex'>
          <img src={navbar.logo.img} className="w-[121px] h-[33px] mr-12" alt="logo" />
          <ul className={`${styles.navUl}`}>
            {
              navbar.links.map(({ id, href, name }) => (
                <li key={id}>
                  <a className={`${styles.text.navbar} text-[#929292] hover:text-[#242222]`} href={href}>{name}</a>
                </li>
              ))
            }
          </ul>
        </section>
        <section>
            <ul className={`${styles.navUl} text-[#929292]`}>
              <li>
                <a className={`${styles.text.navbar} text-[#929292] hover:text-[#242222]`} href="#login">Login</a>
              </li>
              <Button style={`${styles.text.navbar} rounded-full`} text={"Sign Up"}/>
            </ul>
        </section>

        <div className='sm:hidden flex'>
          <img src={toggle ? navbar.burger.close : navbar.burger.open} className="w-[28px] h-[28px]" alt="burger" onClick={() => handleClick()} />
        </div>

        {toggle && (
          <div className='bg-[#3a3053] max-w-[330px] px-[25px] py-[40px] rounded-xl absolute top-[100px] right-[25px] w-full'>
            <ul className='flex flex-col items-center gap-[40px]'>
              {
                navbar.links.map(({ id, href, name }) => (
                  <li key={id}>
                    <a className={`${styles.text.navbar} text-white`} href={href}>{name}</a>
                  </li>
                ))
              }
            </ul>
            <hr className='mt-[40px] mb-[40px]'/>
            <ul className='font-bold text-[#929292] flex flex-col items-center gap-[40px] w-full'>
              <li>
                <a className={`${styles.text.navbar} text-white`} href="#login">Login</a>
              </li>
              <li className='w-full text-center'>
                <a className={`${styles.text.navbar} ${styles.text.loginBtn} block w-full`} href="#signup">Sign Up</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
  )
}
