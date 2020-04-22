import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '~/components/common-styled-elements/globalStyle'
import Favicons from '~/components/head/favicons'
import FontAwesome from '~/components/fontAwesome'
import Navigation from '~/components/navigation/nav'
import theme from '~/config/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Favicons />
        <FontAwesome />
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
