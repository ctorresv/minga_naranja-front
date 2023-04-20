import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/images/Logo.png'
import animes from './assets/images/mangasHero.png'
import imgFooter from './assets/images/footer.png'
import face from './assets/images/Facebook.png'
import twitter from './assets/images/Twitter.png'
import vimeo from './assets/images/Vimeo.png'
import yt from './assets/images/Youtube.png'
import corazon from './assets/images/Union.png'


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
              <img className='ml-[5rem] pt-[3rem] w-full max-w-[639px] h-auto p-3 mt-10' src={animes} alt="" />

              <div className='absolute left-[900px] top-[150px] max-w-[482px] h-[134px] w-full flex-none'>
                <h3 className='flex items-center tracking-wider leading-[140%] font-semibold text-[48px] text-white text-left'>Yor favourite manga reader 😏</h3>
                <p className='mt-5 w-[391px] h-[87px] flex items-center tracking-wider leading-[120%] font-normal not-italic text-[16px] text-white text-left'> 
                  is an exceptional app for all manga lovers. With a wide range of titles available, from classics to 
                  the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
                  <input className='mt-5 text-center w-[482px] h-[57px] bg rounded-[5px] placeholder-gray-500 bg-[#9D9D9D]'  type="search" placeholder="Buscar" />
              </div>

            </div>
            <div className=' w-[472px] h-[335px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[304px] rounded-full'>              
            </div>
          </div>
        </main>

        <footer className='h-[659px] bg-white'>
          <div>
            <img className='h-[336px] rounded-b-[65%]' src={imgFooter} alt="" />
          </div>
          <div className='flex justify-evenly items-center h-[323px]'>
            <div className='flex w-[180px] justify-between'>
              <p>Home</p>
              <p>Mangas</p>
            </div>
            <img src={logo} alt="" />
            <div>
              <div className='flex w-[221px] justify-between p-4'>
                <img src={face} alt="" />
                <img src={twitter} alt="" />
                <img src={vimeo} alt="" />
                <img src={yt} alt="" />
              </div>
              <div>
                <h4 className='rounded-[4px] w-[221px] h-[43px] bg-gradient-to-r from-[#434343] to-[#000000] text-white flex items-center justify-center'>                 
                  Donate
                  <img className='p-2' src={corazon} alt="" /></h4>
              </div>
            </div>
          </div>
        </footer>

      </div>
 
    </>
  )
}

export default App
