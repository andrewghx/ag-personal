import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  primary?: boolean
}

const FullWidthSection = styled.section<Props>`
  display: block;
  width: 100%;
  background: ${props => props.primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${props => props.primary ? props.theme.colors.secondary : 'inherit'};
  box-shadow: 0px 4px 4px ${props => props.theme.boxShadowColor};
`

export default FullWidthSection
