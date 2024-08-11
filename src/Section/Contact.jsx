import React from 'react'
import Input from '../components/Input'

export default function Contact() {
  return (
    <section id='contact' className='bg-[url("https://www.rammaheshwari.com/assets/svg/common-bg.svg")] bg-center bg-no-repeat py-9 '>
        <div className='relative flex flex-col text-center uppercase items-center gap-4'>
            <h1 className='text-5xl font-bold uppercase'>Contact</h1>
            <div className=' h-[9px] rounded-lg w-[49px] bg-[#7843E9]'></div>
            <p className='text-slate-800'>Feel free to Contact me by submitting the form below and i will get back to you as soon as possible </p>
        </div>
        <form action="#" className='py-8 w-full flex justify-center items-center px-5'>
            <div className='w-[850px] bg-white shadow px-9 py-[30px] rounded max-md:w-full'>
                <Input type={'text'} name={'name'}/>
                <Input type={'email'} name={'email'}/>
                <Input  type={'textarea'} name={'message'}/>
                <div className='text-right'>
                    <button className='w-[155px] py-3 bg-blue-800 text-white font-bold rounded shadow-md'>Submit</button>
                </div>
            </div>
            
        </form>
    </section>
  )
}
