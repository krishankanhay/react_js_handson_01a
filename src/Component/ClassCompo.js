import React, { Component } from 'react'
import './Style.css'

export class ClassCompo extends Component {
  render() {
    return (
      <div className='comp2'>
        <h2>This is created using class Component</h2>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    )
  }
}

export default ClassCompo

