import config from '~/config'

const { domainSettings } = config

const defaults = {
  title: 'Andrew Griffiths - Web Developer, Software Engineer',
  description: 'Default description',
  url: `${domainSettings.scheme}://${domainSettings.scheme}`,
  img: '/img/og.png',
  robots: 'index, follow'
}

export default defaults
