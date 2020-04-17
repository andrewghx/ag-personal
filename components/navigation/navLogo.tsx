import { NavLogo, MobileLogo } from '~/components/navigation/navigation-styled-components'
import settings from '~/config/navigation'

const Logo: React.FC = () => (
  <a href='/'>
    <NavLogo color={settings.logo.color} />
    <MobileLogo color={settings.logo.mobileColor}/>
  </a>
)

export default Logo
