import React from 'react'
import {categories} from '../data/data'

const Categories = () => {
  return (
    <div className='w-full m-auto p-4'>
      <h1 className='font-bold text-orange-500 py-2 text-center text-2xl'>Trending Categories</h1>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-5 p-5 px-2'>
            {
                categories.map((item)=>{
                    return <div
                    key={item.id}
                    className=' flex justify-center p-4 items-center hover:scale-105 duration-300'>
                        <img className='object-cover w-40 h-10 rounded-xl shadow-xl cursor-pointer' src={item.image} alt={item.name}/>
                    </div>
                })
            }
      </div>
    </div>
  )
}

export default Categories
