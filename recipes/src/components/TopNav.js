import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch, AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import {TbTruckReturn} from 'react-icons/tb'
import {FaGoogleWallet} from 'react-icons/fa'
import {MdHelp, MdOutlineFavorite} from 'react-icons/md'

const TopNav = () => {
    const [sideBar, setSideBar] = useState(false)
  return (
    <div className='flex items-center justify-between p-4 mx-auto max-w-[1520]'>
        <div className='flex items-center'>
            <div onClick={()=> setSideBar(!sideBar)} className='cursor-pointer'>
                    <AiOutlineMenu size={25}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'> Yum
                <span className='font-bold'>Eats</span>
            </h1>   
            <div className='hidden lg:flex items-center rounded-full bg-gray-200  p-1 text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-2 text-bold '>Free</p>
                <p className='p-2 text-bold'>Delivery</p>
            </div>
        </div>
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input className='w-full p-2 bg-transparent focus:outline-none'
            type='text'
            placeholder='search meals'/> 
        </div>
        <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full '>
            <BsFillCartFill size={20}/>Cart</button>

            {sideBar?  (<div className='bg-black/60 fixed w-full h-screen z-10 left-0 top-0' onClick={()=> setSideBar(!sideBar)}></div>) : ("")}

            <div className={sideBar? 'fixed bg-white w-[300px] h-screen  z-10 top-0 left-0 duration-300' : 'fixed bg-white w-[300px] h-screen  z-10 top-0 left-[-100%] duration-300'}>
                <AiOutlineClose onClick={()=> setSideBar(!sideBar)} size={25} className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className='text-2xl p-4'> Yum
                <span className='font-bold text-orange-700'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-900'>
                        <li className='text-xl py-4 flex'>
                            <BsPerson size={25} className='bg-black mr-4 rounded-full text-white'/>
                            My Account
                        </li>
                        <li className='text-xl py-4 flex'>
                            <TbTruckReturn size={25} className='bg-black mr-4 rounded-full text-white'/>
                            Delivery
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdOutlineFavorite size={25} className='bg-black mr-4 rounded-full text-white'/>
                            My Favourite
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaGoogleWallet size={25} className='bg-black mr-4 rounded-full text-white'/>
                            My Wallet
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdHelp size={25} className='bg-black mr-4 rounded-full text-white'/>
                            Help
                        </li>
                    </ul>
                </nav>
            </div>
    </div>
  )
}

export default TopNav
