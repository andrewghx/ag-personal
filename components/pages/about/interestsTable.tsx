import { Interest } from '~/config/pages/about/interests'
import { Row, Col } from '~/components/common-styled-elements/flexRow'
import Heading from '~/components/common-styled-elements/heading'
import ContentParser from '~/components/content-parser/contentParser'

interface Props {
  interests: Interest[]
}

const JobsTable: React.FC<Props> = ({ interests }) => (
  <>
    {interests.map((interest, index) => (
      <Row key={index}>
        <Col width='30%'>
          <Heading as='h3'>{interest.name}</Heading>
        </Col>
        <Col>
          <ContentParser html={interest.copy} />
        </Col>
      </Row>
    ))}
  </>
)

export default JobsTable
