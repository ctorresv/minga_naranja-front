import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function Main(props) {
  return (
    <>
        <Navbar/>
            {props.children}
        <Footer/>
    </>
  )
}
