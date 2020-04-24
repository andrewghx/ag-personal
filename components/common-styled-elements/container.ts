import styled, { ThemeProps } from 'styled-components'

const Container = styled.div<ThemeProps<any>>`
  display: block;
  margin: 0px 2%;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    margin: 0px 4%;
  }
  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    margin: 0px 7%;
  }
  @media (min-width: ${props => props.theme.breakpoints.xlMin}) {
    margin: 0px 10%;
  }
`

export default Container
