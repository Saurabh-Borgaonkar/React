import React,{useEffect} from 'react'
import './Navbar.css'
const Navbar = ({color}) => {

    //Run on every render
    useEffect(() => {
      alert("hey i wil rum every render");
    },)
  
    //Run only on first render
    useEffect(() => {
      alert("hey Welcome to page");
    },[]) 
//Exaple of unmount function
      useEffect(() => {  
        alert('Exple of unmount functoion');
    return () => {
      alert('Unmounted');
    }
  }, [])
  
  return (
    <div>
      <p>I am navabar {color} new</p>
      <ul>
        <li>Service</li>
      <li>About Us</li>
      <li></li>
      </ul>
    </div>
  )
}

export default Navbar
