import React from 'react'
import './Fundamentals.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
        <h2 className='header-title'>
            <Link to="/home">Summaries</Link>
        </h2>
        <div>
            <nav className="middle-nav"></nav>
            <nav className='right-nav'>
                <Link to="accounts/profile">
                    <i class="fa-solid fa-user"></i>
                </Link>
                <Link to="">
                    <i class="fa-solid fa-message"></i>
                </Link>
                <Link to="">
                    <i class="fa-solid fa-right-to-bracket"></i>
                </Link>
            </nav>
        </div>

    </header>
  )
}

export default Header