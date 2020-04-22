import { NavLogo, MobileLogo } from '~/components/navigation/navigation-styled-components'
import Link from 'next/link'
import settings from '~/config/navigation'

const Logo: React.FC = () => (
  <Link href='/'>
    <a>
      <NavLogo staticImg color={settings.logo.color} />
      <MobileLogo color={settings.logo.mobileColor}/>
    </a>
  </Link>
)

export default Logo
