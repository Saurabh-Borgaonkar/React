import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.tittle}</h1>
      <p>{props.discp}</p>
    </div>
  )
}

export default Card
