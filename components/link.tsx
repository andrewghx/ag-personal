import NextLink from 'next/link'
import assetPrefix from '~/config/assetPrefix'

interface Props {
  [key: string]: any
  href: string
}

const Link: React.FC<Props> = ({ href, ...rest }) => (
  <NextLink href={href} as={`${assetPrefix}${href}`} {...rest} />
)

export default Link