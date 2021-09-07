import dynamic from "next/dynamic"

// styles
import styles from '../styles/Modal.module.scss' 

const DynamicAppModal = dynamic(() => import('./modals/apps')),
      DynamicNoteModal = dynamic(() => import('./modals/notes')),
      DynamicContactModal = dynamic(() => import('./modals/contact')),
      DynamicAboutModal = dynamic(() => import('./modals/about')),
      DynamicSettingsModal = dynamic(() => import('./modals/settings'))

const Modal = ({ modal, toggleModal }) => {

  return <>
    <div className={styles.modal_container}>
      <div className={`${styles.modal_background} fade-in-fast`} onClick={() => toggleModal(modal)} />
      <div className={`${styles.modal} fade-in-fast`}>
        <div 
          className={`${styles.exit_btn} box-shadow1 ${true ? styles.exit_hover : ""}`} 
          onTouchStart={() => addHighlight(modalExitRef.current)}  
          onTouchEnd={() => removeHighlight(modalExitRef.current)}  
          onClick={() => toggleModal(modal)}
        >
          <i className="fas fa-times"></i>
        </div>
        {modal === 'apps' && <DynamicAppModal toggleModal={toggleModal} />}
        {modal === 'notes' && <DynamicNoteModal toggleModal={toggleModal} />}
        {modal === 'contact' && <DynamicContactModal />}
        {modal === 'about' && <DynamicAboutModal />}
        {modal === 'settings' && <DynamicSettingsModal />}
      </div>
    </div>
  </>
}

export default Modal
