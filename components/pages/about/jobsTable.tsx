import { Fragment } from 'react'
import { Organisation } from '~/config/pages/about/work'
import { Row, Col } from '~/components/common-styled-elements/flexRow'
import Heading from '~/components/common-styled-elements/heading'
import ContentParser from '~/components/content-parser/contentParser'

interface Props {
  jobs: Organisation[]
}

const JobsTable: React.FC<Props> = ({ jobs }) => (
  <>
    {jobs.map((job, index) => (
      <Row key={index}>
        <Col width='30%'>
          <Heading as='h3'>{job.name}</Heading>
          <span>{job.location}</span>
        </Col>
        <Col>
          {job.roles.map((role, index) =>(
            <Fragment key={index}>
              <Heading as='h4'>{role.title} ({role.dates})</Heading>
              <ContentParser html={role.copy} />
            </Fragment>
          ))}
        </Col>
      </Row>
    ))}
  </>
)

export default JobsTable
