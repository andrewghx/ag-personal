import { PageSettings } from '~/@types'
import getDomain from '~/config/pages/helpers/getDomain'
import introduction from '~/config/pages/homepage/introduction'
import about from '~/config/pages/homepage/about'
import projects from '~/config/pages/homepage/projects'
import contact from '~/config/pages/homepage/contact'
import assetPrefix from '~/config/assetPrefix'

const settings: PageSettings = {
  props: {
    page: 'index',
    metaUrl: `${getDomain()}`,
    titleText: 'Developer, Engineer, Enthusiast',
    headTitle: 'Andrew Griffiths - Web Developer, Software Engineer',
    metaDescription: 'Andrew Griffiths, web developer and software engineer in kent, UK. Personal website all about me.',
    metaOgImg: `${assetPrefix}/img/og.png`,
    smallerTitle: false,
    sections: {
      introduction,
      about,
      projects,
      contact
    }
  }
}

export default settings
