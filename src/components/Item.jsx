import React from 'react'

export default function Item({src , desc , link}) {
  return (
    <div className='grid lg:grid-cols-2 max-md:grid-cols-1 px-7 gap-5 py-3'>
        <div className=' rounded-lg shadow overflow-hidden '>
            <img className='w-full h-full' src={src} alt="Project img" />
        </div>
        <div className='flex flex-col gap-5 text-justify'>
            <p className='leading-7 text-slate-800'>{desc}</p>
            <div className='flex items-center gap-5'>
               <a href="https://www.github.com/SOms3Piol"
               target='__blank' className='text-xl flex items-center justify-center w-[43px] h-[43px] hover:bg-[#7843E9] hover:text-white transition ease-in rounded-full'><i class="fa fa-github" aria-hidden="true"></i></a>
               <a href={link} target='__blank' className='bg-[#7843E9] px-3 py-3 rounded text-white hover:bg-blue-800 transition ease-in '>Live <i class="fa fa-external-link" aria-hidden="true"></i>
               </a>
            </div>
        </div>
    </div>
  )
}
