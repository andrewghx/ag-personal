import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  secondary?: boolean
}

const Button = styled.button<Props>`
  border-radius: ${props => props.theme.borderRadius};
  padding: 0.5rem 1rem 0.25rem 1rem;
  background: ${props => props.secondary ? props.theme.colors.secondary : props.theme.colors.primary };
  color: ${props => props.secondary ? props.theme.colors.primary : props.theme.colors.secondary };
  box-shadow: 1px 2px 4px ${props => props.theme.boxShadowColor};
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  border-style: none;
`

export default Button
