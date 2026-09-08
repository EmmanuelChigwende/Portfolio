import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between pt-10 pb-10'>
      <div>
        <h1 className='text-[#E7EDF3]  font-bold text-[1.2rem]'>
            Emmanuel C
        </h1>
      </div>
      <div>
        <ul className='flex cursor-pointer  gap-10 text-[1.2rem] text-[#8695A7]'>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                About
            </li>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                Projects
            </li>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                Learning
            </li>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                Contact
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
