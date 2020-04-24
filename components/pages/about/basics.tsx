import styled from 'styled-components'
import { Panel, PanelHeading, PanelBody } from '~/components/common-styled-elements/panel'
import { IntroductionSettings } from '~/config/pages/about/basics'
import Me from '~/components/graphical-components/me'
import InfoPoints from '~/components/pages/about/infoPoints'
import ContentParser from '~/components/content-parser/contentParser'

const FlexContainer = styled.section`
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: flex;
    align-content: stretch;
  }
`

const MeStyled = styled(Me)`
  max-width: 100px;
  display: inline-block;
  padding-left: 1rem;
  padding-right: 2.5rem;
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    max-width: 150px;
    padding-left: 1rem;
    padding-right: 4rem;
    position: relative;
  }
`

const MeLargerDevices = styled(MeStyled)`
  @media (max-width: ${props => props.theme.breakpoints.smMax}) {
    display: none;
  }
`

const MeSmallerDevices = styled(MeStyled)`
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: none;
  }
`

const StyledPanel = styled(Panel)`
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    width: 100%;
  }
`

const ContentContainer = styled.div`
  display: flex;
  align-content: stretch;
`

const ContentArea = styled.div`
  width: 100%;
`

const BasicsSection: React.FC<IntroductionSettings> = ({ titleText, copy, infoPoints }) => (
  <FlexContainer as='section'>
    <MeLargerDevices staticImg />
    <StyledPanel>
      <PanelHeading noBackground>
        {titleText}
      </PanelHeading>
      <PanelBody>
        <ContentContainer>
          <MeSmallerDevices staticImg />
          <ContentArea>
            <InfoPoints infoPoints={infoPoints} />
            <ContentParser html={copy} />
          </ContentArea>
        </ContentContainer>
      </PanelBody>
    </StyledPanel>
  </FlexContainer>
)

export default BasicsSection
