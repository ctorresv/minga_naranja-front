import animes from '../images/mangasHero.png'
import VistaCel from '../components/VistaCel'
import Carousel from '../components/Carousel'

export default function index() {
  return (

    <main className='min-h-[80vh]'>

      <h1 className="text-center text-[64px] font-montserrat font-bold not-italic leading-[95.19%] text-white cel:hidden sm:hidden md:hidden xl:block lg:block">Best manga reader</h1>
      <div className='flex xl:justify-around lg:justify-evenly items-center relative cel:hidden sm:hidden md:hidden xl:flex lg:flex'>
        <Carousel/>
        <div className='xl:w-[482px] lg:w-[350px] relative'>
          <div className=' absolute left-0 top-0 xl:w-[472px] lg:w-[350px] h-[335px] bg-gradient-to-r from-[#4338CA] to-[#5E52F3] blur-[304px] rounded-full'>
          </div>

          <div className=' flex-none flex-col items-center'>
            <h3 className=' flex items-center tracking-wider leading-[140%] font-semibold xl:w-[391px] xl:text-[48px] lg:w-[300px] lg:text-[35px] text-white text-left'>Yor favourite manga reader 😏</h3>
            <p className='mt-5 xl:w-[391px] lg:w-[300px] lg:text-[15px] h-[87px] flex items-center tracking-wider leading-[120%] font-normal not-italic xl:text-[16px] text-white text-left'>
              is an exceptional app for all manga lovers. With a wide range of titles available, from classics to
              the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
            <input className='mt-5 text-center xl:w-[390px] xl:h-[57px] lg:w-[300px] lg:h-[45px] bg rounded-[5px] placeholder-gray-500 bg-[#9D9D9D]' type="search" placeholder="Search manga" />
          </div>
        </div>
      </div>

      <VistaCel/>

    </main>
  )
}
