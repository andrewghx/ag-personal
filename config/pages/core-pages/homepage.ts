import { PageSettings } from '~/@types'
import getDomain from '~/config/pages/helpers/getDomain'

const settings: PageSettings = {
  props: {
    page: 'index',
    metaUrl: `${getDomain()}`,
    titleText: 'Developer, Engineer, Enthusiast',
    headTitle: 'Andrew Griffiths - Web Developer, Software Engineer',
    metaDescription: 'Page description',
    metaOgImg: '/img/og.png',
    smallerTitle: false
  }
}

export default settings
