import React from 'react'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import {RxDotFilled } from 'react-icons/rx'

const Featured = () => {
    const sliders = [
        {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
    },
    {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
    },
    {
    url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
    }]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () =>{
      const isFirstSlider = currentIndex === 0 
      const newIndex = isFirstSlider ? sliders.length -1 : currentIndex -1
      setCurrentIndex(newIndex)
    }
    const nextSlider = () =>{
      const isLastSlider = currentIndex === sliders.length -1
      const newIndex = isLastSlider ? 0 : currentIndex +1
      setCurrentIndex(newIndex)
    }
    const moveToNextSlide = (slideIndex) =>{
      setCurrentIndex(slideIndex)
    }
  return (
    <div className=' w-full h-[500px] py-4 px-4 group  relative'>
        <div className='w-full h-full rounded-2xl duration-500 bg-cover bg-center'
        style={{backgroundImage: `url(${sliders[currentIndex].url})`}}>
        </div>
        <div onClick={prevSlider} className='rounded-full bg-orange-700 text-white group-hover:block hidden absolute text-2xl top-[50%] cursor-pointer p-2 -translate-x-0 left-5 translate-y-[-50]'>
          <BsChevronCompactLeft/>
        </div>
        <div onClick={nextSlider} className='rounded-full bg-orange-700 text-white group-hover:block hidden absolute text-2xl top-[50%] cursor-pointer p-2 -translate-x-0 right-5 translate-y-[-50]'>
          <BsChevronCompactRight/>
        </div>

        <div className='py-2 flex justify-center top-4'>
          {
          sliders.map((sliderItems ,slideIndex)=>(
              <div onClick={ () =>moveToNextSlide(slideIndex)}
              className='text-2xl cursor-pointer'
              key={slideIndex}>
              <RxDotFilled/>
            </div>
          ))     
          }
        </div>
    </div>
  )
}

export default Featured
