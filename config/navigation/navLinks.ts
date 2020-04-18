import { faBars } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface NavLink {
  href: string
  text: string
  icon: IconDefinition
}

const links: NavLink[] = [
  {
    href: '/link1',
    text: 'Link 1',
    icon: faBars
  },
  {
    href: '/link2',
    text: 'Link 2',
    icon: faBars
  },
  {
    href: '/link3',
    text: 'Link 3',
    icon: faBars
  }
]

export default links
