import { useState } from "react"
import CodeCard from '../components/CodeCard'

export default function Notes ({data}) {
  const [notes] = useState(data)
  return <div 
  className="background fade-in"
  style={{
    minHeight: "100%",
    width: "100vw",
    display: 'flex',
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "125px"
  }}>
    {notes && notes.map((data, key) => (
      <CodeCard key={key} data={data} />
    ))}
  </div>
}