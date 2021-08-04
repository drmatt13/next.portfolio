import App from '../../components/App'
import Component from '../../apps/App1/Component'
import generateStaticProps from '../../utilities/generateStaticProps'

export async function getStaticProps() {
  return generateStaticProps()
}

export default function index () { 
  return <App><Component /></App>
}