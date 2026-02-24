import { useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //first use case of useEffect
  let a=useRef(0)
    useEffect(() => {
      a.current=a.current+1;
      console.log("rendering...."+a.current);
    },)
    
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    
    </>
  )
}

export default App
