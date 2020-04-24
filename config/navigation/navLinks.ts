import { faAt, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface NavLink {
  href: string
  text: string
  icon: IconDefinition
}

const links: NavLink[] = [
  {
    href: '/about',
    text: 'About me',
    icon: faFileAlt
  },
/*   {
    href: '/projects',
    text: 'Projects',
    icon: faLaptopCode
  }, */
  {
    href: '/contact',
    text: 'Contact',
    icon: faAt
  }
]

export default links
