import styled from 'styled-components'
import Container from '~/components/common-styled-elements/container'
import Heading from '~/components/common-styled-elements/heading'
import { ProjectSettings } from '~/config/pages/homepage/projects'
import Image from '~/components/common-styled-elements/image'
import ContentParser from '~/components/content-parser/contentParser'
import Button from '~/components/common-styled-elements/button'
import Link from 'next/link'

const Section = styled(Container)`
  padding-top: 3rem;
  padding-bottom: 2rem;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`

const LinkSection = styled.div`
  padding-bottom: 3rem;
  margin: auto;
  max-width: 300px;
  text-align: center;
  img {
    display: inline-block;
    width: 300px;
    margin-bottom: 1rem;
  }
  a {
    width: 300px;
    text-align: center;
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    margin: initial;
  }
`

const CopySection = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    max-width: 60%;
    padding: 0rem 1rem 0rem 1rem;
  }
`

const ProjectSection: React.FC<ProjectSettings> = ({ titleText, svgUrl, svgAlt, copy, linkText }) => (
  <Section id='projects' as='section'>
    <LinkSection>
      <Image src={svgUrl} alt={svgAlt} />
      <Link href='/about'>
        <Button as='a' larger>{linkText}</Button>
      </Link>
    </LinkSection>
    <CopySection>
      <Heading>{titleText}</Heading>
      <ContentParser html={copy} />
    </CopySection>
  </Section>
)

export default ProjectSection
