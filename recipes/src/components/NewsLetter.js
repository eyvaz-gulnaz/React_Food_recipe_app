import React from 'react'

const NewsLetter = () => {
  return (
    <div className=' w-full m-auto px-4 text-white bg-[#24262b]'>
        <div className='mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-10'>
              <h1>Need advice on how to improve your flow?</h1>
              <p>Sign up to join our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
              <div className='flex flex-col sm:flex-row w-full justify-between items-center'>
                <input
                type='email'
                placeholder='email'
                className='w-full p-3 rounded-md text-black flex'
                />
                <button className='text-white rounded-md font-medium bg-[#00df9a] w-[200px] my-6 ml-4 px-6 py-3 border-none'>Notify me</button>
              </div>
              <p>We are concerned about the security of your data, Read {""} <span className='text-[#00df9a] cursor-pointer tracking-widest'> Privacy Policy</span></p>
            </div>
            <hr className='bg-gray-700 my-8  border-1 gark:bg-gray-700'></hr>
        </div>
      
    </div>
  )
}

export default NewsLetter
