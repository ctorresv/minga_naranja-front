import { useState, useEffect } from "react"
import axios from "axios"
import apiUrl from '../../../api.js'

export default function Carousel() {
    
  useEffect(() => {
    axios(apiUrl + 'carousels')
      .then(res => setImgs(res.data.resources))
      .catch(err => console.log(err))

    const interval = setInterval(changeImage, 4000);
    return () => clearInterval(interval)},
    []
  )

  const [images, setImgs] = useState([])
  const [counter, setCounter] = useState(0)

  // cont = undefine
  const changeImage = () => {
    setCounter(cont => {
      // cont = 0
      //primera iteracion cont = 0 (cont = 0 es menor que images.length = 2)
      //segunda iteracion cont = 1 (cont = 1 es menor que images.length = 2)
      //tercera iteracion cont = 2 (cont = 2 no es menor que images.length = 2)
      if (cont < images.length - 1) {
        return cont += 1
        //primera iteracion cont = 1
        //segunda iteracion cont = 2
      } else {
        return cont = 0
        //tercera iteracion cont = 0
      }
    })
    
  }
    return (
      <>
        <div className='ml-[2rem] pt-[3rem] w-full xl:max-w-[639px] lg:max-w-[550px] h-auto p-3 mt-10 '>
          <img  src={images[counter]?.cover_photo} alt="img" />
        </div> 
      </>
  )
}
