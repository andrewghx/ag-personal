import React from 'react'
import styled from 'styled-components'
import theme from '~/config/theme'
import me from '~/config/svg/meSvg'

interface Props {
  inline?: boolean,
  color?: string
}

const MeDiv = styled.div`
  display: ${(props: Props) => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const Me: React.FC<Props> = props => {
  const replacedSVG = me.replace(/{COLOR}/g, props.color || theme.primary)
  return <MeDiv {...props} dangerouslySetInnerHTML={{ __html: replacedSVG }} />
}

export default Me
