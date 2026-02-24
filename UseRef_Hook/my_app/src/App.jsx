import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //Second Use case with Useref
  let btnRef=useRef()
    useEffect(() => {
     btnRef.current.style.backgroundColor="gray";
    },[])
    
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    
    </>
  )
}

export default App
