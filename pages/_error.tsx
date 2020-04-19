import Title from '~/components/title-section/title'

interface Props {
  page: string
  titleText: string
}

const ErrorPage = ({ titleText }: Props) => (
  <>
    <Title titleText={titleText} />
    <h2>Oops! Looks like you were looking for a page that doesn't exist, why not head on back to the home page?</h2>
  </>
)

export default ErrorPage

export async function getStaticProps() {
  return {
    props: {
      page: 'error',
      titleText: 'That isn\'t here ☹️'
    }
  }
}