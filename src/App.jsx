import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/images/Logo.png'
import animes from './assets/images/mangasHero.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black overflow-x-hidden min-h-screen'>
        <header >
          <nav className="flex justify-between items-center p-4">
            <a href='#' className="flex w-[57px] h-[55px] flex-col justify-center gap-[2px] px-3">
                <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
                <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
                <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
            </a>
            <img src={logo} alt="" />
          </nav>
        </header>
        <main>
          <h1 className="text-center text-[64px] font-montserrat font-bold not-italic leading-[95.19%] text-white">Best manga reader</h1>
          <div className='flex justify-evenly items-center relative'>
            <div className='w-full'>
              <img className='w-full max-w-[639px] h-auto p-3 mt-10' src={animes} alt="" />
              <h3 className='absolute lg:left-[780px] lg:top-[100px] w-[482px] h-[134px]  tracking-wider leading-[140%] font-semibold text-[48px] text-white text-left'>Yor favourite manga reader 😏</h3>
              <p className='absolute lg:left-[680px] lg:top-[300px] w-[400px] h-[134px]  tracking-wider leading-[140%] font-semibold text-[16px] text-white text-left'> 
                is an exceptional app for all manga lovers. With a wide range of titles available, from classics to 
                the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
            </div>
            <div className=' w-[472px] h-[335px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[304px] rounded-full'>              
            </div>
          </div>
        </main>

        <footer>

        </footer>

      </div>
 
    </>
  )
}

export default App


/* 
PascalCase - Ejemplos:
Idex
Button
Card
Carousel
FormRegister
formRegister //la sintaxis de camelCase na va para definir componentes
 */
