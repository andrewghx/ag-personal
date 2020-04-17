import { NavLink, NavItem, NavLinks } from '~/components/navigation/navigation-styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import navLinks from '~/config/navigation/navLinks'

interface Props {
  open: boolean
}

const Links: React.FC<Props> = ({ open }) => {
  if (!navLinks.length) return null
  return (
    <NavLinks open={open}>
      {
        navLinks.map((link, index) => <NavItem key={index}><NavLink href={link.href}><FontAwesomeIcon icon={link.icon} /><span>{link.text}</span></NavLink></NavItem>)
      }
    </NavLinks>
  )
}

export default Links