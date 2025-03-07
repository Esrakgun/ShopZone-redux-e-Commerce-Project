import React from 'react'
import NavbarLeft from './navbar/NavbarLeft';
import NavbarRight from './navbar/NavbarRight';


const Navbar = () => {
  return (
    <div className='flex justify-between align-items-center my-5'>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar;
