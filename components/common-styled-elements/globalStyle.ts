import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-family: ${props => props.theme.fontFamily};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    color: ${props => props.theme.colors.text}
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle
