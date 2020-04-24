import { Panel, PanelHeading, PanelBody } from '~/components/common-styled-elements/panel'
import { InterestsSettings } from '~/config/pages/about/interests'
import InterestsTable from '~/components/pages/about/interestsTable'

const InterestsSection: React.FC<InterestsSettings> = ({ titleText, interests }) => (
  <Panel as='section'>
    <PanelHeading>
      {titleText}
    </PanelHeading>
    <PanelBody>
      <InterestsTable interests={interests} />
    </PanelBody>
  </Panel>
)

export default InterestsSection
