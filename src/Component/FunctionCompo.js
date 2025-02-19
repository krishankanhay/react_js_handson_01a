import React from 'react'
import './Style.css'


function FunctionCompo() {
  return (
    <div className='comp1'>
      <h2>This is created using functional Component</h2>
      <p>This is done using external CSS</p>
      <p style={{ color: "blue" }}>This is done using inline CSS</p>
    </div>
  )
}

export { FunctionCompo }


