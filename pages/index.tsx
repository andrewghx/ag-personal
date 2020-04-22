import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import { PageProps } from '~/@types'
import { homepage } from '~/config/pages'
import IntroductionSection from '~/components/pages/homepage/introduction'

const IndexPage = ({ titleText, smallerTitle, headTitle, metaDescription, metaOgImg }: PageProps) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <IntroductionSection />
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
