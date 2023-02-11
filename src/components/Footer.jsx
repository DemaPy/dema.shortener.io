import React from 'react'
import { footer } from '../constants/content'
import { styles } from '../constants/style'
import { FooterLinks } from './FooterLinks'
import { Social } from './Social'

export const Footer = () => {
  return (
    <footer className='bg-[#35323E] py-[70px] text-start'>
        <main className={`${styles.constainer} ${styles.paddingX} m-auto overflow-hidden md:flex block items-start justify-between`}>

          <div className="logo flex items-center justify-center">
            <img src={footer.logo} alt="logo" />
          </div>

          <div className="sm:flex ss:gap-7 md:flox-col flex-row md:mt-0 mt-[50px] justify-center text-center block">
            <FooterLinks title={footer.features.title} links={footer.features.sublinks} />
            <FooterLinks title={footer.resources.title} links={footer.resources.sublinks}/>
            <FooterLinks title={footer.company.title} links={footer.company.sublinks}/>
          </div>
          <Social social={footer.social}/>
        </main>
    </footer>
  )
}
