import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='bg-[#4b5320] text-white min-h-screen flex flex-col justify-center items-center'> 
        <div className=' text-4xl mb-6'>Welcome</div>
        <div className=' w-9-12 md:w-96 italic'>
            <p className='mx-4'>
            The Pomodoro Technique is a time management method based on 25-minute stretches of focused work broken by five-minute breaks.
            </p>
        </div>
        <div className=' bg-white text-[#4b5320] rounded-md py-1 px-4 hover:border hover:border-white hover:bg-[#4b5320] hover:text-white mt-6'>
            <Link to='/pomodoro'>
            start
            </Link>
        </div>
    </div>
  )
}

export default Welcome