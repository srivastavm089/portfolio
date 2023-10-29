import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu} from 'react-icons/ai'
import ReactMenu from '../lib/ReactMenu';
import {BiHomeAlt2} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';
import {GiSkills} from 'react-icons/gi';
import {MdCastForEducation} from "react-icons/md";
import {BsPersonWorkspace} from 'react-icons/bs';
import {RxResume} from 'react-icons/rx'
const Navbar = () => {
  return (
    <div className='bg-gray-600 flex justify-between md:justify-around  p-5 h-20 items-center'>
        <div>
            <img className='w-10' src="https://images.vexels.com/content/204038/preview/web-developer-logo-design-29b5d4.png" alt="logo" />
        </div>
        <div className='flex gap-5 text-white hidden md:flex '>
            <NavLink to='/'  className='flex items-center text-xl   gap-2'><BiHomeAlt2 />Home</NavLink>
            <NavLink to='/about'  className='flex gap-2 items-center text-xl'><FcAbout/>About</NavLink>
            <NavLink to='/skills'  className='flex gap-2 items-center text-xl'><GiSkills/>Skills</NavLink>
            <NavLink to='/education'  className='flex gap-2 items-center text-xl'><span class="material-symbols-outlined">
school
</span>Education</NavLink>
            <NavLink to='/experience'  className='flex gap-2 items-center text-xl'><img src="" alt="" /><img className='w-5 rounded bg-white' src='https://cdn-icons-png.flaticon.com/128/3504/3504016.png'></img>Experience</NavLink>
            <NavLink to='/project'  className='flex gap-2 items-center text-xl'><BsPersonWorkspace/>Project</NavLink>
             <a  className='flex gap-2 items-center text-xl' href="https://drive.google.com/file/d/1u6hCNW0fuYzXc58__9x97GNrUVZdGDLX/view" target='_blank' ><RxResume/>Resume</a>

        </div>
        <div className='flex md:hidden '>
          <ReactMenu/>
         
        </div>
    </div>
  )
}

export default Navbar