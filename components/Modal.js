import dynamic from "next/dynamic"

const DynamicAppModal = dynamic(() => import('./modals/apps')),
      DynamicNoteModal = dynamic(() => import('./modals/notes')),
      DynamicContactModal = dynamic(() => import('./modals/contact')),
      DynamicAboutModal = dynamic(() => import('./modals/about')),
      DynamicSettingsModal = dynamic(() => import('./modals/settings'))

const Modal = ({ modal, toggleModal, apps, noteCollections, notes }) => {

  let ModalComponent
  
  switch (modal) {
    case "apps":
      ModalComponent = <DynamicAppModal apps={apps} toggleModal={toggleModal} />
      break

    case "notes":
      ModalComponent = <DynamicNoteModal noteCollections={noteCollections} notes={notes} toggleModal={toggleModal} />
      break

    case "contact":
      ModalComponent = <DynamicContactModal />
      break

    case "about":
      ModalComponent = <DynamicAboutModal />
      break
      
    case "settings":
      ModalComponent = <DynamicSettingsModal />
      break

    default:
      break
  }

  return <>
    <style>{`
      .modal-container {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .modal-background {
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: #0008;
        
      }

      .modal {
        position: relative;
        height: 65vh;
        max-height: 500px;
        min-width: 300px;
        width: 60vw;
        max-width: 800px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 20px;
      }

      .modal-exit-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 25px;
        width: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        transition: background-color 0.075s ease-in;
      }
      
      .modal-exit-hover:hover {
        cursor: pointer;
        background-color: rgba(255, 99, 71, 0.85);
      }
      
      .mobile-exit-highlight {
        background-color: rgba(255, 99, 71, 0.85);
      }
    `}</style>
    <div className="modal-container">
      <div className="modal-background fade-in-fast" onClick={() => toggleModal(modal)} />
      <div className="modal fade-in">
        <div 
          className={`modal-exit-btn box-shadow1 ${true ? "modal-exit-hover" : ""}`} 
          onTouchStart={() => addHighlight(modalExitRef.current)}  
          onTouchEnd={() => removeHighlight(modalExitRef.current)}  
          onClick={() => toggleModal(modal)}
        >
          <i className="fas fa-times"></i>
        </div>
        {ModalComponent}
      </div>
    </div>
  </>
}

export default Modal
