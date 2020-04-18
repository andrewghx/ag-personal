import styled, { ThemeProps } from 'styled-components'
import Laptop from '~/components/graphical-components/laptop'
import Me from '~/components/graphical-components/me'
import cssSettings from '~/config/title/cssSettings'

interface Props extends ThemeProps<any>  {
  smaller?: boolean
}

const { 
  height, 
  titleTextSize,
  bgTextSize,
  laptopFromRight,
  characterFromLeft,
  characterWidth,
  characterFromTop,
  titleTextFromLeft,
  titleTextFromTop,
  laptopWidth,
  laptopFromTop,
  lineFromTop,
  lineHeight
} = cssSettings

const TitleContainer = styled.div<Props>`
  position: relative;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  height: ${props => props.smaller ? `${height.smaller}${height.unit}` : `${height.xs}${height.unit}`};
  overflow: hidden;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    height: ${props => props.smaller ? `${height.smaller || 0 * 1.1}${height.unit}` : `${height.default}${height.unit}`};
  }
`

const TitleLaptop = styled(Laptop)<Props>`
  width: ${props => props.smaller ? `${laptopWidth.smaller}${laptopWidth.unit}` : `${laptopWidth.xs || 0 * 0.5}${laptopWidth.unit}`};
  display: inline-block;
  position: absolute;
  left: ${props => props.smaller ? `calc(50% - ${laptopWidth.smaller || 0 / 2}${laptopFromTop.unit})` : `35%` };
  top: ${props => props.smaller ? `${laptopFromTop.smaller}${laptopFromTop.unit}` : `${laptopFromTop.default || 0 * 4.5}${laptopFromTop.unit}`};
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    left: ${props => props.smaller ? `calc(100% - ${laptopWidth.smaller || 0 + (laptopFromRight.smaller || 0)}${laptopFromRight.unit})` : `25%` };
    width: ${props => props.smaller ? `${laptopWidth.smaller}${laptopWidth.unit}` : `${laptopWidth.sm || 0 * 0.9}${laptopWidth.unit}`};
    top: ${props => props.smaller ? `${laptopFromTop.default}${laptopFromTop.unit}` : `${laptopFromTop.sm || 0 * 4.5}${laptopFromTop.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    left: ${props => props.smaller ? `calc(100% - ${laptopWidth.smaller || 0 + (laptopFromRight.smaller || 0)}${laptopFromRight.unit})` : `calc(100% - ${laptopWidth.default || 0 + (laptopFromRight.default || 0)}${laptopFromRight.unit})` };
    width: ${props => props.smaller ? `${laptopWidth.smaller}${laptopWidth.unit}` : `${laptopWidth.default}${laptopWidth.unit}`};
    top: ${`${laptopFromTop.default}${laptopFromTop.unit}`};
  }
