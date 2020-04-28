import Head from 'next/head'
import defaults from '~/config/seo/meta-defaults'

const assetPrefix = process.env.ASSET_PREFIX

interface Props {
  title?: string
  description?: string
  url?: string
  img?: string
  robots?: string
}

const PageHead: React.FC<Props> = ({ title = defaults.title, description = defaults.description, url = defaults.url, img = defaults.img, robots = defaults.robots }) => (
  <Head>
    <title key='title'>{title}</title>

    <meta key='description' name='description' content={description} />
    <meta key='robots' name='robots' content={robots} />
    <meta key='viewport' name='viewport' content='width=device-width, initial-scale=1.0' />

    <meta key='og:title' property='og:title' content={title} />
    <meta property='og:url' content={url} />
    <meta property='og:type' content='website' />
    <meta property='og:description' content={description} />
    <meta property='og:image' content={img} />

    <meta name='twitter:card' content='summary' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:url' content={url} />
    <meta name='twitter:image' content={img} />

    <meta name="google-site-verification" content="j_kyBcloP-5dKTFicDl3sa8Ehi7jK7HWtY0khpA79sI" />

    {
      process.env.NODE_ENV === 'production' && (
        <>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164780591-1"></script>
          <script async src={`${assetPrefix}/js/google.js`}>
          </script>
        </>
      )
    }
  </Head>
)

export default PageHead
