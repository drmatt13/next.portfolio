import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import styles from './App.module.scss'

const App = () => {

  const sortRef = useRef()
  const styleRef = useRef()
  const buttonsRef = useRef()

  const [state, setState] = useState(false)
  const [range, setRange] = useState(100)
  const [s] = useState({ "animation": undefined, "el": undefined, "range": undefined, "pos": undefined })

  // fix later
  const onChange = e => {
    // const stringify = e.target.value.toString()
    // if (stringify.length > 4 || stringify == "") return false
    setRange(e.target.value < 1000 ? e.target.value : 1000)
  }

  const swapNodes = (node1, node2) => {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}
  
  const reset = x => {
    cancelAnimationFrame(s.animation)
    sortRef.current.innerHTML = ""
    styleRef.current.innerHTML = `
    @keyframes example {
      from {
        -webkit-filter: invert(100%);
        filter: invert(100%);
      }
      to {
        -webkit-filter: invert(0);
        filter: invert(0);
      }
    }
    .${styles.sort} > div {
      animation: example .5s linear;
    }
    `
    for (let i=0; i<x; i++) {
      const div = document.createElement("div")
      div.setAttribute("style", `height: ${Math.floor(Math.random() * 1001)/10}%`)
      sortRef.current.appendChild(div)
      styleRef.current.innerHTML += `.${styles.sort} > div:nth-of-type(${i+1}) {
        background-color: hsl(calc(360 / ${x} * ${i}), 100%, 50%);
      }`
    }
    s.pos = [0, 0]
    s.range = range
    for (let node of buttonsRef.current.childNodes) {
      node.classList.remove(styles.disabled)
    }
    setState(false)
  }

  const bubbleSort = () => {
    if (s.pos[0]+1 === +s.range - s.pos[1]) s.pos = [0, s.pos[1]+1]
    if (+s.range - s.pos[1] === 1) return true
    if (s.el[s.pos[0]].offsetHeight > s.el[s.pos[0]+1].offsetHeight)
      swapNodes(s.el[s.pos[0]], s.el[s.pos[0]+1])
    s.pos[0]++
    s.animation = requestAnimationFrame(bubbleSort)
  }

  const insertionSort = () => {
    if (s.pos[1] === +s.range-1) return true
    if (s.el[s.pos[0]].offsetHeight > s.el[s.pos[0]+1].offsetHeight) {
      swapNodes(s.el[s.pos[0]], s.el[s.pos[0]+1])
      s.pos[0]--
      if (s.pos[0] === -1) s.pos = [s.pos[1]+1, s.pos[1]+1]
    } else 
      s.pos = [s.pos[1]+1, s.pos[1]+1]
    s.animation = requestAnimationFrame(insertionSort)
  }

  const mergeSort = () => {
    console.log('merge sort')
    // s.animation = requestAnimationFrame(mergeSort)
  }

  const quickSort = () => {
    console.log('quick sort')
    // s.animation = requestAnimationFrame(quickSort)
  }

  const play = () => {
    let selection
    for (let node of buttonsRef.current.childNodes) {
      if(!node.classList.contains(styles.selected)) {
        node.classList.add(styles.disabled)
      } else {
        selection = node.innerHTML
      }
    }
    setState(true)
    switch (selection) {
      case "Bubble Sort":
        s.animation = requestAnimationFrame(bubbleSort)
        break;
      case "Insertion Sort":
        s.animation = requestAnimationFrame(insertionSort)
        break;
      case "Merge Sort":
        s.animation = requestAnimationFrame(mergeSort)
        break;
      case "Quick Sort":
        s.animation = requestAnimationFrame(quickSort)
        break;
      default:
        break;
    }
  }

  const pause = () => {
    setState(false)
    cancelAnimationFrame(s.animation)
  }

  const toggleSelection = e => {
    if (!state && ! e.target.classList.contains(styles.disabled)) {
      buttonsRef.current.querySelector(`.${styles.selected}`).classList.remove(styles.selected)
      e.target.classList.add(styles.selected)
    }
  }

  useEffect(() => {
    reset(range)
    s.el = sortRef.current.childNodes
  }, [])

  return <>
    <Head>
      <title>Visual Sort</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossOrigin="anonymous" />
    </Head>
    <style ref={styleRef} global="true" />
    <div className={styles.app}>
      <div className={styles.app_container}>
        <div className={styles.sort_container}>
          <div className={styles.play}>
            {state && <i className="fas fa-pause" onClick={pause} />}
            {!state && <i className="fas fa-play" onClick={play} />}
          </div>
          <div className={styles.sort} ref={sortRef} />
        </div>
        <div className={styles.input_container}>
          <input type="number" value={range} onChange={onChange} />
          {/* <input ref={inputRef} type="number" /> */}
          <div className={styles.btn} onClick={() => reset(range)}>Reset</div>
          <div ref={buttonsRef}>
            <div className={`${styles.btn} ${styles.selected}`} onClick={toggleSelection}>Bubble Sort</div>
            <div className={styles.btn} onClick={toggleSelection}>Insertion Sort</div>
            <div className={styles.btn} onClick={toggleSelection}>Merge Sort</div>
            <div className={styles.btn} onClick={toggleSelection}>Quick Sort</div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default App