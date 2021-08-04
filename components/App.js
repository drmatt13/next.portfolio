const App = ({ children }) => {
  return <>
    <style jsx>{`
      .test {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .lol {
        background: #232526;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        border-radius: 6.25px;
        height: 60vh;
        width: 80vw;
        max-width: 1100px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        position: relative;
      }
    `}</style>
    <div className="test">
      <div className="lol fade-in">
        { children }
      </div>
    </div>
  </>
}

export default App
