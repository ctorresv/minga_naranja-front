import imgFooter from '../images/footer.png'
import face from '../images/Facebook.png'
import twitter from '../images/Twitter.png'
import vimeo from '../images/Vimeo.png'
import yt from '../images/Youtube.png'
import corazon from '../images/Union.png'
import logo from '../images/Logo.png'

export default function Footer() {
  return (
    <footer className='h-[80vh] bg-black w-full'>
          <div>
            <img className='h-[336px] rounded-b-[65%] w-full object-cover' src={imgFooter} alt="" />
          </div>
          <div className='flex justify-evenly items-center h-[323px] flex-wrap'>
            <div className='flex w-[180px] justify-around text-white'>
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
                <h4 className='rounded-[4px] w-[221px] h-[43px] bg-white text-black flex items-center justify-center'>                 
                  Donate
                  <img className='p-2' src={corazon} alt="" /></h4>
              </div>
            </div>
          </div>
        </footer>
  )
}
