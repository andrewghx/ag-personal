import Title from '~/components/title-section/title'

interface Props {
  page: string
  titleText: string
}

const IndexPage = ({ page, titleText }: Props) => (
  <>
    <Title titleText={titleText} />
    <h2>Hello this page is the {page} page</h2>
  </>
)

export default IndexPage

export async function getStaticProps() {
  return {
    props: {
      page: 'index',
      titleText: 'This is the index'
    }
  }
}
