import styled from 'styled-components'
import Container from '~/components/common-styled-elements/container'
import Heading from '~/components/common-styled-elements/heading'

const RoleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Item = styled.table`
  max-width: 300px;
  text-align: center;
  img {
    max-width: 200px;
    max-height: 170px;
  }
  thead {
    min-height: 200px;
  }
`

interface RoleProps {
  img: string
  title: string
  body: string
}

const Role: React.FC<RoleProps> = ({ img, title, body }) => (
  <Item>
    <thead>
      <th>
        <img alt={title} src={img} />
      </th>
    </thead>
    <tbody>
      <tr>
        <td>
          <h3>{title}</h3>
        </td>
      </tr>
      <tr>
        <td>
          {body}
        </td>
      </tr>
    </tbody>
  </Item>
)

const IntroductionSection: React.FC = () => (
  <Container id='introduction' as='section'>
    <Heading>Hi! I'm Andrew, I'm a...</Heading>
    <RoleContainer>
      <Role img='/img/svg/developer.svg' title='Web Developer' body='Designing and building modern, responsive, optimised and intuitive websites since school days' />
      <Role img='/img/svg/engineer.svg' title='Software Engineer' body='Designing, implementing and maintaining full stack web apps for a living' />
    </RoleContainer>
  </Container>
)

export default IntroductionSection
