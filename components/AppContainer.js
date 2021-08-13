const App = ({ children }) => {
  return <>
    <style jsx>{`
      .app {
        height: 100vh;
        width: 100%;
        position: relative;
      }
    `}</style>
    <div className="app fade-in">
      { children }
    </div>
  </>
}

export default App
