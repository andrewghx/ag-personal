import { PageSettings } from '~/@types'
import getDomain from '~/config/pages/helpers/getDomain'
import assetPrefix from '~/config/assetPrefix'

const settings: PageSettings = {
  props: {
    page: '/project',
    metaUrl: `${getDomain()}/project.html`,
    titleText: 'Projects',
    headTitle: 'A Griffiths - Web Developer, Software Engineer - Projects',
    metaDescription: 'Andrew Griffiths, web developer and software engineer in kent, UK. Personal website all about me. Take a look at some of the projects I have worked on.',
    metaOgImg: `${assetPrefix}/img/og.png`,
    smallerTitle: false,
  }
}

export default settings
