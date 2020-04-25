import styled from 'styled-components'
import Section from '~/components/common-styled-elements/section'
import Container from '~/components/common-styled-elements/container'
import Heading from '~/components/common-styled-elements/heading'
import ContentParser from '~/components/content-parser/contentParser'
import Button from '~/components/common-styled-elements/button'
import Link from '~/components/link'
import { AboutSettings } from '~/config/pages/homepage/about'

const ContentContainer = styled(Container)`
  padding-bottom: 2rem;
  h4 {
    padding-bottom: 2rem;
  }
  display: block;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    padding-bottom: 0rem;
    display: flex;
    align-items: center;
  }
`

const ContentSection = styled.div`
  &:nth-of-type(2) {
    text-align: center;
    padding: 0px;
  }
  padding-bottom: 2rem;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    flex: 1 1 auto;
    max-width: 50%;
    &:nth-of-type(2) {
      padding: 0rem 2.5rem;
    }
    padding-bottom: 0rem;
  }
`

const AboutSection: React.FC<AboutSettings> = ({ titleText, aboutCopy, linkHeading, buttonText }) => (
  <Section id='about'>
    <ContentContainer>
      <ContentSection>
        <Heading as='h2'>{titleText}</Heading>
        <ContentParser html={aboutCopy} />
      </ContentSection>
      <ContentSection>
        <Heading as='h4'>{linkHeading}</Heading>
        <Link href='/about'>
          <Button as='a' larger>{buttonText}</Button>
        </Link>
      </ContentSection>
    </ContentContainer>
  </Section>
)

export default AboutSection
