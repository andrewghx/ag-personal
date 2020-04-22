import styled from 'styled-components'

const RoleTable = styled.table`
  padding: 2.5rem 0rem;
  max-width: 300px;
  text-align: center;
  img {
    max-width: 200px;
    max-height: 170px;
  }
  thead {
    min-height: 200px;
  }
  h3 {
    padding-top: 1.5rem;
  }
`

interface Props {
  img: string
  title: string
  body: string
}

const Role: React.FC<Props> = ({ img, title, body }) => (
  <RoleTable>
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
  </RoleTable>
)

export default Role
