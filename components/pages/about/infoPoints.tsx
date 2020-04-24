import styled from 'styled-components'
import { InfoPoint } from '~/config/pages/about/basics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  infoPoints: InfoPoint[]
}

const InfoPointList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  padding-bottom: 1rem;
`

const StyledInfoPoint = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  svg, i {
    font-size: 1.5rem;
    min-width: 40px;
    padding-right: 1rem;
  }
`

const InfoPoints: React.FC<Props> = ({ infoPoints }) => (
  <InfoPointList>
    {infoPoints.map((infoPoint: InfoPoint, index: number) => (
      <StyledInfoPoint key={index}>
        <FontAwesomeIcon icon={infoPoint.img} />
        <b>{infoPoint.text}</b>
      </StyledInfoPoint>
    ))}
  </InfoPointList>
)

export default InfoPoints
