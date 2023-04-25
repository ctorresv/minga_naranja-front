import logo from '../images/Logo.png'

export default function Navbar() {
  return (
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
  )
}
