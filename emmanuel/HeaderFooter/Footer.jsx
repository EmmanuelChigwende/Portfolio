import React from 'react'
import {Mail} from 'lucide-react'
import {Cat} from 'lucide-react'
const Footer = () => {
  return (
    <div className=' p-10 flex justify-between items-center'>
      <h1 className='text-[#E7EDF3] text-[1.5rem] font-extrabold'>
        Lets talk about a role, project or <br/>  connect over the love of the game
      </h1>
      <ul className='text-[#E7EDF3] text-[1.2rem] gap-2'>
        <li className='grid grid-cols-2 gap-5 font-bold'>
          <li className='flex gap-2 items-center hover:text-[#8695A7] hover:scale-[1.1]'><Mail/><a href="emmanuelchigigwende2@gmail.com">gmail</a></li>
          <li className='flex gap-2 items-center hover:text-[#8695A7] hover:scale-[1.1]'><Cat/><a href="https://github.com/EmmanuelChigwende">github</a></li>
        </li>
      </ul>
    </div>
  )
}

export default Footer
