import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome, AiFillFileAdd } from 'react-icons/ai'

const NavItem = ({ to, value, icon, closed }) => {

  const commonClass = "flex items-center space-x-2 w-full p-2 block whitespace-nowrap"
  const activeClass = commonClass + ' bg-blue-500 text-white'
  const inActiveClass = commonClass + ' text-gray-500'

  return (
    <NavLink
      className={({ isActive }) => isActive ? activeClass : inActiveClass}
      to={to}
    >
      {icon}
      <span className={
        closed ?
          'w-0 transition-width overflow-hidden'
          : 'w-full transition-width overflow-hidden' 
      }
      >{value}</span>
    </NavLink>
  )
}

export default function NavBar({ closed }) {
  return (
    <nav>
      <div className='flex justify-center p-3'>
        <img src='./logo.png' alt='logo' className='w-14'/>
      </div>
      <ul>
        <li>
          <NavItem
            closed={closed}
            to={'/'}
            value='Home'
            icon={<AiOutlineHome size={24} />}
          />
        </li>
        <li>
          <NavItem
            closed={closed}
            to={'/create-post'}
            value='Create Post'
            icon={<AiFillFileAdd size={24} />}
          />
        </li>
      </ul>
    </nav>
  )
}
