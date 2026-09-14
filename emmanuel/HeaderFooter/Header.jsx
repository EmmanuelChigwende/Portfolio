import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between pt-10 pb-10 max-lg:pt-5 max-lg:pb-5'>
      <div>
        <h1 className='text-[#E7EDF3]  font-bold text-[1.2rem] cursor-pointer  hover:text-[#8695A7] max-lg:text-[1rem]'>
            <a href="#home">EMMANUEL C</a>
        </h1>
      </div>
      <div>
        <ul className='flex cursor-pointer  gap-10 text-[1.2rem] text-[#8695A7] max-lg:text-[0.8rem] max-lg:gap-5'>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                <a href="#about">About</a>
            </li>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                <a href="#projects">Projects</a>
            </li>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                <a href="#learning">Learning</a>
            </li>
            <li className='hover:text-[#E7EDF3] hover:underline'>
                <a href="#footer">Contact</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
