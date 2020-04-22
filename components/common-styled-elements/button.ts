import styled, { ThemeProps } from 'styled-components'

interface Props extends ThemeProps<any> {
  secondary?: boolean
  larger?: boolean
}

const Button = styled.button<Props>`
  display: inline-block;
  border-radius: ${props => props.theme.borderRadius};
  padding: ${props => props.larger ? '1rem 1.5rem 0.75rem 1.5rem' : '0.5rem 1rem 0.25rem 1rem'};
  background: ${props => props.secondary ? props.theme.colors.secondary : props.theme.colors.primary };
  color: ${props => props.secondary ? props.theme.colors.primary : props.theme.colors.secondary };
  box-shadow: 1px 2px 4px ${props => props.theme.boxShadowColor};
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  border-style: none;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
`

export default Button
