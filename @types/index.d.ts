export interface PageProps {
  page: string
  metaRobots?: string
  metaUrl?: string
  headTitle?: string
  metaDescription?: string
  metaOgImg?: string
  titleText: string
  smallerTitle: boolean
  contentHeading?: string
  sections?: any
}

export interface PageSettings {
  props: PageProps
}

export interface SocialMediaIcon {
  href: string
  img: string
}

