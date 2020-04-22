import styled from 'styled-components'
import Container from '~/components/common-styled-elements/container'
import Heading from '~/components/common-styled-elements/heading'
import Role from '~/components/pages/homepage/role'
import { IntroductionSettings } from '~/config/pages/homepage/introduction'

const Section = styled(Container)`
  padding-top: 1rem;
  padding-bottom: 2rem;
`

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const SectionHeading = styled(Heading)`
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    font-size: 2rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    font-size: 2.25rem;
  }
`

const IntroductionSection: React.FC<IntroductionSettings> = ({ titleText, roles }) => (
  <Section id='introduction' as='section'>
    <SectionHeading>{titleText}</SectionHeading>
    <RoleContainer>
      { roles.map((role, index) => <Role key={index} img={role.img} title={role.title} body={role.body} />) }
    </RoleContainer>
  </Section>
)

export default IntroductionSection
