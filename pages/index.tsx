import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import ContentParser from '~/components/content-parser/contentParser'
import { PageProps } from '~/@types'
import { homepage } from '~/config/pages'

const IndexPage = ({ page, titleText, smallerTitle, headTitle, metaDescription, metaOgImg }: PageProps) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <h2>Hello this page is the {page} page</h2>
    <ContentParser html={'<b addstyle="color:green;">Hello</b><hr />'} />
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
