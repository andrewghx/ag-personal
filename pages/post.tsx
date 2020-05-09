import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import { PageProps } from '~/@types'
import Footer from '~/components/footer/footer'
import Container from '~/components/common-styled-elements/container'
import ContentParser from '~/components/content-parser/contentParser'
import styled from 'styled-components'

const PageContainer = styled(Container)`
  padding: 2rem 0rem;
`

const PostPage = ({ titleText, smallerTitle, headTitle, metaDescription, metaOgImg, html = '' }: PageProps) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <PageContainer>
      <ContentParser html={html} />
    </PageContainer>
    <Footer />
  </>
)

export default PostPage

export async function getStaticProps() {
  return {
    props: {
      page: '',
      metaUrl: ``,
      titleText: 'A post has been made',
      metaDescription: '',
      metaOgImg: '',
      smallerTitle: true,
      html: ''
    } 
  }
}
