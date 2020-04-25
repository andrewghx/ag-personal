import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contactSettings, { SocialLink } from '~/config/settings/contact'

const IconsContainer = styled.span<Props>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${props => props.iconColor ? props.iconColor : 'inherit'};
  font-size: ${props => props.fontSize ? props.fontSize : 'inherit'};
  svg {
    cursor: pointer;
    padding: 0px 0.3em;
  }
  i {
    cursor: pointer;
    padding: 0px 0.3em;
  }
  a {
    color: ${props => props.iconColor ? props.iconColor : 'inherit'};
  }
`

interface Props {
  iconColor?: string
  fontSize?: string
  exclusions?: string[]
}

const SocialIcons: React.FC<Props> = ({ exclusions = [], fontSize, iconColor }) => (
  <IconsContainer fontSize={fontSize} iconColor={iconColor} >
    {contactSettings.socialMedia.map((icon: SocialLink, index) => {
      if (exclusions.indexOf(icon.name.toLowerCase()) !== -1) return null
      return <a href={icon.href} key={index} ><FontAwesomeIcon icon={icon.img} /></a>
      }) 
    }
  </IconsContainer>
)

export default SocialIcons
