import styled from 'styled-components'
import { PageProps } from '~/@types'
import Heading from '~/components/common-styled-elements/heading'
import Title from '~/components/title-section/title'
import Container from '~/components/common-styled-elements/container'
import Anchor from '~/components/common-styled-elements/anchor'
import Link from 'next/link'
import Footer from '~/components/footer/footer'

const ErrorPageContainer = styled(Container)`
  padding: 3rem 0rem;
  text-align: center;
`

const ErrorText = styled(Heading)`
  display: inline-block;
  max-width: 800px;
  width: 100%;
`

const ErrorPage = ({ titleText, smallerTitle }: PageProps) => (
  <>
    <Title titleText={titleText} smaller={smallerTitle} />
    <ErrorPageContainer>
      <ErrorText as='h2'>Oops! Looks like you were looking for a page that doesn't exist.</ErrorText>
      <ErrorText as='h4'>
        <Link href=''>
          <Anchor onClick={() => history.back()}>Back to where you came from</Anchor>
        </Link>
      </ErrorText>
      <ErrorText as='h4'>
        <Link href='/'>
          <Anchor>Home</Anchor>
        </Link>
      </ErrorText>
    </ErrorPageContainer>
    <Footer central />
  </>
)

export default ErrorPage

export async function getStaticProps() {
  return {
    props: {
      page: 'error',
      titleText: 'That isn\'t here ☹️',
      smallerTitle: false
    }
  }
}