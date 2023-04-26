import { useEffect, useState } from "react"
import logo from '../images/Logo.png'
import cross from '../images/Cross.png'
import user from '../images/perfil.png'

export default function Navbar() {

  let [navOpen, setNavOpen] = useState(false)

  let toggleNav = () => {
    setNavOpen(!navOpen)
  }

  useEffect(() => {
    console.log(navOpen);
  }, [navOpen])

  return (
    <header >
      <nav className="flex justify-between items-center p-4 flex-wrap relative">
        <button onClick={toggleNav} className="flex w-[57px] h-[55px] flex-col justify-center gap-[2px] px-3 my-1 cel:order-1">
          <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
          <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
          <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
        </button>
        {navOpen ?
          <>            
            <div className="flex flex-col items-center w-[300px] h-[750px] bg-gradient-to-r from-neutral-700 to-black order-2 absolute top-0 left-0 text-black z-50 rounded-md">
              <div className="flex justify-between ite">
                <div className="flex p-2">
                  <img src={user} alt="photo" />
                  <div className="ml-1 text-white">
                    <h4>Carlos Arturo Torres</h4>
                    <h5>carlosat95@gmail.com</h5>
                  </div>
                </div>
                <div className="p-3" onClick={toggleNav} ><img src={cross} alt="" /></div>
              </div>
              <div className="w-[150px] h-[400px] text-white flex-col mt-3 cel:order-3 sm:order-2 flex items-center">
                <ul className="flex flex-col items-center">
                  <li className="my-3"><a className=" p-2 mx-1 bg-white text-black rounded-md" href="#">Home</a></li>
                  <li className="my-3"><a className=" p-2 mx-1" href="#">Mangas</a></li>
                  <li className="my-3"><a className=" p-2 mx-1" href="#">My Mangas</a></li>               
                </ul>
              </div>
            </div>
          </>
          : <div className="cel:order-3 sm:order-2" ></div>}
        <img className="my-1 cel:order-2 sm:order-3" src={logo} alt="" />
      </nav>
    </header>
  )
}
