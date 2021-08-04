import generateStaticProps from "../../utilities/generateStaticProps"
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export async function getStaticProps() {
  return generateStaticProps()
}

export default function index() {
  const r = useRouter(),
  f = async () => {
    await r.push(`/${
      Object.keys(r.query)[0] 
        ? Object.keys(r.query)[0].split(':').join('/') 
        : ''
    }`) 
  }
  useEffect(f, [])
  return <></>
}