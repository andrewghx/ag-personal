import styled from 'styled-components'
import SocialIcons from '~/components/socialIcons'

const FooterContainer = styled.div`
  text-align: center;
  padding: 2rem 0rem;
  margin: 0px 0.5rem;
  font-size: 0.8rem;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: flex;
    padding-bottom: 0rem;
  }
  span {
    display: inline-block;
    max-width: 100px;
  }
`

const Footer = () => (
  <FooterContainer>
    <p>© 2020 Andrew Griffiths</p>
    <span><SocialIcons /></span>
  </FooterContainer>
)

export default Footer
