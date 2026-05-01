import '../css/Navbar.css'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


export default function Navbar() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
  return (
    <nav className={"navbar"}>
      <p>Maryam Chaudhry</p>
      <ul className={"nav-links-desktop"}>
        <li><a href="#About">About me</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className='nav-links-container-mobile'>
        {hamburgerMenuOpen ? <IoClose size={24} onClick={() => setHamburgerMenuOpen(false)} className='closeIcon' /> : <GiHamburgerMenu size={24} onClick={() => setHamburgerMenuOpen(true)} className='hamburgericon' />}
        {hamburgerMenuOpen &&
          <ul className={"nav-links-mobile"}>
            <li><a href="#About" onClick={() => setHamburgerMenuOpen(false)}>About me</a></li>
            <li><a href="#Projects" onClick={() => setHamburgerMenuOpen(false)}>Projects</a></li>
            <li><a href="#Experience" onClick={() => setHamburgerMenuOpen(false)}>Experience</a></li>
            <li><a href="#Contact" onClick={() => setHamburgerMenuOpen(false)}>Contacts</a></li>
          </ul>
        }
      </div>

    </nav>
  )
}
