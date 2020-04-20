import settings from '~/config'

const { domainSettings } = settings

const getWebsiteUrl: () => string = () => {
  return `${domainSettings.scheme}://${domainSettings.domain}`
}

export default getWebsiteUrl
