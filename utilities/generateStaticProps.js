import fs from 'fs'
export default function (data=null) {
  let notes = [],
    noteCollections = fs.readdirSync(`${process.cwd()}/pages/notes`),
    apps = fs.readdirSync(`${process.cwd()}/pages/apps`)
  for (let collection of noteCollections) notes.push(fs.readdirSync(`${process.cwd()}/pages/notes/${collection}`))
  return { props: { apps, noteCollections, notes, data } }
}