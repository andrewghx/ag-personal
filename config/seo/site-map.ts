interface Page {
  url: string
  changefreq?: string
  priority?: number
}

const pages: Page[] = [
  {
    url: '/', 
    changefreq: 'weekly', 
    priority: 1
  },
  {
    url: '/about', 
    changefreq: 'monthly', 
    priority: 0.9
  },
  {
    url: '/contact', 
    changefreq: 'monthly', 
    priority: 0.5
  },
]

export default pages
