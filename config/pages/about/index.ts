import { PageSettings } from '~/@types'
import getDomain from '~/config/pages/helpers/getDomain'
import basics from '~/config/pages/about/basics'
import skills from '~/config/pages/about/skills'
import work from '~/config/pages/about/work'
import interests from '~/config/pages/about/interests'

const settings: PageSettings = {
  props: {
    page: 'about',
    metaUrl: `${getDomain()}/about.html`,
    titleText: 'About Me',
    headTitle: 'A Griffiths - Web Developer, Software Engineer - About Me',
    metaDescription: 'Page description',
    metaOgImg: 'img/og.png',
    smallerTitle: true,
    sections: {
      basics,
      skills,
      work,
      interests
    }
  }
}

export default settings
