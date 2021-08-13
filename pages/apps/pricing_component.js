import App from '../../apps/Pricing Component/App'
import AppContainer from '../../components/AppContainer'
import generateStaticProps from '../../utilities/generateStaticProps'

export async function getStaticProps() {
  return generateStaticProps()
}

export default function index () { 
  return <AppContainer><App /></AppContainer>
}