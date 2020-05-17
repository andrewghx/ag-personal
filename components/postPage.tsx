import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import { PageProps } from '~/@types'
import Footer from '~/components/footer/footer'
import Container from '~/components/common-styled-elements/container'
import ContentParser from '~/components/content-parser/contentParser'
import styled from 'styled-components'

const PageContainer = styled(Container)`
  padding: 2rem 0rem;
  div.image-container {
    margin: auto;
    max-width: 1200px;
  }
  div.video-container {
    margin: auto;
    max-width: 1200px;
  }
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
