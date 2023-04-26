import { useEffect, useState } from "react"
import logo from '../images/Logo.png'

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
      <nav className="flex justify-between items-center p-4 flex-wrap">
        <button onClick={toggleNav} className="flex w-[57px] h-[55px] flex-col justify-center gap-[2px] px-3 my-1 cel:order-1">
          <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
          <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
          <div className="w-[26.95px] border-[2px] border-white rounded-sm"></div>
        </button>
        {navOpen ? 
          <div className=" text-white flex-wrap mt-3 cel:order-3 sm:order-2">
            <a className=" p-2 border-[2px] rounded-xl mx-1" href="#">Home</a>
            <a className=" p-2 border-[2px] rounded-xl mx-1" href="#">Mangas</a>
            <a className=" p-2 border-[2px] rounded-xl mx-1" href="#">My Mangas</a>
          </div>
          : <div className="cel:order-3 sm:order-2" ></div>}

        <img className="my-1 cel:order-2 sm:order-3" src={logo} alt="" />
      </nav>
    </header>
  )
}
