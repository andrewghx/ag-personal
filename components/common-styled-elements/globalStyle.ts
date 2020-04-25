import { createGlobalStyle } from 'styled-components'

const assetPrefix = process.env.ASSET_PREFIX

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rockwell, Arial';
      src: url(${`${assetPrefix}/fonts/Rockwell.woff`});
      src: url(${`${assetPrefix}/fonts/Rockwell.woff2`});
      src: url(${`${assetPrefix}/fonts/Rockwell.ttf`});
  }
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
