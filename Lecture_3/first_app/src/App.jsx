import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Count from './components/Count'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Count/>
      <Card tittle="Tittle_1"   discp="This is tittle 1 discription"/>
       <Card tittle="Tittle_2"   discp="This is tittle 2 discription"/>
        <Card tittle="Tittle_3"   discp="This is tittle 3 discription"/>
         <Card tittle="Tittle_4"   discp="This is tittle 4 discription"/>
          <Card tittle="Tittle_5"   discp="This is tittle 5 discription"/>
           <Card tittle="Tittle_6"   discp="This is tittle 6 discription"/>
      <Footer/>
    </>
  )
}

export default App
