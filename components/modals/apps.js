import { useState } from 'react'
import Image from 'next/image'
import Link from '../Link'

// styles
import styles from '../../styles/Modal-apps.module.scss'

// Images
import advancedTodos from '../../public/images/apps/Advanced Todos.png'
import pricingComponent from '../../public/images/apps/Pricing Component.png'
import VisualSort from '../../public/images/apps/Visual Sort.png'
import PathFinder from '../../public/images/apps/Path Finder.png'

const AppsModal = ({ toggleModal }) => {

  const [apps] = useState([
    "Advanced Todos",
    "Pricing Component",
    "Visual Sort",
    "Path Finder",
    "Pricing Component"
  ])

  return <>
    {/* <style jsx global>{`

    `}</style> */}
    <div className={`${styles.modal_container} fade-in`}>
      {apps.map((app, i) => (
        <Link 
          key={i} 
          href={`/apps/${app.split(" ").join("-").toLowerCase()}`}
          toggleModal={toggleModal}
        >
          <div className={styles.app_container}>
            <div className={styles.image_container}>
              <div>
                {app === "Advanced Todos" && <Image className="Image" src={advancedTodos} layout="fill" />}
                {app === "Pricing Component" && <Image className="Image" src={pricingComponent} layout="fill" />}
                {app === "Visual Sort" && <Image className="Image" src={VisualSort} layout="fill" />}
                {app === "Path Finder" && <Image className="Image" src={PathFinder} layout="fill" />}
              </div>
            </div>
            <div className={styles.test}>
              {app}
            </div>
          </div>
        </Link> 
      ))}
    </div>
  </>
}

export default AppsModal