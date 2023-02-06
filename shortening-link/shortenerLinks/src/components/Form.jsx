import React from 'react'
import { form } from '../constants/content'
import { Button } from './Button'

export const Form = () => {
  return (
    <section className='w-full px-[50px] py-[40px] bg-[#3a3053] rounded-md overflow-hidden relative'>
      <form className='flex gap-5 z-10 relative'>
        <input type="text" className='rounded-md px-5 py-3 text-[20px] font-semibold flex-1 outline-[#a73131]' placeholder={form.placeholder}/>
        <Button text={"Shorten It!"}/>
      </form>
      <img src={form.img} alt="" className='absolute right-0 left-0 top-0 z-0 object-contain w-full' />
    </section>
  )
}
