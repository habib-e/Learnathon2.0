import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className = 'header-main'>
        <div  className = 'header-container'>
            <div>
                <h1 className='font-extrabold text-3xl' >Leanathon2.0</h1>
            </div>
            <div className='header-right'>
              <Link to='/dashboard' className='header-link'>
                <p>Dashboard</p>
              </Link>
                  <Link to='/todo'>
                <p>Todos</p>
              </Link>
              <Link to='/me'>
                <p>Profile</p>
                  </Link>
          
            </div>
        </div>
    </div>
  )
}