`

const TitleMe = styled(Me)<Props>`
  width: ${`${characterWidth.xs}${characterWidth.unit}`};
  display: ${props => props.smaller ? 'none': 'inline-block' };
  position: absolute;
  top: ${`${characterFromTop.default}${characterFromTop.unit}`};
  left: ${`${characterFromLeft.xs}${characterFromLeft.unit}`};
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    width: ${`${characterWidth.default}${characterWidth.unit}`};
    left: ${`${characterFromLeft.sm}${characterFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    left: ${`${characterFromLeft.default}${characterFromLeft.unit}`};
  }
`

const TitleText = styled.span<Props>`
  width: ${props => props.smaller ? '100%' : 'initial'};
  text-align: ${props => props.smaller ? 'center' : 'initial'};
  font-weight: bolder;
  margin: 0px;
  padding: 0px;
  color: ${props => props.theme.colors.light};
  position: absolute;
  font-size: ${`${titleTextSize.xs}${titleTextSize.unit}`};
  top: ${props => props.smaller ? `${(height.smaller || 0 / 2)}${titleTextFromTop.unit}` : `${titleTextFromTop.xs}${titleTextFromTop.unit}`};
  left: ${props => props.smaller ? '0px' : `${titleTextFromLeft.xs || 0 * 1.05}${titleTextFromLeft.unit}`};
  text-shadow: 1px 2px 4px ${props => props.theme.boxShadowColor};
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    font-size: ${`${titleTextSize.sm}${titleTextSize.unit}`};
    top: ${props => props.smaller ? `${(height.smaller || 0 * 1.1 / 2) - (titleTextSize.sm || 0 * 0.75 / 2)}${titleTextFromTop.unit}` : `${titleTextFromTop.sm || 0 * 1.2}${titleTextFromTop.unit}`};
    left: ${props => props.smaller ? '0px' : `${titleTextFromLeft.sm || 0 * 1.2}${titleTextFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    font-size: ${`${titleTextSize.md}${titleTextSize.unit}`};
    top: ${props => props.smaller ? `${(height.smaller || 0 * 1.1 / 2) - (titleTextSize.md || 0 * 0.75 / 2)}${titleTextFromTop.unit}` : `${titleTextFromTop.md}${titleTextFromTop.unit}`};
    left: ${props => props.smaller ? '0px' : `${titleTextFromLeft.md}${titleTextFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    font-size: ${`${titleTextSize.lg}${titleTextSize.unit}`};
    top: ${props => props.smaller ? `${(height.smaller || 0 * 1.1 / 2) - (titleTextSize.lg || 0 * 0.75 / 2)}${titleTextFromTop.unit}` : `${titleTextFromTop.lg}${titleTextFromTop.unit}`};
    left: ${props => props.smaller ? '0px' : `${titleTextFromLeft.lg || 0 * 1.1}${titleTextFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.xlMin}) {
    font-size: ${`${titleTextSize.xl}${titleTextSize.unit}`};
    top: ${props => props.smaller ? `${(height.smaller || 0 * 1.1 / 2) - (titleTextSize.xl || 0 * 0.75 / 2)}${titleTextFromTop.unit}` : `${titleTextFromTop.xl}${titleTextFromTop.unit}`};
    left: ${props => props.smaller ? '0px' : `${titleTextFromLeft.xl || 0 * 1.2}${titleTextFromLeft.unit}`};
  }
`

const Line = styled.hr`
  display: none;
  width: ${`calc(100% - ${titleTextFromLeft.default}${titleTextFromLeft.unit})`};
  background: ${props => props.theme.colors.light};
  height: ${`${lineHeight.default}${lineHeight.unit}`};
  border: none;
  position: absolute;
  top: ${`${lineFromTop.xs}${lineFromTop.unit}`};
  left: ${`${titleTextFromLeft.xs}${titleTextFromLeft.unit}`};
  box-shadow: 1px 2px 4px ${props => props.theme.boxShadowColor};
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    top: ${`${lineFromTop.sm}${lineFromTop.unit}`};
    left: ${`${titleTextFromLeft.sm}${titleTextFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.mdMin}) {
    display: block;
    top: ${`${lineFromTop.md}${lineFromTop.unit}`};
    left: ${`${titleTextFromLeft.md}${titleTextFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.lgMin}) {
    top: ${`${lineFromTop.lg}${lineFromTop.unit}`};
    left: ${`${titleTextFromLeft.lg || 0 * 1.1}${titleTextFromLeft.unit}`};
  }
  @media (min-width: ${props => props.theme.breakpoints.xlMin}) {
    top: ${`${lineFromTop.xl}${lineFromTop.unit}`};
    left: ${`${titleTextFromLeft.xl || 0 * 1.2}${titleTextFromLeft.unit}`};
  }
`

const BackgroundText = styled.span<Props>`
  font-family: 'Menlo';
  font-size: ${props => props.smaller ? `${bgTextSize.smaller}${bgTextSize.unit}` : `${bgTextSize.xs}${bgTextSize.unit}`};
  margin: 0px;
  padding: 0px;
  color: ${props => props.theme.colors.light};
  position: absolute;
  right: ${`-${bgTextSize.default || 0 * 0.189}px`};
  top: ${`${(height.default || 0 / 2) - (bgTextSize.default || 0 / 1.8)}px`};
  opacity: 0.1;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    font-size: ${`${bgTextSize.default}${bgTextSize.unit}`};
    font-size: ${props => props.smaller ? `${bgTextSize.smaller || 0 * 1.1}${bgTextSize.unit}` : `${bgTextSize.default}${bgTextSize.unit}`};
  }
`

export { BackgroundText, Line, TitleText, TitleMe, TitleLaptop, TitleContainer }
