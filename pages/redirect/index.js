import { useRouter } from 'next/router'
import { useEffect } from 'react'

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