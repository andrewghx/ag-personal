import React from 'react'
import styled from 'styled-components'
import Image from '~/components/common-styled-elements/image'
import meHead from '~/config/svg/meHead'

interface Props {
  inline?: boolean,
  color?: string,
  monotone?: boolean
  staticImg?: boolean
}

const MeHeadDiv = styled.div<Props>`
  display: ${props => props.inline ? 'inline' : 'block'};
  width: 100%;
`

const generateColouredSVG = (monotone?: boolean, color?: string): string => {
  let headWithFills = monotone ? meHead.replace(/fill:[^;]*/g, 'fill:none') : meHead
  return headWithFills
    .replace(/{STROKE#ab7e63}/g, `stroke:#${monotone ? '000000' : 'ab7e63'}`)
    .replace(/{BLACKFILL}/g, `fill:${color ? color : '#000000'}`)
    .replace(/{FILL#ab7e63}/g, `fill:#${monotone ? '000000' : 'ab7e63'}`)
    .replace(/{FILL#d38c83}/g, `fill:#${monotone ? '000000' : 'd38c83'}`)
}

const MeHead: React.FC<Props> = props => {
  if (props.staticImg) return <MeHeadDiv {...props}><Image alt='Cartoon of my head' fillContainer src='img/svg/andrew-head.svg' /></MeHeadDiv>
  const chosenSvg = generateColouredSVG(props.monotone, props.color)
  return <MeHeadDiv {...props} dangerouslySetInnerHTML={{ __html: chosenSvg }} />
}

export default MeHead
