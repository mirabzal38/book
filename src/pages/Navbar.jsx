import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex gap-6 p-6 text-2xl bg-slate-300'>
      <NavLink to={"/admin"}>
        Admin
      </NavLink>
      <NavLink to={"/hero"}>
        Hero
      </NavLink>
      <NavLink to={"/"}>
        Home
      </NavLink>
    </nav>
  )
}

export default Navbar