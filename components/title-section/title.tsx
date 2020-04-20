import { BackgroundText, TitleText, TitleMe, TitleLaptop, TitleContainer } from '~/components/title-section/styled-title-elements'
import titleSettings from '~/config/title'

interface Props {
  smaller?: boolean
  titleText?: string
}

const Title: React.FC<Props> = props => {
  const { titleText = '' } = props
  return (
    <TitleContainer {...props}>
      <BackgroundText {...props}>{titleSettings.backgroundText}</BackgroundText>
      <TitleLaptop {...props} />
      <TitleMe {...props} />
      <TitleText {...props}>{titleText}</TitleText>
    </TitleContainer>
  )
}

export default Title
