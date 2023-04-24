import { useState } from 'react'
import apiUrl from '../api.js';
import Navbar from './assets/components/Navbar.jsx';
import Footer from './assets/components/Footer.jsx';
import Index from './assets/pages/index.jsx';
import './App.css'


function App() {
  console.log(apiUrl);
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black overflow-x-hidden min-h-screen'>

        <Navbar/>

        <Index/>

        <Footer/>

      </div>
 
    </>
  )
}

export default App
