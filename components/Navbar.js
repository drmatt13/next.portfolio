import { useState, useEffect, useRef } from 'react'
import Link from './Link'

// components
import Modal from './Modal'

// styles
import styles from '../styles/Navbar.module.scss'

const Navbar = (props) => {

  // check if mobile device
  const [mobile] = useState(
    typeof window !== 'undefined' ?
      /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      :
      null
  )

  // modal
  const [modal, setModal] = useState(null)

  const navRef = useRef(),
        homeRef = useRef(),
        codeRef = useRef(),
        noteRef = useRef(),
        contactRef = useRef(),
        aboutRef = useRef(),
        settingsRef = useRef();

  useEffect(() => { if (!mobile) navRef.current.classList.add(styles.web) }, [])

  const startTouch = div => { div.classList.add(styles.mobile_hover) }
  const endTouch = div => { div.classList.remove(styles.mobile_hover) }

  const toggleModal = x => {
    if (modal) {
      navRef.current.querySelector(`.nav-${modal}`).classList.remove(styles.selected)
      if (modal === x) {
        setModal(null)
        return null
      }
    }
    if (!x) {
      setModal(null)
      return null
    }
    navRef.current.querySelector(`.nav-${x}`).classList.add(styles.selected)
    setModal(x)
  }

  return <>
    {modal && <Modal modal={modal} toggleModal={toggleModal} { ...props } />}
    <nav className={`${styles.nav} fade-in no-select`} ref={navRef} >
      <Link href={`/`} toggleModal={toggleModal}>
        <div
          ref={homeRef}
          onTouchStart={() => startTouch(homeRef.current)}
          onTouchEnd={() => endTouch(homeRef.current)}
          onClick={() => toggleModal(null)}
        >
          <i className="fas fa-home" />
        </div>
      </Link>
      <div
        ref={codeRef}
        className="nav-apps"
        onTouchStart={() => startTouch(codeRef.current)}
        onTouchEnd={() => endTouch(codeRef.current)}
        onClick={() => toggleModal("apps")}
      >
        <i className="fas fa-laptop-code" />
      </div>
      <div
        ref={noteRef}
        className="nav-notes"
        onTouchStart={() => startTouch(noteRef.current)}
        onTouchEnd={() => endTouch(noteRef.current)}
        onClick={() => toggleModal("notes")}
      >
        <i className="fas fa-list-ul" />
      </div>
      <div
        ref={contactRef}
        className="nav-contact"
        onTouchStart={() => startTouch(contactRef.current)}
        onTouchEnd={() => endTouch(contactRef.current)}
        onClick={() => toggleModal("contact")}
      >
        <i className="far fa-address-card" />
      </div>
      <div
        ref={aboutRef}
        className="nav-about"
        onTouchStart={() => startTouch(aboutRef.current)}
        onTouchEnd={() => endTouch(aboutRef.current)}
        onClick={() => toggleModal("about")}
      >
        <i className="fas fa-question" />
      </div>
      <div
        ref={settingsRef}
        className="nav-settings"
        onTouchStart={() => startTouch(settingsRef.current)}
        onTouchEnd={() => endTouch(settingsRef.current)}
        onClick={() => toggleModal("settings")}
      >
        <i className="fas fa-cog" />
      </div>
    </nav>
    <style>{`      
      @media screen and (max-width: 450px) {
        .app-master-container {
          height: calc(100% - 45px);
        }
      }
    `}</style>
  </>
}

export default Navbar
