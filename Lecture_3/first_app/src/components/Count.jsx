import React, { useState } from 'react'
import './Count.css'
const Count = () => {
    const [count,setvalue]=useState(0);
  return (
    <div className='counter'>
              <div>{count}</div>
        <button type="button" className='btn' onClick={()=>{setvalue(count+1)}}>Click</button>
        </div>
  )
}

export default Count
