import React, { useState } from 'react';
import Button from './Button'

function Header({ login, loginState }) {
  // const [login, setLogin] = useState(false);

  function openLogin() {
    loginState(true);
  }

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
            <Button text='Log In' margin='0 5px' onClick={openLogin}/>
            <Button text='Sign Up'/>
        </ul>
    </header>
  )
}

export default Header;