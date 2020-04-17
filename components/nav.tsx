import React, { useState } from 'react'
import { Offset, Hamburger, NavLink, NavItem, NavLinks, NavLogo, MobileLogo, NavOuter } from './styled-elements/navigation'
import navLinks from '../config/navigation/navLinks'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <NavOuter>
        <a href='/'><NavLogo /><MobileLogo color='#ffffff'/></a>
        <Hamburger onClick={() => setOpen(!open)} open={open}>{!open && <FontAwesomeIcon icon={faBars} />}{open && <FontAwesomeIcon icon={faTimes} />}</Hamburger>
        <Links open={open} />
      </NavOuter>
      <Offset />
    </>
  )
}

interface LinksProps {
  open: boolean
}

const Links: React.FC<LinksProps> = ({ open }) => {
  if (!navLinks.length) return null
  return (
    <NavLinks open={open}>
      {
        navLinks.map((link, index) => <NavItem key={index}><NavLink href={link.href}><FontAwesomeIcon icon={link.icon} /><span>{link.text}</span></NavLink></NavItem>)
      }
    </NavLinks>
  )
}

export default Nav
