import React from 'react'

function Home() {
  return (
    <section className='relative h-screen  bg-center bg-[url("https://www.rammaheshwari.com/assets/svg/common-bg.svg")] bg-no-repeat flex justify-center items-center  text-center'>
             <div className='absolute top-1/2 left-0  px-2 py-2 bg-white -translate-y-[50%] shadow rounded-r-lg max-lg:hidden'>
                <div className='flex flex-col gap-3'>
                    <a className='flex items-center justify-center h-[50px] w-[50px] hover:bg-slate-300 rounded-lg text-3xl transition ease-in'><i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    </a>
                    <a href='https://www.github.com/SOms3Piol' className='flex items-center justify-center h-[50px] w-[50px] hover:bg-slate-300 rounded-lg text-3xl transition ease-in'><i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a className='flex items-center justify-center h-[50px] w-[50px] hover:bg-slate-300 rounded-lg text-3xl transition ease-in'><i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a className='flex items-center justify-center h-[50px] w-[50px] hover:bg-slate-300 rounded-lg text-3xl transition ease-in'><i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
                </div>
               
             </div>
             <div className='flex flex-col items-center justify-center gap-9'>
                <h1 className='text-7xl font-bold'>Hey, I'm Abdullah Adeel</h1>
                <p className='text-slate-700 text-xl'>A Result-Oriented Web Developer building and managing Websites and <br/> Web Applications that leads to the success of the overall product </p>
                <a href="#project" className='w-[150px] bg-[#7843E9] text-white py-3 rounded-lg hover:shadow hover:scale-110 transition ease-in hover:font-medium'>Projects</a>
             </div>
    
    </section>
  )
}

export default Home
