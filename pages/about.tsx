import styled from 'styled-components'
import Title from '~/components/title-section/title'
import Head from '~/components/head/head'
import Footer from '~/components/footer/footer'
import Container from '~/components/common-styled-elements/container'
import BasicsSection from '~/components/pages/about/basics'
import WorkSection from '~/components/pages/about/work'
import SkillsSection from '~/components/pages/about/skills'
import InterestsSection from '~/components/pages/about/interests'
import { PageProps } from '~/@types'

const ContainerStyle = styled(Container)`
section {
  margin-top: 3.5rem;
}
`

const AboutPage = ({ titleText, smallerTitle, headTitle, metaDescription, metaOgImg, sections }: PageProps) => (
  <>
    <Head description={metaDescription} title={headTitle} img={metaOgImg} />
    <Title titleText={titleText} smaller={smallerTitle} />
    <ContainerStyle>
      <BasicsSection {...sections.basics}/>
      <SkillsSection {...sections.skills}/>
      <WorkSection {...sections.work}/>
      <InterestsSection {...sections.interests}/>
    </ContainerStyle>
    <Footer />
  </>
)

export default AboutPage

export async function getStaticProps() {
  const { about } = await import('~/config/pages')
  return {
    ...about
  }
}
