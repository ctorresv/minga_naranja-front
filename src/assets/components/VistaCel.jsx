export default function VistaCel() {
  return (
    <div className='bg-bg-image bg-cover bg-center bg-no-repeat w-screen h-screen mt-5 justify-center items-center cel:flex  md:flex sm:flex xl:hidden lg:hidden'>
        <div className='flex-none flex-col items-center sm:w-[388px] md:w-[388px] cel:w-[300px]'>
            <h3 className=' items-center tracking-wider leading-[140%] font-semibold md:text-[48px] sm:text-[48px] cel:text-[40px] text-white text-left'>Yor favourite manga reader 😏</h3>
            <p className='mt-5 text-[15px] h-[87px] items-center tracking-wider leading-[120%] font-normal not-italic text-white text-left'>
            is an exceptional app for all manga lovers. With a wide range of titles available, from classics to
            the latest releases, this app is perfect for those who want to read manga anytime, anywhere.</p>
            <input className='mt-5  md:w-[388px] sm:w-[388px] cel:w-[300px] text-center  h-[45px]  bg rounded-[5px] placeholder-gray-500 bg-[#9D9D9D]' type="search" placeholder="Search manga" />
        </div>
    </div>
  )
}
