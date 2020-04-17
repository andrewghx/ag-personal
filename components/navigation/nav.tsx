import React, { useState } from 'react'
import { Offset, NavOuter } from '~/components/navigation/navigation-styled-components'
import NavHamburger from '~/components/navigation/navHamburger'
import Links from '~/components/navigation/navLinks'
import Logo from '~/components/navigation/navLogo'

const Nav: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <NavOuter>
        <Logo />
        <NavHamburger open={open} handleClick={setOpen} />
        <Links open={open} />
      </NavOuter>
      <Offset />
    </>
  )
}

export default Nav
