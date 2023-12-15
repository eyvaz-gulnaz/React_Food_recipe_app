import React, {useState} from 'react'
import {mealData} from '../data/data'
import {ArrowSmRightIcon} from '@heroicons/react/outline'

const Meal = () => {
    const [foods, setFood] = useState(mealData)
    const filterCat = (category) =>{
        setFood(
            mealData.filter((item)=>{
            return item.category === category
        })
        )
    }
    return (
    <div className='w-full m-auto px-4 py-12'>
        <h1 className='font-bold text-orange-500 py-2 text-center text-2xl'>Our Meals</h1>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center'>
                <button onClick={()=> setFood(mealData)} className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                <button onClick={()=> filterCat("pizza")}className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
                <button onClick={()=> filterCat("chicken")}className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
                <button onClick={()=> filterCat("salad")}className='m-1 border-orange-700 bg-orange-700 text-white hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
            </div>
        </div>
        <div className='grid cm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-4'>
        {
            foods.map((item)=>(
                        <div key={item.id} className='border-none hover:scale-105 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-lg' src={item.image} alt={item.name}/>
                        <div className='flex justify-between px-2 py-2'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='px-2 py-4 bg-orange-700 text-white -mt-10 border-8 rounded-full font-bold'>{item.price} </p>
                        </div>
                        <div className='pl-2 py-4 -mt-7 '>
                            <p className='flex items-center text-indigo-600'>
                                View More
                                <ArrowSmRightIcon className='w-5 ml-2'/>
                            </p>

                        </div>
                        </div>
                )
            )
        }
        </div>
    </div>
    )}

export default Meal
