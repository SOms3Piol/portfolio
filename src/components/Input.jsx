import React from 'react'

function Input({type , name}) {
  return (
     <div className='flex flex-col uppercase py-3 flex flex-col gap-3 font-semibold text-xs text-[#666]'>
        <label htmlFor={type}>{name}</label>
        {
            type != 'textarea' ? 
            <input 
                type={type}
                id={type} 
                className='bg-slate-200 px-3 rounded-lg h-[50px]'
                placeholder={`Enter you ${name}`}
             /> : 
            <textarea 
                rows={10} 
                className='bg-slate-200 px-3 py-3 rounded-lg' 
                id={type}
                placeholder={`Type your ${name}...`}
            >
                
            </textarea>
        }
     </div>
  )
}

export default Input