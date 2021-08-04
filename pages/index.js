import generateStaticProps from "../utilities/generateStaticProps"

export async function getStaticProps() {
  return generateStaticProps()
}

export default function Home() {
  return <>
    {/* <style jsx>{`.test {height: 200vh;}`}</style> */}
    {/* <div className="test" /> */}
  </>
}
