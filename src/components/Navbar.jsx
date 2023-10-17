import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-600 flex justify-around h-20 items-center'>
        <div>
            <img className='w-12' src="https://images.vexels.com/content/204038/preview/web-developer-logo-design-29b5d4.png" alt="logo" />
        </div>
        <div className='flex gap-5 text-white'>
            <NavLink to='/' className='a'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/education'>Education</NavLink>
            <NavLink to='/experience'>Experience</NavLink>
            <NavLink to='/project'>Project</NavLink>
            <NavLink to=''>Resume</NavLink>
        </div>
    </div>
  )
}

export default Navbar