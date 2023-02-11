import React from 'react'
import { Button } from './Button'
import { TextBlock } from './TextBlock'
import { hero } from '../constants/content'
import { styles } from '../constants/style'

export const HeroSection = () => {
  return (
    <header className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      <section>
        <TextBlock
          boxStyle={"max-w-[530px] m-auto md:mt-0 mt-[50px] md:text-start text-center"}
          title={hero.title}
          titleStyle="font-bold text-6xl mb-3"
          paragraph={hero.subtitle}
          paragraphStyle={"text-[22px] font-semibold"}
        />
        <div className='md:text-start text-center'>
          <Button style={"scale-[1.2] md:scale-[1] mb-[50px] rounded-full px-8 text-white font-bold mt-8"} text={"Get started"} />
        </div>
      </section>
      <section>
        <img src={hero.img} className="width-[733px] height-[482px] object-contain md:mt-[-80px]  md:ml-[150px] ml-[0px] mt-[50px]" alt="" />
      </section>
    </header>
  )
}
