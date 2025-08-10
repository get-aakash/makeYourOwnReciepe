import React from 'react'
import chefLogo from "../assets/chef-claude-icon.png";

const Header = ({userName}) => {
  
  return (
    <header className='header-container'>
        <img src={chefLogo} alt="chef-icon" />
        <h1>Chef Claude</h1>
        <p>{userName}</p>
      
    </header>
  )
}

export default Header
