import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import { PageProps } from '~/@types'
import { homepage } from '~/config/pages'
import IntroductionSection from '~/components/pages/homepage/introduction'
import AboutSection from '~/components/pages/homepage/about'
import ProjectSection from '~/components/pages/homepage/projects'
import ContactSection from '~/components/pages/homepage/contact'

const IndexPage = ({ titleText, smallerTitle, headTitle, metaDescription, metaOgImg, sections }: PageProps) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <IntroductionSection {...sections.introduction} />
    <AboutSection {...sections.about} />
    <ProjectSection {...sections.projects} />
    <ContactSection {...sections.contact} />
  </>
)

export default IndexPage

export async function getStaticProps() {
  return {
    props: {
      ...homepage.props
    }
  }
}
