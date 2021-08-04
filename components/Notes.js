import { useState } from "react"
import CodeCard from '../components/CodeCard'

export default function Notes ({data}) {
  const [notes] = useState(JSON.parse(data))
  return <div style={{
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