import React from 'react'
import styled from 'styled-components'
import Image from '~/components/common-styled-elements/image'
import theme from '~/config/theme'
import me from '~/config/svg/meSvg'

interface Props {
  inline?: boolean,
  color?: string
  staticImg?: boolean
}

const MeDiv = styled.div<Props>`
  display: ${props => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const Me: React.FC<Props> = props => {
  if (props.staticImg) return <MeDiv {...props}><Image alt='Cartoon of me' fillContainer src='/img/svg/andrew.svg' /></MeDiv>
  const replacedSVG = me.replace(/{COLOR}/g, props.color || theme.colors.primary)
  return <MeDiv {...props} dangerouslySetInnerHTML={{ __html: replacedSVG }} />
}

export default Me
