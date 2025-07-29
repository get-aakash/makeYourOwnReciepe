import React from 'react'
import chefLogo from "../assets/chef-claude-icon.png";

const Header = () => {
  return (
    <header className='header-container'>
        <img src={chefLogo} alt="chef-icon" />
        <h1>Chef Claude</h1>
      
    </header>
  )
}

export default Header
