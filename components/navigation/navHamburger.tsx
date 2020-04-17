import { Hamburger } from '~/components/navigation/navigation-styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

interface Props {
  open?: boolean
  handleClick: React.Dispatch<React.SetStateAction<boolean>>
}

const NavHamburger: React.FC<Props> = ({ open, handleClick }) => (
  <Hamburger onClick={() => handleClick(!open)} open={open}>
    {!open && <FontAwesomeIcon icon={faBars} />}
    {open && <FontAwesomeIcon icon={faTimes} />}
  </Hamburger>
)

export default NavHamburger
