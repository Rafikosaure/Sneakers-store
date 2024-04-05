import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/styles.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <h1 style={{ color: 'palevioletred' }} >BestSneakers</h1>
        <nav>
            <NavLink to='/' className={({ isActive }) =>
            isActive
              ? 'disable'
              : 'enable'
              }>Accueil</NavLink>
        </nav>
    </div>
  )
}
