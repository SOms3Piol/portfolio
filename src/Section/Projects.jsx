import React from 'react'
import Item from '../components/Item'

function Projects() {
  return (
    <section id='project' className='px-3 py-[83px]'>
      
         <h1 className='text-5xl font-bold py-8 px-7 '>My Work</h1>
         <Item 
          src={'https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_800x500/https://d33wubrfki0l68.cloudfront.net/66a9cb04a4641a5fa0f32d08/screenshot_2024-07-31-05-26-56-0000.webp'}
          desc={'I created a blog website using the MERN stack, which includes MongoDB, Express, React, and Node.js. This website allows users to perform key actions: create new blog posts, view existing ones, update content, and delete posts. The design is user-friendly and ensures a smooth experience for managing and interacting with blog content.'}
          link={'https://blog-fullstack-frontend.netlify.app'}
         />
          <Item 
          src={'https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_800x500/https://d33wubrfki0l68.cloudfront.net/66a90a5705d49c000824c5de/screenshot_2024-07-30-15-44-53-0000.webp'}
          desc={'I developed the frontend for an e-commerce site using React to further enhance my skills. The site features a functional shopping cart that allows users to add and remove items with ease. Moving forward, I plan to expand its capabilities by integrating additional features, such as product search, user authentication, and payment processing, to create a more comprehensive and user-friendly shopping experience.'}
          link={'https://helpful-panda-c06fee.netlify.app'}
         />
         <Item 
          src={'https://screenshot-proxy.netlify.app/f_avif,fit_cover,s_800x500/https://d33wubrfki0l68.cloudfront.net/66aa4388b780d30008022a44/screenshot_2024-07-31-14-01-36-0000.webp'}
          desc={'I tackled several challenges presented by the YouTuber Chai and Code. These included implementing an OTP (One-Time Password) form for secure user verification, creating a dynamic course list using draggable components for easy reordering, and developing a table with pagination for efficient data management. Each solution enhanced my skills in handling interactive and user-friendly features in web development.'}
          link={'https://masterji-assignment.netlify.app'}
         />
         
    </section>
  )
}

export default Projects