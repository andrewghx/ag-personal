export interface PageProps {
  page: string
  metaRobots?: string
  metaUrl?: string
  headTitle?: string
  metaDescription?: string
  metaOgImg?: string
  titleText: string
  smallerTitle: boolean
}

export interface PageSettings {
  props: PageProps
}

