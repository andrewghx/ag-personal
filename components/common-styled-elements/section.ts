import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  primary?: boolean
}

const FullWidthSection = styled.section<Props>`
  padding: 3rem 0rem;
  display: block;
  width: 100%;
  background: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => props.primary ? props.theme.colors.secondary : 'inherit'};
  box-shadow: 0px 4px 4px ${props => props.theme.boxShadowColor};
  margin-bottom: 10px;
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.primary ? props.theme.colors.secondary : props.theme.colors.primary};
  }
`

export default FullWidthSection
