import Head from 'next/head'
const assetPrefix = process.env.ASSET_PREFIX

const Favicons = () => (
  <Head>
    <link rel='apple-touch-icon' sizes='57x57' href={`${assetPrefix}img/icons/apple-icon-57x57.png`} />
    <link rel='apple-touch-icon' sizes='60x60' href={`${assetPrefix}/img/icons/apple-icon-60x60.png`} />
    <link rel='apple-touch-icon' sizes='72x72' href={`${assetPrefix}/img/icons/apple-icon-72x72.png`} />
    <link rel='apple-touch-icon' sizes='76x76' href={`${assetPrefix}/img/icons/apple-icon-76x76.png`}/>
    <link rel='apple-touch-icon' sizes='114x114' href={`${assetPrefix}/img/icons/apple-icon-114x114.png`}/>
    <link rel='apple-touch-icon' sizes='120x120' href={`${assetPrefix}/img/icons/apple-icon-120x120.png`}/>
    <link rel='apple-touch-icon' sizes='144x144' href={`${assetPrefix}/img/icons/apple-icon-144x144.png`}/>
    <link rel='apple-touch-icon' sizes='152x152' href={`${assetPrefix}/img/icons/apple-icon-152x152.png`}/>
    <link rel='apple-touch-icon' sizes='180x180' href={`${assetPrefix}/img/icons/apple-icon-180x180.png`}/>
    <link rel='icon' type='image/png' sizes='192x192'  href={`${assetPrefix}/img/icons/android-icon-192x192.png`}/>
    <link rel='icon' type='image/png' sizes='32x32' href={`${assetPrefix}/img/icons/favicon-32x32.png`}/>
    <link rel='icon' type='image/png' sizes='96x96' href={`${assetPrefix}/img/icons/favicon-96x96.png`}/>
    <link rel='icon' type='image/png' sizes='16x16' href={`${assetPrefix}/img/icons/favicon-16x16.png`}/>
    <link rel='manifest' href={`${assetPrefix}/manifest.json`}/>
    <meta key='msapplication-TileColor' name='msapplication-TileColor' content='#ffffff'/>
    <meta key='msapplication-TileImage' name='msapplication-TileImage' content={`${assetPrefix}/img/icons/ms-icon-144x144.png`}/>
    <meta key='theme-color' name='theme-color' content='#ffffff'/>
  </Head>

)

export default Favicons
