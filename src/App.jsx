import { useState } from 'react'
import apiUrl from '../api.js';
import Index from './assets/pages/index.jsx';
import Main from './assets/layouts/Main.jsx';
import './App.css'


function App() {
  console.log(apiUrl);
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black overflow-x-hidden min-h-screen'>

      <Main>
        
        <Index/>

      </Main>



      </div>
 
    </>
  )
}

export default App
