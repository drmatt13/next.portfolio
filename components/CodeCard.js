import { useState, useEffect, useCallback, useRef } from "react"
import 'highlight.js/styles/base16/material.css'; 
import styles from '../styles/CodeCard.module.scss'
import hljs from 'highlight.js';

const CodeCard = ({ data }) => {

  const [height, setHeight] = useState(200)
  const [previousTab, setPreviousTab] = useState(0)
  const [selectedTab, setSelectedTab] = useState(0)
  const containerRef = useRef()
  const wrapperRef = useRef()
  const headerRef = useRef()

  const deconstructLanguage = useCallback((language) => {
    const object = {
      "c": ["devicon-c-plain colored", "c"],
      "c++": ["devicon-cplusplus-plain colored", "c++"],
      "html": ["devicon-html5-plain colored", "html"],
      "css": ["devicon-css3-plain colored", "css"],
      "javascript": ["devicon-javascript-plain colored", "js"],
      "nodejs": ["devicon-nodejs-plain colored", "js"],
      "reactjs": ["devicon-react-original colored", "js"],
      "nextjs": ["devicon-nextjs-original colored", "js"],
      "graphql": ["devicon-graphql-plain colored", "js"],
      "sql": ["devicon-postgresql-plain colored", "sql"],
      "mongodb": ["devicon-mongodb-plain colored", "js"],
      "firebase": ["devicon-firebase-plain colored", "js"],
      "python": ["devicon-python-plain colored", "python"],
      "java": ["devicon-java-plain colored", "java"],
      "typescript": ["devicon-typescript-plain colored", "typescript"],
      "sass": ["devicon-sass-original colored", "scss"],
      "php": ["devicon-php-plain colored", "php"],
      "npm": ["devicon-npm-original-wordmark colored", null],
      "git": ["devicon-git-plain colored", null],
      "docker": ["devicon-docker-plain colored", null],
      "output": ["fas fa-code", null],
      "media":  ["fas fa-image", null]
    }
    return (language in object) ? object[language] : ["fas fa-question", null]
  }, []) 

  const generateCodeCard = useCallback(() => {
    let count = 0
    for (let [key, value] of Object.entries(data)) {
      const [style, language] = deconstructLanguage(key.split(" ")[0])
      if (value !== null) {

        // create tabs
        const div = document.createElement('div')
        if (key === 'render') {
          div.setAttribute("data", count)
          div.innerHTML = `<i class="devicon-codepen-plain" style="color: limegreen;"></i>render`
        } else if (["image-sm", "image-md", "image-lg"].includes(key)) {

          // image functionality ------- delete this note after

        } else{
          div.setAttribute("data", count)
          div.innerHTML = `<i class="${style}"></i>${key}`
        }
        div.addEventListener("click", () => {setSelectedTab(parseInt(div.getAttribute("data")))})
        headerRef.current.appendChild(div)
        
        // generate tabs content
        const pre = document.createElement('pre')
        pre.style.display = "none"
        pre.innerHTML = language ? hljs.highlight(value, { language }).value : value
        wrapperRef.current.appendChild(pre)


      }
      count++
    }
    // if there is a tab, set first tab to active
    if (wrapperRef.current.childNodes[0]) {
      headerRef.current.childNodes[0].classList.add(styles.selected)
      wrapperRef.current.childNodes[0].style.display = null
    }
  }, [selectedTab, setSelectedTab])

  const render = useCallback(() => {

  }, [])

  useEffect(generateCodeCard, [])

  useEffect(() => {
    // toggle tabs
    headerRef.current.childNodes[previousTab].removeAttribute("class")
    headerRef.current.childNodes[selectedTab].classList.add(styles.selected)
    // toggle pre elements
    wrapperRef.current.childNodes[previousTab].style.display = "none"
    wrapperRef.current.childNodes[selectedTab].style.display = null
    // store tab that was modified
    setPreviousTab(selectedTab)
    // modify height of pre tag
    wrapperRef.current.style.display = null
    if (wrapperRef.current.childNodes[selectedTab].offsetHeight <= 200)
      setHeight(200)
    else if (wrapperRef.current.childNodes[selectedTab].offsetHeight < 500) 
      setHeight(wrapperRef.current.childNodes[selectedTab].offsetHeight)
    else 
      setHeight(500)
    wrapperRef.current.style.display = "flex"
  }, [selectedTab])

  return <>
    <style jsx>{`
      .${styles.wrapper} {
        height: ${height}px
      }
    `}</style>
    <style global="true">{`
      .hljs-comment {
        color: grey;
      }
    `}</style>
    <div className={`${styles.cardContainer} fade-in`} ref={containerRef}>
      <div className={`${styles.header} no-select`} ref={headerRef} />
      <div className={styles.wrapper} ref={wrapperRef} />
    </div>
  </>
}

export default CodeCard
