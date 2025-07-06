import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full borde py-5 px-5 sm:px-10 flex justify-between items-center' >
      <nav className='flex borde w-full screen-max-width'>
        <img src={appleImg} alt="Apple" width={14} height={18}/>

        <div className='borde flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav)=>(
            <div 
              className='px-5 text-sm cursor-pointer text-white
                       hover:text-gray-100 transition-all' key={nav}>
                {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt="search" height={18} width={18}/>
          <img src={bagImg} alt="bag" height={18} width={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
