import React, { useState, useEffect } from 'react'

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
  }
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if(window.innerWidth > 765)
      setIsShown(false);
    })
    return () => window.removeEventListener('resize');
  },[isShown])
  
  return (
    <div className='sticky top-0 z-30'>
    <header className='w-[100vw]  py-2  px-7 bg-white shadow'>
        <nav className='flex  justify-between items-center px-3 '>
            <div className='flex items-center gap-3'> 
                <div className='h-[70x] w-[70px] 
                max-md:h-[50px] max-md:w-[50px]
                rounded-full overflow-hidden'>
                   <img  
                   src="/Abdullah.jpeg"  alt="Developers photo" />
                </div>
                <h1 className='text-xl font-bold max-md:text-base'>Abdullah Adeel</h1>
            </div>
            <div className='flex items-center gap-[92px] font-bold md:max-lg:font-semibold md:max-lg:text-xs md:max-lg:gap-[32px] max-md:hidden'>
                <a className='hover:text-[#7843E9] transition ease-in-out duration-500' href="#">Home</a>
                <a className='hover:text-[#7843E9] transition ease-in-out duration-500' href="#about">About</a>
                <a className='hover:text-[#7843E9] transition ease-in-out duration-500' href="#project">Projects</a>
                <a  className='hover:text-[#7843E9] transition ease-in-out duration-500' href="#contact">Contact</a>
            </div>
            <button 
             onClick={handleClick}
            className='hidden max-md:flex items-center text-xl bg-slate-50 h-[40px] w-[40px] justify-center rounded-full'>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
        </nav>
    </header>
    {
      isShown ? <div className={` w-full bg-white flex flex-col text-right px-9 gap-3 text-slate-800   font-medium uppercase py-3 md:hidden transition ease-in duration-300 shadow `}>
      <a onClick={handleClick} className='border-b' href="#">Home</a>
      <a onClick={handleClick} className='border-b' href="#about">About</a>
      <a onClick={handleClick} className='border-b' href="#project">Projects</a>
      <a onClick={handleClick} className='border-b' href="#contact">Contact</a>
    </div> : null
    }
    </div>
  )
}

export default Navbar
