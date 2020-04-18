import config from '~/config'

const { domainSettings } = config

const content = `User-Agent: *
Disallow:
Sitemap: ${domainSettings.scheme}://${domainSettings.domain}/sitemap.xml
`
export default content
