import React from 'react'
import { Button } from './Button'
import { TextBlock } from './TextBlock'
import { hero } from '../constants/content'
import { styles } from '../constants/style'

export const HeroSection = () => {
  return (
    <header className={`md:flex block ${styles.paddingY}`}>
      <section>
        <TextBlock
        boxStyle={"max-w-[530px]"}
          title={hero.title}
          titleStyle="font-bold text-6xl mb-3"
          paragraph={hero.subtitle}
          paragraphStyle={"text-[22px] font-semibold"}
        />
        <div>
          <Button style={"rounded-full px-8 text-white font-bold mt-8"} text={"Get started"} />
        </div>
      </section>
      <section>
        <img src={hero.img} className="width-[733px] height-[482px] object-contain mt-[-80px] ml-[150px]" alt="" />
      </section>
    </header>
  )
}
