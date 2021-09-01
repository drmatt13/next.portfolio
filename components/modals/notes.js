import { useState } from 'react'
import Link from '../Link'

const Index = ({ toggleModal }) => {

  const [notes] = useState({
    'collection1': ['Note', 'Note2']
  })

  const [keys] = useState(Object.keys(notes))

  return <>
    <div className="fade-in">
      {keys.map((key, i) => (
        <div key={i}>
          {notes[key].map((note, j) => (
            <Link 
              key={j} 
              href={`/notes/${key}/${note.split(" ").join("-").toLowerCase()}`}
              toggleModal={toggleModal}
            >
              {note}
            </Link>
          ))}
        </div>
      ))}
    </div>
  </>
}

export default Index