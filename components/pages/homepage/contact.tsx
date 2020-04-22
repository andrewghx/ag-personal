import styled from 'styled-components'
import Section from '~/components/common-styled-elements/section'
import Container from '~/components/common-styled-elements/container'
import Heading from '~/components/common-styled-elements/heading'
import Button from '~/components/common-styled-elements/button'
import SocialIcons from '~/components/socialIcons'
import Link from 'next/link'
import { ContactSectionSettings } from '~/config/pages/homepage/contact'

const ContentContainer = styled(Container)`
  display: block;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`

const ContentSection = styled.div`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:nth-of-type(1) {
    a {
      width: 300px;
      font-weight: bold;
    }
  }
  &:nth-of-type(2) {
    font-size: 2rem;
    span {
      display: inline-block;
      max-width: 400px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    max-width: 50%;
    &:nth-of-type(2) {
      font-size: 3rem;
      padding: 0rem 2.5rem;
    }
  }
`

const ContactHeading = styled(Heading)`
  @media (max-width: ${props => props.theme.breakpoints.smMax}) {
    padding-bottom: 1rem;
  }
`

const AboutSection: React.FC<ContactSectionSettings> = ({ titleText, linkText, linkHref, socialMediaExclusions }) => (
  <Section id='about' primary>
    <Container>
      <ContactHeading as='h2'>{titleText}</ContactHeading>
    </Container>
    <ContentContainer>
      <ContentSection>
        <Link href={linkHref}><Button as='a' secondary larger>{linkText}</Button></Link>
      </ContentSection>
      <ContentSection>
        <span><SocialIcons exclusions={socialMediaExclusions} /></span>
      </ContentSection>
    </ContentContainer>
  </Section>
)

export default AboutSection
