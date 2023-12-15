import React from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
  return (
    <>
      <h1 className='font-bold text-orange-500 py-2 text-center text-2xl'>Top Picks</h1>
      <div className='m-auto hidden lg:flex p-2 w-full]'>
        <Splide options={{gap:'0.5rem', perPage:4, grag: 'free' , arrows:false}}>
        {
          topPicks.map((item)=>{
            return(
              <SplideSlide key={item.id}>
                <div className='rounded-3xl relative'>           
                  <div className='absolute rounded-3xl w-full h-full bg-black/50'>
                    <p className=' text-white px-2 pt-4 font-bold text-2xl'> {item.title} </p>
                    <p className='text-white px-2'> {item.price} </p>
                    <button className='bottom-4 mx-2 border border-dotted border-white text-white absolute'>Add to Card</button>
                  </div>
                    <img className='w-full h-[200px]  ease-out rounded-3xl duration-300 cursor-pointer object-cover hover:scale-105' src={item.img} alt={item.title}/>
                </div>
                </SplideSlide>
            )
          } )
        }
      </Splide>
      </div>
    </>
  )
}

export default TopPicks
