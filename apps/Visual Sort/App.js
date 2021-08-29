import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import styles from './App.module.scss'

const App = () => {

  // const [divs, setDivs] = useState()
  // const [animation, setAnimation] = useState()
  // const [position, setPosition] = useState([0, 1])

  // const sortRef = useRef()

  // const swapStyles = (el1, el2) => {
  //   const temp = el1.getAttribute("style")
  //   el1.setAttribute("style", el2.getAttribute("style"))
  //   el2.setAttribute("style", temp)
  // }
  
  // const randomize = x => {
  //   setAnimation(cancelAnimationFrame(animation))
  //   sortRef.current.innerHTML = ""
  //   for (let i=0; i<x; i++) {
  //     const div = document.createElement("div")
  //     div.setAttribute("style", `height: ${Math.floor(Math.random() * 1001)/10}%;`)
  //     sortRef.current.appendChild(div)
  //   }
  //   setPosition([0, 1])
  // }

  // // [1, 2]
  // // [1, 4, 2, 4, 6]
  // const sort = () => {
  //   console.log(divs[position[1]].offsetHeight, divs[position[0]].offsetHeight);
  //   if (divs[position[1]].offsetHeight < divs[position[0]].offsetHeight) {
  //     console.log('swap');
  //     swapStyles(divs[position[1]], divs[position[0]])
  //     position[0] !== 0 ? setPosition(position[0]-1, position[1]) : setPosition(position[1], position[1]+1)
  //   } else {
  //     console.log(position[1], position[1]+1)
  //     setPosition(position[1], position[1]+1)
  //   }
  //   setAnimation(requestAnimationFrame(sort))
  // }

  // const start = () => {
  //   setAnimation(requestAnimationFrame(sort))
  // }

  // const stop = () => {
  //   setAnimation(cancelAnimationFrame(animation))
  // }

  // generate sort_container

  const [state, setState] = useState(2)
  const stateRef = useRef(state)

  useEffect(() => {
    stateRef.current++
    console.log(stateRef.current);
    // randomize(50)
    // setDivs(sortRef.current.childNodes)
  }, [])

  return <>
    <Head>
      <title>Visual Sort</title>
    </Head>
    <div className={styles.app}>
      <div className={styles.app_container}>
        {/* <div className={styles.sort_container} ref={sortRef} /> */}
        {/* <button onClick={() => randomize(50)}>randomize</button>         */}
        {/* <button onClick={start}>sort</button> */}
        {/* <button onClick={stop}>pause</button> */}
      </div>
    </div>
  </>
}

export default App
