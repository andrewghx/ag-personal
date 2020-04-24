import styled from 'styled-components'
import { Skill } from '~/config/pages/about/skills'

const List = styled.ul`
  width: 100%;
  text-align: left;
  display: inline-block;
  padding: 0;
  margin: 0;
  list-style: none;
`

const SkillItem = styled.li`
  overflow: hidden;
  position: relative;
  display: inline-block;
  background: ${props => props.theme.colors.primary};
  min-width: 90%;
  border-radius: 4rem;
  border: ${props => `1px solid ${props.theme.colors.primary}`};
  color: ${props => props.theme.colors.light};
  padding: 0.5rem 1rem 0.25rem 1rem;
  margin: 0rem 0% 0.5rem 0rem;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    margin-right: 2%;
    &:nth-of-type(even) {
      margin-right: 0%;
    }
    min-width: 42%;
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    min-width: 40%;
  }
  @media (min-width: ${props => props.theme.breakpoints.xlMin}) {
    min-width: 26%;
    &:nth-of-type(even) {
      margin-right: 2%
    }
    &:nth-of-type(3n) {
      margin-right: 0%;
    }
  }
`

const Circle = styled.span<any>`
  display: block;
  position: absolute;
  left: calc(100% - 30px);
  top: 0px;
  box-shadow: -4px 0px 20px 5px ${props => props.theme.boxShadowColor};
  border-radius: 50%;
  background: ${props => props.theme.colors.secondary};
  height: 30px;
  width: 30px;
`

interface Props {
  skills: Skill[]
}

const SkillsList: React.FC<Props> = ({ skills }) => (
  <List>
    {skills.map((skill: Skill, index: number) => (
      <SkillItem key={index}>{skill.name}<Circle competency={skill.competency} /></SkillItem>
    ))}
  </List>
)

export default SkillsList
