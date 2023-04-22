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
        <main className='min-h-[80vh]'>
          <h1 className="text-center text-[64px] font-montserrat font-bold not-italic leading-[95.19%] text-white cel:hidden sm:hidden md:hidden xl:block lg:block">Best manga reader</h1>
          <div className='flex xl:justify-around lg:justify-evenly items-center relative cel:hidden sm:hidden md:hidden xl:flex lg:flex'>
            <img className='ml-[2rem] pt-[3rem] w-full xl:max-w-[639px] lg:max-w-[550px] h-auto p-3 mt-10 ' src={animes} alt="" />
            <div className='xl:w-[482px] lg:w-[350px] relative'>
              <div className=' absolute left-0 top-0 xl:w-[472px] lg:w-[350px] h-[335px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[304px] rounded-full'>              
              </div>
              <div className=' flex-none flex-col items-center'>
                <h3 className=' flex items-center tracking-wider leading-[140%] font-semibold xl:w-[391px] xl:text-[48px] lg:w-[300px] lg:text-[35px] text-white text-left'>Yor favourite manga reader 😏</h3>
                <p className='mt-5 xl:w-[391px] lg:w-[300px] lg:text-[15px] h-[87px] flex items-center tracking-wider leading-[120%] font-normal not-italic xl:text-[16px] text-white text-left'> 
                  is an exceptional app for all manga lovers. With a wide range of titles available, from classics to 
                  the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
                <input className='mt-5 text-center xl:w-[390px] xl:h-[57px] lg:w-[300px] lg:h-[45px] bg rounded-[5px] placeholder-gray-500 bg-[#9D9D9D]'  type="search" placeholder="Search manga" />
              </div>
            </div>
          </div>

          
          <div className='bg-bg-image bg-cover bg-center bg-no-repeat w-screen h-screen mt-5 justify-center items-center cel:flex  md:flex sm:flex xl:hidden lg:hidden'>
            <div className='flex-none flex-col items-center sm:w-[388px] md:w-[388px] cel:w-[300px]'>
              <h3 className=' items-center tracking-wider leading-[140%] font-semibold md:text-[48px] sm:text-[48px] cel:text-[40px] text-white text-left'>Yor favourite manga reader 😏</h3>
              <p className='mt-5 text-[15px] h-[87px] items-center tracking-wider leading-[120%] font-normal not-italic text-white text-left'> 
                is an exceptional app for all manga lovers. With a wide range of titles available, from classics to 
                the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
              <input className='mt-5  md:w-[388px] sm:w-[388px] cel:w-[300px] text-center  h-[45px]  bg rounded-[5px] placeholder-gray-500 bg-[#9D9D9D]'  type="search" placeholder="Search manga" />
            </div>
          </div>

        </main>

        <footer className='h-[80vh] bg-white w-full'>
          <div>
            <img className='h-[336px] rounded-b-[65%] w-full object-cover' src={imgFooter} alt="" />
          </div>
          <div className='flex justify-evenly items-center h-[323px] flex-wrap'>
            <div className='flex w-[180px] justify-around'>
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
