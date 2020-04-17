import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
config.autoAddCss = false 
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faTimes)
import GlobalStyle from '~/components/styled-elements/globalStyle'
import theme from '~/config/theme'
import Navigation from '~/components/nav'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
