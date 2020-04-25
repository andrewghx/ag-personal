import NextLink from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX

interface Props {
  [key: string]: any
  href: string
}

const Link: React.FC<Props> = ({ href, ...rest }) => (
  <NextLink href={href} as={`${assetPrefix}${href}`} {...rest} />
)

export default Link