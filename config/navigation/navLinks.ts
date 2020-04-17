import { faBars } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-common-types'

interface NavLink {
  href: string
  text: string
  icon: IconDefinition
}

const links: NavLink[] = [
  {
    href: '/',
    text: 'Link 1',
    icon: faBars
  },
  {
    href: '/',
    text: 'Link 2',
    icon: faBars
  },
  {
    href: '/',
    text: 'Link 3',
    icon: faBars
  }
]

export default links
