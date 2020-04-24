import styled from 'styled-components'
import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import Footer from '~/components/footer/footer'
import Container from '~/components/common-styled-elements/container'
import Heading from '~/components/common-styled-elements/heading'
import SocialIcons from '~/components/socialIcons'
import ContentParser from '~/components/content-parser/contentParser'
import { PageProps } from '~/@types'
import theme from '~/config/theme'

const ContentContainer = styled(Container)`
  padding-top: 2rem;
`

const IconContainer = styled.div`
  padding-top: 2rem;
  overflow: hidden;
  text-align: center;
  span {
    display: inline-block;
    font-size: 2rem;
    @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
      font-size: 4rem;
    }
  }
  p {
    padding-bottom: 1rem;
    @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
      padding-bottom: 2rem;
    }
  }
`

const ContactPage = ({ titleText, smallerTitle, headTitle, metaDescription, metaOgImg, contentHeading, sections }: PageProps) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <ContentContainer>
      <Heading as='h2'>{contentHeading}</Heading>
      <IconContainer>
        <ContentParser html={sections.socialMedia.copy} />
        <SocialIcons exclusions={sections.socialMedia.excludeIcons} iconColor={theme.colors.primary} />
      </IconContainer>
    </ContentContainer>
    <Footer />
  </>
)

export default ContactPage

export async function getStaticProps() {
  const { contact } = await import('~/config/pages')
  return {
    ...contact
  }
}
