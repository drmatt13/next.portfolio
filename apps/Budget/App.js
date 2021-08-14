import { useState } from 'react'
import Head from 'next/head'
import styles from './App.module.scss'

// components
import Calander from './components/Calander'

const App = () => {

  // populate from local storage
  const [events, setEvents] = useState([
    {"payment": {
        "start": "9/3/21",
        "stop": "9/10/21",
        "recuring": "weekly"
      }
    }
  ])
  const [state, setState] = useState({
    "savings": null,
    "debt": null
  })

  return <>
    <Head>
      <title>Budget</title>
    </Head>
    <div className={styles.app}>
      <Calander events={events} />
      <Results />
    </div>
  </>
}

export default App
