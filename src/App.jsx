import Navbar from "./components/Navbar"
import About from "./Section/About"
import Contact from "./Section/Contact"
import Home from "./Section/Home"
import Projects from "./Section/Projects"

function App() {


 return(
  <>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Contact />
    <footer className="bg-black text-white px-7 h-[30vh] ">
      <div className="flex sm:justify-between sm:items-center py-6 max-sm:flex-col gap-3">
         <div>
           <h1 className="font-bold text-3xl">Abdullah Adeel</h1>
           <p className="text-base font-thin">A Frontend focused Web Developer building the Frontend of Websites and Web Applications</p>
         </div>
         <div className=" ">
            <h1 className="font-bold text-3xl">Social</h1>
             <div className="flex  text-white gap-5 py-3">
                    <a href="#" className=' text-3xl '><i class="fa fa-linkedin-square" aria-hidden="true"></  i>
                    </a>
                    <a href="https://www.github.com/SOms3Piol" className='text-3xl'><i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="#" className=' text-3xl '><i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#" className=' text-3xl '><i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </a>
             </div>
         </div>
      </div>
    </footer>
  </>
 )
}

export default App
