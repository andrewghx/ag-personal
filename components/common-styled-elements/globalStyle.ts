import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rockwell&display=swap');
  html {
    font-family: ${props => props.theme.fontFamily};
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    color: ${props => props.theme.colors.text};
    height: 100%;
  }
  body {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
  }
`

export default GlobalStyle
