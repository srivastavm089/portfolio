import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import ReactMenu from '../lib/ReactMenu';

const Navbar = () => {
  return (
    <div className='bg-gray-600 flex justify-between md:justify-around  p-5 h-20 items-center'>
        <div>
            <img className='w-10' src="https://images.vexels.com/content/204038/preview/web-developer-logo-design-29b5d4.png" alt="logo" />
        </div>
        <div className='flex gap-5 text-white hidden md:flex '>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/skills'>Skills</NavLink>
            <NavLink to='/education'>Education</NavLink>
            <NavLink to='/experience'>Experience</NavLink>
            <NavLink to='/project'>Project</NavLink>
             <a href="https://drive.google.com/file/d/1u6hCNW0fuYzXc58__9x97GNrUVZdGDLX/view" target='_blank' >Resume</a>

        </div>
        <div className='flex md:hidden '>
          <ReactMenu/>
         
        </div>
    </div>
  )
}

export default Navbar