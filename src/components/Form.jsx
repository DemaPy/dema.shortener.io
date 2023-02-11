import React, { useEffect, useState } from 'react'
import { form } from '../constants/content'
import { Button } from './Button'
import { useForm } from "react-hook-form"
import { Links } from './Links'
import { myAxios } from '../axios'

export const Form = () => {

  const [links, setLinks] = useState([])

  const { register, reset, handleSubmit, formState: {errors} } = useForm({
    mode: "onSubmit"
  });

  const onSubmit = ({ shortenLink }) => {
    myAxios.post(`/shorten?url=${shortenLink}`)
      .then(({data}) => {
        setLinks(prev => {
          return [
            ...prev,
            {
              fullLink: shortenLink,
              shorterLink: data.result.full_short_link2,
              allData: data.result
            }
          ]
        })
      })
    reset()
  }

  return (
    <>
      <section className='w-full md:px-[50px] md:py-[40px] py-[20px] px-[25px] bg-[#3a3053] rounded-md overflow-hidden relative z-[20]'>
        <form autoComplete='off' onSubmit={handleSubmit(onSubmit)} className='flex sm:flex-row flex-col gap-5 z-10 relative'>
          <input
            type="url"
            className={`rounded-md px-5 py-3 md:text-[20px] text-[15px] font-semibold outline-none flex-1 ${errors.shortenLink && "outline-[#a73131]"}`}
            placeholder={form.placeholder}
            {...register("shortenLink", {
              required: "Please enter valid link.",
              pattern: /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/
            })}
          />
          <Button text={"Shorten It!"} style={"outline-none border-none focus:outline-0"} />
        </form>
        {errors && <p className='relative z-[1] text-[#d84d4d] top-3 font-bold tracking-wide'>{errors.shortenLink?.message}</p>}
        <img src={form.img} alt="" className='absolute right-0 left-0 top-0 z-0 object-contain w-full' />
      </section>
      {links && <Links data={links} />}
    </>
  )
}
