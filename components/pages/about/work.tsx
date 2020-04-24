import { Panel, PanelHeading, PanelBody } from '~/components/common-styled-elements/panel'
import { WorkSettings } from '~/config/pages/about/work'
import JobsTable from '~/components/pages/about/jobsTable'

const WorkSection: React.FC<WorkSettings> = ({ titleText, jobs }) => (
  <Panel as='section'>
    <PanelHeading>
      {titleText}
    </PanelHeading>
    <PanelBody>
      <JobsTable jobs={jobs} />
    </PanelBody>
  </Panel>
)

export default WorkSection
