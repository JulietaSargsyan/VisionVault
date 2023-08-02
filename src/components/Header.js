import React from 'react'

function Header() {
  return (
    <header>
        <h1 className='logo'>VisionVault</h1>
        <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Developers</a></li>
        </ul>
        <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Sign Up</a></li>
        </ul>
    </header>
  )
}

export default Header;