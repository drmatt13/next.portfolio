import { useEffect } from 'react'
import Link from '../Link'

const index = ({ noteCollections, notes, toggleModal }) => {

  useEffect(() => {
    // console.log(notes);
  }, [])

  return (
    <div className="fade-in">
      {notes[0].map((note, i) => (
          <Link 
            key={i} 
            href={`/notes/collection1/${note.split(".")[0]}`}
            toggleModal={toggleModal}
          >
            {note.split(".")[0]}
          </Link>
      ))}
    </div>
  )
}

export default index