import { NavLink, NavItem, NavLinks } from '~/components/navigation/navigation-styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import navLinks from '~/config/navigation/navLinks'

interface Props {
  open: boolean
}

const Links: React.FC<Props> = ({ open }) => {
  if (!navLinks.length) return null
  return (
    <NavLinks open={open}>
      { navLinks.map((link, index) => (
        <NavItem key={index}>
          <Link href={link.href} >
            <NavLink>
              <FontAwesomeIcon icon={link.icon} />
              <span>{link.text}</span>
            </NavLink>
          </Link>
        </NavItem>
        )
      )}
    </NavLinks>
  )
}

export default Links