interface Page {
  url: string
  changefreq?: string
  priority?: number
}

const pages: Page[] = [
  {
    url: '/page/path', 
    changefreq: 'daily', 
    priority: 0.3
  }
]

export default pages
