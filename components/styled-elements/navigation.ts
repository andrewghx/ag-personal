import styled, { ThemeProps } from 'styled-components'
import Logo from '../logo'
import Anchor from './anchor'
import navConfig from '../../config/navigation/navSettings'
const { hamburgerSize, hamburgerReductionFactor, hamburgerPositionFromBottom, mobileMenuWidth, navMobileTransition, desktopMenuHeight } = navConfig

interface Props extends ThemeProps<any> {
  open?: boolean
}

const NavOuter = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.xsMax}) {
    width: 100%;
    z-index: 1;
    position: absolute;
    border-bottom: none;
    background: none;
  }
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    position: fixed;
    z-index: 1;
    margin-bottom: ${`${desktopMenuHeight}rem`};
    background: ${props => props.theme.colors.light};
    height: ${`${desktopMenuHeight}rem`};
    display: flex;
    align-items: center;
    width: 100%;
  }
`

const NavLogo = styled(Logo)`
  display: none;
  width: ${`${desktopMenuHeight - 0.5}rem`};
  position: relative;
  padding-top: 0.4rem;
  padding-left: 0.25rem;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    display: block;
  }
`

const MobileLogo = styled(Logo)`
  width: ${`${desktopMenuHeight - 0.5}rem`};
  position: absolute;
  right: 0px;
  padding-top: 0.4rem;
  padding-right: 0.4rem;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    display: none;
  }
`

const NavLinks = styled.ul<Props>`
  overflow: hidden;
  list-style: none;
  @media (max-width: ${props => props.theme.breakpoints.xsMax}) {
    z-index: 1;
    position: fixed;
    min-width: ${`${mobileMenuWidth}%`};
    transition-duration: ${`${navMobileTransition}ms`};
    top: ${`calc(100% - ${hamburgerSize * (hamburgerPositionFromBottom + 0.5)}vw)`};
    background: ${props => props.theme.colors.primary};
    padding: 1rem;
    margin: 0px;
    left: ${props => props.open ? `${100 - mobileMenuWidth}%` : '100%'};
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 1px 2px 4px ${props => props.theme.boxShadowColor};
  }
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    padding-top: 0.25rem;
    margin-left: auto;
  }
`

const NavItem = styled.li`
  overflow: hidden;
  @media (max-width: ${props => props.theme.breakpoints.xsMax}) {
    &:not(:first-child) {
      padding-top: 1rem;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    display: inline;
    padding-right: 1rem;
  }
`

const NavLink = styled(Anchor)`
  @media (max-width: ${props => props.theme.breakpoints.xsMax}) {
    display: block;
    color: ${props => props.theme.colors.light};
    &:hover {
      color: ${props => props.theme.colors.light};
    }
    i {
      padding-right: 1rem;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    i {
      display: none;
    }
    span {
      display: inline-block;
      &:hover {
        transform: scale(1.1);
        transition-duration: 125ms;
      }
    }
  }
`

const Hamburger = styled.div<Props>`
  z-index: 2;
  width: ${props => props.open ? `${hamburgerSize / hamburgerReductionFactor}vw` : `${hamburgerSize}vw`};
  height: ${props => props.open ? `${hamburgerSize / hamburgerReductionFactor}vw` : `${hamburgerSize}vw`};
  transition-duration: ${`${navMobileTransition}ms`};
  position: fixed;
  display: block;
  top: ${props => props.open ? `calc(100% - ${hamburgerSize * (hamburgerPositionFromBottom + 0.4)}vw)` : `calc(100% - ${hamburgerSize * hamburgerPositionFromBottom}vw)`};
  left: ${props => props.open ? `calc(95% - ${hamburgerSize / hamburgerReductionFactor}vw)` : `calc(95% - ${hamburgerSize}vw)`};
  background: ${props => props.theme.colors.primary};
  border-radius: 100%;
  box-shadow: 1px 2px 4px ${props => props.theme.boxShadowColor};
  color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.open ? `1rem` : `2rem`};
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    display: none;
  }
`

const Offset = styled.div`
  height: 0px;
  @media (min-width: ${props => props.theme.breakpoints.smMin}) {
    height: ${`${desktopMenuHeight}rem`};
  }
`

export { Offset, Hamburger, NavLink, NavItem, NavLinks, NavLogo, NavOuter, MobileLogo }
