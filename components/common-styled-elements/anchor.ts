import styled from 'styled-components'

const Anchor = styled.a`
  text-decoration: none;
  color: ${props => props.theme.links.color};
  &:hover {
    color: ${props => props.theme.links.hoverColor};
  }
  cursor: pointer;
`

export default Anchor
