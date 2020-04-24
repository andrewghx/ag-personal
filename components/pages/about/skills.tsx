import styled from 'styled-components'
import { Panel, PanelHeading, PanelBody } from '~/components/common-styled-elements/panel'
import { SkillSettings } from '~/config/pages/about/skills'
import Laptop from '~/components/graphical-components/laptop'
import SkillsList from '~/components/pages/about/skillsList'

const FlexPanelBody = styled(PanelBody)`
  display: flex;
  justify-content: space-evenly;
`

const SkillContainer = styled.div`
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    width: 70%;
  }
`

const StyledLaptop = styled(Laptop)`
  padding: 0rem 1rem;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: block;
    width: 30%;
    max-width: 300px;
  }
`

const SkillsSection: React.FC<SkillSettings> = ({ titleText, skills }) => (
  <Panel as='section'>
    <PanelHeading>
      {titleText}
    </PanelHeading>
    <FlexPanelBody>
      <SkillContainer>
        <SkillsList skills={skills} />
      </SkillContainer>
      <StyledLaptop staticImg />
    </FlexPanelBody>
  </Panel>
)

export default SkillsSection
