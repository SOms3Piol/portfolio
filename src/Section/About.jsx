import React from 'react'

function About() {
  return (
    <section id='about' className='relative px-3 bg-[#fafafa]   py-[100px] '>
        <div className='relative flex flex-col text-center uppercase items-center gap-4'>
            <h1 className='text-5xl font-bold'>About me</h1>
            <div className=' h-[9px] rounded-lg w-[49px] bg-[#7843E9]'></div>
            <p className='text-slate-800'>Here you will find more information about me, what I do, and my current skills mostly in terms <br/> of programming and technology </p>
        </div>
        <div className='grid grid-cols-2 py-9 max-md:grid-cols-1 place-items-center gap-3 '>
            <div className=' px-7 flex flex-col gap-7'>
                <h1 className='text-3xl font-semibold'>Get Know Me!</h1>
                <p className='leading-7 text-slate-800'>
                    My name is Abdullah Adeel, and I amd passionate about continuously learning new skills and exploring various aspects of my journey in the tech field. I explores various topics related to my expertise to enhance my knowledge and abilities. I am eager to enhance my Problem solving skill by facing and solving the challenges.
                </p>
                <div>
                    <a href="#" className='px-3 py-3 bg-[#7843E9] text-white font-semibold rounded hover:shadow-md '>Contact Me</a>
                </div>
            </div>
            <div className='flex gap-3 flex-wrap px-7 py-3'>
                {
                    ['Html' , 'css' , 'javascript' , 'tailwind', 'react' , 'responsive design' , 'Git'].map(item => (
                        <div className='bg-slate-200 rounded uppercase px-3 h-[35px] flex items-center whitespace-nowrap text-[#666] font-semibold'>
                            {item}
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default About