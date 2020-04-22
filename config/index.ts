import contactSettings, { ContactSettings } from '~/config/settings/contact'

interface Settings {
  domainSettings: DomainSettings
  contactSettings: ContactSettings
}

interface DomainSettings {
  scheme: string
  domain: string
}

const settings: Settings = {
  domainSettings: {
    scheme: 'https',
    domain: 'www.griffithsa.co.uk'
  },
  contactSettings
}

export default settings
