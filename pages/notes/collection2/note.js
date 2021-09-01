import { useState } from 'react'

// components
import Notes from '../../../components/Notes'

export default function Index () {

  const [data] = useState(JSON.stringify([


{
"html": null,
"css": null,
"js": null,
"sql": null,
"output": null,
"image-sm": null,
"image": null
},
    
{
"html 1": `<h1>hello world</h1>`,
"css": `* { background-color: #000; }`,
"js": `console.log("hello world")`,
"render": ["html 1", "css"]
}

  ]))

  return <Notes data={data} />
}

