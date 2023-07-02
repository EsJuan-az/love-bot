import React from 'react'
import AppLink from '../AppLink'
import { GiHeartOrgan } from 'react-icons/gi'
export default function Navbar() {
  return (
    <nav className='flex justify-between bg-violet-500 h-[65px] items-center w-full px-6 shadow-xl fixed top-0 z-10'>
        <ul className=' text-white flex gap-4 items-center'>
            <AppLink to='/' className='text-2xl font-medium'>
                <span className='flex gap-2'>
                    <span className='flex items-center'>[<GiHeartOrgan/>]</span>
                    Love
                </span>
            </AppLink>
            <AppLink className='text-white' to='/'>Home</AppLink>
            <AppLink className='text-white' to='/galery'>Galery</AppLink>
        </ul>

        <ul className='flex gap-4 items-center'>
            <span className='text-white font-light'>juanes</span>
            <AppLink className='text-white' to='/plans'>Plans</AppLink>
            <AppLink className='text-white' to='/memories'>Memories</AppLink>

        </ul>
    </nav>
  )
}
