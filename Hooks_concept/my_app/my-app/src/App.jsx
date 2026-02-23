import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {

  const [count,setCount]=useState(0);
  const [first, setfirst] = useState(0)
  const [color,setColor]=useState(0)

  //Run only certain value change 
   useEffect(() => {
    alert("Count was changed");
    setColor(color+1);
  }, [count])
  useEffect(() => {
   alert("first was changed");
  }, [first])
  
  return (
    <>
    {/* <Navbar color={"navy"+'blue' + color}/> */}
      <div>
        <div>{count}</div>
        <button onClick={()=>{ setCount(count+1)}}>count</button>
      </div>
    </>
  )
}

export default App
