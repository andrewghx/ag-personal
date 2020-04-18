import * as fs from 'fs'
import * as path from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import config from '~/config'
import pages from '~/config/seo/site-map'
import findRoot from 'find-root'

type GenerateSitemapFunction = () => void

const { domainSettings } = config

const generateSitemap: GenerateSitemapFunction = async () => {
  const __root = findRoot(__dirname)
  const siteMapStream = new SitemapStream({ hostname: `${domainSettings.scheme}://${domainSettings.domain}` })
  for (const page of pages) siteMapStream.write(page)
  siteMapStream.end()
  const siteMap = await streamToPromise(siteMapStream)

  try {
    fs.writeFileSync(path.join(__root, 'public/sitemap.xml'), siteMap.toString(), 'utf8')
  } catch (err) { console.log(err) }
}

export default generateSitemap
