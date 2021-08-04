import Head from 'next/head'

// components
import Navbar from '../components/Navbar'

// styles
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="theme-color" content="#7856c7" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css"></link>
    </Head>

    <div className="app-master-container">
      <Component {...pageProps} />      
    </div>

    <Navbar {...pageProps} />
  </>
}

export default MyApp
